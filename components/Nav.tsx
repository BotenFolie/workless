'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { content } from '@/lib/content'
import { useDiagnostic } from '@/lib/diagnosticContext'
import { CATALOGUE } from '@/lib/automationCatalogue'

// Nav sticky — mega menu catalogue + hamburger mobile
export default function Nav() {
  const [menuOpen, setMenuOpen]     = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { open } = useDiagnostic()

  // Nettoyage du timeout au unmount
  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [])

  const openCatalog  = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setCatalogOpen(true) }
  const closeCatalog = () => { timeoutRef.current = setTimeout(() => setCatalogOpen(false), 150) }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-white/[0.06]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-grotesk font-bold text-xl text-surface tracking-tight hover:text-accent transition-colors duration-200 flex-shrink-0"
        >
          {content.nav.brand}
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">

          {/* Liens simples */}
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-sm text-neutral hover:text-surface transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Catalogue — mega menu dropdown */}
          <div
            className="relative"
            onMouseEnter={openCatalog}
            onMouseLeave={closeCatalog}
          >
            <button
              onClick={() => setCatalogOpen(v => !v)}
              className="font-inter text-sm text-neutral hover:text-surface transition-colors duration-200 flex items-center gap-1.5"
              aria-expanded={catalogOpen}
              aria-haspopup="true"
            >
              Catalogue
              <svg
                width="10" height="6" viewBox="0 0 10 6" fill="none"
                className={`transition-transform duration-200 ${catalogOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown mega menu */}
            {catalogOpen && (
              <div
                className="absolute top-full right-0 mt-3 w-[540px] bg-[#111111] border border-white/[0.10] shadow-2xl z-[60]"
                onMouseEnter={openCatalog}
                onMouseLeave={closeCatalog}
              >
                {/* En-tête */}
                <div className="px-5 pt-4 pb-3 border-b border-white/[0.06]">
                  <p className="font-inter text-[9px] font-semibold tracking-[0.18em] uppercase text-neutral/40">
                    Catalogue automatisations
                  </p>
                </div>

                {/* Grille 2 colonnes */}
                <div className="grid grid-cols-2">
                  {CATALOGUE.map((page, i) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      onClick={() => setCatalogOpen(false)}
                      className={`group flex flex-col gap-1 px-5 py-4 hover:bg-white/[0.04] transition-colors duration-150 ${
                        i % 2 === 0 ? 'border-r border-white/[0.06]' : ''
                      } ${
                        i < CATALOGUE.length - (CATALOGUE.length % 2 === 0 ? 2 : 1) ? 'border-b border-white/[0.06]' : ''
                      }`}
                    >
                      <span className="font-inter text-sm font-medium text-surface group-hover:text-accent transition-colors duration-150">
                        {page.label}
                      </span>
                      <span className="font-inter text-xs text-neutral/45 leading-snug">
                        {page.desc}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Footer dropdown */}
                <div className="border-t border-white/[0.06] px-5 py-3">
                  <button
                    onClick={() => { setCatalogOpen(false); open() }}
                    className="font-inter text-xs text-accent hover:text-white transition-colors duration-150"
                  >
                    Diagnostic gratuit — identifier ce qu&apos;on peut automatiser →
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={open}
            className="font-inter font-semibold text-sm text-bg bg-accent px-5 py-2.5 hover:bg-white transition-colors duration-200"
          >
            {content.nav.cta}
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

          {/* Liens simples */}
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-inter text-base text-neutral hover:text-surface transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Section catalogue */}
          <div className="flex flex-col gap-3">
            <span className="font-inter text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral/40">
              Catalogue
            </span>
            {CATALOGUE.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => setMenuOpen(false)}
                className="font-inter text-sm text-neutral hover:text-surface transition-colors duration-200 pl-4 border-l border-white/[0.08] hover:border-accent/40"
              >
                {page.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => { setMenuOpen(false); open() }}
            className="font-inter font-semibold text-sm text-bg bg-accent px-5 py-3 text-center hover:bg-white transition-colors duration-200"
          >
            {content.nav.cta}
          </button>
        </div>
      )}
    </header>
  )
}
