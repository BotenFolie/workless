'use client'

import { Check } from 'lucide-react'

interface RgpdCheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label: string
  size?: 'md' | 'sm'
}

// Checkbox RGPD — texte légal en text-muted (contraste ~6.7:1 sur fond sombre, AA garanti)
// plutôt que text-neutral/40 (~1.5:1, illisible)
export default function RgpdCheckbox({ checked, onChange, label, size = 'md' }: RgpdCheckboxProps) {
  const isMd = size === 'md'
  const boxSize = isMd ? 'w-4 h-4' : 'w-3.5 h-3.5'

  return (
    <label className="flex items-start gap-3 cursor-pointer pt-1">
      <span
        onClick={() => onChange(!checked)}
        className={`mt-0.5 ${boxSize} border flex-shrink-0 flex items-center justify-center transition-all duration-200 cursor-pointer ${
          checked ? 'border-accent bg-accent text-bg' : 'border-white/30'
        }`}
      >
        {checked && <Check className={isMd ? 'w-3 h-3' : 'w-2.5 h-2.5'} strokeWidth={3} />}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        required
      />
      <span className={`font-inter text-muted leading-relaxed ${isMd ? 'text-xs' : 'text-[10px]'}`}>
        {label}
      </span>
    </label>
  )
}
