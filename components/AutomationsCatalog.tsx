'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useContent } from '@/lib/i18n'
import { useDiagnostic } from '@/lib/diagnosticContext'

export default function AutomationsCatalog() {
  const c = useContent()
  const { open } = useDiagnostic()
  const { badge, title, subtitle, cta, categories } = c.automationsCatalog
  const [activeId, setActiveId] = useState<string>(categories[0].id)

  const activeCategory = categories.find(cat => cat.id === activeId)!

  return (
    <section className="py-20 md:py-32 bg-[#0d0d0d] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-5 md:px-10">

        {/* Header — centré */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-inter text-xs font-semibold tracking-[0.15em] text-accent uppercase mb-3 md:mb-4">
            {badge}
          </p>
          <h2 className="font-grotesk font-bold text-2xl md:text-4xl text-surface tracking-tight mb-4">
            {title}
          </h2>
          <p className="font-inter text-sm text-neutral leading-relaxed max-w-lg mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grille catégories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 mb-2 md:mb-3">
          {categories.map((cat) => {
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`
                  group relative text-left p-3 md:p-5 rounded-sm border transition-all duration-200
                  ${isActive
                    ? 'border-accent/70 bg-accent/[0.07]'
                    : 'border-white/[0.12] bg-[#161616] hover:border-white/30 hover:bg-white/[0.04]'
                  }
                `}
              >
                {/* Icon */}
                <span className={`
                  block text-lg md:text-2xl mb-2 md:mb-4 transition-colors duration-200
                  ${isActive ? 'text-accent' : 'text-white/40 group-hover:text-white/70'}
                `}>
                  {cat.icon}
                </span>

                {/* Label */}
                <p className={`
                  font-inter text-[11px] md:text-xs font-semibold leading-snug transition-colors duration-200
                  ${isActive ? 'text-surface' : 'text-white/70 group-hover:text-surface'}
                `}>
                  {cat.label}
                </p>

                {/* Count — masqué sur très petit écran */}
                <p className={`
                  hidden sm:block font-inter text-xs mt-1.5 transition-colors duration-200
                  ${isActive ? 'text-accent' : 'text-white/30 group-hover:text-white/50'}
                `}>
                  {cat.items.length} exemples
                </p>

                {/* Active bar */}
                {isActive && (
                  <motion.span
                    layoutId="activeBar"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-b-sm"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Panel animé */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border border-white/[0.10] bg-[#111111] rounded-sm p-4 md:p-8"
          >
            {/* Panel header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
              <span className="text-accent text-base">{activeCategory.icon}</span>
              <h3 className="font-grotesk font-semibold text-sm text-surface">
                {activeCategory.label}
              </h3>
              <span className="ml-auto font-inter text-xs text-white/25 shrink-0">
                {activeCategory.items.length} exemples
              </span>
            </div>

            {/* Items — 1 col mobile, 2 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
              {activeCategory.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.12, delay: i * 0.035 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                  <span className="font-inter text-sm text-white/70 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Note non-exhaustive */}
        <p className="mt-4 text-center font-inter text-xs text-white/25 leading-relaxed px-2">
          Liste non exhaustive — chaque automatisation est adaptée aux besoins et à l'infrastructure spécifique du client.
        </p>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <button
            onClick={open}
            className="w-full sm:w-auto font-inter font-semibold text-sm text-bg bg-accent px-7 py-3 rounded-sm hover:bg-white transition-colors duration-200"
          >
            {cta}
          </button>
          <p className="font-inter text-xs text-white/30">
            Diagnostic gratuit · 3 minutes
          </p>
        </div>

      </div>
    </section>
  )
}
