import type { Metadata } from 'next'
import AProposContent from './AProposContent'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'À propos', item: `${SITE_URL}/a-propos` },
    ],
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export const metadata: Metadata = {
  title: 'À propos — Stripwork | Automatisation IA pour PME',
  description: 'La mission de Stripwork : automatiser les tâches répétitives de votre entreprise et libérer vos équipes pour ce qui compte vraiment.',
  alternates: { canonical: `${SITE_URL}/a-propos` },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema />
      <AProposContent />
    </>
  )
}
