import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size    = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '28px',
        }}
      >
        <span style={{
          color: '#c6ff00',
          fontSize: '110px',
          fontWeight: 700,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}>
          S
        </span>
      </div>
    ),
    { ...size }
  )
}
