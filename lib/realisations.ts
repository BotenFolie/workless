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
    slug: 'maintenancecaladoise',
    name: 'Maintenance Caladoise',
    domain: 'maintenance-caladoise.vercel.app',
    url: 'https://maintenance-caladoise.vercel.app',
    image: '/realisations/maintenancecaladoise.jpg',
    width: 1524,
    height: 2000,
    kind: 'web',
    metier: 'm-chauffagiste',
    place: { fr: 'Limas', es: 'Limas (Francia)' },
    category: { fr: 'Refonte · Chauffagiste', es: 'Rediseño · Calefacción' },
    tags: ['Refonte', 'Animation 3D', 'SEO local', 'Migration SEO'],
    heroMetric: { fr: 'Diagnostic', es: 'Diagnóstico' },
    heroLabel: {
      fr: 'la recherche de panne montrée étape par étape',
      es: 'la búsqueda de la avería, paso a paso',
    },
    problem: {
      fr: 'Un chauffagiste indépendant du Beaujolais, très bien noté sur Google, avec un site sur plateforme dont les adresses de pages ne correspondaient plus à leur contenu.',
      es: 'Un técnico de calefacción independiente del Beaujolais, muy bien valorado en Google, con una web de plataforma cuyas direcciones ya no correspondían a su contenido.',
    },
    built: {
      fr: 'Une séquence 3D (version SVG allégée sur mobile) qui montre son approche : fonctionnement, anomalie, contrôles, cause trouvée, remise en service. Autour : 22 pages, un formulaire de diagnostic en 10 étapes avec envoi de photos, le téléphone toujours visible.',
      es: 'Una secuencia 3D (versión SVG ligera en móvil) que muestra su método: funcionamiento, anomalía, controles, causa encontrada, puesta en marcha. Alrededor: 22 páginas, un formulario de diagnóstico en 10 pasos con envío de fotos y el teléfono siempre visible.',
    },
    strategy: {
      fr: 'Audit complet de l’ancien site, puis redirections 301 vers la page de même intention (dépannage, entretien, équipements) et SEO local autour de Limas et Villefranche-sur-Saône. Les avis Google réels mis en avant.',
      es: 'Auditoría completa de la web anterior, redirecciones 301 hacia la página con la misma intención (averías, mantenimiento, equipos) y SEO local en torno a Limas y Villefranche-sur-Saône. Reseñas reales de Google en primer plano.',
    },
    result: {
      fr: 'Un site qui explique le métier en quelques secondes et oriente chaque visiteur vers l’appel ou la demande de diagnostic.',
      es: 'Una web que explica el oficio en segundos y lleva a cada visitante a la llamada o a la petición de diagnóstico.',
    },
  },
  {
    slug: 'duvertaubalcon',
    name: 'Du Vert au Balcon',
    domain: 'du-vert-au-balcon.vercel.app',
    url: 'https://du-vert-au-balcon.vercel.app',
    image: '/realisations/duvertaubalcon.jpg',
    width: 1524,
    height: 2000,
    kind: 'web',
    metier: 'm-paysagiste',
    place: { fr: 'Lyon', es: 'Lyon (Francia)' },
    category: { fr: 'Landing page · Aménagement de balcons', es: 'Landing page · Diseño de balcones' },
    tags: ['Landing page', 'Animation 3D', 'SEO local'],
    heroMetric: { fr: 'Animation 3D', es: 'Animación 3D' },
    heroLabel: {
      fr: 'un balcon vide qui devient un jardin, sous les yeux du visiteur',
      es: 'un balcón vacío que se convierte en jardín ante el visitante',
    },
    problem: {
      fr: 'Une activité d’aménagement de balcons, terrasses et cours intérieures à Lyon, difficile à expliquer en photos : le client doit se projeter dans un espace qui n’existe pas encore.',
      es: 'Una actividad de diseño de balcones, terrazas y patios en Lyon, difícil de explicar con fotos: el cliente tiene que imaginar un espacio que todavía no existe.',
    },
    built: {
      fr: 'Une scène 3D unique : le balcon vide, le plan tracé au sol, les contenants, les plantes qui poussent, le mobilier, puis le balcon vivant. Un bouton « Animer le balcon », les avis Google réels et un formulaire de projet en plusieurs étapes.',
      es: 'Una única escena 3D: el balcón vacío, el plano trazado en el suelo, las jardineras, las plantas que crecen, el mobiliario y el balcón terminado. Un botón «Animar el balcón», reseñas reales de Google y un formulario de proyecto por pasos.',
    },
    strategy: {
      fr: 'Montrer la transformation plutôt que la décrire, avec le téléphone en tête de page et un SEO local sur l’aménagement de balcons et terrasses à Lyon.',
      es: 'Mostrar la transformación en lugar de describirla, con el teléfono en la cabecera y SEO local en diseño de balcones y terrazas en Lyon.',
    },
    result: {
      fr: 'Une page qui fait comprendre le service en quelques secondes et conduit vers l’appel ou la demande de projet.',
      es: 'Una página que hace entender el servicio en segundos y lleva a la llamada o a la petición de proyecto.',
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
]

/** Autres sites livrés et en ligne (sans étude de cas) */
export const LIVE_SITES: { name: string; url: string; metier?: string; activity: T; place: string }[] = [
  { name: 'BP Maintenance', url: 'https://bp-maintenance.vercel.app', metier: 'm-chauffagiste', activity: { fr: 'Chauffage & climatisation', es: 'Calefacción y climatización' }, place: 'Pommiers' },
  { name: 'NapoliForno', url: 'https://napoliforno-costablanca.vercel.app', metier: 'm-restaurant', activity: { fr: 'Pizzaiolo à domicile · FR/ES/EN', es: 'Pizzero a domicilio · FR/ES/EN' }, place: 'Costa Blanca' },
  { name: 'Anne-Charlotte Girard', url: 'https://anne-charlotte-girard.vercel.app', metier: 'm-naturopathe', activity: { fr: 'Naturopathe', es: 'Naturópata' }, place: 'Andrézieux-Bouthéon' },
  { name: 'Claire Larnicol', url: 'https://claire-larnicol.vercel.app', metier: 'm-hypnotherapeute', activity: { fr: 'Hypnothérapeute', es: 'Hipnoterapeuta' }, place: 'Saint-Paul-lès-Dax' },
]

export function getRealisation(slug: string): Realisation | undefined {
  return REALISATIONS.find((r) => r.slug === slug)
}
