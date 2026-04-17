import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt     = 'Stripwork — Automatisation IA pour PME'
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111111',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Accent bar top-left */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '6px', height: '100%',
          background: '#c6ff00',
          display: 'flex',
        }} />

        {/* Grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          display: 'flex',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: '#c6ff00',
            display: 'flex',
          }} />
          <span style={{
            color: '#c6ff00',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}>
            Automatisation IA
          </span>
        </div>

        {/* Brand */}
        <div style={{
          fontSize: '88px',
          fontWeight: 700,
          color: '#ededed',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          marginBottom: '28px',
          fontFamily: 'sans-serif',
        }}>
          Stripwork
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '24px',
          color: '#6b6b6b',
          fontFamily: 'sans-serif',
          lineHeight: 1.4,
          maxWidth: '640px',
        }}>
          Vos tâches répétitives disparaissent.
          Votre équipe reste.
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute',
          top: '72px',
          right: '80px',
          color: '#333',
          fontSize: '14px',
          fontFamily: 'sans-serif',
          letterSpacing: '0.05em',
        }}>
          stripwork.com
        </div>
      </div>
    ),
    { ...size }
  )
}
