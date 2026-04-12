import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  redirects: async () => {
    return [
      { source: '/automatisation-reactivite-leads',          destination: '/automatisation-leads',              permanent: true },
      { source: '/automatisation-relances-prospects',        destination: '/relance-commerciale-automatique',   permanent: true },
      { source: '/automatisation-reporting-interne',         destination: '/reporting-automatique',             permanent: true },
      { source: '/automatisation-traitement-factures-documents', destination: '/traitement-factures-automatique', permanent: true },
      { source: '/automatisation-reactivation-base-clients', destination: '/reactivation-clients-automatique',  permanent: true },
    ]
  },
  headers: async () => {
    return [
      {
        source: '/favicon.ico',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/apple-touch-icon.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/og-image.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, immutable' }],
      },
      {
        source: '/:path(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control',  value: 'on' },
          { key: 'X-Frame-Options',          value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',   value: 'nosniff' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'production'
              ? "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';"
              : "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';",
          },
          { key: 'Permissions-Policy',           value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security',    value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ]
  },
}

export default nextConfig
