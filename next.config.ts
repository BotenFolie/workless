import type { NextConfig } from 'next'

// Anciennes URLs du site Stripwork (offre automatisation) → équivalents les plus proches
const OLD_TO_NEW: [string, string][] = [
  // Études de cas retirées (2026-09-25)
  ['/realisations/voyance', '/realisations'],
  ['/realisations/backtrack', '/realisations'],
  ['/es/proyectos/voyance', '/es/proyectos'],
  ['/es/proyectos/backtrack', '/es/proyectos'],
  ['/automatisation-leads', '/'],
  ['/relance-commerciale-automatique', '/'],
  ['/reactivation-clients-automatique', '/'],
  ['/reporting-automatique', '/'],
  ['/traitement-factures-automatique', '/'],
  ['/automatisation-reactivite-leads', '/'],
  ['/automatisation-relances-prospects', '/'],
  ['/automatisation-reporting-interne', '/'],
  ['/automatisation-traitement-factures-documents', '/'],
  ['/automatisation-reactivation-base-clients', '/'],
  ['/a-propos', '/studio'],
  ['/merci', '/'],
]

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  experimental: {
    globalNotFound: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return OLD_TO_NEW.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ]
  },
}

export default nextConfig
