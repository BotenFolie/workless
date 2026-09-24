import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

// Favicon : onglet d'annuaire noir, S blanc, surligneur jaune
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111111', borderBottom: '10px solid #ffe24a', color: '#ffffff', fontSize: 50, fontWeight: 900 }}>
        S
      </div>
    ),
    size,
  )
}
