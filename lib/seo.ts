// Métadonnées (canonical + hreflang) et données structurées JSON-LD

import type { Metadata } from 'next'
import { breadcrumbChain, getRoute, href, SITE_URL, type Locale } from './routes'
import { STUDIO, TEAM } from './site'
import type { Faq } from './content/types'

export function absolute(path: string): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

/** Métadonnées d'une page : canonical, alternates hreflang, Open Graph. */
export function pageMetadata(key: string, locale: Locale, title: string, description: string): Metadata {
  const route = getRoute(key)
  const languages: Record<string, string> = {}
  if (route?.paths.fr) languages['fr'] = absolute(route.paths.fr)
  if (route?.paths.es) languages['es'] = absolute(route.paths.es)
  if (route?.paths.fr) languages['x-default'] = absolute(route.paths.fr)
  const url = absolute(href(key, locale))
  // Image de partage statique (public/og-*.png) : le catch-all intercepte les routes opengraph-image
  const image = { url: `/og-${locale}.png`, width: 1200, height: 630, alt: 'Stripwork' }

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Stripwork',
      locale: locale === 'fr' ? 'fr_FR' : 'es_ES',
      type: 'website',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  }
}

const ORG_ID = `${SITE_URL}/#studio`

export function orgJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: 'Stripwork',
    url: SITE_URL,
    email: STUDIO.email,
    ...(STUDIO.phone ? { telephone: STUDIO.phone } : {}),
    description:
      locale === 'fr'
        ? 'Studio de création de sites internet, référencement SEO et Google Ads pour TPE et PME.'
        : 'Estudio de diseño web, posicionamiento SEO y Google Ads para pymes y autónomos.',
    areaServed: [
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Spain' },
    ],
    knowsLanguage: ['fr', 'es'],
    employee: TEAM.map((m) => ({ '@type': 'Person', name: m.name, jobTitle: m.role[locale] })),
  }
}

export function breadcrumbJsonLd(key: string, locale: Locale, labelOf: (key: string) => string) {
  const chain = breadcrumbChain(key)
  const items = [{ key: 'home', name: locale === 'fr' ? 'Accueil' : 'Inicio' }, ...chain.map((r) => ({ key: r.key, name: labelOf(r.key) }))]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absolute(href(it.key, locale)),
    })),
  }
}

export function faqJsonLd(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}

export function serviceJsonLd(name: string, description: string, url: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: { '@id': ORG_ID },
    areaServed: locale === 'fr' ? 'France' : 'España',
    inLanguage: locale,
  }
}

export function articleJsonLd(title: string, description: string, url: string, date: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: date,
    dateModified: date,
    inLanguage: locale,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  }
}
