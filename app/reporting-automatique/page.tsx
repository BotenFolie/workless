import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/reporting-automatique'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Reporting automatique — KPI en temps réel sans compilation manuelle | Stripwork',
  description: 'Recevez vos KPIs consolidés chaque matin dans Slack ou email. Connexion CRM, ERP, tableurs — sans changer vos outils. Mise en place en 5 jours.',
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,

        hero: {
          badge: 'DG · COO · Responsable ops · Fondateur',
          h1: "Vos décisions se prennent sur des données vieilles de 5 jours.",
          subtitle: "Vos KPIs sont dispersés dans 5 outils. Le rapport arrive le lundi, les données datent de jeudi. Vous pilotez à l'aveugle dans un marché qui bouge en temps réel.",
          ctaLabel: 'Identifier mes KPIs à automatiser',
        },

        economicProblem: {
          sectionLabel: 'Le coût invisible',
          headline: "Chaque heure passée à compiler des données est une heure qui n'est pas passée à les analyser.",
          body: "Dans une PME de 10 à 50 personnes, le temps de compilation des données de reporting représente en moyenne 3 à 5 heures par semaine par profil managérial. Sur un an, c'est plusieurs semaines de travail qualifié consacrées à copier-coller des chiffres d'un tableur à un autre.\n\nMais le coût invisible est ailleurs. C'est la décision prise sur une donnée J-5. C'est l'alerte manquée parce que personne n'a regardé le tableau le vendredi. C'est le recrutement décidé sur des chiffres de la semaine précédente. La donnée en retard crée des décisions en retard.",
          stats: [
            { value: '3–5h', label: 'de compilation manuelle par manager et par semaine en moyenne' },
            { value: 'J−5', label: 'âge moyen des données dans un rapport compilé manuellement le lundi' },
            { value: '67%', label: "des dirigeants de PME déclarent manquer d'accès à des données fiables en temps réel" },
          ],
        },

        alternativeDestruction: {
          sectionLabel: 'Ce qui ne fonctionne pas',
          headline: 'Pourquoi vos outils actuels ne résolvent pas le problème de reporting.',
          intro: "Vous avez probablement déjà essayé plusieurs approches. Voici pourquoi elles ne tiennent pas dans la durée :",
          alternatives: [
            {
              name: 'Le tableur partagé',
              flaw: "Quelqu'un doit le mettre à jour. Ce quelqu'un est aussi le premier à être occupé quand l'urgence arrive. Le lundi matin, la colonne de la semaine est vide — et personne ne sait qui devait la remplir.",
            },
            {
              name: 'Le dashboard BI',
              flaw: "Cher à mettre en place, long à maintenir, jamais utilisé par tout le monde. Les données sont là mais personne n'ouvre l'outil spontanément. L'information reste passive — elle attend d'être consultée.",
            },
            {
              name: 'Le rapport réunion hebdo',
              flaw: "Préparé dans l'urgence le vendredi soir ou le lundi matin. Les données sont sélectionnées selon ce que chacun veut montrer, pas selon ce qui est réellement important. Le pilotage devient de la communication.",
            },
          ],
          conclusion: "Un reporting automatique n'est pas un outil de plus à maintenir. C'est un système qui pousse l'information là où vous travaillez déjà — avant que vous ayez besoin de la chercher.",
        },

        solution: {
          sectionLabel: 'Notre approche',
          headline: 'Les KPIs arrivent là où vous travaillez, au moment où vous en avez besoin.',
          differentiators: [
            "Connexion à vos sources existantes — CRM, ERP, tableurs, outils projet — sans rien changer à votre infrastructure.",
            "Consolidation automatique selon vos règles métier : pas un template générique, vos KPIs dans votre format.",
            "Livraison dans Slack, email ou SMS — là où votre équipe est déjà, pas dans un outil de plus.",
            "Alertes sur seuils critiques : un KPI qui chute en dessous de votre seuil déclenche une notification immédiate, pas le lundi suivant.",
            "Fréquence paramétrable : quotidien, hebdomadaire, temps réel selon les indicateurs.",
            "Zéro maintenance après mise en place — le système tourne sans intervention.",
          ],
        },

        process: {
          sectionLabel: 'Comment ça marche',
          headline: 'Connexion, consolidation, livraison — zéro intervention manuelle.',
          steps: [
            {
              num: '01',
              title: 'Connexion à vos outils',
              body: "On connecte vos sources existantes — CRM, ERP, tableurs, outils projet. Sans rien changer à votre infrastructure, sans recoder quoi que ce soit.",
            },
            {
              num: '02',
              title: 'Compilation selon vos règles',
              body: "Les KPIs clés sont agrégés selon vos règles métier, à la fréquence que vous définissez. Les calculs, les agrégations, les comparaisons se font automatiquement.",
            },
            {
              num: '03',
              title: 'Livraison dans Slack ou email',
              body: "Le rapport arrive là où votre équipe travaille déjà. Avant votre première réunion, les chiffres sont là — frais, structurés, actionnables.",
            },
          ],
        },

        caseStudy: {
          sectionLabel: 'Cas concret',
          context: 'Agence de services B2B — 18 personnes, données dispersées dans HubSpot, Notion, et 3 tableurs Google Sheets',
          before: [
            { metric: 'temps de compilation hebdo (2 personnes)', value: '6h' },
            { metric: 'âge moyen des données au moment de la réunion', value: 'J−4' },
          ],
          after: [
            { metric: 'temps de compilation hebdo', value: '0h' },
            { metric: 'âge des données à la réunion du lundi', value: 'J−0' },
          ],
          gain: '6h libérées par semaine + décisions sur données fraîches',
          nuance: "Mis en place en 4 jours ouvrés. Le reporting Slack arrive désormais chaque dimanche soir à 20h — l'équipe entre en réunion le lundi avec les chiffres de la semaine précédente complets et vérifiés.",
        },

        targeting: {
          sectionLabel: 'Pour qui',
          headline: 'Ce système est utile quand vous avez des données utiles — mais éparpillées.',
          forWho: [
            "Vous utilisez 3 outils ou plus pour piloter votre activité — CRM, ERP, tableurs, outils projet.",
            "Votre équipe passe plus d'une heure par semaine à préparer des rapports ou consolider des données.",
            "Vos réunions de pilotage commencent par 15 minutes de mise à jour des chiffres.",
            "Vous avez des KPIs clairs en tête mais vous ne les avez pas sous les yeux en temps réel.",
            "Vous êtes dirigeant, COO, ou responsable opérationnel avec besoin de visibilité quotidienne.",
          ],
          notForWho: [
            "Vous êtes indépendant ou très petite structure avec un seul outil de gestion.",
            "Vous n'avez pas de process de pilotage défini — l'automatisation ne crée pas la méthode.",
            "Vos données sont dans un outil propriétaire sans API ni export possible.",
          ],
        },

        seoContent: {
          sections: [
            {
              h2: "Reporting automatique : comment ça fonctionne techniquement",
              body: "Un système de reporting automatique repose sur trois composantes : la collecte de données, la transformation, et la livraison. La collecte se fait via les APIs de vos outils existants — CRM, ERP, tableurs, outils de gestion de projet. La transformation applique vos règles de calcul et d'agrégation. La livraison envoie le résultat dans le canal que vous choisissez.\n\nConcrètement, cela signifie que chaque matin à 7h, un script collecte les données de la veille dans HubSpot, les données de facturation dans votre ERP, et les indicateurs de production dans Notion. Il calcule les écarts vs. semaine précédente, formate le tout selon votre template, et envoie le rapport dans le canal Slack de votre équipe de direction.\n\nLa mise en place ne nécessite pas de changer vos outils ni de passer par un outil de BI supplémentaire. Elle s'appuie sur ce que vous avez déjà et y ajoute la couche de consolidation et d'automatisation.",
            },
            {
              h2: "Pourquoi le reporting manuel ralentit vos décisions",
              body: "Le problème du reporting manuel n'est pas seulement le temps qu'il coûte. C'est la latence qu'il introduit dans votre cycle de décision. Une décision prise sur une donnée J-5 dans un marché qui bouge en temps réel est structurellement en retard.\n\nDans une PME en croissance, cette latence se traduit par des recrutements décidés trop tard, des alertes sur des KPIs commerciaux manquées, des corrections de trajectoire effectuées une semaine après que le problème était visible dans les données. Le tout sans que personne ne soit responsable — simplement parce que l'information n'était pas disponible au bon moment.\n\nL'automatisation du reporting ne rend pas vos équipes plus intelligentes. Elle leur donne l'information au moment où elle peut être actionnée — pas après.",
            },
            {
              h2: "Quels KPIs automatiser en priorité",
              body: "La question n'est pas 'quels KPIs peut-on automatiser' — techniquement, presque tout est automatisable. La question est 'quels KPIs méritent d'être sous les yeux de votre équipe chaque jour'.\n\nLes candidats prioritaires sont invariablement ceux qui déclenchent des décisions rapides : pipeline commercial (nouveaux leads, deals en cours, conversions), indicateurs de production ou de livraison (délais, volumes, taux d'erreur), et alertes financières (trésorerie, factures en retard, dépenses vs. budget).\n\nEn pratique, on identifie avec vous 5 à 8 KPIs critiques pour démarrer. Le système est ensuite extensible — on peut ajouter des indicateurs ou modifier les règles de calcul sans tout reconstruire. L'objectif est d'avoir, dès le premier jour, une vue actionnables sur ce qui compte le plus.",
            },
          ],
        },

        faq: [
          {
            question: "Quels outils pouvez-vous connecter ?",
            answer: "HubSpot, Pipedrive, Salesforce, Notion, Airtable, Google Sheets, Excel Online, les principaux ERP (Pennylane, Sage, QuickBooks), et tout outil disposant d'une API ou d'un export structuré. On évalue les outils spécifiques lors du premier échange.",
          },
          {
            question: "Est-ce que mes données sont sécurisées ?",
            answer: "Oui. Les connexions se font via les APIs officielles de vos outils, avec des clés d'accès à droits limités (lecture seule sur les sources). Aucune donnée n'est stockée durablement — le système collecte, agrège et envoie sans base de données intermédiaire.",
          },
          {
            question: "Combien de temps pour la mise en place ?",
            answer: "Entre 3 et 5 jours ouvrés selon le nombre de sources et la complexité des règles de calcul. La mise en place inclut la connexion aux outils, le paramétrage des KPIs, la définition du template de rapport, et les tests sur des données réelles.",
          },
          {
            question: "Que se passe-t-il si un outil change ou que je change de CRM ?",
            answer: "On met à jour la connexion. La maintenance est incluse dans les premiers mois de fonctionnement. À long terme, les systèmes sont conçus pour être modulaires — changer une source ne remet pas en cause tout le setup.",
          },
          {
            question: "Peut-on avoir des alertes en temps réel, pas seulement des rapports quotidiens ?",
            answer: "Oui. En plus des rapports périodiques, on peut configurer des alertes sur seuils : si le taux de conversion tombe sous X%, si la trésorerie passe sous Y€, si le volume de leads baisse de Z% vs. la semaine précédente. L'alerte arrive immédiatement dans Slack ou par SMS.",
          },
        ],

        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
