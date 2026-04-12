'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { content } from '@/lib/content'

const BOOKING_URL = 'https://calendar.app.google/Z13tCbEPiwbRKVxp8'

// ─── Types ────────────────────────────────────────────────────────────────────

type QuizAnswers = {
  probleme:  string[]
  heures:    string
  personnes: string
  intention: string[]
  maturite:  string
  objectif:  string
}

type AutomationRec = {
  title:       string
  description: string
}

// ─── Logique de recommandation d'automatisations ──────────────────────────────

function getAutomations(data: QuizAnswers | null): AutomationRec[] {
  if (!data) return getDefaultAutomations()

  const recs: AutomationRec[] = []
  const { probleme, heures, intention, maturite, objectif } = data

  if (probleme.includes('reporting')) {
    recs.push({
      title: 'Reporting hebdomadaire automatique',
      description: 'Consolidation des données depuis vos outils, mise en forme et envoi automatique chaque semaine — zéro intervention manuelle.',
    })
    recs.push({
      title: 'Dashboard de pilotage temps réel',
      description: 'KPIs agrégés depuis vos sources existantes, mis à jour en continu et accessibles en un clic.',
    })
  }

  if (probleme.includes('emails')) {
    recs.push({
      title: 'Séquence de relances email automatisée',
      description: 'Relances clients ou prospects déclenchées automatiquement selon le délai, le statut ou l\'inaction — sans suivi manuel.',
    })
    recs.push({
      title: 'Tri et priorisation inbox (IA)',
      description: 'Classification automatique des emails entrants par urgence et type. Votre équipe ne traite que ce qui demande une vraie intervention.',
    })
  }

  if (probleme.includes('decisions')) {
    recs.push({
      title: 'Alertes sur seuils critiques',
      description: 'Notification Slack ou email automatique dès qu\'un KPI dépasse un seuil défini — vous décidez vite, sans surveillance constante.',
    })
    recs.push({
      title: 'Synthèse IA hebdomadaire',
      description: 'Résumé automatique des métriques clés, rédigé par IA et envoyé à votre équipe chaque semaine.',
    })
  }

  if (probleme.includes('organisation')) {
    recs.push({
      title: 'Workflow de validation interne',
      description: 'Approbations, notifications et relances automatiques — plus aucune demande perdue dans les emails ou les conversations Slack.',
    })
    recs.push({
      title: 'Automatisation des tâches récurrentes',
      description: 'Assignation automatique, suivi d\'avancement et rappels — votre équipe sait toujours où en sont les sujets sans réunion de suivi.',
    })
  }

  if (probleme.includes('autre') || probleme.length === 0) {
    recs.push({
      title: 'Audit de vos processus répétitifs',
      description: 'Cartographie complète pour identifier les 2 à 3 automatisations à plus fort impact dans votre organisation.',
    })
  }

  // Complément basé sur l'intention
  if (intention.includes('recruter') && recs.length < 4) {
    recs.push({
      title: 'Automatisation de l\'onboarding',
      description: 'Accès outils, formation, suivi administratif — flux complet d\'intégration sans charge RH supplémentaire.',
    })
  }

  // Complément basé sur le volume horaire
  if ((heures === '10-20h' || heures === '20h+') && recs.length < 4) {
    recs.push({
      title: 'Flux CRM → Email → Slack',
      description: 'Lead entrant → mise à jour CRM → email de bienvenue → notification équipe. Un flux connecté, zéro saisie.',
    })
  }

  // Complément maturité
  if (maturite === 'echec' && recs.length < 5) {
    recs.push({
      title: 'Audit de l\'existant + reprise',
      description: 'Diagnostic de ce qui a bloqué par le passé, correction des causes racines, reprise sur des bases solides.',
    })
  }

  // Complément objectif
  if (objectif === 'transformer' && recs.length < 5) {
    recs.push({
      title: 'Dashboard de monitoring centralisé',
      description: 'Toutes vos automatisations surveillées en un seul endroit — alertes, logs, performances et ajustements en temps réel.',
    })
  }

  return recs.slice(0, 5)
}

function getDefaultAutomations(): AutomationRec[] {
  return [
    {
      title: 'Relances email automatisées',
      description: 'Séquences déclenchées automatiquement selon le comportement client — plus aucun suivi manuel.',
    },
    {
      title: 'Reporting hebdomadaire automatique',
      description: 'Données consolidées, mises en forme et envoyées chaque semaine sans intervention.',
    },
    {
      title: 'Flux CRM → Email → Slack',
      description: 'Lead entrant → CRM → email de bienvenue → notification équipe. Un flux, zéro saisie.',
    },
    {
      title: 'Dashboard de pilotage temps réel',
      description: 'KPIs agrégés depuis vos outils, disponibles en un clic pour vos décisions.',
    },
  ]
}

// ─── Composant ────────────────────────────────────────────────────────────────

export default function MerciContent() {
  const params = useSearchParams()
  const prenom = params.get('prenom') ?? ''

  const [quizData, setQuizData] = useState<QuizAnswers | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const raw = sessionStorage.getItem('stripwork_quiz')
      if (raw) {
        try { setQuizData(JSON.parse(raw)) } catch { /* ignore */ }
      }
    }
  }, [])

  const automations = getAutomations(quizData)
  const { pricing }  = content

  return (
    <main className="min-h-screen bg-bg px-4 py-16 md:py-24">

      {/* Logo */}
      <div className="max-w-screen-lg mx-auto">
        <Link
          href="/"
          className="font-grotesk font-bold text-surface text-sm tracking-tight mb-16 hover:text-accent transition-colors duration-200 inline-block"
        >
          Stripwork
        </Link>

        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="inline-flex items-center border border-accent/40 bg-accent/[0.06] px-3 py-1.5 mb-8">
            <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
              Diagnostic reçu
            </span>
          </div>

          <h1 className="font-grotesk font-bold text-surface text-3xl md:text-5xl leading-tight tracking-tight mb-6">
            {prenom ? `${prenom}, voici` : 'Voici'} ce qu&apos;on peut{' '}
            <span className="text-accent">automatiser pour vous.</span>
          </h1>

          <p className="font-inter text-neutral text-base md:text-lg leading-relaxed">
            En 1 heure, on passe en revue vos processus et on valide ensemble ce qui est faisable — et ce que ça représente concrètement pour votre organisation.
          </p>
        </div>

        {/* Automatisations identifiées */}
        <div className="mb-20">
          <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-surface/40 mb-8">
            Automatisations identifiées pour votre profil
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {automations.map((auto, i) => (
              <div key={i} className="border border-white/[0.08] bg-white/[0.02] p-6 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="font-grotesk font-bold text-accent text-sm flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-grotesk font-bold text-surface text-base mb-2 leading-snug">
                      {auto.title}
                    </p>
                    <p className="font-inter text-neutral text-sm leading-relaxed">
                      {auto.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA appel */}
        <div className="border border-accent/30 bg-accent/[0.04] p-8 md:p-10 mb-20 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="flex-1">
            <p className="font-grotesk font-bold text-surface text-xl md:text-2xl leading-tight mb-2">
              Votre rendez-vous d&apos;1h est <span className="text-accent">offert.</span>
            </p>
            <p className="font-inter text-neutral text-sm leading-relaxed">
              On valide ensemble quelles automatisations sont pertinentes — et on vous donne une estimation concrète. Sans engagement.
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 font-inter font-semibold text-bg bg-accent px-8 py-4 hover:bg-white transition-colors duration-200"
          >
            Réserver mon RDV →
          </a>
        </div>

        {/* Bloc pricing */}
        <div className="mb-12">
          <p className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-surface/40 mb-3">
            {pricing.label}
          </p>
          <p className="font-grotesk font-bold text-surface text-2xl md:text-3xl leading-tight tracking-tight mb-10">
            {pricing.headline}
          </p>

          {/* 3 plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.06] mb-6">
            {pricing.plans.map((plan, i) => (
              <div key={plan.name} className={`relative flex flex-col p-7 ${
                i < pricing.plans.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/[0.06]' : ''
              } ${plan.highlight ? 'bg-accent/[0.04]' : ''}`}>

                {plan.highlight && 'highlightLabel' in plan && (
                  <div className="absolute top-0 left-7 -translate-y-1/2">
                    <span className="font-inter text-[10px] font-bold tracking-widest uppercase bg-accent text-bg px-3 py-1">
                      {plan.highlightLabel}
                    </span>
                  </div>
                )}

                <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                  {plan.name}
                </p>
                <div className={`font-grotesk font-bold text-surface tracking-tight mb-1 ${plan.price === 'Sur devis' ? 'text-xl' : 'text-3xl'}`}>
                  {plan.price}
                </div>
                <p className="font-inter text-neutral text-xs mb-1">{plan.priceNote}</p>
                <p className="font-inter text-accent text-xs font-semibold mb-5">
                  {plan.price === 'Sur devis' ? plan.delivery : `Livraison ${plan.delivery}`}
                </p>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="text-accent text-xs mt-0.5 flex-shrink-0 font-bold">✓</span>
                      <span className="font-inter text-sm text-surface/75 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full font-inter font-semibold text-sm py-3.5 text-center transition-colors duration-200 ${
                    plan.highlight
                      ? 'bg-accent text-bg hover:bg-white'
                      : 'border border-white/[0.15] text-surface hover:border-accent/50 hover:bg-accent/[0.04]'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Maintenance */}
          <div className="border border-white/[0.06] p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <div className="flex-shrink-0">
              <p className="font-inter text-xs font-semibold tracking-widest uppercase text-accent mb-1">
                {pricing.maintenance.name}
              </p>
              <div className="font-grotesk font-bold text-surface text-2xl">{pricing.maintenance.price}</div>
              <p className="font-inter text-neutral text-xs mt-0.5">{pricing.maintenance.priceNote}</p>
            </div>
            <div className="h-px md:h-10 md:w-px bg-white/[0.06]" />
            <ul className="flex flex-col md:flex-row gap-3 md:gap-6">
              {pricing.maintenance.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-accent text-xs mt-0.5 flex-shrink-0 font-bold">✓</span>
                  <span className="font-inter text-sm text-surface/75 leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-inter text-neutral/30 text-xs text-center">
          Aucune newsletter. L&apos;appel est vraiment gratuit. Réponse sous 24h ouvrées.
        </p>

      </div>
    </main>
  )
}
