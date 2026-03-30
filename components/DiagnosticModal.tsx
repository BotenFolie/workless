'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDiagnostic } from '@/lib/diagnosticContext'

type Profile = 1 | 2 | 3
type Step = 'profile' | 'form' | 'success'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const profiles = [
  {
    id: 1 as Profile,
    number: '01',
    label: "Je ne sais pas où je perds du temps",
    sub: "On cartographie votre organisation pour identifier ce qui peut s'automatiser.",
  },
  {
    id: 2 as Profile,
    number: '02',
    label: "Je sais où je perds du temps mais je ne vois pas comment l'automatiser",
    sub: "On analyse la tâche en question et on identifie la bonne approche.",
  },
  {
    id: 3 as Profile,
    number: '03',
    label: "Je sais ce qu'il faut faire mais il y a trop de paramétrage",
    sub: "On prend en charge l'implémentation complète.",
  },
]

const PERTES_OPTIONS = [
  "Reporting & dashboards",
  "Emails & communication interne",
  "Analyse de données",
  "Rédaction de contenus",
  "Coordination & suivi de projets",
  "Prises de décision répétitives",
  "Traitement de documents",
  "Autre",
]

type FormData = {
  secteur: string
  taille: string
  pertes: string[]
  situation: string
  tache: string
  frequence: string
  duree: string
  outils: string
  personnes: string
  automatisation: string
  connexions: string
  tente: string
  bloquage: string
  delai: string
  budget: string
  prenom: string
  email: string
  rgpd: boolean
}

const emptyForm: FormData = {
  secteur: '', taille: '', pertes: [], situation: '',
  tache: '', frequence: '', duree: '', outils: '', personnes: '',
  automatisation: '', connexions: '', tente: '', bloquage: '', delai: '', budget: '',
  prenom: '', email: '', rgpd: false,
}

const inputCls = "w-full border border-white/20 focus:border-accent/60 focus:outline-none rounded-sm px-4 py-3 font-inter text-sm transition-colors duration-200"
const labelCls = "block font-inter text-xs font-semibold tracking-wider uppercase text-surface/70 mb-2"
const selectCls = `${inputCls} cursor-pointer appearance-none`
// Style inline — seul moyen fiable de battre l'héritage color:#EDEDED du body
const inputStyle = { color: '#111111', WebkitTextFillColor: '#111111' } as React.CSSProperties

export default function DiagnosticModal() {
  const { isOpen, close } = useDiagnostic()
  const [step, setStep] = useState<Step>('profile')
  const [profile, setProfile] = useState<Profile | null>(null)
  const [form, setForm] = useState<FormData>(emptyForm)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleClose = () => {
    close()
    setTimeout(() => {
      setStep('profile')
      setProfile(null)
      setForm(emptyForm)
    }, 400)
  }

  const selectProfile = (p: Profile) => {
    setProfile(p)
    setStep('form')
  }

  const handleTogglePertes = (val: string) => {
    setForm(f => ({
      ...f,
      pertes: f.pertes.includes(val) ? f.pertes.filter(x => x !== val) : [...f.pertes, val],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, ...form }),
      })
    } catch {
      // Erreur silencieuse côté UX — le succès s'affiche quoi qu'il arrive
    } finally {
      setLoading(false)
      setStep('success')
    }
  }

  const progressStep = step === 'profile' ? 1 : step === 'form' ? 2 : 3

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9993] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-x-3 top-3 bottom-3 sm:inset-x-4 sm:top-[5vh] sm:bottom-[5vh] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-[9994] bg-[#161616] border border-white/[0.12] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-5 border-b border-white/[0.15] flex-shrink-0">
              <div className="flex items-center gap-4">
                <span className="font-grotesk font-bold text-surface text-base tracking-tight">
                  Diagnostic Workless
                </span>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map(n => (
                    <div
                      key={n}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        n <= progressStep ? 'bg-accent w-6' : 'bg-white/10 w-3'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center text-neutral hover:text-surface transition-colors duration-200"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            {/* Contenu scrollable */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-8">
              <AnimatePresence mode="wait">

                {/* ─── STEP 0 : Choix du profil ─── */}
                {step === 'profile' && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                      Étape 1 sur 3
                    </p>
                    <h2 className="font-grotesk font-bold text-surface text-2xl md:text-3xl leading-tight tracking-tight mb-8">
                      Par où voulez-vous commencer ?
                    </h2>

                    <div className="space-y-3">
                      {profiles.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => selectProfile(p.id)}
                          className="w-full text-left border border-white/[0.08] p-5 md:p-6 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-200 group"
                        >
                          <div className="flex items-start gap-4">
                            <span className="font-grotesk font-bold text-accent text-xs tracking-widest mt-0.5 flex-shrink-0">
                              {p.number}
                            </span>
                            <div>
                              <p className="font-grotesk font-semibold text-surface text-base leading-snug mb-1.5 group-hover:text-accent transition-colors duration-200">
                                {p.label}
                              </p>
                              <p className="font-inter text-neutral text-sm leading-relaxed">
                                {p.sub}
                              </p>
                            </div>
                            <span className="ml-auto text-neutral group-hover:text-accent transition-colors duration-200 text-lg flex-shrink-0">
                              →
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ─── STEP 1 : Formulaire ─── */}
                {step === 'form' && profile && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <button
                      onClick={() => setStep('profile')}
                      className="text-neutral hover:text-surface transition-colors duration-200 text-sm font-inter flex items-center gap-1.5 mb-6"
                    >
                      ← Retour
                    </button>

                    <div className="border-l-2 border-accent pl-4 mb-8">
                      <p className="font-inter text-xs font-semibold tracking-wider uppercase text-accent mb-1">
                        Votre profil
                      </p>
                      <p className="font-inter text-neutral text-sm">
                        {profiles.find(p => p.id === profile)?.label}
                      </p>
                    </div>

                    <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                      Étape 2 sur 3
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                      {/* ═══ PROFIL 1 ═══ */}
                      {profile === 1 && (
                        <>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className={labelCls}>Votre secteur</label>
                              <select
                                className={selectCls} style={inputStyle}
                                value={form.secteur}
                                onChange={e => setForm(f => ({ ...f, secteur: e.target.value }))}
                                required
                              >
                                <option value="">Sélectionner...</option>
                                {[
                                  "Commerce / Retail",
                                  "Marketing / Agence",
                                  "Finance / Comptabilité",
                                  "Ressources Humaines",
                                  "Immobilier",
                                  "Conseil / Consulting",
                                  "E-commerce",
                                  "Santé",
                                  "Logistique",
                                  "Autre",
                                ].map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className={labelCls}>Taille de l&apos;équipe</label>
                              <select
                                className={selectCls} style={inputStyle}
                                value={form.taille}
                                onChange={e => setForm(f => ({ ...f, taille: e.target.value }))}
                                required
                              >
                                <option value="">Sélectionner...</option>
                                {[
                                  "1 — c'est moi seul",
                                  "2 à 5 personnes",
                                  "6 à 20 personnes",
                                  "21 à 50 personnes",
                                  "Plus de 50 personnes",
                                ].map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className={labelCls}>
                              Où pensez-vous perdre le plus de temps ?
                              <span className="normal-case font-normal text-neutral/50 tracking-normal ml-1">(jusqu&apos;à 3 choix)</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                              {PERTES_OPTIONS.map(opt => (
                                <label
                                  key={opt}
                                  className={`flex items-center gap-3 border px-4 py-3 cursor-pointer transition-all duration-200 ${
                                    form.pertes.includes(opt)
                                      ? 'border-accent/60 bg-accent/[0.06]'
                                      : 'border-white/20 hover:border-white/40'
                                  }`}
                                >
                                  <span
                                    className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center text-xs transition-all duration-200 ${
                                      form.pertes.includes(opt)
                                        ? 'border-accent bg-accent text-bg'
                                        : 'border-white/40'
                                    }`}
                                  >
                                    {form.pertes.includes(opt) && '✓'}
                                  </span>
                                  <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={form.pertes.includes(opt)}
                                    onChange={() => handleTogglePertes(opt)}
                                    disabled={!form.pertes.includes(opt) && form.pertes.length >= 3}
                                  />
                                  <span className="font-inter text-sm text-surface/80">{opt}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className={labelCls}>
                              Un mot sur votre situation actuelle
                              <span className="normal-case font-normal text-neutral/50 tracking-normal ml-1">(optionnel)</span>
                            </label>
                            <textarea
                              className={`${inputCls} resize-none`} style={inputStyle}
                              rows={3}
                              placeholder="Ex : on passe beaucoup de temps à consolider des données de plusieurs sources chaque semaine..."
                              value={form.situation}
                              onChange={e => setForm(f => ({ ...f, situation: e.target.value }))}
                            />
                          </div>
                        </>
                      )}

                      {/* ═══ PROFIL 2 ═══ */}
                      {profile === 2 && (
                        <>
                          <div>
                            <label className={labelCls}>Décrivez la tâche en question</label>
                            <textarea
                              className={`${inputCls} resize-none`} style={inputStyle}
                              rows={4}
                              placeholder="Ex : chaque semaine je compile manuellement des données de 3 sources différentes pour créer un rapport envoyé à la direction..."
                              value={form.tache}
                              onChange={e => setForm(f => ({ ...f, tache: e.target.value }))}
                              required
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className={labelCls}>Fréquence</label>
                              <select
                                className={selectCls} style={inputStyle}
                                value={form.frequence}
                                onChange={e => setForm(f => ({ ...f, frequence: e.target.value }))}
                                required
                              >
                                <option value="">Sélectionner...</option>
                                {[
                                  "Tous les jours",
                                  "Plusieurs fois par semaine",
                                  "Chaque semaine",
                                  "Chaque mois",
                                ].map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className={labelCls}>Temps par occurrence</label>
                              <select
                                className={selectCls} style={inputStyle}
                                value={form.duree}
                                onChange={e => setForm(f => ({ ...f, duree: e.target.value }))}
                                required
                              >
                                <option value="">Sélectionner...</option>
                                {[
                                  "Moins de 30 min",
                                  "30 min à 2h",
                                  "2h à 4h",
                                  "Plus de 4h",
                                ].map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className={labelCls}>Personnes impliquées</label>
                              <select
                                className={selectCls} style={inputStyle}
                                value={form.personnes}
                                onChange={e => setForm(f => ({ ...f, personnes: e.target.value }))}
                                required
                              >
                                <option value="">Sélectionner...</option>
                                {[
                                  "1 (moi seul)",
                                  "2 à 5",
                                  "6 à 10",
                                  "Plus de 10",
                                ].map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className={labelCls}>
                              Outils utilisés actuellement
                              <span className="normal-case font-normal text-neutral/50 tracking-normal ml-1">(optionnel)</span>
                            </label>
                            <input
                              type="text"
                              className={inputCls} style={inputStyle}
                              placeholder="Ex : Excel, Google Sheets, Notion, HubSpot, Airtable..."
                              value={form.outils}
                              onChange={e => setForm(f => ({ ...f, outils: e.target.value }))}
                            />
                          </div>
                        </>
                      )}

                      {/* ═══ PROFIL 3 ═══ */}
                      {profile === 3 && (
                        <>
                          <div>
                            <label className={labelCls}>Décrivez l&apos;automatisation souhaitée</label>
                            <textarea
                              className={`${inputCls} resize-none`} style={inputStyle}
                              rows={4}
                              placeholder="Ex : connecter mon CRM à mon outil de facturation pour déclencher automatiquement une facture dès qu'un deal est gagné..."
                              value={form.automatisation}
                              onChange={e => setForm(f => ({ ...f, automatisation: e.target.value }))}
                              required
                            />
                          </div>

                          <div>
                            <label className={labelCls}>Quels outils doivent être connectés ?</label>
                            <input
                              type="text"
                              className={inputCls} style={inputStyle}
                              placeholder="Ex : HubSpot → QuickBooks → Slack"
                              value={form.connexions}
                              onChange={e => setForm(f => ({ ...f, connexions: e.target.value }))}
                              required
                            />
                          </div>

                          <div>
                            <label className={labelCls}>Avez-vous déjà tenté de le mettre en place ?</label>
                            <div className="flex gap-3 mt-1">
                              {[
                                { value: 'oui', label: "Oui, j'ai commencé mais bloqué" },
                                { value: 'non', label: "Non, jamais essayé" },
                              ].map(opt => (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => setForm(f => ({ ...f, tente: opt.value }))}
                                  className={`flex-1 border px-4 py-3 font-inter text-sm transition-all duration-200 ${
                                    form.tente === opt.value
                                      ? 'border-accent/60 bg-accent/[0.06] text-surface'
                                      : 'border-white/20 text-surface/70 hover:border-white/40'
                                  }`}
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                          </div>

                          {form.tente === 'oui' && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3, ease: EASE }}
                            >
                              <label className={labelCls}>
                                Qu&apos;est-ce qui a bloqué ?
                                <span className="normal-case font-normal text-neutral/50 tracking-normal ml-1">(optionnel)</span>
                              </label>
                              <textarea
                                className={`${inputCls} resize-none`} style={inputStyle}
                                rows={3}
                                placeholder="Ex : l'API de l'outil X ne permet pas de récupérer ce champ précis..."
                                value={form.bloquage}
                                onChange={e => setForm(f => ({ ...f, bloquage: e.target.value }))}
                              />
                            </motion.div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className={labelCls}>Délai idéal</label>
                              <select
                                className={selectCls} style={inputStyle}
                                value={form.delai}
                                onChange={e => setForm(f => ({ ...f, delai: e.target.value }))}
                                required
                              >
                                <option value="">Sélectionner...</option>
                                {[
                                  "Urgent — cette semaine",
                                  "Dans le mois",
                                  "Pas de deadline précise",
                                ].map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                            <div>
                              <label className={labelCls}>
                                Budget approximatif
                                <span className="normal-case font-normal text-neutral/50 tracking-normal ml-1">(optionnel)</span>
                              </label>
                              <select
                                className={selectCls} style={inputStyle}
                                value={form.budget}
                                onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                              >
                                <option value="">Je ne sais pas encore</option>
                                {[
                                  "Moins de 500€",
                                  "500€ — 2 000€",
                                  "2 000€ — 5 000€",
                                  "Plus de 5 000€",
                                ].map(o => <option key={o} value={o}>{o}</option>)}
                              </select>
                            </div>
                          </div>
                        </>
                      )}

                      {/* ─── Champs communs ─── */}
                      <div className="border-t border-white/[0.06] pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className={labelCls}>Prénom</label>
                          <input
                            type="text"
                            className={inputCls} style={inputStyle}
                            placeholder="Votre prénom"
                            value={form.prenom}
                            onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <label className={labelCls}>Email professionnel</label>
                          <input
                            type="email"
                            className={inputCls} style={inputStyle}
                            placeholder="vous@entreprise.com"
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            required
                          />
                        </div>
                      </div>

                      {/* Consentement RGPD */}
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <span
                          className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center text-xs transition-all duration-200 ${
                            form.rgpd ? 'border-accent bg-accent text-bg' : 'border-white/40'
                          }`}
                        >
                          {form.rgpd && '✓'}
                        </span>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={form.rgpd}
                          onChange={e => setForm(f => ({ ...f, rgpd: e.target.checked }))}
                          required
                        />
                        <span className="font-inter text-neutral/60 text-xs leading-relaxed">
                          J&apos;accepte que Workless utilise ces informations pour me recontacter dans le cadre de ma demande de diagnostic. Aucune diffusion à des tiers. Conformément au RGPD, vous pouvez exercer vos droits à tout moment.
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={loading || !form.rgpd}
                        className="w-full bg-accent text-bg font-inter font-semibold py-4 rounded-sm hover:bg-white transition-colors duration-200 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>Envoyer mon diagnostic →</>
                        )}
                      </button>

                      <p className="font-inter text-neutral/50 text-xs text-center">
                        Réponse sous 48h ouvrées. Aucun engagement.
                      </p>
                    </form>
                  </motion.div>
                )}

                {/* ─── STEP 2 : Confirmation ─── */}
                {step === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 border-2 border-accent flex items-center justify-center mb-8">
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
                        className="text-accent text-2xl font-bold"
                      >
                        ✓
                      </motion.span>
                    </div>

                    <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                      Étape 3 sur 3 — Terminé
                    </p>
                    <h3 className="font-grotesk font-bold text-surface text-2xl md:text-3xl leading-tight tracking-tight mb-4">
                      Diagnostic reçu.
                    </h3>
                    <p className="font-inter text-neutral text-base leading-relaxed max-w-sm mb-2">
                      {form.prenom ? `Merci ${form.prenom}.` : 'Merci.'} On analyse votre situation et on revient vers vous sous 24h.
                    </p>
                    <p className="font-inter text-neutral/50 text-sm">
                      Pas de relance. Pas de newsletter. Juste une réponse.
                    </p>

                    <button
                      onClick={handleClose}
                      className="mt-10 font-inter text-sm text-neutral hover:text-surface transition-colors duration-200 underline underline-offset-4"
                    >
                      Fermer
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
