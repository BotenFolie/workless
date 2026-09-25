'use client'
// Bandeau de consentement : accepter et refuser au même niveau, choix modifiable depuis le pied de page.

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { readConsent, saveConsent } from '@/lib/consent'
import { href, type Locale } from '@/lib/routes'

const TEXT = {
  fr: {
    title: 'Retenir d’où vous venez ?',
    body: 'Avec votre accord, deux cookies propres à ce site retiennent la page par laquelle vous êtes arrivé et la campagne éventuelle, pour savoir quels canaux nous amènent des demandes. Aucune publicité, aucun outil tiers.',
    more: 'En savoir plus',
    accept: 'Accepter',
    refuse: 'Refuser',
  },
  es: {
    title: '¿Recordamos de dónde viene?',
    body: 'Con su permiso, dos cookies propias de esta web recuerdan la página por la que llegó y la campaña, si la hay, para saber qué canales nos traen peticiones. Sin publicidad ni herramientas de terceros.',
    more: 'Más información',
    accept: 'Aceptar',
    refuse: 'Rechazar',
  },
}

export default function CookieConsent({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const t = TEXT[locale]
  const acceptRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Lecture du cookie au montage (indisponible au rendu serveur)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(readConsent() === null)
    const reopen = () => {
      setOpen(true)
      requestAnimationFrame(() => acceptRef.current?.focus())
    }
    window.addEventListener('sw:consent-open', reopen)
    return () => window.removeEventListener('sw:consent-open', reopen)
  }, [])

  if (!open) return null

  const choose = (granted: boolean) => {
    saveConsent(granted)
    setOpen(false)
  }

  return (
    <section className="consent" role="region" aria-labelledby="consent-title">
      <p className="consent__title" id="consent-title">
        {t.title}
      </p>
      <p className="consent__body">
        {t.body} <Link href={href('confidentialite', locale)}>{t.more}</Link>
      </p>
      <div className="consent__actions">
        <button type="button" className="btn btn--ghost consent__btn" onClick={() => choose(false)}>
          {t.refuse}
        </button>
        <button type="button" className="btn consent__btn" ref={acceptRef} onClick={() => choose(true)}>
          {t.accept}
        </button>
      </div>
    </section>
  )
}

/** Lien du pied de page pour revoir son choix. */
export function CookieSettingsLink({ label }: { label: string }) {
  return (
    <button type="button" className="footer__linkbtn" onClick={() => window.dispatchEvent(new CustomEvent('sw:consent-open'))}>
      {label}
    </button>
  )
}
