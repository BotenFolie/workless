// lib/rateLimit.ts
// Rate limiter in-memory — OK pour small-scale (serverless: 1 instance)

interface RateLimitRecord {
  count: number
  reset: number
}

const store = new Map<string, RateLimitRecord>()

export function rateLimit(
  key: string,
  limit: number = 5,
  windowMs: number = 60000
): boolean {
  const now = Date.now()
  const record = store.get(key)

  if (!record || now > record.reset) {
    store.set(key, { count: 1, reset: now + windowMs })
    return true
  }

  if (record.count < limit) {
    record.count++
    return true
  }

  return false
}

// Nettoyage périodique des vieilles entrées
setInterval(() => {
  const now = Date.now()
  for (const [key, record] of store.entries()) {
    if (now > record.reset) store.delete(key)
  }
}, 60000)
