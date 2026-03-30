import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/ui/Providers'

export const metadata: Metadata = {
  title: "Stripwork \u2014 Automatisez jusqu\u2019\u00E0 60% de vos t\u00E2ches r\u00E9p\u00E9titives",
  description:
    "On automatise les t\u00E2ches r\u00E9p\u00E9titives de votre entreprise en moins de 14 jours. Lib\u00E9rez vos \u00E9quipes pour ce qui compte vraiment.",
  openGraph: {
    title: "Stripwork \u2014 Automatisez jusqu\u2019\u00E0 60% de vos t\u00E2ches r\u00E9p\u00E9titives",
    description:
      "On automatise les t\u00E2ches r\u00E9p\u00E9titives de votre entreprise en moins de 14 jours. Lib\u00E9rez vos \u00E9quipes pour ce qui compte vraiment.",
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Stripwork',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stripwork \u2014 Automatisez jusqu\u2019\u00E0 60% de vos t\u00E2ches r\u00E9p\u00E9titives",
    description:
      "On automatise les t\u00E2ches r\u00E9p\u00E9titives de votre entreprise en moins de 14 jours.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="cursor-none">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
