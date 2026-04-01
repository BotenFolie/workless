import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/automatisation-reactivite-leads'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Automatisation réponse leads — Speed to Lead | Stripwork',
  description: 'Répondez à vos leads en moins de 2 minutes au lieu de plusieurs heures. Qualification automatique, routage et notification commerciale en temps réel.',
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,
        hero: {
          badge: 'Directeur commercial · Responsable growth · Fondateur',
          h1: 'Vos leads attendent 4 heures. Vos concurrents répondent en 30 secondes.',
          subtitle: "Chaque minute sans réponse, vos chances de convertir s'effondrent. Le premier à rappeler gagne le deal — et ce n'est pas toujours vous.",
          ctaLabel: 'Voir comment ça fonctionne',
        },
        problem: {
          headline: "Votre meilleur lead a signé chez un concurrent pendant que votre commercial le cherchait dans le CRM.",
          bullets: [
            "Votre commercial est en réunion quand le lead arrive — il rappelle 3 heures plus tard, le prospect a refroidi.",
            "Le CRM se remplit mais personne ne reçoit d'alerte exploitable en temps réel — juste un email générique qui passe inaperçu.",
            "Les leads chauds et les leads froids sont traités dans le même désordre. Sans priorité. Sans vitesse.",
          ],
        },
        solution: {
          headline: "De la soumission du formulaire à la notification commerciale en moins de 2 minutes.",
          steps: [
            {
              num: '01',
              title: 'Le formulaire est soumis',
              body: "Le prospect remplit votre formulaire — site, landing page ou pub. L'événement déclenche immédiatement l'automatisation, sans délai.",
            },
            {
              num: '02',
              title: 'Qualification en temps réel',
              body: "Chaque réponse est analysée selon vos critères métier : secteur, taille, intention, budget. Un score de priorité est calculé automatiquement.",
            },
            {
              num: '03',
              title: 'Le commercial est notifié',
              body: "Une fiche prospect complète arrive sur son téléphone — contexte, score, numéro à rappeler. Il contacte pendant que le prospect est encore dans le momentum.",
            },
          ],
        },
        proof: {
          before: '~4 heures',
          after: '< 2 minutes',
          metric: 'temps de réponse moyen observé sur nos configurations',
          nuance: "Sur nos configurations types, la notification commerciale tombe sous 2 minutes dès la soumission. Le temps de rappel effectif dépend de la disponibilité de votre équipe — mais le lead n'attend plus.",
        },
        formTitle: "On vous montre ça sur votre formulaire actuel.",
        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
