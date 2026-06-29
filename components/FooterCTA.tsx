import { Button } from '@/components/ui/button'

export default function FooterCTA() {
  return (
    <section className="bg-[#1C1917] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-5 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-6 rounded-full bg-[#D6CFC8]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
                Katalog usluga
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[#FAFAF9] sm:text-4xl text-balance">
              Gladni za više?
            </h2>
            <p className="text-base leading-relaxed text-[#A8A29E]">
              Preuzmite naš potpuni katalog usluga, menija i referentnih primera. Saznajte šta je moguće i kako možemo pomoći da vaš događaj bude neponovljiv.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Button
              asChild
              size="lg"
              className="bg-[#FAFAF9] text-[#1C1917] font-semibold hover:bg-[#E8E4DF] transition-all duration-300 px-8 py-6 text-base"
            >
              <a href="/katalog.pdf" download>
                Preuzmi PDF Katalog
              </a>
            </Button>
            <p className="text-xs text-[#57534E]">
              PDF dokument · Besplatno · Bez registracije
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <span className="font-heading text-sm font-semibold text-[#78716C]">
            Catering <span className="text-[#D6CFC8]">#1</span>
          </span>
          <p className="text-xs text-[#57534E]">
            © 2025 Catering #1. Sva prava zadržana.
          </p>
        </div>
      </div>
    </section>
  )
}
