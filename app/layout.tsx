import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/ui/Providers'

// Chargement local via next/font — élimine le blocage réseau Google Fonts (LCP)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export const metadata: Metadata = {
  title: "Stripwork — Automatisez jusqu'à 60% de vos tâches répétitives",
  description:
    "On automatise les tâches répétitives de votre entreprise en moins de 14 jours. Libérez vos équipes.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Stripwork — Automatisez jusqu'à 60% de vos tâches répétitives",
    description:
      "On automatise les tâches répétitives de votre entreprise en moins de 14 jours. Libérez vos équipes.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Stripwork',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Stripwork — Automatisation IA pour PME',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stripwork — Automatisez jusqu'à 60% de vos tâches répétitives",
    description:
      "On automatise les tâches répétitives de votre entreprise en moins de 14 jours. Libérez vos équipes.",
    images: [`${SITE_URL}/og-image.png`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="cursor-none">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
