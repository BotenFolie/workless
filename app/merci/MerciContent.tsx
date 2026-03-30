'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

// ─── Lien de réservation — à remplacer par ton vrai lien ─────────────────────
const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments'

// ─── Types ────────────────────────────────────────────────────────────────────

type Profil = 'high' | 'medium' | 'low'

type DiagnosticData = {
  probleme:  string[]
  heures:    string
  personnes: string
  intention: string[]
  maturite:  string
  objectif:  string
}

// ─── Config statique par profil ───────────────────────────────────────────────

const PROFILS: Record<Profil, {
  label:       string
  description: string
  prixBase:    string
  prixPromo:   string
  reduction:   string
  promoLabel:  string
  ctaLabel:    string
  note:        string
}> = {
  high: {
    label:       'Transformation',
    description: "En 30 minutes, on identifie ensemble les automatisations à plus fort impact dans votre organisation — et on vous donne une estimation concrète de ce que ça représente en temps et en coût.",
    prixBase:    '9 800€',
    prixPromo:   '5 390€',
    reduction:   '-45%',
    promoLabel:  'Offre 1er semestre 2026 — places limitées à 5 projets',
    ctaLabel:    'Réserver mon RDV offert →',
    note:        "Sans engagement. Pas de relance si ce n'est pas le bon moment.",
  },
  medium: {
    label:       'Mission ciblée',
    description: "En 30 minutes, on cible la tâche qui vous fait perdre le plus de temps et on valide ensemble si une automatisation est rentable — et laquelle.",
    prixBase:    '3 800€',
    prixPromo:   '2 470€',
    reduction:   '-35%',
    promoLabel:  'Offre 1er semestre 2026 — 3 missions disponibles',
    ctaLabel:    'Réserver mon RDV offert →',
    note:        "Sans engagement. Réponse sous 24h si le créneau n'est pas disponible.",
  },
  low: {
    label:       'Audit express',
    description: "En 30 minutes, on passe en revue votre organisation et on identifie s'il existe des automatisations simples qui pourraient vous faire gagner du temps rapidement.",
    prixBase:    '1 980€',
    prixPromo:   '1 390€',
    reduction:   '-30%',
    promoLabel:  'Offre 1er semestre 2026 — tarif découverte non reconductible',
    ctaLabel:    'Réserver mon RDV offert →',
    note:        "Sans engagement. L'appel est vraiment gratuit.",
  },
}

// ─── Génération dynamique des bullet points ───────────────────────────────────

function generatePoints(data: DiagnosticData | null, profil: Profil): string[] {
  if (!data) return getDefaultPoints(profil)

  const points: string[] = []
  const { probleme, heures, personnes, intention, maturite, objectif } = data

  // Ce sur quoi ils perdent du temps → on décrit ce qu'on va régler
  if (probleme.includes('reporting'))
    points.push('Automatisation complète de vos reportings — plus jamais de consolidation manuelle')
  if (probleme.includes('emails'))
    points.push('Création de workflows email et templates automatisés selon vos processus')
  if (probleme.includes('decisions'))
    points.push('Mise en place de tableaux de bord décisionnels alimentés en temps réel')
  if (probleme.includes('organisation'))
    points.push('Restructuration et automatisation de vos flux internes (tâches, validations, relances)')
  if (probleme.includes('autre'))
    points.push('Cartographie de vos processus pour identifier les automatisations les plus rentables')

  // Heures perdues → objectif chiffré
  if (heures === '20h+')
    points.push('Objectif : récupérer 15 à 20 heures par semaine pour votre équipe')
  else if (heures === '10-20h')
    points.push('Objectif : récupérer 8 à 12 heures par semaine sur les tâches ciblées')
  else if (heures === '5-10h')
    points.push('Objectif : récupérer 4 à 6 heures par semaine dès le premier mois')

  // Personnes concernées → périmètre du déploiement
  if (personnes === '10+')
    points.push('Déploiement à l\'échelle de toute l\'organisation — onboarding et formation inclus')
  else if (personnes === '5-10')
    points.push('Implémentation et prise en main pour l\'ensemble de votre équipe')
  else if (personnes === '3-5')
    points.push('Solution adaptée à votre équipe avec passation individuelle')

  // Intention → on répond à leur vrai besoin
  if (intention.includes('recruter'))
    points.push('Suppression d\'un besoin de recrutement — économie directe sur la masse salariale')
  if (intention.includes('decisions'))
    points.push('Accélération des cycles de décision grâce à l\'information disponible instantanément')
  if (intention.includes('pression'))
    points.push('Réduction de la charge mentale et des urgences opérationnelles récurrentes')

  // Maturité → on rassure sur l'approche
  if (maturite === 'echec')
    points.push('Diagnostic préalable de ce qui a bloqué — on repart sur des bases solides')
  else if (maturite === 'partiellement')
    points.push('Audit de l\'existant + optimisation de ce qui est déjà en place')

  // Objectif → vision long terme
  if (objectif === 'transformer')
    points.push('Vision à 6 mois : organisation scalable, sans recrutement supplémentaire')
  else if (objectif === 'ameliorer')
    points.push('Plan d\'amélioration priorisé — quick wins d\'abord, transformations ensuite')
  else if (objectif === 'tester')
    points.push('Première automatisation livrée rapidement pour valider le ROI avant d\'aller plus loin')

  // Toujours garder entre 4 et 6 points — tronquer si trop
  return points.slice(0, 6)
}

function getDefaultPoints(profil: Profil): string[] {
  const defaults: Record<Profil, string[]> = {
    high: [
      'Cartographie complète des tâches à automatiser dans votre organisation',
      'Implémentation sur-mesure (n8n + IA) sur les processus à plus fort impact',
      'Objectif : récupérer l\'équivalent d\'un poste en temps productif',
      'Suivi et ajustements inclus pendant 30 jours après livraison',
    ],
    medium: [
      'Analyse approfondie de la tâche cible et de son contexte',
      'Automatisation clé en main livrée en 5 à 10 jours',
      'Formation incluse — 30 minutes de passation pour votre équipe',
    ],
    low: [
      'Audit de votre organisation actuelle et de vos outils',
      'Recommandations concrètes et priorisées selon votre contexte',
      'Devis détaillé si un projet est identifié à l\'issue de l\'appel',
    ],
  }
  return defaults[profil]
}

function getProfile(profil: string | null): Profil {
  if (profil === 'high' || profil === 'medium' || profil === 'low') return profil
  return 'medium'
}

// ─── Composant ────────────────────────────────────────────────────────────────

export default function MerciContent() {
  const params  = useSearchParams()
  const profil  = getProfile(params.get('profil'))
  const prenom  = params.get('prenom') ?? ''
  const config  = PROFILS[profil]

  const [diagData, setDiagData] = useState<DiagnosticData | null>(null)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('sw_diagnostic')
      if (stored) setDiagData(JSON.parse(stored))
    } catch { /* pas de données */ }
  }, [])

  const points = generatePoints(diagData, profil)

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-16 md:py-24">

      {/* Logo */}
      <Link
        href="/"
        className="font-grotesk font-bold text-surface text-sm tracking-tight mb-16 hover:text-accent transition-colors duration-200"
      >
        Stripwork
      </Link>

      <div className="w-full max-w-lg">

        {/* Badge profil */}
        <div className="inline-flex items-center border border-accent/40 bg-accent/[0.06] px-3 py-1.5 mb-8">
          <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
            Diagnostic reçu — {config.label}
          </span>
        </div>

        {/* Titre */}
        <h1 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-4">
          {prenom ? `${prenom}, votre` : 'Votre'} rendez-vous pré-optimisation est{' '}
          <span className="text-accent">offert.</span>
        </h1>

        <p className="font-inter text-neutral text-base leading-relaxed mb-10">
          {config.description}
        </p>

        {/* Bullet points dynamiques */}
        <div className="border border-white/[0.08] bg-white/[0.02] p-6 mb-8">
          <p className="font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/40 mb-5">
            Ce qu&apos;on va faire pour vous
          </p>
          <div className="space-y-3.5">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-accent text-xs mt-0.5 flex-shrink-0 font-bold">✓</span>
                <span className="font-inter text-sm text-surface/85 leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ancre de prix */}
        <div className="border border-white/[0.08] bg-white/[0.015] p-6 mb-4">
          <p className="font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/30 mb-4">
            Investissement si on travaille ensemble
          </p>

          {/* Prix barré — bien visible */}
          <div className="flex items-center gap-2 mb-1">
            <span className="font-inter text-sm font-medium text-muted">Tarif standard :</span>
            <span className="font-grotesk font-bold text-surface/70 text-xl line-through decoration-red-400 decoration-2">
              {config.prixBase}
            </span>
          </div>

          {/* Prix promo */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-grotesk font-bold text-surface text-4xl">{config.prixPromo}</span>
            <span className="font-inter text-sm font-bold text-bg bg-accent px-2.5 py-1">
              {config.reduction}
            </span>
          </div>

          {/* Paiement unique — mis en avant */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            <p className="font-inter text-sm font-semibold text-accent">
              Paiement unique — aucun abonnement Stripwork.
            </p>
          </div>

          {/* Urgence */}
          <div className="border-t border-white/[0.06] pt-4 flex items-start gap-2.5">
            <span className="text-xs mt-0.5 flex-shrink-0">⏳</span>
            <div>
              <p className="font-inter text-xs font-semibold text-surface/80 mb-0.5">
                {config.promoLabel}
              </p>
              <p className="font-inter text-xs text-muted">
                Ce tarif ne sera plus disponible après le 30 juin 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Transparence frais outils */}
        <div className="border border-white/[0.05] bg-white/[0.01] px-5 py-4 mb-8 flex items-start gap-3">
          <span className="text-muted text-xs mt-0.5 flex-shrink-0">ℹ</span>
          <p className="font-inter text-xs text-muted leading-relaxed">
            Les outils que l&apos;on connecte (n8n, Make, Claude API, etc.) génèrent des frais d&apos;usage mensuels selon votre volume — généralement entre 20€ et 150€/mois selon les cas. Ces frais sont liés à vos propres comptes, pas à Stripwork.
          </p>
        </div>

        {/* CTA */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-accent text-bg font-inter font-semibold py-4 text-center hover:bg-white transition-colors duration-200 mb-4"
        >
          {config.ctaLabel}
        </a>

        <p className="font-inter text-neutral/35 text-xs text-center">{config.note}</p>

      </div>
    </main>
  )
}
