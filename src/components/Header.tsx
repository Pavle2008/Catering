'use client'

import { useEffect, useState } from 'react'
import { Menu, X, UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onOpenDrawer: () => void
}

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Sistemi isporuke', href: '#sistemi' },
  { label: 'Cenovnik', href: '#cenovnik' },
  { label: 'Česta pitanja', href: '#pitanja' },
]

export default function Header({ onOpenDrawer }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out',
        scrolled
          ? 'backdrop-blur-md bg-canvas/80 border-b border-charcoal/10 shadow-[0_4px_24px_-12px_rgba(43,41,39,0.18)]'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <a href="#hero" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 bg-charcoal text-canvas transition-all duration-300 group-hover:rotate-12 group-hover:bg-clay group-hover:border-clay">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-charcoal">
              Vukotić
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-taupe">
              Kulinarski Sistemi
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primarna navigacija">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-charcoal/80 transition-colors duration-300 hover:text-charcoal"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 ease-in-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDrawer}
            className="hidden rounded-full bg-clay px-6 py-2.5 text-sm font-semibold text-canvas shadow-[0_8px_20px_-8px_rgba(212,140,112,0.6)] transition-all duration-300 ease-in-out hover:bg-clay-dark hover:shadow-[0_12px_28px_-8px_rgba(212,140,112,0.7)] active:scale-95 sm:inline-flex"
          >
            Rezervišite Termin
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-canvas md:hidden"
            aria-label="Otvori meni"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-charcoal/10 bg-canvas/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobilna navigacija">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-charcoal/80 transition-all duration-300 hover:bg-warm hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              onOpenDrawer()
            }}
            className="mt-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-canvas transition-all duration-300 hover:bg-clay-dark active:scale-95"
          >
            Rezervišite Termin
          </button>
        </nav>
      </div>
    </header>
  )
}
