'use client'

import {
  siNotion, siGmail, siHubspot, siAirtable, siTrello,
  siShopify, siStripe, siZapier, siGooglesheets, siGoogledrive,
  siN8n, siMake, siAsana, siClickup,
  siZoom, siWhatsapp, siGithub, siTypeform, siWebflow,
  siWordpress, siJira, siMailchimp, siClaude, siDiscord,
  siGooglecalendar, siIntercom, siZendesk, siSupabase,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

// ─── Deux rangées de logos ────────────────────────────────────────────────────

const ROW_1: SimpleIcon[] = [
  siNotion, siGmail, siHubspot, siAirtable, siTrello,
  siShopify, siStripe, siZapier, siGooglesheets, siGoogledrive,
  siN8n, siMake, siAsana, siClickup,
]

const ROW_2: SimpleIcon[] = [
  siZoom, siWhatsapp, siGithub, siTypeform, siWebflow,
  siWordpress, siJira, siMailchimp, siClaude, siDiscord,
  siGooglecalendar, siIntercom, siZendesk, siSupabase,
]

// ─── Carte logo ───────────────────────────────────────────────────────────────

function LogoCard({ icon }: { icon: SimpleIcon }) {
  return (
    <div className="group flex-shrink-0 flex flex-col items-center justify-center gap-2.5 w-28 h-20 border border-white/[0.07] bg-[#141414] hover:border-accent/30 hover:bg-white/[0.03] transition-all duration-300 cursor-default mx-2">
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors duration-300"
        aria-label={icon.title}
      >
        <path d={icon.path} />
      </svg>
      <span className="font-inter text-[10px] text-neutral/40 group-hover:text-neutral/70 transition-colors duration-300 tracking-wide text-center leading-none px-1 truncate w-full text-center">
        {icon.title}
      </span>
    </div>
  )
}

// ─── Rangée défilante ─────────────────────────────────────────────────────────

function MarqueeRow({ icons, reverse = false }: { icons: SimpleIcon[]; reverse?: boolean }) {
  // Triple pour que la boucle soit invisible quelle que soit la largeur d'écran
  const all = [...icons, ...icons, ...icons]
  return (
    <div className="relative overflow-hidden">
      {/* Fondu gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-bg to-transparent" />
      {/* Fondu droite */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-bg to-transparent" />

      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {all.map((icon, i) => (
          <LogoCard key={`${icon.slug}-${i}`} icon={icon} />
        ))}
      </div>
    </div>
  )
}

// ─── Section principale ───────────────────────────────────────────────────────

export default function Integrations() {
  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 mb-14">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="inline-block font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent border border-accent/30 px-3 py-1.5 mb-5">
              Intégrations
            </span>
            <h2 className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight">
              Connecté à tout ce que<br className="hidden md:block" /> vous utilisez déjà.
            </h2>
          </div>
          <p className="font-inter text-neutral text-sm leading-relaxed max-w-xs md:text-right">
            28 connecteurs disponibles.<br />
            Vos outils restent en place —<br />
            on les fait simplement parler ensemble.
          </p>
        </div>

        {/* Séparateur */}
        <div className="mt-10 h-px bg-white/[0.06]" />
      </div>

      {/* Marquees */}
      <div className="space-y-3">
        <MarqueeRow icons={ROW_1} />
        <MarqueeRow icons={ROW_2} reverse />
      </div>

    </section>
  )
}
