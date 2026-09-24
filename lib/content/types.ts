// Types du contenu éditorial (identiques en FR et ES)

export type Faq = { q: string; a: string }
export type Point = { t: string; d: string }

export type ServiceContent = {
  metaTitle: string
  metaDesc: string
  /** Libellé court (menus, fil d'Ariane) */
  label: string
  h1: string
  lead: string
  points: Point[]
  sections?: { h: string; p: string[] }[]
  /** Offre mise en avant : grille projet ou abonnement */
  pricing?: { kind: 'offers' } | { kind: 'plan'; id: string }
  proof: string[]
  faq: Faq[]
}

export type MetierContent = {
  metaTitle: string
  metaDesc: string
  label: string
  /** Nom de rubrique façon annuaire (pluriel) */
  rubrique: string
  h1: string
  lead: string
  searches: string[]
  features: Point[]
  proof: string[]
  live: string[]
  faq: Faq[]
}

export type ArticleContent = {
  metaTitle: string
  metaDesc: string
  label: string
  h1: string
  date: string
  lead: string
  sections: { h: string; p: string[]; list?: string[] }[]
  sources?: { label: string; url: string }[]
  related: string[]
}

export type LegalContent = {
  metaTitle: string
  label: string
  h1: string
  sections: { h: string; p: string[] }[]
}

export type Content = {
  services: Record<string, ServiceContent>
  metiers: Record<string, MetierContent>
  articles: Record<string, ArticleContent>
  legal: Record<string, LegalContent>
}
