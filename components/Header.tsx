'use client'

// En-tête : marque, rubriques, langue, appel à l'action + menu mobile façon index d'annuaire

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IconClose, IconMenu, IconPhone } from './Icons'

type NavItem = { href: string; label: string; active: boolean }

type Props = {
  homeHref: string
  tagline: string
  nav: NavItem[]
  extra: { href: string; label: string }[]
  cta: { href: string; label: string }
  lang: { href: string; label: string; title: string; hrefLang: string }
  phone: string
  labels: { menu: string; close: string; call: string }
}

export default function Header(props: Props) {
  const [open, setOpen] = useState(false)

  // Bloque le défilement de la page quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const letters = 'ABCDEFGHIJKL'

  return (
    <>
      <header className="header">
        <div className="wrap header__in">
          <Link href={props.homeHref} className="brand" onClick={close}>
            <span className="brand__name">Stripwork</span>
            <span className="brand__tag">{props.tagline}</span>
          </Link>

          <nav className="nav" aria-label="Principal">
            {props.nav.map((item) => (
              <Link key={item.href} href={item.href} data-section={item.active ? 'true' : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__tools">
            <a className="lang" href={props.lang.href} hrefLang={props.lang.hrefLang} title={props.lang.title}>
              {props.lang.label}
            </a>
            {props.phone && (
              <a className="btn btn--ghost header__phone" href={`tel:${props.phone.replace(/\s/g, '')}`}>
                <IconPhone />
                <span className="sr-only">{props.labels.call}</span>
                {props.phone}
              </a>
            )}
            <Link className="btn" href={props.cta.href} onClick={close}>
              {props.cta.label}
            </Link>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose /> : <IconMenu />}
              <span className="sr-only">{open ? props.labels.close : props.labels.menu}</span>
            </button>
          </div>
        </div>
      </header>

      <div id="menu" className="menu" data-open={open} aria-hidden={!open} inert={!open}>
        <ul className="menu__list">
          {[...props.nav, ...props.extra.map((e) => ({ ...e, active: false }))].map((item, i) => (
            <li key={item.href}>
              <Link href={item.href} onClick={close} aria-current={item.active ? 'page' : undefined}>
                <span className="menu__letter">{letters[i]}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu__foot">
          <Link className="btn" href={props.cta.href} onClick={close}>
            {props.cta.label}
          </Link>
          {props.phone && (
            <a className="btn btn--ghost" href={`tel:${props.phone.replace(/\s/g, '')}`}>
              <IconPhone />
              {props.phone}
            </a>
          )}
        </div>
      </div>
    </>
  )
}
