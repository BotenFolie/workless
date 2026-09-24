// Image Open Graph « page d'annuaire » (FR / ES)

import { ImageResponse } from 'next/og'
import type { Locale } from './routes'

export const OG_SIZE = { width: 1200, height: 630 }

/** Récupère Geist en TTF ; repli sur la police par défaut si indisponible */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch('https://fonts.googleapis.com/css2?family=Geist:wght@800').then((r) => r.text())
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch (err) {
    console.error('[og] police indisponible', err)
    return null
  }
}

export async function ogImage(locale: Locale) {
  const font = await loadDisplayFont()
  const title = locale === 'fr' ? 'D’une ligne perdue à la première place.' : 'De una línea perdida al primer puesto.'
  const sub =
    locale === 'fr' ? 'Création de sites · SEO · Google Ads — France & Espagne' : 'Diseño web · SEO · Google Ads — España y Francia'
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#111111', padding: '56px 64px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '2px solid #111111', paddingBottom: 14 }}>
          <div style={{ fontSize: 64, fontFamily: font ? 'Geist' : undefined, fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.9 }}>stripwork</div>
          <div style={{ fontSize: 22 }}>stripwork.com</div>
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <div style={{ fontSize: 104, fontFamily: font ? 'Geist' : undefined, fontWeight: 800, letterSpacing: '-0.055em', lineHeight: 0.95, maxWidth: 1000, backgroundImage: 'linear-gradient(transparent 0%, transparent 100%)' }}>{title}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 36, height: 20, background: '#ffe24a' }} />
          <div style={{ fontSize: 30 }}>{sub}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: font ? [{ name: 'Geist', data: font, weight: 800, style: 'normal' }] : undefined },
  )
}
