'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useContent, useLang } from '@/lib/i18n'
import { useDiagnostic } from '@/lib/diagnosticContext'

// Nav sticky avec hamburger mobile + switcher de langue FR/EN
export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { open } = useDiagnostic()
  const c = useContent()
  const { lang, setLang } = useLang()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-white/[0.06]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-grotesk font-bold text-xl text-surface tracking-tight hover:text-accent transition-colors duration-200"
        >
          {c.nav.brand}
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {c.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-sm text-neutral hover:text-surface transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Switcher FR / EN */}
          <div className="flex items-center gap-1 font-inter text-xs font-semibold tracking-wider">
            <button
              onClick={() => setLang('fr')}
              className={`px-1.5 py-0.5 transition-colors duration-200 ${
                lang === 'fr' ? 'text-accent' : 'text-neutral/40 hover:text-neutral'
              }`}
              aria-label="Français"
            >
              FR
            </button>
            <span className="text-white/10 select-none">·</span>
            <button
              onClick={() => setLang('en')}
              className={`px-1.5 py-0.5 transition-colors duration-200 ${
                lang === 'en' ? 'text-accent' : 'text-neutral/40 hover:text-neutral'
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <button
            onClick={open}
            className="font-inter font-semibold text-sm text-bg bg-accent px-5 py-2.5 rounded-sm hover:bg-white transition-colors duration-200"
          >
            {c.nav.cta}
          </button>
        </nav>

        {/* Bouton hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-11 h-11 -mr-2"
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-surface transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-surface transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-surface transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/[0.06] px-6 py-6 flex flex-col gap-6">
          {c.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-base text-neutral hover:text-surface transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Switcher langue mobile */}
          <div className="flex items-center gap-3 font-inter text-sm font-semibold">
            <button
              onClick={() => { setLang('fr'); setMenuOpen(false) }}
              className={`transition-colors duration-200 ${lang === 'fr' ? 'text-accent' : 'text-neutral/40'}`}
            >
              Français
            </button>
            <span className="text-white/10">·</span>
            <button
              onClick={() => { setLang('en'); setMenuOpen(false) }}
              className={`transition-colors duration-200 ${lang === 'en' ? 'text-accent' : 'text-neutral/40'}`}
            >
              English
            </button>
          </div>

          <Link
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="font-inter font-semibold text-sm text-bg bg-accent px-5 py-3 rounded-sm text-center hover:bg-white transition-colors duration-200"
          >
            {c.nav.cta}
          </Link>
        </div>
      )}
    </header>
  )
}
