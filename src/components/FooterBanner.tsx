'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

interface FooterBannerProps {
  onOpenDrawer: () => void
}

export default function FooterBanner({ onOpenDrawer }: FooterBannerProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-24 sm:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-clay/15 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-clay/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #FDFBF7 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-8xl">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex max-w-2xl flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-8 rounded-full bg-clay" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-canvas/60">
                Katalog Usluga
              </span>
            </div>
            <h2 className="text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-canvas sm:text-5xl lg:text-6xl">
              Gladni za više detalja?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-canvas/70">
              Preuzmite naš potpuni katalog usluga, menija i referentnih primera. Saznajte šta je
              moguće i kako možemo pomoći da vaš događaj bude neponovljiv.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-4 lg:items-end"
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-8 py-4 text-sm font-semibold text-canvas shadow-[0_12px_28px_-10px_rgba(212,140,112,0.7)] transition-all duration-300 ease-in-out hover:bg-clay-light hover:text-charcoal active:scale-95"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Preuzmite PDF Katalog
            </a>
            <button
              onClick={onOpenDrawer}
              className="group inline-flex items-center justify-center gap-2 text-sm font-medium text-canvas/70 transition-colors duration-300 hover:text-canvas"
            >
              Ili rezervišite termin direktno
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-canvas/40">PDF dokument · Besplatno · Bez registracije</p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-canvas/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-heading text-sm font-semibold text-canvas/80">
              Vukotić <span className="text-clay">Kulinarski Sistemi</span>
            </span>
          </div>
          <p className="text-xs text-canvas/40">
            © 2025 Vukotić Kulinarski Sistemi. Sva prava zadržana.
          </p>
        </div>
      </div>
    </section>
  )
}
