// Données des réalisations — case studies du portfolio /realisations
// FR only. Chiffres « héros » = vrais résultats fournis ; narratif rédigé au registre pro.

export type Realisation = {
  slug: string
  name: string
  domain: string          // affiché dans la barre de navigateur factice
  url: string             // lien réel « voir le site »
  image: string           // capture pleine page (/realisations/xxx.jpg)
  category: string        // sous-titre de contexte
  tags: string[]          // 3 disciplines max
  heroMetric: string      // le chiffre / mot héros (ouvre l'étude de cas)
  heroLabel: string       // ce que le chiffre signifie
  accent: string          // couleur de la marque
  accentInk: string       // couleur de texte lisible SUR l'accent
  problem: string
  built: string
  strategy: string
  result: string
  span: 5 | 7 | 12        // largeur sur la grille 12 col (desktop)
  rotation: number        // inclinaison initiale de l'objet (deg)
}

export const REALISATIONS: Realisation[] = [
  {
    slug: 'stripwork',
    name: 'Stripwork',
    domain: 'stripwork.com',
    url: 'https://stripwork.com',
    image: '/realisations/stripwork.jpg',
    category: 'Site + produit · Agence d\'automatisation IA',
    tags: ['Website', 'SEO', 'Automation'],
    heroMetric: '< 60 s',
    heroLabel: 'pour répondre à chaque lead, automatiquement',
    accent: '#C6FF00',
    accentInk: '#0A0A0A',
    problem:
      "Vendre de l'automatisation IA sans que le site lui-même en soit la preuve — c'était la première contradiction à lever.",
    built:
      "Un site qui se qualifie tout seul : diagnostic interactif en 6 questions, scoring des leads, et un autorépondeur IA qui rédige un email personnalisé à chaque contact.",
    strategy:
      "SEO ciblé sur les requêtes « automatisation » à intention business, et un tunnel où chaque visiteur devient un lead qualifié — pas seulement un formulaire de plus.",
    result:
      "Chaque lead reçoit une réponse personnalisée en moins de 60 secondes, jour et nuit. Le site démontre le produit en l'utilisant.",
    span: 7,
    rotation: -5,
  },
  {
    slug: 'mghypnose',
    name: 'MG Hypnose',
    domain: 'lp.mghypnose.fr',
    url: 'https://lp.mghypnose.fr/hypnose-lyon',
    image: '/realisations/mghypnose.jpg',
    category: 'Landing page · Hypnothérapie · Lyon',
    tags: ['Landing page', 'SEO', 'SEA'],
    heroMetric: '+20%',
    heroLabel: 'de conversions dès le premier mois',
    accent: '#0F766E',
    accentInk: '#FFFFFF',
    problem:
      "Une praticienne reconnue à Lyon, mais invisible en ligne : aucune page pensée pour transformer une recherche « hypnothérapeute Lyon » en prise de rendez-vous.",
    built:
      "Une landing page unique, centrée sur un seul objectif — la réservation — avec preuve sociale, cas de consultation et parcours de prise de RDV en deux clics.",
    strategy:
      "Couplée à une campagne Google Ads sur l'intention locale et un SEO on-page sur les requêtes à forte valeur, pour capter le trafic déjà prêt à réserver.",
    result:
      "Dès le premier mois : +20% de conversions. Plus de demandes de séance, à budget publicitaire maîtrisé.",
    span: 5,
    rotation: 4,
  },
  {
    slug: 'verifam',
    name: 'Verifam',
    domain: 'verifam.app',
    url: 'https://verifam.app',
    image: '/realisations/verifam.jpg',
    category: 'Site de lancement · App anti-arnaque · Seniors',
    tags: ['Website', 'Lancement app'],
    heroMetric: 'En 3 s',
    heroLabel: 'l\'app dit si un message est une arnaque',
    accent: '#0D9268',
    accentInk: '#FFFFFF',
    problem:
      "Protéger les seniors des arnaques par SMS et email — encore fallait-il un site qui inspire confiance et explique tout, sans jargon.",
    built:
      "Un site de lancement clair et rassurant : « Ce message est-il une arnaque ? », les 3 gestes, les pièges courants, et un accès direct à l'App Store.",
    strategy:
      "Un ton simple, une preuve par l'exemple (de vrais SMS d'arnaque analysés) et une direction artistique douce qui parle autant aux seniors qu'à leurs proches.",
    result:
      "Une vitrine prête pour le lancement, pensée pour convertir la peur de l'arnaque en installation de l'app.",
    span: 5,
    rotation: -3,
  },
  {
    slug: 'backtrack',
    name: 'Backtrack',
    domain: 'backtrack-web-tau.vercel.app',
    url: 'https://backtrack-web-tau.vercel.app/',
    image: '/realisations/backtrack.jpg',
    category: 'Site de lancement · App iOS · Working Holiday Visa',
    tags: ['Website', 'Lancement app'],
    heroMetric: '0 → 1',
    heroLabel: 'de l\'idée à l\'app en ligne, prête à télécharger',
    accent: '#16A34A',
    accentInk: '#FFFFFF',
    problem:
      "Une app pensée pour les backpackers en Australie — compter ses 88 jours, suivre sa paie, récupérer sa superannuation — mais rien pour la présenter et déclencher le téléchargement.",
    built:
      "Un site de lancement clair et démonstratif : bénéfices concrets, aperçus de l'app en situation, et un chemin direct vers l'App Store.",
    strategy:
      "Un message immédiat (« Track your 88 days. Know your money. ») et une preuve visuelle par l'écran, pour convertir un visiteur curieux en utilisateur.",
    result:
      "Une vitrine prête pour le lancement App Store, qui transforme l'intérêt en installations.",
    span: 7,
    rotation: 3,
  },
  {
    slug: 'bachcostablanca',
    name: 'Bach Costa Blanca',
    domain: 'bachcostablanca.com',
    url: 'https://bachcostablanca.com',
    image: '/realisations/bachcostablanca.jpg',
    category: 'Site vitrine · Fleurs de Bach · Espagne',
    tags: ['Website', 'SEO'],
    heroMetric: '1re page',
    heroLabel: 'Google sur « Fleurs de Bach · Costa Blanca »',
    accent: '#D4A23C',
    accentInk: '#1A2438',
    problem:
      "Une praticienne francophone installée sur la Costa Blanca, sans site — donc introuvable pour les expatriés qui cherchaient un accompagnement dans leur langue.",
    built:
      "Un site vitrine élégant et rassurant : bilan émotionnel, protocole de séances, réservation — le tout dans une direction artistique soignée (navy & or).",
    strategy:
      "Une architecture SEO pensée pour une niche géolocalisée précise — langue, région, pratique — là où la concurrence est faible mais l'intention forte.",
    result:
      "Positionné en première page Google sur les requêtes clés de la Costa Blanca : une visibilité qui amène des clients sans budget publicitaire.",
    span: 12,
    rotation: -2,
  },
]
