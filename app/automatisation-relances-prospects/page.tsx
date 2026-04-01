import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/automatisation-relances-prospects'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Automatisation relances prospects — Séquences CRM automatiques | Stripwork',
  description: "100% des leads suivis, 0 oubli de relance. Séquences email et SMS conditionnelles déclenchées automatiquement sur événements CRM.",
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,
        hero: {
          badge: 'Directeur commercial · Fondateur SaaS · Responsable marketing B2B',
          h1: "Vos prospects n'achètent pas parce que personne ne les relance au bon moment.",
          subtitle: "Un lead sans relance structurée ne revient pas. Il attend juste que quelqu'un d'autre le contacte en premier.",
          ctaLabel: 'Cartographier mes séquences actuelles',
        },
        problem: {
          headline: "Votre pipeline stagne parce que vos relances dépendent de la mémoire de vos commerciaux.",
          bullets: [
            "Les leads entrent dans le CRM et n'en ressortent jamais — faute de suivi structuré, ils refroidissent sans que personne ne le remarque.",
            "Un commercial relance à l'instinct ou sous pression — pas selon la maturité réelle du prospect ni le bon moment dans son cycle de décision.",
            "L'inégalité entre commerciaux crée un pipeline imprévisible : certains oublient, d'autres sur-relancent. Le résultat est le même — du chiffre laissé sur la table.",
          ],
        },
        solution: {
          headline: "Chaque prospect reçoit le bon message, au bon moment — sans que personne n'y pense.",
          steps: [
            {
              num: '01',
              title: "L'événement CRM déclenche",
              body: "Prospect absent à un webinaire, email J+3 non ouvert, devis sans retour depuis 5 jours — chaque signal identifié dans votre CRM active la séquence correspondante.",
            },
            {
              num: '02',
              title: "Le message s\u2019adapte",
              body: "Email personnalisé, SMS de relance, rappel commercial — le bon canal, le bon ton, au bon moment selon l'étape du prospect dans votre cycle de vente.",
            },
            {
              num: '03',
              title: "L'objectif ou l'archivage",
              body: "La séquence s'arrête dès la réponse ou l'action attendue. Sinon, elle continue jusqu'à l'échéance définie — puis classe proprement le prospect. Aucun oubli possible.",
            },
          ],
        },
        proof: {
          before: '~1 sur 3',
          after: '100%',
          metric: 'des leads suivis selon la séquence définie',
          nuance: "La plupart des équipes commerciales non structurées relancent moins d'un prospect sur trois. Les séquences automatisées couvrent 100% des leads — sans dépendre de la mémoire des commerciaux ni de leur charge du moment.",
        },
        formTitle: "On cartographie vos séquences actuelles — gratuitement.",
        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
