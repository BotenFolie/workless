// Contenido editorial ES — mismo rigor: nada inventado

import type { Content } from './types'

const es: Content = {
  services: {
    creation: {
      metaTitle: 'Agencia de diseño web para pymes y autónomos desde 1199 € | Stripwork',
      metaDesc:
        'Agencia de diseño web para autónomos, comercios y pymes: páginas web a medida, diseño propio de su sector, SEO desde el primer día, pensada para recibir llamadas. Desde 1199 € + IVA.',
      label: 'Diseño web',
      h1: 'Diseño de páginas web',
      lead:
        'Una web diseñada para su oficio, rápida, posicionada desde el lanzamiento y construida para que suene el teléfono. Desde 1199 € + IVA, con una agencia web que también gestiona su SEO y sus campañas de Google Ads.',
      points: [
        { t: 'Diseñada para usted', d: 'Sin plantillas. Eva, nuestra directora de arte, parte de su oficio, su logotipo y sus clientes.' },
        { t: 'Posicionada desde el inicio', d: 'Estructura, etiquetas, datos estructurados y velocidad: el SEO forma parte de la construcción, no se añade después.' },
        { t: 'Rápida, sin plugins', d: 'Webs programadas en Next.js: sin WordPress que actualizar ni extensiones que fallen, y rápidas en el móvil.' },
        { t: 'Hecha para el contacto', d: 'Teléfono, formulario y ficha de Google accesibles en cada pantalla. Nadie tiene que buscar cómo llamarle.' },
        { t: 'Medida', d: 'Llamadas y formularios quedan registrados: sabe lo que le aporta la web.' },
        { t: 'Un único interlocutor', d: 'El mismo equipo de tres diseña la web, la posiciona y gestiona sus campañas. Nada se pierde entre proveedores.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['bachcostablanca', 'sbpaysagiste', 'lbeg'],
      faq: [
        { q: '¿Cuánto se tarda en hacer mi web?', a: 'Depende del número de páginas y de cuándo estén listos sus contenidos (fotos, información). El plazo queda fijado por escrito en el presupuesto.' },
        { q: '¿Podré modificar la web yo mismo?', a: 'Nuestras webs no tienen un panel tipo WordPress: por eso son rápidas y seguras. Los cambios están incluidos en el plan de alojamiento y mantenimiento, o se hacen bajo demanda.' },
        { q: '¿El dominio está incluido?', a: 'El dominio se compra a su nombre y a su cargo: es suyo. Nosotros lo configuramos.' },
        { q: '¿Y si no tengo fotos?', a: 'Sus fotos reales (equipo, trabajos, local) convencen más que las de banco. Le decimos cuáles hacer y, mientras tanto, reservamos su espacio.' },
      ],
      facts: [
        { k: 'Precio', v: 'Desde 1199 € + IVA, publicado antes de empezar' },
        { k: 'Pago', v: '50 % al encargar, 50 % en la publicación' },
        { k: 'Siempre incluido', v: 'Diseño a medida, SEO técnico, publicación' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'formatPicker',
          h: '¿Qué web necesita su empresa?',
          p: 'Tres preguntas, una recomendación. Se actualiza con cada respuesta.',
          questions: [
            { q: '¿Qué espera ante todo de su web?', options: [{ id: 'found', label: 'Que me encuentren en Google, a largo plazo' }, { id: 'ads', label: 'Recibir los contactos de una campaña de Google Ads' }, { id: 'both', label: 'Las dos cosas' }] },
            { q: '¿Cuántos servicios o zonas tiene que presentar?', options: [{ id: '2-4', label: 'De 2 a 4' }, { id: '1', label: 'Solo uno' }, { id: '5+', label: '5 o más' }] },
            { q: '¿Web en varios idiomas, o clientela B2B con mucho contenido técnico?', options: [{ id: 'no', label: 'No' }, { id: 'yes', label: 'Sí' }] },
          ],
          resultLabel: 'Nuestra recomendación',
          results: {
            landing: { name: 'Landing page', price: 'Oferta Esencial · 1199 € + IVA', why: 'Una página, un objetivo: la llamada o la petición de presupuesto. El formato adecuado para una campaña de Google Ads.', route: 'landing', link: 'Ver la landing page' },
            essentiel: { name: 'Web corporativa Esencial', price: '1199 € + IVA · hasta 5 páginas', why: 'La web que le hace encontrable y localizable: sus servicios, sus trabajos, su contacto, con todo el SEO técnico.', route: 'vitrine', link: 'Ver la web corporativa' },
            signature: { name: 'Web corporativa Firma', price: '1590 € + IVA · hasta 10 páginas', why: 'Una página por servicio y por ciudad, textos SEO redactados y una animación propia de su oficio.', route: 'vitrine', link: 'Ver la web corporativa' },
            surmesure: { name: 'A medida', price: 'Desde 2300 € + IVA · con presupuesto', why: 'Para pymes, B2B y webs en varios idiomas: contenido denso, especialidades, casos de éxito.', route: 'tarifs', link: 'Ver los precios' },
          },
        },
        {
          kind: 'journey',
          h: 'Cómo se desarrolla un proyecto',
          p: 'Sin sorpresas: conoce cada etapa de antemano y solo paga el resto cuando la web está publicada.',
          steps: [
            { t: 'Auditoría gratuita', d: 'Su web actual, su ficha de Google, sus competidores. Lo hablamos por teléfono.' },
            { t: 'Presupuesto claro', d: 'La oferta, el número de páginas y el plazo, por escrito.' },
            { t: 'Encargo', d: 'Valida el presupuesto y empezamos.', money: 'Anticipo 50 %' },
            { t: 'Diseño y desarrollo', d: 'Eva diseña, Mathieu y Louis programan. Usted valida antes de publicar.' },
            { t: 'Publicación', d: 'La web se publica y los contactos se miden desde el primer día.', money: 'Resto 50 %, −10 % por referido' },
          ],
        },
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
      facts: [
        { k: 'Precio', v: 'Esencial 1199 € · Firma 1590 € (+ IVA)' },
        { k: 'Páginas', v: 'Hasta 5 (Esencial) o 10 (Firma)' },
        { k: 'Siempre incluido', v: 'SEO técnico, ficha de Google, formulario' },
      ],
      feature: {
        kind: 'sitemap',
        h: 'El mapa de su futura web',
        p: 'Cada página cumple una función en el recorrido de su cliente. Elija una oferta para ver las páginas que incluye y toque una página para saber para qué sirve.',
        tiers: { essentiel: 'Esencial · 5 páginas', signature: 'Firma · 10 páginas' },
        includedIn: { all: 'Incluida en Esencial y Firma', signature: 'Incluida en Firma' },
        nodes: [
          { id: 'home', name: 'Inicio', tier: 'all', role: 'Dice en pocos segundos qué hace, dónde y cómo contactarle. Es la página que debe dar ganas de llamar.' },
          { id: 'services', name: 'Servicios', parent: 'home', tier: 'all', role: 'Sus servicios presentados uno a uno, con las palabras que sus clientes escriben en Google.' },
          { id: 'svc-pages', name: 'Una página por servicio', parent: 'services', tier: 'signature', role: 'Cada servicio importante tiene su propia página, con su título y su texto: es la que se posiciona en la búsqueda concreta.' },
          { id: 'zones', name: 'Zonas de trabajo', parent: 'home', tier: 'signature', role: 'Las ciudades que cubre de verdad, para aparecer cuando buscan su oficio seguido del nombre de la ciudad.' },
          { id: 'city-pages', name: 'Una página por ciudad', parent: 'zones', tier: 'signature', role: 'Una página útil por zona realmente cubierta, no una copia en la que solo cambia el nombre de la ciudad.' },
          { id: 'work', name: 'Trabajos', parent: 'home', tier: 'all', role: 'Sus obras, proyectos o casos concretos: la prueba de que sabe hacerlo, justo donde el visitante duda.' },
          { id: 'about', name: 'Quiénes somos', parent: 'home', tier: 'all', role: 'Quién es, desde cuándo, cómo trabaja. La gente llama a una persona, no a una empresa.' },
          { id: 'contact', name: 'Contacto', parent: 'home', tier: 'all', role: 'Teléfono, formulario, zona y horarios. Las solicitudes llegan directamente a su correo.' },
        ],
        everyPageH: 'En cada página, sea cual sea la oferta',
        everyPage: [
          { t: 'SEO local', d: 'Su oficio y su ciudad en los títulos, y los datos estructurados que ayudan a Google a situarle.' },
          { t: 'Ficha de Google optimizada', d: 'Categorías, zona, horarios, fotos: trabajada al mismo tiempo que la web.' },
          { t: 'Sus reseñas destacadas', d: 'Sus reseñas de Google, citadas palabra por palabra, donde el visitante duda.' },
          { t: 'Pensada para el móvil', d: 'La mayoría de sus visitas llegan desde el teléfono: la web se diseña primero para ellas.' },
          { t: 'Formulario protegido', d: 'Las solicitudes llegan a su correo, filtradas contra el spam.' },
          { t: 'Teléfono siempre visible', d: 'Una llamada nunca debe obligar a buscar el número.' },
        ],
      },
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
      facts: [
        { k: 'Objetivo', v: 'Una sola acción: llamada, reserva o presupuesto' },
        { k: 'Precio', v: 'Incluida en la oferta Esencial, 1199 € + IVA' },
        { k: 'Ideal para', v: 'Una campaña de Google Ads, el lanzamiento de una oferta' },
      ],
      feature: {
        kind: 'anatomy',
        h: 'Una landing page, de arriba abajo',
        p: 'El orden de los bloques sigue el razonamiento del visitante: comprueba que está en el sitio correcto, se tranquiliza y actúa. Pase el cursor o toque un bloque para verlo en la página.',
        zones: [
          { block: 'hero', t: 'Un título que repite su búsqueda', d: 'Sin menú que disperse: la página responde a la búsqueda del visitante desde la primera línea.' },
          { block: 'cta', t: 'La acción, enseguida', d: 'El botón de llamada o de solicitud se ve sin hacer scroll, en móvil y en ordenador.' },
          { block: 'proof', t: 'La prueba en el sitio justo', d: 'Reseñas, trabajos, garantías reales: justo antes de la decisión.' },
          { block: 'offer', t: 'Lo que ofrece, claro', d: 'Lo que obtiene el cliente y el siguiente paso, sin jerga ni promesas vagas.' },
          { block: 'form', t: 'Un formulario corto', d: 'Los campos mínimos para una solicitud útil. Cada campo de más hace perder contactos.' },
        ],
        hiddenH: 'Invisible para el visitante, decisivo para sus campañas',
        hidden: [
          { t: 'Rápida', d: 'Una página lenta encarece Google Ads: Google tiene en cuenta la experiencia en la página de destino.' },
          { t: 'Conversiones medidas', d: 'Llamadas y formularios se envían a Google Ads para ajustar las pujas con resultados reales.' },
        ],
        mock: { title: 'Reparación de calderas en Alicante', cta: 'Llamar', proof: 'Reseñas de clientes', offer: 'Qué incluye', form: 'Su solicitud', send: 'Enviar' },
      },
    },
    refonte: {
      metaTitle: 'Rediseño web sin perder posicionamiento | Agencia web Stripwork',
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
      pricing: { kind: 'offers' },
      proof: ['maintenancecaladoise', 'marieoracle'],
      faq: [
        { q: '¿Perderé mi posicionamiento?', a: 'Es el riesgo de un rediseño mal hecho. Inventariamos todas sus páginas antiguas y las redirigimos una a una; está incluido en cada rediseño.' },
        { q: '¿Conservo mi dominio?', a: 'Sí. Solo cambia la web; su dominio y sus correos siguen igual.' },
        { q: '¿Cuánto cuesta un rediseño?', a: 'Lo mismo que una web nueva: Esencial 1199 €, Firma 1590 €, A medida desde 2300 € (+ IVA). La migración SEO está incluida.' },
      ],
      facts: [
        { k: 'Precio', v: 'El mismo que una web nueva, desde 1199 € + IVA' },
        { k: 'Migración SEO', v: 'Incluida en cada rediseño' },
        { k: 'Conserva', v: 'Su dominio y sus correos' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'refonteCheck',
          h: '¿Hay que rehacer su web?',
          p: 'Marque lo que describe su web actual. Ninguna señal es grave por sí sola; varias juntas son clientes que se van a la competencia.',
          signs: [
            'Es incómoda de leer en el móvil',
            'Tarda varios segundos en cargar',
            'No sabe cuántos contactos le aporta',
            'No aparece cuando se busca su oficio y su ciudad',
            'Ya no se parece a su empresa de hoy',
            'Funciona con un WordPress o plugins que nadie actualiza',
          ],
          countLabel: 'señales marcadas',
          verdicts: {
            none: 'Marque las señales que reconozca: le diremos si un rediseño tiene sentido.',
            few: 'Algunos puntos a corregir: puede que no haga falta rediseñar. La auditoría gratuita se lo dirá con franqueza.',
            many: 'Su web probablemente le está costando clientes. El rediseño tiene sentido; la auditoría gratuita detalla qué conservar.',
          },
        },
        {
          kind: 'keepChange',
          h: 'Lo que se conserva, lo que cambia',
          p: 'Un rediseño no empieza de cero: todo lo que ya le aporta resultados se conserva. WordPress, Wix o web de agencia anticuada, el método es el mismo.',
          keepH: 'Lo que se conserva',
          keep: [
            { t: 'Su dominio', d: 'Su dirección no cambia: sus clientes le siguen encontrando.' },
            { t: 'Sus correos', d: 'Solo cambia la web; sus buzones de correo se mantienen.' },
            { t: 'El posicionamiento logrado', d: 'Cada página antigua se redirige a la nueva: Google y sus enlaces antiguos siguen funcionando.' },
            { t: 'Los contenidos que rinden', d: 'Los textos y páginas que ya se posicionan se recuperan o mejoran, nunca se borran al azar.' },
          ],
          changeH: 'Lo que cambia',
          change: [
            { t: 'El diseño', d: 'Una identidad que por fin se parece a su empresa, no a un tema comprado.' },
            { t: 'La velocidad', d: 'Una web ligera, sin plugins que mantener, que carga rápido en el móvil.' },
            { t: 'La estructura', d: 'Páginas organizadas en torno a lo que sus clientes buscan de verdad.' },
            { t: 'La medición', d: 'Llamadas y formularios medidos desde la publicación, para comparar antes y después.' },
          ],
        },
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
      proof: ['maintenancecaladoise'],
      faq: [
        { q: '¿La migración se cobra aparte?', a: 'No, forma parte de cada rediseño.' },
        { q: '¿Se moverá mi tráfico?', a: 'Es normal que haya variaciones las primeras semanas. Un buen plan de redirecciones limita las pérdidas; nadie honesto puede prometer cero variaciones.' },
      ],
      facts: [
        { k: 'Precio', v: 'Incluida en cada rediseño' },
        { k: 'Redirecciones', v: 'Probadas una a una antes del cambio' },
        { k: 'Tras la publicación', v: 'Vigilancia de errores e indexación' },
      ],
      feature: {
        kind: 'redirects',
        h: 'Cada dirección antigua tiene un nuevo destino',
        p: 'El núcleo de una migración es esta tabla: todas las direcciones de la web anterior, asociadas cada una a la página más cercana de la nueva. Nada se queda en error.',
        tableCaption: 'Plan de redirecciones — ejemplo',
        cols: { from: 'Dirección antigua', to: 'Nueva dirección', status: 'Estado' },
        rows: [
          { from: '/nuestros-servicios.html', to: '/servicios' },
          { from: '/reparacion-calderas.php', to: '/servicios/reparacion' },
          { from: '/?page_id=27', to: '/contacto' },
          { from: '/oferta-verano-2021', to: '/servicios', note: 'Página eliminada: redirigida a la más cercana' },
        ],
        tested: 'probada',
        phases: [
          {
            h: 'Antes del cambio',
            items: [
              { t: 'Inventario completo', d: 'Todas las direcciones de la web anterior, incluidas las olvidadas del menú.' },
              { t: 'Correspondencias', d: 'Cada página antigua asociada a la página nueva más cercana.' },
              { t: 'Contenidos que rinden', d: 'Los títulos y textos que ya se posicionan se conservan o se mejoran, nunca se borran al azar.' },
            ],
          },
          {
            h: 'El día del cambio',
            items: [
              { t: 'Redirecciones 301', d: 'Configuradas en el servidor y probadas una a una antes de abrir la nueva web.' },
              { t: 'Mismo dominio, mismos correos', d: 'Solo cambia la web: su dirección y sus buzones de correo se mantienen.' },
            ],
          },
          {
            h: 'Las semanas siguientes',
            items: [
              { t: 'Mapa del sitio enviado a Google', d: 'Para que las nuevas páginas se exploren rápido.' },
              { t: 'Vigilancia', d: 'Errores, páginas sin indexar, redirecciones olvidadas: detectados y corregidos.' },
            ],
          },
        ],
      },
    },
    seo: {
      metaTitle: 'Agencia SEO: posicionamiento web para pymes y autónomos | Stripwork',
      metaDesc:
        'Agencia SEO para pymes y autónomos: posicionamiento web, SEO técnico, páginas por servicio y ciudad, ficha de Google y posicionamiento en IA. Incluido en cada web y como plan mensual.',
      label: 'Posicionamiento SEO',
      h1: 'Posicionamiento SEO',
      lead:
        'Que le encuentren en Google los clientes que buscan exactamente lo que usted hace, donde lo hace. Técnica, contenidos, ficha de Google: una agencia de posicionamiento que se encarga de todo, del código de la web al seguimiento de posiciones.',
      points: [
        { t: 'SEO técnico', d: 'Indexación, velocidad, móvil, etiquetas, datos estructurados: la base sin la que nada posiciona.' },
        { t: 'Páginas que responden', d: 'Una página por servicio y por zona, escrita a partir de lo que sus clientes buscan de verdad.' },
        { t: 'SEO local', d: 'Ficha de Google completa, reseñas y datos de contacto coherentes en toda la red.' },
        { t: 'Posicionamiento en IA', d: 'Una web clara y estructurada, que ChatGPT, Perplexity y las respuestas IA de Google entienden y pueden citar.' },
        { t: 'Seguimiento mensual', d: 'Posiciones, visitas y contactos: un informe claro cada mes, con las correcciones necesarias.' },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: ['bachcostablanca', 'lbeg'],
      faq: [
        { q: '¿Cuándo se ven resultados?', a: 'Según la competencia de su sector y su ciudad, de unas semanas a varios meses. Nadie puede garantizar una posición en Google: desconfíe de quien lo prometa.' },
        { q: '¿SEO o Google Ads?', a: 'Google Ads trae contactos enseguida, mientras paga. El SEO tarda más, pero después funciona sin presupuesto publicitario. Muchos clientes empiezan con ambos.' },
        { q: '¿Hacen SEO en una web que no han creado ustedes?', a: 'Sí. Empezamos con una auditoría; si la web frena el posicionamiento, se lo decimos con franqueza.' },
      ],
      facts: [
        { k: 'Incluido', v: 'SEO técnico en cada web entregada' },
        { k: 'Continuo', v: 'Plan SEO, 400 € + IVA / mes' },
        { k: 'Lo que no prometemos', v: 'Una posición garantizada en Google' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'serp',
          h: 'Cada zona de Google se trabaja de forma distinta',
          p: 'Una búsqueda muestra cuatro tipos de resultados. Pase el cursor por una zona: le decimos cómo aparecer en ella y qué página lo explica.',
          query: 'paisajista alicante',
          zones: [
            { id: 'ads', label: 'Zona 1 · Anuncios', t: 'Los anuncios de Google Ads', d: 'Arriba de la página desde los primeros días, mientras la campaña esté activa.', route: 'ads', link: 'Google Ads' },
            { id: 'ai', label: 'Zona 2 · Respuesta IA', t: 'Las respuestas generadas por IA', d: 'Google resume y cita fuentes: una web clara y estructurada tiene opciones de estar entre ellas.', route: 'seoIa', link: 'Posicionamiento en IA' },
            { id: 'map', label: 'Zona 3 · Mapa', t: 'El mapa y las tres empresas', d: 'Aquí se deciden la mayoría de las llamadas locales: ficha de Google, reseñas, datos coherentes.', route: 'seoLocal', link: 'SEO local' },
            { id: 'organic', label: 'Zona 4 · Resultados orgánicos', t: 'Los resultados orgánicos', d: 'Gratuitos y duraderos: el fruto del SEO técnico y de páginas que responden a las búsquedas.', route: 'auditSeo', link: 'Empezar con una auditoría SEO' },
          ],
          mock: {
            sponsored: 'Patrocinado',
            adTitle: 'Paisajista en Alicante — Presupuesto gratis',
            aiTitle: 'Vista creada con IA',
            aiText: 'Varios paisajistas trabajan en Alicante, sobre todo en diseño de jardines y terrazas…',
            mapTitle: 'Empresas',
            places: ['Su empresa', 'Competidor A', 'Competidor B'],
            organic: ['Paisajista en Alicante: diseño de jardines', 'Terrazas y exteriores en Alicante'],
          },
          illustration: 'Ilustración — resultados ficticios',
        },
        {
          kind: 'split',
          h: 'Incluido en la web, y después de forma continua',
          p: 'El SEO técnico forma parte de cada web que entregamos. Ir más allá es un plan mensual aparte, independiente del precio de la web.',
          left: { tag: 'Incluido en el precio de la web', h: 'En cada web', items: ['Indexación, velocidad, visualización en móvil', 'Etiquetas y datos estructurados', 'Estructura de páginas pensada para sus búsquedas', 'Optimización de la ficha de Google'] },
          right: { tag: '400 € + IVA / mes', h: 'SEO continuo', items: ['Nuevas páginas y nuevos contenidos', 'Seguimiento de posiciones, visitas y contactos', 'Un informe claro cada mes, con las correcciones correspondientes'], route: 'abonnements', link: 'Ver los planes mensuales' },
        },
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
      facts: [
        { k: 'Precio', v: 'Gratis, sin compromiso' },
        { k: 'Qué necesitamos', v: 'La dirección de su web y su ficha de Google' },
        { k: 'Entrega', v: 'Explicada por teléfono' },
      ],
      feature: {
        kind: 'report',
        h: 'Qué contiene su auditoría',
        p: 'Cuatro ángulos de análisis y un plan de acción ordenado por impacto. Recorra las pestañas: es la estructura exacta del informe que recibe.',
        docTitle: 'Auditoría SEO — su-web.es',
        tabs: [
          { name: 'Técnica', intro: '¿Puede Google leer bien su web?', checks: ['Páginas indexadas o no', 'Velocidad de carga', 'Visualización en móvil', 'Errores y enlaces rotos', 'Títulos y descripciones de las páginas'] },
          { name: 'Contenidos', intro: '¿Responden sus páginas a lo que buscan sus clientes?', checks: ['Páginas existentes y búsquedas objetivo', 'Servicios sin página propia', 'Páginas duplicadas o demasiado parecidas', 'Lo que cubren sus competidores y usted no'] },
          { name: 'Local', intro: '¿Aparece en el mapa, en su zona?', checks: ['Categorías de su ficha de Google', 'Reseñas: número, regularidad, respuestas', 'Fotos e información de la ficha', 'Datos de contacto idénticos en todas partes'] },
          { name: 'Competencia', intro: '¿Quién aparece por delante de usted, y por qué?', checks: ['Las empresas por delante en sus búsquedas clave', 'Qué tienen de más sus páginas', 'Las búsquedas donde el hueco está libre'] },
        ],
        planTab: 'Plan de acción',
        planIntro: 'Las correcciones ordenadas por impacto: sabe por dónde empezar, con o sin nosotros.',
        plan: [
          { level: 'Corregir primero', items: ['Páginas importantes ausentes de Google', 'Ficha de Google en una categoría equivocada'] },
          { level: 'Después', items: ['Una página por servicio principal', 'Títulos de página a reescribir'] },
          { level: 'Cuando tenga tiempo', items: ['Renovar las fotos de la ficha', 'Reforzar los enlaces entre páginas'] },
        ],
        example: 'Líneas de ejemplo: el contenido depende de su web.',
      },
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
      facts: [
        { k: 'Para', v: 'Autónomos, comercios, profesionales' },
        { k: 'Seguimiento', v: 'Plan SEO, 400 € + IVA / mes' },
        { k: '¿Sin local?', v: 'Basta con una zona de servicio' },
      ],
      feature: {
        kind: 'localpack',
        h: 'Lo que trabajamos en su ficha',
        p: 'En una búsqueda local, Google muestra un mapa y tres empresas. Cada elemento de este bloque se trabaja. Pase el cursor o toque un punto para verlo en la ficha.',
        search: 'electricista cerca de mí',
        you: {
          name: 'Su empresa',
          category: 'Electricista',
          zone: 'Alicante y alrededores',
          hours: 'Abierto · cierra a las 19:00',
          reviews: 'Reseñas recientes',
          actions: ['Llamar', 'Sitio web', 'Cómo llegar'],
        },
        others: [
          { name: 'Competidor A', category: 'Electricista' },
          { name: 'Competidor B', category: 'Electricista' },
        ],
        code: '{ "@type": "Electrician", "areaServed": "Alicante" }',
        notes: [
          { part: 'fiche', t: 'Ficha de Google completa', d: 'Categorías correctas, servicios, zona, horarios, fotos, publicaciones.' },
          { part: 'avis', t: 'Reseñas', d: 'Un método sencillo para pedir reseñas a sus clientes satisfechos, y responderlas. Nunca fabricamos reseñas.' },
          { part: 'pages', t: 'Páginas por ciudad', d: 'El enlace «Sitio web» lleva a una página útil para la zona buscada, no a una copia que solo cambia el nombre de la ciudad.' },
          { part: 'nap', t: 'Datos coherentes', d: 'Mismo nombre, misma dirección, mismo teléfono en todas partes: web, ficha, directorios.' },
          { part: 'data', t: 'Datos estructurados', d: 'El tipo de empresa, la zona y los servicios descritos para Google en el código de la web.' },
        ],
        illustration: 'Ilustración — empresas ficticias',
      },
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
      facts: [
        { k: 'Asistentes', v: 'ChatGPT, Perplexity, respuestas IA de Google' },
        { k: 'Base', v: 'Los mismos cimientos que un buen SEO' },
        { k: 'Lo que no prometemos', v: 'Una cita garantizada' },
      ],
      feature: {
        kind: 'aiAnswer',
        h: 'Cómo elige una IA a quién citar',
        p: 'La respuesta de un asistente se apoya en páginas claras y en fuentes que coinciden. Pase el cursor o toque un punto para ver de dónde sale cada parte de la respuesta.',
        assistant: 'Asistente IA',
        question: '¿Qué electricista puede instalar un punto de recarga en Alicante?',
        answer: [
          { text: 'Varias empresas trabajan en Alicante. ' },
          { text: 'Su empresa', part: 'identity' },
          { text: ' instala puntos de recarga para particulares, con presupuesto a partir de una foto', part: 'direct', cite: 1 },
          { text: '. Aparece en Google con reseñas recientes', part: 'elsewhere', cite: 2 },
          { text: ' y figura en directorios profesionales', part: 'elsewhere', cite: 3 },
          { text: '.' },
        ],
        sources: [
          { label: 'su-web.es/punto-de-recarga', part: 'data' },
          { label: 'Ficha de Google', part: 'elsewhere' },
          { label: 'Directorio profesional', part: 'elsewhere' },
        ],
        notes: [
          { part: 'direct', t: 'Respuestas directas', d: 'Páginas que responden con claridad a las preguntas reales de sus clientes, sin rodeos.' },
          { part: 'identity', t: 'Identidad clara', d: 'Quién es, qué hace, dónde: dicho de forma sencilla e igual en todas partes.' },
          { part: 'data', t: 'Datos estructurados', d: 'Empresa, servicios y preguntas frecuentes descritos en el código, legibles por buscadores e IA.' },
          { part: 'elsewhere', t: 'Presencia en otros sitios', d: 'Ficha de Google, directorios, menciones: las IA cruzan fuentes antes de citar a alguien.' },
        ],
        illustration: 'Ilustración — respuesta y empresa ficticias',
      },
    },
    ads: {
      metaTitle: 'Agencia Google Ads: gestión de campañas para pymes | Stripwork',
      metaDesc:
        'Agencia Google Ads para pymes: campañas creadas y gestionadas por el estudio que hizo su web: palabras clave locales, anuncios, landing page y medición de llamadas. 400 € + IVA al mes, sin incluir inversión.',
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
      facts: [
        { k: 'Nuestro trabajo', v: '400 € + IVA / mes' },
        { k: 'Inversión publicitaria', v: 'Pagada directamente a Google' },
        { k: 'La cuenta', v: 'A su nombre, con su historial' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'adsVsSeo',
          h: '¿Google Ads, SEO, o los dos?',
          p: 'No trabajan al mismo ritmo. Elija una estrategia para ver cómo llegan los contactos.',
          ads: { name: 'Solo Google Ads', d: 'Contactos desde los primeros días, mientras paga. Cuando la campaña se detiene, los contactos también.' },
          seo: { name: 'Solo SEO', d: 'Más lento al principio, de unas semanas a varios meses según la competencia, pero después trabaja sin inversión publicitaria.' },
          both: { name: 'Los dos', d: 'Google Ads trae contactos enseguida mientras sube el posicionamiento. Es la elección de muchos de nuestros clientes.' },
          axis: { time: 'tiempo →', contacts: 'contactos' },
          caption: 'Esquema de principio, sin escala: cada oficio y cada ciudad tienen su propio ritmo.',
        },
        {
          kind: 'router',
          h: '¿Por dónde empezar?',
          p: 'Según su situación, el primer paso no es el mismo.',
          paths: [
            { if: 'Nunca ha hecho publicidad', t: 'Gestión de campañas', d: 'Creamos sus campañas desde cero, las seguimos y las ajustamos cada mes.', route: 'adsGestion', link: 'Ver la gestión' },
            { if: 'Ya tiene campañas', t: 'Auditoría de Google Ads', d: 'Revisamos gratis a dónde va su presupuesto antes de tocar nada.', route: 'adsAudit', link: 'Ver la auditoría' },
            { if: 'Sus anuncios llevan a su página de inicio', t: 'Landing page', d: 'Una página dedicada que repite la promesa del anuncio y lleva a la llamada.', route: 'landing', link: 'Ver la landing page' },
          ],
        },
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
      facts: [
        { k: 'Nuestro trabajo', v: '400 € + IVA / mes' },
        { k: 'Inversión publicitaria', v: 'Pagada directamente a Google, importe elegido por usted' },
        { k: 'Seguimiento', v: 'Un informe claro cada mes' },
      ],
      feature: {
        kind: 'adsChain',
        h: 'De la búsqueda a la llamada, cada eslabón medido',
        p: 'Una campaña no es solo un anuncio: trabajamos toda la cadena, desde la búsqueda en Google hasta el contacto medido.',
        ad: {
          sponsored: 'Patrocinado',
          url: 'su-web.es/averias',
          title: 'Averías eléctricas en Alicante — Presupuesto gratis',
          desc: 'Servicio a particulares y empresas. Llame o envíe una foto de su instalación.',
          call: 'Llamar',
        },
        steps: [
          { t: 'La búsqueda', d: 'Palabras clave, zonas, horarios y exclusiones: el anuncio solo aparece en las búsquedas correctas.' },
          { t: 'El anuncio', d: 'Textos, extensiones de llamada y de enlace: probados y ajustados cada mes.' },
          { t: 'La página de destino', d: 'Una página que repite la promesa del anuncio y lleva a la llamada.' },
          { t: 'El contacto medido', d: 'Llamadas desde el anuncio, llamadas desde la web, formularios: todo se cuenta.' },
          { t: 'El informe mensual', d: 'Lo que se ha gastado, lo que se ha conseguido, lo que cambiamos el mes siguiente.' },
        ],
        budgetH: 'Dos importes, nunca mezclados',
        budgetP: 'Nuestra tarifa es fija. La inversión publicitaria la elige usted: Google la cobra directamente, sin margen por nuestra parte.',
        ours: 'Nuestro trabajo',
        google: 'Inversión en Google',
        slider: 'Inversión publicitaria elegida:',
        total: 'Total mensual',
        perMonth: '+ IVA / mes',
        illustration: 'Ilustración — anuncio ficticio',
      },
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
      facts: [
        { k: 'Precio', v: 'Gratis, dentro de la auditoría' },
        { k: 'Acceso', v: 'Solo lectura, revocable en cualquier momento' },
        { k: 'Revisamos', v: 'Búsquedas, conversiones, estructura, páginas' },
      ],
      feature: {
        kind: 'selfCheck',
        h: 'Cuatro preguntas antes de la auditoría',
        p: 'Responda con sinceridad: cada «no» o «no lo sé» es un punto por donde se puede escapar su presupuesto.',
        answers: { yes: 'Sí', no: 'No', unsure: 'No lo sé' },
        questions: [
          { q: '¿Conoce las búsquedas que activaron realmente sus anuncios?', why: 'El informe de términos de búsqueda suele mostrar clics pagados en búsquedas que no tienen nada que ver con su oficio.' },
          { q: '¿Se cuentan sus llamadas y formularios en Google Ads?', why: 'Sin medición de conversiones, Google ajusta sus pujas a ciegas. Es el fallo más habitual.' },
          { q: '¿Sus campañas se limitan a su zona y a sus horarios útiles?', why: 'Zonas demasiado amplias o anuncios de noche dispersan el presupuesto en contactos inservibles.' },
          { q: '¿Su página de destino repite exactamente lo que promete el anuncio?', why: 'Pagar un clic para enviar al visitante a una página genérica es perder parte de ese clic.' },
        ],
        result: {
          none: 'Su cuenta parece bien llevada. La auditoría lo confirmará con cifras.',
          some: 'Al menos un punto merece revisión: la auditoría gratuita le dirá cuánto le cuesta.',
          all: 'Su presupuesto trabaja probablemente a ciegas. Es justo lo que aclara la auditoría gratuita.',
          cta: 'Pedir la auditoría gratuita',
        },
        termsH: 'Lo primero que mira la auditoría: las búsquedas reales',
        termsCaption: 'Informe de términos de búsqueda — ejemplo para un electricista',
        termsCols: { term: 'Búsqueda escrita', verdict: 'Veredicto' },
        terms: [
          { term: 'electricista alicante centro', useful: true, why: 'Oficio y zona: justo la intención correcta.' },
          { term: 'avería eléctrica urgente', useful: true, why: 'Necesidad inmediata, alta probabilidad de llamada.' },
          { term: 'curso de electricista', useful: false, why: 'Busca un curso, no un profesional: hay que excluirla.' },
          { term: 'sueldo electricista', useful: false, why: 'Búsqueda de empleo: clic pagado para nada.' },
        ],
        useful: 'Útil',
        wasted: 'Presupuesto perdido',
      },
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
      proof: ['maintenancecaladoise'],
      live: ['BP Maintenance'],
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
      proof: ['sbpaysagiste', 'duvertaubalcon'],
      live: [],
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
          p: [
            'Lo que usted escribe en nuestros formularios: nombre, empresa, correo, teléfono, web actual, mensaje y, en su caso, el nombre de quien le recomienda.',
            'Con su petición recibimos también su procedencia: la página por la que llegó a la web, la web de la que venía y los parámetros de campaña del enlace (utm, identificador de clic de Google Ads o Meta). Nada de esto se envía si no manda un formulario.',
          ],
        },
        {
          h: 'Finalidad',
          p: ['Responder a su petición, preparar su auditoría o presupuesto y saber qué canales nos traen peticiones. Los datos se envían por correo al equipo de Stripwork y se guardan en su herramienta interna de seguimiento. No se venden ni se ceden.'],
        },
        {
          h: 'Conservación',
          p: ['Las peticiones sin continuidad se conservan como máximo 3 años desde el último contacto y después se eliminan.'],
        },
        {
          h: 'Cookies',
          p: [
            'Esta web no usa cookies publicitarias ni herramientas de seguimiento de terceros.',
            'Dos cookies propias de stripwork.com (sw_src y sw_last, 90 días) guardan la procedencia de su visita descrita arriba. Solo se leen cuando envía un formulario y no sirven para ningún seguimiento publicitario. Puede borrarlas desde su navegador.',
          ],
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
