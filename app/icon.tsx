import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

// Favicon : onglet d'annuaire jaune, S noir
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3cd15', borderBottom: '8px solid #15130f', color: '#15130f', fontSize: 50, fontWeight: 900 }}>
        S
      </div>
    ),
    size,
  )
}
