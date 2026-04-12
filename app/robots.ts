import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://stripwork.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/merci',  // page de résultat conversion — noindex de toute façon
          '/api/',   // routes API non pertinentes pour le crawl
        ],
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
