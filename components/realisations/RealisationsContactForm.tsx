'use client'

import { useState } from 'react'
import RgpdCheckbox from '../ui/RgpdCheckbox'

// Questionnaire dédié à /realisations : brief création de site + contact.
// Poste sur /api/contact (email Resend + alerte Telegram). Les réponses du brief
// sont compilées dans le champ `message`. RGPD obligatoire, honeypot anti-bot.

const PROJETS = ['Site vitrine', 'Landing page', 'E-commerce', 'Application', 'Refonte de site', 'Autre']
const OBJECTIFS = ['Générer des leads', 'Vendre en ligne', 'Prendre des RDV', 'Visibilité SEO / SEA', 'Lancer un produit', 'Autre']
const BUDGETS = ['< 1 500 €', '1 500 – 3 000 €', '3 000 – 6 000 €', '> 6 000 €', 'À définir']
const DELAIS = ['Dès que possible', '1 à 3 mois', '3 mois +', 'Pas de deadline']

type Status = 'idle' | 'loading' | 'success' | 'error'

// Groupe de puces à choix unique
function ChipGroup({
  label, options, value, onChange,
}: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="mb-3 font-inter text-xs font-semibold uppercase tracking-wide text-white/50">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => {
          const active = value === opt
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(active ? '' : opt)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 font-inter text-sm transition-colors duration-200 ${
                active
                  ? 'border-accent bg-accent/[0.08] text-surface'
                  : 'border-white/12 text-white/65 hover:border-white/30 hover:text-surface'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

const inputClass =
  'w-full rounded-sm border border-white/12 bg-white/[0.03] px-4 py-3 font-inter text-sm text-surface placeholder:text-neutral/60 transition-colors duration-200 focus:border-accent/60 focus:outline-none'

export default function RealisationsContactForm() {
  const [prenom, setPrenom]       = useState('')
  const [email, setEmail]         = useState('')
  const [telephone, setTelephone] = useState('')
  const [projet, setProjet]       = useState('')
  const [objectif, setObjectif]   = useState('')
  const [budget, setBudget]       = useState('')
  const [delai, setDelai]         = useState('')
  const [details, setDetails]     = useState('')
  const [rgpd, setRgpd]           = useState(false)
  const [hp, setHp]               = useState('') // honeypot
  const [status, setStatus]       = useState<Status>('idle')
  const [error, setError]         = useState('')

  const canSubmit =
    prenom.trim() && /.+@.+\..+/.test(email) && telephone.trim() && rgpd && status !== 'loading'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('loading')
    setError('')

    // Compile le brief dans le message
    const message = [
      projet   && `Type de projet : ${projet}`,
      objectif && `Objectif : ${objectif}`,
      budget   && `Budget : ${budget}`,
      delai    && `Délai : ${delai}`,
      details.trim() && `\n${details.trim()}`,
    ].filter(Boolean).join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: prenom.trim(),
          email: email.trim(),
          telephone: telephone.trim(),
          message,
          page: 'realisations',
          _hp: hp,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(json.error ?? 'Une erreur est survenue. Réessayez.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setError('Erreur réseau. Vérifiez votre connexion.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/[0.05] px-8 py-14 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-bg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-grotesk text-2xl font-bold text-surface">Demande envoyée</h3>
        <p className="mx-auto mt-3 max-w-md font-inter text-sm text-muted">
          Merci {prenom.trim()} — je reviens vers vous très vite, par email ou téléphone, pour parler de votre projet.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot anti-bot (invisible) */}
      <input
        type="text" tabIndex={-1} autoComplete="off" aria-hidden
        value={hp} onChange={e => setHp(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {/* Coordonnées */}
      <div className="grid gap-4 sm:grid-cols-3">
        <input
          className={inputClass} type="text" placeholder="Prénom *"
          value={prenom} onChange={e => setPrenom(e.target.value)} required
          aria-label="Prénom"
        />
        <input
          className={inputClass} type="email" placeholder="Email *"
          value={email} onChange={e => setEmail(e.target.value)} required
          aria-label="Email"
        />
        <input
          className={inputClass} type="tel" placeholder="Téléphone *"
          value={telephone} onChange={e => setTelephone(e.target.value)} required
          aria-label="Téléphone"
        />
      </div>

      <ChipGroup label="Type de projet" options={PROJETS} value={projet} onChange={setProjet} />
      <ChipGroup label="Objectif principal" options={OBJECTIFS} value={objectif} onChange={setObjectif} />

      <div className="grid gap-8 sm:grid-cols-2">
        <ChipGroup label="Budget indicatif" options={BUDGETS} value={budget} onChange={setBudget} />
        <ChipGroup label="Échéance" options={DELAIS} value={delai} onChange={setDelai} />
      </div>

      <div>
        <label className="mb-3 block font-inter text-xs font-semibold uppercase tracking-wide text-white/50">
          Votre projet en quelques mots
        </label>
        <textarea
          className={`${inputClass} min-h-[110px] resize-y`}
          placeholder="Ce que vous avez en tête, vos références, le contexte…"
          value={details} onChange={e => setDetails(e.target.value)}
          maxLength={800}
        />
      </div>

      <RgpdCheckbox
        checked={rgpd}
        onChange={setRgpd}
        label="J'accepte d'être recontacté par email ou téléphone au sujet de mon projet. Aucune diffusion à des tiers. Conforme RGPD."
      />

      {status === 'error' && (
        <p className="font-inter text-sm text-red-400" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-4 font-inter text-base font-semibold text-bg transition-colors duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === 'loading' ? 'Envoi…' : 'Envoyer ma demande'}
        {status !== 'loading' && <span aria-hidden>→</span>}
      </button>
      <p className="font-inter text-xs text-neutral">Réponse sous 24h ouvrées. Champs * obligatoires.</p>
    </form>
  )
}
