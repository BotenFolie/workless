// Bande défilante horizontale — séparateur entre sections
const items = [
  'Moins de t\u00E2ches r\u00E9p\u00E9titives',
  'Plus de temps sur l\u2019essentiel',
  '14 jours',
  'Sans recruter',
  'Automatisez ce qui se r\u00E9p\u00E8te',
  'D\u00E9cidez plus vite',
  'Moins de charge mentale',
  'Plus de valeur ajout\u00E9e',
]

export default function Marquee() {
  // Dupliquer pour rendre la boucle invisible
  const allItems = [...items, ...items, ...items]

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
