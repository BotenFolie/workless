import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { rateLimit } from '@/lib/rateLimit'
import { sendTelegramAlert } from '@/lib/telegram'

const resend = new Resend(process.env.RESEND_API_KEY)
const DEST_EMAIL = process.env.DIAGNOSTIC_RECIPIENT_EMAIL
if (!DEST_EMAIL) throw new Error('DIAGNOSTIC_RECIPIENT_EMAIL is not configured')

const QualifySchema = z.object({
  prenom:      z.string().min(1).max(50).trim(),
  email:       z.string().email().max(100),
  telephone:   z.string().min(1).max(20).trim(),
  page:        z.string().max(200).optional().default(''),
  enjeu_label: z.string().max(200).optional().default(''),
  answers: z.object({
    enjeu:     z.string().max(100).optional().default(''),
    equipe:    z.string().max(100).optional().default(''),
    heures:    z.string().max(100).optional().default(''),
    outil:     z.string().max(100).optional().default(''),
    maturite:  z.string().max(100).optional().default(''),
    objectif:  z.string().max(100).optional().default(''),
  }),
  _hp: z.string().optional().default(''),
})

function sanitizeHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const ANSWER_LABELS: Record<string, Record<string, string>> = {
  equipe:   { solo: 'Solo', '2-5': '2-5 personnes', '6-15': '6-15 personnes', '15+': '+15 personnes' },
  heures:   { 'moins-3h': '< 3h/sem', '3-8h': '3-8h/sem', '8-20h': '8-20h/sem', '20h+': '+20h/sem' },
  outil:    { 'crm-erp': 'CRM/ERP en place', 'tableurs': 'Tableurs/Excel', 'mal-config': 'Mal configuré', 'rien': 'Rien de structuré' },
  maturite: { jamais: 'Jamais essayé', partiellement: 'Partiellement', echec: 'Sans résultat' },
  objectif: { temps: 'Gagner du temps', conversion: 'Améliorer la conversion', erreurs: 'Réduire les erreurs', transformer: 'Transformer le process' },
}

function answerLabel(key: string, value: string): string {
  return ANSWER_LABELS[key]?.[value] ?? value
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

    const data = QualifySchema.parse(rawData)
    const { prenom, email, telephone, page, enjeu_label, answers } = data

    const sp = sanitizeHTML(prenom)
    const se = sanitizeHTML(email)
    const st = sanitizeHTML(telephone)
    const spage = sanitizeHTML(page)
    const senjeu = sanitizeHTML(enjeu_label || answers.enjeu)

    const rows = [
      ['Enjeu principal',  senjeu],
      ['Taille équipe',    answerLabel('equipe',   answers.equipe)],
      ['Heures perdues',   answerLabel('heures',   answers.heures)],
      ['Outil en place',   answerLabel('outil',    answers.outil)],
      ['Maturité',         answerLabel('maturite', answers.maturite)],
      ['Objectif',         answerLabel('objectif', answers.objectif)],
    ]

    const tableRows = rows
      .filter(([, v]) => v)
      .map(([label, value]) => `
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;vertical-align:top;">${sanitizeHTML(label)}</td>
          <td style="padding:8px 12px;color:#ededed;font-size:13px;">${sanitizeHTML(value)}</td>
        </tr>`)
      .join('')

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#111111;margin:0;padding:32px;font-family:sans-serif;">
  <div style="max-width:580px;margin:0 auto;">
    <div style="border-left:3px solid #c6ff00;padding-left:16px;margin-bottom:28px;">
      <p style="color:#c6ff00;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">Nouveau lead qualifié — ${spage || 'Catalogue'}</p>
      <h1 style="color:#ededed;font-size:20px;margin:0;">${sp} — ${se}</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid rgba(255,255,255,0.08);margin-bottom:20px;">
      <tbody>
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;">Téléphone</td>
          <td style="padding:8px 12px;color:#ededed;font-size:13px;">${st}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;background:#1a1a1a;color:#6b6b6b;font-size:11px;font-family:monospace;white-space:nowrap;">Email</td>
          <td style="padding:8px 12px;color:#ededed;font-size:13px;">${se}</td>
        </tr>
        ${tableRows}
      </tbody>
    </table>
    <p style="color:#333;font-size:11px;margin-top:28px;text-align:center;">Stripwork · Qualification catalogue</p>
  </div>
</body>
</html>`

    const { error, data: sendData } = await resend.emails.send({
      from: 'Stripwork Leads <onboarding@resend.dev>',
      to: DEST_EMAIL as string,
      subject: `Lead qualifié — ${senjeu || spage || 'Catalogue'} — ${sp}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: "Erreur d'envoi. Réessayez." }, { status: 500 })
    }
    if (!sendData?.id) {
      return NextResponse.json({ error: 'Email non confirmé. Réessayez.' }, { status: 500 })
    }

    await sendTelegramAlert(
      `🎯 <b>Lead qualifié — ${senjeu || spage || 'Catalogue'}</b>\n` +
      `👤 ${sp} — ${se}\n` +
      `📞 ${st}\n` +
      `🏢 ${answerLabel('equipe', answers.equipe)} · ${answerLabel('heures', answers.heures)}`
    )

    return NextResponse.json({ ok: true })

  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error('Validation error:', JSON.stringify(err.issues))
      return NextResponse.json({ error: 'Données invalides.' }, { status: 400 })
    }
    console.error('Qualify API error:', err)
    return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}
