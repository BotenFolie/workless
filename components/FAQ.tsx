'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from './ui/RevealOnScroll'
import RenderBlocks from './ui/RenderBlocks'
import { content } from '@/lib/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <span className="font-inter text-xs font-semibold tracking-widest uppercase text-accent block mb-16 md:mb-20">
            Questions fréquentes
          </span>
        </RevealOnScroll>

        <div className="max-w-3xl">
          {content.faq.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.08}>
              <div className="border-b border-white/[0.08]">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 md:py-7 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-grotesk font-semibold text-surface text-lg md:text-xl leading-snug pr-8 group-hover:text-accent transition-colors duration-200">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="flex-shrink-0 w-8 h-8 border border-accent/40 flex items-center justify-center text-accent font-grotesk font-bold text-lg"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8 pr-16">
                        <RenderBlocks blocks={item.blocks} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
