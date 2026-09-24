// Accueil : la scène signature, le trio, les rubriques, les preuves, les prix

import Link from 'next/link'
import { IconArrow } from '../Icons'
import SceneAnnuaire from '../SceneAnnuaire'
import { CtaRow, EncartGrid, FaqList, FinalCta, JsonLd, LiveList, OffersGrid, Rubrique, TeamList } from '../Blocks'
import { href, routesOfKind, type Locale } from '@/lib/routes'
import { labelOf } from '@/lib/labels'
import { content, pages } from '@/lib/content'
import { faqJsonLd, orgJsonLd } from '@/lib/seo'
import { ui } from '@/lib/ui'

const SERVICE_GROUPS: { key: string; children: string[] }[] = [
  { key: 'creation', children: ['vitrine', 'landing'] },
  { key: 'refonte', children: ['migration'] },
  { key: 'seo', children: ['auditSeo', 'seoLocal', 'seoIa'] },
  { key: 'ads', children: ['adsGestion', 'adsAudit'] },
]

export default function HomeView({ locale }: { locale: Locale }) {
  const p = pages(locale).home
  const c = content(locale)
  const t = ui(locale)
  const metiers = routesOfKind('metier')
    .filter((r) => r.paths[locale])
    .sort((a, b) => labelOf(a.key, locale).localeCompare(labelOf(b.key, locale), locale))

  const work = locale === 'fr' ? ['sbpaysagiste', 'maintenancecaladoise', 'mghypnose', 'duvertaubalcon', 'lbeg', 'corgier'] : ['bachcostablanca', 'duvertaubalcon', 'mghypnose', 'maintenancecaladoise', 'lbeg', 'sbpaysagiste']

  return (
    <>
      <JsonLd data={[orgJsonLd(locale), faqJsonLd(p.faq)]} />

      <SceneAnnuaire
        display={p.display}
        h1sub={p.h1sub}
        lead={p.lead}
        steps={p.steps}
        stepsLabel={p.stepsLabel}
        replay={p.replay}
        sceneNote={p.sceneNote}
        scene={p.scene}
        ctas={<CtaRow locale={locale} secondary={{ href: href('tarifs', locale), label: p.ctaSecondary }} />}
      />

      {/* Le trio */}
      <section className="band band--white" aria-labelledby="studio-h">
        <div className="wrap">
          <div className="rubrique">
            <h2 id="studio-h" className="rubrique__h">
              {p.studioH}
            </h2>
            <p className="rubrique__p">{p.studioP}</p>
          </div>
          <TeamList locale={locale} />
        </div>
      </section>

      {/* Les rubriques de services */}
      <section className="band band--paper" aria-labelledby="svc-h">
        <div className="wrap">
          <Rubrique id="svc-h" h={p.servicesH} />
          <div className="svc-grid">
            {SERVICE_GROUPS.map((g) => (
              <div key={g.key} className="svc">
                <h3 className="svc__h">
                  <Link href={href(g.key, locale)}>{labelOf(g.key, locale)}</Link>
                </h3>
                <p className="svc__p">{c.services[g.key].lead}</p>
                <ul>
                  {g.children.map((k) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Les preuves */}
      <section className="band band--ink" aria-labelledby="work-h">
        <div className="wrap">
          <div className="rubrique">
            <h2 id="work-h" className="rubrique__h">
              {p.workH}
            </h2>
            <p className="rubrique__p">{p.workP}</p>
          </div>
          <EncartGrid slugs={work} locale={locale} />
          <div className="stack" style={{ marginTop: 56 }}>
            <h3 className="svc__h">{p.liveH}</h3>
            <LiveList locale={locale} />
            <p>
              <Link className="more" href={href('realisations', locale)}>
                {t.allWork}
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* L'index des métiers */}
      <section className="band band--white" aria-labelledby="metiers-h">
        <div className="wrap">
          <div className="rubrique">
            <h2 id="metiers-h" className="rubrique__h">
              {p.metiersH}
            </h2>
            <p className="rubrique__p">{p.metiersP}</p>
          </div>
          <div className="bigindex">
            {metiers.map((r) => {
              const m = c.metiers[r.ref!]
              return (
                <Link key={r.key} href={r.paths[locale]!}>
                  <span className="bigindex__letter mono" aria-hidden="true">
                    {m.rubrique.charAt(0)}
                  </span>
                  <span className="bigindex__name">{m.rubrique}</span>
                  <span className="bigindex__meta mono">{m.searches[0]}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Les prix */}
      <section className="band band--yellow" aria-labelledby="prix-h">
        <div className="wrap">
          <div className="rubrique">
            <h2 id="prix-h" className="rubrique__h">
              {p.pricesH}
            </h2>
            <p className="rubrique__p">{p.pricesP}</p>
          </div>
          <OffersGrid locale={locale} />
        </div>
      </section>

      {/* FAQ */}
      <section className="band band--paper" aria-labelledby="faq-h">
        <div className="wrap split">
          <h2 id="faq-h" className="rubrique__h">
            {t.faq}
          </h2>
          <FaqList items={p.faq} />
        </div>
      </section>

      <FinalCta locale={locale} h={p.finalH} p={p.finalP} />
    </>
  )
}
