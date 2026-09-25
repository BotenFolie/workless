// Contenu éditorial FR — factuel, sans chiffre ni promesse inventés

import type { Content } from './types'

const fr: Content = {
  services: {
    creation: {
      metaTitle: 'Agence web : création de site internet pour TPE et PME dès 1 199 € HT | Stripwork',
      metaDesc:
        'Agence web pour artisans, indépendants et PME : création de site internet sur mesure, design dédié à votre métier, SEO dès la conception, pensé pour les appels. Dès 1 199 € HT.',
      label: 'Création de site internet',
      h1: 'Création de site internet',
      lead:
        'Un site dessiné pour votre métier, rapide, référencé dès la mise en ligne et construit pour faire sonner le téléphone. À partir de 1 199 € HT, par une agence web qui gère aussi votre SEO et vos campagnes Google Ads.',
      points: [
        { t: 'Dessiné pour vous', d: 'Aucun modèle. Eva, notre directrice artistique, part de votre métier, de votre logo et de vos clients.' },
        { t: 'Référencé dès le départ', d: 'Structure des pages, balises, données structurées et vitesse : le SEO est intégré à la construction, pas ajouté après.' },
        { t: 'Rapide, sans plugin', d: 'Sites codés sur Next.js : pas de WordPress à mettre à jour, pas d’extension qui casse, un site qui s’affiche vite sur mobile.' },
        { t: 'Construit pour le contact', d: 'Téléphone, formulaire et fiche Google accessibles à chaque écran. Le visiteur n’a jamais à chercher comment vous joindre.' },
        { t: 'Mesuré', d: 'Appels et formulaires sont suivis : vous savez ce que le site vous rapporte.' },
        { t: 'Un seul interlocuteur', d: 'Le même trio conçoit le site, le référence et gère vos campagnes. Rien ne se perd entre deux prestataires.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['sbpaysagiste', 'lbeg', 'corgier'],
      faq: [
        { q: 'Combien de temps faut-il pour créer mon site ?', a: 'Cela dépend du nombre de pages et du moment où vos contenus (photos, informations) sont prêts. Le délai est fixé noir sur blanc dans le devis.' },
        { q: 'Pourrai-je modifier mon site moi-même ?', a: 'Nos sites n’ont pas de back-office de type WordPress : c’est ce qui les rend rapides et sûrs. Les modifications sont comprises dans le forfait hébergement & maintenance, ou faites à la demande.' },
        { q: 'Le nom de domaine est-il compris ?', a: 'Le nom de domaine est acheté à votre nom et à vos frais : il vous appartient. On s’occupe de le configurer.' },
        { q: 'Et si je n’ai pas de photos ?', a: 'Vos vraies photos (équipe, chantiers, local) convainquent toujours mieux que des images de banque. On vous dit lesquelles prendre ; en attendant, on prévoit leur emplacement.' },
      ],
      facts: [
        { k: 'Prix', v: 'Dès 1 199 € HT, affiché avant de commencer' },
        { k: 'Paiement', v: '50 % à la commande, 50 % à la mise en ligne' },
        { k: 'Toujours inclus', v: 'Design sur mesure, SEO technique, mise en ligne' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'formatPicker',
          h: 'Quel site pour votre entreprise ?',
          p: 'Trois questions, une recommandation. Elle se met à jour à chaque réponse.',
          questions: [
            { q: 'Qu’attendez-vous d’abord de votre site ?', options: [{ id: 'found', label: 'Être trouvé sur Google, dans la durée' }, { id: 'ads', label: 'Recevoir les contacts d’une campagne Google Ads' }, { id: 'both', label: 'Les deux' }] },
            { q: 'Combien de services ou de zones avez-vous à présenter ?', options: [{ id: '2-4', label: '2 à 4' }, { id: '1', label: 'Un seul' }, { id: '5+', label: '5 ou plus' }] },
            { q: 'Site en plusieurs langues, ou clientèle B2B avec beaucoup de contenu technique ?', options: [{ id: 'no', label: 'Non' }, { id: 'yes', label: 'Oui' }] },
          ],
          resultLabel: 'Notre recommandation',
          results: {
            landing: { name: 'Landing page', price: 'Offre Essentiel · 1 199 € HT', why: 'Une page, un objectif : l’appel ou la demande de devis. Le bon format pour alimenter une campagne Google Ads.', route: 'landing', link: 'Voir la landing page' },
            essentiel: { name: 'Site vitrine Essentiel', price: '1 199 € HT · jusqu’à 5 pages', why: 'Le site qui vous rend trouvable et joignable : vos services, vos réalisations, votre contact, avec tout le SEO technique.', route: 'vitrine', link: 'Voir le site vitrine' },
            signature: { name: 'Site vitrine Signature', price: '1 590 € HT · jusqu’à 10 pages', why: 'Une page par service et par ville, les textes SEO rédigés et une animation propre à votre métier.', route: 'vitrine', link: 'Voir le site vitrine' },
            surmesure: { name: 'Sur mesure', price: 'Dès 2 300 € HT · sur devis', why: 'Pour les PME, le B2B et les sites en plusieurs langues : contenu dense, expertises, études de cas.', route: 'tarifs', link: 'Voir les tarifs' },
          },
        },
        {
          kind: 'journey',
          h: 'Comment se déroule un projet',
          p: 'Pas de surprise : chaque étape est connue à l’avance, et vous ne payez le solde qu’une fois le site en ligne.',
          steps: [
            { t: 'Audit gratuit', d: 'Votre site actuel, votre fiche Google, vos concurrents. On en parle au téléphone.' },
            { t: 'Devis clair', d: 'L’offre, le nombre de pages et le délai, fixés noir sur blanc.' },
            { t: 'Commande', d: 'Vous validez le devis, on démarre.', money: 'Acompte 50 %' },
            { t: 'Conception', d: 'Eva dessine, Mathieu et Louis développent. Vous validez avant la mise en ligne.' },
            { t: 'Mise en ligne', d: 'Le site part en ligne, les contacts sont suivis dès le premier jour.', money: 'Solde 50 %, −10 % par parrainage' },
          ],
        },
      ],
    },
    vitrine: {
      metaTitle: 'Création de site vitrine sur mesure dès 1 199 € HT | Stripwork',
      metaDesc:
        'Site vitrine sur mesure pour artisans, thérapeutes, commerces et PME : jusqu’à 10 pages, SEO local, fiche Google optimisée, formulaire. Essentiel 1 199 € HT, Signature 1 590 € HT.',
      label: 'Site vitrine',
      h1: 'Création de site vitrine',
      lead:
        'Le site vitrine présente votre entreprise, vos services et votre zone d’intervention, et transforme les visites en demandes. Essentiel à 1 199 € HT, Signature à 1 590 € HT.',
      points: [
        { t: 'Les bonnes pages', d: 'Accueil, services, réalisations, à propos, contact : chaque page répond à une question que se pose votre client.' },
        { t: 'SEO local', d: 'Votre métier et votre ville dans les titres, une page par service, les données structurées qui aident Google à vous situer.' },
        { t: 'Fiche Google optimisée', d: 'Catégories, zone, horaires, photos : la fiche qui apparaît sur la carte est travaillée en même temps que le site.' },
        { t: 'Vos avis mis en avant', d: 'Vos avis Google, cités mot pour mot, là où le visiteur hésite.' },
        { t: 'Pensé mobile', d: 'La majorité de vos visiteurs arrivent sur téléphone : le site est conçu pour eux d’abord.' },
        { t: 'Formulaire qui arrive', d: 'Les demandes arrivent directement dans votre boîte e-mail, protégées contre le spam.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['lbeg', 'sbpaysagiste', 'bachcostablanca'],
      faq: [
        { q: 'Quelle différence entre Essentiel et Signature ?', a: 'Essentiel couvre jusqu’à 5 pages, avec tout le SEO technique. Signature va jusqu’à 10 pages, ajoute une animation propre à votre métier, des pages par service et par ville, et les textes SEO rédigés par nos soins.' },
        { q: 'Site vitrine ou landing page ?', a: 'Le site vitrine présente toute votre activité et se référence sur la durée. La landing page sert un seul objectif, souvent une campagne Google Ads. Beaucoup d’entreprises commencent par le site vitrine.' },
        { q: 'Les textes sont-ils rédigés par vous ?', a: 'Dans l’offre Signature, oui. Dans l’offre Essentiel, on part de vos textes et on les structure pour le référencement.' },
      ],
      facts: [
        { k: 'Prix', v: 'Essentiel 1 199 € HT · Signature 1 590 € HT' },
        { k: 'Pages', v: 'Jusqu’à 5 (Essentiel) ou 10 (Signature)' },
        { k: 'Toujours inclus', v: 'SEO technique, fiche Google, formulaire' },
      ],
      feature: {
        kind: 'sitemap',
        h: 'Le plan de votre futur site',
        p: 'Chaque page a un rôle précis dans le parcours de votre client. Choisissez une offre pour voir les pages qu’elle contient, puis touchez une page pour savoir à quoi elle sert.',
        tiers: { essentiel: 'Essentiel · 5 pages', signature: 'Signature · 10 pages' },
        includedIn: { all: 'Incluse dans Essentiel et Signature', signature: 'Incluse dans Signature' },
        nodes: [
          { id: 'home', name: 'Accueil', tier: 'all', role: 'Dit en quelques secondes ce que vous faites, où, et comment vous joindre. C’est la page qui doit donner envie d’appeler.' },
          { id: 'services', name: 'Services', parent: 'home', tier: 'all', role: 'Vos prestations présentées une par une, avec les mots que vos clients tapent dans Google.' },
          { id: 'svc-pages', name: 'Une page par service', parent: 'services', tier: 'signature', role: 'Chaque service important a sa propre page, avec son titre et son texte : c’est elle qui se positionne sur la recherche précise.' },
          { id: 'zones', name: 'Zones d’intervention', parent: 'home', tier: 'signature', role: 'Les villes que vous couvrez vraiment, pour apparaître quand on cherche votre métier suivi du nom de la ville.' },
          { id: 'city-pages', name: 'Une page par ville', parent: 'zones', tier: 'signature', role: 'Une page utile par zone réellement couverte, pas une copie où seul le nom de la ville change.' },
          { id: 'work', name: 'Réalisations', parent: 'home', tier: 'all', role: 'Vos chantiers, projets ou cas concrets : la preuve que vous savez faire, là où le visiteur hésite encore.' },
          { id: 'about', name: 'À propos', parent: 'home', tier: 'all', role: 'Qui vous êtes, depuis quand, comment vous travaillez. Les gens appellent quelqu’un, pas une entreprise.' },
          { id: 'contact', name: 'Contact', parent: 'home', tier: 'all', role: 'Téléphone, formulaire, zone et horaires. Les demandes arrivent directement dans votre boîte e-mail.' },
        ],
        everyPageH: 'Sur chaque page, quelle que soit l’offre',
        everyPage: [
          { t: 'SEO local', d: 'Votre métier et votre ville dans les titres, et les données structurées qui aident Google à vous situer.' },
          { t: 'Fiche Google optimisée', d: 'Catégories, zone, horaires, photos : travaillée en même temps que le site.' },
          { t: 'Vos avis mis en avant', d: 'Vos avis Google, cités mot pour mot, là où le visiteur hésite.' },
          { t: 'Pensé mobile', d: 'La majorité de vos visiteurs arrivent sur téléphone : le site est conçu pour eux d’abord.' },
          { t: 'Formulaire protégé', d: 'Les demandes arrivent dans votre boîte e-mail, filtrées contre le spam.' },
          { t: 'Téléphone toujours visible', d: 'Un appel ne doit jamais demander de chercher le numéro.' },
        ],
      },
    },
    landing: {
      metaTitle: 'Création de landing page pour Google Ads | Stripwork',
      metaDesc:
        'Landing page sur mesure pour vos campagnes Google Ads : un objectif, un message, un formulaire court, suivi des conversions. Incluse dans l’offre Essentiel à 1 199 € HT.',
      label: 'Landing page',
      h1: 'Création de landing page',
      lead:
        'Une page, un objectif : l’appel, la réservation ou la demande de devis. Idéale pour une campagne Google Ads ou le lancement d’une offre.',
      points: [
        { t: 'Un seul message', d: 'Pas de menu qui disperse : la page répond à la recherche du visiteur et l’amène à agir.' },
        { t: 'La preuve au bon endroit', d: 'Avis, réalisations, garanties réelles : placés juste avant la décision.' },
        { t: 'Formulaire court', d: 'Le minimum de champs pour une demande exploitable. Chaque champ en trop fait perdre des contacts.' },
        { t: 'Rapide', d: 'Une page lente coûte plus cher en Google Ads : Google tient compte de l’expérience sur la page de destination.' },
        { t: 'Conversions suivies', d: 'Appels et formulaires sont remontés dans Google Ads pour piloter les enchères sur des résultats réels.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['mghypnose'],
      faq: [
        { q: 'Une landing page sans Google Ads, ça sert ?', a: 'Oui, pour une offre précise, un lancement ou un lien envoyé à vos prospects. Mais c’est avec une campagne qu’elle donne le plus.' },
        { q: 'Combien coûte une landing page ?', a: 'Elle entre dans l’offre Essentiel à 1 199 € HT. La gestion des campagnes qui l’alimentent est un abonnement séparé.' },
      ],
      facts: [
        { k: 'Objectif', v: 'Une seule action : appel, réservation ou devis' },
        { k: 'Prix', v: 'Incluse dans l’offre Essentiel, 1 199 € HT' },
        { k: 'Idéale pour', v: 'Une campagne Google Ads, un lancement d’offre' },
      ],
      feature: {
        kind: 'anatomy',
        h: 'Une landing page, de haut en bas',
        p: 'L’ordre des blocs suit le raisonnement du visiteur : il vérifie qu’il est au bon endroit, se rassure, puis agit. Survolez ou touchez un bloc pour le voir sur la page.',
        zones: [
          { block: 'hero', t: 'Un titre qui reprend sa recherche', d: 'Pas de menu qui disperse : la page répond à la recherche du visiteur dès la première ligne.' },
          { block: 'cta', t: 'L’action, tout de suite', d: 'Le bouton d’appel ou de demande est visible sans faire défiler, sur mobile comme sur ordinateur.' },
          { block: 'proof', t: 'La preuve au bon endroit', d: 'Avis, réalisations, garanties réelles : placés juste avant la décision.' },
          { block: 'offer', t: 'Ce que vous proposez, en clair', d: 'Ce que le client obtient et la prochaine étape, sans jargon ni promesse vague.' },
          { block: 'form', t: 'Un formulaire court', d: 'Le minimum de champs pour une demande exploitable. Chaque champ en trop fait perdre des contacts.' },
        ],
        hiddenH: 'Invisible pour le visiteur, décisif pour vos campagnes',
        hidden: [
          { t: 'Rapide', d: 'Une page lente coûte plus cher en Google Ads : Google tient compte de l’expérience sur la page de destination.' },
          { t: 'Conversions suivies', d: 'Appels et formulaires sont remontés dans Google Ads pour piloter les enchères sur des résultats réels.' },
        ],
        mock: { title: 'Dépannage chaudière à Lyon', cta: 'Appeler', proof: 'Avis clients', offer: 'Ce qui est compris', form: 'Votre demande', send: 'Envoyer' },
      },
    },
    refonte: {
      metaTitle: 'Refonte de site internet sans perte de référencement | Agence web Stripwork',
      metaDesc:
        'Refonte complète de votre site : nouveau design sur mesure, contenu repris, redirections 301 de toutes les anciennes pages pour garder votre référencement. Dès 1 199 € HT.',
      label: 'Refonte de site internet',
      h1: 'Refonte de site internet',
      lead:
        'Votre site existe mais ne vous apporte rien ? On le refait entièrement, sans perdre le référencement acquis : chaque ancienne page est redirigée vers la nouvelle.',
      points: [
        { t: 'Audit de l’existant', d: 'Toutes les pages, les textes, les positions Google, ce qui marche déjà. On ne jette rien d’utile.' },
        { t: 'Redirections 301', d: 'Chaque ancienne adresse pointe vers sa nouvelle page : Google et vos anciens liens suivent.' },
        { t: 'Nouveau design sur mesure', d: 'Une identité qui ressemble enfin à votre entreprise, pas à un thème acheté.' },
        { t: 'Plus rapide', d: 'Un site moderne, léger, qui s’affiche vite sur mobile.' },
        { t: 'Mesure avant / après', d: 'Suivi des contacts dès la mise en ligne, pour comparer.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['maintenancecaladoise', 'marieoracle'],
      faq: [
        { q: 'Vais-je perdre mon référencement ?', a: 'C’est le risque d’une refonte mal faite. On inventorie toutes vos anciennes pages et on les redirige une par une ; c’est inclus dans chaque refonte.' },
        { q: 'Je garde mon nom de domaine ?', a: 'Oui. Seul le site change ; votre domaine et vos e-mails restent les mêmes.' },
        { q: 'Combien coûte une refonte ?', a: 'Le même prix qu’une création : Essentiel 1 199 € HT, Signature 1 590 € HT, Sur mesure dès 2 300 € HT. La migration SEO est incluse.' },
      ],
      facts: [
        { k: 'Prix', v: 'Le même qu’une création, dès 1 199 € HT' },
        { k: 'Migration SEO', v: 'Incluse dans chaque refonte' },
        { k: 'Vous gardez', v: 'Votre nom de domaine et vos e-mails' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'refonteCheck',
          h: 'Faut-il refaire votre site ?',
          p: 'Cochez ce qui correspond à votre site actuel. Aucun de ces signes n’est grave seul ; plusieurs ensemble, ce sont des clients qui passent chez un concurrent.',
          signs: [
            'Il est pénible à lire sur un téléphone',
            'Il met plusieurs secondes à s’afficher',
            'Vous ne savez pas combien de contacts il vous apporte',
            'Il n’apparaît pas quand on cherche votre métier et votre ville',
            'Il ne ressemble plus à votre entreprise d’aujourd’hui',
            'Il tourne sur un WordPress ou des extensions que personne ne met à jour',
          ],
          countLabel: 'signes cochés',
          verdicts: {
            none: 'Cochez les signes qui vous parlent : on vous dit si une refonte se justifie.',
            few: 'Quelques points à corriger : une refonte n’est peut-être pas nécessaire. L’audit gratuit vous le dira franchement.',
            many: 'Votre site vous coûte probablement des clients. Une refonte se justifie ; l’audit gratuit chiffre ce qu’il faut garder.',
          },
        },
        {
          kind: 'keepChange',
          h: 'Ce qu’on garde, ce qui change',
          p: 'Une refonte ne repart pas de zéro : tout ce qui vous rapporte déjà est conservé. WordPress, Wix ou site d’agence daté, la méthode est la même.',
          keepH: 'Ce qu’on garde',
          keep: [
            { t: 'Votre nom de domaine', d: 'Votre adresse reste la même : vos clients vous retrouvent.' },
            { t: 'Vos adresses e-mail', d: 'Seul le site change ; vos boîtes e-mail restent en place.' },
            { t: 'Le référencement acquis', d: 'Chaque ancienne page est redirigée vers la nouvelle : Google et vos anciens liens suivent.' },
            { t: 'Les contenus qui rapportent', d: 'Textes et pages qui se positionnent déjà sont repris ou améliorés, jamais supprimés au hasard.' },
          ],
          changeH: 'Ce qui change',
          change: [
            { t: 'Le design', d: 'Une identité qui ressemble enfin à votre entreprise, pas à un thème acheté.' },
            { t: 'La vitesse', d: 'Un site léger, sans extension à maintenir, qui s’affiche vite sur mobile.' },
            { t: 'La structure', d: 'Des pages organisées autour de ce que vos clients cherchent vraiment.' },
            { t: 'La mesure', d: 'Appels et formulaires suivis dès la mise en ligne, pour comparer avant et après.' },
          ],
        },
      ],
    },
    migration: {
      metaTitle: 'Migration SEO : refonte de site sans perte de trafic | Stripwork',
      metaDesc:
        'Migration SEO lors d’une refonte : inventaire des URLs, plan de redirections 301, reprise des contenus qui se positionnent, surveillance après mise en ligne.',
      label: 'Migration SEO',
      h1: 'Migration SEO : refaire son site sans perdre son trafic',
      lead:
        'Une refonte change les adresses des pages. Sans plan de redirection, Google perd la trace de ce qui se positionnait et vos anciens liens mènent à des erreurs. La migration SEO évite ça.',
      points: [
        { t: 'Inventaire complet', d: 'Toutes les adresses de l’ancien site, y compris celles oubliées du menu.' },
        { t: 'Correspondances', d: 'Chaque ancienne page associée à la nouvelle page la plus proche.' },
        { t: 'Redirections 301', d: 'Posées côté serveur, testées une par une avant la bascule.' },
        { t: 'Contenus qui rapportent', d: 'Titres et textes qui se positionnent déjà sont conservés ou améliorés, jamais supprimés au hasard.' },
        { t: 'Après la bascule', d: 'Plan du site envoyé à Google, surveillance des erreurs et de l’indexation.' },
      ],
      pricing: { kind: 'offers' },
      proof: ['maintenancecaladoise'],
      faq: [
        { q: 'La migration est-elle facturée à part ?', a: 'Non, elle fait partie de chaque refonte.' },
        { q: 'Mon trafic va-t-il bouger ?', a: 'Des variations sont normales les premières semaines après une refonte. Un plan de redirection propre limite les pertes ; personne d’honnête ne peut promettre zéro variation.' },
      ],
      facts: [
        { k: 'Prix', v: 'Incluse dans chaque refonte' },
        { k: 'Redirections', v: 'Testées une par une avant la bascule' },
        { k: 'Après la mise en ligne', v: 'Surveillance des erreurs et de l’indexation' },
      ],
      feature: {
        kind: 'redirects',
        h: 'Chaque ancienne adresse a une nouvelle destination',
        p: 'Le cœur d’une migration, c’est ce tableau : toutes les adresses de l’ancien site, associées chacune à la page la plus proche du nouveau. Rien n’est laissé en erreur.',
        tableCaption: 'Plan de redirection — exemple',
        cols: { from: 'Ancienne adresse', to: 'Nouvelle adresse', status: 'Statut' },
        rows: [
          { from: '/nos-prestations.html', to: '/services' },
          { from: '/depannage-chaudiere.php', to: '/services/depannage' },
          { from: '/?page_id=27', to: '/contact' },
          { from: '/promo-ete-2021', to: '/services', note: 'Page supprimée : renvoyée vers la plus proche' },
        ],
        tested: 'testée',
        phases: [
          {
            h: 'Avant la bascule',
            items: [
              { t: 'Inventaire complet', d: 'Toutes les adresses de l’ancien site, y compris celles oubliées du menu.' },
              { t: 'Correspondances', d: 'Chaque ancienne page associée à la nouvelle page la plus proche.' },
              { t: 'Contenus qui rapportent', d: 'Titres et textes qui se positionnent déjà sont conservés ou améliorés, jamais supprimés au hasard.' },
            ],
          },
          {
            h: 'Le jour de la bascule',
            items: [
              { t: 'Redirections 301', d: 'Posées côté serveur, testées une par une avant l’ouverture du nouveau site.' },
              { t: 'Même domaine, mêmes e-mails', d: 'Seul le site change : votre adresse et vos boîtes e-mail restent en place.' },
            ],
          },
          {
            h: 'Les semaines suivantes',
            items: [
              { t: 'Plan du site envoyé à Google', d: 'Pour que les nouvelles pages soient explorées rapidement.' },
              { t: 'Surveillance', d: 'Erreurs, pages non indexées, redirections oubliées : repérées et corrigées.' },
            ],
          },
        ],
      },
    },
    seo: {
      metaTitle: 'Agence SEO : référencement naturel pour TPE et PME | Stripwork',
      metaDesc:
        'Agence SEO pour TPE et PME : référencement naturel, SEO technique, pages métier et ville, fiche Google, référencement IA. Intégré à chaque site, puis en suivi mensuel.',
      label: 'Référencement SEO',
      h1: 'Référencement SEO',
      lead:
        'Être trouvé sur Google par les clients qui cherchent exactement ce que vous faites, là où vous le faites. Technique, contenus, fiche Google : une agence de référencement naturel qui s’occupe de tout, du code du site au suivi des positions.',
      points: [
        { t: 'SEO technique', d: 'Indexation, vitesse, mobile, balises, données structurées : les fondations sans lesquelles rien ne se positionne.' },
        { t: 'Pages qui répondent', d: 'Une page par service et par zone, rédigée à partir de ce que vos clients tapent vraiment.' },
        { t: 'SEO local', d: 'Fiche Google complète, avis, cohérence de vos coordonnées partout sur le web.' },
        { t: 'Référencement IA', d: 'Un site clair et structuré, que ChatGPT, Perplexity et les réponses IA de Google comprennent et peuvent citer.' },
        { t: 'Suivi mensuel', d: 'Positions, visites, contacts : un point clair chaque mois, et les corrections qui vont avec.' },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: ['bachcostablanca', 'lbeg'],
      faq: [
        { q: 'En combien de temps voit-on des résultats ?', a: 'Selon la concurrence de votre métier et de votre ville, de quelques semaines à plusieurs mois. Personne ne peut garantir une position sur Google : méfiez-vous de qui le promet.' },
        { q: 'SEO ou Google Ads ?', a: 'Google Ads apporte des contacts tout de suite, tant que vous payez. Le SEO met plus de temps mais travaille ensuite sans budget publicitaire. Beaucoup de nos clients démarrent avec les deux.' },
        { q: 'Faites-vous du SEO sur un site que vous n’avez pas créé ?', a: 'Oui. On commence par un audit ; si le site freine le référencement, on vous le dit franchement.' },
      ],
      facts: [
        { k: 'Inclus', v: 'SEO technique dans chaque site livré' },
        { k: 'En continu', v: 'Abonnement SEO, 400 € HT / mois' },
        { k: 'Ce qu’on ne promet pas', v: 'Une position garantie sur Google' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'serp',
          h: 'Chaque zone de Google se travaille différemment',
          p: 'Une recherche affiche quatre types de résultats. Survolez une zone : on vous dit comment y apparaître, et quelle page vous en dit plus.',
          query: 'paysagiste lyon',
          zones: [
            { id: 'ads', label: 'Zone 1 · Annonces', t: 'Les annonces Google Ads', d: 'En haut de page dès les premiers jours, tant que la campagne tourne.', route: 'ads', link: 'Google Ads' },
            { id: 'ai', label: 'Zone 2 · Réponse IA', t: 'Les réponses générées par l’IA', d: 'Google résume et cite des sources : un site clair et structuré a une chance d’en faire partie.', route: 'seoIa', link: 'Référencement IA' },
            { id: 'map', label: 'Zone 3 · Carte', t: 'La carte et les trois entreprises', d: 'Là que se décident la plupart des appels locaux : fiche Google, avis, coordonnées cohérentes.', route: 'seoLocal', link: 'SEO local' },
            { id: 'organic', label: 'Zone 4 · Résultats naturels', t: 'Les résultats naturels', d: 'Gratuits, durables : le fruit du SEO technique et de pages qui répondent aux recherches.', route: 'auditSeo', link: 'Commencer par un audit SEO' },
          ],
          mock: {
            sponsored: 'Sponsorisé',
            adTitle: 'Paysagiste à Lyon — Devis gratuit',
            aiTitle: 'Aperçu IA',
            aiText: 'Plusieurs paysagistes interviennent à Lyon, notamment pour l’aménagement de jardins et de terrasses…',
            mapTitle: 'Entreprises',
            places: ['Votre entreprise', 'Concurrent A', 'Concurrent B'],
            organic: ['Paysagiste Lyon : création de jardins', 'Aménagement extérieur à Lyon'],
          },
          illustration: 'Illustration — résultats fictifs',
        },
        {
          kind: 'split',
          h: 'Inclus dans le site, puis en continu',
          p: 'Le SEO technique fait partie de chaque site que nous livrons. Aller plus loin est un abonnement séparé, sans lien avec le prix du site.',
          left: { tag: 'Compris dans le prix du site', h: 'Dans chaque site', items: ['Indexation, vitesse, affichage mobile', 'Balises et données structurées', 'Structure des pages pensée pour vos recherches', 'Optimisation de la fiche Google'] },
          right: { tag: '400 € HT / mois', h: 'SEO continu', items: ['Nouvelles pages et nouveaux contenus', 'Suivi des positions, des visites et des contacts', 'Un point clair chaque mois, et les corrections qui vont avec'], route: 'abonnements', link: 'Voir les abonnements' },
        },
      ],
    },
    auditSeo: {
      metaTitle: 'Audit SEO gratuit de votre site | Stripwork',
      metaDesc:
        'Audit SEO de votre site : technique, contenus, SEO local et concurrence, avec un plan d’action priorisé. Le premier audit est gratuit et sans engagement.',
      label: 'Audit SEO',
      h1: 'Audit SEO',
      lead:
        'Un état des lieux clair de votre site : ce qui bloque, ce qui manque, et ce qu’il faut corriger en premier. Le premier audit est gratuit et sans engagement.',
      points: [
        { t: 'Technique', d: 'Pages indexées ou non, vitesse, affichage mobile, erreurs, balises.' },
        { t: 'Contenus', d: 'Quelles pages existent, sur quelles recherches, et ce qui manque face à vos concurrents.' },
        { t: 'Local', d: 'Votre fiche Google : catégories, avis, photos, cohérence des coordonnées.' },
        { t: 'Concurrence', d: 'Qui apparaît devant vous, et pourquoi.' },
        { t: 'Plan d’action', d: 'Les corrections classées par impact : vous savez par où commencer, avec ou sans nous.' },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: ['bachcostablanca'],
      faq: [
        { q: 'L’audit est-il vraiment gratuit ?', a: 'Oui, et sans engagement. On vous présente les résultats au téléphone ; vous en faites ce que vous voulez.' },
        { q: 'Que dois-je fournir ?', a: 'L’adresse de votre site et, si vous l’avez, le nom de votre fiche Google. Rien d’autre pour commencer.' },
      ],
      facts: [
        { k: 'Prix', v: 'Gratuit, sans engagement' },
        { k: 'À fournir', v: 'L’adresse de votre site et votre fiche Google' },
        { k: 'Restitution', v: 'Présentée au téléphone' },
      ],
      feature: {
        kind: 'report',
        h: 'Ce que contient votre audit',
        p: 'Quatre angles d’analyse, puis un plan d’action classé par impact. Parcourez les onglets : c’est la structure exacte du rapport que vous recevez.',
        docTitle: 'Audit SEO — votre-site.fr',
        tabs: [
          { name: 'Technique', intro: 'Google peut-il lire votre site correctement ?', checks: ['Pages indexées ou non', 'Vitesse de chargement', 'Affichage sur mobile', 'Erreurs et liens cassés', 'Titres et descriptions des pages'] },
          { name: 'Contenus', intro: 'Vos pages répondent-elles aux recherches de vos clients ?', checks: ['Pages existantes et recherches visées', 'Services sans page dédiée', 'Pages en double ou trop proches', 'Ce que vos concurrents couvrent et pas vous'] },
          { name: 'Local', intro: 'Apparaissez-vous sur la carte, dans votre zone ?', checks: ['Catégories de votre fiche Google', 'Avis : nombre, régularité, réponses', 'Photos et informations de la fiche', 'Coordonnées identiques partout'] },
          { name: 'Concurrence', intro: 'Qui apparaît devant vous, et pourquoi ?', checks: ['Les entreprises devant vous sur vos recherches clés', 'Ce que leurs pages ont de plus', 'Les recherches où la place est libre'] },
        ],
        planTab: 'Plan d’action',
        planIntro: 'Les corrections classées par impact : vous savez par où commencer, avec ou sans nous.',
        plan: [
          { level: 'À corriger d’abord', items: ['Pages importantes absentes de Google', 'Fiche Google dans la mauvaise catégorie'] },
          { level: 'Ensuite', items: ['Une page par service principal', 'Titres de pages à réécrire'] },
          { level: 'Quand vous avez le temps', items: ['Photos de la fiche à renouveler', 'Liens entre les pages à renforcer'] },
        ],
        example: 'Exemples de lignes : le contenu dépend de votre site.',
      },
    },
    seoLocal: {
      metaTitle: 'SEO local : apparaître sur Google Maps dans votre ville | Stripwork',
      metaDesc:
        'SEO local pour artisans et commerces : fiche Google Business Profile, avis, pages ville, données structurées. Soyez trouvé par les clients de votre zone.',
      label: 'SEO local',
      h1: 'SEO local',
      lead:
        'Apparaître sur la carte Google et dans les résultats « près de chez moi » de votre ville : c’est là que se décident la plupart des appels pour un artisan ou un commerce.',
      points: [
        { t: 'Fiche Google complète', d: 'Catégories justes, services, zone, horaires, photos, publications.' },
        { t: 'Avis', d: 'Une méthode simple pour demander des avis à vos clients satisfaits, et y répondre.' },
        { t: 'Pages ville', d: 'Une page utile par zone que vous couvrez vraiment, pas des copies qui changent seulement le nom de la ville.' },
        { t: 'Coordonnées cohérentes', d: 'Même nom, même adresse, même téléphone partout : site, fiche, annuaires.' },
        { t: 'Données structurées', d: 'Le type d’entreprise, la zone et les services décrits pour Google dans le code du site.' },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: ['lbeg', 'sbpaysagiste'],
      faq: [
        { q: 'Je n’ai pas de local, puis-je apparaître sur la carte ?', a: 'Oui : une entreprise qui se déplace chez ses clients peut déclarer une zone d’intervention au lieu d’une adresse visible.' },
        { q: 'Faut-il beaucoup d’avis ?', a: 'Des avis réguliers et authentiques comptent plus qu’un gros volume ancien. On ne fabrique jamais d’avis.' },
      ],
      facts: [
        { k: 'Pour', v: 'Artisans, commerces, professions libérales' },
        { k: 'Suivi', v: 'Abonnement SEO, 400 € HT / mois' },
        { k: 'Sans local ?', v: 'Une zone d’intervention suffit' },
      ],
      feature: {
        kind: 'localpack',
        h: 'Ce que nous travaillons sur votre fiche',
        p: 'Sur une recherche locale, Google montre une carte et trois entreprises. Chaque élément de ce bloc se travaille. Survolez ou touchez un point pour le voir sur la fiche.',
        search: 'électricien près de chez moi',
        you: {
          name: 'Votre entreprise',
          category: 'Électricien',
          zone: 'Lyon et alentours',
          hours: 'Ouvert · ferme à 19:00',
          reviews: 'Avis récents',
          actions: ['Appeler', 'Site web', 'Itinéraire'],
        },
        others: [
          { name: 'Concurrent A', category: 'Électricien' },
          { name: 'Concurrent B', category: 'Électricien' },
        ],
        code: '{ "@type": "Electrician", "areaServed": "Lyon" }',
        notes: [
          { part: 'fiche', t: 'Fiche Google complète', d: 'Catégories justes, services, zone, horaires, photos, publications.' },
          { part: 'avis', t: 'Avis', d: 'Une méthode simple pour demander des avis à vos clients satisfaits, et y répondre. On ne fabrique jamais d’avis.' },
          { part: 'pages', t: 'Pages ville', d: 'Le lien « Site web » mène à une page utile pour la zone cherchée, pas à une copie qui change seulement le nom de la ville.' },
          { part: 'nap', t: 'Coordonnées cohérentes', d: 'Même nom, même adresse, même téléphone partout : site, fiche, annuaires.' },
          { part: 'data', t: 'Données structurées', d: 'Le type d’entreprise, la zone et les services décrits pour Google dans le code du site.' },
        ],
        illustration: 'Illustration — entreprises fictives',
      },
    },
    seoIa: {
      metaTitle: 'Référencement IA : être cité par ChatGPT et Google IA | Stripwork',
      metaDesc:
        'Référencement sur les IA (ChatGPT, Perplexity, réponses IA de Google) : contenus qui répondent aux questions, données structurées, informations claires sur votre entreprise.',
      label: 'Référencement IA',
      h1: 'Référencement IA : être cité par ChatGPT, Perplexity et Google',
      lead:
        'Vos clients posent aussi leurs questions à des assistants IA. On structure votre site pour qu’il soit compris, et qu’il ait une chance d’être cité dans leurs réponses.',
      points: [
        { t: 'Réponses directes', d: 'Des pages qui répondent clairement aux questions réelles de vos clients, sans détour.' },
        { t: 'Identité claire', d: 'Qui vous êtes, ce que vous faites, où : dit simplement et de la même façon partout.' },
        { t: 'Données structurées', d: 'Entreprise, services, FAQ décrits dans le code, lisibles par les moteurs et les IA.' },
        { t: 'Présence ailleurs', d: 'Fiche Google, annuaires, mentions : les IA croisent les sources avant de citer quelqu’un.' },
      ],
      sections: [
        {
          h: 'Ce qu’on ne promet pas',
          p: [
            'Personne ne contrôle ce que répond une IA. Le référencement IA consiste à mettre toutes les chances de votre côté, avec les mêmes fondations qu’un bon SEO.',
          ],
        },
      ],
      pricing: { kind: 'plan', id: 'seo' },
      proof: [],
      faq: [
        { q: 'Est-ce différent du SEO classique ?', a: 'Les fondations sont les mêmes. Ce qui change : l’importance des réponses directes, des informations cohérentes et des sources qui parlent de vous.' },
      ],
      facts: [
        { k: 'Assistants visés', v: 'ChatGPT, Perplexity, réponses IA de Google' },
        { k: 'Base', v: 'Les mêmes fondations qu’un bon SEO' },
        { k: 'Ce qu’on ne promet pas', v: 'Une citation garantie' },
      ],
      feature: {
        kind: 'aiAnswer',
        h: 'Comment une IA choisit qui citer',
        p: 'Une réponse d’assistant s’appuie sur des pages claires et des sources qui se recoupent. Survolez ou touchez un point pour voir d’où vient chaque partie de la réponse.',
        assistant: 'Assistant IA',
        question: 'Quel électricien peut installer une borne de recharge à Lyon ?',
        answer: [
          { text: 'Plusieurs entreprises interviennent à Lyon. ' },
          { text: 'Votre entreprise', part: 'identity' },
          { text: ' installe des bornes de recharge pour les particuliers, avec un devis sur photo', part: 'direct', cite: 1 },
          { text: '. Elle est présente sur Google avec des avis récents', part: 'elsewhere', cite: 2 },
          { text: ' et référencée dans des annuaires professionnels', part: 'elsewhere', cite: 3 },
          { text: '.' },
        ],
        sources: [
          { label: 'votre-site.fr/borne-de-recharge', part: 'data' },
          { label: 'Fiche Google', part: 'elsewhere' },
          { label: 'Annuaire professionnel', part: 'elsewhere' },
        ],
        notes: [
          { part: 'direct', t: 'Réponses directes', d: 'Des pages qui répondent clairement aux questions réelles de vos clients, sans détour.' },
          { part: 'identity', t: 'Identité claire', d: 'Qui vous êtes, ce que vous faites, où : dit simplement et de la même façon partout.' },
          { part: 'data', t: 'Données structurées', d: 'Entreprise, services, FAQ décrits dans le code, lisibles par les moteurs et les IA.' },
          { part: 'elsewhere', t: 'Présence ailleurs', d: 'Fiche Google, annuaires, mentions : les IA croisent les sources avant de citer quelqu’un.' },
        ],
        illustration: 'Illustration — réponse et entreprise fictives',
      },
    },
    ads: {
      metaTitle: 'Agence Google Ads : gestion de campagnes pour TPE et PME | Stripwork',
      metaDesc:
        'Agence Google Ads pour TPE et PME : campagnes créées et pilotées par le studio qui a fait votre site : mots-clés locaux, annonces, landing page, suivi des appels. 400 € HT par mois, hors budget publicitaire.',
      label: 'Google Ads',
      h1: 'Gestion Google Ads',
      lead:
        'Des appels et des demandes dès les premiers jours, pendant que le référencement naturel monte. Des campagnes créées et pilotées par le studio qui a construit votre site.',
      points: [
        { t: 'Campagnes locales', d: 'Vos services, votre zone, vos horaires : on paie pour les recherches qui peuvent devenir des clients.' },
        { t: 'Mots-clés et exclusions', d: 'Les recherches qui convertissent, et la liste de celles qu’on exclut pour ne pas gaspiller le budget.' },
        { t: 'Annonces', d: 'Rédigées à partir de ce qui vous distingue réellement, testées en plusieurs versions.' },
        { t: 'La bonne page', d: 'Chaque annonce mène à la page qui répond, souvent une landing page dédiée.' },
        { t: 'Suivi des conversions', d: 'Appels et formulaires comptés : on pilote sur les contacts, pas sur les clics.' },
        { t: 'Ajustements chaque mois', d: 'Enchères, mots-clés, annonces : revus chaque mois, avec un point clair pour vous.' },
      ],
      pricing: { kind: 'plan', id: 'ads' },
      proof: ['mghypnose'],
      faq: [
        { q: 'Quel budget publicitaire prévoir ?', a: 'Il dépend de votre métier, de votre zone et de la concurrence. Après l’audit, on vous propose un budget de départ chiffré ; il est payé directement à Google.' },
        { q: 'Le compte Google Ads m’appartient-il ?', a: 'Le compte est à votre nom : vous gardez l’historique et les données.' },
        { q: 'Vous gérez des campagnes existantes ?', a: 'Oui. On commence par un audit du compte pour voir où part le budget.' },
      ],
      facts: [
        { k: 'Notre travail', v: '400 € HT / mois' },
        { k: 'Budget publicitaire', v: 'Payé directement à Google' },
        { k: 'Le compte', v: 'À votre nom, avec son historique' },
      ],
      keepPoints: true,
      feature: [
        {
          kind: 'adsVsSeo',
          h: 'Google Ads, SEO, ou les deux ?',
          p: 'Les deux ne travaillent pas au même rythme. Choisissez une stratégie pour voir comment arrivent les contacts.',
          ads: { name: 'Google Ads seul', d: 'Des contacts dès les premiers jours, tant que vous payez. Quand la campagne s’arrête, les contacts s’arrêtent aussi.' },
          seo: { name: 'SEO seul', d: 'Plus lent à démarrer, de quelques semaines à plusieurs mois selon la concurrence, mais il travaille ensuite sans budget publicitaire.' },
          both: { name: 'Les deux', d: 'Google Ads apporte des contacts tout de suite pendant que le référencement monte. C’est le choix de beaucoup de nos clients.' },
          axis: { time: 'temps →', contacts: 'contacts' },
          caption: 'Schéma de principe, sans échelle : chaque métier et chaque ville ont leur propre rythme.',
        },
        {
          kind: 'router',
          h: 'Par où commencer ?',
          p: 'Selon votre situation, la première étape n’est pas la même.',
          paths: [
            { if: 'Vous n’avez jamais fait de publicité', t: 'Gestion de campagnes', d: 'On construit vos campagnes de zéro, on les suit et on les ajuste chaque mois.', route: 'adsGestion', link: 'Voir la gestion' },
            { if: 'Vous avez déjà des campagnes', t: 'Audit Google Ads', d: 'On regarde gratuitement où part votre budget avant de toucher à quoi que ce soit.', route: 'adsAudit', link: 'Voir l’audit' },
            { if: 'Vos annonces mènent à votre page d’accueil', t: 'Landing page', d: 'Une page dédiée qui reprend la promesse de l’annonce et mène à l’appel.', route: 'landing', link: 'Voir la landing page' },
          ],
        },
      ],
    },
    adsGestion: {
      metaTitle: 'Gestion de campagnes Google Ads | 400 € HT/mois | Stripwork',
      metaDesc:
        'Création et gestion de vos campagnes Google Ads : structure, mots-clés, annonces, suivi des appels et formulaires, optimisation mensuelle. 400 € HT par mois hors budget.',
      label: 'Gestion de campagnes',
      h1: 'Gestion de campagnes Google Ads',
      lead:
        'On construit vos campagnes, on les suit et on les ajuste chaque mois. Vous recevez des contacts et un point clair sur ce qu’ils ont coûté.',
      points: [
        { t: 'Mise en place', d: 'Structure des campagnes, zones, horaires, mots-clés, exclusions, annonces, extensions.' },
        { t: 'Suivi des contacts', d: 'Appels depuis l’annonce, appels depuis le site, formulaires : tout est mesuré.' },
        { t: 'Optimisation', d: 'Termes de recherche relus, enchères ajustées, annonces testées.' },
        { t: 'Point mensuel', d: 'Ce qui a été dépensé, ce qui a été obtenu, ce qu’on change le mois suivant.' },
      ],
      pricing: { kind: 'plan', id: 'ads' },
      proof: ['mghypnose'],
      faq: [
        { q: 'Le budget publicitaire est-il inclus dans les 400 € ?', a: 'Non. Les 400 € HT couvrent notre travail ; le budget publicitaire est payé directement à Google, selon le montant que vous choisissez.' },
      ],
      facts: [
        { k: 'Notre travail', v: '400 € HT / mois' },
        { k: 'Budget publicitaire', v: 'Payé directement à Google, montant choisi par vous' },
        { k: 'Rendez-vous', v: 'Un point clair chaque mois' },
      ],
      feature: {
        kind: 'adsChain',
        h: 'De la recherche à l’appel, chaque maillon suivi',
        p: 'Une campagne ne se résume pas à une annonce : on travaille toute la chaîne, de la recherche tapée dans Google jusqu’au contact mesuré.',
        ad: {
          sponsored: 'Sponsorisé',
          url: 'votre-site.fr/depannage',
          title: 'Dépannage électrique à Lyon — Devis gratuit',
          desc: 'Intervention chez les particuliers et les professionnels. Appelez ou envoyez une photo de votre installation.',
          call: 'Appeler',
        },
        steps: [
          { t: 'La recherche', d: 'Mots-clés, zones, horaires et exclusions : l’annonce ne s’affiche que pour les bonnes recherches.' },
          { t: 'L’annonce', d: 'Textes, extensions d’appel et de lien : testés et ajustés chaque mois.' },
          { t: 'La page d’arrivée', d: 'Une page qui reprend la promesse de l’annonce et mène à l’appel.' },
          { t: 'Le contact mesuré', d: 'Appels depuis l’annonce, appels depuis le site, formulaires : tout est compté.' },
          { t: 'Le point mensuel', d: 'Ce qui a été dépensé, ce qui a été obtenu, ce qu’on change le mois suivant.' },
        ],
        budgetH: 'Deux montants, jamais mélangés',
        budgetP: 'Notre forfait est fixe. Le budget publicitaire, c’est vous qui le choisissez : il est prélevé directement par Google, sans marge de notre part.',
        ours: 'Notre travail',
        google: 'Budget Google',
        slider: 'Budget publicitaire choisi :',
        total: 'Total mensuel',
        perMonth: 'HT / mois',
        illustration: 'Illustration — annonce fictive',
      },
    },
    adsAudit: {
      metaTitle: 'Audit Google Ads gratuit | Stripwork',
      metaDesc:
        'Audit de votre compte Google Ads : mots-clés, termes de recherche, suivi des conversions, pages de destination. Découvrez où part votre budget. Gratuit.',
      label: 'Audit Google Ads',
      h1: 'Audit Google Ads',
      lead:
        'Vous avez déjà des campagnes ? On regarde où part votre budget : mots-clés, recherches réelles, suivi des conversions, pages d’arrivée. Gratuit, dans le cadre de l’audit.',
      points: [
        { t: 'Recherches réelles', d: 'Les requêtes qui ont vraiment déclenché vos annonces, et celles qui ne servaient à rien.' },
        { t: 'Suivi des conversions', d: 'Est-ce que vos appels et formulaires sont bien comptés ? Souvent, non.' },
        { t: 'Structure', d: 'Campagnes, groupes, zones, horaires : ce qui disperse le budget.' },
        { t: 'Pages d’arrivée', d: 'La page vers laquelle vous payez pour envoyer vos visiteurs les convainc-t-elle ?' },
      ],
      pricing: { kind: 'plan', id: 'ads' },
      proof: ['mghypnose'],
      faq: [
        { q: 'Faut-il vous donner accès à mon compte ?', a: 'Un accès en lecture suffit, et vous pouvez le retirer à tout moment.' },
      ],
      facts: [
        { k: 'Prix', v: 'Gratuit, dans le cadre de l’audit' },
        { k: 'Accès', v: 'Lecture seule, retirable à tout moment' },
        { k: 'On regarde', v: 'Recherches, conversions, structure, pages' },
      ],
      feature: {
        kind: 'selfCheck',
        h: 'Quatre questions avant l’audit',
        p: 'Répondez honnêtement : chaque « non » ou « je ne sais pas » est un endroit où votre budget peut fuir.',
        answers: { yes: 'Oui', no: 'Non', unsure: 'Je ne sais pas' },
        questions: [
          { q: 'Connaissez-vous les recherches qui ont réellement déclenché vos annonces ?', why: 'Le rapport des termes de recherche montre souvent des clics payés sur des requêtes sans rapport avec votre métier.' },
          { q: 'Vos appels et formulaires sont-ils comptés dans Google Ads ?', why: 'Sans suivi des conversions, Google optimise vos enchères à l’aveugle. C’est le défaut le plus fréquent.' },
          { q: 'Vos campagnes ciblent-elles uniquement votre zone et vos horaires utiles ?', why: 'Des zones trop larges ou des annonces la nuit dispersent le budget sur des contacts inexploitables.' },
          { q: 'Votre page d’arrivée reprend-elle exactement ce que promet l’annonce ?', why: 'Payer un clic pour envoyer le visiteur sur une page générique, c’est perdre une partie de ce clic.' },
        ],
        result: {
          none: 'Votre compte semble bien tenu. L’audit confirmera, chiffres à l’appui.',
          some: 'Au moins un point mérite d’être vérifié : l’audit gratuit vous dira ce qu’il coûte.',
          all: 'Votre budget travaille probablement à l’aveugle. C’est exactement ce que l’audit gratuit met au clair.',
          cta: 'Demander l’audit gratuit',
        },
        termsH: 'Ce que l’audit regarde en premier : les recherches réelles',
        termsCaption: 'Rapport des termes de recherche — exemple pour un électricien',
        termsCols: { term: 'Recherche tapée', verdict: 'Verdict' },
        terms: [
          { term: 'électricien lyon 7', useful: true, why: 'Métier et zone : exactement la bonne intention.' },
          { term: 'dépannage électrique urgence', useful: true, why: 'Besoin immédiat, forte chance d’appel.' },
          { term: 'formation électricien', useful: false, why: 'Cherche une formation, pas un artisan : à exclure.' },
          { term: 'électricien salaire', useful: false, why: 'Recherche d’emploi : clic payé pour rien.' },
        ],
        useful: 'Utile',
        wasted: 'Budget perdu',
      },
    },
  },

  metiers: {
    chauffagiste: {
      metaTitle: 'Création de site internet pour chauffagiste | Stripwork',
      metaDesc:
        'Site internet pour chauffagiste et plombier-chauffagiste : dépannage visible, entretien de chaudière, zone d’intervention, appel en un geste, SEO local. Dès 1 199 € HT.',
      label: 'Chauffagiste',
      rubrique: 'Chauffagistes',
      h1: 'Création de site internet pour chauffagiste',
      lead:
        'Quand une chaudière tombe en panne, le client appelle le premier chauffagiste qui inspire confiance sur son téléphone. Votre site doit être celui-là.',
      searches: ['dépannage chaudière [ville]', 'entretien chaudière gaz [ville]', 'installation pompe à chaleur', 'chauffagiste près de chez moi'],
      features: [
        { t: 'Appel en un geste', d: 'Barre d’appel fixe sur mobile : en panne, personne ne remplit un formulaire.' },
        { t: 'Dépannage et entretien séparés', d: 'L’urgence d’un côté, le contrat d’entretien de l’autre : deux besoins, deux parcours.' },
        { t: 'Zone d’intervention claire', d: 'Les communes couvertes, lisibles par le client et par Google.' },
        { t: 'Marques et équipements', d: 'Les chaudières, pompes à chaleur et climatisations que vous installez ou entretenez.' },
        { t: 'Demande avec photo', d: 'Le client joint une photo de la plaque de sa chaudière : vous arrivez avec la bonne pièce.' },
      ],
      proof: ['maintenancecaladoise'],
      live: ['BP Maintenance'],
      faq: [
        { q: 'Faut-il une page par commune ?', a: 'Seulement pour les communes où vous intervenez vraiment et où il y a quelque chose d’utile à dire. Dix pages identiques qui changent le nom de la ville nuisent plus qu’elles n’aident.' },
        { q: 'Google Ads est-il utile pour un chauffagiste ?', a: 'Pour le dépannage, souvent oui : la recherche est urgente et locale. On règle les horaires de diffusion sur vos disponibilités réelles.' },
      ],
    },
    electricien: {
      metaTitle: 'Création de site internet pour électricien | Stripwork',
      metaDesc:
        'Site internet pour électricien : dépannage, mise aux normes, rénovation, demande de devis avec photos, SEO local et avis Google. Sur mesure dès 1 199 € HT.',
      label: 'Électricien',
      rubrique: 'Électriciens',
      h1: 'Création de site internet pour électricien',
      lead:
        'Dépannage, mise aux normes, rénovation : vos clients cherchent un électricien fiable près de chez eux. Le site doit le prouver en quelques secondes.',
      searches: ['électricien dépannage [ville]', 'mise aux normes tableau électrique', 'installation borne de recharge', 'électricien près de chez moi'],
      features: [
        { t: 'Parcours urgence', d: 'Coupure, disjoncteur qui saute : le numéro et la marche à suivre visibles immédiatement.' },
        { t: 'Vos prestations lisibles', d: 'Une page par grand type de travaux, pour le client et pour Google.' },
        { t: 'Devis avec photos', d: 'Le client photographie son tableau ou son installation : votre devis est plus juste.' },
        { t: 'Avis Google', d: 'Vos vrais avis, cités mot pour mot, là où le client hésite.' },
        { t: 'Une identité à part', d: 'Dans un métier où les sites se ressemblent, une direction artistique qui se retient.' },
      ],
      proof: ['lbeg'],
      live: [],
      faq: [
        { q: 'Mes qualifications peuvent-elles apparaître ?', a: 'Oui, celles que vous détenez réellement, avec leur justificatif. On n’affiche rien que vous ne puissiez prouver.' },
      ],
    },
    hypnotherapeute: {
      metaTitle: 'Création de site internet pour hypnothérapeute | Stripwork',
      metaDesc:
        'Site internet pour hypnothérapeute : déroulé de séance, prise de rendez-vous, avis, SEO local « hypnothérapeute + ville ». Sur mesure dès 1 199 € HT.',
      label: 'Hypnothérapeute',
      rubrique: 'Hypnothérapeutes',
      h1: 'Création de site internet pour hypnothérapeute',
      lead:
        'Avant de réserver une séance, on veut savoir qui va nous recevoir et comment ça se passe. Le site rassure d’abord, puis rend la prise de rendez-vous évidente.',
      searches: ['hypnothérapeute [ville]', 'hypnose arrêt tabac [ville]', 'hypnose stress anxiété', 'séance hypnose prix'],
      features: [
        { t: 'Vous, d’abord', d: 'Votre parcours, votre approche, votre cabinet : la personne avant la prestation.' },
        { t: 'Le déroulé d’une séance', d: 'Durée, étapes, tarifs : ce qui lève les doutes avant l’appel.' },
        { t: 'Rendez-vous en deux clics', d: 'Resalib, Doctolib, téléphone ou formulaire : le moyen que vous utilisez déjà.' },
        { t: 'Un ton juste', d: 'Aucune promesse de guérison : des accompagnements décrits honnêtement, dans le respect de votre cadre.' },
        { t: 'SEO local', d: 'Une page par accompagnement (stress, sommeil, tabac…) pour les recherches précises de votre ville.' },
      ],
      proof: ['mghypnose'],
      live: ['Claire Larnicol'],
      faq: [
        { q: 'Peut-on afficher mes avis Google ?', a: 'Oui, cités mot pour mot. Aucun avis n’est inventé ni retouché.' },
      ],
    },
    industrie: {
      metaTitle: 'Création de site internet industriel et B2B | Stripwork',
      metaDesc:
        'Site internet pour PME industrielles et B2B : expertises, parc machines, études de cas, demande de devis avec envoi de plans, SEO sur vos métiers techniques. Dès 2 300 € HT.',
      label: 'Industrie & B2B',
      rubrique: 'Industrie & B2B',
      h1: 'Création de site internet industriel et B2B',
      lead:
        'Vos donneurs d’ordre vérifient votre site avant de vous consulter. Il doit montrer l’atelier, les capacités et les références, et faciliter l’envoi d’un plan.',
      searches: ['chaudronnerie [région]', 'sous-traitance usinage', 'métallerie sur mesure', 'tuyauterie industrielle'],
      features: [
        { t: 'Expertises détaillées', d: 'Une page par savoir-faire, avec les vrais termes du métier que vos acheteurs recherchent.' },
        { t: 'Atelier et parc machines', d: 'Vos capacités réelles, décrites précisément : c’est souvent ce qui déclenche la consultation.' },
        { t: 'Études de cas', d: 'Problème, solution, pièce livrée : la preuve qu’un acheteur transmet en interne.' },
        { t: 'Envoi de plans', d: 'Formulaire de consultation avec pièces jointes (plans, cahier des charges).' },
        { t: 'Multilingue', d: 'Si vous travaillez à l’export, le site peut l’être aussi.' },
      ],
      proof: ['corgier'],
      live: [],
      faq: [
        { q: 'Quelle offre pour un site industriel ?', a: 'En général l’offre Sur mesure, à partir de 2 300 € HT, à cause du volume de contenu. Le devis précise tout après l’audit.' },
      ],
    },
    naturopathe: {
      metaTitle: 'Création de site internet pour naturopathe | Stripwork',
      metaDesc:
        'Site internet pour naturopathe : consultations, bilans, ateliers, prise de rendez-vous, avis Google et SEO local. Un ton juste, dans le cadre non médical. Dès 1 199 € HT.',
      label: 'Naturopathe',
      rubrique: 'Naturopathes',
      h1: 'Création de site internet pour naturopathe',
      lead:
        'Vos futurs clients cherchent quelqu’un de sérieux, près de chez eux, qui comprend leur situation. Le site présente votre approche avec justesse et facilite le premier rendez-vous.',
      searches: ['naturopathe [ville]', 'naturopathe ménopause', 'consultation naturopathie prix', 'atelier naturopathie'],
      features: [
        { t: 'Vos accompagnements', d: 'Une page par thème que vous accompagnez vraiment, pour les recherches précises.' },
        { t: 'Déroulé et tarifs', d: 'Première consultation, suivi, durée, prix : la transparence qui fait réserver.' },
        { t: 'Ateliers', d: 'Dates, lieux et inscription, mis à jour simplement.' },
        { t: 'Cadre clair', d: 'La naturopathie présentée comme complémentaire, sans promesse médicale.' },
        { t: 'Rendez-vous facile', d: 'Votre outil de réservation habituel, intégré proprement.' },
      ],
      proof: [],
      live: ['Anne-Charlotte Girard'],
      faq: [
        { q: 'Et si je propose d’autres pratiques ?', a: 'Réflexologie, aromathérapie, massages : chacune peut avoir sa page si vous la pratiquez réellement.' },
      ],
    },
    paysagiste: {
      metaTitle: 'Création de site internet pour paysagiste | Stripwork',
      metaDesc:
        'Site internet pour paysagiste : réalisations en avant/après, création et entretien de jardins, zone d’intervention, demande de devis, SEO local. Dès 1 199 € HT.',
      label: 'Paysagiste',
      rubrique: 'Paysagistes',
      h1: 'Création de site internet pour paysagiste',
      lead:
        'Un jardin se vend en images. Le site montre ce que vous transformez, du terrain brut au jardin fini, et amène la demande de devis.',
      searches: ['paysagiste [ville]', 'création jardin', 'entretien espaces verts', 'aménagement terrasse jardin'],
      features: [
        { t: 'Avant / après', d: 'Vos chantiers réels en comparaison : la preuve la plus parlante de votre métier.' },
        { t: 'Création et entretien', d: 'Deux clientèles, deux parcours : le projet d’aménagement et le contrat d’entretien.' },
        { t: 'Une scène qui raconte', d: 'Avec l’offre Signature, une animation qui montre le jardin prendre forme.' },
        { t: 'Zone et saison', d: 'Les communes couvertes et ce qui se fait à chaque saison.' },
        { t: 'Devis avec photos', d: 'Le client envoie des photos de son terrain dès la demande.' },
      ],
      proof: ['sbpaysagiste', 'duvertaubalcon'],
      live: [],
      faq: [
        { q: 'Je n’ai pas de belles photos de mes chantiers.', a: 'On vous indique quoi photographier et comment, dès le prochain chantier. Les photos réelles battent toujours les images de banque.' },
      ],
    },
    restaurant: {
      metaTitle: 'Création de site internet pour restaurant | Stripwork',
      metaDesc:
        'Site internet pour restaurant, traiteur ou chef à domicile : carte lisible sur mobile, réservation, horaires, fiche Google, version multilingue. Dès 1 199 € HT.',
      label: 'Restaurant',
      rubrique: 'Restaurants',
      h1: 'Création de site internet pour restaurant',
      lead:
        'On choisit un restaurant sur son téléphone, souvent à la dernière minute. Carte, horaires, réservation : tout doit être lisible en un coup d’œil.',
      searches: ['restaurant [ville]', 'traiteur [ville]', 'pizza à domicile événement', 'restaurant ouvert dimanche'],
      features: [
        { t: 'Carte en texte', d: 'Pas de PDF illisible sur mobile : une carte que Google peut lire aussi.' },
        { t: 'Réservation directe', d: 'Téléphone, formulaire ou votre outil de réservation, sans détour.' },
        { t: 'Horaires à jour', d: 'Les mêmes sur le site et sur votre fiche Google.' },
        { t: 'Plusieurs langues', d: 'En zone touristique, une version dans la langue de vos clients.' },
        { t: 'Photos qui donnent faim', d: 'Vos plats et votre salle, jamais des images génériques.' },
      ],
      proof: [],
      live: ['NapoliForno'],
      faq: [
        { q: 'Un site est-il utile si j’ai déjà une fiche Google ?', a: 'La fiche fait venir, le site convainc et fait réserver : carte complète, événements, privatisation. Les deux se renforcent.' },
      ],
    },
  },

  articles: {
    prix: {
      metaTitle: 'Prix d’un site vitrine en 2026 : ce que vous payez vraiment | Stripwork',
      metaDesc:
        'Combien coûte un site vitrine en 2026 ? Fourchettes du marché (freelance, agence), ce qui fait varier le prix, les coûts cachés et nos tarifs affichés.',
      label: 'Prix d’un site vitrine',
      h1: 'Prix d’un site vitrine en 2026 : ce que vous payez vraiment',
      date: '2026-09-24',
      lead:
        'Entre 500 € et 8 000 €, les devis pour un site vitrine vont du simple au décuple. Voici ce qui explique l’écart, et comment comparer.',
      sections: [
        {
          h: 'Les fourchettes du marché',
          p: [
            'Selon plusieurs études publiées en 2026, un site vitrine réalisé par un freelance se situe le plus souvent entre 1 500 € et 4 500 €, et entre 3 500 € et 8 000 € en agence. Le tarif journalier moyen d’un freelance tourne autour de 420 € selon le baromètre Malt cité par ces études.',
          ],
        },
        {
          h: 'Ce qui fait varier le prix',
          p: ['À nombre de pages égal, l’écart vient surtout de ce qui est compris :'],
          list: [
            'Design sur mesure ou thème acheté et adapté',
            'SEO réellement travaillé (structure, balises, données structurées) ou simple mise en ligne',
            'Textes rédigés pour le référencement ou fournis par vous',
            'Fonctionnalités : réservation, formulaires avancés, multilingue',
            'Suivi des contacts installé ou non',
          ],
        },
        {
          h: 'Les coûts qu’on oublie',
          p: [
            'Le nom de domaine (quelques euros à une quinzaine d’euros par an), l’hébergement, la maintenance et les éventuelles licences d’extensions. Sur un site WordPress, les mises à jour régulières font partie du coût réel.',
          ],
        },
        {
          h: 'Nos prix, affichés',
          p: [
            'Chez Stripwork : Essentiel à 1 199 € HT (jusqu’à 5 pages, design sur mesure, SEO technique complet, fiche Google), Signature à 1 590 € HT (jusqu’à 10 pages, animation propre au métier, textes SEO), Sur mesure à partir de 2 300 € HT. Le domaine reste à votre nom et à vos frais ; l’hébergement-maintenance est optionnel à 29 € HT par mois.',
            'Et si vous nous recommandez : chaque entreprise recommandée qui tient un rendez-vous avec nous retire 10 % du prix de votre site, jusqu’à -50 %.',
          ],
        },
        {
          h: 'Les questions à poser avant de signer',
          p: ['Pour comparer deux devis, demandez :'],
          list: [
            'Le nom de domaine sera-t-il à mon nom ?',
            'Le SEO technique est-il inclus, et en quoi consiste-t-il ?',
            'Qui rédige les textes ?',
            'Que se passe-t-il après la mise en ligne : qui modifie, combien ça coûte ?',
            'Puis-je voir des sites que vous avez réalisés et qui sont en ligne ?',
          ],
        },
      ],
      sources: [
        { label: 'Fenxi — Prix d’un site vitrine 2026', url: 'https://fenxi.fr/blog/combien-coute-site-internet-2026-prix-delais/' },
        { label: 'ipaoo — Prix d’un site vitrine en 2026', url: 'https://www.ipaoo.fr/creer-un-site-vitrine/prix/' },
        { label: 'Trend Design — Prix d’un site vitrine', url: 'https://www.trend-design.fr/post/prix-site-vitrine' },
      ],
      related: ['tarifs', 'vitrine', 'parrainage'],
    },
    'refonte-seo': {
      metaTitle: 'Refonte de site : ne pas perdre son référencement | Stripwork',
      metaDesc:
        'Refaire son site sans perdre ses positions Google : inventaire des pages, redirections 301, contenus à conserver, vérifications après la mise en ligne.',
      label: 'Refonte sans perdre son référencement',
      h1: 'Refonte de site : comment ne pas perdre son référencement',
      date: '2026-09-24',
      lead:
        'Une refonte mal préparée peut effacer en quelques jours des années de référencement. La cause est presque toujours la même : des adresses de pages qui changent sans redirection.',
      sections: [
        {
          h: 'Pourquoi une refonte fait chuter le trafic',
          p: [
            'Google connaît vos pages par leur adresse. Si « /nos-services/plomberie » devient « /plomberie » sans redirection, l’ancienne adresse renvoie une erreur 404 : Google finit par l’oublier, avec les positions et les liens qu’elle avait gagnés.',
          ],
        },
        {
          h: 'Les étapes d’une migration propre',
          p: ['Avant, pendant et après la bascule :'],
          list: [
            'Lister toutes les adresses de l’ancien site, y compris celles absentes du menu',
            'Repérer les pages qui reçoivent des visites et se positionnent',
            'Associer chaque ancienne adresse à la nouvelle page la plus proche',
            'Poser des redirections 301 et les tester avant la mise en ligne',
            'Conserver ou améliorer les contenus qui se positionnent',
            'Envoyer le nouveau plan du site à Google et surveiller les erreurs',
          ],
        },
        {
          h: 'À quoi s’attendre',
          p: [
            'De légères variations les premières semaines sont normales. Avec un plan de redirection complet, le site retrouve en général ses positions, puis progresse grâce à un meilleur site. Personne ne peut garantir zéro variation.',
          ],
        },
      ],
      related: ['refonte', 'migration', 'auditSeo'],
    },
  },

  legal: {
    mentions: {
      metaTitle: 'Mentions légales | Stripwork',
      label: 'Mentions légales',
      h1: 'Mentions légales',
      sections: [
        {
          h: 'Éditeur du site',
          p: [
            'Stripwork — [À CONFIRMER : forme juridique, raison sociale]',
            'Siège : [À CONFIRMER : adresse]',
            'SIRET : [À CONFIRMER] · TVA intracommunautaire : [À CONFIRMER]',
            'Directeur de la publication : [À CONFIRMER]',
            'Contact : contact@stripwork.com',
          ],
        },
        {
          h: 'Hébergement',
          p: ['Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com'],
        },
        {
          h: 'Propriété intellectuelle',
          p: [
            'Les textes, la mise en page et les éléments graphiques de ce site sont la propriété de Stripwork. Les captures des réalisations présentées appartiennent à leurs titulaires respectifs.',
          ],
        },
      ],
    },
    confidentialite: {
      metaTitle: 'Politique de confidentialité | Stripwork',
      label: 'Confidentialité',
      h1: 'Politique de confidentialité',
      sections: [
        {
          h: 'Données collectées',
          p: [
            'Ce que vous saisissez dans nos formulaires : nom, entreprise, e-mail, téléphone, site actuel, message et, le cas échéant, le nom de la personne qui vous recommande.',
            'Avec votre demande, nous recevons aussi sa provenance : la page par laquelle vous êtes arrivé sur le site, le site d’où vous veniez, et les paramètres de campagne présents dans le lien (utm, identifiant de clic Google Ads ou Meta). Rien de cela n’est transmis si vous n’envoyez pas de formulaire.',
          ],
        },
        {
          h: 'Utilisation',
          p: [
            'Ces données servent à répondre à votre demande, à préparer votre audit ou votre devis et à savoir quels canaux nous amènent des demandes. Elles sont transmises par e-mail à l’équipe Stripwork et enregistrées dans son outil de suivi interne. Elles ne sont ni vendues ni cédées.',
          ],
        },
        {
          h: 'Conservation',
          p: ['Les demandes sans suite sont conservées au plus 3 ans après le dernier contact, puis supprimées.'],
        },
        {
          h: 'Cookies',
          p: [
            'Ce site n’utilise ni cookie publicitaire ni outil de suivi tiers.',
            'Deux cookies propres à stripwork.com (sw_src et sw_last, 90 jours) retiennent la provenance de votre visite décrite plus haut. Ils ne sont lus qu’au moment où vous envoyez un formulaire et ne servent à aucun suivi publicitaire. Vous pouvez les supprimer depuis votre navigateur.',
          ],
        },
        {
          h: 'Vos droits',
          p: [
            'Vous pouvez accéder à vos données, les rectifier ou les faire supprimer en écrivant à contact@stripwork.com. Vous pouvez aussi saisir la CNIL (cnil.fr).',
          ],
        },
      ],
    },
  },
}

export default fr
