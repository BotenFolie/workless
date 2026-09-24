'use client'

// Scène signature : une page d'annuaire où une entrée perdue devient un site en tête de rubrique.
// Un seul état `progress` 0→1 en lecture automatique (pause hors écran), étapes cliquables, « Rejouer ».

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

/** Plages de progression de chaque étape (début, fin) ; les écarts = temps de pause lisible */
const RANGES: [number, number][] = [
  [0.02, 0.09],
  [0.13, 0.27],
  [0.31, 0.45],
  [0.49, 0.61],
  [0.65, 0.79],
  [0.83, 0.94],
]
/** Durée d'une lecture complète (ms) */
const DURATION = 15000
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

    // État unique de la scène : progress 0→1, lu automatiquement
    let progress = 0
    let frame = 0
    let last = 0
    let visible = true
    let lastStep = -1

    const render = () => {
      RANGES.forEach(([a, b], i) => {
        hero.style.setProperty(`--s${i + 1}`, clamp01((progress - a) / (b - a)).toFixed(4))
      })
      const s5 = clamp01((progress - RANGES[4][0]) / (RANGES[4][1] - RANGES[4][0]))
      if (rankRef.current) rankRef.current.textContent = String(Math.round(START_RANK - (START_RANK - 1) * s5))
      const step = stepFromProgress(progress)
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

    const tick = (now: number) => {
      const dt = last ? now - last : 0
      last = now
      progress = Math.min(1, progress + dt / DURATION)
      render()
      frame = progress < 1 && visible ? requestAnimationFrame(tick) : 0
      if (!frame) last = 0
    }

    const play = () => {
      if (!frame && visible && progress < 1) frame = requestAnimationFrame(tick)
    }

    const stop = () => {
      if (frame) cancelAnimationFrame(frame)
      frame = 0
      last = 0
    }

    // Pause hors écran ou onglet masqué, reprise au retour
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden
      if (visible) play()
      else stop()
    })
    io.observe(hero)
    const onVisibility = () => {
      visible = !document.hidden
      if (visible) play()
      else stop()
    }
    document.addEventListener('visibilitychange', onVisibility)

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const btn = target.closest<HTMLButtonElement>('.stepbtn')
      if (btn) {
        stop()
        progress = RANGES[Number(btn.dataset.i)][0]
        render()
        play()
        return
      }
      if (target.closest('.replay')) {
        stop()
        progress = 0
        render()
        play()
      }
    }
    hero.addEventListener('click', onClick)

    render()
    play()

    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      hero.removeEventListener('click', onClick)
      stop()
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
