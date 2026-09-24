// Réalisations — études de cas (portfolio existant) + sites livrés en ligne.
// Chiffres « héros » = résultats réels fournis par le studio. Rien d'autre n'est chiffré.

import type { T } from './site'

export type Realisation = {
  slug: string
  name: string
  domain: string
  url: string
  image: string
  width: number
  height: number
  kind: 'web' | 'app'
  /** Clé de route métier liée (maillage interne) */
  metier?: string
  place: T
  category: T
  tags: string[]
  heroMetric: T
  heroLabel: T
  problem: T
  built: T
  strategy: T
  result: T
}

export const REALISATIONS: Realisation[] = [
  {
    slug: 'mghypnose',
    name: 'MG Hypnose',
    domain: 'lp.mghypnose.fr',
    url: 'https://lp.mghypnose.fr/hypnose-lyon',
    image: '/realisations/mghypnose.jpg',
    width: 853,
    height: 1200,
    kind: 'web',
    metier: 'm-hypnotherapeute',
    place: { fr: 'Lyon', es: 'Lyon (Francia)' },
    category: { fr: 'Landing page · Hypnothérapie', es: 'Landing page · Hipnoterapia' },
    tags: ['Landing page', 'SEO', 'Google Ads'],
    heroMetric: { fr: '+20 %', es: '+20 %' },
    heroLabel: { fr: 'de conversions dès le premier mois', es: 'de conversiones desde el primer mes' },
    problem: {
      fr: 'Une praticienne reconnue à Lyon, mais aucune page pensée pour transformer une recherche « hypnothérapeute Lyon » en prise de rendez-vous.',
      es: 'Una profesional reconocida en Lyon, pero sin ninguna página pensada para convertir la búsqueda «hipnoterapeuta Lyon» en una cita.',
    },
    built: {
      fr: 'Une landing page tournée vers un seul objectif, la réservation : preuve sociale, cas de consultation, prise de rendez-vous en deux clics.',
      es: 'Una landing page con un único objetivo, la reserva: prueba social, casos de consulta y cita en dos clics.',
    },
    strategy: {
      fr: 'Couplée à une campagne Google Ads sur l’intention locale et à un SEO on-page sur les requêtes qui mènent à une réservation.',
      es: 'Combinada con una campaña de Google Ads de intención local y SEO on-page en las búsquedas que llevan a reservar.',
    },
    result: {
      fr: 'Dès le premier mois : +20 % de conversions, à budget publicitaire maîtrisé.',
      es: 'Desde el primer mes: +20 % de conversiones, con el presupuesto publicitario bajo control.',
    },
  },
  {
    slug: 'bachcostablanca',
    name: 'Bach Costa Blanca',
    domain: 'bachcostablanca.com',
    url: 'https://bachcostablanca.com',
    image: '/realisations/bachcostablanca.jpg',
    width: 1524,
    height: 2000,
    kind: 'web',
    metier: 'm-terapeutas',
    place: { fr: 'Costa Blanca, Espagne', es: 'Costa Blanca' },
    category: { fr: 'Site vitrine · Fleurs de Bach', es: 'Web corporativa · Flores de Bach' },
    tags: ['Site vitrine', 'SEO'],
    heroMetric: { fr: '1re page', es: '1.ª página' },
    heroLabel: {
      fr: 'Google sur « Fleurs de Bach · Costa Blanca »',
      es: 'de Google en «Flores de Bach · Costa Blanca»',
    },
    problem: {
      fr: 'Une praticienne francophone installée sur la Costa Blanca, sans site : introuvable pour les expatriés qui cherchaient un accompagnement dans leur langue.',
      es: 'Una terapeuta francófona instalada en la Costa Blanca, sin web: imposible de encontrar para los expatriados que buscaban acompañamiento en su idioma.',
    },
    built: {
      fr: 'Un site vitrine élégant et rassurant : bilan émotionnel, protocole de séances, réservation, dans une direction artistique bleu nuit et or.',
      es: 'Una web elegante y tranquilizadora: balance emocional, protocolo de sesiones y reserva, con una dirección de arte azul noche y oro.',
    },
    strategy: {
      fr: 'Une architecture SEO pensée pour une niche précise (langue, région, pratique), là où la concurrence est faible et l’intention forte.',
      es: 'Una arquitectura SEO pensada para un nicho preciso (idioma, región, práctica), donde la competencia es baja y la intención alta.',
    },
    result: {
      fr: 'En première page Google sur les requêtes clés de la Costa Blanca : des clients sans budget publicitaire.',
      es: 'En la primera página de Google en las búsquedas clave de la Costa Blanca: clientes sin presupuesto publicitario.',
    },
  },
  {
    slug: 'sbpaysagiste',
    name: 'SB Paysagiste',
    domain: 'sb-paysagiste.vercel.app',
    url: 'https://sb-paysagiste.vercel.app',
    image: '/realisations/sbpaysagiste.jpg',
    width: 1524,
    height: 2000,
    kind: 'web',
    metier: 'm-paysagiste',
    place: { fr: 'Tassin-la-Demi-Lune', es: 'Tassin-la-Demi-Lune (Francia)' },
    category: { fr: 'Site vitrine · Paysagiste', es: 'Web corporativa · Paisajista' },
    tags: ['Site vitrine', 'Animation 3D', 'SEO'],
    heroMetric: { fr: 'Animation 3D', es: 'Animación 3D' },
    heroLabel: {
      fr: 'le jardin se construit sous les yeux du visiteur',
      es: 'el jardín se construye ante los ojos del visitante',
    },
    problem: {
      fr: 'Un paysagiste au travail soigné, mais difficile de montrer en ligne ce qu’il transforme vraiment : un terrain brut qui devient un jardin.',
      es: 'Un paisajista con un trabajo cuidado, pero difícil de mostrar en internet lo que transforma de verdad: un terreno en bruto que se convierte en jardín.',
    },
    built: {
      fr: 'Une scène 3D sur mesure pilotée par le scroll : le terrain se prépare, se structure, se construit puis se végétalise. Autour : avant/après, réalisations, avis Google.',
      es: 'Una escena 3D a medida controlada por el scroll: el terreno se prepara, se estructura, se construye y se llena de plantas. Alrededor: antes/después, trabajos y reseñas de Google.',
    },
    strategy: {
      fr: 'Montrer le métier plutôt que le décrire, appuyé par les vrais avis clients et un SEO local autour de Tassin-la-Demi-Lune.',
      es: 'Mostrar el oficio en lugar de describirlo, con reseñas reales y SEO local en torno a Tassin-la-Demi-Lune.',
    },
    result: {
      fr: 'Une expérience qui distingue SB Paysagiste de la concurrence et oriente chaque visiteur vers la demande de devis.',
      es: 'Una experiencia que distingue a SB Paysagiste de la competencia y lleva a cada visitante a pedir presupuesto.',
    },
  },
  {
    slug: 'lbeg',
    name: 'LBEG',
    domain: 'lbeg.vercel.app',
    url: 'https://lbeg.vercel.app',
    image: '/realisations/lbeg.jpg',
    width: 853,
    height: 1200,
    kind: 'web',
    metier: 'm-electricien',
    place: { fr: 'Lyon', es: 'Lyon (Francia)' },
    category: { fr: 'Site vitrine · Électricien', es: 'Web corporativa · Electricista' },
    tags: ['Site vitrine', 'Design 3D', 'SEO'],
    heroMetric: { fr: 'Sous tension', es: 'Bajo tensión' },
    heroLabel: { fr: 'un site qu’on allume, comme une installation', es: 'una web que se enciende, como una instalación' },
    problem: {
      fr: 'Un électricien lyonnais apprécié de ses clients, sans vitrine pour se distinguer dans un secteur où tous les sites se ressemblent.',
      es: 'Un electricista de Lyon apreciado por sus clientes, sin escaparate para destacar en un sector donde todas las webs se parecen.',
    },
    built: {
      fr: 'Câble cuivre en 3D, interrupteur qui met le site sous tension, menu en tableau de disjoncteurs, et un parcours dépannage pensé pour l’urgence.',
      es: 'Cable de cobre en 3D, un interruptor que pone la web bajo tensión, menú en forma de cuadro eléctrico y un recorrido pensado para urgencias.',
    },
    strategy: {
      fr: 'Quatre métiers lisibles, avis Google réels, demande de devis avec photos et SEO local sur Lyon.',
      es: 'Cuatro servicios claros, reseñas reales de Google, presupuesto con fotos y SEO local en Lyon.',
    },
    result: {
      fr: 'Un site qui se retient et transforme les visiteurs en demandes de devis ou d’intervention.',
      es: 'Una web que se recuerda y convierte visitas en peticiones de presupuesto o de intervención.',
    },
  },
  {
    slug: 'corgier',
    name: 'Corgier Chaudronnerie',
    domain: 'corgier-chaudronnerie.vercel.app',
    url: 'https://corgier-chaudronnerie.vercel.app',
    image: '/realisations/corgier.jpg',
    width: 866,
    height: 1300,
    kind: 'web',
    metier: 'm-industrie',
    place: { fr: 'Trévoux', es: 'Trévoux (Francia)' },
    category: { fr: 'Site B2B · Chaudronnerie industrielle', es: 'Web B2B · Calderería industrial' },
    tags: ['Site B2B', 'SEO'],
    heroMetric: { fr: 'Devis en ligne', es: 'Presupuesto online' },
    heroLabel: {
      fr: 'le savoir-faire atelier, enfin visible et contactable',
      es: 'el saber hacer del taller, por fin visible y contactable',
    },
    problem: {
      fr: 'Une chaudronnerie reconnue localement mais quasi invisible en ligne, sans moyen simple pour un prospect de découvrir l’atelier et de demander un devis.',
      es: 'Una calderería reconocida en su zona pero casi invisible en internet, sin una forma sencilla de conocer el taller y pedir presupuesto.',
    },
    built: {
      fr: 'Un site industriel : expertises, études de cas, atelier et parc machines, avec un parcours clair vers la demande de projet et l’envoi de plans.',
      es: 'Una web industrial: especialidades, casos, taller y maquinaria, con un recorrido claro hacia la petición de proyecto y el envío de planos.',
    },
    strategy: {
      fr: 'Une direction artistique brute (acier, orange, grands titres) et un SEO local sur chaudronnerie, métallerie et tuyauterie autour de Lyon.',
      es: 'Una dirección de arte industrial (acero, naranja, grandes titulares) y SEO local en calderería, metalistería y tuberías en torno a Lyon.',
    },
    result: {
      fr: 'Une vitrine à la hauteur de l’atelier, qui capte les demandes de devis B2B.',
      es: 'Un escaparate a la altura del taller, que capta peticiones de presupuesto B2B.',
    },
  },
  {
    slug: 'voyance',
    name: 'Eric Brunet',
    domain: 'voyance-eric-brunet.vercel.app',
    url: 'https://voyance-eric-brunet.vercel.app',
    image: '/realisations/voyance.jpg',
    width: 1500,
    height: 1371,
    kind: 'web',
    place: { fr: 'Lyon', es: 'Lyon (Francia)' },
    category: { fr: 'Refonte · Voyance & tarologie', es: 'Rediseño · Videncia y tarot' },
    tags: ['Refonte', 'Design', 'SEO'],
    heroMetric: { fr: 'RDV en ligne', es: 'Cita online' },
    heroLabel: {
      fr: 'la curiosité transformée en prise de rendez-vous',
      es: 'la curiosidad convertida en cita',
    },
    problem: {
      fr: 'La voyance traîne une image de méfiance en ligne : difficile, pour un praticien sérieux, d’inspirer confiance dès la première seconde.',
      es: 'La videncia arrastra desconfianza en internet: difícil, para un profesional serio, inspirar confianza desde el primer segundo.',
    },
    built: {
      fr: 'Une refonte soignée : boule de cristal en WebGL, cartes de tarot interactives, tirage symbolique, pour une voyance haut de gamme et rassurante.',
      es: 'Un rediseño cuidado: bola de cristal en WebGL, cartas de tarot interactivas y tirada simbólica, para una videncia de alto nivel y tranquilizadora.',
    },
    strategy: {
      fr: 'Crédibilité immédiate, SEO local (« voyant médium Lyon ») et redirections des anciennes pages pour garder le référencement acquis.',
      es: 'Credibilidad inmediata, SEO local («vidente médium Lyon») y redirecciones de las páginas antiguas para conservar el posicionamiento.',
    },
    result: {
      fr: 'Un site qui distingue Éric de la concurrence et transforme la curiosité en rendez-vous.',
      es: 'Una web que distingue a Éric de la competencia y convierte la curiosidad en citas.',
    },
  },
  {
    slug: 'marieoracle',
    name: 'Marie Oracle',
    domain: 'marie-oracle.vercel.app',
    url: 'https://marie-oracle.vercel.app',
    image: '/realisations/marieoracle.jpg',
    width: 853,
    height: 1200,
    kind: 'web',
    place: { fr: 'Lyon', es: 'Lyon (Francia)' },
    category: { fr: 'Refonte · Tarot & voyance', es: 'Rediseño · Tarot y videncia' },
    tags: ['Refonte', 'Design', 'SEO'],
    heroMetric: { fr: 'Refonte', es: 'Rediseño' },
    heroLabel: {
      fr: 'd’une page générique à un site qui donne envie de la rencontrer',
      es: 'de una página genérica a una web que invita a conocerla',
    },
    problem: {
      fr: 'Un ancien site générique qui ne disait rien de Marie : impossible de sentir, avant de réserver, qui allait vous recevoir.',
      es: 'Una web antigua y genérica que no decía nada de Marie: imposible saber, antes de reservar, quién iba a recibirle.',
    },
    built: {
      fr: 'Une refonte chaleureuse et éditoriale : Marie au centre, situations d’accompagnement, cartes qui se retournent, déroulé de séance, FAQ, rendez-vous.',
      es: 'Un rediseño cálido y editorial: Marie en el centro, situaciones de acompañamiento, cartas que se giran, desarrollo de la sesión, FAQ y citas.',
    },
    strategy: {
      fr: 'Rassurer avant de vendre : la personne d’abord, l’offre ensuite, et un SEO local sur le tarot à Lyon et à distance.',
      es: 'Tranquilizar antes de vender: primero la persona, después la oferta, y SEO local sobre tarot en Lyon y a distancia.',
    },
    result: {
      fr: 'Un site qui incarne Marie et accompagne le visiteur jusqu’à la prise de rendez-vous.',
      es: 'Una web que encarna a Marie y acompaña al visitante hasta la cita.',
    },
  },
  {
    slug: 'verifam',
    name: 'Verifam',
    domain: 'verifam.app',
    url: 'https://verifam.app',
    image: '/realisations/verifam.jpg',
    width: 853,
    height: 1200,
    kind: 'app',
    place: { fr: 'App Store', es: 'App Store' },
    category: { fr: 'App iOS + site de lancement', es: 'App iOS + web de lanzamiento' },
    tags: ['App iOS', 'IA', 'Site'],
    heroMetric: { fr: 'En 3 s', es: 'En 3 s' },
    heroLabel: { fr: 'l’app dit si un message est une arnaque', es: 'la app dice si un mensaje es una estafa' },
    problem: {
      fr: 'Les seniors sont la cible n°1 des arnaques par SMS et e-mail, sans outil simple pour vérifier un message douteux.',
      es: 'Las personas mayores son el blanco n.º 1 de las estafas por SMS y correo, sin una herramienta sencilla para comprobar un mensaje dudoso.',
    },
    built: {
      fr: 'L’application iOS de A à Z : on photographie le message, l’IA l’analyse et répond en français simple. Puis son site de lancement.',
      es: 'La aplicación iOS de principio a fin: se fotografía el mensaje, la IA lo analiza y responde en lenguaje sencillo. Y su web de lanzamiento.',
    },
    strategy: {
      fr: 'Un ton sans jargon, une direction artistique rassurante, un site qui prouve la valeur par l’exemple et pousse vers l’App Store.',
      es: 'Un tono sin tecnicismos, una dirección de arte tranquilizadora y una web que demuestra el valor con ejemplos y lleva a la App Store.',
    },
    result: {
      fr: 'Une app publiée sur l’App Store, avec son site.',
      es: 'Una app publicada en la App Store, con su web.',
    },
  },
  {
    slug: 'backtrack',
    name: 'Backtrack',
    domain: 'backtrack-web-tau.vercel.app',
    url: 'https://backtrack-web-tau.vercel.app/',
    image: '/realisations/backtrack.jpg',
    width: 853,
    height: 1200,
    kind: 'app',
    place: { fr: 'Australie', es: 'Australia' },
    category: { fr: 'App iOS + site de lancement', es: 'App iOS + web de lanzamiento' },
    tags: ['App iOS', 'Design produit', 'Site'],
    heroMetric: { fr: '0 → 1', es: '0 → 1' },
    heroLabel: { fr: 'de l’idée à l’app, conçue et développée de A à Z', es: 'de la idea a la app, diseñada y desarrollada de principio a fin' },
    problem: {
      fr: 'Les backpackers en Australie jonglent avec des tableurs pour compter leurs 88 jours, suivre leur paie et récupérer leur retraite avant de repartir.',
      es: 'Los mochileros en Australia hacen malabares con hojas de cálculo para contar sus 88 días, seguir su sueldo y recuperar su jubilación antes de irse.',
    },
    built: {
      fr: 'Compteur de jours de visa, tableau de bord financier, carte des employeurs éligibles, lecture des fiches de paie par IA, et le site de lancement.',
      es: 'Contador de días de visado, panel financiero, mapa de empleadores válidos, lectura de nóminas con IA y la web de lanzamiento.',
    },
    strategy: {
      fr: 'Un message immédiat et une preuve par l’écran : le site convertit le visiteur curieux en téléchargement.',
      es: 'Un mensaje inmediato y la prueba en pantalla: la web convierte al curioso en descarga.',
    },
    result: {
      fr: 'Une app iOS aboutie et son site de lancement.',
      es: 'Una app iOS completa y su web de lanzamiento.',
    },
  },
]

/** Autres sites livrés et en ligne (sans étude de cas) */
export const LIVE_SITES: { name: string; url: string; metier?: string; activity: T; place: string }[] = [
  { name: 'Maintenance Caladoise', url: 'https://maintenance-caladoise.vercel.app', metier: 'm-chauffagiste', activity: { fr: 'Chauffagiste', es: 'Calefacción' }, place: 'Limas' },
  { name: 'BP Maintenance', url: 'https://bp-maintenance.vercel.app', metier: 'm-chauffagiste', activity: { fr: 'Chauffage & climatisation', es: 'Calefacción y climatización' }, place: 'Pommiers' },
  { name: 'Du Vert au Balcon', url: 'https://du-vert-au-balcon.vercel.app', metier: 'm-paysagiste', activity: { fr: 'Aménagement de balcons', es: 'Diseño de balcones' }, place: 'Lyon' },
  { name: 'NapoliForno', url: 'https://napoliforno-costablanca.vercel.app', metier: 'm-restaurant', activity: { fr: 'Pizzaiolo à domicile · FR/ES/EN', es: 'Pizzero a domicilio · FR/ES/EN' }, place: 'Costa Blanca' },
  { name: 'Anne-Charlotte Girard', url: 'https://anne-charlotte-girard.vercel.app', metier: 'm-naturopathe', activity: { fr: 'Naturopathe', es: 'Naturópata' }, place: 'Andrézieux-Bouthéon' },
  { name: 'Claire Larnicol', url: 'https://claire-larnicol.vercel.app', metier: 'm-hypnotherapeute', activity: { fr: 'Hypnothérapeute', es: 'Hipnoterapeuta' }, place: 'Saint-Paul-lès-Dax' },
]

export function getRealisation(slug: string): Realisation | undefined {
  return REALISATIONS.find((r) => r.slug === slug)
}
