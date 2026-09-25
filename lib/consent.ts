// Consentement aux cookies de provenance (lot D) : choix mémorisé 6 mois (recommandation CNIL).

export type Consent = 'granted' | 'denied' | null

const SIX_MONTHS = 60 * 60 * 24 * 182
type Touch = Record<string, string>
type Mem = { first?: Touch; last?: Touch }

declare global {
  interface Window {
    __swAttr?: Mem
  }
}

function secure(): string {
  return location.protocol === 'https:' ? ';secure' : ''
}

function write(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};samesite=lax${secure()}`
}

export function readConsent(): Consent {
  const m = document.cookie.match(/(?:^|; )sw_consent=([01])/)
  return m ? (m[1] === '1' ? 'granted' : 'denied') : null
}

/** Enregistre le choix ; en cas d'accord, recopie en cookie la provenance gardée en mémoire. */
export function saveConsent(granted: boolean) {
  write('sw_consent', granted ? '1' : '0', SIX_MONTHS)
  if (granted) {
    const mem = window.__swAttr
    if (mem?.first && !/(?:^|; )sw_src=/.test(document.cookie)) write('sw_src', JSON.stringify(mem.first), 60 * 60 * 24 * 90)
    if (mem?.last) write('sw_last', JSON.stringify(mem.last), 60 * 60 * 24 * 90)
  } else {
    // Refus : on efface ce qui aurait été posé avant
    for (const n of ['sw_src', 'sw_last']) document.cookie = `${n}=;path=/;max-age=0${secure()}`
  }
  window.dispatchEvent(new CustomEvent('sw:consent'))
}

/** Provenance à joindre à un formulaire : cookie si accord, sinon mémoire de la page ; rien si refus. */
export function readAttribution(): { first: Touch | null; last: Touch | null } {
  const consent = readConsent()
  if (consent === 'denied') return { first: null, last: null }
  const fromCookie = (name: string): Touch | null => {
    const raw = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`))
    if (!raw) return null
    try {
      return JSON.parse(decodeURIComponent(raw.slice(name.length + 1))) as Touch
    } catch {
      return null
    }
  }
  const mem = window.__swAttr
  return { first: fromCookie('sw_src') ?? mem?.first ?? null, last: fromCookie('sw_last') ?? mem?.last ?? null }
}
