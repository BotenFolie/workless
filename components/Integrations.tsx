'use client'

import DiagnosticCard from '@/components/DiagnosticCard'
import {
  siNotion, siGmail, siHubspot, siAirtable, siStripe, siZapier, siN8n, siMake,
  siShopify, siTrello, siAsana, siClickup, siGooglesheets, siGoogledrive, siMailchimp, siTypeform, siWebflow, siWordpress,
  siZoom, siWhatsapp, siGithub, siJira, siClaude, siDiscord, siGooglecalendar, siIntercom, siZendesk, siSupabase,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

// ─── Répartition sur 2 anneaux ───────────────────────────────────────────────

const RINGS: {
  icons:     SimpleIcon[]
  radius:    number
  duration:  number
  direction: 'cw' | 'ccw'
}[] = [
  {
    icons:    [siNotion, siGmail, siHubspot, siAirtable, siStripe, siZapier, siN8n, siMake, siShopify, siTrello, siAsana, siClickup, siGooglesheets, siGoogledrive],
    radius:   130,
    duration: 40,
    direction: 'cw',
  },
  {
    icons:    [siMailchimp, siTypeform, siWebflow, siWordpress, siZoom, siWhatsapp, siGithub, siJira, siClaude, siDiscord, siGooglecalendar, siIntercom, siZendesk, siSupabase],
    radius:   215,
    duration: 65,
    direction: 'ccw',
  },
]

// ─── Logo orbe (carte circulaire) ────────────────────────────────────────────

function LogoOrb({ icon }: { icon: SimpleIcon }) {
  return (
    <div
      className="group relative w-11 h-11 rounded-full border border-white/[0.10] bg-[#141414] hover:border-accent/50 hover:bg-[#1c1c1c] transition-all duration-300 flex items-center justify-center"
      title={icon.title}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-white/50 group-hover:text-white/90 transition-colors duration-300"
      >
        <path d={icon.path} />
      </svg>

      {/* Tooltip nom */}
      <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-inter text-[9px] text-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {icon.title}
      </span>
    </div>
  )
}

// ─── Anneau orbital ───────────────────────────────────────────────────────────

function OrbitalRing({ icons, radius, duration, direction }: typeof RINGS[0]) {
  const spin    = `orbitCW  ${duration}s linear infinite`
  const counter = `orbitCCW ${duration}s linear infinite`
  const ringAnim    = direction === 'cw'  ? spin    : counter
  const counterAnim = direction === 'cw'  ? counter : spin

  return (
    <>
      {/* Chemin de l'anneau — cercle pointillé discret */}
      <div
        className="absolute rounded-full border border-dashed border-white/[0.05]"
        style={{
          width:  radius * 2,
          height: radius * 2,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Conteneur rotatif */}
      <div
        className="absolute inset-0"
        style={{ animation: ringAnim }}
      >
        {icons.map((icon, i) => {
          const angle = (i / icons.length) * 360
          return (
            <div
              key={icon.slug}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px) translateY(-50%)`,
              }}
            >
              {/* Contre-rotation pour garder le logo droit */}
              <div style={{ animation: counterAnim }}>
                <LogoOrb icon={icon} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

// ─── Centre — laptop stylisé ──────────────────────────────────────────────────

function LaptopCenter() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">

      {/* Pulse rings */}
      <div className="absolute w-24 h-24 rounded-full bg-accent/10"
        style={{ animation: 'pulse-ring 3s ease-out infinite' }} />
      <div className="absolute w-24 h-24 rounded-full bg-accent/6"
        style={{ animation: 'pulse-ring 3s ease-out 1.5s infinite' }} />

      {/* Écran */}
      <div className="relative z-10 w-36 border border-white/[0.12] bg-[#0d0d0d] rounded-md overflow-hidden">
        {/* Barre de titre */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
          <span className="font-grotesk font-bold text-accent text-[9px] tracking-[0.15em]">STRIPWORK</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          </div>
        </div>
        {/* Contenu écran */}
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

      {/* Clavier */}
      <div className="relative z-10 w-40 h-2 bg-[#161616] border border-white/[0.08] border-t-0 rounded-b-md" />
      <div className="relative z-10 w-28 h-1 bg-[#111] rounded-b-md" />
    </div>
  )
}

// ─── Section principale ───────────────────────────────────────────────────────

// Taille du conteneur orbital = rayon max × 2 + marge pour logos
const SIZE = 215 * 2 + 80 // 510px

export default function Integrations() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-block font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent border border-accent/30 px-3 py-1.5 mb-5">
            28 intégrations
          </span>
          <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Connecté à tout ce que vous utilisez déjà.
          </h2>
          <p className="font-inter text-neutral text-sm max-w-sm">
            Vos outils restent en place — on les fait parler ensemble.
          </p>
        </div>

        {/* Layout deux colonnes */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-16">

          {/* Gauche — formulaire diagnostic */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <DiagnosticCard />
          </div>

          {/* Droite — animation orbitale, cachée sur mobile (décoratif) */}
          <div className="hidden lg:flex flex-1 items-center justify-center overflow-hidden">
            <div
              className="relative flex-shrink-0"
              style={{ width: SIZE, height: SIZE }}
            >
              {RINGS.map((ring, i) => (
                <OrbitalRing key={i} {...ring} />
              ))}
              <LaptopCenter />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
