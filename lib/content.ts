// Centralisation de tout le copy du site Stripwork — version FR
// Positionnement : on automatise les tâches répétitives → libère du temps sur les tâches non récurrentes

import type { QuizAnswers } from './diagnosticConfig'

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }

export type DiagStep = {
  id: number
  key: 'probleme' | 'heures' | 'personnes' | 'intention' | 'maturite' | 'objectif'
  multi: boolean
  question: string
  hint?: string
  options: Array<{ value: string; icon: string; label: string }>
}

export type StatEntry = {
  label: string
  getValue: (a: QuizAnswers) => string
}

export type DiagResult = {
  badge: string
  headline: (p: string) => string
  body: string
  stats: StatEntry[]
  cta: string
}

export type AutomationRec = { title: string; description: string }

export const contentFR = {
  nav: {
    brand: 'Stripwork',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Diagnostic', href: '#cta' },
    ],
    servicesLabel: 'Services',
    services: [
      { label: 'Automatisation des leads',     href: '/automatisation-leads' },
      { label: 'Relance commerciale',           href: '/relance-commerciale-automatique' },
      { label: 'Reporting automatique',         href: '/reporting-automatique' },
      { label: 'Réactivation clients dormants', href: '/reactivation-clients-automatique' },
      { label: 'Traitement de factures',        href: '/traitement-factures-automatique' },
    ],
    cta: 'Diagnostiquer',
    langFR: 'FR',
    langEN: 'EN',
  },

  hero: {
    badge: "Vos équipes perdent 48h par mois sur des tâches répétitives — soit plus de 2 000€ que vous payez pour rien.",
    h1: "Vos tâches répétitives disparaissent. Votre équipe reste.",
    subtitle: [
      "Pendant que votre équipe recopie, relance et formate, elle ne travaille pas sur ce qui génère de la valeur.",
      "On identifie ce qui se répète, on l'automatise, vos équipes récupèrent du temps sur ce qui compte vraiment.",
    ],
    cta: "Récupérez 48h par mois — diagnostic gratuit",
  },

  heroWords: [
    { text: 'Vos', accent: false },
    { text: 'tâches', accent: false },
    { text: 'répétitives', accent: true },
    { text: 'disparaissent.', accent: false },
    { text: 'Votre', accent: false },
    { text: 'équipe', accent: false },
    { text: 'reste.', accent: false },
  ],

  problem: {
    label: 'Le problème',
    headline: "Chaque semaine, votre équipe refait exactement les mêmes choses.",
    universal: [
      { task: "Emails et relances clients", frequency: "chaque semaine, sans exception" },
      { task: "Reporting et tableaux de bord", frequency: "chaque lundi matin" },
      { task: "Saisie et transfert de données", frequency: "tous les jours, à la main" },
    ],
    niche: [
      { task: "Mise à jour CRM après chaque appel", frequency: "après chaque rendez-vous" },
      { task: "Génération de devis depuis un template", frequency: "à chaque nouvelle demande" },
      { task: "Extraction de données PDF fournisseurs", frequency: "à chaque facture reçue" },
    ],
    closing: "Ce n'est pas du travail. C'est de la répétition. Et ça se supprime.",

    solution: {
      label: 'La solution',
      headline: "On ne vous rend pas plus productif. On automatise ce qui vous ralentit — vos équipes récupèrent du temps pour ce qui compte.",
      blocks: [
        {
          type: 'p' as const,
          text: "On observe ce que vos équipes font réellement toute la journée.\nOn identifie précisément ce qui se répète.\nOn supprime ces tâches de leur agenda.",
        },
        {
          type: 'p' as const,
          text: "Moins de friction.\nMoins de charge mentale.\nPlus de temps sur ce qui ne peut pas s'automatiser.",
        },
      ] as ContentBlock[],
      kpi: {
        value: '14',
        unit: 'jours',
        description: "Pour observer des changements concrets dans votre organisation.",
        note: "Sans recruter. Sans restructurer.",
      },
    },
  },

  cost: {
    label: 'Ce que ça vous coûte vraiment',
    headline: "48h par mois. 2 000€ payés pour des tâches qui n'auraient jamais dû exister.",
    stats: [
      { value: '48h', label: 'perdues par mois', sub: '12h chaque semaine, sans exception' },
      { value: '2 000€', label: 'payés pour rien', sub: 'au coût chargé moyen PME' },
      { value: '24 000€', label: 'par an', sub: 'en travail sans valeur ajoutée' },
    ],
    calculation: {
      label: 'Le calcul',
      steps: [
        "48h perdues par mois en tâches répétitives (12h/semaine × 4)",
        "× 42€/h — coût chargé moyen d'un collaborateur senior PME",
        "= 2 000€/mois en travail sans valeur ajoutée",
      ],
      conclusion: "Chaque mois sans automatisation, c'est 2 000€ que vous payez pour du travail qui n'aurait jamais dû exister. Et 24 000€ par an.",
    },
  },

  pillars: [
    {
      number: '01',
      title: 'Analyse du travail réel',
      before: "3 outils ouverts, des données recopiées à la main, un rapport assemblé chaque lundi.",
      after: "1 rapport automatique, généré sans intervention, disponible chaque lundi à 8h.",
      blocks: [
        {
          type: 'p' as const,
          text: "On ne regarde pas vos process sur papier.\nOn regarde ce que vos équipes font réellement toute la journée.",
        },
        {
          type: 'list' as const,
          items: [
            "Où le temps disparaît sur des tâches récurrentes",
            "Ce qui ralentit les décisions",
            "Ce qui peut s'automatiser immédiatement",
          ],
        },
      ] as ContentBlock[],
    },
    {
      number: '02',
      title: 'Automatisation des tâches répétitives',
      before: "Relances clients manuelles — 2h par semaine, chaque semaine, sans exception.",
      after: "Les relances partent automatiquement. Votre équipe ne les voit plus.",
      blocks: [
        {
          type: 'p' as const,
          text: "Pas d'optimisation. Pas d'amélioration.\nAutomatisation pure.",
        },
        {
          type: 'p' as const,
          text: "Ce qui prenait des heures tourne en arrière-plan.\nSans effort continu. Sans erreur.",
        },
      ] as ContentBlock[],
    },
    {
      number: '03',
      title: "Temps libéré pour l'essentiel",
      before: "Mise à jour CRM après chaque appel — 20 minutes, 3 fois par jour.",
      after: "Le CRM se met à jour seul. Vos commerciaux vendent.",
      blocks: [
        {
          type: 'p' as const,
          text: "Vos équipes arrêtent de faire ce qui se répète.",
        },
        {
          type: 'list' as const,
          items: [
            "Moins de charge mentale au quotidien",
            "Décisions plus rapides",
            "Temps récupéré dès la première semaine",
          ],
        },
      ] as ContentBlock[],
    },
  ],

  testimonials: [
    {
      quote: "On traitait chaque dossier entrant à la main — extraction des pièces, mise à jour du suivi, relance client. Trois collaborateurs passaient 2h par jour là-dessus. Aujourd'hui c'est automatisé. Ils travaillent sur les dossiers, pas sur leur gestion.",
      author: "Isabelle R.",
      role: "Associée gérante — Cabinet d'avocats, 14 personnes",
      result: "8h récupérées par semaine par collaborateur",
    },
    {
      quote: "On produisait les rapports de performance de nos clients à la main chaque semaine. Consolidation des données, mise en forme, envoi. C'était 6h perdues le vendredi. Maintenant ça tourne automatiquement le jeudi soir. Le vendredi, on analyse. On ne formate plus.",
      author: "Nicolas T.",
      role: "Directeur associé — Agence marketing, 11 personnes",
      result: "6h libérées chaque vendredi",
    },
    {
      quote: "Nos consultants passaient une heure par mission à recopier les données clients dans nos outils internes. Avec 30 missions actives, c'était du temps facturable perdu chaque semaine. On a automatisé l'intégralité de cette saisie. Le gain s'est vu sur la marge dès le premier mois.",
      author: "Laurent M.",
      role: "Directeur général — Cabinet de conseil, 22 personnes",
      result: "30h/mois récupérées sur des tâches non facturables",
    },
  ],

  faq: [
    {
      q: "Est-ce que ça remplace mes équipes ?",
      blocks: [
        { type: 'p' as const, text: "Non. Ça automatise ce qu'elles ne devraient jamais faire manuellement." },
        { type: 'p' as const, text: "Vous gardez vos équipes. Vous libérez leur temps pour ce qui ne peut pas s'automatiser — les décisions, les projets, la stratégie." },
        { type: 'p' as const, text: "Ce qu'on fait : on prend les tâches que vos collaborateurs font tous les jours. Analyse, tri, formatting, reporting. Et on les automatise." },
        { type: 'p' as const, text: "Résultat : vous avez les mêmes têtes, mais elles travaillent sur des sujets qui rapportent vraiment." },
      ] as ContentBlock[],
    },
    {
      q: "Combien de temps ça prend à mettre en place ?",
      blocks: [
        { type: 'p' as const, text: "Les premiers changements sont visibles en moins de 14 jours." },
        { type: 'p' as const, text: "Pas dans 6 mois. Pas après un projet long. Rapidement." },
        { type: 'p' as const, text: "Semaine 1 : on identifie ce qui vous ralentit.\nSemaine 2 : les automatisations tournent. Vos équipes récupèrent du temps." },
        { type: 'p' as const, text: "On n'ajoute pas de charge. On enlève la complexité qui existe déjà." },
      ] as ContentBlock[],
    },
    {
      q: "Est-ce adapté à mon entreprise ?",
      blocks: [
        { type: 'p' as const, text: "Si vos équipes passent du temps à :" },
        {
          type: 'list' as const,
          items: [
            "analyser les mêmes métriques chaque semaine",
            "rédiger des rapports ou synthèses",
            "copier-coller des données d'un outil à l'autre",
            "répéter les mêmes vérifications",
            "mettre à jour manuellement des listes ou documents",
          ],
        },
        { type: 'p' as const, text: "Alors ce temps peut être automatisé. Donc oui." },
        { type: 'p' as const, text: "Peu importe votre secteur ou votre taille. Si vous avez des tâches répétitives, on peut les automatiser." },
      ] as ContentBlock[],
    },
    {
      q: "Est-ce compliqué à mettre en place ?",
      blocks: [
        { type: 'p' as const, text: "Non." },
        { type: 'p' as const, text: "On ne rajoute pas de complexité. On automatise ce qui en génère." },
        { type: 'p' as const, text: "Pas besoin d'embaucher un développeur. Pas besoin de recoder votre système. On branche directement sur vos outils existants." },
        { type: 'p' as const, text: "Vous gardez votre infra. On ajoute juste l'automatisation là où ça coince." },
      ] as ContentBlock[],
    },
    {
      q: "Combien de temps ça libère vraiment ?",
      blocks: [
        { type: 'p' as const, text: "Entre 20 et 60% du temps selon ce qu'on automatise." },
        { type: 'p' as const, text: "Un collaborateur qui passe 3 heures par jour sur des tâches répétitives récupère 1h30 à 2h pour du travail qui compte." },
        {
          type: 'list' as const,
          items: [
            "Moins de charge mentale au quotidien",
            "Moins d'erreurs — l'automatisation ne se fatigue pas",
            "Plus de temps sur les décisions et les projets",
            "Gain visible dès la première semaine",
          ],
        },
        { type: 'p' as const, text: "Et c'est permanent. Ça tourne en arrière-plan sans effort continu." },
      ] as ContentBlock[],
    },
    {
      q: "Comment vous automatisez sans développeur ?",
      blocks: [
        { type: 'p' as const, text: "On utilise des outils d'automatisation configurables — pas du code custom qui demande de la maintenance." },
        { type: 'p' as const, text: "On branche directement vos outils existants entre eux. CRM, tableurs, email, bases de données." },
        {
          type: 'list' as const,
          items: [
            "10x moins cher qu'un développeur",
            "Mise en place 10x plus rapide",
            "Modifiable si vos besoins changent",
            "Aucune dette technique",
          ],
        },
        { type: 'p' as const, text: "Vos processus s'automatisent sans surcharge technique dans votre équipe." },
      ] as ContentBlock[],
    },
    {
      q: "Est-ce que ça continue de fonctionner sans vous ?",
      blocks: [
        { type: 'p' as const, text: "Oui. Une fois en place, ça tourne indépendamment." },
        { type: 'p' as const, text: "On ne vous rend pas dépendant d'un prestataire. Vous comprenez ce qui tourne et vous pouvez le modifier si besoin." },
        {
          type: 'list' as const,
          items: [
            "Documentation claire pour chaque automatisation",
            "Accès complet — aucune boîte noire",
            "Support 14 jours pour valider que tout fonctionne",
            "Après, ça tourne tout seul",
          ],
        },
        { type: 'p' as const, text: "C'est de l'autonomie. Pas du service à long terme." },
      ] as ContentBlock[],
    },
  ],

  pricing: {
    label: 'Nos offres',
    headline: 'Un prix fixe. Une livraison garantie. Zéro surprise.',
    plans: [
      {
        name: 'Starter',
        price: '1 500€',
        priceNote: 'paiement unique',
        delivery: '7 jours',
        description: '1 automatisation simple au choix, livrée clé en main en 7 jours.',
        features: [
          'Au choix : relances email, reporting hebdo, tri inbox, ou autre tâche simple',
          'Livraison clé en main — aucun setup de votre côté',
          'Formation passation incluse (1h)',
          'Ajustements inclus pendant 14 jours',
        ],
        highlight: false,
        cta: 'Démarrer →',
      },
      {
        name: 'Growth',
        price: 'À partir de 2 000€',
        priceNote: "selon le nombre d'automatisations",
        priceRange: '2 000€ – 4 500€',
        delivery: '14 à 21 jours',
        description: '2 à 5 automatisations sur-mesure, conçues selon vos processus et vos outils existants.',
        features: [
          'De 2 à 5 automatisations sur-mesure',
          'Adaptées à vos outils existants (CRM, Sheets, email...)',
          'Formation équipe incluse (1h)',
          'Ajustements inclus pendant 30 jours',
        ],
        highlight: true,
        highlightLabel: 'Le plus choisi',
        cta: 'Choisir Growth →',
      },
      {
        name: 'Full Stack',
        price: 'Sur devis',
        priceNote: 'selon périmètre et complexité',
        delivery: 'À définir ensemble',
        description: 'Automatisations illimitées, adaptées à chaque processus. Pour les projets sans limite de périmètre.',
        features: [
          "Nombre d'automatisations illimité",
          'Audit complet de votre organisation inclus',
          'Suivi post-livraison inclus',
        ],
        highlight: false,
        cta: 'Demander un devis →',
      },
    ],
    maintenance: {
      name: 'Maintenance',
      price: '290€/mois',
      priceNote: 'optionnelle — sans engagement',
      features: [
        'Monitoring des automatisations actives',
        '1 ajustement par mois inclus',
        'Support prioritaire sous 24h',
      ],
    },
  },

  ctaFinal: {
    headline: "Chaque semaine sans automatisation, c'est 500€ de perdus. La semaine prochaine, vous pouvez les récupérer.",
    cta: "Identifier ce qui me coûte le plus — diagnostic gratuit",
  },

  about: {
    hero: {
      title: "On ne vous rend pas plus productif. On automatise ce qui vous ralentit.",
    },
    pitch: {
      title: 'Pourquoi Stripwork',
      paragraphs: [
        "La plupart des entreprises n'ont pas un problème de performance.",
        "Elles ont un problème de tâches répétitives non automatisées.",
        "On a construit Stripwork pour automatiser ce poids. Pas pour optimiser. Pour libérer du temps sur ce qui compte vraiment.",
      ],
    },
    mission: {
      title: 'Mission',
      text: "Automatiser les tâches récurrentes pour libérer les équipes sur les tâches à forte valeur. Accélérer les décisions sans recruter.",
    },
    values: [
      {
        title: 'Lucidité',
        description: "On identifie précisément ce qui peut s'automatiser.",
      },
      {
        title: 'Radicalité',
        description: "On automatise, on ne corrige pas.",
      },
      {
        title: 'Efficacité',
        description: "Chaque automatisation doit libérer du temps immédiatement.",
      },
    ],
    cta: 'Commencer le diagnostic',
  },

  footer: {
    copy: '© 2025 Stripwork',
  },

  // ─── Sections UI partagées ────────────────────────────────────────────────────

  ui: {
    // Hero widget (chiffres + phrase d'ancrage)
    heroStatSub: 'par mois en fumée',
    heroFirstResults: 'Premiers résultats en 14 jours',
    heroCostBox: {
      recruitment: 'Un recrutement :',
      cost: '35 000€/an',
      suffix: ', chaque année.',
      main: 'Stripwork : moins cher.',
      once: 'Une seule fois.',
      note: 'Pas de salaire. Pas de charges. Pas de renouvellement.',
    },
    // ProblemBlock
    commonTasks: 'Tâches courantes',
    specificTasks: 'Tâches spécifiques',
    // OfferPillars
    howItWorks: 'Comment ça marche',
    before: 'Avant',
    after: 'Après',
    // SocialProof
    clientResults: 'Résultats clients',
    // Pricing
    delivery: 'Livraison',
    // FAQ
    frequentQuestions: 'Questions fréquentes',
    // CTAFinal
    nextStep: 'Prochaine étape',
    freeCallNote: 'Diagnostic gratuit · Premiers résultats en 14 jours',
    // Footer
    privacy: 'Confidentialité',
    // Integrations
    integrationsTitle: 'Connecté à tout ce que vous utilisez déjà.',
    integrationsSub: 'On branche Stripwork sur vos outils en place — rien à changer, tout à gagner.',
    // About page
    aboutLabel: 'À propos',
    valuesLabel: 'Valeurs',
    aboutCta: 'Si vous perdez du temps à analyser, écrire ou décider — on peut le corriger.',
    // Merci page
    merci: {
      badge: 'Diagnostic reçu',
      automationsLabel: 'Automatisations identifiées pour votre profil',
      freeCallHeadline: "Votre rendez-vous d'1h est",
      freeCallAccent: 'offert.',
      freeCallDesc: 'On valide ensemble quelles automatisations sont pertinentes — et on vous donne une estimation concrète. Sans engagement.',
      bookCta: 'Réserver mon RDV →',
      closing: "Aucune newsletter. L'appel est vraiment gratuit. Réponse sous 24h ouvrées.",
      headline: (prenom: string) => prenom ? `${prenom}, voici` : 'Voici',
      headlineAccent: "ce qu'on peut automatiser pour vous.",
      desc: 'En 1 heure, on passe en revue vos processus et on valide ensemble ce qui est faisable — et ce que ça représente concrètement pour votre organisation.',
    },
  },

  // ─── Marquee ──────────────────────────────────────────────────────────────────

  marquee: [
    'Moins de tâches répétitives',
    "Plus de temps sur l'essentiel",
    '14 jours',
    'Sans recruter',
    'Automatisez ce qui se répète',
    'Décidez plus vite',
    'Moins de charge mentale',
    'Plus de valeur ajoutée',
  ],

  // ─── Diagnostic modal + card ──────────────────────────────────────────────────

  diagnostic: {
    title: 'Diagnostic Stripwork',
    freeLabel: 'Diagnostic gratuit',
    back: '← Retour',
    questionLabel: (n: number) => `Question ${n} sur 6`,
    lastStep: 'Dernière étape',
    whereToSend: 'Où envoyer votre analyse ?',
    personalizedSummary: 'On génère un résumé personnalisé à partir de vos réponses.',
    personalizedSummarySm: 'Résumé personnalisé selon vos réponses.',
    next: 'Suivant →',
    submit: 'Voir mon analyse →',
    loading: 'Analyse en cours...',
    loadingSm: 'Analyse...',
    noNewsletter: 'Aucune newsletter. Réponse sous 24h ouvrées.',
    rgpd: "J'accepte que Stripwork utilise ces informations pour me recontacter. Aucune diffusion à des tiers. Conforme RGPD.",
    rgpdSm: "J'accepte que Stripwork utilise ces données pour me recontacter. Conforme RGPD.",
    optional: '— optionnel',
    errorDefault: 'Une erreur est survenue. Veuillez réessayer.',
    errorNetwork: 'Erreur réseau. Vérifiez votre connexion.',
    fields: {
      prenom:      { label: 'Prénom',     placeholder: 'Votre prénom',          placeholderSm: 'Votre prénom' },
      email:       { label: 'Email',      placeholder: 'vous@entreprise.com',   placeholderSm: 'vous@entreprise.com' },
      entreprise:  { label: 'Entreprise', placeholder: 'Nom de votre société',  placeholderSm: 'Votre société' },
      telephone:   { label: 'Téléphone',  placeholder: '+33 6 00 00 00 00 — optionnel', placeholderSm: '+33 6 — optionnel' },
    },
    steps: [
      {
        id: 1,
        key: 'probleme' as const,
        multi: true,
        question: 'Où perdez-vous le plus de temps en ce moment ?',
        hint: 'Plusieurs choix possibles',
        options: [
          { value: 'reporting',    icon: '📊', label: 'Analyse & reporting' },
          { value: 'emails',       icon: '✉️',  label: 'Rédaction & emails' },
          { value: 'decisions',    icon: '⏳', label: 'Prises de décision lentes' },
          { value: 'organisation', icon: '🗂️', label: 'Organisation interne' },
          { value: 'autre',        icon: '💬', label: 'Autre chose' },
        ],
      },
      {
        id: 2,
        key: 'heures' as const,
        multi: false,
        question: "Combien d'heures disparaissent chaque semaine ?",
        options: [
          { value: 'moins-5h', icon: '🟡', label: 'Moins de 5h' },
          { value: '5-10h',    icon: '🟠', label: '5 à 10h' },
          { value: '10-20h',   icon: '🔴', label: '10 à 20h' },
          { value: '20h+',     icon: '🚨', label: 'Plus de 20h — chaque semaine' },
        ],
      },
      {
        id: 3,
        key: 'personnes' as const,
        multi: false,
        question: 'Combien de personnes sont concernées par ce problème ?',
        options: [
          { value: '1-2',  icon: '👤', label: '1 à 2 personnes' },
          { value: '3-5',  icon: '👥', label: '3 à 5 personnes' },
          { value: '5-10', icon: '🏘️', label: '5 à 10 personnes' },
          { value: '10+',  icon: '🏢', label: 'Plus de 10 personnes' },
        ],
      },
      {
        id: 4,
        key: 'intention' as const,
        multi: true,
        question: 'Si vous supprimiez cette charge, quels seraient les bénéfices ?',
        hint: 'Plusieurs choix possibles',
        options: [
          { value: 'temps',     icon: '⚡',   label: 'Gagner du temps' },
          { value: 'pression',  icon: '😮‍💨', label: 'Réduire la pression' },
          { value: 'decisions', icon: '🎯',  label: 'Accélérer les décisions' },
          { value: 'recruter',  icon: '💰',  label: 'Éviter de recruter' },
        ],
      },
      {
        id: 5,
        key: 'maturite' as const,
        multi: false,
        question: "Avez-vous déjà essayé d'optimiser ces tâches ?",
        options: [
          { value: 'jamais',        icon: '🌱', label: 'Non, pas encore essayé' },
          { value: 'partiellement', icon: '🔧', label: 'Oui, partiellement' },
          { value: 'echec',         icon: '💥', label: 'Oui, mais sans succès' },
        ],
      },
      {
        id: 6,
        key: 'objectif' as const,
        multi: false,
        question: 'Quel est votre objectif principal ?',
        options: [
          { value: 'tester',      icon: '🔍', label: 'Tester une première amélioration' },
          { value: 'ameliorer',   icon: '📈', label: "Améliorer l'efficacité globale" },
          { value: 'transformer', icon: '🚀', label: "Transformer l'organisation" },
        ],
      },
    ] as DiagStep[],

    results: {
      high: {
        badge: '🔥 Profil haute valeur',
        headline: (p: string) => `${p ? p + ', vous' : 'Vous'} perdez probablement entre 20% et 40% de votre capacité productive chaque semaine.`,
        body: "Ce type de configuration permet généralement de supprimer une charge équivalente à 1 poste. On peut vous montrer exactement comment — et chiffrer ce que ça représente pour votre organisation.",
        stats: [
          { label: 'Heures perdues/sem.', getValue: (a: QuizAnswers) => a.heures === '20h+' ? '20h+' : a.heures === '10-20h' ? '~15h' : '~7h' },
          { label: 'Personnes impactées', getValue: (a: QuizAnswers) => a.personnes === '10+' ? '10+' : a.personnes },
          { label: 'Objectif identifié',  getValue: (a: QuizAnswers) => a.objectif === 'transformer' ? 'Transformation' : a.objectif === 'ameliorer' ? 'Efficacité' : 'Quick win' },
        ] as StatEntry[],
        cta: "Réserver un appel d'1h →",
      },
      medium: {
        badge: '✅ Des gains rapides existent',
        headline: (p: string) => `${p ? p + ', il y' : 'Il y'} a des optimisations concrètes dans votre organisation actuelle.`,
        body: "Une première intervention permet généralement de récupérer plusieurs heures par semaine, sans tout reconstruire. Le bon endroit pour commencer existe — on peut l'identifier ensemble.",
        stats: [
          { label: 'Heures récupérables', getValue: (a: QuizAnswers) => a.heures === '10-20h' ? '5–10h/sem.' : '3–5h/sem.' },
          { label: 'Périmètre',           getValue: (a: QuizAnswers) => a.personnes === '1-2' ? 'Individuel' : 'Équipe' },
          { label: 'Maturité',            getValue: (a: QuizAnswers) => a.maturite === 'echec' ? 'Déjà tenté' : 'À explorer' },
        ] as StatEntry[],
        cta: 'Voir comment en 1h →',
      },
      low: {
        badge: '💡 Quelques pistes identifiées',
        headline: (p: string) => `${p ? p + ', votre' : 'Votre'} situation semble déjà relativement organisée.`,
        body: "Il peut exister des ajustements ciblés qui feraient une vraie différence. Un échange rapide permet de confirmer — ou d'écarter — les pistes.",
        stats: [] as StatEntry[],
        cta: 'En discuter →',
      },
    } as Record<'high' | 'medium' | 'low', DiagResult>,
  },

  // ─── Automations (page Merci) ─────────────────────────────────────────────────

  // ─── Hero Dashboard (widget animé côté droit du hero) ────────────────────────

  heroDashboard: {
    agents: [
      { id: 'rapport',  name: 'Rapport hebdomadaire', desc: 'Google Sheets → PDF → Email',      saved: '2h 15min' },
      { id: 'emails',   name: 'Tri emails entrants',   desc: 'Catégorisation + Réponses auto',   saved: '45min' },
      { id: 'synthese', name: 'Synthèse réunion',      desc: 'Transcription → Action items',     saved: '30min' },
    ],
    sequences: [
      [
        { type: 'sys',  text: 'Agent rapport — démarrage' },
        { type: 'run',  text: 'Connexion Google Sheets...' },
        { type: 'ok',   text: '847 lignes importées ✓' },
        { type: 'run',  text: 'Calcul des KPIs en cours...' },
        { type: 'ok',   text: 'Rapport PDF généré ✓' },
        { type: 'ok',   text: 'Envoyé à direction@ ✓' },
        { type: 'meta', text: 'Économisé : 2h 15min' },
      ],
      [
        { type: 'sys',  text: 'Agent emails — démarrage' },
        { type: 'run',  text: 'Lecture boîte de réception...' },
        { type: 'ok',   text: '23 emails analysés ✓' },
        { type: 'run',  text: 'Tri par priorité...' },
        { type: 'ok',   text: '8 réponses auto envoyées ✓' },
        { type: 'ok',   text: 'Dossiers mis à jour ✓' },
        { type: 'meta', text: 'Économisé : 45min' },
      ],
      [
        { type: 'sys',  text: 'Agent synthèse — démarrage' },
        { type: 'run',  text: 'Transcription audio...' },
        { type: 'ok',   text: '1 245 mots transcrits ✓' },
        { type: 'run',  text: 'Extraction des décisions...' },
        { type: 'ok',   text: '5 action items identifiés ✓' },
        { type: 'ok',   text: 'Notion mis à jour ✓' },
        { type: 'meta', text: 'Économisé : 30min' },
      ],
    ],
    activeAgents: '3 agents actifs',
    automationActive: 'Automatisation active',
    savedFormat: (h: number, m: number) => `-${h}h ${m}min économisées`,
  },

  automations: {
    reporting: [
      { title: 'Reporting hebdomadaire automatique', description: 'Consolidation des données depuis vos outils, mise en forme et envoi automatique chaque semaine — zéro intervention manuelle.' },
      { title: 'Rapport de pilotage automatique', description: 'KPIs agrégés depuis vos sources existantes, mis en forme et envoyés automatiquement à votre équipe.' },
    ],
    emails: [
      { title: 'Séquence de relances email automatisée', description: "Relances clients ou prospects déclenchées automatiquement selon le délai, le statut ou l'inaction — sans suivi manuel." },
      { title: 'Tri et priorisation inbox (IA)', description: "Classification automatique des emails entrants par urgence et type. Votre équipe ne traite que ce qui demande une vraie intervention." },
    ],
    decisions: [
      { title: 'Alertes sur seuils critiques', description: "Notification Slack ou email automatique dès qu'un KPI dépasse un seuil défini — vous décidez vite, sans surveillance constante." },
      { title: 'Synthèse IA hebdomadaire', description: 'Résumé automatique des métriques clés, rédigé par IA et envoyé à votre équipe chaque semaine.' },
    ],
    organisation: [
      { title: 'Workflow de validation interne', description: "Approbations, notifications et relances automatiques — plus aucune demande perdue dans les emails ou les conversations Slack." },
      { title: 'Automatisation des tâches récurrentes', description: "Assignation automatique, suivi d'avancement et rappels — votre équipe sait toujours où en sont les sujets sans réunion de suivi." },
    ],
    autre: [
      { title: 'Audit de vos processus répétitifs', description: "Cartographie complète pour identifier les 2 à 3 automatisations à plus fort impact dans votre organisation." },
    ],
    onboarding: { title: "Automatisation de l'onboarding", description: "Accès outils, formation, suivi administratif — flux complet d'intégration sans charge RH supplémentaire." },
    crm: { title: 'Flux CRM → Email → Slack', description: "Lead entrant → mise à jour CRM → email de bienvenue → notification équipe. Un flux connecté, zéro saisie." },
    existingAudit: { title: "Audit de l'existant + reprise", description: "Diagnostic de ce qui a bloqué par le passé, correction des causes racines, reprise sur des bases solides." },
    monitoring: { title: 'Monitoring des automatisations actives', description: "Vos automatisations surveillées en continu — alertes automatiques, logs et ajustements en temps réel." },
    defaults: [
      { title: 'Relances email automatisées', description: "Séquences déclenchées automatiquement selon le comportement client — plus aucun suivi manuel." },
      { title: 'Reporting hebdomadaire automatique', description: 'Données consolidées, mises en forme et envoyées chaque semaine sans intervention.' },
      { title: 'Flux CRM → Email → Slack', description: "Lead entrant → CRM → email de bienvenue → notification équipe. Un flux, zéro saisie." },
      { title: 'Rapport de pilotage automatique', description: 'KPIs agrégés depuis vos outils, mis en forme et envoyés automatiquement chaque semaine.' },
    ],
  } as Record<string, AutomationRec | AutomationRec[]>,

  whatsapp: {
    label:          'Discuter sur WhatsApp',
    tooltip:        'Parlez à un humain, pas un robot',
    prefillMessage: 'Bonjour Mathieu, je souhaite discuter de mon projet d\'automatisation.',
  },

  automationsCatalog: {
    badge:    'Catalogue',
    title:    'Ce qu\'on peut automatiser chez vous',
    subtitle: 'Sélectionnez une catégorie pour explorer les automatisations possibles. Chaque système est branché sur votre infrastructure existante — sans remplacer vos outils.',
    cta:      'Lancer le diagnostic',
    categories: [
      {
        id: 'email',
        icon: '✉',
        label: 'Email & Communication',
        items: [
          'Autoréponse personnalisée à chaque formulaire entrant',
          'Séquence de nurturing automatique (J+1, J+3, J+7)',
          'Email de bienvenue client généré selon son profil',
          'Relance commerciale déclenchée par changement de statut',
          'Réactivation de la base clients dormants (> 90 jours)',
          'Digest hebdomadaire équipe envoyé chaque lundi matin',
          'Confirmation et rappel de rendez-vous automatique',
        ],
      },
      {
        id: 'docs',
        icon: '◈',
        label: 'Documents & Données',
        items: [
          'Extraction structurée de données depuis une facture PDF',
          'Analyse et résumé automatique de contrats ou devis',
          'Scoring et tri de candidatures depuis CVs reçus',
          'Transformation de données brutes en rapport narratif',
          'Mise à jour automatique Google Sheets depuis un formulaire',
        ],
      },
      {
        id: 'meetings',
        icon: '◎',
        label: 'Réunions & Productivité',
        items: [
          'Compte-rendu de réunion généré depuis une transcription',
          'Extraction automatique des décisions, actions et responsables',
          'Synthèse d\'un fil email long en points clés',
          'Génération d\'un ordre du jour depuis des notes éparses',
        ],
      },
      {
        id: 'crm',
        icon: '⬡',
        label: 'Vente & CRM',
        items: [
          'Scoring automatique de chaque lead entrant selon son message',
          'Enrichissement fiche contact depuis formulaire ou email',
          'Génération de proposition commerciale personnalisée',
          'Email de suivi post-démo adapté au contexte du prospect',
        ],
      },
      {
        id: 'support',
        icon: '◇',
        label: 'Support Client',
        items: [
          'Triage des tickets par urgence et catégorie',
          'Réponse automatique aux questions fréquentes',
          'Escalade automatique vers le bon interlocuteur',
          'Rapport hebdomadaire satisfaction et sujets récurrents',
        ],
      },
      {
        id: 'finance',
        icon: '▲',
        label: 'Finance & Admin',
        items: [
          'Extraction et catégorisation automatique des dépenses',
          'Relance automatique des factures impayées à J+15, J+30',
          'Rapport financier narratif généré depuis vos données',
        ],
      },
      {
        id: 'hr',
        icon: '○',
        label: 'RH & Recrutement',
        items: [
          'Screening automatique des candidatures reçues',
          'Génération d\'offres d\'emploi depuis un brief interne',
          'Séquence d\'onboarding email pour les nouvelles recrues',
        ],
      },
    ],
  },
}

// Alias pour compatibilité serveur (schemas SEO, metadata)
export const content = contentFR
