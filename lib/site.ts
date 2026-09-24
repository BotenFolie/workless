// Données de base du studio : équipe, offres, abonnements, parrainage.
// Rien d'inventé : ce qui n'est pas confirmé reste marqué [À CONFIRMER].

import type { Locale } from './routes'

export type T = Record<Locale, string>

export const STUDIO = {
  name: 'Stripwork',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@stripwork.com',
  /** Téléphone public : affiché seulement s'il est renseigné */
  phone: process.env.NEXT_PUBLIC_PHONE || '',
}

export const TEAM: { name: string; initials: string; role: T; does: T }[] = [
  {
    name: 'Eva Latour',
    initials: 'EL',
    role: { fr: 'Direction artistique', es: 'Dirección de arte' },
    does: {
      fr: 'Conçoit l’identité visuelle et l’interface de chaque site à partir du métier, du positionnement et de la clientèle de l’entreprise : direction artistique, typographie, hiérarchie des contenus et scène signature. Aucun modèle, aucun thème acheté.',
      es: 'Concibe la identidad visual y la interfaz de cada web a partir del oficio, el posicionamiento y la clientela de la empresa: dirección de arte, tipografía, jerarquía de contenidos y escena propia. Sin plantillas ni temas comprados.',
    },
  },
  {
    name: 'Mathieu Jannolfo',
    initials: 'MJ',
    role: { fr: 'Développeur web · expert SEO & SEA', es: 'Desarrollador web · experto SEO y SEM' },
    does: {
      fr: 'Développe le site et en garantit la qualité technique (vitesse, indexation, données structurées). Définit la stratégie de référencement naturel, de l’architecture des pages au SEO local, puis conçoit, pilote et optimise les campagnes Google Ads.',
      es: 'Desarrolla la web y garantiza su calidad técnica (velocidad, indexación, datos estructurados). Define la estrategia de posicionamiento orgánico, de la arquitectura de páginas al SEO local, y diseña, gestiona y optimiza las campañas de Google Ads.',
    },
  },
  {
    name: 'Louis Jannolfo',
    initials: 'LJ',
    role: { fr: 'Développeur web · data analyse', es: 'Desarrollador web · análisis de datos' },
    does: {
      fr: 'Développe le site et met en place la mesure : suivi des appels, des formulaires et des conversions (GA4, Google Tag Manager). Analyse les données pour orienter les décisions SEO et Google Ads sur des chiffres réels, pas des impressions.',
      es: 'Desarrolla la web e implanta la medición: seguimiento de llamadas, formularios y conversiones (GA4, Google Tag Manager). Analiza los datos para que las decisiones de SEO y Google Ads se basen en cifras reales, no en impresiones.',
    },
  },
]

export type Offer = {
  id: 'essentiel' | 'signature' | 'surmesure'
  name: T
  price: number
  from: boolean
  pitch: T
  includes: Record<Locale, string[]>
}

export const OFFERS: Offer[] = [
  {
    id: 'essentiel',
    name: { fr: 'Essentiel', es: 'Esencial' },
    price: 1199,
    from: false,
    pitch: {
      fr: 'Le site qui vous rend trouvable et joignable.',
      es: 'La web que le hace encontrable y localizable.',
    },
    includes: {
      fr: [
        'Jusqu’à 5 pages',
        'Design sur mesure, aucun modèle',
        'SEO technique complet',
        'Données structurées (JSON-LD)',
        'Formulaire de contact',
        'Optimisation de la fiche Google',
        'Mise en ligne',
      ],
      es: [
        'Hasta 5 páginas',
        'Diseño a medida, sin plantillas',
        'SEO técnico completo',
        'Datos estructurados (JSON-LD)',
        'Formulario de contacto',
        'Optimización de la ficha de Google',
        'Publicación',
      ],
    },
  },
  {
    id: 'signature',
    name: { fr: 'Signature', es: 'Firma' },
    price: 1590,
    from: false,
    pitch: {
      fr: 'Le site qu’on retient, pensé pour votre métier.',
      es: 'La web que se recuerda, pensada para su oficio.',
    },
    includes: {
      fr: [
        'Tout Essentiel',
        'Jusqu’à 10 pages',
        'Animation signature propre à votre métier',
        'Pages métier et pages ville',
        'Textes SEO rédigés',
      ],
      es: [
        'Todo lo de Esencial',
        'Hasta 10 páginas',
        'Animación propia de su oficio',
        'Páginas por servicio y por ciudad',
        'Textos SEO redactados',
      ],
    },
  },
  {
    id: 'surmesure',
    name: { fr: 'Sur mesure', es: 'A medida' },
    price: 2300,
    from: true,
    pitch: {
      fr: 'Pour les PME, le B2B et les sites en plusieurs langues.',
      es: 'Para pymes, B2B y webs en varios idiomas.',
    },
    includes: {
      fr: ['Tout Signature', 'Site B2B ou multilingue', 'Contenu dense : expertises, études de cas', 'Architecture sur devis'],
      es: ['Todo lo de Firma', 'Web B2B o multilingüe', 'Contenido amplio: servicios, casos', 'Arquitectura a presupuesto'],
    },
  },
]

export type Plan = { id: string; name: T; price: number; unit: T; body: T; note?: T; serviceKey?: string }

export const PLANS: Plan[] = [
  {
    id: 'seo',
    name: { fr: 'SEO continu', es: 'SEO continuo' },
    price: 400,
    unit: { fr: '€ HT / mois', es: '€ + IVA / mes' },
    body: {
      fr: 'Suivi des positions, nouvelles pages et contenus, fiche Google, corrections techniques, rapport mensuel lisible.',
      es: 'Seguimiento de posiciones, nuevas páginas y contenidos, ficha de Google, correcciones técnicas, informe mensual claro.',
    },
    serviceKey: 'seo',
  },
  {
    id: 'ads',
    name: { fr: 'Google Ads', es: 'Google Ads' },
    price: 400,
    unit: { fr: '€ HT / mois', es: '€ + IVA / mes' },
    body: {
      fr: 'Création et pilotage des campagnes, mots-clés, annonces, suivi des appels et des formulaires, ajustements chaque mois.',
      es: 'Creación y gestión de campañas, palabras clave, anuncios, medición de llamadas y formularios, ajustes cada mes.',
    },
    note: {
      fr: 'Le budget publicitaire est payé directement à Google, en plus.',
      es: 'El presupuesto publicitario se paga directamente a Google, aparte.',
    },
    serviceKey: 'adsGestion',
  },
  {
    id: 'hebergement',
    name: { fr: 'Hébergement & maintenance', es: 'Alojamiento y mantenimiento' },
    price: 29,
    unit: { fr: '€ HT / mois', es: '€ + IVA / mes' },
    body: {
      fr: 'Hébergement, certificat SSL, formulaire surveillé, petites modifications. Optionnel : vous pouvez héberger vous-même, on vous accompagne.',
      es: 'Alojamiento, certificado SSL, formulario vigilado, pequeños cambios. Opcional: puede alojarla usted, le acompañamos.',
    },
  },
]

export const PRICE_UNIT: T = { fr: '€ HT', es: '€ + IVA' }

export function formatPrice(n: number, locale: Locale): string {
  const cents = Number.isInteger(n) ? 0 : 2
  return new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'es-ES', { minimumFractionDigits: cents }).format(n)
}

/** Remise maximale du parrainage (5 RDV tenus = -50 % du prix du site) */
export const REFERRAL_MAX = 0.5
