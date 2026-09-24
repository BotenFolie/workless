'use client'

// Scène signature : une page d'annuaire où une entrée perdue devient un site en tête de rubrique.
// Un seul état `progress` 0→1 piloté par le scroll (réversible), étapes cliquables, « Rejouer ».

import { useEffect, useRef, type ReactNode } from 'react'
import { IconBolt, IconPhone, IconReplay } from './Icons'

type Step = { t: string; d: string }

type SceneText = {
  rubrique: string
  target: string
  targetMeta: string
  phone: string
  notes: string[]
  tagline: string
  cta: string
  url: string
  position: string
  call: string
  callSub: string
  others: string[]
  live: string
}

type Props = {
  display: string
  h1sub: string
  lead: string
  steps: Step[]
  stepsLabel: string
  replay: string
  sceneNote: string
  scene: SceneText
  ctas: ReactNode
}

/** Plages de progression de chaque étape (début, fin) */
const RANGES: [number, number][] = [
  [0.02, 0.12],
  [0.12, 0.3],
  [0.3, 0.48],
  [0.48, 0.64],
  [0.64, 0.82],
  [0.82, 0.96],
]
const TARGET_INDEX = 5
const START_RANK = 27

function clamp01(v: number): number {
  return v < 0 ? 0 : v > 1 ? 1 : v
}

function stepFromProgress(p: number): number {
  let step = 0
  RANGES.forEach(([a], i) => {
    if (p >= a) step = i + 1
  })
  return step
}

export default function SceneAnnuaire(props: Props) {
  const heroRef = useRef<HTMLElement>(null)
  const rankRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !document.documentElement.classList.contains('scrub')) return

    let frame = 0
    let autoplay = 0
    let lastStep = -1

    const scrollRange = () => {
      const stick = hero.querySelector<HTMLElement>('.hero__stick')
      const top = hero.getBoundingClientRect().top + window.scrollY
      const range = hero.offsetHeight - (stick?.offsetHeight ?? window.innerHeight)
      return { top, range: Math.max(range, 1) }
    }

    const render = () => {
      frame = 0
      const { top, range } = scrollRange()
      const p = clamp01((window.scrollY - top) / range)
      RANGES.forEach(([a, b], i) => {
        hero.style.setProperty(`--s${i + 1}`, clamp01((p - a) / (b - a)).toFixed(4))
      })
      const s5 = clamp01((p - RANGES[4][0]) / (RANGES[4][1] - RANGES[4][0]))
      if (rankRef.current) rankRef.current.textContent = String(Math.round(START_RANK - (START_RANK - 1) * s5))
      const step = stepFromProgress(p)
      if (step !== lastStep) {
        lastStep = step
        hero.dataset.step = String(step)
        hero.querySelectorAll<HTMLButtonElement>('.stepbtn').forEach((btn, i) => {
          if (i + 1 === step) btn.setAttribute('aria-current', 'step')
          else btn.removeAttribute('aria-current')
          btn.dataset.done = String(i + 1 < step)
        })
      }
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const stopAutoplay = () => {
      if (autoplay) cancelAnimationFrame(autoplay)
      autoplay = 0
    }

    const goTo = (p: number, smooth: boolean) => {
      stopAutoplay()
      const { top, range } = scrollRange()
      window.scrollTo({ top: top + range * p, behavior: smooth ? 'smooth' : 'auto' })
    }

    // Lecture automatique de toute la scène (Rejouer), interrompue par l'utilisateur
    const play = () => {
      goTo(0, false)
      const { top, range } = scrollRange()
      const start = performance.now()
      const duration = 9000
      const tick = (now: number) => {
        const t = clamp01((now - start) / duration)
        window.scrollTo({ top: top + range * t * RANGES[5][1], behavior: 'auto' })
        autoplay = t < 1 ? requestAnimationFrame(tick) : 0
      }
      autoplay = requestAnimationFrame(tick)
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const btn = target.closest<HTMLButtonElement>('.stepbtn')
      if (btn) {
        const i = Number(btn.dataset.i)
        goTo(RANGES[i][1] - 0.01, true)
        return
      }
      if (target.closest('.replay')) play()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('wheel', stopAutoplay, { passive: true })
    window.addEventListener('touchstart', stopAutoplay, { passive: true })
    window.addEventListener('keydown', stopAutoplay)
    hero.addEventListener('click', onClick)
    render()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('wheel', stopAutoplay)
      window.removeEventListener('touchstart', stopAutoplay)
      window.removeEventListener('keydown', stopAutoplay)
      hero.removeEventListener('click', onClick)
      if (frame) cancelAnimationFrame(frame)
      stopAutoplay()
    }
  }, [])

  const { scene } = props
  const listing = [...scene.others.slice(0, TARGET_INDEX), scene.target, ...scene.others.slice(TARGET_INDEX, 21)]

  return (
    <section ref={heroRef} className="hero" data-step="0" aria-labelledby="hero-title">
      <div className="hero__stick wrap">
        <div className="hero__text">
          <h1 id="hero-title">
            <span className="hero__display">{props.display}</span>
            <span className="hero__sub">{props.h1sub}</span>
          </h1>
          <div className="caption" aria-live="polite">
            <p className="caption__lead">{props.lead}</p>
            {props.steps.map((s, i) => (
              <p key={s.t} className="caption__step" data-i={i + 1}>
                <b>{s.t}</b>
                <span>{s.d}</span>
              </p>
            ))}
          </div>
          {props.ctas}
        </div>

        <div className="hero__scene" aria-hidden="true">
          <div className="dir">
            <div className="dir__head">
              <span className="dir__rub">{scene.rubrique}</span>
              <span className="dir__guide">A — V</span>
            </div>
            <div className="dir__list">
              {listing.map((name, i) => (
                <div key={name} className={`dir__item${i === TARGET_INDEX ? ' dir__item--target' : ''}`}>
                  <b>{name}</b>
                  <i />
                  <span>{i === TARGET_INDEX ? scene.phone : `${String(10 + ((i * 7) % 89)).padStart(2, '0')} ••`}</span>
                </div>
              ))}
            </div>

            <div className="entry">
              <div className="entry__line">
                <b>{scene.target}</b>
                <i />
                <span>{scene.phone}</span>
              </div>
              <div className="entry__ad">
                <span className="entry__name">{scene.target}</span>
                <span className="entry__tag">{scene.tagline}</span>
                <span className="entry__phone">{scene.phone}</span>
              </div>
              <div className="entry__site">
                <div className="site__bar">
                  <span className="site__dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="site__url">{scene.url}</span>
                  <span className="site__live">● {scene.live}</span>
                </div>
                <div className="site__body">
                  <div className="site__copy">
                    <span className="site__h">{scene.target}</span>
                    <span className="site__p">{scene.tagline}</span>
                    <span className="site__cta">{scene.cta}</span>
                  </div>
                  <div className="site__img">
                    <IconBolt />
                  </div>
                </div>
              </div>
            </div>

            <span className="mark" />
            <svg className="pen" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M8 22 C 6 8, 40 2, 70 4 S 99 14, 96 24 S 60 39, 30 37 S 2 30, 9 16" />
            </svg>
            <ul className="notes">
              {scene.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>

            <div className="rank">
              <div className="rank__box">
                <span className="rank__label">{scene.position}</span>
                <span className="rank__num" ref={rankRef}>
                  1
                </span>
              </div>
              <div className="rank__chips">
                <span>[SEO]</span>
                <span>[Google Ads]</span>
              </div>
            </div>

            <div className="call">
              <span className="call__icon">
                <IconPhone />
              </span>
              <span className="call__t">
                <b>{scene.call}</b>
                <span>{scene.callSub}</span>
              </span>
            </div>

            <span className="scene-note">{props.sceneNote}</span>
          </div>
        </div>

        <nav className="hero__steps" aria-label={props.stepsLabel}>
          <ol>
            {props.steps.map((s, i) => (
              <li key={s.t} style={{ display: 'contents' }}>
                <button type="button" className="stepbtn" data-i={i}>
                  <span className="stepbtn__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="stepbtn__t">{s.t}</span>
                </button>
              </li>
            ))}
          </ol>
          <button type="button" className="replay">
            <IconReplay />
            {props.replay}
          </button>
        </nav>
      </div>
    </section>
  )
}
