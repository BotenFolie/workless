// Coque commune : en-tête, onglets de tranche, contenu, pied de page

import Link from 'next/link'
import type { ReactNode } from 'react'
import Header from './Header'
import { breadcrumbChain, getRoute, href, ROUTES, routesOfKind, type Locale } from '@/lib/routes'
import { IconArrow } from './Icons'
import { labelOf } from '@/lib/labels'
import { ui } from '@/lib/ui'
import { STUDIO } from '@/lib/site'

type Props = { locale: Locale; current: string; children: ReactNode }

/** Section de premier niveau à laquelle appartient la page (pour l'état actif) */
function sectionOf(key: string): string {
  const chain = breadcrumbChain(key)
  const root = chain[0]?.key ?? key
  if (root.startsWith('r-')) return 'realisations'
  if (root === 'abonnements' || root === 'parrainage') return 'tarifs'
  return root
}

/** Sous-pages proposées dans le volet d'un onglet de tranche */
function subPagesOf(key: string, locale: Locale): string[] {
  if (key === 'tarifs') return ['abonnements', 'parrainage']
  return ROUTES.filter((r) => r.parent === key && r.kind === 'service' && r.paths[locale]).map((r) => r.key)
}

export default function Shell({ locale, current, children }: Props) {
  const t = ui(locale)
  const other: Locale = locale === 'fr' ? 'es' : 'fr'
  const section = sectionOf(current)
  const otherHref = getRoute(current)?.paths[other] ?? href('home', other)

  const nav = t.nav.map((n) => ({ href: href(n.key, locale), label: n.label, active: section === n.key }))
  const extra = [
    { href: href('studio', locale), label: labelOf('studio', locale) },
    { href: href('conseils', locale), label: labelOf('conseils', locale) },
    { href: href('contact', locale), label: labelOf('contact', locale) },
    { href: otherHref, label: t.otherLangLabel },
  ]

  const services = ['creation', 'vitrine', 'landing', 'refonte', 'seo', 'seoLocal', 'ads']
  const metiers = routesOfKind('metier').filter((r) => r.paths[locale])

  return (
    <>
      <a className="skip" href="#contenu">
        {t.skip}
      </a>
      <Header
        homeHref={href('home', locale)}
        tagline={t.tagline}
        nav={nav}
        extra={extra}
        cta={{ href: href('audit', locale), label: t.cta }}
        lang={{ href: otherHref, label: t.otherLang, title: t.otherLangLabel, hrefLang: other }}
        phone={STUDIO.phone}
        labels={{ menu: t.menu, close: t.close, call: t.call }}
      />

      <nav className="thumbs" aria-label={locale === 'fr' ? 'Index' : 'Índice'}>
        {t.nav.map((n) => {
          const subs = subPagesOf(n.key, locale)
          return (
            <div key={n.key} className="thumb">
              <Link className="thumb__tab" href={href(n.key, locale)} data-active={section === n.key}>
                {n.label}
              </Link>
              {subs.length > 0 && (
                <div className="thumb__fly">
                  <Link className="thumb__parent" href={href(n.key, locale)} aria-current={current === n.key ? 'page' : undefined}>
                    {labelOf(n.key, locale)}
                  </Link>
                  <ul>
                    {subs.map((k) => (
                      <li key={k}>
                        <Link href={href(k, locale)} aria-current={current === k ? 'page' : undefined}>
                          <span>{labelOf(k, locale)}</span>
                          <IconArrow className="thumb__arrow" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <main id="contenu">{children}</main>

      <footer className="footer">
        <div className="wrap">
          <p className="footer__brand" aria-hidden="true">
            Stripwork
          </p>
          <div className="footer__cols">
            <div>
              <p className="footer__h">{t.footer.services}</p>
              <ul>
                {services.map((k) => (
                  <li key={k}>
                    <Link href={href(k, locale)}>{labelOf(k, locale)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__h">{t.footer.metiers}</p>
              <ul>
                {metiers.map((r) => (
                  <li key={r.key}>
                    <Link href={r.paths[locale]!}>{labelOf(r.key, locale)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__h">{t.footer.studio}</p>
              <ul>
                {['studio', 'realisations', 'tarifs', 'abonnements', 'parrainage', 'conseils'].map((k) => (
                  <li key={k}>
                    <Link href={href(k, locale)}>{labelOf(k, locale)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer__h">{t.footer.info}</p>
              <ul>
                <li>
                  <Link href={href('audit', locale)}>{labelOf('audit', locale)}</Link>
                </li>
                <li>
                  <Link href={href('contact', locale)}>{labelOf('contact', locale)}</Link>
                </li>
                <li>
                  <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
                </li>
                <li>
                  <Link href={href('mentions', locale)}>{labelOf('mentions', locale)}</Link>
                </li>
                <li>
                  <Link href={href('confidentialite', locale)}>{labelOf('confidentialite', locale)}</Link>
                </li>
                <li>
                  <a href={otherHref} hrefLang={other}>
                    {t.otherLangLabel}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__base">
            <span>
              © {new Date().getFullYear()} Stripwork · {t.footer.rights}
            </span>
            <span>{t.tagline}</span>
          </div>
        </div>
      </footer>
    </>
  )
}
