'use client'

import RevealOnScroll from './ui/RevealOnScroll'
import MagneticButton from './ui/MagneticButton'
import { useContent } from '@/lib/i18n'
import { useDiagnostic } from '@/lib/diagnosticContext'

// Bloc pricing — 3 offres fixes + maintenance optionnelle
export default function Pricing() {
  const { open } = useDiagnostic()
  const c = useContent()
  const { pricing } = c

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <RevealOnScroll>
          <h2 className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-6">
            {pricing.label}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <p className="font-grotesk font-bold text-surface text-3xl md:text-4xl leading-tight tracking-tight mb-16 md:mb-20 max-w-2xl">
            {pricing.headline}
          </p>
        </RevealOnScroll>

        {/* 3 plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.06] mb-8">
          {pricing.plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 0.1}>
              <div className={`relative h-full flex flex-col p-8 md:p-10 ${
                i < pricing.plans.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.06]' : ''
              } ${plan.highlight ? 'bg-accent/[0.04]' : ''}`}>

                {plan.highlight && 'highlightLabel' in plan && (
                  <div className="absolute top-0 left-8 md:left-10 -translate-y-1/2">
                    <span className="font-inter text-[10px] font-bold tracking-widest uppercase bg-accent text-bg px-3 py-1">
                      {plan.highlightLabel}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className={`font-grotesk font-bold text-surface tracking-tight ${
                      plan.price === 'Sur devis' || plan.price === 'Custom quote' ? 'text-2xl' : 'text-4xl'
                    }`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="font-inter text-neutral text-xs mb-1">{plan.priceNote}</p>
                  <p className="font-inter text-accent text-xs font-semibold">
                    {plan.price === 'Sur devis' || plan.price === 'Custom quote'
                      ? plan.delivery
                      : `${c.ui.delivery} ${plan.delivery}`}
                  </p>
                </div>

                <p className="font-inter text-neutral text-sm leading-relaxed mb-8">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-accent text-xs mt-0.5 flex-shrink-0 font-bold">✓</span>
                      <span className="font-inter text-sm text-surface/80 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={open}
                  className={`w-full font-inter font-semibold text-sm py-3.5 transition-colors duration-200 ${
                    plan.highlight
                      ? 'bg-accent text-bg hover:bg-white'
                      : 'border border-white/[0.15] text-surface hover:border-accent/50 hover:bg-accent/[0.04]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Maintenance optionnelle */}
        <RevealOnScroll delay={0.3}>
          <div className="border border-white/[0.06] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="flex-shrink-0">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                {pricing.maintenance.name}
              </p>
              <div className="font-grotesk font-bold text-surface text-3xl tracking-tight">
                {pricing.maintenance.price}
              </div>
              <p className="font-inter text-neutral text-xs mt-1">{pricing.maintenance.priceNote}</p>
            </div>

            <div className="h-px md:h-12 md:w-px bg-white/[0.06]" />

            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 flex-1">
              {pricing.maintenance.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="text-accent text-xs mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="font-inter text-sm text-surface/75 leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}
