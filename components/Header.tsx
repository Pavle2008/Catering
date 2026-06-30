'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onOpenDrawer: () => void
}

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Cenovnik', href: '#cenovnik' },
  { label: 'Vesti', href: '#vesti' },
]

export default function Header({ onOpenDrawer }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-[92vh] overflow-hidden bg-[#1C1917]">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Sticky nav */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#1C1917]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo with accent bar */}
          <div className="flex flex-col items-start">
            <span className="text-2xl font-heading font-bold tracking-tight text-[#FAFAF9]">
              Gurmanija
            </span>
            <div
              className={`h-[2px] bg-[#78716C] mt-1 transition-all duration-700 ${
                scrolled ? 'w-10' : 'w-7'
              }`}
            />
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primarna navigacija">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-[#A8A29E] transition-colors duration-200 hover:text-[#FAFAF9] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#78716C] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button
            onClick={onOpenDrawer}
            className="bg-[#FAFAF9] text-[#1C1917] font-semibold hover:bg-[#E8E4DF] transition-all duration-300 px-6"
          >
            Rezerviši Termin
          </Button>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-28 sm:py-36">
        <p className="mb-4 animate-fade-in-slide-up text-sm font-medium uppercase tracking-widest text-[#78716C]">
          B2B Korporativni Katering
        </p>
        <h1 className="animate-fade-in-slide-up animation-delay-100 text-balance font-heading text-5xl font-bold leading-tight text-[#FAFAF9] sm:text-6xl lg:text-7xl max-w-3xl">
          Logistička Rešenja za Korporativne Događaje
        </h1>
        <p className="mt-6 max-w-xl animate-fade-in-slide-up animation-delay-200 text-lg leading-relaxed text-[#A8A29E]">
          Od malog sastanka do nacionalnog kongresa — naš tim skalira sa vama uz dokazano iskustvo u enterprise catering-u.
        </p>
        <div className="mt-10 flex animate-fade-in-slide-up animation-delay-300 flex-col gap-4 sm:flex-row">
          <Button
            onClick={onOpenDrawer}
            size="lg"
            className="bg-[#FAFAF9] text-[#1C1917] font-semibold hover:bg-[#E8E4DF] transition-all duration-300 px-8 py-6 text-base"
          >
            Rezerviši Termin
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white/20 text-[#D6CFC8] bg-transparent hover:bg-white/10 transition-all duration-300 px-8 py-6 text-base"
          >
            <a href="#cenovnik">Pogledaj Cene</a>
          </Button>
        </div>

        {/* Quick stats */}
        <div className="mt-20 flex animate-fade-in-slide-up animation-delay-500 flex-wrap gap-10 border-t border-white/10 pt-8">
          {[
            { value: '200+', label: 'Aktivnih klijenata' },
            { value: '15.000+', label: 'Obedjenih osoba' },
            { value: '98%', label: 'Stopa zadovoljstva' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-[#FAFAF9]">{stat.value}</span>
              <span className="text-sm text-[#78716C]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
