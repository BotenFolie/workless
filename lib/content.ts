// Centralisation de tout le copy du site Workless
// Positionnement : on automatise les tâches répétitives → libère du temps sur les tâches non récurrentes

export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }

export const content = {
  nav: {
    brand: 'Workless',
    links: [
      { label: '\u00C0 propos', href: '/a-propos' },
      { label: 'Diagnostic', href: '#cta' },
    ],
    cta: 'Diagnostiquer',
  },

  hero: {
    badge: 'Moins de travail r\u00E9p\u00E9titif. Plus de temps sur l\u2019essentiel.',
    h1: "Travaillez jusqu\u2019\u00E0 60% moins, sans recruter",
    subtitle: [
      "Aujourd\u2019hui, une grande partie du travail r\u00E9p\u00E9titif dans votre entreprise peut \u00EAtre automatis\u00E9.",
      "On identifie ces t\u00E2ches, on les automatise, et vos \u00E9quipes r\u00E9cup\u00E8rent du temps pour ce qui compte vraiment.",
    ],
    cta: "Diagnostiquer ce qui me fait perdre du temps",
  },

  problem: {
    label: 'Le probl\u00E8me',
    headline:
      "Vos \u00E9quipes passent leur journ\u00E9e \u00E0 r\u00E9p\u00E9ter des t\u00E2ches qui pourraient s\u2019automatiser.",
    blocks: [
      {
        type: 'p',
        text: "Analyse, r\u00E9daction, reporting, prises de d\u00E9cision lentes.",
      },
      {
        type: 'p',
        text: "Ce n\u2019est pas du travail \u00E0 forte valeur.\nC\u2019est du temps perdu sur des t\u00E2ches r\u00E9currentes.",
      },
      {
        type: 'p',
        text: "Chaque heure pass\u00E9e l\u00E0-dessus\u00A0:",
      },
      {
        type: 'list',
        items: [
          "vous co\u00FBte de l\u2019argent",
          "ralentit vos d\u00E9cisions",
          "emp\u00EAche vos \u00E9quipes de se concentrer sur l\u2019essentiel",
        ],
      },
      {
        type: 'p',
        text: "Et vous pensez que c\u2019est normal.",
      },
    ] as ContentBlock[],

    solution: {
      label: 'La solution',
      headline: "On automatise ce qui vous ralentit — vos \u00E9quipes r\u00E9cup\u00E8rent du temps pour ce qui compte.",
      blocks: [
        {
          type: 'p',
          text: "On ne vous rend pas plus productif.",
        },
        {
          type: 'p',
          text: "On automatise les t\u00E2ches r\u00E9p\u00E9titives pour lib\u00E9rer du temps sur ce qui ne peut pas l\u2019\u00EAtre.",
        },
        {
          type: 'p',
          text: "Moins de friction.\nMoins de charge.\nPlus de temps sur ce qui compte.",
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

  pillars: [
    {
      number: '01',
      title: 'Analyse du travail r\u00E9el',
      blocks: [
        {
          type: 'p',
          text: "On ne regarde pas vos process.\nOn regarde ce que vos \u00E9quipes font r\u00E9ellement toute la journ\u00E9e.",
        },
        { type: 'p', text: "On identifie pr\u00E9cis\u00E9ment\u00A0:" },
        {
          type: 'list',
          items: [
            "o\u00F9 le temps est perdu sur des t\u00E2ches r\u00E9currentes",
            "ce qui ralentit les d\u00E9cisions",
            "ce qui pourrait s\u2019automatiser imm\u00E9diatement",
          ],
        },
      ] as ContentBlock[],
    },
    {
      number: '02',
      title: 'Automatisation des t\u00E2ches r\u00E9p\u00E9titives',
      blocks: [
        {
          type: 'p',
          text: "On automatise les t\u00E2ches qui n\u2019ont plus besoin d\u2019\u00EAtre faites manuellement.",
        },
        {
          type: 'p',
          text: "Pas d\u2019optimisation.\nPas d\u2019am\u00E9lioration.\n\nAutomatisation pure.",
        },
        {
          type: 'p',
          text: "Ce qui prenait des heures tourne en arri\u00E8re-plan.",
        },
      ] as ContentBlock[],
    },
    {
      number: '03',
      title: 'Temps lib\u00E9r\u00E9 pour l\u2019essentiel',
      blocks: [
        {
          type: 'p',
          text: "Vos \u00E9quipes arr\u00EAtent de faire ce qui se r\u00E9p\u00E8te.",
        },
        {
          type: 'p',
          text: "Elles se concentrent sur les d\u00E9cisions, les projets, les t\u00E2ches non r\u00E9currentes \u00E0 forte valeur.",
        },
        { type: 'p', text: "R\u00E9sultat\u00A0:" },
        {
          type: 'list',
          items: [
            "moins de charge mentale",
            "d\u00E9cisions plus rapides",
            "temps r\u00E9cup\u00E9r\u00E9 d\u00E8s les premiers jours",
          ],
        },
      ] as ContentBlock[],
    },
  ],

  testimonials: [
    {
      quote:
        "Avant, mon \u00E9quipe passait 3h par jour \u00E0 consolider des donn\u00E9es entre nos outils. Aujourd\u2019hui c\u2019est automatis\u00E9 et ils se concentrent sur ce qui g\u00E9n\u00E8re vraiment de la valeur.",
      author: "Sophie M.",
      role: "Directrice Op\u00E9rations \u2014 Cabinet de conseil, 18 personnes",
    },
    {
      quote: "On n\u2019a pas recrut\u00E9. On a automatis\u00E9 nos reportings hebdomadaires et lib\u00E9r\u00E9 pr\u00E8s de 10h par semaine. L\u2019impact a \u00E9t\u00E9 visible d\u00E8s la deuxi\u00E8me semaine.",
      author: "Thomas B.",
      role: "Responsable Marketing \u2014 E-commerce, 12 personnes",
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

    ctaFinal: {
    headline: "Arr\u00EAtez de payer du temps sur des t\u00E2ches qui peuvent s\u2019automatiser",
    cta: "Voir o\u00F9 vous perdez 30% de votre temps",
  },

  about: {
    hero: {
      title: "On ne vous rend pas plus productif. On automatise ce qui vous ralentit.",
    },
    pitch: {
      title: 'Pourquoi Workless',
      paragraphs: [
        "La plupart des entreprises n\u2019ont pas un probl\u00E8me de performance.",
        "Elles ont un probl\u00E8me de t\u00E2ches r\u00E9p\u00E9titives non automatis\u00E9es.",
        "On a construit Workless pour automatiser ce poids. Pas pour optimiser. Pour lib\u00E9rer du temps sur ce qui compte vraiment.",
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
    copy: '\u00A9 2025 Workless',
  },
}
