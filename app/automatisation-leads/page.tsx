import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/automatisation-leads'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Automatisation leads — Convertir plus de leads entrants | Stripwork',
  description: 'Qualifiez et routez vos leads en moins de 2 minutes. Arrêtez de perdre des prospects qualifiés faute de réactivité. Mise en place en 5 jours.',
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,

        hero: {
          badge: 'Directeur commercial · Responsable growth · Fondateur',
          h1: 'Vous perdez des leads qualifiés chaque jour sans le voir.',
          subtitle: "Pendant que votre équipe cherche un lead dans le CRM, vos prospects signent ailleurs. Le premier à rappeler gagne le deal — et ce n'est pas toujours vous.",
          ctaLabel: 'Analyser mon système de gestion des leads',
        },

        economicProblem: {
          sectionLabel: 'Le coût réel',
          headline: 'Un lead entrant est chaud pendant 5 à 10 minutes. Après, il compare, il oublie, il signe ailleurs.',
          body: "Chaque lead mal traité est un coût d'acquisition perdu deux fois : une fois sur la dépense publicitaire, une fois sur l'opportunité commerciale. La plupart des équipes ne mesurent pas ce chiffre — parce qu'il ne figure dans aucun tableau de bord. Il disparaît silencieusement dans la colonne « leads non convertis ».\n\nUn taux de conversion de 12% qui passe à 18% sur le même volume de leads entrants représente +50% de revenus sans un euro de budget supplémentaire. C'est la valeur de la réactivité — et elle ne coûte rien si le process est automatisé.",
          stats: [
            { value: '78%', label: 'des acheteurs B2B choisissent le premier vendeur qui répond à leur demande' },
            { value: '21×', label: 'plus de chances de qualifier un lead contacté dans les 5 minutes vs. 30 minutes' },
            { value: '-60%', label: 'de taux de conversion observé quand le délai de réponse dépasse 1 heure' },
          ],
        },

        alternativeDestruction: {
          sectionLabel: 'Ce qui ne fonctionne pas',
          headline: 'Pourquoi votre setup actuel perd des leads — même si vous avez un CRM.',
          intro: "La plupart des entreprises ont déjà des outils. Elles ont un CRM, des notifications email, parfois un outil de routage. Pourtant les leads refroidissent. Voici pourquoi :",
          alternatives: [
            {
              name: 'Le CRM passif',
              flaw: "Il stocke les leads mais ne déclenche rien. Une notification email générique arrive dans une boîte déjà pleine. Le commercial la voit 3 heures plus tard — quand le prospect a déjà été rappelé par un concurrent.",
            },
            {
              name: 'Les alertes email',
              flaw: "Non actionnables en contexte mobile. Aucune priorisation par score. Votre meilleur commercial reçoit le même email pour un lead à 500€ et un lead à 50 000€. Il traite dans l'ordre où ils arrivent.",
            },
            {
              name: 'Le traitement manuel',
              flaw: "Il dépend de la disponibilité d'une personne. Réunion, déjeuner, fin de journée — le lead attend. Aucun process manuel ne garantit une réponse sous 5 minutes sans interrompre l'activité de l'équipe.",
            },
          ],
          conclusion: "Ces solutions ne sont pas mauvaises — elles sont simplement conçues pour stocker, pas pour convertir. La différence entre 12% et 21% de conversion, c'est la vitesse d'exécution sur les 10 premières minutes.",
        },

        solution: {
          sectionLabel: 'Notre approche',
          headline: 'On ne stocke pas vos leads. On les traite immédiatement.',
          differentiators: [
            "Qualification automatique dès la soumission — secteur, taille, intention, budget analysés selon vos critères métier.",
            "Score de priorité calculé en temps réel — votre commercial sait en 3 secondes si le lead mérite un rappel immédiat.",
            "Notification exploitable sur mobile — fiche prospect complète, numéro direct, contexte de la demande.",
            "Votre équipe agit pendant que le lead est encore dans le momentum de sa demande.",
            "Intégration dans vos outils existants — CRM, Slack, email, SMS — sans changer votre infrastructure.",
            "Aucune décision à prendre en temps réel : le process s'exécute seul, 24h/24, 7j/7.",
          ],
        },

        process: {
          sectionLabel: 'Comment ça marche',
          headline: 'De la soumission du formulaire à la notification commerciale en moins de 2 minutes.',
          steps: [
            {
              num: '01',
              title: 'Le formulaire est soumis',
              body: "Le prospect remplit votre formulaire — site, landing page ou pub. L'événement déclenche immédiatement l'automatisation. Aucun délai, aucune dépendance humaine.",
            },
            {
              num: '02',
              title: 'Qualification en temps réel',
              body: "Chaque réponse est analysée selon vos critères métier : secteur, taille d'équipe, intention d'achat, budget estimé. Un score de priorité est calculé automatiquement.",
            },
            {
              num: '03',
              title: 'Le commercial est notifié',
              body: "Une fiche prospect complète arrive sur son téléphone — contexte complet, score de priorité, numéro à rappeler. Il contacte pendant que le lead est encore chaud.",
            },
          ],
        },

        caseStudy: {
          sectionLabel: 'Cas concret',
          context: 'Agence immobilière — 3 commerciaux, ~80 leads entrants/mois via formulaire site et pubs Meta',
          before: [
            { metric: 'délai de réponse moyen', value: '3h20' },
            { metric: 'taux de conversion lead → RDV', value: '11%' },
          ],
          after: [
            { metric: 'délai de réponse moyen', value: '< 4 min' },
            { metric: 'taux de conversion lead → RDV', value: '19%' },
          ],
          gain: '+73% de RDV qualifiés sur le même volume de leads',
          nuance: "Résultats observés 6 semaines après mise en place. Le volume de leads n'a pas changé. Le budget publicitaire non plus. Seul le process de traitement a été automatisé.",
        },

        targeting: {
          sectionLabel: 'Pour qui',
          headline: 'Ce système change les résultats quand votre problème est la vitesse, pas le volume.',
          forWho: [
            "Vous générez plus de 20 leads entrants par mois via formulaire, pub ou site.",
            "Votre équipe commerciale répond aujourd'hui en moyenne en plus de 30 minutes.",
            "Vous avez déjà un CRM en place — même basique.",
            "La vente se conclut après un appel ou une démo : la réactivité est déterminante.",
            "Vous dépensez en publicité (Google, Meta, LinkedIn) et mesurez un coût par lead.",
          ],
          notForWho: [
            "Vous recevez moins de 5 leads par semaine — le gain n'amortit pas la mise en place.",
            "Votre cycle de vente est entièrement asynchrone : emails uniquement, pas d'appel.",
            "Vous n'avez aucun outil CRM ni process de suivi commercial existant.",
          ],
        },

        seoContent: {
          sections: [
            {
              h2: "Automatisation des leads : comment ça fonctionne",
              body: "L'automatisation des leads désigne l'ensemble des process qui permettent de capturer, qualifier, scorer et router un prospect entrant sans intervention humaine immédiate. Concrètement, dès qu'un formulaire est soumis sur votre site ou votre landing page, un système automatisé analyse les données saisies, leur attribue un score selon vos critères métier, puis notifie le bon commercial avec une fiche prospect exploitable.\n\nCela repose sur l'interconnexion de plusieurs outils : votre formulaire de capture, un moteur de qualification (basé sur des règles ou du scoring pondéré), votre CRM, et un canal de notification temps réel (Slack, SMS, appel automatique). La mise en place ne nécessite pas de remplacer votre stack existante — elle s'y connecte.\n\nL'enjeu n'est pas technologique. Il est comportemental : un commercial qui reçoit une fiche prospect complète sur son téléphone en moins de 2 minutes rappelle. Un commercial qui reçoit un email générique dans une boîte partagée rappelle dans 3 heures — si personne d'autre n'a eu le même réflexe.",
            },
            {
              h2: "Pourquoi la vitesse de réponse est le premier levier de conversion",
              body: "La corrélation entre délai de réponse et taux de conversion est documentée depuis plus de 15 ans dans les études sur la vente B2B. Les chiffres varient selon les secteurs, mais la tendance est constante : au-delà de 5 minutes, les chances de joindre un lead et de le qualifier chutent de façon non linéaire.\n\nL'explication est psychologique autant que comportementale. Un prospect qui remplit un formulaire est dans un état d'activation : il a pris une décision, cliqué, saisi ses coordonnées. Cet état dure quelques minutes. Passé ce seuil, il reprend son activité, oublie, compare, ou est contacté par un concurrent plus rapide.\n\nPour les équipes qui dépensent en publicité payante, l'enjeu est directement financier. Un coût par lead de 40€ avec un taux de conversion de 12% produit un coût par client de 333€. Le même budget avec un taux de 20% descend à 200€ — soit une réduction de 40% du coût d'acquisition, sans toucher au budget publicitaire.",
            },
            {
              h2: "Comment améliorer la conversion des leads sans augmenter le budget",
              body: "La première erreur des entreprises qui veulent améliorer leur conversion est d'augmenter le budget publicitaire pour générer plus de leads. C'est une réponse au mauvais problème. Si le process de traitement est défaillant, plus de volume ne fait qu'amplifier les pertes.\n\nLes trois leviers actionnables sans toucher au budget : la vitesse de réponse (cf. supra), la qualification initiale (s'assurer que les commerciaux ne perdent pas de temps sur des leads non qualifiés), et la traçabilité (savoir précisément combien de leads sont traités, en combien de temps, avec quel résultat).\n\nL'automatisation adresse les trois simultanément. Elle garantit la vitesse par design, intègre la qualification dans le process de notification, et génère des données de suivi sans saisie supplémentaire. Le résultat mesurable se voit dans les 4 à 6 semaines suivant la mise en place — sur le même volume de leads, avec le même budget.",
            },
          ],
        },

        faq: [
          {
            question: "Est-ce compatible avec mon CRM actuel ?",
            answer: "Oui, dans la grande majorité des cas. On travaille avec HubSpot, Pipedrive, Salesforce, Notion, Airtable, et la plupart des CRM disposant d'une API ou d'un webhook. Si vous utilisez un CRM maison ou spécifique, on l'évalue lors du premier échange.",
          },
          {
            question: "Combien de temps pour mettre en place ?",
            answer: "Entre 3 et 7 jours ouvrés selon la complexité de votre formulaire et de vos critères de qualification. La mise en place inclut la connexion à vos outils, le paramétrage des règles de scoring, les tests sur des leads réels, et une session de formation de votre équipe commerciale.",
          },
          {
            question: "Est-ce que ça remplace mes commerciaux ?",
            answer: "Non. L'automatisation prend en charge la partie mécanique : détecter le lead, l'analyser, notifier la bonne personne au bon moment. La conversation commerciale reste humaine — et elle est justement rendue possible dans les meilleures conditions parce que le timing est bon.",
          },
          {
            question: "Est-ce adapté si mes leads viennent de plusieurs sources ?",
            answer: "C'est exactement pour ça que ça sert. Formulaire site, pub Meta, pub Google, LinkedIn, partenaires — chaque source peut être connectée et traitée selon les mêmes règles ou des règles différenciées par canal. Un lead LinkedIn et un lead Google Ads ne se qualifient pas forcément de la même façon.",
          },
          {
            question: "Que se passe-t-il si mon commercial est indisponible ?",
            answer: "On configure des règles de fallback : si le commercial prioritaire ne répond pas sous X minutes, la notification passe au suivant dans la chaîne. Le process peut aussi déclencher un email ou SMS automatique au prospect pour confirmer la réception de sa demande et annoncer un rappel — ce qui maintient l'engagement sans intervention humaine immédiate.",
          },
        ],

        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
