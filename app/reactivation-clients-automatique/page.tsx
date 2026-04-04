import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/reactivation-clients-automatique'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Réactivation clients automatique — CA additionnel sur base existante | Stripwork',
  description: "Générez du CA sur vos clients dormants sans budget acquisition. Segmentation automatique et campagnes ciblées selon l'historique. Mise en place en 5 jours.",
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,

        hero: {
          badge: 'Directeur marketing · E-commerce · Fondateur avec base CRM existante',
          h1: "Vous avez des milliers de contacts dormants. Votre meilleur gisement de CA ne travaille pas.",
          subtitle: "Acquérir un nouveau client coûte 5 à 7 fois plus cher que réactiver un ancien. Votre base existe déjà. Elle vous connaît. Elle ne reçoit aucun message ciblé depuis des mois.",
          ctaLabel: 'Estimer le potentiel de ma base',
        },

        economicProblem: {
          sectionLabel: "L'opportunité manquée",
          headline: 'Votre base CRM grossit chaque mois. Votre CA additionnel ne vient jamais de là.',
          body: "Les clients dormants ne sont pas des clients perdus. Ce sont des clients qui ont arrêté d'acheter faute d'une raison de revenir. La différence entre une base qui génère du CA additionnel et une base qui stagne tient rarement au produit — elle tient au contact, au timing, et à la pertinence du message.\n\nUne campagne de réactivation bien ciblée génère en moyenne 15 à 30% de CA additionnel sur la portion de base contactée — sans un euro de budget publicitaire supplémentaire. C'est du revenu sur une infrastructure que vous avez déjà construite et que vous ne rentabilisez pas.",
          stats: [
            { value: '5–7×', label: "coût d'acquisition d'un nouveau client vs. réactivation d'un ancien" },
            { value: '20–30%', label: 'de taux de réponse observé sur des campagnes de réactivation bien segmentées' },
            { value: '0€', label: 'de budget acquisition supplémentaire nécessaire — votre base est déjà là' },
          ],
        },

        alternativeDestruction: {
          sectionLabel: 'Ce qui ne fonctionne pas',
          headline: "Pourquoi vos campagnes actuelles ne réactivent pas votre base.",
          intro: "La plupart des entreprises tentent de réactiver leur base de temps en temps. Voici pourquoi ça ne produit pas de résultats durables :",
          alternatives: [
            {
              name: 'La newsletter mensuelle',
              flaw: "Elle traite tout le monde pareil — le client actif de la semaine dernière et le dormant depuis 18 mois reçoivent le même email. Le dormant ne se sent pas concerné. Il ignore ou se désabonne.",
            },
            {
              name: 'La promo générique',
              flaw: "Envoyer une réduction à toute la base dégrade la valeur perçue de votre offre et habitue vos clients à attendre des promotions. Ce n'est pas de la réactivation — c'est de la braderie.",
            },
            {
              name: 'Le CRM non segmenté',
              flaw: "Dormants, actifs, anciens clients, leads jamais convertis — tout est dans le même pot. Sans segmentation, impossible d'envoyer un message pertinent. Le taux d'ouverture s'effondre et votre délivrabilité email avec.",
            },
          ],
          conclusion: "La réactivation efficace repose sur la segmentation automatique et le message contextuel. Le bon message, à la bonne personne, au bon moment — basé sur son historique réel avec vous, pas sur une logique de masse.",
        },

        solution: {
          sectionLabel: 'Notre approche',
          headline: 'Segmentation automatique, message ciblé sur l\'historique, résultats mesurés.',
          differentiators: [
            "Segmentation automatique de votre base : actifs, tièdes, dormants, perdus — classés par potentiel de réactivation.",
            "Message ciblé selon l'historique réel de chaque contact — ce qu'il a acheté, quand, à quelle fréquence.",
            "Séquence multicanal : email, SMS selon la priorité du segment et la nature de la relation.",
            "Aucune promo générique — les incitations sont proportionnées à la valeur historique du contact.",
            "Archivage propre des silencieux après la séquence — votre base reste saine et délivrable.",
            "Remontée des répondants dans votre pipeline commercial pour suivi immédiat.",
          ],
        },

        process: {
          sectionLabel: 'Comment ça marche',
          headline: 'Segmentation, ciblage, réengagement — automatisés selon l\'historique de chaque contact.',
          steps: [
            {
              num: '01',
              title: 'Segmentation automatique',
              body: "Vos contacts sont triés selon leur dernière interaction, leur historique d'achat, et leur valeur estimée. Les dormants ressortent clairement, classés par potentiel de réactivation.",
            },
            {
              num: '02',
              title: 'Message ciblé selon le profil',
              body: "Chaque segment reçoit un message qui rebondit sur son vécu avec vous. Contenu, offre et canal s'adaptent au niveau d'engagement passé — pas un email générique à toute la liste.",
            },
            {
              num: '03',
              title: 'Les résultats remontent dans le CRM',
              body: "Les répondants sont marqués actifs et orientés vers votre équipe. Les silencieux sont archivés proprement. Votre base reste exploitable et votre délivrabilité préservée.",
            },
          ],
        },

        caseStudy: {
          sectionLabel: 'Cas concret',
          context: 'E-commerce B2C — 8 400 contacts en base, dont 5 200 inactifs depuis plus de 6 mois',
          before: [
            { metric: "taux d'ouverture newsletter mensuelle", value: '11%' },
            { metric: 'CA généré sur la base dormante', value: '0€' },
          ],
          after: [
            { metric: "taux d'ouverture campagne segmentée", value: '34%' },
            { metric: 'CA généré sur la campagne de réactivation', value: '+18 400€' },
          ],
          gain: '+18 400€ de CA sur la base dormante, sans budget acquisition',
          nuance: "Campagne déployée sur 3 semaines. Le segment prioritaire (valeur historique élevée, dormant depuis 6-12 mois) a généré 70% des résultats. Aucune promotion — uniquement un message contextuel basé sur l'historique d'achat.",
        },

        targeting: {
          sectionLabel: 'Pour qui',
          headline: 'Ce système est rentable quand vous avez une base existante et que vous n\'en exploitez pas le potentiel.',
          forWho: [
            "Vous avez une base CRM de plus de 500 contacts avec un historique d'interaction.",
            "Vous avez des clients qui ont acheté une fois et ne sont pas revenus.",
            "Votre base grossit mais votre CA sur base existante stagne.",
            "Vous dépensez en acquisition mais n'avez pas de programme de rétention structuré.",
            "Vous savez que votre base contient des clients à potentiel mais vous n'avez pas le temps de les segmenter.",
          ],
          notForWho: [
            "Votre base contient moins de 200 contacts — le volume ne justifie pas la mise en place.",
            "Vous n'avez aucun historique d'interaction ni d'achat dans votre CRM.",
            "Votre offre est unique — vos clients n'ont aucune raison objective de revenir.",
          ],
        },

        seoContent: {
          sections: [
            {
              h2: "Réactivation clients : pourquoi c'est le levier de croissance le plus sous-exploité",
              body: "La plupart des stratégies de croissance se concentrent sur l'acquisition — plus de leads, plus de budget publicitaire, plus de canaux. C'est compréhensible : l'acquisition est visible, mesurable, et produit des résultats immédiats. La réactivation est plus discrète mais structurellement plus rentable.\n\nUn client qui a déjà acheté chez vous a déjà franchi toutes les barrières psychologiques de l'achat : il vous connaît, il a confiance, il a validé la qualité. La vente est moins difficile. Le coût d'acquisition est nul. La probabilité de conversion est significativement plus élevée que sur un prospect froid.\n\nLe problème est que la plupart des bases CRM ne sont pas exploitées de façon structurée. Les contacts dorment, se dégradent, et finissent par être irréactivables. Une campagne de réactivation systématique, déployée avant que les contacts ne soient complètement perdus, est l'une des actions à meilleur ROI dans un plan marketing.",
            },
            {
              h2: "Comment segmenter une base clients pour la réactivation",
              body: "La segmentation pour la réactivation n'est pas la même que pour l'acquisition. On ne cherche pas des profils similaires à des acheteurs potentiels — on cherche des clients existants selon leur potentiel de retour.\n\nLes critères les plus pertinents sont : la date de dernière interaction ou achat (récence), la fréquence d'achat passée (fréquence), et la valeur totale générée (valeur). Ce modèle RFM simple permet d'identifier quatre segments prioritaires : les clients à haut potentiel dormant depuis peu, les clients à fort historique dormant depuis longtemps, les clients occasionnels à relancer sur un déclencheur spécifique, et les contacts froids à archiver.\n\nChaque segment mérite une approche différente. Le message, le canal, le timing, et l'éventuelle incitation varient selon le profil. Un client qui a généré 5 000€ de CA et n'a pas acheté depuis 8 mois mérite une attention personnalisée — pas le même email que le contact qui s'est inscrit à une newsletter il y a 2 ans sans jamais acheter.",
            },
            {
              h2: "Réactivation client vs. acquisition : où investir en priorité",
              body: "La question n'est pas de choisir entre les deux — c'est d'allouer les ressources de façon efficace. L'acquisition est indispensable pour la croissance. Mais si votre base existante n'est pas exploitée, vous générez des revenus sur un robinet ouvert avec un seau percé.\n\nUn calcul simple : si votre coût d'acquisition client est de 200€ et que votre taux de réactivation est de 20% sur votre base dormante avec un panier moyen de 350€, chaque réactivation génère 350€ pour un coût marginal proche de zéro (email + automatisation). Le ROI n'est pas comparable.\n\nEn pratique, les entreprises qui structurent leur programme de réactivation avant d'augmenter leur budget acquisition améliorent leur LTV (valeur vie client), réduisent leur CAC effectif, et disposent d'une base de données plus propre et plus délivrable pour leurs futures campagnes. C'est une fondation, pas un projet ponctuel.",
            },
          ],
        },

        faq: [
          {
            question: "Est-ce compatible avec mon CRM ou outil email actuel ?",
            answer: "Oui pour la grande majorité des outils : HubSpot, Klaviyo, Mailchimp, ActiveCampaign, Brevo, Pipedrive, et tout outil disposant d'une API ou d'un export de liste. On évalue la compatibilité de votre stack lors du premier échange.",
          },
          {
            question: "Est-ce que je risque de dégrader ma délivrabilité email ?",
            answer: "Non — à condition de segmenter correctement. C'est précisément pourquoi on commence par nettoyer et segmenter la base avant d'envoyer quoi que ce soit. Les contacts inactifs depuis trop longtemps sont mis en quarantaine ou archivés, pas contactés en masse. Votre délivrabilité est protégée.",
          },
          {
            question: "Combien de temps pour voir des résultats ?",
            answer: "Les premières réponses arrivent dans les 48 à 72 heures suivant le déploiement des premières séquences. Un bilan complet est possible à 3 semaines — c'est le temps nécessaire pour que les séquences complètes se déroulent et que les conversions remontent.",
          },
          {
            question: "Doit-on prévoir des promotions ou des remises ?",
            answer: "Non systématiquement. Les meilleurs résultats ne viennent pas toujours des promotions — ils viennent de messages contextuels qui rappellent la valeur déjà reçue et proposent une raison de revenir pertinente. Les remises peuvent être utilisées sur les segments à fort potentiel, mais elles ne doivent pas être la réponse par défaut.",
          },
          {
            question: "Peut-on automatiser la réactivation de façon continue, pas juste en campagne ponctuelle ?",
            answer: "Oui. On peut configurer un trigger automatique : tout contact qui passe en statut 'dormant' (défini selon vos critères — 60 jours sans achat, par exemple) entre automatiquement dans une séquence de réactivation. Votre base travaille en continu, sans que vous ayez à lancer des campagnes manuellement.",
          },
        ],

        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
