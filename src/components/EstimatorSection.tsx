'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Instagram, Mail, Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const capacityTiers = [
  {
    id: 'small',
    capacity: '20 – 50',
    label: 'Mali Sastanci',
    detail: 'Finger food servis, brza rotacija, minimalan setup. Idealno za radne grupe i timove.',
    tags: ['Finger food', 'Bife piće', '1 supervizor'],
    recommendation: 'Preporučujemo: Essential Paket — idealan za fokusne sastanke i timove do 50 osoba.',
  },
  {
    id: 'medium',
    capacity: '50 – 150',
    label: 'Korporativni Ručakovi',
    detail: 'Linijski meni, topla jela u termosima, dostava u 11:30h. Standard za dnevni obed.',
    tags: ['3 topla jela', 'Salata bife', 'HACCP certifikat'],
    recommendation: 'Preporučujemo: Professional Paket — optimalan balans cene i logističke pokrivenosti.',
  },
  {
    id: 'large',
    capacity: '150 – 500+',
    label: 'Kongresi i Manifestacije',
    detail: 'Višezonska organizacija, paralelni servis, moderatorska podrška, live kuhinja.',
    tags: ['Višezonski servis', '2 supervizora', 'Live kuhinja'],
    recommendation: 'Preporučujemo: Premium Enterprise Paket usled povećanih logističkih zahteva.',
  },
]

const dietMenus = {
  standard: {
    label: 'Standardni Meni',
    items: [
      { name: 'Piletina sa pečenim krompirom', desc: 'Domaća roštiljana piletina, ruzmarin' },
      { name: 'Govedina u crnom vinu', desc: 'Polako dinstana, sa pire krompirom' },
      { name: 'Svinjski vrat sa žitaricama', desc: 'Sa sezonskim povrćem' },
      { name: 'Riba na mediteranski način', desc: 'Sa blitvom i limunom' },
    ],
  },
  vegan: {
    label: 'Veganski Meni',
    items: [
      { name: 'Tofu sa povrćem wok', desc: 'Soja sos, đumbir, sezonsko povrće' },
      { name: 'Leća sa kurkumom', desc: 'Sa integralnim pirinčem' },
      { name: 'Pečeni patlidžan sa tahinijem', desc: 'Bliskoistočni inspiracija' },
      { name: 'Kuskus sa povrćem', desc: 'Sa maslinovim uljem i začinskim biljem' },
    ],
  },
  posni: {
    label: 'Posni Meni',
    items: [
      { name: 'Pasulj na srpski način', desc: 'Sa dimljenom paprikom' },
      { name: 'Sarma od pečenog paprike', desc: 'Sa integralnim žitaricama' },
      { name: 'Riblja čorba', desc: 'Sa dve vrste ribe i povrćem' },
      { name: 'Pita sa bundevom', desc: 'Sa orasima i cimetom' },
    ],
  },
}

type DietKey = keyof typeof dietMenus

export default function EstimatorSection() {
  const [activeId, setActiveId] = useState<string>('medium')
  const [activeDiet, setActiveDiet] = useState<DietKey>('standard')

  const activeTier = capacityTiers.find((t) => t.id === activeId)!
  const activeMenu = dietMenus[activeDiet]

  return (
    <section id="sistemi" className="bg-sage px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 border-b border-charcoal/10 pb-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-8 rounded-full bg-clay" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe">
              Sistemi Isporuke
            </span>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl">
              B2B Estimator: Pronadjite Svoj Paket
            </h2>
            <p className="max-w-md text-base leading-relaxed text-taupe">
              Kliknite na kapacitet koji odgovara vašem događaju. Sistem automatski predlaže
              optimalni logistički tier i prateći meni.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: capacity tiers + recommendation */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {capacityTiers.map((tier) => {
                const isActive = activeId === tier.id
                return (
                  <button
                    key={tier.id}
                    onClick={() => setActiveId(tier.id)}
                    className={cn(
                      'group flex flex-col gap-4 rounded-2xl border-2 p-6 text-left transition-all duration-300 ease-in-out',
                      isActive
                        ? 'border-charcoal bg-charcoal text-canvas shadow-[0_20px_40px_-16px_rgba(43,41,39,0.4)] scale-[1.02]'
                        : 'border-charcoal/15 bg-canvas hover:border-clay/50 hover:shadow-md',
                    )}
                    aria-pressed={isActive}
                  >
                    <div
                      className={cn(
                        'font-mono text-3xl font-bold tracking-tight transition-colors duration-300',
                        isActive ? 'text-canvas' : 'text-charcoal',
                      )}
                    >
                      {tier.capacity}
                    </div>
                    <p
                      className={cn(
                        'text-sm font-semibold transition-colors duration-300',
                        isActive ? 'text-clay-light' : 'text-charcoal/80',
                      )}
                    >
                      {tier.label}
                    </p>
                    <p
                      className={cn(
                        'text-xs leading-relaxed transition-colors duration-300',
                        isActive ? 'text-canvas/70' : 'text-taupe',
                      )}
                    >
                      {tier.detail}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {tier.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            'rounded-full px-2.5 py-1 text-[10px] font-medium transition-colors duration-300',
                            isActive
                              ? 'bg-canvas/10 text-clay-light'
                              : 'bg-warm text-taupe',
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Recommendation output */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="mt-6 flex items-start gap-4 rounded-2xl border border-clay/30 bg-canvas p-6"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay text-canvas">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
                    Preporuka sistema
                  </span>
                  <p className="text-base font-medium leading-relaxed text-charcoal">
                    {activeTier.recommendation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Diet filter + menu */}
            <div className="mt-8 rounded-2xl border border-charcoal/10 bg-canvas p-7">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-heading text-xl font-bold text-charcoal">Pregled Menija</h3>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(dietMenus) as DietKey[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveDiet(key)}
                      className={cn(
                        'rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ease-in-out active:scale-95',
                        activeDiet === key
                          ? 'bg-charcoal text-canvas shadow-md'
                          : 'border border-charcoal/20 text-charcoal/70 hover:border-charcoal hover:text-charcoal',
                      )}
                    >
                      {dietMenus[key].label}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeDiet}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {activeMenu.items.map((item) => (
                    <li
                      key={item.name}
                      className="group flex flex-col gap-1 rounded-xl border border-charcoal/10 bg-warm/40 p-4 transition-all duration-300 hover:border-clay/40 hover:bg-warm"
                    >
                      <span className="text-sm font-semibold text-charcoal">{item.name}</span>
                      <span className="text-xs leading-relaxed text-taupe">{item.desc}</span>
                    </li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: direct contact box */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 flex flex-col gap-6 rounded-2xl border border-charcoal/10 bg-charcoal p-8 text-canvas">
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-clay-light">
                  Direktni Kontakt
                </span>
                <h3 className="font-heading text-2xl font-bold leading-tight">
                  Razgovarajmo o vašem događaju
                </h3>
                <p className="text-sm leading-relaxed text-canvas/70">
                  Naš tim je dostupan radnim danima od 8h do 20h. Za hitne upite koristite telefon.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+381111234567"
                  className="group flex items-center gap-4 rounded-xl border border-canvas/10 bg-canvas/5 px-5 py-4 transition-all duration-300 hover:border-clay hover:bg-clay hover:text-canvas"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas/10 transition-all duration-300 group-hover:bg-canvas group-hover:text-clay">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-canvas/60">
                      Telefon
                    </span>
                    <span className="font-mono text-sm font-semibold">+381 11 123 4567</span>
                  </span>
                </a>

                <a
                  href="mailto:kontakt@vukotic-sistemi.rs"
                  className="group flex items-center gap-4 rounded-xl border border-canvas/10 bg-canvas/5 px-5 py-4 transition-all duration-300 hover:border-clay hover:bg-clay hover:text-canvas"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas/10 transition-all duration-300 group-hover:bg-canvas group-hover:text-clay">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-canvas/60">
                      Email
                    </span>
                    <span className="font-mono text-sm font-semibold">kontakt@vukotic-sistemi.rs</span>
                  </span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-canvas/10 bg-canvas/5 px-5 py-4 transition-all duration-300 hover:border-clay hover:bg-clay hover:text-canvas"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-canvas/10 transition-all duration-300 group-hover:bg-canvas group-hover:text-clay">
                    <Instagram className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-canvas/60">
                      Instagram
                    </span>
                    <span className="font-mono text-sm font-semibold">@vukotic.sistemi</span>
                  </span>
                </a>
              </div>

              <div className="mt-2 flex flex-col gap-3 border-t border-canvas/10 pt-6">
                <p className="text-xs leading-relaxed text-canvas/60">
                  Preferirate pisani upit? Pošaljite kratku poruku i mi ćemo odgovoriti sa predlogom.
                </p>
                <a
                  href="#cenovnik"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-semibold text-canvas transition-all duration-300 ease-in-out hover:bg-clay-light hover:text-charcoal active:scale-95"
                >
                  Pogledajte Cenovnik
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
