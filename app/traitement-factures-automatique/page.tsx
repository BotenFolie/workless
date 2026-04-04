import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/traitement-factures-automatique'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Traitement factures automatique — Zéro saisie manuelle | Stripwork',
  description: 'Extraction automatique des données PDF et injection dans votre ERP ou logiciel comptable. Zéro saisie, zéro erreur, zéro doublon. Mise en place en 5 jours.',
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,

        hero: {
          badge: 'DAF · Responsable compta · Office manager · Fondateur',
          h1: "Votre équipe saisit encore des factures à la main en 2025.",
          subtitle: "Chaque PDF entrant prend 10 à 15 minutes de traitement manuel. Multiplié par votre volume mensuel, c'est des jours de travail qualifié qui disparaissent dans de la ressaisie.",
          ctaLabel: 'Tester sur mes documents',
        },

        economicProblem: {
          sectionLabel: 'Le coût réel',
          headline: 'La saisie manuelle ne coûte pas que du temps. Elle coûte des erreurs, des retards, et du travail qualifié gaspillé.',
          body: "Une heure de comptable ou d'office manager coûte entre 25 et 50€ selon le profil. Sur 20 factures par semaine à 12 minutes chacune, c'est 4 heures par semaine — soit entre 400 et 800€ de coût mensuel en pure ressaisie. Sans compter les erreurs.\n\nUne erreur de TVA ou un doublon de paiement peut coûter une amende fiscale, décaler une clôture comptable de plusieurs jours, ou créer un litige fournisseur. Ces coûts ne sont pas dans le P&L — ils sont dans le temps de correction et dans le stress des équipes. Mais ils sont bien réels.",
          stats: [
            { value: '12 min', label: 'temps moyen de traitement manuel par facture fournisseur standard' },
            { value: '3,5%', label: "taux d'erreur observé sur la saisie manuelle de documents comptables" },
            { value: '−80%', label: 'de coût de traitement par document avec extraction automatique' },
          ],
        },

        alternativeDestruction: {
          sectionLabel: 'Ce qui ne suffit pas',
          headline: "Pourquoi les solutions existantes ne règlent pas le problème de fond.",
          intro: "Il existe déjà des outils pour accélérer la saisie. Voici pourquoi ils ne font que déplacer le problème :",
          alternatives: [
            {
              name: 'Le logiciel comptable avec OCR intégré',
              flaw: "L'OCR reconnaît les caractères mais ne comprend pas la structure. Il faut quand même vérifier, corriger, valider chaque ligne. La saisie est remplacée par de la vérification — presque aussi longue, toujours manuelle.",
            },
            {
              name: 'Le prestataire comptable externalisé',
              flaw: "Vous payez pour de la saisie à distance — pas pour de l'analyse. Le délai de traitement s'allonge, la visibilité sur vos données diminue, et le coût reste élevé pour des opérations qui n'ont aucune valeur ajoutée intellectuelle.",
            },
            {
              name: 'La saisie déléguée en interne',
              flaw: "Votre comptable, votre office manager ou votre assistante fait autre chose que ce pour quoi vous le payez. C'est une ressource qualifiée utilisée pour une tâche qui devrait être entièrement automatisée.",
            },
          ],
          conclusion: "L'extraction automatique n'accélère pas la saisie manuelle — elle la supprime. Du PDF entrant à votre ERP, sans intervention humaine sur la saisie elle-même.",
        },

        solution: {
          sectionLabel: 'Notre approche',
          headline: 'Du PDF entrant à votre logiciel comptable, sans que personne ne touche au clavier.',
          differentiators: [
            "Détection automatique dès la réception du document — email, scan, dépôt dans un dossier désigné.",
            "Extraction structurée : numéro de facture, montant HT/TTC, TVA, fournisseur, date d'échéance — selon votre format comptable.",
            "Règles métier incluses : catégories comptables, comptes d'imputation, règles de validation par montant ou fournisseur.",
            "Injection directe dans votre ERP ou logiciel comptable — sans reformatage, sans copier-coller.",
            "Détection des doublons avant injection — aucune facture traitée deux fois.",
            "Alerte sur les anomalies : montant inhabituel, fournisseur inconnu, TVA incohérente — les exceptions remontent pour validation humaine.",
          ],
        },

        process: {
          sectionLabel: 'Comment ça marche',
          headline: 'Le document arrive. Les données sont extraites. Votre ERP est mis à jour.',
          steps: [
            {
              num: '01',
              title: 'Le document arrive',
              body: "Email, scan ou transfert de fichier — peu importe le format. Le système détecte le document dès son arrivée dans votre boîte ou dossier désigné, sans action de votre part.",
            },
            {
              num: '02',
              title: 'Extraction et structuration',
              body: "Numéro de facture, montant HT/TTC, TVA, fournisseur, date d'échéance — extrait et structuré selon votre format comptable. Vos règles métier et catégories comptables sont appliquées automatiquement.",
            },
            {
              num: '03',
              title: 'Injection dans votre outil',
              body: "Les données arrivent directement dans votre ERP ou logiciel compta, formatées selon vos règles. Les exceptions remontent pour validation. Les doublons sont bloqués avant injection.",
            },
          ],
        },

        caseStudy: {
          sectionLabel: 'Cas concret',
          context: 'PME distribution — 22 personnes, ~85 factures fournisseurs par mois, logiciel comptable Pennylane',
          before: [
            { metric: 'temps de traitement moyen par facture', value: '14 min' },
            { metric: "taux d'erreur sur saisie", value: '4,1%' },
          ],
          after: [
            { metric: 'temps de traitement moyen par facture', value: '< 1 min' },
            { metric: "taux d'erreur sur saisie", value: '0,3%' },
          ],
          gain: "18h libérées par mois + taux d'erreur divisé par 13",
          nuance: "La comptable passe désormais son temps à valider les exceptions et à analyser les données — pas à les saisir. La clôture mensuelle a été réduite de 2 jours.",
        },

        targeting: {
          sectionLabel: 'Pour qui',
          headline: 'Ce système est rentable dès que vous traitez un volume régulier de documents.',
          forWho: [
            "Vous traitez plus de 20 factures ou documents comptables par mois.",
            "Votre équipe passe plus de 2 heures par semaine en saisie ou vérification de documents.",
            "Vous avez eu des erreurs de saisie avec des conséquences : doublons, erreurs TVA, retards de paiement.",
            "Vous utilisez un logiciel comptable ou ERP avec API ou import structuré.",
            "Vous voulez libérer du temps sur votre profil comptable ou administratif pour des tâches à valeur ajoutée.",
          ],
          notForWho: [
            "Vous traitez moins de 10 documents par mois — l'amortissement est trop long.",
            "Vos documents sont trop atypiques ou manuscrits pour être extraits de façon fiable.",
            "Votre logiciel comptable n'accepte aucun import ni API.",
          ],
        },

        seoContent: {
          sections: [
            {
              h2: "Traitement automatique des factures : ce que la technologie fait désormais",
              body: "L'extraction automatique de données sur factures repose sur une combinaison de reconnaissance optique de caractères (OCR), de structuration par modèles entraînés sur des documents comptables, et de règles de validation métier. Le résultat : un document PDF entrant est transformé en entrée comptable structurée en quelques secondes, sans intervention humaine sur la saisie elle-même.\n\nLe niveau de fiabilité atteint aujourd'hui dépasse ce qu'une saisie humaine produit en pratique. Non pas parce que la technologie est infaillible — elle ne l'est pas — mais parce qu'elle applique les mêmes règles de façon constante, sans fatigue, sans distraction. Les erreurs résiduelles sont détectées et remontent pour validation humaine. Les erreurs systémiques de la saisie manuelle, elles, ne remontent jamais.\n\nPour une PME qui traite entre 50 et 200 factures par mois, le ROI est visible en moins de 6 semaines — uniquement sur le temps libéré, sans compter les bénéfices sur la fiabilité des données.",
            },
            {
              h2: "Automatisation comptable : par où commencer",
              body: "La première étape n'est pas technologique — c'est l'identification du flux de documents le plus standardisé dans votre organisation. Les factures fournisseurs récurrentes (énergie, télécom, logiciels, prestataires réguliers) sont les meilleures candidates pour démarrer : format stable, champs prévisibles, volume régulier.\n\nUne fois ce flux automatisé, on peut étendre à des documents moins standardisés : notes de frais, bons de commande, devis entrants. Chaque nouveau type de document nécessite un temps de configuration des règles d'extraction — mais l'infrastructure reste la même.\n\nL'objectif à terme n'est pas de supprimer le comptable ou l'office manager. C'est de lui supprimer la partie la moins valorisante de son travail — la saisie — pour lui redonner du temps sur l'analyse, la vérification des anomalies, et le pilotage financier.",
            },
            {
              h2: "Intégration ERP et logiciel comptable : les questions à poser",
              body: "Avant de mettre en place un système d'extraction automatique, trois questions déterminent la faisabilité et le périmètre : votre logiciel comptable accepte-t-il un import structuré (API, CSV, format natif) ? Vos règles d'imputation sont-elles documentées ou dépendent-elles de décisions au cas par cas ? Votre processus de validation des factures implique-t-il une ou plusieurs personnes ?\n\nLes logiciels comptables les plus courants (Pennylane, Sage, QuickBooks, Cegid, Xero) disposent tous d'une API ou d'un format d'import structuré. La connexion est techniquement faisable dans la grande majorité des cas.\n\nLa vraie complexité est dans les règles métier : comment catégoriser une facture d'un prestataire polyvalent ? Quel compte d'imputation pour tel type de dépense ? Ces décisions doivent être documentées avant la mise en place — c'est d'ailleurs souvent l'occasion de formaliser des règles qui étaient jusqu'alors dans la tête d'une seule personne.",
            },
          ],
        },

        faq: [
          {
            question: "Avec quels logiciels comptables êtes-vous compatibles ?",
            answer: "Pennylane, Sage, QuickBooks, Xero, Cegid, FreshBooks, et tout logiciel disposant d'une API ou d'un format d'import structuré (CSV, JSON, XML). On évalue la compatibilité de votre outil spécifique lors du premier échange.",
          },
          {
            question: "Que se passe-t-il avec les factures atypiques ou illisibles ?",
            answer: "Le système détecte les documents dont le niveau de confiance d'extraction est insuffisant et les marque pour validation manuelle. Votre comptable reçoit une alerte avec le document et les données extraites partiellement — il valide ou corrige en quelques secondes. Zéro document traité de façon silencieuse si les données sont douteuses.",
          },
          {
            question: "Est-ce que ça fonctionne avec plusieurs fournisseurs aux formats différents ?",
            answer: "Oui. Les formats varient d'un fournisseur à l'autre, mais le système s'adapte. Les fournisseurs récurrents sont configurés avec leurs spécificités — le modèle apprend la structure propre à chaque format. Pour les fournisseurs occasionnels, l'extraction généraliste couvre la majorité des cas.",
          },
          {
            question: "Combien de temps pour la mise en place ?",
            answer: "Entre 3 et 6 jours ouvrés selon le nombre de fournisseurs à configurer et la complexité des règles d'imputation. La mise en place inclut la connexion à votre boîte email ou dossier source, le paramétrage des règles métier, les tests sur vos 20 dernières factures réelles, et la formation de votre équipe.",
          },
          {
            question: "Mes données financières sont-elles sécurisées ?",
            answer: "Les connexions se font via les APIs officielles de vos outils, avec des permissions minimales (écriture limitée au module facturation). Les documents transitent de façon chiffrée et ne sont pas conservés durablement après injection. Aucune donnée financière ne passe par des serveurs tiers non sécurisés.",
          },
        ],

        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
