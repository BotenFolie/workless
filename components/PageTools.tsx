'use client'

// Outils interactifs des pages Tarifs et Réalisations.
// Rendu serveur complet par défaut (sans JS : tout visible, valeurs par défaut).

import { useId, useState, type ReactNode } from 'react'
import { IconCheck } from './Icons'

type Locale = 'fr' | 'es'

const L = {
  fr: {
    compareH: 'Comparer les offres',
    compareP: 'Ce qui est compris dans chaque offre, ligne par ligne. Création ou refonte : même grille.',
    feature: 'Ce qui est compris',
    pick: 'Voir l’offre',
    calcH: 'Ce que vous payez, et quand',
    calcP: 'La moitié à la commande, le reste à la mise en ligne. Chaque entreprise que vous nous recommandez et qui tient un rendez-vous retire 10 % du prix, déduits du solde.',
    offer: 'Offre',
    rdv: 'Rendez-vous tenus grâce à vous',
    less: 'Retirer un rendez-vous',
    more: 'Ajouter un rendez-vous',
    deposit: 'Acompte à la commande',
    balance: 'Solde à la mise en ligne',
    saved: 'Économisé grâce au parrainage',
    total: 'Total payé',
    free: 'Solde offert',
    unit: '€ HT',
    all: 'Toutes',
    count: (n: number) => `${n} réalisation${n > 1 ? 's' : ''}`,
  },
  es: {
    compareH: 'Comparar las ofertas',
    compareP: 'Lo que incluye cada oferta, línea por línea. Web nueva o rediseño: mismos precios.',
    feature: 'Qué incluye',
    pick: 'Ver la oferta',
    calcH: 'Qué paga, y cuándo',
    calcP: 'La mitad al encargar, el resto en la publicación. Cada empresa que nos recomienda y que tiene una reunión descuenta un 10 % del precio, del pago final.',
    offer: 'Oferta',
    rdv: 'Reuniones realizadas gracias a usted',
    less: 'Quitar una reunión',
    more: 'Añadir una reunión',
    deposit: 'Anticipo al encargar',
    balance: 'Resto en la publicación',
    saved: 'Ahorrado gracias a los referidos',
    total: 'Total pagado',
    free: 'Resto gratis',
    unit: '€ + IVA',
    all: 'Todos',
    count: (n: number) => `${n} proyecto${n > 1 ? 's' : ''}`,
  },
}

const fmt = (n: number, locale: Locale) =>
  new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'es-ES', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2 }).format(n)

/* --- Tarifs : comparatif ligne par ligne ------------------------------------------ */

export type CompareCol = { id: string; name: string; price: string; main?: boolean }
export type CompareRow = { label: string; cells: (string | boolean)[] }

export function OfferCompare({ locale, cols, rows }: { locale: Locale; cols: CompareCol[]; rows: CompareRow[] }) {
  const t = L[locale]
  const [col, setCol] = useState(1)
  const hid = useId()
  return (
    <div className="feat">
      <div className="rubrique">
        <h2 id={hid} className="rubrique__h">
          {t.compareH}
        </h2>
        <p className="rubrique__p">{t.compareP}</p>
      </div>
      <div className="seg cmp__seg" role="group" aria-label={t.pick}>
        {cols.map((c, i) => (
          <button key={c.id} type="button" aria-pressed={col === i} onClick={() => setCol(i)}>
            {c.name}
          </button>
        ))}
      </div>
      <div className="cmp" data-col={col}>
        <table className="cmp__table" aria-labelledby={hid}>
          <thead>
            <tr>
              <th scope="col">{t.feature}</th>
              {cols.map((c, i) => (
                <th key={c.id} scope="col" data-c={i} data-main={c.main || undefined}>
                  <span className="cmp__name">{c.name}</span>
                  <span className="cmp__price mono">{c.price}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                {r.cells.map((v, i) => (
                  <td key={i} data-c={i} data-main={cols[i].main || undefined}>
                    {v === true ? (
                      <span className="cmp__yes">
                        <IconCheck />
                        <span className="sr-only">✓</span>
                      </span>
                    ) : v === false ? (
                      <span className="cmp__no" aria-label="—">
                        —
                      </span>
                    ) : (
                      <span className="cmp__txt">{v}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* --- Tarifs : échéancier acompte / solde avec parrainage -------------------------- */

export function PayCalc({ locale, offers }: { locale: Locale; offers: { id: string; name: string; price: number }[] }) {
  const t = L[locale]
  const [oi, setOi] = useState(0)
  const [n, setN] = useState(0)
  const hid = useId()
  const price = offers[oi].price
  const deposit = price / 2
  const saved = Math.round(Math.min(n, 5) * price * 10) / 100
  const balance = price / 2 - saved
  const pct = (v: number) => `${(v / price) * 100}%`
  return (
    <div className="feat">
      <div className="rubrique">
        <h2 id={hid} className="rubrique__h">
          {t.calcH}
        </h2>
        <p className="rubrique__p">{t.calcP}</p>
      </div>
      <div className="pay">
        <div className="pay__ctrl">
          <div className="pay__field">
            <span className="pay__label">{t.offer}</span>
            <div className="seg" role="group" aria-label={t.offer}>
              {offers.map((o, i) => (
                <button key={o.id} type="button" aria-pressed={oi === i} onClick={() => setOi(i)}>
                  {o.name} · {fmt(o.price, locale)} €
                </button>
              ))}
            </div>
          </div>
          <div className="pay__field">
            <span className="pay__label">{t.rdv}</span>
            <div className="pay__stamps">
              <button type="button" className="pay__step" aria-label={t.less} disabled={n === 0} onClick={() => setN(n - 1)}>
                −
              </button>
              <div className="pay__row" aria-live="polite" aria-label={`${n} / 5`}>
                {[1, 2, 3, 4, 5].map((k) => (
                  <button
                    key={k}
                    type="button"
                    className="pay__stamp"
                    data-on={k <= n || undefined}
                    aria-pressed={k <= n}
                    onClick={() => setN(k === n ? k - 1 : k)}
                  >
                    -{k * 10}%
                  </button>
                ))}
              </div>
              <button type="button" className="pay__step" aria-label={t.more} disabled={n === 5} onClick={() => setN(n + 1)}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="pay__viz">
          <div className="pay__bar" aria-hidden="true">
            <span className="pay__dep" style={{ width: pct(deposit) }} />
            <span className="pay__bal" style={{ width: pct(balance) }} />
            <span className="pay__saved" style={{ width: pct(saved) }} />
          </div>
          <dl className="budget__legend">
            <div>
              <dt>
                <span className="budget__sw budget__sw--ours" />
                {t.deposit}
              </dt>
              <dd className="mono">
                {fmt(deposit, locale)} {t.unit}
              </dd>
            </div>
            <div>
              <dt>
                <span className="budget__sw budget__sw--google" />
                {t.balance}
              </dt>
              <dd className="mono">{balance <= 0 ? t.free : `${fmt(balance, locale)} ${t.unit}`}</dd>
            </div>
            <div>
              <dt>
                <span className="budget__sw pay__sw--saved" />
                {t.saved}
              </dt>
              <dd className="mono">
                {saved > 0 ? '−' : ''}
                {fmt(saved, locale)} {t.unit}
              </dd>
            </div>
            <div className="budget__total">
              <dt>{t.total}</dt>
              <dd className="mono">
                {fmt(deposit + balance, locale)} {t.unit}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

/* --- Réalisations : filtres par type ---------------------------------------------- */

export function WorkFilter({
  locale,
  filters,
  items,
}: {
  locale: Locale
  filters: { id: string; label: string }[]
  items: { slug: string; groups: string[]; node: ReactNode }[]
}) {
  const t = L[locale]
  const [f, setF] = useState('all')
  const shown = items.filter((it) => f === 'all' || it.groups.includes(f))
  return (
    <div className="wf">
      <div className="wf__bar">
        <div className="seg seg--wrap wf__seg" role="group" aria-label={t.all}>
          {[{ id: 'all', label: t.all }, ...filters].map((x) => {
            const n = x.id === 'all' ? items.length : items.filter((it) => it.groups.includes(x.id)).length
            return (
              <button key={x.id} type="button" aria-pressed={f === x.id} onClick={() => setF(x.id)}>
                {x.label}
                <span className="wf__n mono">{n}</span>
              </button>
            )
          })}
        </div>
        <p className="wf__count mono" aria-live="polite">
          {t.count(shown.length)}
        </p>
      </div>
      <div className={`encart-grid${f === 'all' ? '' : ' encart-grid--flat'}`}>
        {items.map((it) => (
          <div key={it.slug} className="wf__item" hidden={!shown.includes(it)}>
            {it.node}
          </div>
        ))}
      </div>
    </div>
  )
}
