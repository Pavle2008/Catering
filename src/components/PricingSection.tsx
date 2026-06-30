'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingSectionProps {
  onOpenDrawer: () => void
}

const tiers = [
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'Za male timove i sastanke',
    price: '890',
    unit: 'RSD / osoba',
    capacity: '20 – 50 mesta',
    featured: false,
    features: [
      'Finger food meni (8 komada)',
      'Bife sa osvežavajućim pićem',
      '1 HACCP supervizor',
      'Dostava u zakazano vreme',
      'Osnovna oprema za servis',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Za korporativne ručkove',
    price: '1.450',
    unit: 'RSD / osoba',
    capacity: '50 – 150 mesta',
    featured: true,
    features: [
      'Linijski meni (3 topla jela)',
      'Salata bife + desert',
      '2 HACCP supervizora',
      'Dostava do 11:30h',
      'Kompletna oprema + stojevi',
      'Dijetetski meni na zahtev',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Enterprise',
    tagline: 'Za kongrese i manifestacije',
    price: 'Po upitu',
    unit: 'Custom ponuda',
    capacity: '150 – 500+ mesta',
    featured: false,
    features: [
      'Višezonski paralelni servis',
      'Live kuhinja stanica',
      'Dedicated tim + 2 supervizora',
      'Transportni hladnjaci',
      'Moderatorska podrška',
      'Digitalni logistički izveštaj',
    ],
  },
]

export default function PricingSection({ onOpenDrawer }: PricingSectionProps) {
  return (
    <section id="cenovnik" className="bg-canvas px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 border-b border-charcoal/10 pb-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-8 rounded-full bg-clay" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe">
              Cenovnik
            </span>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl">
              Transparentne Cene, Jasna Očekivanja
            </h2>
            <p className="max-w-md text-base leading-relaxed text-taupe">
              Tri paketa prilagođena različitim obimima. Cene su indikativne — finalna ponuda
              se pravi na osnovu vaših specifičnih zahteva.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.article
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className={cn(
                'group relative flex flex-col gap-6 rounded-2xl border-2 p-8 transition-all duration-300 ease-in-out',
                tier.featured
                  ? 'border-charcoal bg-charcoal text-canvas shadow-[0_30px_60px_-20px_rgba(43,41,39,0.35)] lg:-translate-y-3'
                  : 'border-charcoal/15 bg-canvas hover:-translate-y-1 hover:border-clay/40 hover:shadow-lg',
              )}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-clay px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-canvas">
                  Najpopularnije
                </span>
              )}

              <div className="flex flex-col gap-2">
                <span
                  className={cn(
                    'text-[11px] font-semibold uppercase tracking-[0.18em]',
                    tier.featured ? 'text-clay-light' : 'text-clay',
                  )}
                >
                  {tier.tagline}
                </span>
                <h3 className="font-heading text-3xl font-bold">{tier.name}</h3>
                <span
                  className={cn(
                    'inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium',
                    tier.featured ? 'bg-canvas/10 text-canvas/80' : 'bg-warm text-taupe',
                  )}
                >
                  {tier.capacity}
                </span>
              </div>

              <div className="flex items-baseline gap-2 border-t border-current/10 pt-5">
                <span className="font-mono text-4xl font-bold tracking-tight">{tier.price}</span>
                <span className={cn('text-sm', tier.featured ? 'text-canvas/60' : 'text-taupe')}>
                  {tier.unit}
                </span>
              </div>

              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={cn(
                        'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        tier.featured ? 'bg-clay text-canvas' : 'bg-charcoal text-canvas',
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span
                      className={cn(
                        'text-sm leading-relaxed',
                        tier.featured ? 'text-canvas/85' : 'text-charcoal/80',
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenDrawer}
                className={cn(
                  'group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-in-out active:scale-95',
                  tier.featured
                    ? 'bg-clay text-canvas hover:bg-clay-light hover:text-charcoal'
                    : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-canvas',
                )}
              >
                Rezervišite Termin
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-taupe">
          Cene ne uključuju PDV. Moguća je prilagodba paketa za specifične nutritivne i logističke zahteve.
        </p>
      </div>
    </section>
  )
}
