'use client'

import { useState } from 'react'

type Props = {
  page: string
}

export default function AutomationContactForm({ page }: Props) {
  const [form, setForm]         = useState({ prenom: '', email: '', telephone: '', message: '' })
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, page, _hp: '' }),
      })

      if (!response.ok) {
        const json = await response.json().catch(() => ({}))
        setError(json.error ?? 'Une erreur est survenue. Réessayez.')
        setLoading(false)
        return
      }

      setSubmitted(true)
    } catch {
      setError('Erreur réseau. Vérifiez votre connexion.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center py-12">
        <div className="w-10 h-10 border border-accent flex items-center justify-center mb-6">
          <span className="text-accent text-base">✓</span>
        </div>
        <p className="font-grotesk font-bold text-surface text-2xl mb-3">Message reçu.</p>
        <p className="font-inter text-neutral text-sm leading-relaxed">
          On revient vers vous sous 24h ouvrées. Pas de relance si ce n&apos;est pas le bon moment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/40 mb-2">
            Prénom
          </label>
          <input
            type="text"
            required
            value={form.prenom}
            onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
            placeholder="Votre prénom"
            className="w-full border border-white/[0.12] focus:border-accent/50 focus:outline-none px-4 py-3 font-inter text-sm text-surface bg-transparent placeholder:text-neutral/30 transition-colors"
          />
        </div>
        <div>
          <label className="block font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/40 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="vous@entreprise.com"
            className="w-full border border-white/[0.12] focus:border-accent/50 focus:outline-none px-4 py-3 font-inter text-sm text-surface bg-transparent placeholder:text-neutral/30 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/40 mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          required
          value={form.telephone}
          onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
          placeholder="+33 6 00 00 00 00"
          className="w-full border border-white/[0.12] focus:border-accent/50 focus:outline-none px-4 py-3 font-inter text-sm text-surface bg-transparent placeholder:text-neutral/30 transition-colors"
        />
      </div>

      <div>
        <label className="block font-inter text-[10px] font-semibold tracking-[0.12em] uppercase text-surface/40 mb-2">
          Message{' '}
          <span className="normal-case font-normal tracking-normal text-surface/25">— optionnel</span>
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Décrivez votre situation en quelques mots..."
          className="w-full border border-white/[0.12] focus:border-accent/50 focus:outline-none px-4 py-3 font-inter text-sm text-surface bg-transparent placeholder:text-neutral/30 transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="font-inter text-xs text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-bg font-inter font-semibold py-4 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="w-3.5 h-3.5 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          'Envoyer →'
        )}
      </button>

      <p className="font-inter text-neutral/30 text-xs text-center">
        Réponse sous 24h ouvrées. Sans engagement.
      </p>
    </form>
  )
}
