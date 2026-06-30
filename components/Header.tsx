'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onOpenDrawer: () => void
}

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Sistemi isporuke', href: '#sistemi-isporuke' },
  { label: 'Cenovnik', href: '#cenovnik' },
  { label: 'Česta pitanja', href: '#faq' },
]

export default function Header({ onOpenDrawer }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-[94vh] overflow-hidden" style={{ backgroundColor: '#2B2927' }}>
      {/* Warm grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Warm radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(212,140,112,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Sticky nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'shadow-[0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md'
            : 'bg-transparent'
        }`}
        style={scrolled ? { backgroundColor: 'rgba(43,41,39,0.96)' } : {}}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="flex flex-col items-start gap-0.5">
            <span className="font-heading text-xl font-bold leading-none tracking-tight text-[#FDFBF7]">
              Vukotić
            </span>
            <div className="flex items-center gap-1.5">
              <div className="h-[2px] w-8 bg-[#D48C70]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D48C70]">
                Kulinarski Sistemi
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primarna navigacija">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-[#A09890] transition-all duration-300 ease-in-out hover:scale-[1.04] hover:text-[#FDFBF7]"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#D48C70] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button
            onClick={onOpenDrawer}
            className="font-semibold transition-all duration-300 ease-in-out hover:scale-[1.03] hover:brightness-110 px-6"
            style={{ backgroundColor: '#D48C70', color: '#FFFFFF' }}
          >
            Rezervišite Termin
          </Button>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-24 sm:py-32">
        <p className="mb-4 animate-fade-in-slide-up text-xs font-semibold uppercase tracking-[0.22em] text-[#D48C70]">
          B2B Korporativni Katering · Srbija
        </p>
        <h1 className="animate-fade-in-slide-up animation-delay-100 max-w-3xl text-balance font-heading text-5xl font-bold leading-[1.1] text-[#FDFBF7] sm:text-6xl lg:text-7xl">
          Logistika koja Hrani Vaš Tim
        </h1>
        <p className="mt-6 max-w-xl animate-fade-in-slide-up animation-delay-200 text-lg leading-relaxed text-[#A09890]">
          Od radnog doručka do kongresa sa 1.500 gostiju — Vukotić Kulinarski Sistemi skalira sa vašim poslovnim potrebama, bez kompromisa.
        </p>
        <div className="mt-10 flex animate-fade-in-slide-up animation-delay-300 flex-col gap-4 sm:flex-row">
          <Button
            onClick={onOpenDrawer}
            size="lg"
            className="px-8 py-6 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-[1.03] hover:brightness-110"
            style={{ backgroundColor: '#D48C70', color: '#FFFFFF' }}
          >
            Rezervišite Termin
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 bg-transparent px-8 py-6 text-base transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-[1.02]"
            style={{ color: '#D6CFC8' }}
          >
            <a href="#cenovnik">Pogledajte Cenovnik</a>
          </Button>
        </div>

        {/* Quick stats */}
        <div className="mt-20 flex animate-fade-in-slide-up animation-delay-500 flex-wrap gap-10 border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          {[
            { value: '200+', label: 'Aktivnih klijenata' },
            { value: '15.000+', label: 'Obedjenih osoba' },
            { value: '98%', label: 'Stopa zadovoljstva' },
            { value: '12 god.', label: 'Iskustvo' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-bold text-[#FDFBF7]">{stat.value}</span>
              <span className="text-xs text-[#6B7066]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
