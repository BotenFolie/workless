import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit } from '@/lib/rateLimit'

const resend = new Resend(process.env.RESEND_API_KEY)
const DEST_EMAIL = process.env.DIAGNOSTIC_RECIPIENT_EMAIL
if (!DEST_EMAIL) throw new Error('DIAGNOSTIC_RECIPIENT_EMAIL is not configured')

const ContactSchema = z.object({
  prenom:    z.string().min(1).max(50).trim(),
  email:     z.string().email().max(100),
  telephone: z.string().min(1).max(20).trim(),
  message:   z.string().max(1000).optional().default(''),
  page:      z.string().max(200).optional().default(''),
  _hp:       z.string().optional().default(''),
})

function sanitizeHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
      || req.headers.get('x-real-ip')
      || 'unknown'
    if (!rateLimit(ip, 3, 3600000)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer plus tard.' },
        { status: 429 }
      )
    }

    const rawData = await req.json()

    // Honeypot
    if (rawData._hp && rawData._hp !== '') {
      return NextResponse.json({ ok: true })
    }

    const data = ContactSchema.parse(rawData)

    const prenom    = sanitizeHTML(data.prenom)
    const email     = sanitizeHTML(data.email)
    const telephone = sanitizeHTML(data.telephone)
    const message   = sanitizeHTML(data.message)
    const page      = sanitizeHTML(data.page)

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#111111;margin:0;padding:32px;font-family:sans-serif;">
  <div style="max-width:580px;margin:0 auto;">
    <div style="border-left:3px solid #c6ff00;padding-left:16px;margin-bottom:28px;">
      <p style="color:#c6ff00;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">Nouveau contact — Automatisation</p>
      <h1 style="color:#ededed;font-size:20px;margin:0;">${prenom} — ${email}</h1>
    </div>
    ${page ? `<p style="color:#6b6b6b;font-size:11px;font-family:monospace;margin-bottom:20px;">Page : ${page}</p>` : ''}
    <table style="width:100%;border-collapse:collapse;border:1px solid rgba(255,255,255,0.08);">
      <tbody>
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;vertical-align:top;">Téléphone</td>
          <td style="padding:8px 12px;color:#ededed;font-size:13px;">${telephone}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;vertical-align:top;">Email</td>
          <td style="padding:8px 12px;color:#ededed;font-size:13px;">${email}</td>
        </tr>
        ${message ? `
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;vertical-align:top;">Message</td>
          <td style="padding:8px 12px;color:#ededed;font-size:13px;white-space:pre-line;">${message}</td>
        </tr>` : ''}
      </tbody>
    </table>
    <p style="color:#333;font-size:11px;margin-top:28px;text-align:center;">Stripwork · Contact automatisation</p>
  </div>
</body>
</html>`

    const { error, data: sendData } = await resend.emails.send({
      from: 'Stripwork Contact <onboarding@resend.dev>',
      to: DEST_EMAIL as string,
      subject: `Nouveau contact — ${data.page || 'Automatisation'} — ${data.prenom}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: "Erreur d'envoi. Réessayez." }, { status: 500 })
    }
    if (!sendData?.id) {
      return NextResponse.json({ error: 'Email non confirmé. Réessayez.' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })

  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error('Validation error:', JSON.stringify(err.issues))
      return NextResponse.json({ error: 'Données invalides.' }, { status: 400 })
    }
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}
