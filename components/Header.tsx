'use client'

import { Button } from '@/components/ui/button'

interface HeaderProps {
  onOpenDrawer: () => void
}

const navLinks = [
  { label: 'O nama', href: '#o-nama' },
  { label: 'Logistika', href: '#logistika' },
  { label: 'Vesti', href: '#vesti' },
]

export default function Header({ onOpenDrawer }: HeaderProps) {
  return (
    <div className="relative min-h-[92vh] overflow-hidden bg-[#1C1917]">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('/placeholder.svg?height=900&width=1600')`,
        }}
        aria-hidden="true"
      />

      {/* Sticky nav bar with blur */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/10 bg-[#1C1917]/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-heading font-bold tracking-tight text-[#FAFAF9]">
              Catering <span className="text-[#D6CFC8]">#1</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primarna navigacija">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#D6CFC8] transition-colors duration-200 hover:text-[#FAFAF9]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Single CTA */}
          <Button
            onClick={onOpenDrawer}
            className="bg-[#FAFAF9] text-[#1C1917] font-semibold hover:bg-[#E8E4DF] transition-all duration-300 px-6"
          >
            Inicirajte Sastanak
          </Button>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center px-6 py-28 sm:py-36">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#78716C]">
          B2B Korporativni Katering
        </p>
        <h1 className="text-balance font-heading text-5xl font-bold leading-tight text-[#FAFAF9] sm:text-6xl lg:text-7xl max-w-3xl">
          Logistička Rešenja za Korporativne Događaje
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#A8A29E]">
          Od malog sastanka do nacionalnog kongresa — naš tim skalira sa vama. Profesionalna usluga catering-a sa dokazanim iskustvom za enterprise događaje.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            onClick={onOpenDrawer}
            size="lg"
            className="bg-[#FAFAF9] text-[#1C1917] font-semibold hover:bg-[#E8E4DF] transition-all duration-300 px-8 py-6 text-base"
          >
            Dogovorite Sastanak
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-[#D6CFC8] bg-transparent hover:bg-white/10 transition-all duration-300 px-8 py-6 text-base"
          >
            Upoznajte nas
          </Button>
        </div>

        {/* Anchor metrics strip */}
        <div className="mt-20 flex flex-wrap gap-10 border-t border-white/10 pt-8">
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
