import Link from 'next/link'
import { content } from '@/lib/content'

// Footer minimaliste
export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/[0.06] py-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Copyright */}
        <p className="font-inter text-neutral text-sm">{content.footer.copy}</p>

        {/* Liens nav */}
        <nav className="flex items-center gap-6">
          {content.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-sm text-neutral hover:text-surface transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/confidentialite"
            className="font-inter text-sm text-neutral/50 hover:text-neutral transition-colors duration-200"
          >
            Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  )
}
