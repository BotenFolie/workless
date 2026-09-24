// Pages intérieures : services, métiers, réalisations, tarifs, abonnements, parrainage, studio…

import Image from 'next/image'
import Link from 'next/link'
import {
  CtaRow,
  EncartGrid,
  FaqList,
  FinalCta,
  JsonLd,
  LiveList,
  OffersGrid,
  PageHead,
  PlansList,
  Points,
  Rubrique,
  RunHead,
  StampCard,
  TeamList,
} from '../Blocks'
import LeadForm from '../LeadForm'
import { IconArrow, IconExternal, IconSearch } from '../Icons'
import { getRoute, href, ROUTES, routesOfKind, type Locale } from '@/lib/routes'
import { labelOf } from '@/lib/labels'
import { content, pages } from '@/lib/content'
import { REALISATIONS, getRealisation } from '@/lib/realisations'
import { STUDIO } from '@/lib/site'
import { absolute, articleJsonLd, breadcrumbJsonLd, faqJsonLd, orgJsonLd, serviceJsonLd } from '@/lib/seo'
import { ui } from '@/lib/ui'

type V = { locale: Locale; routeKey: string }

function crumbs(routeKey: string, locale: Locale) {
  return breadcrumbJsonLd(routeKey, locale, (k) => labelOf(k, locale))
}

function FaqBand({ locale, items }: { locale: Locale; items: { q: string; a: string }[] }) {
  if (!items.length) return null
  return (
    <section className="band band--paper" aria-labelledby="faq-h">
      <div className="wrap split">
        <h2 id="faq-h" className="rubrique__h">
          {ui(locale).faq}
        </h2>
        <FaqList items={items} />
      </div>
    </section>
  )
}

/* --- Service ------------------------------------------------------------------ */

export function ServiceView({ locale, routeKey }: V) {
  const route = getRoute(routeKey)!
  const s = content(locale).services[route.ref!]
  const sp = pages(locale).servicePage
  const children = ROUTES.filter((r) => r.parent === routeKey && r.kind === 'service' && r.paths[locale])
  const metiers = routeKey === 'creation' ? routesOfKind('metier').filter((r) => r.paths[locale]) : []
  const siblings = route.parent
    ? ROUTES.filter((r) => r.parent === route.parent && r.kind === 'service' && r.key !== routeKey && r.paths[locale])
    : []
  const url = absolute(href(routeKey, locale))

  return (
    <>
      <JsonLd data={[serviceJsonLd(s.h1, s.metaDesc, url, locale), crumbs(routeKey, locale), faqJsonLd(s.faq)]} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={s.h1} lead={s.lead} long={s.h1.length > 34}>
        <CtaRow locale={locale} secondary={{ href: href('tarifs', locale), label: labelOf('tarifs', locale) }} />
      </PageHead>

      <section className="band band--white" aria-labelledby="pts-h">
        <div className="wrap">
          <Rubrique id="pts-h" h={sp.points} />
          <Points items={s.points} />
          {s.sections?.map((sec) => (
            <div key={sec.h} className="prose" style={{ marginTop: 48 }}>
              <h2>{sec.h}</h2>
              {sec.p.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {(children.length > 0 || metiers.length > 0) && (
        <section className="band band--paper" aria-labelledby="more-h">
          <div className="wrap">
            <Rubrique id="more-h" h={sp.more} />
            <ul className="cols cols--3">
              {[...children, ...metiers].map((r) => (
                <li key={r.key}>
                  <Link className="leader" href={r.paths[locale]!}>
                    <span className="leader__name">{labelOf(r.key, locale)}</span>
                    <span className="leader__dots" aria-hidden="true" />
                    <span className="leader__val">
                          <IconArrow className="leader__arrow" />
                        </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {s.pricing && (
        <section className="band band--yellow" aria-labelledby="price-h">
          <div className="wrap">
            <Rubrique id="price-h" h={s.pricing.kind === 'offers' ? pages(locale).tarifs.label : pages(locale).abonnements.label} />
            {s.pricing.kind === 'offers' ? <OffersGrid locale={locale} /> : <PlansList locale={locale} only={s.pricing.id} />}
            <p style={{ marginTop: 20 }}>
              <Link className="more" href={href(s.pricing.kind === 'offers' ? 'tarifs' : 'abonnements', locale)}>
                {s.pricing.kind === 'offers' ? pages(locale).tarifs.h1 : pages(locale).abonnements.h1}
              </Link>
            </p>
          </div>
        </section>
      )}

      {s.proof.length > 0 && (
        <section className="band band--ink" aria-labelledby="proof-h">
          <div className="wrap">
            <Rubrique id="proof-h" h={sp.proof} />
            <EncartGrid slugs={s.proof} locale={locale} />
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className="band band--white" aria-labelledby="rel-h">
          <div className="wrap">
            <Rubrique id="rel-h" h={sp.related} />
            <ul className="cols cols--3">
              {siblings.map((r) => (
                <li key={r.key}>
                  <Link className="leader" href={r.paths[locale]!}>
                    <span className="leader__name">{labelOf(r.key, locale)}</span>
                    <span className="leader__dots" aria-hidden="true" />
                    <span className="leader__val">
                          <IconArrow className="leader__arrow" />
                        </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FaqBand locale={locale} items={s.faq} />
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

/* --- Métier -------------------------------------------------------------------- */

export function MetierView({ locale, routeKey }: V) {
  const route = getRoute(routeKey)!
  const m = content(locale).metiers[route.ref!]
  const mp = pages(locale).metierPage
  const url = absolute(href(routeKey, locale))
  const others = routesOfKind('metier').filter((r) => r.key !== routeKey && r.paths[locale])

  return (
    <>
      <JsonLd data={[serviceJsonLd(m.h1, m.metaDesc, url, locale), crumbs(routeKey, locale), faqJsonLd(m.faq)]} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={m.h1} lead={m.lead} long>
        <CtaRow locale={locale} secondary={{ href: href('tarifs', locale), label: labelOf('tarifs', locale) }} />
      </PageHead>

      <section className="band band--white" aria-labelledby="feat-h">
        <div className="wrap split">
          <div className="stack">
            <h2 className="rubrique__h" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              {mp.searches}
            </h2>
            <ul className="searches">
              {m.searches.map((q) => (
                <li key={q}>
                  <IconSearch />
                  {q}
                </li>
              ))}
            </ul>
            <p className="note-inline">{mp.searchesNote}</p>
          </div>
          <div>
            <h2 id="feat-h" className="rubrique__h" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: 12 }}>
              {mp.features}
            </h2>
            <ul className="points" style={{ gridTemplateColumns: '1fr' }}>
              {m.features.map((f) => (
                <li key={f.t} className="point">
                  <span className="point__t">{f.t}</span>
                  <span className="point__d">{f.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {(m.proof.length > 0 || m.live.length > 0) && (
        <section className="band band--ink" aria-labelledby="proof-h">
          <div className="wrap">
            <Rubrique id="proof-h" h={mp.proof} />
            <EncartGrid slugs={m.proof} locale={locale} />
            {m.live.length > 0 && (
              <div style={{ marginTop: m.proof.length ? 40 : 0 }}>
                <LiveList locale={locale} names={m.live} />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="band band--yellow" aria-labelledby="price-h">
        <div className="wrap">
          <Rubrique id="price-h" h={pages(locale).tarifs.label} />
          <OffersGrid locale={locale} />
        </div>
      </section>

      <FaqBand locale={locale} items={m.faq} />

      <section className="band band--white" aria-labelledby="other-h">
        <div className="wrap">
          <Rubrique id="other-h" h={mp.otherMetiers} />
          <ul className="cols cols--3">
            {others.map((r) => (
              <li key={r.key}>
                <Link className="leader" href={r.paths[locale]!}>
                  <span className="leader__name">{content(locale).metiers[r.ref!].rubrique}</span>
                  <span className="leader__dots" aria-hidden="true" />
                  <span className="leader__val">
                          <IconArrow className="leader__arrow" />
                        </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

/* --- Réalisations ------------------------------------------------------------- */

export function RealisationsView({ locale, routeKey }: V) {
  const p = pages(locale).realisations
  const web = REALISATIONS.filter((r) => r.kind === 'web').map((r) => r.slug)
  const apps = REALISATIONS.filter((r) => r.kind === 'app').map((r) => r.slug)
  return (
    <>
      <JsonLd data={crumbs(routeKey, locale)} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} />
      <section className="band band--ink" aria-label={p.h1}>
        <div className="wrap">
          <EncartGrid slugs={web} locale={locale} />
          <div className="stack" style={{ marginTop: 64 }}>
            <h2 className="svc__h">{pages(locale).home.liveH}</h2>
            <LiveList locale={locale} />
          </div>
        </div>
      </section>
      <section className="band band--paper" aria-labelledby="apps-h">
        <div className="wrap">
          <Rubrique id="apps-h" h={p.appsH} p={p.appsP} />
          <EncartGrid slugs={apps} locale={locale} />
        </div>
      </section>
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

export function RealisationView({ locale, routeKey }: V) {
  const route = getRoute(routeKey)!
  const r = getRealisation(route.ref!)!
  const p = pages(locale).realisations
  const idx = REALISATIONS.findIndex((x) => x.slug === r.slug)
  const next = REALISATIONS[(idx + 1) % REALISATIONS.length]
  const steps = [
    { h: p.problem, t: r.problem[locale] },
    { h: p.built, t: r.built[locale] },
    { h: p.strategy, t: r.strategy[locale] },
    { h: p.result, t: r.result[locale] },
  ]
  return (
    <>
      <JsonLd data={crumbs(routeKey, locale)} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={r.name} lead={`${r.category[locale]} · ${r.place[locale]}`}>
        <div className="btn-row">
          <a className="btn" href={r.url} target="_blank" rel="noopener">
            {ui(locale).seeSite} <IconExternal />
          </a>
          {r.metier && getRoute(r.metier)?.paths[locale] && (
            <Link className="btn btn--ghost" href={href(r.metier, locale)}>
              {labelOf(r.metier, locale)}
            </Link>
          )}
        </div>
      </PageHead>
      <section className="band band--white">
        <div className="wrap case">
          <div className="case__shot">
            <Image src={r.image} alt={`${r.name} — ${r.category[locale]}`} width={r.width} height={r.height} sizes="(min-width: 1000px) 45vw, 100vw" priority />
          </div>
          <div>
            <div className="metric-big">
              <strong>{r.heroMetric[locale]}</strong>
              <span>{r.heroLabel[locale]}</span>
            </div>
            <div className="tagline" style={{ marginTop: 16 }}>
              {r.tags.map((tg) => (
                <span key={tg} className="tag">
                  {tg}
                </span>
              ))}
            </div>
            {steps.map((st) => (
              <div key={st.h} className="case__step">
                <h2>{st.h}</h2>
                <p>{st.t}</p>
              </div>
            ))}
            <p style={{ marginTop: 28 }}>
              <Link className="more" href={href(`r-${next.slug}`, locale)}>
                {p.next} : {next.name}
              </Link>
            </p>
          </div>
        </div>
      </section>
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

/* --- Tarifs, abonnements, parrainage ----------------------------------------- */

export function TarifsView({ locale, routeKey }: V) {
  const p = pages(locale).tarifs
  return (
    <>
      <JsonLd data={[crumbs(routeKey, locale), faqJsonLd(p.faq)]} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} long />
      <section className="band band--white" aria-label={p.h1}>
        <div className="wrap">
          <OffersGrid locale={locale} headingAs="h2" />
          <div className="split" style={{ marginTop: 56 }}>
            <div className="stack">
              <h2 className="svc__h">{p.included}</h2>
              <ul className="prose">
                {p.includedList.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="stack">
              <h2 className="svc__h">{p.notIncluded}</h2>
              <ul className="prose">
                {p.notIncludedList.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--ink" aria-labelledby="plans-h">
        <div className="wrap split">
          <div className="stack">
            <h2 id="plans-h" className="rubrique__h" style={{ borderBottomColor: 'var(--bg)' }}>
              {p.plansTeaser}
            </h2>
          </div>
          <div className="stack">
            <p className="rubrique__p">{p.plansTeaserP}</p>
            <p>
              <Link className="btn" href={href('abonnements', locale)}>
                {p.plansLink}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <FaqBand locale={locale} items={p.faq} />
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

export function AbonnementsView({ locale, routeKey }: V) {
  const p = pages(locale).abonnements
  return (
    <>
      <JsonLd data={[crumbs(routeKey, locale), faqJsonLd(p.faq)]} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} long />
      <section className="band band--white" aria-label={p.h1}>
        <div className="wrap">
          <PlansList locale={locale} />
          <div className="stack" style={{ marginTop: 32 }}>
            <p className="rubrique__p">{p.combo}</p>
            <p className="mono">
              <span className="placeholder">{p.commitment}</span>
            </p>
          </div>
        </div>
      </section>
      <FaqBand locale={locale} items={p.faq} />
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

export function ParrainageView({ locale, routeKey }: V) {
  const p = pages(locale).parrainage
  return (
    <>
      <JsonLd data={crumbs(routeKey, locale)} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} long />
      <section className="band band--white">
        <div className="wrap split">
          <div className="stack">
            <h2 className="svc__h">{p.howH}</h2>
            <ol className="points" style={{ gridTemplateColumns: '1fr' }}>
              {p.how.map((x) => (
                <li key={x} className="point">
                  <span className="point__d" style={{ color: 'var(--ink)' }}>
                    {x}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mono">{p.example}</p>
          </div>
          <StampCard locale={locale} />
        </div>
      </section>
      <section className="band band--paper">
        <div className="wrap split">
          <div className="stack">
            <h2 className="svc__h">{p.rulesH}</h2>
            <ul className="prose">
              {p.rules.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="stack">
            <h2 className="svc__h">{p.afterH}</h2>
            <p>{p.after}</p>
            <p>
              <Link className="more" href={href('audit', locale)}>
                {p.cta}
              </Link>
            </p>
          </div>
        </div>
      </section>
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

/* --- Studio, audit, contact ---------------------------------------------------- */

export function StudioView({ locale, routeKey }: V) {
  const p = pages(locale).studio
  return (
    <>
      <JsonLd data={[orgJsonLd(locale), crumbs(routeKey, locale)]} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} />
      <section className="band band--white" aria-label={p.h1}>
        <div className="wrap">
          <TeamList locale={locale} headingAs="h2" />
        </div>
      </section>
      <section className="band band--paper" aria-labelledby="how-h">
        <div className="wrap">
          <Rubrique id="how-h" h={p.howH} />
          <Points items={p.how} />
          <div className="prose" style={{ marginTop: 48 }}>
            <h2>{p.notH}</h2>
            <p>{p.not}</p>
          </div>
        </div>
      </section>
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

export function AuditView({ locale, routeKey }: V) {
  const p = pages(locale).audit
  const t = ui(locale)
  return (
    <>
      <JsonLd data={crumbs(routeKey, locale)} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} long />
      <section className="band band--white" aria-labelledby="form-h">
        <div className="wrap split">
          <div className="stack">
            <h2 className="svc__h">{p.checksH}</h2>
            <ul className="prose">
              {p.checks.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="mono">{pages(locale).parrainage.cta}</p>
          </div>
          <div className="formbox">
            <h2 id="form-h" className="svc__h" style={{ marginBottom: 20 }}>
              {p.formH}
            </h2>
            <LeadForm type="audit" locale={locale} labels={t.form} submitLabel={t.ctaLong} fallbackEmail={STUDIO.email} />
          </div>
        </div>
      </section>
    </>
  )
}

export function ContactView({ locale, routeKey }: V) {
  const p = pages(locale).contact
  const t = ui(locale)
  return (
    <>
      <JsonLd data={crumbs(routeKey, locale)} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} />
      <section className="band band--white" aria-labelledby="form-h">
        <div className="wrap split">
          <div className="stack">
            <h2 className="svc__h">{p.emailLabel}</h2>
            <p>
              <a className="more" href={`mailto:${STUDIO.email}`}>
                {STUDIO.email}
              </a>
            </p>
            {STUDIO.phone && (
              <p>
                <a className="more" href={`tel:${STUDIO.phone.replace(/\s/g, '')}`}>
                  {STUDIO.phone}
                </a>
              </p>
            )}
            <p>
              <Link className="btn btn--ghost" href={href('audit', locale)}>
                {t.ctaLong}
              </Link>
            </p>
          </div>
          <div className="formbox">
            <h2 id="form-h" className="svc__h" style={{ marginBottom: 20 }}>
              {p.formH}
            </h2>
            <LeadForm type="contact" locale={locale} labels={t.form} submitLabel={t.form.send} fallbackEmail={STUDIO.email} />
          </div>
        </div>
      </section>
    </>
  )
}

/* --- Conseils ------------------------------------------------------------------ */

export function ConseilsView({ locale, routeKey }: V) {
  const p = pages(locale).conseils
  const articles = routesOfKind('article').filter((r) => r.paths[locale])
  return (
    <>
      <JsonLd data={crumbs(routeKey, locale)} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={p.h1} lead={p.lead} />
      <section className="band band--white" aria-label={p.h1}>
        <div className="wrap">
          <ul className="bigindex">
            {articles.map((r) => {
              const a = content(locale).articles[r.ref!]
              return (
                <li key={r.key}>
                  <Link href={r.paths[locale]!} style={{ gridTemplateColumns: '1fr auto' }}>
                    <span className="bigindex__name" style={{ fontSize: 'clamp(1.7rem, 4vw, 3rem)' }}>
                      {a.h1}
                    </span>
                    <span className="bigindex__meta mono">{p.read}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}

export function ArticleView({ locale, routeKey }: V) {
  const route = getRoute(routeKey)!
  const a = content(locale).articles[route.ref!]
  const p = pages(locale).conseils
  const url = absolute(href(routeKey, locale))
  const date = new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'es-ES', { dateStyle: 'long' }).format(new Date(a.date))
  return (
    <>
      <JsonLd data={[articleJsonLd(a.h1, a.metaDesc, url, a.date, locale), crumbs(routeKey, locale)]} />
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={a.h1} lead={a.lead} long>
        <p className="mono" style={{ marginTop: 16 }}>
          {p.published} <time dateTime={a.date}>{date}</time>
        </p>
      </PageHead>
      <section className="band band--white">
        <div className="wrap">
          <article className="prose">
            {a.sections.map((s) => (
              <section key={s.h} className="prose">
                <h2>{s.h}</h2>
                {s.p.map((para) => (
                  <p key={para}>{para}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            {a.sources && (
              <section className="prose">
                <h2>{p.sources}</h2>
                <ul>
                  {a.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener nofollow">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        </div>
      </section>
      <section className="band band--paper" aria-labelledby="rel-h">
        <div className="wrap">
          <Rubrique id="rel-h" h={p.related} />
          <ul className="cols cols--3">
            {a.related
              .filter((k) => getRoute(k)?.paths[locale])
              .map((k) => (
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
        </div>
      </section>
      <FinalCta locale={locale} h={pages(locale).home.finalH} p={pages(locale).home.finalP} />
    </>
  )
}

/* --- Pages légales ------------------------------------------------------------ */

export function LegalView({ locale, routeKey }: V) {
  const route = getRoute(routeKey)!
  const l = content(locale).legal[route.ref!]
  return (
    <>
      <RunHead locale={locale} current={routeKey} />
      <PageHead h1={l.h1} />
      <section className="band band--white">
        <div className="wrap">
          <div className="prose">
            {l.sections.map((s) => (
              <section key={s.h} className="prose">
                <h2>{s.h}</h2>
                {s.p.map((para) => (
                  <p key={para}>
                    {para.includes('[À CONFIRMER') ? <span className="placeholder">{para}</span> : para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
