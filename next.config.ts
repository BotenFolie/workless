import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
