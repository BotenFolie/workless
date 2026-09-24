import type { MetadataRoute } from 'next'
import { ROUTES } from '@/lib/routes'
import { absolute } from '@/lib/seo'

// Une entrée par page et par langue, avec ses alternates hreflang
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return ROUTES.flatMap((r) => {
    const languages: Record<string, string> = {}
    if (r.paths.fr) languages.fr = absolute(r.paths.fr)
    if (r.paths.es) languages.es = absolute(r.paths.es)
    return Object.values(r.paths).map((path) => ({
      url: absolute(path!),
      lastModified: now,
      changeFrequency: r.kind === 'home' ? ('weekly' as const) : ('monthly' as const),
      priority: r.kind === 'home' ? 1 : r.kind === 'service' || r.kind === 'tarifs' ? 0.8 : 0.6,
      alternates: { languages },
    }))
  })
}
