'use client'

import DiagnosticCard from '@/components/DiagnosticCard'
import {
  siNotion, siGmail, siHubspot, siAirtable, siStripe, siZapier, siN8n, siMake,
  siShopify, siTrello, siAsana, siClickup, siGooglesheets, siGoogledrive, siMailchimp, siTypeform,
  siWebflow, siWordpress, siZoom, siWhatsapp, siGithub, siJira, siClaude, siDiscord,
  siGooglecalendar, siIntercom, siZendesk, siSupabase,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

// ─── Logos répartis en 2 groupes sur le même cercle ──────────────────────────

const GROUP_A: SimpleIcon[] = [
  siNotion, siGmail, siHubspot, siAirtable, siStripe, siZapier,
  siN8n, siMake, siShopify, siTrello, siAsana, siClickup, siGooglesheets, siGoogledrive,
]

const GROUP_B: SimpleIcon[] = [
  siMailchimp, siTypeform, siWebflow, siWordpress, siZoom, siWhatsapp,
  siGithub, siJira, siClaude, siDiscord, siGooglecalendar, siIntercom, siZendesk, siSupabase,
]

const RADIUS = 210

// ─── Logo orbe avec couleur de marque ────────────────────────────────────────

function LogoOrb({ icon }: { icon: SimpleIcon }) {
  const brandColor = `#${icon.hex}`

  return (
    <div
      className="group relative w-10 h-10 rounded-full border border-white/[0.08] bg-[#141414] hover:border-white/20 transition-all duration-300 flex items-center justify-center"
      title={icon.title}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 transition-all duration-300"
        style={{ fill: brandColor, opacity: 0.65 }}
      >
        <path d={icon.path} />
      </svg>
    </div>
  )
}

// ─── Groupe orbital sur un seul cercle ────────────────────────────────────────

function OrbitalGroup({
  icons,
  radius,
  duration,
  direction,
  offset = 0,
}: {
  icons: SimpleIcon[]
  radius: number
  duration: number
  direction: 'cw' | 'ccw'
  offset?: number
}) {
  const anim = direction === 'cw'
    ? `orbitCW ${duration}s linear infinite`
    : `orbitCCW ${duration}s linear infinite`
  const counterAnim = direction === 'cw'
    ? `orbitCCW ${duration}s linear infinite`
    : `orbitCW ${duration}s linear infinite`

  return (
    <div className="absolute inset-0" style={{ animation: anim }}>
      {icons.map((icon, i) => {
        const angle = (i / icons.length) * 360 + offset
        return (
          <div
            key={icon.slug}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px) translateY(-50%)`,
            }}
          >
            <div style={{ animation: counterAnim }}>
              <LogoOrb icon={icon} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Centre — laptop stylisé ──────────────────────────────────────────────────

function LaptopCenter() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="absolute w-24 h-24 rounded-full bg-accent/10"
        style={{ animation: 'pulse-ring 3s ease-out infinite' }} />
      <div className="absolute w-24 h-24 rounded-full bg-accent/6"
        style={{ animation: 'pulse-ring 3s ease-out 1.5s infinite' }} />

      <div className="relative z-10 w-36 border border-white/[0.12] bg-[#0d0d0d] rounded-md overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
          <span className="font-grotesk font-bold text-accent text-[9px] tracking-[0.15em]">STRIPWORK</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          </div>
        </div>
        <div className="p-3 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <div className="h-1.5 w-14 bg-accent/30 rounded-full" />
          </div>
          <div className="h-1 w-20 bg-white/[0.07] rounded-full" />
          <div className="h-1 w-16 bg-white/[0.07] rounded-full" />
          <div className="h-1 w-12 bg-white/[0.05] rounded-full" />
          <div className="mt-2 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-accent/60" />
            <div className="h-1 w-10 bg-accent/20 rounded-full" />
          </div>
        </div>
      </div>

      <div className="relative z-10 w-40 h-2 bg-[#161616] border border-white/[0.08] border-t-0 rounded-b-md" />
      <div className="relative z-10 w-28 h-1 bg-[#111] rounded-b-md" />
    </div>
  )
}

// ─── Section principale ───────────────────────────────────────────────────────

const SIZE = RADIUS * 2 + 80

export default function Integrations() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-14">
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Connecté à tout ce que vous utilisez déjà.
          </h2>
          <p className="font-inter text-muted text-sm max-w-sm">
            On branche Stripwork sur vos outils en place — rien à changer, tout à gagner.
          </p>
        </div>

        {/* Layout deux colonnes */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-16">

          {/* Gauche — formulaire diagnostic */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <DiagnosticCard />
          </div>

          {/* Droite — cercle unique, deux groupes en sens inverses */}
          <div className="hidden lg:flex flex-1 items-center justify-center overflow-hidden">
            <div
              className="relative flex-shrink-0"
              style={{ width: SIZE, height: SIZE }}
            >
              {/* Cercle guide — une seule ligne */}
              <div
                className="absolute rounded-full border border-dashed border-white/[0.06]"
                style={{
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* Groupe A — sens horaire, logos pairs */}
              <OrbitalGroup
                icons={GROUP_A}
                radius={RADIUS}
                duration={50}
                direction="cw"
                offset={0}
              />

              {/* Groupe B — sens anti-horaire, logos impairs (décalés) */}
              <OrbitalGroup
                icons={GROUP_B}
                radius={RADIUS}
                duration={50}
                direction="ccw"
                offset={360 / (GROUP_B.length * 2)}
              />

              <LaptopCenter />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
