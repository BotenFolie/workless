// Réception des demandes (audit gratuit, contact) → e-mail Resend + alerte Telegram + Stripwork OS (en arrière-plan)

import { NextRequest, NextResponse, after } from 'next/server'
import { rateLimit } from '@/lib/rateLimit'
import { sendTelegramAlert } from '@/lib/telegram'
import { escapeHtml, sendMail } from '@/lib/email'
import { sendLeadToOs } from '@/lib/os'

type LeadType = 'audit' | 'contact'

type Lead = {
  type: LeadType
  locale: 'fr' | 'es'
  name: string
  company: string
  email: string
  phone: string
  site: string
  message: string
  referrer: string
  page: string
  submissionId: string
  first: Touch | null
  last: Touch | null
}

/** Provenance lue dans les cookies du site (voir RootDoc). */
type Touch = Record<'utmSource' | 'utmMedium' | 'utmCampaign' | 'utmContent' | 'utmTerm' | 'gclid' | 'fbclid' | 'landingPage' | 'referrerUrl' | 'at', string | null>

const TOUCH_KEYS = ['utmSource', 'utmMedium', 'utmCampaign', 'utmContent', 'utmTerm', 'gclid', 'fbclid', 'landingPage', 'referrerUrl', 'at'] as const

function parseTouch(v: unknown): Touch | null {
  if (!v || typeof v !== 'object') return null
  const o = v as Record<string, unknown>
  const t = Object.fromEntries(TOUCH_KEYS.map((k) => [k, str(o[k], 500) || null])) as Touch
  return TOUCH_KEYS.some((k) => t[k]) ? t : null
}

const LIMITS: Record<keyof Omit<Lead, 'type' | 'locale' | 'submissionId' | 'first' | 'last'>, number> = {
  name: 80,
  company: 120,
  email: 120,
  phone: 30,
  site: 200,
  message: 2000,
  referrer: 120,
  page: 200,
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

/** Valide et normalise le corps de la requête ; renvoie null si invalide. */
function parseLead(raw: Record<string, unknown>): Lead | null {
  const type: LeadType = raw.type === 'contact' ? 'contact' : 'audit'
  const locale = raw.locale === 'es' ? 'es' : 'fr'
  const lead: Lead = {
    type,
    locale,
    name: str(raw.name, LIMITS.name),
    company: str(raw.company, LIMITS.company),
    email: str(raw.email, LIMITS.email),
    phone: str(raw.phone, LIMITS.phone),
    site: str(raw.site, LIMITS.site),
    message: str(raw.message, LIMITS.message),
    referrer: str(raw.referrer, LIMITS.referrer),
    page: str(raw.page, LIMITS.page),
    submissionId: /^[\w-]{8,80}$/.test(str(raw.submissionId, 80)) ? str(raw.submissionId, 80) : crypto.randomUUID(),
    first: parseTouch(raw.first),
    last: parseTouch(raw.last),
  }
  if (!lead.name || !EMAIL_RE.test(lead.email) || raw.consent !== true) return null
  if (type === 'audit' && !lead.phone) return null
  return lead
}

function row(label: string, value: string): string {
  if (!value) return ''
  return `<tr><td style="padding:8px 12px;background:#f7e27a;font:12px monospace;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 12px;font:14px sans-serif;white-space:pre-line">${escapeHtml(value)}</td></tr>`
}

/** Résumé lisible de la provenance pour l'e-mail et Telegram. */
function provenance(lead: Lead): string {
  const t = lead.last ?? lead.first
  if (!t) return ''
  const utm = [t.utmSource, t.utmMedium, t.utmCampaign].filter(Boolean).join(' / ')
  return [utm, t.gclid ? 'clic Google Ads' : '', t.fbclid ? 'clic Meta' : '', lead.first?.referrerUrl ? `depuis ${lead.first.referrerUrl}` : '', lead.first?.landingPage ? `arrivé sur ${lead.first.landingPage}` : '']
    .filter(Boolean)
    .join(' · ')
}

function buildHtml(lead: Lead): string {
  const title = lead.type === 'audit' ? 'Demande d’audit gratuit' : 'Message de contact'
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#fffbe6;color:#141210">
<h1 style="font:700 20px sans-serif;margin:0 0 4px">${title} — ${escapeHtml(lead.company || lead.name)}</h1>
<p style="font:12px monospace;margin:0 0 16px">Langue : ${lead.locale.toUpperCase()} · Page : ${escapeHtml(lead.page)}</p>
<table style="border-collapse:collapse;border:2px solid #141210;width:100%;max-width:620px">
${row('Nom', lead.name)}${row('Entreprise', lead.company)}${row('E-mail', lead.email)}${row('Téléphone', lead.phone)}${row('Site', lead.site)}${row('Recommandé par', lead.referrer)}${row('Message', lead.message)}${row('Provenance', provenance(lead))}
</table></body></html>`
}

function clientIp(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown'
}

export async function POST(req: NextRequest) {
  if (!rateLimit(clientIp(req), 5, 3_600_000)) {
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
  }

  let raw: Record<string, unknown>
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  // Champ piège anti-robot : on répond OK sans rien envoyer
  if (typeof raw._hp === 'string' && raw._hp !== '') return NextResponse.json({ ok: true })

  const lead = parseLead(raw)
  if (!lead) return NextResponse.json({ error: 'invalid' }, { status: 422 })

  // Copie vers Stripwork OS après la réponse : ne ralentit pas le visiteur, indépendante de l'e-mail
  after(async () => {
    const r = await sendLeadToOs(lead)
    if (!r.ok) {
      console.error('[lead] non transmis à Stripwork OS après 4 essais', { submissionId: lead.submissionId, error: r.error })
      await sendTelegramAlert(`<b>ALERTE : demande non transmise à Stripwork OS</b>\n${escapeHtml(lead.name)} · ${escapeHtml(lead.email)}\n${escapeHtml(r.error)}`)
    }
  })

  const to = process.env.LEADS_TO_EMAIL || process.env.DIAGNOSTIC_RECIPIENT_EMAIL
  const from = process.env.FROM_EMAIL
  if (!to || !from) {
    console.error('[lead] LEADS_TO_EMAIL ou FROM_EMAIL non configuré')
    return NextResponse.json({ error: 'not_configured' }, { status: 500 })
  }

  try {
    await sendMail({
      to,
      from,
      replyTo: lead.email,
      subject: `[Stripwork ${lead.locale.toUpperCase()}] ${lead.type === 'audit' ? 'Audit' : 'Contact'} — ${lead.company || lead.name}`,
      html: buildHtml(lead),
    })
  } catch (err) {
    console.error('[lead] échec envoi', err)
    return NextResponse.json({ error: 'send_failed' }, { status: 502 })
  }

  await sendTelegramAlert(
    `<b>${lead.type === 'audit' ? 'Audit' : 'Contact'} ${lead.locale.toUpperCase()}</b>\n${escapeHtml(lead.name)} — ${escapeHtml(lead.company)}\n${escapeHtml(lead.phone)} · ${escapeHtml(lead.email)}${lead.referrer ? `\nRecommandé par : ${escapeHtml(lead.referrer)}` : ''}`,
  )

  return NextResponse.json({ ok: true })
}
