// Envoi des demandes vers Stripwork OS (lot D) : signature HMAC, réessais 1 s → 2 s → 4 s.

import { createHmac } from 'node:crypto'

const DELAYS = [1000, 2000, 4000]

export type OsResult = { ok: true } | { ok: false; error: string }

/** Poste la demande signée ; l'OS la rend idempotente grâce à submissionId. */
export async function sendLeadToOs(payload: object): Promise<OsResult> {
  const url = process.env.OS_LEADS_URL
  const secret = process.env.OS_LEADS_SECRET
  if (!url || !secret) return { ok: false, error: 'OS_LEADS_URL ou OS_LEADS_SECRET non configuré' }

  const body = JSON.stringify(payload)
  let lastError = ''
  for (let attempt = 0; attempt <= DELAYS.length; attempt++) {
    try {
      // Signature recalculée à chaque essai : l'OS refuse un horodatage de plus de 5 min
      const t = Date.now()
      const sig = createHmac('sha256', secret).update(`${t}.${body}`).digest('hex')
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-stripwork-signature': `t=${t},v1=${sig}` },
        body,
        signal: AbortSignal.timeout(10_000),
      })
      if (res.ok) return { ok: true }
      lastError = `HTTP ${res.status} ${await res.text().catch(() => '')}`.slice(0, 300)
      // Erreur de contenu : inutile de réessayer
      if (res.status === 401 || res.status === 413 || res.status === 422) break
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err)
    }
    console.warn(`[os] essai ${attempt + 1} échoué : ${lastError}`)
    if (attempt < DELAYS.length) await new Promise((r) => setTimeout(r, DELAYS[attempt]))
  }
  return { ok: false, error: lastError }
}
