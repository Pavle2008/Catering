'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

interface HeroProps {
  onOpenDrawer: () => void
}

const heroStats = [
  { value: '5.000+', label: 'Obroka dnevno' },
  { value: '12 god.', label: 'Iskustva' },
  { value: '98%', label: 'Zadovoljstvo klijenata' },
]

export default function Hero({ onOpenDrawer }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-canvas pt-28 pb-20"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-clay/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-sage/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #2B2927 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-8xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-canvas/60 px-4 py-1.5 backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-clay" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/80">
                B2B Korporativni Ketering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
              className="mt-7 max-w-3xl text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tightest text-charcoal sm:text-6xl lg:text-7xl"
            >
              Kulinarska Logistika za{' '}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-clay">Korporativne</span>
                <span className="absolute bottom-1 left-0 h-3 w-full -skew-x-6 bg-clay/15" />
              </span>{' '}
              Događaje
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.16 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-taupe"
            >
              Od intimnih sastanaka do nacionalnih kongresa — Vukotić Kulinarski Sistemi
              skalira sa vašim potrebama. HACCP-certifikovani standardi, dokazana logistika,
              besprekorno izvođenje.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                onClick={onOpenDrawer}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-8 py-4 text-sm font-semibold text-canvas shadow-[0_12px_28px_-10px_rgba(212,140,112,0.7)] transition-all duration-300 ease-in-out hover:bg-clay-dark hover:shadow-[0_16px_36px_-10px_rgba(212,140,112,0.8)] active:scale-95"
              >
                Rezervišite Termin
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="#sistemi"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-8 py-4 text-sm font-semibold text-charcoal transition-all duration-300 ease-in-out hover:border-charcoal hover:bg-charcoal hover:text-canvas"
              >
                Upoznajte Sisteme
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.32 }}
              className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-charcoal/10 pt-8"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-mono text-3xl font-bold tracking-tight text-charcoal">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-taupe">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-3 -skew-y-2 rounded-3xl bg-clay/15" />
              <div className="relative overflow-hidden rounded-3xl border border-charcoal/10 bg-sage shadow-[0_30px_60px_-20px_rgba(43,41,39,0.25)]">
                <img
                  src="https://images.pexels.com/photos/3033032/pexels-photo-3033032.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Korporativni ketering priprema"
                  className="h-[460px] w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/20 bg-canvas/85 px-5 py-4 backdrop-blur-md">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-taupe">
                      Sledeći slobodan termin
                    </span>
                    <span className="font-heading text-lg font-bold text-charcoal">
                      18. Jul 2025.
                    </span>
                  </div>
                  <span className="flex h-3 w-3 items-center justify-center">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-clay/60" />
                    <span className="h-2 w-2 rounded-full bg-clay" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
