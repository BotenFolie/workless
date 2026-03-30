'use client'

import { motion } from 'framer-motion'
import RevealOnScroll from './ui/RevealOnScroll'
import RenderBlocks from './ui/RenderBlocks'
import { content } from '@/lib/content'

export default function OfferPillars() {
  return (
    <section className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-16 md:mb-20">
            Comment ça marche
          </span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.06]">
          {content.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                delay: index * 0.12,
              }}
              whileHover={{ backgroundColor: 'rgba(198, 255, 0, 0.03)' }}
              className={`relative p-8 md:p-10 flex flex-col gap-6 transition-colors duration-300 ${
                index < content.pillars.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-white/[0.06]'
                  : ''
              }`}
            >
              {/* Glow au hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent pointer-events-none"
              />

              {/* Numéro décoratif — masqué sur mobile pour éviter overflow */}
              <span
                aria-hidden="true"
                className="hidden md:block absolute bottom-4 right-6 font-grotesk font-bold text-accent opacity-[0.06] text-[7rem] leading-none select-none pointer-events-none"
              >
                {pillar.number}
              </span>

              <div className="relative z-10 space-y-4">
                <span className="font-grotesk font-bold text-accent text-sm tracking-widest block">
                  {pillar.number}
                </span>
                <h3 className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              <div className="relative z-10">
                <RenderBlocks
                  blocks={pillar.blocks}
                  textClass="font-inter text-neutral text-sm leading-relaxed"
                  listItemClass="font-inter text-neutral text-sm"
                />
              </div>

              <div className="relative z-10 w-8 h-0.5 bg-accent mt-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
