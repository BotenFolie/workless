import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const DEST_EMAIL = 'mathieu.jannolfo2@gmail.com'

// Labels lisibles pour chaque champ du formulaire
const LABELS: Record<string, string> = {
  secteur: 'Secteur',
  taille: "Taille de l'équipe",
  pertes: 'Zones de perte de temps',
  situation: 'Situation actuelle',
  tache: 'Tâche à automatiser',
  frequence: 'Fréquence',
  duree: 'Durée par occurrence',
  outils: 'Outils utilisés',
  personnes: 'Personnes impliquées',
  automatisation: 'Automatisation souhaitée',
  connexions: 'Outils à connecter',
  tente: 'Déjà tenté',
  bloquage: 'Ce qui a bloqué',
  delai: 'Délai idéal',
  budget: 'Budget approximatif',
}

const PROFILE_LABELS: Record<number, string> = {
  1: "01 — Je ne sais pas où je perds du temps",
  2: "02 — Je sais où je perds du temps mais pas comment l'automatiser",
  3: "03 — Je sais ce qu'il faut faire mais trop de paramétrage",
}

function buildEmailHtml(data: Record<string, unknown>): string {
  const profile = data.profile as number
  const prenom = data.prenom as string
  const email = data.email as string

  const rows = Object.entries(LABELS)
    .filter(([key]) => {
      const val = data[key]
      return val !== undefined && val !== '' && !(Array.isArray(val) && val.length === 0)
    })
    .map(([key, label]) => {
      const val = data[key]
      const display = Array.isArray(val) ? (val as string[]).join(', ') : String(val)
      return `
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:12px;font-family:monospace;white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:8px 12px;color:#ededed;font-size:13px;font-family:sans-serif;">${display}</td>
        </tr>`
    })
    .join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#111111;margin:0;padding:32px;font-family:sans-serif;">
  <div style="max-width:600px;margin:0 auto;">

    <div style="border-left:3px solid #c6ff00;padding-left:16px;margin-bottom:32px;">
      <p style="color:#c6ff00;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">Nouveau diagnostic Workless</p>
      <h1 style="color:#ededed;font-size:22px;margin:0;">${prenom} — ${email}</h1>
    </div>

    <div style="background:#161616;border:1px solid rgba(255,255,255,0.08);padding:16px;margin-bottom:24px;">
      <p style="color:#6b6b6b;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px;">Profil sélectionné</p>
      <p style="color:#ededed;font-size:14px;margin:0;">${PROFILE_LABELS[profile] ?? profile}</p>
    </div>

    <table style="width:100%;border-collapse:collapse;border:1px solid rgba(255,255,255,0.08);">
      <tbody>${rows}</tbody>
    </table>

    <p style="color:#3a3a3a;font-size:11px;margin-top:32px;text-align:center;">
      Workless · Diagnostic automatique
    </p>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const { error } = await resend.emails.send({
      from: 'Workless Diagnostic <onboarding@resend.dev>',
      to: DEST_EMAIL,
      subject: `Nouveau diagnostic — ${data.prenom ?? 'Sans nom'} (Profil ${data.profile})`,
      html: buildEmailHtml(data),
    })

    if (error) {
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
