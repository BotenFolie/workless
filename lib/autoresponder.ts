// Génération et envoi de l'email de réponse automatique aux leads
// Appelé via after() — s'exécute après que la réponse HTTP est déjà envoyée au client

import Anthropic from '@anthropic-ai/sdk'
import { Resend } from 'resend'

const MODEL = 'claude-haiku-4-5-20251001'

// ── Mapping labels lisibles ───────────────────────────────────────────────────

const HEURES_LABELS: Record<string, string> = {
  'moins-5h': 'moins de 5h par semaine',
  '5-10h':    '5 à 10h par semaine',
  '10-20h':   '10 à 20h par semaine',
  '20h+':     'plus de 20h par semaine',
  'moins-3h': 'moins de 3h par semaine',
  '3-8h':     '3 à 8h par semaine',
  '8-20h':    '8 à 20h par semaine',
}

const PERSONNES_LABELS: Record<string, string> = {
  '1-2':  '1 à 2 personnes',
  '3-5':  '3 à 5 personnes',
  '5-10': '5 à 10 personnes',
  '10+':  'plus de 10 personnes',
}

const EQUIPE_LABELS: Record<string, string> = {
  'solo': 'vous seul',
  '2-5':  '2 à 5 personnes',
  '6-15': '6 à 15 personnes',
  '15+':  'plus de 15 personnes',
}

const PROBLEME_LABELS: Record<string, string> = {
  'reporting':    'analyse et reporting',
  'emails':       'rédaction et gestion des emails',
  'decisions':    'prises de décision lentes',
  'organisation': 'organisation interne',
  'autre':        'autres tâches répétitives',
}

const INTENTION_LABELS: Record<string, string> = {
  'temps':     'gagner du temps',
  'pression':  'réduire la pression sur l\'équipe',
  'decisions': 'accélérer les décisions',
  'recruter':  'éviter de recruter',
}

const MATURITE_LABELS: Record<string, string> = {
  'jamais':        'n\'a jamais essayé d\'automatiser',
  'partiellement': 'a déjà essayé partiellement',
  'echec':         'a essayé sans résultat convaincant',
}

const OBJECTIF_LABELS: Record<string, string> = {
  'tester':      'tester une première amélioration rapide',
  'ameliorer':   'améliorer l\'efficacité globale',
  'transformer': 'transformer l\'organisation en profondeur',
  'temps':       'gagner du temps immédiatement',
  'conversion':  'améliorer la conversion commerciale',
  'erreurs':     'réduire les erreurs et les pertes',
}

const ENJEU_LABELS: Record<string, string> = {
  'leads':        'convertir plus de leads entrants',
  'relances':     'structurer les relances commerciales',
  'reporting':    'automatiser le reporting interne',
  'documents':    'traiter les documents comptables',
  'reactivation': 'réactiver la base clients dormante',
}

const OUTIL_LABELS: Record<string, string> = {
  'crm-erp':    'dispose d\'un CRM ou ERP en place',
  'tableurs':   'utilise des tableurs / Excel',
  'mal-config': 'a des outils mais mal configurés',
  'rien':       'n\'a rien de structuré',
}

const PROFILE_LABELS: Record<string, string> = {
  'high':   'profil haute valeur — fort potentiel d\'automatisation',
  'medium': 'profil intermédiaire — gains rapides identifiés',
  'low':    'profil faible — quelques pistes ciblées',
}

const PAGE_LABELS: Record<string, string> = {
  '/automatisation-leads':            'automatisation des leads entrants',
  '/relance-commerciale-automatique': 'relance commerciale automatique',
  '/reporting-automatique':           'reporting automatique',
  '/reactivation-clients-automatique':'réactivation clients dormants',
  '/traitement-factures-automatique': 'traitement de factures automatique',
}

// ── Prompts ───────────────────────────────────────────────────────────────────

function buildDiagnosticPrompt(data: Record<string, unknown>): string {
  const prenom     = data.prenom as string
  const entreprise = (data.entreprise as string) || ''
  const heures     = HEURES_LABELS[data.heures as string]    ?? String(data.heures ?? '')
  const personnes  = PERSONNES_LABELS[data.personnes as string] ?? String(data.personnes ?? '')
  const profil     = PROFILE_LABELS[data.profile as string]  ?? ''
  const score      = data.score as number ?? 0
  const maturite   = MATURITE_LABELS[data.maturite as string] ?? ''
  const objectif   = OBJECTIF_LABELS[data.objectif as string] ?? ''

  const problemes = String(data.probleme ?? '').split(',')
    .map(p => PROBLEME_LABELS[p.trim()] ?? p.trim())
    .filter(Boolean)
  const problemesStr = problemes.length ? problemes.join(', ') : 'tâches répétitives non précisées'

  const intentions = String(data.intention ?? '').split(',')
    .map(i => INTENTION_LABELS[i.trim()] ?? i.trim())
    .filter(Boolean)
  const intentionsStr = intentions.length ? intentions.join(' et ') : 'améliorer l\'efficacité'

  const heuresMap: Record<string, number> = {
    'moins-5h': 3, '5-10h': 7, '10-20h': 15, '20h+': 22,
    'moins-3h': 2, '3-8h': 5, '8-20h': 14,
  }
  const hParSemaine = heuresMap[data.heures as string] ?? 8
  const coutMensuel = Math.round(hParSemaine * 4 * 42)

  return `Tu es Mathieu, fondateur de Stripwork, une agence d'automatisation IA basée en Australie.
Tu réponds à ${prenom} qui vient de remplir ton diagnostic en ligne.

DONNÉES DU DIAGNOSTIC :
- Prénom : ${prenom}
- Entreprise : ${entreprise || 'non précisée'}
- Problèmes identifiés : ${problemesStr}
- Heures perdues : ${heures}
- Personnes impactées : ${personnes}
- Objectif déclaré : ${objectif}
- Bénéfices attendus : ${intentionsStr}
- Maturité : ${maturite}
- Score : ${score}/16 — ${profil}
- Coût mensuel estimé (heures × coût chargé moyen) : ~${coutMensuel}€/mois

STRUCTURE DE L'EMAIL :
1. Accroche : reformule leur situation exacte en 1-2 phrases — montre que tu as vraiment lu leurs réponses.
2. Diagnostic : pose le coût (~${coutMensuel}€/mois) comme un fait, pas comme un argument de vente.
3. Solution concrète : nomme 2-3 automatisations précises adaptées à ${problemesStr}. Sois spécifique (ex : "séquence de relance email déclenchée automatiquement à J+2", pas juste "automatisation des emails").
4. Crédibilité : 1 phrase courte sur la mise en place (délai, simplicité, pas de code à écrire).
5. CTA : proposer un appel de 30 minutes — formulé comme une invitation utile, pas comme une relance commerciale.
6. Signature : Mathieu | Stripwork

TON :
- Vendeur mais pas insistant : tu montres la valeur, tu ne supplies pas
- Expert : tu poses des faits, tu ne convaincs pas — tu constates
- Personnel : utilise "${prenom}" au moins une fois dans le corps
- Pas de superlatifs ni d'exagérations ("révolutionnaire", "incroyable", etc.)
- Pas de formules creuses ("J'espère que vous allez bien", "Je me permets de...")
- Registre strictement professionnel : aucune expression familière ou argotique (interdit : "bouffer", "bouffe", "carton", "nickel", "tip top", "kiffer", "claquer", "dingue", etc.)
- Verbes neutres et précis : "mobiliser", "représenter", "générer", "absorber", "traiter", "structurer" — jamais de verbes familiers

CONTRAINTES :
- Pas de markdown (pas de **, pas de #, pas de tirets listes)
- Longueur : 160 à 230 mots
- Langue : français

Écris uniquement le corps de l'email (pas l'objet, pas de balises HTML).`
}

function buildQualifyPrompt(data: Record<string, unknown>): string {
  const prenom   = data.prenom as string
  const page     = PAGE_LABELS[data.page as string] ?? String(data.page ?? 'automatisation')
  const answers  = (data.answers as Record<string, string>) ?? {}
  const enjeu    = ENJEU_LABELS[answers.enjeu]    ?? ''
  const equipe   = EQUIPE_LABELS[answers.equipe]  ?? ''
  const heures   = HEURES_LABELS[answers.heures]  ?? ''
  const outil    = OUTIL_LABELS[answers.outil]    ?? ''
  const maturite = MATURITE_LABELS[answers.maturite] ?? ''
  const objectif = OBJECTIF_LABELS[answers.objectif] ?? ''
  const enjeuLabel = (data.enjeu_label as string) || enjeu

  const heuresMap: Record<string, number> = {
    'moins-3h': 2, '3-8h': 5, '8-20h': 14, '20h+': 22,
  }
  const hParSemaine = heuresMap[answers.heures] ?? 6
  const coutMensuel = Math.round(hParSemaine * 4 * 42)

  return `Tu es Mathieu, fondateur de Stripwork, une agence d'automatisation IA basée en Australie.
Tu réponds à ${prenom} qui vient de remplir un formulaire sur la page "${page}" de ton site.

DONNÉES DU FORMULAIRE :
- Prénom : ${prenom}
- Page / sujet : ${page}
- Enjeu principal : ${enjeuLabel}
- Taille de l'équipe : ${equipe}
- Heures perdues par semaine : ${heures}
- Outil existant : ${outil}
- Maturité sur l'automatisation : ${maturite}
- Objectif : ${objectif}
- Coût mensuel estimé : ~${coutMensuel}€/mois

STRUCTURE DE L'EMAIL :
1. Accroche : reconnais leur enjeu précis ("${enjeuLabel}") — 1-2 phrases, sans reformulation générique.
2. Constat chiffré : pose le coût (~${coutMensuel}€/mois) comme un fait objectif.
3. Ce que tu ferais concrètement : 1 automatisation précise et nommée, directement liée à "${page}" (ex : pour "relance commerciale" → "séquence en 3 emails déclenchée automatiquement à J+1, J+3, J+7 selon le statut CRM").
4. Outil / maturité : si ${outil} indique qu'ils ont déjà un outil, mentionne que tu branches dessus sans le remplacer.
5. CTA : proposer 30 minutes — formulé comme utile pour eux, pas comme une relance.
6. Signature : Mathieu | Stripwork

TON :
- Vendeur mais sobre : tu poses des faits et tu proposes une action, tu ne surestimes pas
- Expert : confiance dans les chiffres et les exemples, pas dans les adjectifs
- Personnel : utilise "${prenom}" dans le corps
- Pas de superlatifs, pas de formules d'accroche vides
- Registre strictement professionnel : aucune expression familière ou argotique (interdit : "bouffer", "bouffe", "carton", "nickel", "tip top", "kiffer", "claquer", "dingue", etc.)
- Verbes neutres et précis : "mobiliser", "représenter", "générer", "absorber", "traiter", "structurer" — jamais de verbes familiers

CONTRAINTES :
- Pas de markdown (pas de **, pas de #, pas de tirets listes)
- Longueur : 140 à 200 mots
- Langue : français

Écris uniquement le corps de l'email (pas l'objet, pas de balises HTML).`
}

// ── HTML wrapper ──────────────────────────────────────────────────────────────

function wrapInHtml(body: string): string {
  const lines = body.split('\n').filter(l => l.trim())
  const paragraphs = lines.map(l =>
    `<p style="color:#d4d4d4;font-size:15px;line-height:1.7;font-family:Georgia,serif;margin:0 0 14px;">${l}</p>`
  ).join('')

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#111111;margin:0;padding:40px 24px;font-family:sans-serif;">
  <div style="max-width:560px;margin:0 auto;">
    <p style="color:#c6ff00;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 28px;">Stripwork — Réponse automatique</p>
    ${paragraphs}
    <p style="color:#444;font-size:11px;margin-top:36px;border-top:1px solid #1f1f1f;padding-top:16px;">
      Mathieu Jannolfo · Stripwork · <a href="https://stripwork.com" style="color:#c6ff00;text-decoration:none;">stripwork.com</a>
    </p>
  </div>
</body>
</html>`
}

// ── Fonction principale ───────────────────────────────────────────────────────

export async function sendAutoresponse(
  type: 'diagnostic' | 'qualify',
  data: Record<string, unknown>
): Promise<void> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('[autoresponder] ANTHROPIC_API_KEY manquante — abandon')
    return
  }
  const anthropic = new Anthropic({ apiKey })
  const resend    = new Resend(process.env.RESEND_API_KEY!)
  const toEmail   = data.email as string
  const prenom    = data.prenom as string

  const prompt  = type === 'diagnostic'
    ? buildDiagnosticPrompt(data)
    : buildQualifyPrompt(data)

  const subject = type === 'diagnostic'
    ? `${prenom}, voici ce qu'on peut automatiser chez vous`
    : `${prenom}, ma réponse sur ${PAGE_LABELS[data.page as string] ?? 'votre demande'}`

  // Retry avec backoff exponentiel (3 tentatives)
  let lastError: unknown
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await anthropic.messages.create({
        model:      MODEL,
        max_tokens: 600,
        messages:   [{ role: 'user', content: prompt }],
      })

      const body = (response.content[0] as { text: string }).text.trim()

      await resend.emails.send({
        from:    'Mathieu — Stripwork <mathieu@stripwork.com>',
        to:      toEmail,
        subject,
        html:    wrapInHtml(body),
      })

      console.log(`[autoresponder] OK — ${type} → ${toEmail} (${body.length} chars)`)
      return

    } catch (err) {
      lastError = err
      const wait = 1000 * Math.pow(2, attempt - 1)
      console.error(`[autoresponder] attempt ${attempt}/3 failed:`, err)
      await new Promise(r => setTimeout(r, wait))
    }
  }

  console.error('[autoresponder] 3 échecs consécutifs:', lastError)
}
