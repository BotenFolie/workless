import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/automatisation-reporting-interne'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Automatisation reporting interne — KPI automatique PME | Stripwork',
  description: "Décisions sur données fraîches, sans changer vos outils. Connexion CRM + ERP + outils projet, rapport compilé et livré dans Slack ou email automatiquement.",
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,
        hero: {
          badge: 'DG · COO · Responsable ops',
          h1: "Votre équipe passe 3h par semaine à compiler des rapports que personne ne lit.",
          subtitle: "Les KPIs sont dispersés dans 5 outils. Le rapport arrive le lundi, les données datent de jeudi. Vos décisions se prennent à l'aveugle.",
          ctaLabel: 'Identifier mes 3 KPIs à automatiser',
        },
        problem: {
          headline: "Quand les données arrivent, elles sont déjà périmées. Votre équipe formate — elle n'analyse plus.",
          bullets: [
            "CRM, ERP, outils projet, tableurs — chaque outil a ses données et personne ne les consolide en temps réel. La vue d'ensemble n'existe pas.",
            "Le rapport du lundi matin compile des chiffres de la semaine précédente. Vous décidez sur des données J-7 dans un marché qui bouge en temps réel.",
            "Vos équipes passent des heures à formater et assembler — pas à interpréter. Ce n'est pas du travail analytique. C'est de la saisie.",
          ],
        },
        solution: {
          headline: "Les KPIs arrivent là où vous travaillez, au moment où vous en avez besoin.",
          steps: [
            {
              num: '01',
              title: 'Connexion à vos outils',
              body: "On connecte vos sources existantes — CRM, ERP, tableurs, outils projet. Sans rien changer à votre infrastructure. Sans recoder quoi que ce soit.",
            },
            {
              num: '02',
              title: 'Compilation automatique',
              body: "Les KPIs clés sont agrégés selon vos règles métier, à la fréquence que vous définissez — quotidienne, hebdomadaire, ou en temps réel sur seuil d'alerte.",
            },
            {
              num: '03',
              title: 'Livraison dans Slack ou email',
              body: "Le rapport arrive là où votre équipe travaille déjà. Avant votre café du lundi, les chiffres sont là — sans que personne n'ait ouvert un tableur.",
            },
          ],
        },
        proof: {
          before: '3 heures',
          after: '0 minute',
          metric: 'de compilation manuelle chaque semaine',
          nuance: "Gain observé sur nos configurations de reporting automatisé. Le temps de compilation passe à zéro — les données arrivent avant votre première réunion, fraîches et sans intervention.",
        },
        formTitle: "On identifie vos 3 KPIs à automatiser en premier.",
        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
