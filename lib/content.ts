// Centralisation de tout le copy du site Stripwork
// Positionnement : on automatise les tâches répétitives → libère du temps sur les tâches non récurrentes

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }

export const content = {
  nav: {
    brand: 'Stripwork',
    links: [
      { label: '\u00C0 propos', href: '/a-propos' },
      { label: 'Diagnostic', href: '#cta' },
    ],
    cta: 'Diagnostiquer',
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
          type: 'p',
          text: "On observe ce que vos équipes font réellement toute la journée.\nOn identifie précisément ce qui se répète.\nOn supprime ces tâches de leur agenda.",
        },
        {
          type: 'p',
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
          type: 'p',
          text: "On ne regarde pas vos process sur papier.\nOn regarde ce que vos équipes font réellement toute la journée.",
        },
        {
          type: 'list',
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
          type: 'p',
          text: "Pas d'optimisation. Pas d'amélioration.\nAutomatisation pure.",
        },
        {
          type: 'p',
          text: "Ce qui prenait des heures tourne en arrière-plan.\nSans effort continu. Sans erreur.",
        },
      ] as ContentBlock[],
    },
    {
      number: '03',
      title: 'Temps libéré pour l\'essentiel',
      before: "Mise à jour CRM après chaque appel — 20 minutes, 3 fois par jour.",
      after: "Le CRM se met à jour seul. Vos commerciaux vendent.",
      blocks: [
        {
          type: 'p',
          text: "Vos équipes arrêtent de faire ce qui se répète.",
        },
        {
          type: 'list',
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
        { type: 'p', text: "Non. Ça automatise ce qu'elles ne devraient jamais faire manuellement." },
        { type: 'p', text: "Vous gardez vos équipes. Vous libérez leur temps pour ce qui ne peut pas s'automatiser — les décisions, les projets, la stratégie." },
        { type: 'p', text: "Ce qu'on fait : on prend les tâches que vos collaborateurs font tous les jours. Analyse, tri, formatting, reporting. Et on les automatise." },
        { type: 'p', text: "Résultat : vous avez les mêmes têtes, mais elles travaillent sur des sujets qui rapportent vraiment." },
      ] as ContentBlock[],
    },
    {
      q: "Combien de temps ça prend à mettre en place ?",
      blocks: [
        { type: 'p', text: "Les premiers changements sont visibles en moins de 14 jours." },
        { type: 'p', text: "Pas dans 6 mois. Pas après un projet long. Rapidement." },
        { type: 'p', text: "Semaine 1 : on identifie ce qui vous ralentit.\nSemaine 2 : les automatisations tournent. Vos équipes récupèrent du temps." },
        { type: 'p', text: "On n'ajoute pas de charge. On enlève la complexité qui existe déjà." },
      ] as ContentBlock[],
    },
    {
      q: "Est-ce adapté à mon entreprise ?",
      blocks: [
        { type: 'p', text: "Si vos équipes passent du temps à :" },
        {
          type: 'list',
          items: [
            "analyser les mêmes métriques chaque semaine",
            "rédiger des rapports ou synthèses",
            "copier-coller des données d'un outil à l'autre",
            "répéter les mêmes vérifications",
            "mettre à jour manuellement des listes ou documents",
          ],
        },
        { type: 'p', text: "Alors ce temps peut être automatisé. Donc oui." },
        { type: 'p', text: "Peu importe votre secteur ou votre taille. Si vous avez des tâches répétitives, on peut les automatiser." },
      ] as ContentBlock[],
    },
    {
      q: "Est-ce compliqué à mettre en place ?",
      blocks: [
        { type: 'p', text: "Non." },
        { type: 'p', text: "On ne rajoute pas de complexité. On automatise ce qui en génère." },
        { type: 'p', text: "Pas besoin d'embaucher un développeur. Pas besoin de recoder votre système. On branche directement sur vos outils existants." },
        { type: 'p', text: "Vous gardez votre infra. On ajoute juste l'automatisation là où ça coince." },
      ] as ContentBlock[],
    },
    {
      q: "Combien de temps ça libère vraiment ?",
      blocks: [
        { type: 'p', text: "Entre 20 et 60% du temps selon ce qu'on automatise." },
        { type: 'p', text: "Un collaborateur qui passe 3 heures par jour sur des tâches répétitives récupère 1h30 à 2h pour du travail qui compte." },
        {
          type: 'list',
          items: [
            "Moins de charge mentale au quotidien",
            "Moins d'erreurs — l'automatisation ne se fatigue pas",
            "Plus de temps sur les décisions et les projets",
            "Gain visible dès la première semaine",
          ],
        },
        { type: 'p', text: "Et c'est permanent. Ça tourne en arrière-plan sans effort continu." },
      ] as ContentBlock[],
    },
    {
      q: "Comment vous automatisez sans développeur ?",
      blocks: [
        { type: 'p', text: "On utilise des outils d'automatisation configurables — pas du code custom qui demande de la maintenance." },
        { type: 'p', text: "On branche directement vos outils existants entre eux. CRM, tableurs, email, bases de données." },
        {
          type: 'list',
          items: [
            "10x moins cher qu'un développeur",
            "Mise en place 10x plus rapide",
            "Modifiable si vos besoins changent",
            "Aucune dette technique",
          ],
        },
        { type: 'p', text: "Vos processus s'automatisent sans surcharge technique dans votre équipe." },
      ] as ContentBlock[],
    },
    {
      q: "Est-ce que ça continue de fonctionner sans vous ?",
      blocks: [
        { type: 'p', text: "Oui. Une fois en place, ça tourne indépendamment." },
        { type: 'p', text: "On ne vous rend pas dépendant d'un prestataire. Vous comprenez ce qui tourne et vous pouvez le modifier si besoin." },
        {
          type: 'list',
          items: [
            "Documentation claire pour chaque automatisation",
            "Accès complet — aucune boîte noire",
            "Support 14 jours pour valider que tout fonctionne",
            "Après, ça tourne tout seul",
          ],
        },
        { type: 'p', text: "C'est de l'autonomie. Pas du service à long terme." },
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
        priceNote: 'selon le nombre d\'automatisations',
        priceRange: '2 000€ – 4 500€',
        delivery: '14 à 21 jours',
        description: '2 à 5 automatisations interconnectées + dashboard de suivi inclus.',
        features: [
          'De 2 à 5 automatisations sur-mesure',
          'Dashboard de pilotage centralisé inclus',
          'Automatisations interconnectées (ex : lead → CRM → email → Slack)',
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
        description: 'Automatisations illimitées + dashboard de monitoring. Pour les projets sans limite de périmètre.',
        features: [
          'Nombre d\'automatisations illimité',
          'Dashboard de monitoring centralisé',
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
        "La plupart des entreprises n\u2019ont pas un probl\u00E8me de performance.",
        "Elles ont un probl\u00E8me de t\u00E2ches r\u00E9p\u00E9titives non automatis\u00E9es.",
        "On a construit Stripwork pour automatiser ce poids. Pas pour optimiser. Pour lib\u00E9rer du temps sur ce qui compte vraiment.",
      ],
    },
    mission: {
      title: 'Mission',
      text: "Automatiser les t\u00E2ches r\u00E9currentes pour lib\u00E9rer les \u00E9quipes sur les t\u00E2ches \u00E0 forte valeur. Acc\u00E9l\u00E9rer les d\u00E9cisions sans recruter.",
    },
    values: [
      {
        title: 'Lucidit\u00E9',
        description: "On identifie pr\u00E9cis\u00E9ment ce qui peut s\u2019automatiser.",
      },
      {
        title: 'Radicalit\u00E9',
        description: "On automatise, on ne corrige pas.",
      },
      {
        title: 'Efficacit\u00E9',
        description: "Chaque automatisation doit lib\u00E9rer du temps imm\u00E9diatement.",
      },
    ],
    cta: 'Commencer le diagnostic',
  },

  footer: {
    copy: '\u00A9 2025 Stripwork',
  },
}
