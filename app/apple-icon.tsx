import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3cd15', borderBottom: '22px solid #15130f', color: '#15130f', fontSize: 130, fontWeight: 900 }}>
        S
      </div>
    ),
    size,
  )
}
