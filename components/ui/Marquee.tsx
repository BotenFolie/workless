'use client'

import { useContent } from '@/lib/i18n'

// Bande défilante horizontale — séparateur entre sections
export default function Marquee() {
  const c = useContent()
  const allItems = [...c.marquee, ...c.marquee, ...c.marquee]

  return (
    <div className="relative overflow-hidden bg-accent py-4 border-y border-accent/20">
      <div className="flex whitespace-nowrap animate-marquee">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 md:gap-6 font-grotesk font-bold text-bg text-sm uppercase tracking-widest mx-3 md:mx-6"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-bg/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  )
}
