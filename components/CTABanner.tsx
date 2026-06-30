'use client'

import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/useInView'

interface CTABannerProps {
  onOpenDrawer: () => void
}

export default function CTABanner({ onOpenDrawer }: CTABannerProps) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="px-6 py-20 sm:py-24"
      style={{ backgroundColor: '#E6EBE4' }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`flex flex-col items-center gap-8 text-center ${inView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
        >
          {/* Decorative rule */}
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(43,41,39,0.18)' }} />
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(43,41,39,0.18)' }} />
          </div>

          <h2 className="font-heading text-4xl font-bold sm:text-5xl text-balance max-w-xl" style={{ color: '#2B2927' }}>
            Gladni za više?
          </h2>
          <p className="text-base leading-relaxed max-w-md" style={{ color: '#6B7066' }}>
            Kontaktirajte nas danas — besplatna procena i personalizovana ponuda u roku od 24 sata.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={onOpenDrawer}
              size="lg"
              className="px-10 py-6 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-[1.04] hover:brightness-110"
              style={{ backgroundColor: '#D48C70', color: '#FFFFFF' }}
            >
              Rezervišite Termin
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="px-10 py-6 text-base font-medium transition-all duration-300 ease-in-out hover:scale-[1.02]"
              style={{ borderColor: '#DFE3DC', color: '#2B2927', backgroundColor: 'transparent' }}
            >
              <a href="tel:+38111000000">+381 11 000 0000</a>
            </Button>
          </div>

          {/* Nav anchors */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 pt-4" aria-label="Footer navigacija">
            {[
              { label: 'O nama', href: '#o-nama' },
              { label: 'Sistemi isporuke', href: '#sistemi-isporuke' },
              { label: 'Cenovnik', href: '#cenovnik' },
              { label: 'Česta pitanja', href: '#faq' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium transition-all duration-300 ease-in-out hover:scale-[1.05]"
                style={{ color: '#6B7066' }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#D48C70' }} />
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs pt-4" style={{ color: '#A5A89F' }}>
            © {new Date().getFullYear()} Vukotić Kulinarski Sistemi. Sva prava zadržana.
          </p>
        </div>
      </div>
    </section>
  )
}
