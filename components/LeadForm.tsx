'use client'

// Formulaire d'audit / contact → /api/lead (honeypot + consentement)

import { useState, type FormEvent } from 'react'
import { usePathname } from 'next/navigation'
import { readAttribution } from '@/lib/consent'

type Labels = {
  name: string
  company: string
  email: string
  phone: string
  site: string
  message: string
  referrer: string
  consent: string
  send: string
  sending: string
  ok: string
  error: string
  required: string
}

type Props = {
  type: 'audit' | 'contact'
  locale: 'fr' | 'es'
  labels: Labels
  submitLabel: string
  fallbackEmail: string
}

type Status = 'idle' | 'sending' | 'ok' | 'error'

/** Provenance (cookies si accord, mémoire de la page sinon, rien si refus) au format attendu par l'OS. */
function touchOf(t: Record<string, string> | null) {
  if (!t) return null
  return {
    utmSource: t.utm_source,
    utmMedium: t.utm_medium,
    utmCampaign: t.utm_campaign,
    utmContent: t.utm_content,
    utmTerm: t.utm_term,
    gclid: t.gclid,
    fbclid: t.fbclid,
    landingPage: t.landing,
    referrerUrl: t.ref,
    at: t.at,
  }
}

/** Identifiant unique de l'envoi : un réessai n'enregistre pas deux fois la même demande. */
function newSubmissionId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`
}

export default function LeadForm({ type, locale, labels, submitLabel, fallbackEmail }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [submissionId, setSubmissionId] = useState(newSubmissionId)
  const pathname = usePathname()
  const id = (name: string) => `${type}-${name}`

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const attribution = readAttribution()
    setStatus('sending')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          locale,
          page: pathname,
          name: data.get('name'),
          company: data.get('company'),
          email: data.get('email'),
          phone: data.get('phone'),
          site: data.get('site'),
          message: data.get('message'),
          referrer: data.get('referrer'),
          consent: data.get('consent') === 'on',
          _hp: data.get('website'),
          submissionId,
          first: touchOf(attribution.first),
          last: touchOf(attribution.last),
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('ok')
      setSubmissionId(newSubmissionId())
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <p className="form__status" data-kind="ok" role="status">
        {labels.ok}
      </p>
    )
  }

  const req = <span className="sr-only"> ({labels.required})</span>

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="form__row">
        <div className="field">
          <label htmlFor={id('name')}>
            {labels.name} *{req}
          </label>
          <input id={id('name')} name="name" autoComplete="name" required maxLength={80} />
        </div>
        <div className="field">
          <label htmlFor={id('company')}>{labels.company}</label>
          <input id={id('company')} name="company" autoComplete="organization" maxLength={120} />
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor={id('email')}>
            {labels.email} *{req}
          </label>
          <input id={id('email')} name="email" type="email" autoComplete="email" required maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor={id('phone')}>
            {labels.phone}
            {type === 'audit' ? ' *' : ''}
            {type === 'audit' ? req : null}
          </label>
          <input id={id('phone')} name="phone" type="tel" autoComplete="tel" required={type === 'audit'} maxLength={30} />
        </div>
      </div>
      <div className="field">
        <label htmlFor={id('site')}>{labels.site}</label>
        <input id={id('site')} name="site" type="text" inputMode="url" autoComplete="url" maxLength={200} placeholder="www." />
      </div>
      <div className="field">
        <label htmlFor={id('message')}>{labels.message}</label>
        <textarea id={id('message')} name="message" maxLength={2000} />
      </div>
      <div className="field">
        <label htmlFor={id('referrer')}>{labels.referrer}</label>
        <input id={id('referrer')} name="referrer" maxLength={120} />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor={id('website')}>Website</label>
        <input id={id('website')} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="check">
        <input type="checkbox" name="consent" required />
        <span>{labels.consent}</span>
      </label>
      {status === 'error' && (
        <p className="form__status" data-kind="error" role="alert">
          {labels.error} <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>
        </p>
      )}
      <div>
        <button className="btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? labels.sending : submitLabel}
        </button>
      </div>
    </form>
  )
}
