// Libellé court de n'importe quelle route (menus, fil d'Ariane, maillage)

import { getRoute, type Locale } from './routes'
import { content, pages } from './content'
import { getRealisation } from './realisations'

export function labelOf(key: string, locale: Locale): string {
  const route = getRoute(key)
  if (!route) return key
  const c = content(locale)
  const p = pages(locale)
  switch (route.kind) {
    case 'home':
      return locale === 'fr' ? 'Accueil' : 'Inicio'
    case 'service':
      return c.services[route.ref!]?.label ?? key
    case 'metier':
      return c.metiers[route.ref!]?.label ?? key
    case 'realisation':
      return getRealisation(route.ref!)?.name ?? key
    case 'article':
      return c.articles[route.ref!]?.label ?? key
    case 'legal':
      return c.legal[route.ref!]?.label ?? key
    case 'realisations':
      return p.realisations.label
    case 'tarifs':
      return p.tarifs.label
    case 'abonnements':
      return p.abonnements.label
    case 'parrainage':
      return p.parrainage.label
    case 'audit':
      return p.audit.label
    case 'studio':
      return p.studio.label
    case 'contact':
      return p.contact.label
    case 'conseils':
      return p.conseils.label
  }
}
