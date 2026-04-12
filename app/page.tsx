import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProblemBlock from '@/components/ProblemBlock'
import CostBlock from '@/components/CostBlock'
import OfferPillars from '@/components/OfferPillars'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'
import Marquee from '@/components/ui/Marquee'
import Integrations from '@/components/Integrations'
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

// Schema Service avec pricing des 3 offres — rich snippets Google
function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatisation IA pour PME',
    description: 'Automatisez vos tâches répétitives en moins de 14 jours et libérez vos équipes.',
    provider: {
      '@type': 'Organization',
      name: 'Stripwork',
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com',
    },
    areaServed: 'FR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter — 1 automatisation simple',
        price: '1500',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
        availability: 'InStock',
      },
      {
        '@type': 'Offer',
        name: 'Growth — 2 à 5 automatisations + dashboard',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '2000',
          maxPrice: '4500',
          priceCurrency: 'EUR',
        },
        availability: 'InStock',
      },
      {
        '@type': 'Offer',
        name: 'Full Stack — automatisations illimitées + dashboard',
        description: 'Sur devis selon périmètre et complexité',
        availability: 'InStock',
      },
    ],
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
    name: 'Stripwork',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com',
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

// Homepage Stripwork — assemblage avec marquee entre sections clés
export default function HomePage() {
  return (
    <>
      <ServiceSchema />
      <FaqSchema />
      <OrgSchema />
      <main>
        <Nav />
        <Hero />
        <Marquee />
        <ProblemBlock />
        <CostBlock />
        <Integrations />
        <OfferPillars />
        <Marquee />
        <SocialProof />
        <Pricing />
        <FAQ />
        <CTAFinal />
        <Footer />
      </main>
    </>
  )
}
