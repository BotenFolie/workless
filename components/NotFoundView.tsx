// 404 de l'annuaire : la page n'est pas dans la rubrique

import Link from 'next/link'
import { IconArrow } from './Icons'
import { href, type Locale } from '@/lib/routes'
import { labelOf } from '@/lib/labels'
import { pages } from '@/lib/content'
import { ui } from '@/lib/ui'

export default function NotFoundView({ locale }: { locale: Locale }) {
  const p = pages(locale).notFound
  const keys = ['home', 'creation', 'refonte', 'seo', 'ads', 'realisations', 'tarifs', 'audit']
  return (
    <main id="contenu">
      <section className="phead" style={{ minHeight: '70svh' }}>
        <div className="wrap stack">
          <p className="mono">404</p>
          <h1 className="phead__h phead__h--long">{p.h1}</h1>
          <p className="lead">{p.p}</p>
          <ul className="cols cols--2" style={{ maxWidth: 820 }}>
            {keys.map((k) => (
              <li key={k}>
                <Link className="leader" href={href(k, locale)}>
                  <span className="leader__name">{labelOf(k, locale)}</span>
                  <span className="leader__dots" aria-hidden="true" />
                  <span className="leader__val">
                          <IconArrow className="leader__arrow" />
                        </span>
                </Link>
              </li>
            ))}
          </ul>
          <p>
            <Link className="btn" href={href('audit', locale)}>
              {ui(locale).ctaLong}
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
