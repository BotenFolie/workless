// Blocs réutilisables de l'annuaire (serveur)

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import LeadForm from './LeadForm'
import { IconArrow, IconExternal } from './Icons'
import { breadcrumbChain, href, ROUTES, type Locale } from '@/lib/routes'
import { labelOf } from '@/lib/labels'
import { ui } from '@/lib/ui'
import { formatPrice, OFFERS, PLANS, PRICE_UNIT, STUDIO } from '@/lib/site'
import { getRealisation, LIVE_SITES, type Realisation } from '@/lib/realisations'
import type { Faq, Point } from '@/lib/content/types'
import { pages } from '@/lib/content'

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

/** Tête de page : fil d'Ariane + folio (numéro de page de l'annuaire) */
export function RunHead({ locale, current }: { locale: Locale; current: string }) {
  const t = ui(locale)
  const chain = breadcrumbChain(current)
  const folio = ROUTES.findIndex((r) => r.key === current) + 1
  return (
    <div className="runhead">
      <div className="wrap runhead__in">
        <nav aria-label={locale === 'fr' ? 'Fil d’Ariane' : 'Ruta de navegación'}>
          <ol className="crumbs">
            <li>
              <Link href={href('home', locale)}>{t.home}</Link>
            </li>
            {chain.map((r, i) => (
              <li key={r.key}>
                {i === chain.length - 1 ? (
                  <span aria-current="page">{labelOf(r.key, locale)}</span>
                ) : (
                  <Link href={href(r.key, locale)}>{labelOf(r.key, locale)}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <span className="runhead__dots" aria-hidden="true" />
        <span className="runhead__folio" aria-hidden="true">
          {t.folio} {folio}
        </span>
      </div>
    </div>
  )
}

export function PageHead({ h1, lead, long, children }: { h1: string; lead?: string; long?: boolean; children?: ReactNode }) {
  return (
    <header className="phead">
      <div className="wrap">
        <h1 className={`phead__h${long ? ' phead__h--long' : ''}`}>{h1}</h1>
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </header>
  )
}

export function Rubrique({ h, p, as = 'h2', id }: { h: string; p?: string; as?: 'h2' | 'h3'; id?: string }) {
  const H = as
  return (
    <div className="rubrique">
      <H id={id} className="rubrique__h">
        {h}
      </H>
      {p && <p className="rubrique__p">{p}</p>}
    </div>
  )
}

export function Points({ items }: { items: Point[] }) {
  return (
    <ul className="points">
      {items.map((it) => (
        <li key={it.t} className="point">
          <span className="point__t">{it.t}</span>
          <span className="point__d">{it.d}</span>
        </li>
      ))}
    </ul>
  )
}

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  )
}

export function CtaRow({ locale, secondary }: { locale: Locale; secondary?: { href: string; label: string } }) {
  const t = ui(locale)
  return (
    <div className="btn-row">
      <Link className="btn" href={href('audit', locale)}>
        {t.ctaLong}
        <IconArrow />
      </Link>
      {secondary && (
        <Link className="btn btn--ghost" href={secondary.href}>
          {secondary.label}
        </Link>
      )}
    </div>
  )
}

/** Encart publicitaire d'une réalisation */
export function Encart({ r, locale, priority }: { r: Realisation; locale: Locale; priority?: boolean }) {
  return (
    <Link className="encart" href={href(`r-${r.slug}`, locale)}>
      <span className="encart__shot">
        <Image
          src={r.image}
          alt={`${r.name} — ${r.category[locale]}`}
          width={r.width}
          height={r.height}
          sizes="(min-width: 1100px) 50vw, (min-width: 700px) 50vw, 100vw"
          priority={priority}
        />
      </span>
      <span className="encart__body">
        <span className="encart__cat mono">
          {r.category[locale]} · {r.place[locale]}
        </span>
        <span className="encart__name">{r.name}</span>
        <span className="encart__metric">
          <strong>{r.heroMetric[locale]}</strong>
          <span>{r.heroLabel[locale]}</span>
        </span>
      </span>
    </Link>
  )
}

export function EncartGrid({ slugs, locale }: { slugs: string[]; locale: Locale }) {
  const items = slugs.map(getRealisation).filter((r): r is Realisation => Boolean(r))
  if (!items.length) return null
  return (
    <div className="encart-grid">
      {items.map((r, i) => (
        <Encart key={r.slug} r={r} locale={locale} priority={i < 2} />
      ))}
    </div>
  )
}

/** Sites livrés en ligne, en lignes d'annuaire */
export function LiveList({ locale, names }: { locale: Locale; names?: string[] }) {
  const list = names ? LIVE_SITES.filter((s) => names.includes(s.name)) : LIVE_SITES
  if (!list.length) return null
  return (
    <ul className="cols cols--2">
      {list.map((s) => (
        <li key={s.name}>
          <a className="leader" href={s.url} target="_blank" rel="noopener">
            <span className="leader__name">
              {s.name}
              <span className="leader__sub">
                {s.activity[locale]} · {s.place}
              </span>
            </span>
            <span className="leader__dots" aria-hidden="true" />
            <span className="leader__val mono">
              {ui(locale).seeSite} <IconExternal className="inline-ico" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

/** Grille des trois offres projet */
export function OffersGrid({ locale }: { locale: Locale }) {
  const t = ui(locale)
  const p = pages(locale).tarifs
  return (
    <>
      <div className="offers">
        {OFFERS.map((o) => (
          <article key={o.id} className={`offer${o.id === 'signature' ? ' offer--main' : ''}`}>
            <h3 className="offer__name">{o.name[locale]}</h3>
            <p className="offer__price">
              <span className="offer__from mono" aria-hidden={!o.from} style={o.from ? undefined : { visibility: 'hidden' }}>
                {t.from}
              </span>
              <span className="offer__num">{formatPrice(o.price, locale)}</span>
              <span className="mono">{PRICE_UNIT[locale]}</span>
            </p>
            <div className="stack" style={{ gap: 14 }}>
              <p className="offer__pitch">{o.pitch[locale]}</p>
              <ul>
                {o.includes[locale].map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <Link className="btn" href={href('audit', locale)}>
              {p.choose} {o.name[locale]}
            </Link>
          </article>
        ))}
      </div>
      <p className="offer-note mono">{p.payment}</p>
    </>
  )
}

/** Lignes d'abonnements (hors grille de prix) */
export function PlansList({ locale, only }: { locale: Locale; only?: string }) {
  const p = pages(locale).abonnements
  const list = only ? PLANS.filter((pl) => pl.id === only) : PLANS
  return (
    <div className="plans">
      {list.map((pl) => (
        <article key={pl.id} className="plan">
          <h3 className="plan__name">{pl.name[locale]}</h3>
          <p className="plan__body">
            {pl.body[locale]}
            {pl.note && <strong className="plan__note">{pl.note[locale]}</strong>}
            {pl.serviceKey && !only && (
              <Link className="more plan__note" href={href(pl.serviceKey, locale)}>
                {p.see}
              </Link>
            )}
          </p>
          <p className="plan__price">
            <strong>{formatPrice(pl.price, locale)}</strong>
            <span className="mono">{pl.unit[locale]}</span>
          </p>
        </article>
      ))}
    </div>
  )
}

/** Carte de parrainage : cinq cases tamponnées */
export function StampCard({ locale }: { locale: Locale }) {
  const p = pages(locale).parrainage
  return (
    <div className="stampcard">
      <div className="stampcard__head">
        <span className="stampcard__title">{p.card}</span>
        <span className="mono">Stripwork</span>
      </div>
      <div className="stamps">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="stamp">
            <span className="stamp__v">-{n * 10}%</span>
          </div>
        ))}
      </div>
      <div className="stampcard__foot mono">
        <span>1 {p.stamp} = -10 %</span>
        <span>5 = -50 %</span>
      </div>
    </div>
  )
}

/** Bloc final : appel + formulaire d'audit */
export function FinalCta({ locale, h, p }: { locale: Locale; h: string; p: string }) {
  const t = ui(locale)
  return (
    <section className="band band--ink" aria-labelledby="final-h">
      <div className="wrap split">
        <div className="stack">
          <h2 id="final-h" className="rubrique__h" style={{ borderBottomColor: 'var(--bg)' }}>
            {h}
          </h2>
          <p className="rubrique__p">{p}</p>
          <p className="mono">
            <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
          </p>
        </div>
        <div className="formbox">
          <LeadForm type="audit" locale={locale} labels={t.form} submitLabel={t.ctaLong} fallbackEmail={STUDIO.email} />
        </div>
      </div>
    </section>
  )
}
