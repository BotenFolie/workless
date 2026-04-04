import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/relance-commerciale-automatique'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Relance commerciale automatique — Séquences prospects structurées | Stripwork',
  description: 'Relancez 100% de vos prospects au bon moment, sans effort manuel. Séquences email et SMS déclenchées sur événements CRM. Mise en place en 5 jours.',
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
          subtitle: "Un lead sans relance structurée ne revient pas. Il attend que quelqu'un d'autre le contacte en premier — et quelqu'un d'autre le fait.",
          ctaLabel: 'Voir comment récupérer mes prospects perdus',
        },

        economicProblem: {
          sectionLabel: "Le coût de l'inaction",
          headline: 'Chaque prospect non relancé est une dépense publicitaire qui ne se transforme jamais.',
          body: "La plupart des deals ne se concluent pas au premier contact. En B2B, il faut en moyenne 5 à 8 points de contact avant qu'un prospect prenne une décision. Si votre équipe n'a pas de système de relance structuré, elle s'arrête après 1 ou 2 tentatives — et le prospect disparaît dans le silence.\n\nCe n'est pas un problème de motivation commerciale. C'est un problème de process. Un commercial sous pression de volume ne peut pas mentalement gérer 50 prospects en parallèle avec des timing différents, des objections différentes, des canaux différents. Il oublie. Il relance au mauvais moment. Il abandonne trop tôt.",
          stats: [
            { value: '80%', label: 'des ventes nécessitent entre 5 et 8 relances avant closing' },
            { value: '44%', label: 'des commerciaux abandonnent après 1 seule tentative de suivi' },
            { value: '3×', label: 'plus de conversion observée avec une séquence de relance structurée vs. suivi manuel' },
          ],
        },

        alternativeDestruction: {
          sectionLabel: 'Pourquoi ça rate',
          headline: "Ce que font la plupart des équipes — et pourquoi ça produit un pipeline imprévisible.",
          intro: "Il ne s'agit pas d'accuser vos commerciaux. Les outils qu'ils utilisent ne sont pas conçus pour les relances structurées à grande échelle.",
          alternatives: [
            {
              name: 'Le CRM avec rappels manuels',
              flaw: "Chaque commercial crée ses propres rappels selon sa logique. Résultat : certains relancent trop, d'autres oublient. Aucune cohérence, aucune mesure, aucune optimisation possible sur les séquences.",
            },
            {
              name: 'Les séquences email génériques',
              flaw: "Envoyées en masse, sans lien avec le comportement réel du prospect. Un prospect qui ouvre chaque email et visite votre site reçoit le même message qu'un prospect inactif depuis 3 semaines. Le signal est ignoré.",
            },
            {
              name: 'La relance intuitive',
              flaw: "Le commercial relance quand il y pense, pas quand c'est le bon moment pour le prospect. Les leads chauds et les leads froids reçoivent le même traitement, dans le même désordre.",
            },
          ],
          conclusion: "Une séquence automatique déclenchée sur des événements CRM réels ne relance pas plus fort. Elle relance mieux — au moment où le prospect est le plus réceptif, avec le bon message, sans dépendre de la mémoire de quelqu'un.",
        },

        solution: {
          sectionLabel: 'Notre approche',
          headline: 'Chaque prospect reçoit le bon message, au bon moment — sans que personne n\'y pense.',
          differentiators: [
            "Séquences déclenchées sur événements CRM réels : devis sans réponse, email non ouvert J+3, rendez-vous manqué, essai expiré.",
            "Personnalisation basée sur le comportement — pas sur le prénom. Le message s'adapte à où en est le prospect dans son cycle de décision.",
            "Multicanal cohérent : email, SMS, rappel commercial selon la priorité du lead et la nature de l'action attendue.",
            "Arrêt automatique dès la réponse ou l'action — pas de relance après qu'un prospect a signé ou dit non.",
            "Archivage propre des silencieux — votre pipeline reste exploitable, sans la pollution des contacts fantômes.",
            "Reporting natif : taux de réponse par séquence, par canal, par étape — pour optimiser en continu.",
          ],
        },

        process: {
          sectionLabel: 'Comment ça marche',
          headline: "L'événement CRM déclenche. La séquence s'adapte. Le résultat remonte.",
          steps: [
            {
              num: '01',
              title: "L'événement CRM déclenche",
              body: "Prospect absent à un webinaire, email J+3 non ouvert, devis sans retour depuis 5 jours — chaque signal identifié dans votre CRM active la séquence correspondante, automatiquement.",
            },
            {
              num: '02',
              title: 'Le message s\'adapte au contexte',
              body: "Email personnalisé, SMS de relance, rappel commercial — le bon canal et le bon ton selon l'étape du prospect et son niveau d'engagement passé. Pas de message générique.",
            },
            {
              num: '03',
              title: 'Résultat ou clôture propre',
              body: "La séquence s'arrête dès la réponse ou l'action attendue. Sinon, elle continue jusqu'à l'échéance définie — puis archive proprement. Aucun oubli, aucun doublon.",
            },
          ],
        },

        caseStudy: {
          sectionLabel: 'Cas concret',
          context: 'Éditeur SaaS B2B — 2 commerciaux, ~120 leads entrants/mois, cycle de vente 3 à 6 semaines',
          before: [
            { metric: 'prospects relancés au moins 3 fois', value: '28%' },
            { metric: 'taux de conversion lead → client payant', value: '8%' },
          ],
          after: [
            { metric: 'prospects relancés selon séquence complète', value: '100%' },
            { metric: 'taux de conversion lead → client payant', value: '14%' },
          ],
          gain: '+75% de conversion sur le même volume de leads',
          nuance: "Résultats mesurés sur 3 mois complets post-déploiement. Les 2 commerciaux n'ont pas changé leurs habitudes — ils ont simplement été notifiés au bon moment avec le bon contexte.",
        },

        targeting: {
          sectionLabel: 'Pour qui',
          headline: 'Ce système change les résultats quand vos pertes viennent du manque de suivi, pas du manque de leads.',
          forWho: [
            "Vous avez un cycle de vente de plus de 2 semaines — le suivi multipoint est indispensable.",
            "Vous générez des leads mais votre pipeline stagne sans explication claire.",
            "Vos commerciaux relancent selon leur propre logique — aucune cohérence entre eux.",
            "Vous avez déjà un CRM mais les relances sont manuelles et irrégulières.",
            "Vous voulez mesurer l'efficacité de vos séquences et optimiser dans le temps.",
          ],
          notForWho: [
            "Vous vendez uniquement sur inbound pur : les clients signent sans relance nécessaire.",
            "Votre volume est inférieur à 10 leads par mois — l'amortissement est trop long.",
            "Vous n'avez aucun CRM ni historique de contact structuré.",
          ],
        },

        seoContent: {
          sections: [
            {
              h2: "Relance commerciale automatique : ce que ça change vraiment",
              body: "La relance commerciale automatique ne consiste pas à envoyer des emails en masse à la place de vos commerciaux. C'est un système qui surveille l'état de votre pipeline en temps réel et déclenche les bonnes actions au bon moment — selon des règles que vous définissez en amont.\n\nConcrètement, chaque prospect dans votre CRM est associé à une séquence de relance adaptée à son étape dans le cycle de vente. Si un devis envoyé n'a pas reçu de réponse sous 48h, un email de relance part automatiquement. Si l'email est ouvert mais pas répondu, un SMS de relance est envoyé le lendemain. Si aucune action dans les 10 jours, le commercial est notifié pour un appel direct.\n\nLa valeur n'est pas dans l'envoi automatique. Elle est dans la garantie que aucun prospect ne tombe entre les mailles — même en période de forte charge, même quand un commercial est absent.",
            },
            {
              h2: "Pourquoi vos commerciaux abandonnent trop tôt — et comment y remédier",
              body: "Les études sur le comportement commercial sont unanimes : la grande majorité des commerciaux abandonnent un prospect après 1 à 2 tentatives de contact. Ce n'est pas de la paresse — c'est une réponse rationnelle à une charge cognitive trop élevée.\n\nGérer 50 prospects en parallèle avec des timing différents, des objections différentes, des canaux différents est impossible mentalement sans outil dédié. Le commercial priorise les leads chauds et oublie les tièdes. Le problème : les tièdes d'aujourd'hui sont souvent les acheteurs de dans 3 semaines.\n\nL'automatisation résout ce problème non pas en remplaçant le jugement commercial, mais en supprimant la charge de mémorisation. Le commercial ne décide plus quand relancer — il est notifié au bon moment avec tout le contexte nécessaire pour agir efficacement.",
            },
            {
              h2: "Comment structurer des séquences de relance qui convertissent",
              body: "Une séquence efficace repose sur trois principes : la cohérence avec l'étape du prospect, la personnalisation selon son comportement, et l'arrêt au bon moment.\n\nLa cohérence avec l'étape signifie que le message d'un prospect qui vient de recevoir un devis n'est pas le même que celui d'un prospect qui a assisté à une démo il y a 3 semaines sans suite. Chaque étape du pipeline mérite sa propre logique de relance.\n\nLa personnalisation comportementale va au-delà du prénom. Un prospect qui a ouvert votre email 3 fois sans répondre a un signal fort d'intérêt — il mérite une relance directe, pas un énième email générique. Un prospect qui n'a pas ouvert en 10 jours a peut-être besoin d'un changement de canal ou de sujet.\n\nL'arrêt au bon moment est aussi important que le déclenchement. Une séquence qui continue après un refus clair nuit à votre réputation. Un système bien configuré archive proprement et ne relance pas au-delà d'un seuil défini — en protégeant votre délivrabilité email et l'expérience prospect.",
            },
          ],
        },

        faq: [
          {
            question: "Est-ce compatible avec mon CRM ?",
            answer: "Oui pour la grande majorité des CRM du marché : HubSpot, Pipedrive, Salesforce, Notion, Monday, Airtable. La connexion se fait via API ou webhook natif. Si votre CRM est spécifique ou maison, on l'évalue lors du premier échange.",
          },
          {
            question: "Combien de séquences peut-on configurer ?",
            answer: "Autant que nécessaire. On démarre en général avec 3 à 5 séquences couvrant les étapes clés de votre pipeline — devis sans réponse, prospect froid, essai expiré, etc. On peut ajouter des séquences en fonction des résultats et des étapes identifiées.",
          },
          {
            question: "Est-ce que ça remplace mes commerciaux ?",
            answer: "Non. Les séquences automatiques couvrent les relances à faible valeur ajoutée — les messages de suivi, les rappels, les notifications. Dès qu'un prospect répond ou montre un signal fort d'intérêt, le commercial reprend la main. L'automatisation libère du temps commercial sur ce qui compte vraiment.",
          },
          {
            question: "Que se passe-t-il si le prospect répond entre deux relances ?",
            answer: "La séquence s'arrête immédiatement dès la détection d'une réponse, d'un clic sur un lien clé, ou de tout événement CRM que vous définissez comme signal de sortie. Aucun risque d'envoyer une relance à quelqu'un qui vient de signer.",
          },
          {
            question: "Combien de temps pour voir des résultats ?",
            answer: "Les premiers résultats sont visibles en 3 à 4 semaines — le temps que les premières séquences complètes se déroulent sur des leads récents. Une analyse comparative avant/après est possible à partir de 6 semaines de données.",
          },
        ],

        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
