import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit } from '@/lib/rateLimit'

const resend = new Resend(process.env.RESEND_API_KEY)

const DEST_EMAIL = process.env.DIAGNOSTIC_RECIPIENT_EMAIL
if (!DEST_EMAIL) throw new Error('DIAGNOSTIC_RECIPIENT_EMAIL is not configured')

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

// Validation schema
const DiagnosticSchema = z.object({
  prenom:     z.string().min(1).max(50).trim(),
  email:      z.string().email().max(100),
  entreprise: z.string().min(1).max(100).trim(),
  telephone:  z.string().max(20).optional().default(''),
  probleme:   z.string().max(500),
  heures:     z.enum(['moins-5h', '5-10h', '10-20h', '20h+']),
  personnes:  z.enum(['1-2', '3-5', '5-10', '10+']),
  intention:  z.string().max(500),
  maturite:   z.enum(['jamais', 'partiellement', 'echec']),
  objectif:   z.enum(['tester', 'ameliorer', 'transformer']),
  score:      z.number().int().min(0).max(16),
  profile:    z.enum(['high', 'medium', 'low']),
})

type ValidatedData = z.infer<typeof DiagnosticSchema>

function sanitizeHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmailHtml(data: ValidatedData): string {
  const prenom  = sanitizeHTML(data.prenom)
  const email   = sanitizeHTML(data.email)
  const profile = data.profile
  const score   = data.score

  const rows = Object.entries(LABELS)
    .filter(([key]) => data[key as keyof ValidatedData] !== undefined && data[key as keyof ValidatedData] !== '')
    .map(([key, label]) => {
      const value = data[key as keyof ValidatedData]
      const sanitized = sanitizeHTML(String(value))
      return `
      <tr>
        <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;vertical-align:top;">${label}</td>
        <td style="padding:8px 12px;color:#ededed;font-size:13px;font-family:sans-serif;">${sanitized}</td>
      </tr>`
    })
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
    // Rate limiting : 5 req/min par IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
      || req.headers.get('x-real-ip')
      || 'unknown'
    if (!rateLimit(ip, 3, 3600000)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer dans une minute.' },
        { status: 429 }
      )
    }

    // Honeypot : champ caché rempli = bot
    const rawData = await req.json()
    if (rawData._hp && rawData._hp !== '') {
      return NextResponse.json({ ok: true }) // silencieux côté client
    }

    // Validation Zod
    const validated = DiagnosticSchema.parse(rawData)

    // Envoi email
    const { error, data } = await resend.emails.send({
      from: 'Stripwork Diagnostic <onboarding@resend.dev>',
      to: DEST_EMAIL as string,
      subject: `Nouveau diagnostic — ${validated.prenom} · Score ${validated.score}/16 · Profil ${validated.profile}`,
      html: buildEmailHtml(validated),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
        { status: 500 }
      )
    }

    if (!data?.id) {
      console.error('Resend: no email ID returned')
      return NextResponse.json(
        { error: 'Email non confirmé. Veuillez réessayer.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, id: data.id })

  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error('Validation error:', JSON.stringify(err.issues))
      return NextResponse.json({ error: 'Données invalides.' }, { status: 400 })
    }
    console.error('Diagnostic API error:', err)
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
