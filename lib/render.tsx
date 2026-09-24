// Résolution d'une URL (langue + segments) vers la vue et ses métadonnées

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Shell from '@/components/Shell'
import HomeView from '@/components/views/HomeView'
import {
  AbonnementsView,
  ArticleView,
  AuditView,
  ConseilsView,
  ContactView,
  LegalView,
  MetierView,
  ParrainageView,
  RealisationsView,
  RealisationView,
  ServiceView,
  StudioView,
  TarifsView,
} from '@/components/views/InnerViews'
import { findRoute, type Locale, type RouteDef } from './routes'
import { content, pages } from './content'
import { getRealisation } from './realisations'
import { pageMetadata } from './seo'

export function resolve(locale: Locale, slug: string[] | undefined): RouteDef | undefined {
  const prefix = locale === 'es' ? '/es' : ''
  const path = `${prefix}/${(slug ?? []).join('/')}`.replace(/\/$/, '') || '/'
  return findRoute(locale, path)
}

/** Titre + description de la page */
function metaText(route: RouteDef, locale: Locale): { title: string; desc: string } {
  const c = content(locale)
  const p = pages(locale)
  const ref = route.ref ?? ''
  switch (route.kind) {
    case 'home':
      return { title: p.home.metaTitle, desc: p.home.metaDesc }
    case 'service':
      return { title: c.services[ref].metaTitle, desc: c.services[ref].metaDesc }
    case 'metier':
      return { title: c.metiers[ref].metaTitle, desc: c.metiers[ref].metaDesc }
    case 'article':
      return { title: c.articles[ref].metaTitle, desc: c.articles[ref].metaDesc }
    case 'legal':
      return { title: c.legal[ref].metaTitle, desc: c.legal[ref].h1 }
    case 'realisation': {
      const r = getRealisation(ref)!
      return {
        title: `${r.name} — ${r.category[locale]} | Stripwork`,
        desc: `${r.problem[locale]} ${r.result[locale]}`.slice(0, 158),
      }
    }
    case 'realisations':
      return { title: p.realisations.metaTitle, desc: p.realisations.metaDesc }
    case 'tarifs':
      return { title: p.tarifs.metaTitle, desc: p.tarifs.metaDesc }
    case 'abonnements':
      return { title: p.abonnements.metaTitle, desc: p.abonnements.metaDesc }
    case 'parrainage':
      return { title: p.parrainage.metaTitle, desc: p.parrainage.metaDesc }
    case 'audit':
      return { title: p.audit.metaTitle, desc: p.audit.metaDesc }
    case 'studio':
      return { title: p.studio.metaTitle, desc: p.studio.metaDesc }
    case 'contact':
      return { title: p.contact.metaTitle, desc: p.contact.metaDesc }
    case 'conseils':
      return { title: p.conseils.metaTitle, desc: p.conseils.metaDesc }
  }
}

export function metadataFor(locale: Locale, slug: string[] | undefined): Metadata {
  const route = resolve(locale, slug)
  if (!route) return {}
  const { title, desc } = metaText(route, locale)
  const meta = pageMetadata(route.key, locale, title, desc)
  return meta
}

function View({ route, locale }: { route: RouteDef; locale: Locale }) {
  const props = { locale, routeKey: route.key }
  switch (route.kind) {
    case 'home':
      return <HomeView locale={locale} />
    case 'service':
      return <ServiceView {...props} />
    case 'metier':
      return <MetierView {...props} />
    case 'realisations':
      return <RealisationsView {...props} />
    case 'realisation':
      return <RealisationView {...props} />
    case 'tarifs':
      return <TarifsView {...props} />
    case 'abonnements':
      return <AbonnementsView {...props} />
    case 'parrainage':
      return <ParrainageView {...props} />
    case 'audit':
      return <AuditView {...props} />
    case 'studio':
      return <StudioView {...props} />
    case 'contact':
      return <ContactView {...props} />
    case 'conseils':
      return <ConseilsView {...props} />
    case 'article':
      return <ArticleView {...props} />
    case 'legal':
      return <LegalView {...props} />
  }
}

export function renderPage(locale: Locale, slug: string[] | undefined) {
  const route = resolve(locale, slug)
  if (!route) notFound()
  return (
    <Shell locale={locale} current={route.key}>
      <View route={route} locale={locale} />
    </Shell>
  )
}
