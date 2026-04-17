// Site content — English version
// Same structure as content.ts (FR)

import type { QuizAnswers } from './diagnosticConfig'
import type { ContentBlock, DiagStep, StatEntry, DiagResult, AutomationRec } from './content'

export const contentEN = {
  nav: {
    brand: 'Stripwork',
    links: [
      { label: 'About', href: '/a-propos' },
      { label: 'Diagnostic', href: '#cta' },
    ],
    servicesLabel: 'Services',
    services: [
      { label: 'Lead automation',         href: '/automatisation-leads' },
      { label: 'Sales follow-up',         href: '/relance-commerciale-automatique' },
      { label: 'Automated reporting',     href: '/reporting-automatique' },
      { label: 'Dormant client revival',  href: '/reactivation-clients-automatique' },
      { label: 'Invoice processing',      href: '/traitement-factures-automatique' },
    ],
    cta: 'Get diagnosed',
    langFR: 'FR',
    langEN: 'EN',
  },

  hero: {
    badge: "Your teams waste 48 hours a month on repetitive tasks — that's over €2,000 you're paying for nothing.",
    h1: "Your repetitive tasks disappear. Your team stays.",
    subtitle: [
      "While your team copies, follows up, and formats, they're not working on what generates real value.",
      "We identify what repeats, we automate it, your teams get back time for what truly matters.",
    ],
    cta: "Get back 48h per month — free diagnostic",
  },

  heroWords: [
    { text: 'Your', accent: false },
    { text: 'repetitive', accent: true },
    { text: 'tasks', accent: false },
    { text: 'disappear.', accent: false },
    { text: 'Your', accent: false },
    { text: 'team', accent: false },
    { text: 'stays.', accent: false },
  ],

  problem: {
    label: 'The problem',
    headline: "Every week, your team does exactly the same things over again.",
    universal: [
      { task: "Emails and client follow-ups", frequency: "every week, without exception" },
      { task: "Reporting and dashboards", frequency: "every Monday morning" },
      { task: "Data entry and transfers", frequency: "every day, manually" },
    ],
    niche: [
      { task: "CRM update after every call", frequency: "after every meeting" },
      { task: "Quote generation from a template", frequency: "on every new request" },
      { task: "PDF data extraction from suppliers", frequency: "on every invoice received" },
    ],
    closing: "This isn't work. It's repetition. And it can be eliminated.",

    solution: {
      label: 'The solution',
      headline: "We don't make you more productive. We automate what's slowing you down — your teams get back time for what matters.",
      blocks: [
        {
          type: 'p' as const,
          text: "We observe what your teams actually do all day long.\nWe precisely identify what repeats.\nWe remove those tasks from their schedule.",
        },
        {
          type: 'p' as const,
          text: "Less friction.\nLess mental load.\nMore time for what can't be automated.",
        },
      ] as ContentBlock[],
      kpi: {
        value: '14',
        unit: 'days',
        description: "To see concrete changes in your organization.",
        note: "No hiring. No restructuring.",
      },
    },
  },

  cost: {
    label: 'What it actually costs you',
    headline: "48h per month. €2,000 paid for tasks that should never have existed.",
    stats: [
      { value: '48h', label: 'lost per month', sub: '12h every week, without exception' },
      { value: '€2,000', label: 'paid for nothing', sub: 'at the average loaded SME cost' },
      { value: '€24,000', label: 'per year', sub: 'in work with no added value' },
    ],
    calculation: {
      label: 'The math',
      steps: [
        "48h lost per month on repetitive tasks (12h/week × 4)",
        "× €42/h — average loaded cost of a senior SME employee",
        "= €2,000/month in work that should never have existed",
      ],
      conclusion: "Every month without automation is €2,000 you're paying for work that should never have existed. And €24,000 per year.",
    },
  },

  pillars: [
    {
      number: '01',
      title: 'Real work analysis',
      before: "3 tools open, data copied by hand, a report assembled every Monday.",
      after: "1 automatic report, generated without intervention, available every Monday at 8am.",
      blocks: [
        {
          type: 'p' as const,
          text: "We don't look at your processes on paper.\nWe look at what your teams actually do all day long.",
        },
        {
          type: 'list' as const,
          items: [
            "Where time disappears on recurring tasks",
            "What slows down decisions",
            "What can be automated immediately",
          ],
        },
      ] as ContentBlock[],
    },
    {
      number: '02',
      title: 'Automation of repetitive tasks',
      before: "Manual client follow-ups — 2h per week, every week, without exception.",
      after: "Follow-ups go out automatically. Your team never sees them again.",
      blocks: [
        {
          type: 'p' as const,
          text: "No optimization. No improvement.\nPure automation.",
        },
        {
          type: 'p' as const,
          text: "What used to take hours runs in the background.\nWith no ongoing effort. No errors.",
        },
      ] as ContentBlock[],
    },
    {
      number: '03',
      title: 'Time freed for what matters',
      before: "CRM update after every call — 20 minutes, 3 times a day.",
      after: "The CRM updates itself. Your sales team sells.",
      blocks: [
        {
          type: 'p' as const,
          text: "Your teams stop doing what repeats.",
        },
        {
          type: 'list' as const,
          items: [
            "Less daily mental load",
            "Faster decisions",
            "Time recovered from the first week",
          ],
        },
      ] as ContentBlock[],
    },
  ],

  testimonials: [
    {
      quote: "We were handling every incoming file manually — extracting documents, updating the tracker, following up with clients. Three team members spent 2 hours a day on that. Now it's automated. They work on the files, not on managing them.",
      author: "Isabelle R.",
      role: "Managing Partner — Law Firm, 14 people",
      result: "8h recovered per week per team member",
    },
    {
      quote: "We used to produce our clients' performance reports by hand every week. Data consolidation, formatting, sending. That was 6 hours lost every Friday. Now it runs automatically Thursday evening. On Friday, we analyze. We no longer format.",
      author: "Nicolas T.",
      role: "Managing Director — Marketing Agency, 11 people",
      result: "6h freed every Friday",
    },
    {
      quote: "Our consultants spent an hour per project copying client data into our internal tools. With 30 active projects, that was billable time lost every week. We automated the entire data entry process. The margin impact was visible in the first month.",
      author: "Laurent M.",
      role: "CEO — Consulting Firm, 22 people",
      result: "30h/month recovered on non-billable tasks",
    },
  ],

  faq: [
    {
      q: "Does this replace my team?",
      blocks: [
        { type: 'p' as const, text: "No. It automates what they should never be doing manually." },
        { type: 'p' as const, text: "You keep your team. You free up their time for what can't be automated — decisions, projects, strategy." },
        { type: 'p' as const, text: "What we do: we take the tasks your team does every day. Analysis, sorting, formatting, reporting. And we automate them." },
        { type: 'p' as const, text: "Result: same people, but they work on topics that actually drive value." },
      ] as ContentBlock[],
    },
    {
      q: "How long does it take to set up?",
      blocks: [
        { type: 'p' as const, text: "The first changes are visible in less than 14 days." },
        { type: 'p' as const, text: "Not in 6 months. Not after a long project. Quickly." },
        { type: 'p' as const, text: "Week 1: we identify what's slowing you down.\nWeek 2: automations are running. Your teams get back their time." },
        { type: 'p' as const, text: "We don't add load. We remove the complexity that's already there." },
      ] as ContentBlock[],
    },
    {
      q: "Is this right for my company?",
      blocks: [
        { type: 'p' as const, text: "If your teams spend time:" },
        {
          type: 'list' as const,
          items: [
            "analyzing the same metrics every week",
            "writing reports or summaries",
            "copy-pasting data from one tool to another",
            "repeating the same verifications",
            "manually updating lists or documents",
          ],
        },
        { type: 'p' as const, text: "Then that time can be automated. So yes." },
        { type: 'p' as const, text: "Regardless of your sector or size. If you have repetitive tasks, we can automate them." },
      ] as ContentBlock[],
    },
    {
      q: "Is it complex to set up?",
      blocks: [
        { type: 'p' as const, text: "No." },
        { type: 'p' as const, text: "We don't add complexity. We automate what creates it." },
        { type: 'p' as const, text: "No need to hire a developer. No need to recode your system. We plug directly into your existing tools." },
        { type: 'p' as const, text: "You keep your infrastructure. We just add automation where it's blocking." },
      ] as ContentBlock[],
    },
    {
      q: "How much time does it actually free up?",
      blocks: [
        { type: 'p' as const, text: "Between 20% and 60% of time depending on what we automate." },
        { type: 'p' as const, text: "A team member who spends 3 hours a day on repetitive tasks gets back 1.5 to 2 hours for work that matters." },
        {
          type: 'list' as const,
          items: [
            "Less daily mental load",
            "Fewer errors — automation doesn't get tired",
            "More time for decisions and projects",
            "Gain visible from the first week",
          ],
        },
        { type: 'p' as const, text: "And it's permanent. It runs in the background with no ongoing effort." },
      ] as ContentBlock[],
    },
    {
      q: "How do you automate without a developer?",
      blocks: [
        { type: 'p' as const, text: "We use configurable automation tools — not custom code that requires maintenance." },
        { type: 'p' as const, text: "We connect your existing tools directly to each other. CRM, spreadsheets, email, databases." },
        {
          type: 'list' as const,
          items: [
            "10x cheaper than a developer",
            "10x faster to implement",
            "Adjustable as your needs change",
            "Zero technical debt",
          ],
        },
        { type: 'p' as const, text: "Your processes get automated without technical overload on your team." },
      ] as ContentBlock[],
    },
    {
      q: "Does it keep working without you?",
      blocks: [
        { type: 'p' as const, text: "Yes. Once set up, it runs independently." },
        { type: 'p' as const, text: "We don't make you dependent on a vendor. You understand what's running and can modify it if needed." },
        {
          type: 'list' as const,
          items: [
            "Clear documentation for each automation",
            "Full access — no black boxes",
            "14-day support to validate everything works",
            "After that, it runs on its own",
          ],
        },
        { type: 'p' as const, text: "It's autonomy. Not long-term service dependency." },
      ] as ContentBlock[],
    },
  ],

  pricing: {
    label: 'Our plans',
    headline: 'Fixed price. Guaranteed delivery. Zero surprises.',
    plans: [
      {
        name: 'Starter',
        price: '€1,500',
        priceNote: 'one-time payment',
        delivery: '7 days',
        description: '1 simple automation of your choice, delivered turnkey in 7 days.',
        features: [
          'Your choice: email follow-ups, weekly reporting, inbox triage, or other simple task',
          'Turnkey delivery — no setup on your end',
          'Handover training included (1h)',
          'Adjustments included for 14 days',
        ],
        highlight: false,
        cta: 'Get started →',
      },
      {
        name: 'Growth',
        price: 'From €2,000',
        priceNote: 'based on number of automations',
        priceRange: '€2,000 – €4,500',
        delivery: '14 to 21 days',
        description: '2 to 5 interconnected automations + monitoring dashboard included.',
        features: [
          '2 to 5 custom automations',
          'Centralized monitoring dashboard included',
          'Interconnected automations (e.g.: lead → CRM → email → Slack)',
          'Team training included (1h)',
          'Adjustments included for 30 days',
        ],
        highlight: true,
        highlightLabel: 'Most popular',
        cta: 'Choose Growth →',
      },
      {
        name: 'Full Stack',
        price: 'Custom quote',
        priceNote: 'based on scope and complexity',
        delivery: 'To define together',
        description: 'Unlimited automations + monitoring dashboard. For projects with no scope limit.',
        features: [
          'Unlimited automations',
          'Centralized monitoring dashboard',
          'Full organizational audit included',
          'Post-delivery follow-up included',
        ],
        highlight: false,
        cta: 'Request a quote →',
      },
    ],
    maintenance: {
      name: 'Maintenance',
      price: '€290/month',
      priceNote: 'optional — no commitment',
      features: [
        'Active automation monitoring',
        '1 adjustment per month included',
        'Priority support within 24h',
      ],
    },
  },

  ctaFinal: {
    headline: "Every week without automation is €500 lost. Next week, you can get it back.",
    cta: "Identify what costs you most — free diagnostic",
  },

  about: {
    hero: {
      title: "We don't make you more productive. We automate what's slowing you down.",
    },
    pitch: {
      title: 'Why Stripwork',
      paragraphs: [
        "Most companies don't have a performance problem.",
        "They have a problem of unautomated repetitive tasks.",
        "We built Stripwork to automate this burden. Not to optimize. To free up time for what truly matters.",
      ],
    },
    mission: {
      title: 'Mission',
      text: "Automate recurring tasks to free teams for high-value work. Accelerate decisions without hiring.",
    },
    values: [
      {
        title: 'Clarity',
        description: "We precisely identify what can be automated.",
      },
      {
        title: 'Radicalness',
        description: "We automate, we don't patch.",
      },
      {
        title: 'Efficiency',
        description: "Every automation must free up time immediately.",
      },
    ],
    cta: 'Start the diagnostic',
  },

  footer: {
    copy: '© 2025 Stripwork',
  },

  // ─── Sections UI partagées ────────────────────────────────────────────────────

  ui: {
    heroStatSub: 'gone per month',
    heroFirstResults: 'First results in 14 days',
    heroCostBox: {
      recruitment: 'A new hire:',
      cost: '€35,000/year',
      suffix: ', every year.',
      main: 'Stripwork: less.',
      once: 'One time only.',
      note: 'No salary. No payroll. No renewal.',
    },
    commonTasks: 'Common tasks',
    specificTasks: 'Specific tasks',
    howItWorks: 'How it works',
    before: 'Before',
    after: 'After',
    clientResults: 'Client results',
    delivery: 'Delivery',
    frequentQuestions: 'Frequently asked questions',
    nextStep: 'Next step',
    freeCallNote: 'Free diagnostic · First results in 14 days',
    privacy: 'Privacy',
    integrationsTitle: 'Connected to everything you already use.',
    integrationsSub: 'We plug Stripwork into your existing tools — nothing to change, everything to gain.',
    aboutLabel: 'About',
    valuesLabel: 'Values',
    aboutCta: "If you're losing time analyzing, writing, or deciding — we can fix that.",
    merci: {
      badge: 'Diagnostic received',
      automationsLabel: 'Automations identified for your profile',
      freeCallHeadline: 'Your 1-hour call is',
      freeCallAccent: 'on us.',
      freeCallDesc: "We validate together which automations make sense — and give you a concrete estimate. No commitment.",
      bookCta: 'Book my call →',
      closing: "No newsletter. The call is genuinely free. Response within 24 business hours.",
      headline: (prenom: string) => prenom ? `${prenom}, here's` : "Here's",
      headlineAccent: "what we can automate for you.",
      desc: "In 1 hour, we review your processes and validate together what's feasible — and what it means concretely for your organization.",
    },
  },

  // ─── Marquee ──────────────────────────────────────────────────────────────────

  marquee: [
    'Less repetitive tasks',
    'More time for what matters',
    '14 days',
    'No hiring needed',
    'Automate what repeats',
    'Decide faster',
    'Less mental load',
    'More added value',
  ],

  // ─── Diagnostic modal + card ──────────────────────────────────────────────────

  diagnostic: {
    title: 'Stripwork Diagnostic',
    freeLabel: 'Free diagnostic',
    back: '← Back',
    questionLabel: (n: number) => `Question ${n} of 6`,
    lastStep: 'Last step',
    whereToSend: 'Where should we send your analysis?',
    personalizedSummary: 'We generate a personalized summary from your answers.',
    personalizedSummarySm: 'Personalized summary from your answers.',
    next: 'Next →',
    submit: 'See my analysis →',
    loading: 'Analyzing...',
    loadingSm: 'Analyzing...',
    noNewsletter: 'No newsletter. Response within 24 business hours.',
    rgpd: "I agree that Stripwork uses this information to contact me. Not shared with third parties. GDPR compliant.",
    rgpdSm: "I agree that Stripwork uses this data to contact me. GDPR compliant.",
    optional: '— optional',
    errorDefault: 'An error occurred. Please try again.',
    errorNetwork: 'Network error. Check your connection.',
    fields: {
      prenom:     { label: 'First name', placeholder: 'Your first name',       placeholderSm: 'Your first name' },
      email:      { label: 'Email',      placeholder: 'you@company.com',        placeholderSm: 'you@company.com' },
      entreprise: { label: 'Company',    placeholder: 'Your company name',      placeholderSm: 'Your company' },
      telephone:  { label: 'Phone',      placeholder: '+1 000 000 0000 — optional', placeholderSm: 'Phone — optional' },
    },
    steps: [
      {
        id: 1,
        key: 'probleme' as const,
        multi: true,
        question: 'Where are you losing the most time right now?',
        hint: 'Multiple choices possible',
        options: [
          { value: 'reporting',    icon: '📊', label: 'Analysis & reporting' },
          { value: 'emails',       icon: '✉️',  label: 'Writing & emails' },
          { value: 'decisions',    icon: '⏳', label: 'Slow decision-making' },
          { value: 'organisation', icon: '🗂️', label: 'Internal organization' },
          { value: 'autre',        icon: '💬', label: 'Something else' },
        ],
      },
      {
        id: 2,
        key: 'heures' as const,
        multi: false,
        question: "How many hours disappear every week?",
        options: [
          { value: 'moins-5h', icon: '🟡', label: 'Less than 5h' },
          { value: '5-10h',    icon: '🟠', label: '5 to 10h' },
          { value: '10-20h',   icon: '🔴', label: '10 to 20h' },
          { value: '20h+',     icon: '🚨', label: 'More than 20h — every week' },
        ],
      },
      {
        id: 3,
        key: 'personnes' as const,
        multi: false,
        question: 'How many people are affected by this?',
        options: [
          { value: '1-2',  icon: '👤', label: '1 to 2 people' },
          { value: '3-5',  icon: '👥', label: '3 to 5 people' },
          { value: '5-10', icon: '🏘️', label: '5 to 10 people' },
          { value: '10+',  icon: '🏢', label: 'More than 10 people' },
        ],
      },
      {
        id: 4,
        key: 'intention' as const,
        multi: true,
        question: 'If you eliminated this burden, what would the benefits be?',
        hint: 'Multiple choices possible',
        options: [
          { value: 'temps',     icon: '⚡',   label: 'Save time' },
          { value: 'pression',  icon: '😮‍💨', label: 'Reduce pressure' },
          { value: 'decisions', icon: '🎯',  label: 'Speed up decisions' },
          { value: 'recruter',  icon: '💰',  label: 'Avoid hiring' },
        ],
      },
      {
        id: 5,
        key: 'maturite' as const,
        multi: false,
        question: "Have you already tried to optimize these tasks?",
        options: [
          { value: 'jamais',        icon: '🌱', label: 'No, not yet' },
          { value: 'partiellement', icon: '🔧', label: 'Yes, partially' },
          { value: 'echec',         icon: '💥', label: 'Yes, without success' },
        ],
      },
      {
        id: 6,
        key: 'objectif' as const,
        multi: false,
        question: 'What is your main goal?',
        options: [
          { value: 'tester',      icon: '🔍', label: 'Test a first improvement' },
          { value: 'ameliorer',   icon: '📈', label: 'Improve overall efficiency' },
          { value: 'transformer', icon: '🚀', label: 'Transform the organization' },
        ],
      },
    ] as DiagStep[],

    results: {
      high: {
        badge: '🔥 High-value profile',
        headline: (p: string) => `${p ? p + ', you' : 'You'} are likely losing between 20% and 40% of your productive capacity every week.`,
        body: "This type of configuration typically allows eliminating a workload equivalent to 1 full-time position. We can show you exactly how — and put a number on what it means for your organization.",
        stats: [
          { label: 'Hours lost/week', getValue: (a: QuizAnswers) => a.heures === '20h+' ? '20h+' : a.heures === '10-20h' ? '~15h' : '~7h' },
          { label: 'People impacted', getValue: (a: QuizAnswers) => a.personnes === '10+' ? '10+' : a.personnes },
          { label: 'Identified goal',  getValue: (a: QuizAnswers) => a.objectif === 'transformer' ? 'Transformation' : a.objectif === 'ameliorer' ? 'Efficiency' : 'Quick win' },
        ] as StatEntry[],
        cta: "Book a 1-hour call →",
      },
      medium: {
        badge: '✅ Quick wins available',
        headline: (p: string) => `${p ? p + ', there' : 'There'} are concrete improvements available in your current organization.`,
        body: "A first intervention typically recovers several hours per week, without rebuilding everything. The right place to start exists — we can identify it together.",
        stats: [
          { label: 'Recoverable hours', getValue: (a: QuizAnswers) => a.heures === '10-20h' ? '5–10h/wk' : '3–5h/wk' },
          { label: 'Scope',             getValue: (a: QuizAnswers) => a.personnes === '1-2' ? 'Individual' : 'Team' },
          { label: 'Maturity',          getValue: (a: QuizAnswers) => a.maturite === 'echec' ? 'Already tried' : 'To explore' },
        ] as StatEntry[],
        cta: 'See how in 1h →',
      },
      low: {
        badge: '💡 Some leads identified',
        headline: (p: string) => `${p ? p + ', your' : 'Your'} situation seems already relatively organized.`,
        body: "There may be targeted adjustments that would make a real difference. A quick conversation can confirm — or rule out — the leads.",
        stats: [] as StatEntry[],
        cta: 'Talk about it →',
      },
    } as Record<'high' | 'medium' | 'low', DiagResult>,
  },

  // ─── Automations (page Merci) ─────────────────────────────────────────────────

  // ─── Hero Dashboard ───────────────────────────────────────────────────────────

  heroDashboard: {
    agents: [
      { id: 'rapport',  name: 'Weekly report',    desc: 'Google Sheets → PDF → Email',    saved: '2h 15min' },
      { id: 'emails',   name: 'Inbox triage',     desc: 'Categorization + Auto-replies',  saved: '45min' },
      { id: 'synthese', name: 'Meeting summary',  desc: 'Transcript → Action items',      saved: '30min' },
    ],
    sequences: [
      [
        { type: 'sys',  text: 'Report agent — starting' },
        { type: 'run',  text: 'Connecting to Google Sheets...' },
        { type: 'ok',   text: '847 rows imported ✓' },
        { type: 'run',  text: 'Calculating KPIs...' },
        { type: 'ok',   text: 'PDF report generated ✓' },
        { type: 'ok',   text: 'Sent to management@ ✓' },
        { type: 'meta', text: 'Saved: 2h 15min' },
      ],
      [
        { type: 'sys',  text: 'Email agent — starting' },
        { type: 'run',  text: 'Reading inbox...' },
        { type: 'ok',   text: '23 emails analyzed ✓' },
        { type: 'run',  text: 'Sorting by priority...' },
        { type: 'ok',   text: '8 auto-replies sent ✓' },
        { type: 'ok',   text: 'Folders updated ✓' },
        { type: 'meta', text: 'Saved: 45min' },
      ],
      [
        { type: 'sys',  text: 'Summary agent — starting' },
        { type: 'run',  text: 'Transcribing audio...' },
        { type: 'ok',   text: '1,245 words transcribed ✓' },
        { type: 'run',  text: 'Extracting decisions...' },
        { type: 'ok',   text: '5 action items identified ✓' },
        { type: 'ok',   text: 'Notion updated ✓' },
        { type: 'meta', text: 'Saved: 30min' },
      ],
    ],
    activeAgents: '3 active agents',
    automationActive: 'Automation active',
    savedFormat: (h: number, m: number) => `-${h}h ${m}min saved`,
  },

  automations: {
    reporting: [
      { title: 'Automatic weekly reporting', description: 'Data consolidated from your tools, formatted and sent automatically every week — zero manual intervention.' },
      { title: 'Real-time monitoring dashboard', description: 'KPIs aggregated from your existing sources, updated continuously and accessible in one click.' },
    ],
    emails: [
      { title: 'Automated email follow-up sequence', description: "Client or prospect follow-ups triggered automatically based on delay, status, or inaction — no manual tracking." },
      { title: 'Inbox triage & prioritization (AI)', description: "Automatic classification of incoming emails by urgency and type. Your team only handles what requires real intervention." },
    ],
    decisions: [
      { title: 'Critical threshold alerts', description: "Automatic Slack or email notification when a KPI crosses a defined threshold — you decide fast, without constant monitoring." },
      { title: 'Weekly AI summary', description: 'Automatic summary of key metrics, written by AI and sent to your team every week.' },
    ],
    organisation: [
      { title: 'Internal approval workflow', description: "Approvals, notifications, and automatic follow-ups — no more requests lost in emails or Slack conversations." },
      { title: 'Recurring task automation', description: "Automatic assignment, progress tracking, and reminders — your team always knows where things stand without status meetings." },
    ],
    autre: [
      { title: 'Repetitive process audit', description: "Complete mapping to identify the 2 to 3 automations with the highest impact in your organization." },
    ],
    onboarding: { title: "Onboarding automation", description: "Tool access, training, administrative tracking — complete integration flow with no additional HR load." },
    crm: { title: 'CRM → Email → Slack flow', description: "Incoming lead → CRM update → welcome email → team notification. One connected flow, zero manual entry." },
    existingAudit: { title: "Existing system audit + recovery", description: "Diagnosis of what blocked in the past, root cause correction, restart on solid foundations." },
    monitoring: { title: 'Centralized monitoring dashboard', description: "All your automations monitored in one place — alerts, logs, performance, and real-time adjustments." },
    defaults: [
      { title: 'Automated email follow-ups', description: "Sequences triggered automatically based on client behavior — no more manual tracking." },
      { title: 'Automatic weekly reporting', description: 'Data consolidated, formatted and sent every week without intervention.' },
      { title: 'CRM → Email → Slack flow', description: "Incoming lead → CRM → welcome email → team notification. One flow, zero manual entry." },
      { title: 'Real-time monitoring dashboard', description: 'KPIs aggregated from your tools, available in one click for your decisions.' },
    ],
  } as Record<string, AutomationRec | AutomationRec[]>,
}
