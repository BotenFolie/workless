'use client'

// Blocs signature des sous-services : une mise en scène propre à chaque page,
// lisible sans JS (état initial complet rendu côté serveur).

import Link from 'next/link'
import { Fragment, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import type { Feature } from '@/lib/content/types'
import { IconArrow, IconCheck, IconCross, IconPhone, IconPin, IconStar } from './Icons'

type Props = { feature: Feature; ctaHref: string; ctaLabel: string; locale: 'fr' | 'es' }

export default function ServiceFeature(props: Props) {
  const f = props.feature
  switch (f.kind) {
    case 'sitemap':
      return <Sitemap f={f} />
    case 'anatomy':
      return <Anatomy f={f} />
    case 'redirects':
      return <Redirects f={f} />
    case 'report':
      return <Report f={f} />
    case 'localpack':
      return <LocalPack f={f} />
    case 'aiAnswer':
      return <AiAnswer f={f} />
    case 'adsChain':
      return <AdsChain f={f} locale={props.locale} />
    case 'selfCheck':
      return <SelfCheck f={f} ctaHref={props.ctaHref} ctaLabel={props.ctaLabel} />
  }
}

type Of<K extends Feature['kind']> = Extract<Feature, { kind: K }>

function Head({ h, p, id }: { h: string; p: string; id: string }) {
  return (
    <div className="rubrique">
      <h2 id={id} className="rubrique__h">
        {h}
      </h2>
      <p className="rubrique__p">{p}</p>
    </div>
  )
}

/* --- Site vitrine : plan du site, offre par offre -------------------------------- */

function Sitemap({ f }: { f: Of<'sitemap'> }) {
  const [tier, setTier] = useState<'essentiel' | 'signature'>('signature')
  const [active, setActive] = useState(f.nodes[0].id)
  const node = f.nodes.find((n) => n.id === active)!
  const roots = f.nodes.filter((n) => !n.parent)
  const childrenOf = (id: string) => f.nodes.filter((n) => n.parent === id)
  const off = (tierOf: 'all' | 'signature') => tier === 'essentiel' && tierOf === 'signature'
  const hid = useId()

  const node_ = (id: string) => {
    const n = f.nodes.find((x) => x.id === id)!
    return (
      <Fragment key={id}>
        <button
          type="button"
          className="smap__node"
          data-active={active === id || undefined}
          data-off={off(n.tier) || undefined}
          aria-pressed={active === id}
          onClick={() => setActive(id)}
        >
          {n.name}
        </button>
        {active === id && (
          <p className="smap__inline">
            {n.role}
            <span className="mono">{n.tier === 'all' ? f.includedIn.all : f.includedIn.signature}</span>
          </p>
        )}
      </Fragment>
    )
  }

  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />
      <div className="smap">
        <div className="seg" role="group" aria-label={f.h}>
          {(['essentiel', 'signature'] as const).map((t) => (
            <button key={t} type="button" aria-pressed={tier === t} onClick={() => setTier(t)}>
              {f.tiers[t]}
            </button>
          ))}
        </div>

        <div className="smap__tree">
          {roots.map((r) => (
            <div key={r.id} className="smap__root">
              {node_(r.id)}
              <ul className="smap__lvl">
                {childrenOf(r.id).map((c) => (
                  <li key={c.id}>
                    {node_(c.id)}
                    {childrenOf(c.id).length > 0 && (
                      <ul className="smap__sub">
                        {childrenOf(c.id).map((g) => (
                          <li key={g.id}>
                            {node_(g.id)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="smap__detail" aria-live="polite">
          <p className="smap__name">{node.name}</p>
          <p>{node.role}</p>
          <p className="mono smap__tier">
            {node.tier === 'all' ? f.includedIn.all : f.includedIn.signature}
          </p>
        </div>
      </div>

      <div className="every">
        <h3 className="every__h">{f.everyPageH}</h3>
        <ul className="every__list">
          {f.everyPage.map((pt) => (
            <li key={pt.t}>
              <IconCheck className="every__ic" />
              <span>
                <strong>{pt.t}.</strong> {pt.d}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* --- Landing page : anatomie annotée --------------------------------------------- */

function Anatomy({ f }: { f: Of<'anatomy'> }) {
  const [on, setOn] = useState<string | null>(null)
  const hid = useId()
  const hl = (b: string) => (on === b ? true : undefined)
  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />
      <div className="anat">
        <div className="anat__mock" aria-hidden="true">
          <div className="anat__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="anat__blk anat__hero" data-on={hl('hero')}>
            <b>{f.mock.title}</b>
            <i />
            <i className="short" />
          </div>
          <div className="anat__blk anat__cta" data-on={hl('cta')}>
            <IconPhone />
            {f.mock.cta}
          </div>
          <div className="anat__blk anat__proof" data-on={hl('proof')}>
            <span className="anat__stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <IconStar key={i} />
              ))}
            </span>
            {f.mock.proof}
          </div>
          <div className="anat__blk anat__offer" data-on={hl('offer')}>
            <b>{f.mock.offer}</b>
            <i />
            <i className="short" />
          </div>
          <div className="anat__blk anat__form" data-on={hl('form')}>
            <b>{f.mock.form}</b>
            <span className="anat__field" />
            <span className="anat__field" />
            <span className="anat__send">{f.mock.send}</span>
          </div>
        </div>

        <ol className="anat__list">
          {f.zones.map((z) => (
            <li key={z.block}>
              <button
                type="button"
                className="anat__zone"
                data-on={hl(z.block)}
                onMouseEnter={() => setOn(z.block)}
                onMouseLeave={() => setOn(null)}
                onFocus={() => setOn(z.block)}
                onBlur={() => setOn(null)}
                onClick={() => setOn(z.block)}
              >
                <span className="anat__t">{z.t}</span>
                <span className="anat__d">{z.d}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="every">
        <h3 className="every__h">{f.hiddenH}</h3>
        <ul className="every__list every__list--2">
          {f.hidden.map((pt) => (
            <li key={pt.t}>
              <IconCheck className="every__ic" />
              <span>
                <strong>{pt.t}.</strong> {pt.d}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* --- Migration SEO : plan de redirection + trois temps ---------------------------- */

function Redirects({ f }: { f: Of<'redirects'> }) {
  const ref = useRef<HTMLTableElement>(null)
  // idle (SSR / sans JS : tout visible) → armed (statuts masqués) → run (tests joués)
  const [run, setRun] = useState<'idle' | 'armed' | 'run'>('idle')
  const hid = useId()
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setRun('armed')
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun('run')
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />
      <div className="redir">
        <table ref={ref} className="redir__table" data-state={run}>
          <caption className="mono">{f.tableCaption}</caption>
          <thead>
            <tr>
              <th scope="col">{f.cols.from}</th>
              <th scope="col">
                <span className="sr-only">→</span>
              </th>
              <th scope="col">{f.cols.to}</th>
              <th scope="col">{f.cols.status}</th>
            </tr>
          </thead>
          <tbody>
            {f.rows.map((r, i) => (
              <tr key={r.from} style={{ ['--i' as string]: i }}>
                <td className="mono redir__from">
                  {r.from}
                  {r.note && <span className="redir__note">{r.note}</span>}
                </td>
                <td aria-hidden="true">
                  <IconArrow className="redir__arrow" />
                </td>
                <td className="mono redir__to">{r.to}</td>
                <td className="redir__status">
                  <span className="mono">301</span>
                  <span className="redir__ok">
                    <IconCheck />
                    {f.tested}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ol className="phases">
        {f.phases.map((ph) => (
          <li key={ph.h} className="phase">
            <h3 className="phase__h">{ph.h}</h3>
            <ul>
              {ph.items.map((it) => (
                <li key={it.t}>
                  <strong>{it.t}</strong>
                  <span>{it.d}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* --- Audit SEO : rapport à onglets ------------------------------------------------ */

function Report({ f }: { f: Of<'report'> }) {
  const names = [...f.tabs.map((t) => t.name), f.planTab]
  const [tab, setTab] = useState(0)
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const base = useId()
  const hid = useId()

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    e.preventDefault()
    const n = (tab + d + names.length) % names.length
    setTab(n)
    refs.current[n]?.focus()
  }

  const isPlan = tab === names.length - 1
  const t = f.tabs[tab]

  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />
      <div className="report">
        <p className="report__title mono">{f.docTitle}</p>
        <div className="report__tabs" role="tablist" aria-label={f.docTitle}>
          {names.map((n, i) => (
            <button
              key={n}
              ref={(el) => {
                refs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${base}-t${i}`}
              aria-controls={`${base}-p`}
              aria-selected={tab === i}
              tabIndex={tab === i ? 0 : -1}
              onClick={() => setTab(i)}
              onKeyDown={onKey}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="report__panel" role="tabpanel" id={`${base}-p`} aria-labelledby={`${base}-t${tab}`}>
          {isPlan ? (
            <>
              <p className="report__intro">{f.planIntro}</p>
              <ol className="plan-ladder">
                {f.plan.map((lv) => (
                  <li key={lv.level}>
                    <span className="plan-ladder__lv">{lv.level}</span>
                    <ul>
                      {lv.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <p className="report__ex mono">{f.example}</p>
            </>
          ) : (
            <>
              <p className="report__intro">{t.intro}</p>
              <ul className="report__checks">
                {t.checks.map((c) => (
                  <li key={c}>
                    <span className="report__box" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* --- SEO local : fiche Google annotée -------------------------------------------- */

function LocalPack({ f }: { f: Of<'localpack'> }) {
  const [on, setOn] = useState<string | null>(null)
  const hid = useId()
  const hl = (p: string) => (on === p ? true : undefined)
  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />
      <div className="lpack">
        <div className="lpack__mock" aria-hidden="true">
          <div className="lpack__search">
            <IconPin />
            {f.search}
          </div>
          <svg className="lpack__map" viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice">
            <path d="M0 40 H400 M0 105 H400 M70 0 V150 M190 0 V150 M320 0 V150 M0 150 L150 0 M250 150 L400 20" />
            <g className="lpack__pin lpack__pin--you" transform="translate(205 50)">
              <circle r="10" />
            </g>
            <g className="lpack__pin" transform="translate(95 95)">
              <circle r="7" />
            </g>
            <g className="lpack__pin" transform="translate(330 80)">
              <circle r="7" />
            </g>
          </svg>
          <div className="lpack__you">
            <p className="lpack__name" data-on={hl('nap')}>
              {f.you.name}
            </p>
            <p className="lpack__rev" data-on={hl('avis')}>
              <span className="lpack__stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} />
                ))}
              </span>
              {f.you.reviews}
            </p>
            <p className="lpack__meta" data-on={hl('fiche')}>
              {f.you.category} · {f.you.zone}
              <br />
              {f.you.hours}
            </p>
            <div className="lpack__acts">
              {f.you.actions.map((a, i) => (
                <span key={a} data-on={i === 1 ? hl('pages') : i === 0 ? hl('nap') : undefined}>
                  {a}
                </span>
              ))}
            </div>
            <code className="lpack__code" data-on={hl('data')}>
              {f.code}
            </code>
          </div>
          {f.others.map((o) => (
            <div key={o.name} className="lpack__other">
              <span>{o.name}</span>
              <span>{o.category}</span>
            </div>
          ))}
          <p className="lpack__illu mono">{f.illustration}</p>
        </div>

        <ul className="lpack__notes">
          {f.notes.map((n) => (
            <li key={n.part}>
              <button
                type="button"
                data-on={hl(n.part)}
                onMouseEnter={() => setOn(n.part)}
                onMouseLeave={() => setOn(null)}
                onFocus={() => setOn(n.part)}
                onBlur={() => setOn(null)}
                onClick={() => setOn(n.part)}
              >
                <span className="lpack__t">{n.t}</span>
                <span className="lpack__d">{n.d}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* --- Référencement IA : une réponse d'assistant décortiquée ---------------------- */

function AiAnswer({ f }: { f: Of<'aiAnswer'> }) {
  const [on, setOn] = useState<string | null>(null)
  const hid = useId()
  const hl = (p?: string) => (p && on === p ? true : undefined)
  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />
      <div className="aians">
        <div className="aians__chat" aria-hidden="true">
          <p className="aians__q">{f.question}</p>
          <div className="aians__a">
            <span className="aians__who mono">{f.assistant}</span>
            <p>
              {f.answer.map((seg, i) => (
                <span key={i} className={seg.part === 'identity' ? 'aians__ent' : undefined} data-on={hl(seg.part)}>
                  {seg.text}
                  {seg.cite && <sup className="mono">[{seg.cite}]</sup>}
                </span>
              ))}
            </p>
            <ol className="aians__src">
              {f.sources.map((s) => (
                <li key={s.label} className="mono" data-on={hl(s.part)}>
                  {s.label}
                </li>
              ))}
            </ol>
          </div>
          <p className="aians__illu mono">{f.illustration}</p>
        </div>

        <ul className="lpack__notes">
          {f.notes.map((n) => (
            <li key={n.part}>
              <button
                type="button"
                data-on={hl(n.part)}
                onMouseEnter={() => setOn(n.part)}
                onMouseLeave={() => setOn(null)}
                onFocus={() => setOn(n.part)}
                onBlur={() => setOn(null)}
                onClick={() => setOn(n.part)}
              >
                <span className="lpack__t">{n.t}</span>
                <span className="lpack__d">{n.d}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* --- Gestion Google Ads : la chaîne + le budget ----------------------------------- */

const FEE = 400

function AdsChain({ f, locale }: { f: Of<'adsChain'>; locale: 'fr' | 'es' }) {
  const [budget, setBudget] = useState(600)
  const hid = useId()
  const sid = useId()
  const fmt = (n: number) => new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'es-ES').format(n)
  const oursPct = (FEE / (FEE + budget)) * 100
  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />

      <div className="ad-mock" aria-hidden="true">
        <p className="ad-mock__top">
          <span className="ad-mock__sp">{f.ad.sponsored}</span>
          <span className="mono">{f.ad.url}</span>
        </p>
        <p className="ad-mock__title">{f.ad.title}</p>
        <p className="ad-mock__desc">{f.ad.desc}</p>
        <p className="ad-mock__call">
          <IconPhone />
          {f.ad.call}
        </p>
        <p className="ad-mock__illu mono">{f.illustration}</p>
      </div>

      <ol className="chain" style={{ ['--n' as string]: f.steps.length }}>
        {f.steps.map((s) => (
          <li key={s.t} className="chain__step">
            <h3 className="chain__t">{s.t}</h3>
            <p className="chain__d">{s.d}</p>
          </li>
        ))}
      </ol>

      <div className="budget">
        <div className="budget__txt">
          <h3 className="every__h">{f.budgetH}</h3>
          <p>{f.budgetP}</p>
          <label className="budget__label" htmlFor={sid}>
            {f.slider} <strong className="mono">{fmt(budget)} €</strong>
          </label>
          <input
            id={sid}
            className="budget__range"
            type="range"
            min={200}
            max={3000}
            step={100}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <div className="budget__viz">
          <div className="budget__bar" aria-hidden="true">
            <span className="budget__ours" style={{ width: `${oursPct}%` }} />
            <span className="budget__google" />
          </div>
          <dl className="budget__legend">
            <div>
              <dt>
                <span className="budget__sw budget__sw--ours" />
                {f.ours}
              </dt>
              <dd className="mono">
                {fmt(FEE)} € {f.perMonth}
              </dd>
            </div>
            <div>
              <dt>
                <span className="budget__sw budget__sw--google" />
                {f.google}
              </dt>
              <dd className="mono">
                {fmt(budget)} € {f.perMonth}
              </dd>
            </div>
            <div className="budget__total">
              <dt>{f.total}</dt>
              <dd className="mono">
                {fmt(FEE + budget)} € {f.perMonth}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

/* --- Audit Google Ads : autodiagnostic + termes de recherche ---------------------- */

type Ans = 'yes' | 'no' | 'unsure'

function SelfCheck({ f, ctaHref, ctaLabel }: { f: Of<'selfCheck'>; ctaHref: string; ctaLabel: string }) {
  const [ans, setAns] = useState<(Ans | null)[]>(f.questions.map(() => null))
  const hid = useId()
  const answered = ans.filter(Boolean).length
  const toCheck = ans.filter((a) => a === 'no' || a === 'unsure').length
  const done = answered === f.questions.length
  const msg = !done ? null : toCheck === 0 ? f.result.none : toCheck === f.questions.length ? f.result.all : f.result.some

  return (
    <div className="feat">
      <Head id={hid} h={f.h} p={f.p} />
      <div className="check">
        <ol className="check__list">
          {f.questions.map((q, i) => (
            <li key={q.q} className="check__q" data-ans={ans[i] ?? undefined}>
              <p className="check__text">{q.q}</p>
              <div className="seg seg--sm" role="radiogroup" aria-label={q.q}>
                {(['yes', 'no', 'unsure'] as const).map((a) => (
                  <button
                    key={a}
                    type="button"
                    role="radio"
                    aria-checked={ans[i] === a}
                    onClick={() => setAns((prev) => prev.map((x, j) => (j === i ? a : x)))}
                  >
                    {f.answers[a]}
                  </button>
                ))}
              </div>
              {ans[i] && ans[i] !== 'yes' && <p className="check__why">{q.why}</p>}
            </li>
          ))}
        </ol>
        <div className="check__result" aria-live="polite" data-done={done || undefined}>
          <p className="check__count mono">
            {answered} / {f.questions.length}
          </p>
          <p className="check__msg">{msg ?? f.p}</p>
          {done && toCheck > 0 && (
            <Link className="btn" href={ctaHref}>
              {f.result.cta || ctaLabel}
              <IconArrow />
            </Link>
          )}
        </div>
      </div>

      <div className="terms">
        <h3 className="every__h">{f.termsH}</h3>
        <table className="terms__table">
          <caption className="mono">{f.termsCaption}</caption>
          <thead>
            <tr>
              <th scope="col">{f.termsCols.term}</th>
              <th scope="col">{f.termsCols.verdict}</th>
            </tr>
          </thead>
          <tbody>
            {f.terms.map((t) => (
              <tr key={t.term} data-useful={t.useful || undefined}>
                <td className="mono">{t.term}</td>
                <td>
                  <span className="terms__v">
                    {t.useful ? <IconCheck /> : <IconCross />}
                    {t.useful ? f.useful : f.wasted}
                  </span>
                  <span className="terms__why">{t.why}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
