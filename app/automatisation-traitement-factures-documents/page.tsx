import type { Metadata } from 'next'
import AutomationPage from '@/components/AutomationPage'
import { getCrossLinks } from '@/lib/automationCatalogue'

const SLUG = '/automatisation-traitement-factures-documents'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Automatisation saisie factures et documents — Traitement automatique | Stripwork',
  description: "Zéro saisie manuelle, zéro erreur de doublon. Extraction automatique des données PDF et injection dans votre ERP ou logiciel comptable.",
  alternates: { canonical: `${SITE_URL}${SLUG}` },
}

export default function Page() {
  return (
    <AutomationPage
      data={{
        slug: SLUG,
        hero: {
          badge: 'DAF · Responsable compta · Office manager',
          h1: "Votre équipe saisit encore des factures à la main en 2025.",
          subtitle: "Chaque PDF entrant prend 10 à 15 minutes de traitement manuel. Multiplié par le volume, c'est des jours de travail par mois qui ne devraient plus exister.",
          ctaLabel: 'Tester sur mes documents',
        },
        problem: {
          headline: "La saisie manuelle n'est pas de la comptabilité. C'est de la ressaisie. Et ça coûte plus cher qu'un abonnement logiciel.",
          bullets: [
            "Chaque PDF entrant demande une ouverture, une lecture, une saisie dans l'ERP — répété des dizaines de fois par semaine, sans exception.",
            "Une erreur de saisie TVA ou un doublon peut coûter une amende ou retarder une clôture comptable de plusieurs jours.",
            "Votre comptable passe son temps à formater des données plutôt qu'à analyser les comptes. Ce n'est pas pour ça que vous le payez.",
          ],
        },
        solution: {
          headline: "Du PDF entrant à votre logiciel comptable, sans intervention humaine.",
          steps: [
            {
              num: '01',
              title: 'Le document arrive',
              body: "Email, scan ou transfert — peu importe le format. L'automatisation capte le document dès son arrivée dans votre boîte ou dossier désigné.",
            },
            {
              num: '02',
              title: 'Extraction des données clés',
              body: "Numéro de facture, montant HT/TTC, TVA, fournisseur, date d'échéance — extrait et structuré selon votre format comptable. Règles métier incluses.",
            },
            {
              num: '03',
              title: 'Injection dans votre outil',
              body: "Les données arrivent directement dans votre ERP ou logiciel compta, formatées selon vos règles. Aucune saisie, aucune ressaisie, aucun doublon.",
            },
          ],
        },
        proof: {
          before: '~15 min',
          after: '< 1 min',
          metric: 'par document traité, sur nos configurations types',
          nuance: "Temps observé sur des factures fournisseurs standard. Varie selon la complexité des documents et les règles métier à appliquer — mais la saisie manuelle en sort entièrement.",
        },
        formTitle: "On teste ça sur vos 10 dernières factures.",
        crossLinks: getCrossLinks(SLUG),
      }}
    />
  )
}
