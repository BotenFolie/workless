import type { Metadata } from 'next'
import AtelierExperience from '@/components/realisations/AtelierExperience'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: 'Réalisations — Des sites qui vendent | Stripwork',
  description:
    "Sélection de sites, landing pages et lancements d'app conçus pour convertir. Chaque projet, une étude de cas : problème, solution, stratégie, résultat.",
  alternates: { canonical: `${SITE_URL}/realisations` },
  openGraph: {
    title: 'Réalisations — Des sites qui vendent',
    description:
      "Sites, landing pages et lancements d'app pensés pour convertir. Survolez, cliquez, voyez le résultat.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Stripwork',
    url: `${SITE_URL}/realisations`,
  },
}

export default function RealisationsPage() {
  return <AtelierExperience />
}
