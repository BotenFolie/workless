import type { MetadataRoute } from 'next'

// Manifeste : icônes haute définition pour Android, partages et moteurs
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Stripwork',
    short_name: 'Stripwork',
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#111111',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
