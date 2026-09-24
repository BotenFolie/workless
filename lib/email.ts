// Envoi d'e-mails via l'API Resend (fetch), retry 1 s → 2 s → 4 s

const RESEND_URL = 'https://api.resend.com/emails'
const DELAYS_MS = [1000, 2000, 4000]

type Mail = { to: string; from: string; replyTo?: string; subject: string; html: string }

function wait(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms))
}

export async function sendMail(mail: Mail): Promise<void> {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error('RESEND_API_KEY manquante')

  let lastError: unknown = null
  for (let attempt = 0; attempt <= DELAYS_MS.length; attempt++) {
    try {
      const res = await fetch(RESEND_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: mail.from,
          to: [mail.to],
          reply_to: mail.replyTo,
          subject: mail.subject,
          html: mail.html,
        }),
      })
      if (res.ok) return
      const body = await res.text()
      lastError = new Error(`Resend ${res.status} : ${body}`)
      // Erreur client (hors 429) : inutile de réessayer
      if (res.status < 500 && res.status !== 429) break
    } catch (err) {
      lastError = err
    }
    console.error(`[email] tentative ${attempt + 1} échouée`, lastError)
    if (attempt < DELAYS_MS.length) await wait(DELAYS_MS[attempt])
  }
  throw new Error(`Envoi e-mail impossible après plusieurs tentatives : ${String(lastError)}`)
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
