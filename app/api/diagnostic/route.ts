import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const DEST_EMAIL = 'mathieu.jannolfo2@gmail.com'

const LABELS: Record<string, string> = {
  probleme:   'Zone de perte de temps',
  heures:     'Heures perdues / semaine',
  personnes:  'Personnes impactées',
  intention:  'Bénéfice principal attendu',
  maturite:   'Maturité sur le sujet',
  objectif:   'Objectif principal',
  entreprise: 'Entreprise',
  telephone:  'Téléphone',
}

const PROFILE_LABELS: Record<string, string> = {
  high:   '🔥 Haute valeur',
  medium: '✅ Gains rapides',
  low:    '💡 Profil faible',
}

function buildEmailHtml(data: Record<string, unknown>): string {
  const prenom    = data.prenom as string
  const email     = data.email as string
  const profile   = data.profile as string
  const score     = data.score as number

  const rows = Object.entries(LABELS)
    .filter(([key]) => data[key] !== undefined && data[key] !== '')
    .map(([key, label]) => `
      <tr>
        <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;vertical-align:top;">${label}</td>
        <td style="padding:8px 12px;color:#ededed;font-size:13px;font-family:sans-serif;">${String(data[key])}</td>
      </tr>`)
    .join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#111111;margin:0;padding:32px;font-family:sans-serif;">
  <div style="max-width:580px;margin:0 auto;">

    <div style="border-left:3px solid #c6ff00;padding-left:16px;margin-bottom:28px;">
      <p style="color:#c6ff00;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">Nouveau diagnostic Stripwork</p>
      <h1 style="color:#ededed;font-size:20px;margin:0;">${prenom} — ${email}</h1>
    </div>

    <div style="display:flex;gap:12px;margin-bottom:24px;">
      <div style="flex:1;background:#161616;border:1px solid rgba(255,255,255,0.08);padding:14px;">
        <p style="color:#6b6b6b;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 6px;">Profil</p>
        <p style="color:#ededed;font-size:14px;font-weight:600;margin:0;">${PROFILE_LABELS[profile] ?? profile}</p>
      </div>
      <div style="flex:1;background:#161616;border:1px solid rgba(255,255,255,0.08);padding:14px;">
        <p style="color:#6b6b6b;font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 6px;">Score</p>
        <p style="color:#c6ff00;font-size:22px;font-weight:700;margin:0;">${score}<span style="color:#6b6b6b;font-size:12px;"> / 16</span></p>
      </div>
    </div>

    <table style="width:100%;border-collapse:collapse;border:1px solid rgba(255,255,255,0.08);">
      <tbody>${rows}</tbody>
    </table>

    <p style="color:#333;font-size:11px;margin-top:28px;text-align:center;">Stripwork · Diagnostic automatique</p>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const { error } = await resend.emails.send({
      from: 'Stripwork Diagnostic <onboarding@resend.dev>',
      to: DEST_EMAIL,
      subject: `Nouveau diagnostic — ${data.prenom ?? 'Sans nom'} · Score ${data.score ?? '?'}/16 · Profil ${data.profile ?? '?'}`,
      html: buildEmailHtml(data),
    })

    if (error) return NextResponse.json({ error }, { status: 500 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
