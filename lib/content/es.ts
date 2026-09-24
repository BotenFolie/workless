// Contenido editorial ES — mismo rigor: nada inventado

import type { Content } from './types'

const es: Content = {
  services: {
    creation: {
      metaTitle: 'Diseño web para pymes y autónomos desde 1199 € | Stripwork',
      metaDesc:
        'Diseño de páginas web a medida para autónomos, comercios y pymes: diseño propio de su sector, SEO desde el primer día, pensada para recibir llamadas. Desde 1199 € + IVA.',
      label: 'Diseño web',
      h1: 'Diseño de páginas web',
      lead:
        'Una web diseñada para su oficio, rápida, posicionada desde el lanzamiento y construida para que suene el teléfono. Desde 1199 € + IVA.',
      points: [
        { t: 'Diseñada para usted', d: 'Sin plantillas. Sybille, nuestra directora de arte, parte de su oficio, su logotipo y sus clientes.' },
        { t: 'Posicionada desde el inicio', d: 'Estructura, etiquetas, datos estructurados y velocidad: el SEO forma parte de la construcción, no se añade después.' },
        { t: 'Rápida, sin plugins', d: 'Webs programadas en Next.js: sin WordPress que actualizar ni extensiones que fallen, y rápidas en el móvil.' },
        { t: 'Hecha para el contacto', d: 'Teléfono, formulario y ficha de Google accesibles en cada pantalla. Nadie tiene que buscar cómo llamarle.' },
        { t: 'Medida', d: 'Llamadas y formularios quedan registrados: sabe lo que le aporta la web.' },
        { t: 'Un único interlocutor', d: 'El mismo equipo de tres diseña la web, la posiciona y gestiona sus campañas. Nada se pierde entre proveedores.' },
      ],
      sections: [
        {
          h: 'Cómo es un proyecto',
          p: [
            'Todo empieza con una auditoría gratuita de su presencia online: web actual, ficha de Google, competencia. Lo comentamos por teléfono y le enviamos un presupuesto claro.',
            'Al encargar, abona el 50 % de anticipo. Diseñamos la web, usted la valida, la publicamos y abona el resto. Si nos recomienda a otras empresas, cada reunión realizada descuenta un 10 % del precio de la web, deducido de ese resto.',
          ],
        },
      ],
      pricing: { kind: 'offers' },
      proof: ['bachcostablanca', 'sbpaysagiste', 'lbeg'],
      faq: [
        { q: '¿Cuánto se tarda en hacer mi web?', a: 'Depende del número de páginas y de cuándo estén listos sus contenidos (fotos, información). El plazo queda fijado por escrito en el presupuesto.' },
        { q: '¿Podré modificar la web yo mismo?', a: 'Nuestras webs no tienen un panel tipo WordPress: por eso son rápidas y seguras. Los cambios están incluidos en el plan de alojamiento y mantenimiento, o se hacen bajo demanda.' },
        { q: '¿El dominio está incluido?', a: 'El dominio se compra a su nombre y a su cargo: es suyo. Nosotros lo configuramos.' },
        { q: '¿Y si no tengo fotos?', a: 'Sus fotos reales (equipo, trabajos, local) convencen más que las de banco. Le decimos cuáles hacer y, mientras tanto, reservamos su espacio.' },
      ],
    },
    vitrine: {
      metaTitle: 'Página web corporativa a medida desde 1199 € | Stripwork',
      metaDesc:
        'Web corporativa a medida para autónomos, terapeutas, comercios y pymes: hasta 10 páginas, SEO local, ficha de Google optimizada y formulario. Esencial 1199 €, Firma 1590 € + IVA.',
      label: 'Web corporativa',
      h1: 'Página web corporativa',
      lead:
        'La web corporativa presenta su empresa, sus servicios y su zona, y convierte visitas en peticiones. Esencial por 1199 € + IVA, Firma por 1590 € + IVA.',
      points: [
        { t: 'Las páginas justas', d: 'Inicio, servicios, trabajos, quiénes somos, contacto: cada página responde a una pregunta de su cliente.' },
        { t: 'SEO local', d: 'Su oficio y su ciudad en los títulos, una página por servicio y datos estructurados para que Google le ubique.' },
        { t: 'Ficha de Google optimizada', d: 'Categorías, zona, horarios, fotos: la ficha del mapa se trabaja a la vez que la web.' },
        { t: 'Sus reseñas a la vista', d: 'Sus reseñas de Google, citadas palabra por palabra, donde el visitante duda.' },
        { t: 'Pensada para el móvil', d: 'La mayoría de sus visitas llegan desde el móvil: la web se diseña primero para ellas.' },
        { t: 'Formularios que llegan', d: 'Las peticiones llegan directamente a su correo, protegidas contra el spam.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['bachcostablanca', 'lbeg', 'sbpaysagiste'],
      faq: [
        { q: '¿Qué diferencia hay entre Esencial y Firma?', a: 'Esencial cubre hasta 5 páginas con todo el SEO técnico. Firma llega a 10 páginas y añade una animación propia de su oficio, páginas por servicio y por ciudad, y textos SEO redactados por nosotros.' },
        { q: '¿Web corporativa o landing page?', a: 'La web corporativa presenta toda su actividad y se posiciona a largo plazo. La landing page sirve a un único objetivo, a menudo una campaña de Google Ads.' },
        { q: '¿Redactan ustedes los textos?', a: 'En el plan Firma, sí. En el plan Esencial, partimos de sus textos y los estructuramos para el posicionamiento.' },
      ],
    },
    landing: {
      metaTitle: 'Diseño de landing page para Google Ads | Stripwork',
      metaDesc:
        'Landing page a medida para sus campañas de Google Ads: un objetivo, un mensaje, un formulario corto y medición de conversiones. Incluida en el plan Esencial (1199 € + IVA).',
      label: 'Landing page',
      h1: 'Diseño de landing page',
      lead:
        'Una página, un objetivo: la llamada, la reserva o la petición de presupuesto. Ideal para una campaña de Google Ads o el lanzamiento de una oferta.',
      points: [
        { t: 'Un solo mensaje', d: 'Sin menús que distraigan: la página responde a la búsqueda y lleva a actuar.' },
        { t: 'La prueba en su sitio', d: 'Reseñas, trabajos, garantías reales: justo antes de la decisión.' },
        { t: 'Formulario corto', d: 'Los campos mínimos para una petición útil. Cada campo de más cuesta contactos.' },
        { t: 'Rápida', d: 'Una página lenta encarece Google Ads: Google tiene en cuenta la experiencia en la página de destino.' },
        { t: 'Conversiones medidas', d: 'Llamadas y formularios se envían a Google Ads para pujar según resultados reales.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['mghypnose'],
      faq: [
        { q: '¿Sirve una landing page sin Google Ads?', a: 'Sí, para una oferta concreta, un lanzamiento o un enlace para sus contactos. Pero con una campaña rinde más.' },
        { q: '¿Cuánto cuesta una landing page?', a: 'Entra en el plan Esencial por 1199 € + IVA. La gestión de las campañas es un plan mensual aparte.' },
      ],
    },
    refonte: {
      metaTitle: 'Rediseño web sin perder posicionamiento | Stripwork',
      metaDesc:
        'Rediseño completo de su web: nuevo diseño a medida, contenido recuperado y redirecciones 301 de todas las páginas antiguas para conservar su posicionamiento. Desde 1199 € + IVA.',
      label: 'Rediseño web',
      h1: 'Rediseño web',
      lead:
        '¿Tiene web pero no le aporta nada? La rehacemos por completo sin perder el posicionamiento: cada página antigua se redirige a la nueva.',
      points: [
        { t: 'Auditoría de lo existente', d: 'Todas las páginas, textos y posiciones en Google, y lo que ya funciona. No tiramos nada útil.' },
        { t: 'Redirecciones 301', d: 'Cada dirección antigua apunta a su nueva página: Google y sus enlaces la siguen.' },
        { t: 'Nuevo diseño a medida', d: 'Una identidad que por fin se parece a su empresa, no a una plantilla comprada.' },
        { t: 'Más rápida', d: 'Una web moderna y ligera, rápida en el móvil.' },
        { t: 'Medición antes / después', d: 'Contactos medidos desde el lanzamiento, para comparar.' },
      ],
      sections: [
        {
          h: 'WordPress, Wix o una web anticuada',
          p: [
            'Sea cual sea la herramienta de su web actual, recuperamos el contenido útil y la sustituimos por una web más rápida, sin plugins que mantener. Conserva su dominio y su correo.',
          ],
        },
      ],
      pricing: { kind: 'offers' },
      proof: ['voyance', 'marieoracle'],
      faq: [
        { q: '¿Perderé mi posicionamiento?', a: 'Es el riesgo de un rediseño mal hecho. Inventariamos todas sus páginas antiguas y las redirigimos una a una; está incluido en cada rediseño.' },
        { q: '¿Conservo mi dominio?', a: 'Sí. Solo cambia la web; su dominio y sus correos siguen igual.' },
        { q: '¿Cuánto cuesta un rediseño?', a: 'Lo mismo que una web nueva: Esencial 1199 €, Firma 1590 €, A medida desde 2300 € (+ IVA). La migración SEO está incluida.' },
      ],
    },
    migration: {
      metaTitle: 'Migración SEO: rediseño web sin perder tráfico | Stripwork',
      metaDesc:
        'Migración SEO en un rediseño: inventario de URLs, plan de redirecciones 301, contenidos que ya posicionan y vigilancia tras el lanzamiento.',
      label: 'Migración SEO',
      h1: 'Migración SEO: rediseñar la web sin perder tráfico',
      lead:
        'Un rediseño cambia las direcciones de las páginas. Sin plan de redirecciones, Google pierde lo que posicionaba y sus enlaces llevan a errores. La migración SEO lo evita.',
      points: [
        { t: 'Inventario completo', d: 'Todas las direcciones de la web antigua, incluidas las que no están en el menú.' },
        { t: 'Correspondencias', d: 'Cada página antigua asociada a la nueva página más cercana.' },
        { t: 'Redirecciones 301', d: 'Configuradas en el servidor y probadas una a una antes del cambio.' },
        { t: 'Contenidos que funcionan', d: 'Títulos y textos que ya posicionan se conservan o mejoran, nunca se borran al azar.' },
        { t: 'Después del cambio', d: 'Sitemap enviado a Google y vigilancia de errores e indexación.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['voyance'],
      faq: [
        { q: '¿La migración se cobra aparte?', a: 'No, forma parte de cada rediseño.' },
        { q: '¿Se moverá mi tráfico?', a: 'Es normal que haya variaciones las primeras semanas. Un buen plan de redirecciones limita las pérdidas; nadie honesto puede prometer cero variaciones.' },
      ],
    },
    seo: {
      metaTitle: 'Posicionamiento SEO para pymes y autónomos | Stripwork',
      metaDesc:
        'Posicionamiento web para pymes y autónomos: SEO técnico, páginas por servicio y ciudad, ficha de Google y posicionamiento en IA. Incluido en cada web y como plan mensual.',
      label: 'Posicionamiento SEO',
      h1: 'Posicionamiento SEO',
      lead:
        'Que le encuentren en Google los clientes que buscan exactamente lo que usted hace, donde lo hace. Técnica, contenidos, ficha de Google: nos encargamos.',
      points: [
        { t: 'SEO técnico', d: 'Indexación, velocidad, móvil, etiquetas, datos estructurados: la base sin la que nada posiciona.' },
        { t: 'Páginas que responden', d: 'Una página por servicio y por zona, escrita a partir de lo que sus clientes buscan de verdad.' },
        { t: 'SEO local', d: 'Ficha de Google completa, reseñas y datos de contacto coherentes en toda la red.' },
        { t: 'Posicionamiento en IA', d: 'Una web clara y estructurada, que ChatGPT, Perplexity y las respuestas IA de Google entienden y pueden citar.' },
        { t: 'Seguimiento mensual', d: 'Posiciones, visitas y contactos: un informe claro cada mes, con las correcciones necesarias.' },
      ],
      sections: [
        {
          h: 'Incluido en la web, y después de forma continua',
          p: [
            'El SEO técnico va incluido en cada web que entregamos. Para ir más allá (páginas nuevas, contenidos, seguimiento de posiciones), el SEO continuo es un plan mensual independiente del precio de la web.',
          ],
        },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: ['bachcostablanca', 'lbeg'],
      faq: [
        { q: '¿Cuándo se ven resultados?', a: 'Según la competencia de su sector y su ciudad, de unas semanas a varios meses. Nadie puede garantizar una posición en Google: desconfíe de quien lo prometa.' },
        { q: '¿SEO o Google Ads?', a: 'Google Ads trae contactos enseguida, mientras paga. El SEO tarda más, pero después funciona sin presupuesto publicitario. Muchos clientes empiezan con ambos.' },
        { q: '¿Hacen SEO en una web que no han creado ustedes?', a: 'Sí. Empezamos con una auditoría; si la web frena el posicionamiento, se lo decimos con franqueza.' },
      ],
    },
    auditSeo: {
      metaTitle: 'Auditoría SEO gratuita de su web | Stripwork',
      metaDesc:
        'Auditoría SEO de su web: técnica, contenidos, SEO local y competencia, con un plan de acción priorizado. La primera auditoría es gratuita y sin compromiso.',
      label: 'Auditoría SEO',
      h1: 'Auditoría SEO',
      lead:
        'Un diagnóstico claro de su web: qué bloquea, qué falta y qué corregir primero. La primera auditoría es gratuita y sin compromiso.',
      points: [
        { t: 'Técnica', d: 'Páginas indexadas o no, velocidad, móvil, errores, etiquetas.' },
        { t: 'Contenidos', d: 'Qué páginas existen, para qué búsquedas, y qué falta frente a la competencia.' },
        { t: 'Local', d: 'Su ficha de Google: categorías, reseñas, fotos, coherencia de datos.' },
        { t: 'Competencia', d: 'Quién aparece delante de usted, y por qué.' },
        { t: 'Plan de acción', d: 'Correcciones ordenadas por impacto: sabe por dónde empezar, con o sin nosotros.' },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: ['bachcostablanca'],
      faq: [
        { q: '¿La auditoría es realmente gratuita?', a: 'Sí, y sin compromiso. Le presentamos los resultados por teléfono; usted decide qué hacer con ellos.' },
        { q: '¿Qué tengo que enviar?', a: 'La dirección de su web y, si la tiene, el nombre de su ficha de Google. Nada más para empezar.' },
      ],
    },
    seoLocal: {
      metaTitle: 'SEO local: aparecer en Google Maps en su ciudad | Stripwork',
      metaDesc:
        'SEO local para autónomos y comercios: ficha de Google Business Profile, reseñas, páginas por ciudad y datos estructurados. Que le encuentren los clientes de su zona.',
      label: 'SEO local',
      h1: 'SEO local',
      lead:
        'Aparecer en el mapa de Google y en los resultados «cerca de mí» de su ciudad: ahí se deciden la mayoría de las llamadas de un profesional o un comercio.',
      points: [
        { t: 'Ficha de Google completa', d: 'Categorías correctas, servicios, zona, horarios, fotos, publicaciones.' },
        { t: 'Reseñas', d: 'Un método sencillo para pedir reseñas a sus clientes satisfechos, y responderlas.' },
        { t: 'Páginas por ciudad', d: 'Una página útil por cada zona que cubre de verdad, no copias que solo cambian el nombre.' },
        { t: 'Datos coherentes', d: 'Mismo nombre, dirección y teléfono en todas partes: web, ficha, directorios.' },
        { t: 'Datos estructurados', d: 'Tipo de empresa, zona y servicios descritos para Google en el código.' },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: ['bachcostablanca', 'lbeg'],
      faq: [
        { q: 'No tengo local, ¿puedo aparecer en el mapa?', a: 'Sí: una empresa que se desplaza a casa del cliente puede declarar una zona de servicio en lugar de una dirección visible.' },
        { q: '¿Hacen falta muchas reseñas?', a: 'Cuentan más las reseñas regulares y auténticas que un gran volumen antiguo. Nunca fabricamos reseñas.' },
      ],
    },
    seoIa: {
      metaTitle: 'Posicionamiento en IA: aparecer en ChatGPT y Google IA | Stripwork',
      metaDesc:
        'Posicionamiento en IA (ChatGPT, Perplexity, respuestas IA de Google): contenidos que responden, datos estructurados e información clara sobre su empresa.',
      label: 'Posicionamiento en IA',
      h1: 'Posicionamiento en IA: aparecer en ChatGPT, Perplexity y Google',
      lead:
        'Sus clientes también preguntan a asistentes de IA. Estructuramos su web para que la entiendan y tenga opciones de ser citada en sus respuestas.',
      points: [
        { t: 'Respuestas directas', d: 'Páginas que responden con claridad a las preguntas reales de sus clientes.' },
        { t: 'Identidad clara', d: 'Quién es, qué hace y dónde: dicho de forma sencilla y coherente en todas partes.' },
        { t: 'Datos estructurados', d: 'Empresa, servicios y FAQ descritos en el código, legibles por buscadores e IA.' },
        { t: 'Presencia en otras webs', d: 'Ficha de Google, directorios, menciones: las IA cruzan fuentes antes de citar.' },
      ],
      sections: [
        {
          h: 'Lo que no prometemos',
          p: ['Nadie controla lo que responde una IA. Se trata de poner todas las opciones de su lado, con las mismas bases que un buen SEO.'],
        },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: [],
      faq: [
        { q: '¿Es distinto del SEO clásico?', a: 'Las bases son las mismas. Cambia el peso de las respuestas directas, la coherencia de la información y las fuentes que hablan de usted.' },
      ],
    },
    ads: {
      metaTitle: 'Gestión de Google Ads para pymes | Stripwork',
      metaDesc:
        'Campañas de Google Ads creadas y gestionadas por el estudio que hizo su web: palabras clave locales, anuncios, landing page y medición de llamadas. 400 € + IVA al mes, sin incluir inversión.',
      label: 'Google Ads',
      h1: 'Gestión de Google Ads',
      lead:
        'Llamadas y peticiones desde los primeros días, mientras sube el posicionamiento orgánico. Campañas creadas y gestionadas por el estudio que construyó su web.',
      points: [
        { t: 'Campañas locales', d: 'Sus servicios, su zona, sus horarios: se paga por las búsquedas que pueden ser clientes.' },
        { t: 'Palabras clave y exclusiones', d: 'Las búsquedas que convierten, y la lista de las que excluimos para no malgastar.' },
        { t: 'Anuncios', d: 'Escritos a partir de lo que de verdad le distingue, probados en varias versiones.' },
        { t: 'La página correcta', d: 'Cada anuncio lleva a la página que responde, a menudo una landing page dedicada.' },
        { t: 'Conversiones medidas', d: 'Llamadas y formularios contabilizados: gestionamos por contactos, no por clics.' },
        { t: 'Ajustes cada mes', d: 'Pujas, palabras clave y anuncios revisados cada mes, con un informe claro.' },
      ],
      pricing: { kind: 'plan', id: 'ads' },
      proof: ['mghypnose'],
      faq: [
        { q: '¿Qué presupuesto publicitario necesito?', a: 'Depende de su sector, su zona y la competencia. Tras la auditoría le proponemos un presupuesto inicial; se paga directamente a Google.' },
        { q: '¿La cuenta de Google Ads es mía?', a: 'La cuenta está a su nombre: conserva el historial y los datos.' },
        { q: '¿Gestionan campañas ya existentes?', a: 'Sí. Empezamos auditando la cuenta para ver adónde va el presupuesto.' },
      ],
    },
    adsGestion: {
      metaTitle: 'Gestión de campañas de Google Ads | 400 €/mes | Stripwork',
      metaDesc:
        'Creación y gestión de sus campañas de Google Ads: estructura, palabras clave, anuncios, medición de llamadas y formularios, optimización mensual. 400 € + IVA al mes.',
      label: 'Gestión de campañas',
      h1: 'Gestión de campañas de Google Ads',
      lead:
        'Construimos sus campañas, las seguimos y las ajustamos cada mes. Usted recibe contactos y un informe claro de lo que han costado.',
      points: [
        { t: 'Puesta en marcha', d: 'Estructura, zonas, horarios, palabras clave, exclusiones, anuncios y extensiones.' },
        { t: 'Medición de contactos', d: 'Llamadas desde el anuncio y desde la web, formularios: todo medido.' },
        { t: 'Optimización', d: 'Términos de búsqueda revisados, pujas ajustadas, anuncios probados.' },
        { t: 'Informe mensual', d: 'Lo gastado, lo obtenido y lo que cambiamos el mes siguiente.' },
      ],
      pricing: { kind: 'plan', id: 'ads' },
      proof: ['mghypnose'],
      faq: [
        { q: '¿La inversión publicitaria está incluida en los 400 €?', a: 'No. Los 400 € + IVA cubren nuestro trabajo; la inversión publicitaria se paga directamente a Google, en la cantidad que usted elija.' },
      ],
    },
    adsAudit: {
      metaTitle: 'Auditoría de Google Ads gratuita | Stripwork',
      metaDesc:
        'Auditoría de su cuenta de Google Ads: palabras clave, términos de búsqueda, medición de conversiones y páginas de destino. Descubra adónde va su presupuesto. Gratis.',
      label: 'Auditoría de Google Ads',
      h1: 'Auditoría de Google Ads',
      lead:
        '¿Ya tiene campañas? Revisamos adónde va su presupuesto: palabras clave, búsquedas reales, medición de conversiones y páginas de destino. Gratis, dentro de la auditoría.',
      points: [
        { t: 'Búsquedas reales', d: 'Las búsquedas que activaron sus anuncios, y las que no servían para nada.' },
        { t: 'Medición de conversiones', d: '¿Se cuentan bien sus llamadas y formularios? A menudo, no.' },
        { t: 'Estructura', d: 'Campañas, grupos, zonas y horarios: lo que dispersa el presupuesto.' },
        { t: 'Páginas de destino', d: '¿Convence la página a la que paga por enviar visitas?' },
      ],
      pricing: { kind: 'plan', id: 'ads' },
      proof: ['mghypnose'],
      faq: [
        { q: '¿Tengo que darles acceso a mi cuenta?', a: 'Basta con un acceso de lectura, que puede retirar en cualquier momento.' },
      ],
    },
  },

  metiers: {
    chauffagiste: {
      metaTitle: 'Diseño web para empresas de calefacción y climatización | Stripwork',
      metaDesc:
        'Web para instaladores de calefacción, climatización y fontanería: urgencias visibles, mantenimiento, zona de servicio, llamada en un toque y SEO local. Desde 1199 € + IVA.',
      label: 'Calefacción y climatización',
      rubrique: 'Calefacción y climatización',
      h1: 'Diseño web para empresas de calefacción y climatización',
      lead:
        'Cuando se estropea la caldera o el aire acondicionado, el cliente llama al primer profesional que le inspira confianza en el móvil. Su web tiene que ser esa.',
      searches: ['reparación caldera [ciudad]', 'instalación aire acondicionado', 'mantenimiento caldera gas', 'técnico climatización cerca de mí'],
      features: [
        { t: 'Llamada en un toque', d: 'Barra de llamada fija en el móvil: con una avería nadie rellena formularios.' },
        { t: 'Urgencias y mantenimiento', d: 'La avería por un lado, el contrato de mantenimiento por otro: dos necesidades, dos recorridos.' },
        { t: 'Zona de servicio clara', d: 'Los municipios que cubre, legibles para el cliente y para Google.' },
        { t: 'Marcas y equipos', d: 'Las calderas, bombas de calor y equipos de aire que instala o mantiene.' },
        { t: 'Petición con foto', d: 'El cliente adjunta una foto de la placa del equipo: llega con la pieza correcta.' },
      ],
      proof: [],
      live: ['Maintenance Caladoise', 'BP Maintenance'],
      faq: [
        { q: '¿Hace falta una página por municipio?', a: 'Solo en los municipios donde trabaja de verdad y hay algo útil que decir. Diez páginas iguales con otro nombre de ciudad perjudican más que ayudan.' },
      ],
    },
    electricien: {
      metaTitle: 'Diseño web para electricistas | Stripwork',
      metaDesc:
        'Web para electricistas: urgencias, boletines, reformas, presupuesto con fotos, SEO local y reseñas de Google. A medida desde 1199 € + IVA.',
      label: 'Electricistas',
      rubrique: 'Electricistas',
      h1: 'Diseño web para electricistas',
      lead:
        'Averías, boletines, reformas: sus clientes buscan un electricista de confianza cerca. La web tiene que demostrarlo en segundos.',
      searches: ['electricista urgente [ciudad]', 'boletín eléctrico', 'instalación punto de recarga', 'electricista cerca de mí'],
      features: [
        { t: 'Recorrido de urgencia', d: 'Corte de luz, diferencial que salta: el número y qué hacer, visibles al instante.' },
        { t: 'Servicios claros', d: 'Una página por tipo de trabajo, para el cliente y para Google.' },
        { t: 'Presupuesto con fotos', d: 'El cliente fotografía su cuadro o instalación: su presupuesto es más preciso.' },
        { t: 'Reseñas de Google', d: 'Sus reseñas reales, citadas palabra por palabra.' },
        { t: 'Una identidad propia', d: 'En un sector donde las webs se parecen, una dirección de arte que se recuerda.' },
      ],
      proof: ['lbeg'],
      live: [],
      faq: [
        { q: '¿Pueden aparecer mis acreditaciones?', a: 'Sí, las que tenga realmente y pueda justificar. No mostramos nada que no pueda probar.' },
      ],
    },
    industrie: {
      metaTitle: 'Diseño web industrial y B2B | Stripwork',
      metaDesc:
        'Web para pymes industriales y B2B: especialidades, maquinaria, casos, petición de presupuesto con envío de planos y SEO en sus oficios técnicos. Desde 2300 € + IVA.',
      label: 'Industria y B2B',
      rubrique: 'Industria y B2B',
      h1: 'Diseño web industrial y B2B',
      lead:
        'Sus clientes revisan su web antes de consultarle. Debe mostrar el taller, las capacidades y las referencias, y facilitar el envío de un plano.',
      searches: ['calderería [provincia]', 'subcontratación mecanizado', 'metalistería a medida', 'tuberías industriales'],
      features: [
        { t: 'Especialidades detalladas', d: 'Una página por saber hacer, con los términos técnicos que buscan sus compradores.' },
        { t: 'Taller y maquinaria', d: 'Sus capacidades reales, descritas con precisión: a menudo es lo que activa la consulta.' },
        { t: 'Casos', d: 'Problema, solución, pieza entregada: la prueba que el comprador comparte internamente.' },
        { t: 'Envío de planos', d: 'Formulario de consulta con adjuntos (planos, pliego).' },
        { t: 'Multilingüe', d: 'Si exporta, la web también puede hacerlo.' },
      ],
      proof: ['corgier'],
      live: [],
      faq: [
        { q: '¿Qué plan para una web industrial?', a: 'Normalmente A medida, desde 2300 € + IVA, por el volumen de contenido. El presupuesto lo detalla tras la auditoría.' },
      ],
    },
    paysagiste: {
      metaTitle: 'Diseño web para paisajistas y jardinería | Stripwork',
      metaDesc:
        'Web para paisajistas y empresas de jardinería: antes/después, diseño y mantenimiento de jardines, zona de servicio, presupuesto y SEO local. Desde 1199 € + IVA.',
      label: 'Paisajistas',
      rubrique: 'Paisajistas',
      h1: 'Diseño web para paisajistas',
      lead:
        'Un jardín se vende con imágenes. La web muestra lo que transforma, del terreno en bruto al jardín terminado, y lleva a pedir presupuesto.',
      searches: ['paisajista [ciudad]', 'diseño de jardines', 'mantenimiento de jardines', 'jardinero cerca de mí'],
      features: [
        { t: 'Antes / después', d: 'Sus trabajos reales comparados: la prueba más clara de su oficio.' },
        { t: 'Diseño y mantenimiento', d: 'Dos clientes, dos recorridos: el proyecto de jardín y el contrato de mantenimiento.' },
        { t: 'Una escena que cuenta', d: 'Con el plan Firma, una animación que muestra el jardín tomando forma.' },
        { t: 'Zona y temporada', d: 'Los municipios cubiertos y lo que se hace en cada estación.' },
        { t: 'Presupuesto con fotos', d: 'El cliente envía fotos de su terreno con la petición.' },
      ],
      proof: ['sbpaysagiste'],
      live: ['Du Vert au Balcon'],
      faq: [
        { q: 'No tengo buenas fotos de mis trabajos.', a: 'Le indicamos qué fotografiar y cómo desde el próximo trabajo. Las fotos reales siempre ganan a las de banco.' },
      ],
    },
    restaurant: {
      metaTitle: 'Diseño web para restaurantes | Stripwork',
      metaDesc:
        'Web para restaurantes, catering o chef a domicilio: carta legible en el móvil, reservas, horarios, ficha de Google y versión multilingüe. Desde 1199 € + IVA.',
      label: 'Restaurantes',
      rubrique: 'Restaurantes',
      h1: 'Diseño web para restaurantes',
      lead:
        'Un restaurante se elige en el móvil, a menudo a última hora. Carta, horarios y reserva deben leerse de un vistazo, también en varios idiomas en la costa.',
      searches: ['restaurante [ciudad]', 'catering [ciudad]', 'pizza para eventos', 'restaurante abierto domingo'],
      features: [
        { t: 'Carta en texto', d: 'Nada de PDF ilegible en el móvil: una carta que Google también puede leer.' },
        { t: 'Reserva directa', d: 'Teléfono, formulario o su herramienta de reservas, sin rodeos.' },
        { t: 'Horarios al día', d: 'Los mismos en la web y en su ficha de Google.' },
        { t: 'Varios idiomas', d: 'En zona turística, una versión en el idioma de sus clientes.' },
        { t: 'Fotos que abren el apetito', d: 'Sus platos y su local, nunca imágenes genéricas.' },
      ],
      proof: [],
      live: ['NapoliForno'],
      faq: [
        { q: '¿Sirve una web si ya tengo ficha de Google?', a: 'La ficha atrae, la web convence y hace reservar: carta completa, eventos, grupos. Ambas se refuerzan.' },
      ],
    },
    terapeutas: {
      metaTitle: 'Diseño web para terapeutas y consultas | Stripwork',
      metaDesc:
        'Web para terapeutas, naturópatas, hipnoterapeutas y profesionales del bienestar: sesiones, citas online, reseñas y SEO local. Tono honesto. Desde 1199 € + IVA.',
      label: 'Terapeutas',
      rubrique: 'Terapeutas',
      h1: 'Diseño web para terapeutas',
      lead:
        'Antes de reservar, se quiere saber quién nos va a recibir y cómo es una sesión. La web tranquiliza primero y después hace evidente la cita, en su idioma y en el de sus clientes.',
      searches: ['terapeuta [ciudad]', 'hipnosis [ciudad]', 'naturópata francés Costa Blanca', 'flores de Bach consulta'],
      features: [
        { t: 'Usted, primero', d: 'Su trayectoria, su enfoque, su consulta: la persona antes que el servicio.' },
        { t: 'Cómo es una sesión', d: 'Duración, etapas, precios: lo que despeja dudas antes de llamar.' },
        { t: 'Cita en dos clics', d: 'Su herramienta de reservas, teléfono o formulario.' },
        { t: 'Tono justo', d: 'Sin promesas de curación: acompañamientos descritos con honestidad.' },
        { t: 'Bilingüe', d: 'Para una clientela local y extranjera, una web en ambos idiomas.' },
      ],
      proof: ['bachcostablanca', 'mghypnose'],
      live: ['Anne-Charlotte Girard', 'Claire Larnicol'],
      faq: [
        { q: '¿Pueden mostrarse mis reseñas de Google?', a: 'Sí, citadas palabra por palabra. Ninguna reseña se inventa ni se retoca.' },
      ],
    },
  },

  articles: {
    prix: {
      metaTitle: 'Precio de una página web en 2026: lo que realmente paga | Stripwork',
      metaDesc:
        '¿Cuánto cuesta una web corporativa en 2026? Rangos del mercado (freelance, agencia), qué hace variar el precio, costes ocultos y nuestros precios publicados.',
      label: 'Precio de una página web',
      h1: 'Precio de una página web en 2026: lo que realmente paga',
      date: '2026-09-24',
      lead:
        'Entre 500 € y 8000 €: los presupuestos para una web corporativa varían muchísimo. Esto explica la diferencia y cómo comparar.',
      sections: [
        {
          h: 'Los rangos del mercado',
          p: [
            'Según varias guías publicadas en 2026 en España, un freelance cobra por una web corporativa sencilla entre 800 € y 2000 €, y una web corporativa se mueve en general entre 1500 € y 8000 € según lo que incluya.',
          ],
        },
        {
          h: 'Qué hace variar el precio',
          p: ['Con el mismo número de páginas, la diferencia está en lo que se incluye:'],
          list: [
            'Diseño a medida o plantilla comprada y adaptada',
            'SEO realmente trabajado (estructura, etiquetas, datos estructurados) o simple publicación',
            'Textos redactados para posicionar o aportados por usted',
            'Funciones: reservas, formularios avanzados, varios idiomas',
            'Medición de contactos instalada o no',
          ],
        },
        {
          h: 'Los costes que se olvidan',
          p: ['El dominio (unos pocos euros al año), el alojamiento, el mantenimiento y las licencias de plugins. En una web WordPress, las actualizaciones forman parte del coste real.'],
        },
        {
          h: 'Nuestros precios, publicados',
          p: [
            'En Stripwork: Esencial por 1199 € + IVA (hasta 5 páginas, diseño a medida, SEO técnico completo, ficha de Google), Firma por 1590 € + IVA (hasta 10 páginas, animación propia del oficio, textos SEO), A medida desde 2300 € + IVA. El dominio queda a su nombre y a su cargo; el alojamiento y mantenimiento es opcional, 29 € + IVA al mes.',
            'Y si nos recomienda: cada empresa recomendada que tenga una reunión con nosotros descuenta un 10 % del precio de su web, hasta un -50 %.',
          ],
        },
        {
          h: 'Qué preguntar antes de firmar',
          p: ['Para comparar dos presupuestos, pregunte:'],
          list: [
            '¿El dominio estará a mi nombre?',
            '¿El SEO técnico está incluido y en qué consiste?',
            '¿Quién redacta los textos?',
            '¿Qué pasa después del lanzamiento: quién hace cambios y cuánto cuestan?',
            '¿Puedo ver webs suyas publicadas?',
          ],
        },
      ],
      sources: [
        { label: 'Cronoshare — ¿Cuánto cuesta diseñar una página web?', url: 'https://www.cronoshare.com/cuanto-cuesta/pagina-web' },
        { label: 'Creasitios — Precio diseño web en España 2026', url: 'https://creasitios.com/precio-diseno-web-en-espana-2026/' },
        { label: 'Raiola Networks — Precio de una página web', url: 'https://raiolanetworks.com/blog/precio-pagina-web/' },
      ],
      related: ['tarifs', 'vitrine', 'parrainage'],
    },
    'refonte-seo': {
      metaTitle: 'Rediseñar la web sin perder posicionamiento | Stripwork',
      metaDesc:
        'Rediseñar su web sin perder posiciones en Google: inventario de páginas, redirecciones 301, contenidos a conservar y comprobaciones tras el lanzamiento.',
      label: 'Rediseñar sin perder posicionamiento',
      h1: 'Cómo rediseñar su web sin perder posicionamiento',
      date: '2026-09-24',
      lead:
        'Un rediseño mal preparado puede borrar en días años de posicionamiento. La causa casi siempre es la misma: direcciones que cambian sin redirección.',
      sections: [
        {
          h: 'Por qué un rediseño hace caer el tráfico',
          p: [
            'Google conoce sus páginas por su dirección. Si «/servicios/fontaneria» pasa a ser «/fontaneria» sin redirección, la antigua devuelve un error 404: Google acaba olvidándola, con sus posiciones y enlaces.',
          ],
        },
        {
          h: 'Los pasos de una migración limpia',
          p: ['Antes, durante y después del cambio:'],
          list: [
            'Listar todas las direcciones de la web antigua, también las que no están en el menú',
            'Identificar las páginas que reciben visitas y posicionan',
            'Asociar cada dirección antigua a la nueva página más cercana',
            'Configurar redirecciones 301 y probarlas antes del lanzamiento',
            'Conservar o mejorar los contenidos que posicionan',
            'Enviar el nuevo sitemap a Google y vigilar los errores',
          ],
        },
        {
          h: 'Qué esperar',
          p: ['Es normal que haya ligeras variaciones las primeras semanas. Con un plan de redirecciones completo, la web suele recuperar sus posiciones y luego mejorar. Nadie puede garantizar cero variaciones.'],
        },
      ],
      related: ['refonte', 'migration', 'auditSeo'],
    },
  },

  legal: {
    mentions: {
      metaTitle: 'Aviso legal | Stripwork',
      label: 'Aviso legal',
      h1: 'Aviso legal',
      sections: [
        {
          h: 'Titular del sitio',
          p: [
            'Stripwork — [À CONFIRMER: forma jurídica, razón social]',
            'Domicilio: [À CONFIRMER]',
            'Identificación fiscal: [À CONFIRMER]',
            'Contacto: contact@stripwork.com',
          ],
        },
        {
          h: 'Alojamiento',
          p: ['Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos — vercel.com'],
        },
        {
          h: 'Propiedad intelectual',
          p: ['Los textos, el diseño y los elementos gráficos de esta web pertenecen a Stripwork. Las capturas de los proyectos presentados pertenecen a sus respectivos titulares.'],
        },
      ],
    },
    confidentialite: {
      metaTitle: 'Política de privacidad | Stripwork',
      label: 'Privacidad',
      h1: 'Política de privacidad',
      sections: [
        {
          h: 'Datos recogidos',
          p: ['Solo lo que usted escribe en nuestros formularios: nombre, empresa, correo, teléfono, web actual, mensaje y, en su caso, el nombre de quien le recomienda.'],
        },
        {
          h: 'Finalidad',
          p: ['Responder a su petición y preparar su auditoría o presupuesto. Los datos se envían por correo al equipo de Stripwork y no se venden ni se ceden.'],
        },
        {
          h: 'Conservación',
          p: ['Las peticiones sin continuidad se conservan como máximo 3 años desde el último contacto y después se eliminan.'],
        },
        {
          h: 'Cookies',
          p: ['Esta web no usa cookies publicitarias ni herramientas de seguimiento de terceros.'],
        },
        {
          h: 'Sus derechos',
          p: ['Puede acceder, rectificar o suprimir sus datos escribiendo a contact@stripwork.com, y reclamar ante la AEPD (aepd.es).'],
        },
      ],
    },
  },
}

export default es
