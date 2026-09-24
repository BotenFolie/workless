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
  /** Repères clés affichés sous le chapô (prix, délai, conditions) */
  facts?: Fact[]
  /** Bloc(s) signature propres à la page (remplacent la liste de points) */
  feature?: Feature | Feature[]
  /** Pages principales : garder la liste de points sous les blocs */
  keepPoints?: boolean
}

export type Fact = { k: string; v: string }

/** Blocs signature des sous-services : chaque page a sa propre mise en scène */
export type Feature =
  | {
      kind: 'sitemap'
      h: string
      p: string
      tiers: { essentiel: string; signature: string }
      includedIn: { all: string; signature: string }
      nodes: { id: string; name: string; role: string; tier: 'all' | 'signature'; parent?: string }[]
      everyPageH: string
      everyPage: Point[]
    }
  | {
      kind: 'anatomy'
      h: string
      p: string
      zones: { block: 'hero' | 'cta' | 'proof' | 'offer' | 'form'; t: string; d: string }[]
      hiddenH: string
      hidden: Point[]
      mock: { title: string; cta: string; proof: string; offer: string; form: string; send: string }
    }
  | {
      kind: 'redirects'
      h: string
      p: string
      tableCaption: string
      cols: { from: string; to: string; status: string }
      rows: { from: string; to: string; note?: string }[]
      tested: string
      phases: { h: string; items: Point[] }[]
    }
  | {
      kind: 'report'
      h: string
      p: string
      docTitle: string
      tabs: { name: string; intro: string; checks: string[] }[]
      planTab: string
      planIntro: string
      plan: { level: string; items: string[] }[]
      example: string
    }
  | {
      kind: 'localpack'
      h: string
      p: string
      search: string
      you: { name: string; category: string; zone: string; hours: string; reviews: string; actions: string[] }
      others: { name: string; category: string }[]
      code: string
      notes: { part: 'fiche' | 'avis' | 'pages' | 'nap' | 'data'; t: string; d: string }[]
      illustration: string
    }
  | {
      kind: 'aiAnswer'
      h: string
      p: string
      assistant: string
      question: string
      answer: { text: string; part?: 'direct' | 'identity' | 'data' | 'elsewhere'; cite?: number }[]
      sources: { label: string; part: 'data' | 'elsewhere' }[]
      notes: { part: 'direct' | 'identity' | 'data' | 'elsewhere'; t: string; d: string }[]
      illustration: string
    }
  | {
      kind: 'adsChain'
      h: string
      p: string
      ad: { sponsored: string; url: string; title: string; desc: string; call: string }
      steps: Point[]
      budgetH: string
      budgetP: string
      ours: string
      google: string
      slider: string
      total: string
      perMonth: string
      illustration: string
    }
  | {
      kind: 'selfCheck'
      h: string
      p: string
      answers: { yes: string; no: string; unsure: string }
      questions: { q: string; why: string }[]
      result: { none: string; some: string; all: string; cta: string }
      termsH: string
      termsCaption: string
      termsCols: { term: string; verdict: string }
      terms: { term: string; useful: boolean; why: string }[]
      useful: string
      wasted: string
    }

  | {
      kind: 'formatPicker'
      h: string
      p: string
      questions: { q: string; options: { id: string; label: string }[] }[]
      results: Record<'landing' | 'essentiel' | 'signature' | 'surmesure', { name: string; price: string; why: string; route: string; link: string }>
      resultLabel: string
    }
  | {
      kind: 'journey'
      h: string
      p: string
      steps: { t: string; d: string; money?: string }[]
    }
  | {
      kind: 'refonteCheck'
      h: string
      p: string
      signs: string[]
      verdicts: { none: string; few: string; many: string }
      countLabel: string
    }
  | {
      kind: 'keepChange'
      h: string
      p: string
      keepH: string
      keep: Point[]
      changeH: string
      change: Point[]
    }
  | {
      kind: 'serp'
      h: string
      p: string
      query: string
      zones: { id: 'ads' | 'ai' | 'map' | 'organic'; label: string; t: string; d: string; route: string; link: string }[]
      mock: { sponsored: string; adTitle: string; aiTitle: string; aiText: string; mapTitle: string; places: string[]; organic: string[] }
      illustration: string
    }
  | {
      kind: 'split'
      h: string
      p: string
      left: { h: string; tag: string; items: string[] }
      right: { h: string; tag: string; items: string[]; route: string; link: string }
    }
  | {
      kind: 'adsVsSeo'
      h: string
      p: string
      ads: { name: string; d: string }
      seo: { name: string; d: string }
      both: { name: string; d: string }
      axis: { time: string; contacts: string }
      caption: string
    }
  | {
      kind: 'router'
      h: string
      p: string
      paths: { if: string; t: string; d: string; route: string; link: string }[]
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
