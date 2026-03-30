import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProblemBlock from '@/components/ProblemBlock'
import OfferPillars from '@/components/OfferPillars'
import SocialProof from '@/components/SocialProof'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import Marquee from '@/components/ui/Marquee'
import { content } from '@/lib/content'

// Schema FAQPage pour les rich snippets Google
function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.blocks
          .map(b => b.type === 'p' ? b.text : (b.type === 'list' ? b.items?.join(', ') : ''))
          .filter(Boolean)
          .join(' '),
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Schema Organization
function OrgSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Workless',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://workless.fr',
    description: 'Automatisation des tâches répétitives pour les PME de 5 à 50 personnes.',
    areaServed: 'FR',
    serviceType: 'Automatisation IA',
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Homepage Workless — assemblage avec marquee entre sections clés
export default function HomePage() {
  return (
    <>
      <FaqSchema />
      <OrgSchema />
      <main>
        <Nav />
        <Hero />
        <Marquee />
        <ProblemBlock />
        <OfferPillars />
        <Marquee />
        <SocialProof />
        <FAQ />
        <CTAFinal />
        <Footer />
      </main>
    </>
  )
}
