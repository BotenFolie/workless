import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/automatisation-reactivation-base-clients'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Réactivation base clients automatique — Campagne réengagement CRM | Stripwork',
  description: "CA additionnel sans budget acquisition. Segmentation automatique des contacts dormants et campagne de réengagement ciblée selon l'historique.",
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,
        hero: {
          badge: 'Directeur marketing · E-commerce · Fondateur avec base existante',
          h1: "Vous avez des milliers de contacts dormants. C'est votre meilleur gisement de CA.",
          subtitle: "Acquérir un nouveau client coûte 5 à 7 fois plus cher que réactiver un ancien. Votre base existe déjà — elle ne travaille pas.",
          ctaLabel: 'Estimer le potentiel de ma base',
        },
        problem: {
          headline: "Votre base CRM grossit chaque mois. Votre CA additionnel ne vient jamais de là.",
          bullets: [
            "Anciens clients, abandons de panier, essais expirés — des centaines de contacts qui vous connaissent déjà et n'ont reçu aucun message ciblé depuis des mois.",
            "Aucune segmentation automatique : les dormants se mélangent aux actifs, sans traitement différencié ni priorité commerciale.",
            "Les campagnes de masse envoient le même message à tout le monde. Les désabonnements augmentent, l'efficacité chute, la base se dégrade.",
          ],
        },
        solution: {
          headline: "Segmentation, ciblage et réengagement — automatisés selon l'historique de chaque contact.",
          steps: [
            {
              num: '01',
              title: 'Segmentation automatique',
              body: "Vos contacts sont triés selon leur dernière interaction : date, type d'action, valeur historique. Les dormants ressortent clairement, classés par potentiel de réactivation.",
            },
            {
              num: '02',
              title: "Message cibl\u00E9 selon l\u2019historique",
              body: "Chaque segment reçoit un message qui rebondit sur son vécu avec vous — pas un email générique. Contenu, offre et ton s'adaptent au profil et au niveau d'engagement passé.",
            },
            {
              num: '03',
              title: 'Les résultats remontent dans le CRM',
              body: "Les répondants sont marqués actifs et orientés vers votre équipe. Les silencieux sont archivés proprement. Votre base reste saine et exploitable.",
            },
          ],
        },
        proof: {
          after: 'x5 moins cher',
          metric: "réactiver un client existant vs. en acquérir un nouveau",
          nuance: "La réactivation d'anciens clients représente en moyenne 15 à 30% du CA additionnel identifié dans les campagnes que nous configurons. Le potentiel réel dépend de la taille et de la fraîcheur de votre base.",
        },
        formTitle: "On estime le potentiel de votre base — sans engagement.",
        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
