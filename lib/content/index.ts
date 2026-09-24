// Point d'entrée du contenu éditorial par langue

import type { Locale } from '../routes'
import type { Content } from './types'
import fr from './fr'
import es from './es'

export function content(locale: Locale): Content {
  return locale === 'fr' ? fr : es
}

export { pages } from './pages'
