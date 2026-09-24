// Table des routes bilingues : une clé = une page, un chemin par langue.
// Une page absente dans une langue n'a pas d'équivalent hreflang.

export type Locale = 'fr' | 'es'
export const LOCALES: Locale[] = ['fr', 'es']

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com').replace(/\/$/, '')

export type PageKind =
  | 'home'
  | 'service'
  | 'metier'
  | 'realisations'
  | 'realisation'
  | 'tarifs'
  | 'abonnements'
  | 'parrainage'
  | 'audit'
  | 'studio'
  | 'contact'
  | 'conseils'
  | 'article'
  | 'legal'

export type RouteDef = {
  key: string
  kind: PageKind
  /** Clé de la page parente (fil d'Ariane) */
  parent?: string
  /** Référence au contenu (slug service, métier, réalisation, article…) */
  ref?: string
  paths: Partial<Record<Locale, string>>
}

const SERVICES: RouteDef[] = [
  { key: 'creation', kind: 'service', ref: 'creation', paths: { fr: '/creation-site-internet', es: '/es/diseno-web' } },
  { key: 'vitrine', kind: 'service', ref: 'vitrine', parent: 'creation', paths: { fr: '/creation-site-internet/site-vitrine', es: '/es/diseno-web/pagina-web-corporativa' } },
  { key: 'landing', kind: 'service', ref: 'landing', parent: 'creation', paths: { fr: '/creation-site-internet/landing-page', es: '/es/diseno-web/landing-page' } },
  { key: 'refonte', kind: 'service', ref: 'refonte', paths: { fr: '/refonte-site-internet', es: '/es/rediseno-web' } },
  { key: 'migration', kind: 'service', ref: 'migration', parent: 'refonte', paths: { fr: '/refonte-site-internet/migration-seo', es: '/es/rediseno-web/migracion-seo' } },
  { key: 'seo', kind: 'service', ref: 'seo', paths: { fr: '/referencement-seo', es: '/es/posicionamiento-seo' } },
  { key: 'auditSeo', kind: 'service', ref: 'auditSeo', parent: 'seo', paths: { fr: '/referencement-seo/audit-seo', es: '/es/posicionamiento-seo/auditoria-seo' } },
  { key: 'seoLocal', kind: 'service', ref: 'seoLocal', parent: 'seo', paths: { fr: '/referencement-seo/seo-local', es: '/es/posicionamiento-seo/seo-local' } },
  { key: 'seoIa', kind: 'service', ref: 'seoIa', parent: 'seo', paths: { fr: '/referencement-seo/referencement-ia', es: '/es/posicionamiento-seo/posicionamiento-ia' } },
  { key: 'ads', kind: 'service', ref: 'ads', paths: { fr: '/google-ads', es: '/es/google-ads' } },
  { key: 'adsGestion', kind: 'service', ref: 'adsGestion', parent: 'ads', paths: { fr: '/google-ads/gestion-campagnes', es: '/es/google-ads/gestion-de-campanas' } },
  { key: 'adsAudit', kind: 'service', ref: 'adsAudit', parent: 'ads', paths: { fr: '/google-ads/audit-google-ads', es: '/es/google-ads/auditoria-google-ads' } },
]

const METIERS: RouteDef[] = [
  { key: 'm-chauffagiste', kind: 'metier', ref: 'chauffagiste', parent: 'creation', paths: { fr: '/creation-site-internet/chauffagiste', es: '/es/diseno-web/calefaccion-y-climatizacion' } },
  { key: 'm-electricien', kind: 'metier', ref: 'electricien', parent: 'creation', paths: { fr: '/creation-site-internet/electricien', es: '/es/diseno-web/electricistas' } },
  { key: 'm-hypnotherapeute', kind: 'metier', ref: 'hypnotherapeute', parent: 'creation', paths: { fr: '/creation-site-internet/hypnotherapeute' } },
  { key: 'm-industrie', kind: 'metier', ref: 'industrie', parent: 'creation', paths: { fr: '/creation-site-internet/industrie', es: '/es/diseno-web/industria' } },
  { key: 'm-naturopathe', kind: 'metier', ref: 'naturopathe', parent: 'creation', paths: { fr: '/creation-site-internet/naturopathe' } },
  { key: 'm-paysagiste', kind: 'metier', ref: 'paysagiste', parent: 'creation', paths: { fr: '/creation-site-internet/paysagiste', es: '/es/diseno-web/paisajistas' } },
  { key: 'm-restaurant', kind: 'metier', ref: 'restaurant', parent: 'creation', paths: { fr: '/creation-site-internet/restaurant', es: '/es/diseno-web/restaurantes' } },
  { key: 'm-terapeutas', kind: 'metier', ref: 'terapeutas', parent: 'creation', paths: { es: '/es/diseno-web/terapeutas' } },
]

const REALISATION_SLUGS = ['mghypnose', 'sbpaysagiste', 'lbeg', 'corgier', 'bachcostablanca', 'voyance', 'marieoracle', 'verifam', 'backtrack']

const ARTICLES: RouteDef[] = [
  { key: 'a-prix', kind: 'article', ref: 'prix', parent: 'conseils', paths: { fr: '/conseils/prix-site-vitrine', es: '/es/blog/precio-pagina-web' } },
  { key: 'a-refonte', kind: 'article', ref: 'refonte-seo', parent: 'conseils', paths: { fr: '/conseils/refonte-sans-perdre-son-referencement', es: '/es/blog/redisenar-web-sin-perder-posicionamiento' } },
]

export const ROUTES: RouteDef[] = [
  { key: 'home', kind: 'home', paths: { fr: '/', es: '/es' } },
  ...SERVICES,
  ...METIERS,
  { key: 'realisations', kind: 'realisations', paths: { fr: '/realisations', es: '/es/proyectos' } },
  ...REALISATION_SLUGS.map<RouteDef>((slug) => ({
    key: `r-${slug}`,
    kind: 'realisation',
    ref: slug,
    parent: 'realisations',
    paths: { fr: `/realisations/${slug}`, es: `/es/proyectos/${slug}` },
  })),
  { key: 'tarifs', kind: 'tarifs', paths: { fr: '/tarifs', es: '/es/precios' } },
  { key: 'abonnements', kind: 'abonnements', paths: { fr: '/abonnements', es: '/es/planes-mensuales' } },
  { key: 'parrainage', kind: 'parrainage', paths: { fr: '/parrainage', es: '/es/programa-de-referidos' } },
  { key: 'audit', kind: 'audit', paths: { fr: '/audit-gratuit', es: '/es/auditoria-gratuita' } },
  { key: 'studio', kind: 'studio', paths: { fr: '/studio', es: '/es/estudio' } },
  { key: 'contact', kind: 'contact', paths: { fr: '/contact', es: '/es/contacto' } },
  { key: 'conseils', kind: 'conseils', paths: { fr: '/conseils', es: '/es/blog' } },
  ...ARTICLES,
  { key: 'mentions', kind: 'legal', ref: 'mentions', paths: { fr: '/mentions-legales', es: '/es/aviso-legal' } },
  { key: 'confidentialite', kind: 'legal', ref: 'confidentialite', paths: { fr: '/confidentialite', es: '/es/politica-de-privacidad' } },
]

const BY_KEY = new Map(ROUTES.map((r) => [r.key, r]))

/** Chemin d'une page dans une langue (repli sur l'accueil de la langue). */
export function href(key: string, locale: Locale): string {
  return BY_KEY.get(key)?.paths[locale] ?? (locale === 'fr' ? '/' : '/es')
}

export function getRoute(key: string): RouteDef | undefined {
  return BY_KEY.get(key)
}

/** Retrouve la route à partir du chemin demandé. */
export function findRoute(locale: Locale, pathname: string): RouteDef | undefined {
  const clean = pathname === '' ? (locale === 'fr' ? '/' : '/es') : pathname
  return ROUTES.find((r) => r.paths[locale] === clean)
}

/** Segments pour generateStaticParams d'un catch-all. */
export function staticSlugs(locale: Locale): { slug?: string[] }[] {
  const prefix = locale === 'es' ? '/es' : ''
  return ROUTES.filter((r) => r.paths[locale]).map((r) => {
    const rest = r.paths[locale]!.slice(prefix.length).split('/').filter(Boolean)
    return rest.length ? { slug: rest } : { slug: undefined }
  })
}

export function routesOfKind(kind: PageKind): RouteDef[] {
  return ROUTES.filter((r) => r.kind === kind)
}

/** Chaîne des parents, de la racine à la page. */
export function breadcrumbChain(key: string): RouteDef[] {
  const chain: RouteDef[] = []
  let cur = BY_KEY.get(key)
  while (cur) {
    chain.unshift(cur)
    cur = cur.parent ? BY_KEY.get(cur.parent) : undefined
  }
  return chain
}
