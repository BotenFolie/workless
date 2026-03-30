'use client'

import RevealOnScroll from './ui/RevealOnScroll'
import MagneticButton from './ui/MagneticButton'
import { content } from '@/lib/content'
import { useDiagnostic } from '@/lib/diagnosticContext'

// Section CTA finale — headline large + bouton magnétique
export default function CTAFinal() {
  const { open } = useDiagnostic()

  return (
    <section id="cta" className="bg-[#1A1A1A] py-24 md:py-40">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="max-w-4xl">
          <RevealOnScroll>
            <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-8">
              Prochaine étape
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-grotesk font-bold text-surface text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-12">
              {content.ctaFinal.headline}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="w-16 h-0.5 bg-accent mb-12" />
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <MagneticButton>
              <button
                onClick={open}
                className="inline-flex items-center gap-3 font-inter font-semibold text-bg bg-accent px-8 py-4 md:px-10 md:py-5 rounded-sm text-base hover:bg-white transition-colors duration-200 group"
              >
                {content.ctaFinal.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </MagneticButton>

            <p className="font-inter text-neutral text-sm mt-6">
              Diagnostic gratuit · Premiers résultats en 14 jours
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
