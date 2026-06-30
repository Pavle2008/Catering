'use client'

import { motion } from 'framer-motion'
import { Truck, CalendarHeart, ChefHat } from 'lucide-react'

const team = [
  {
    name: 'Nikola Vukotić',
    role: 'Šef Logistike',
    bio: '15 godina koordinacije korporativnih dostava. Garantuje da svaki obrok stigne na vreme, u idealnoj temperaturi.',
    icon: Truck,
    initials: 'NV',
  },
  {
    name: 'Marija Jovanović',
    role: 'Koordinator Događaja',
    bio: 'Vodi komunikaciju sa klijentima od upita do izvođenja. Specijalista za kongrese i višezonske servise.',
    icon: CalendarHeart,
    initials: 'MJ',
  },
  {
    name: 'Stefan Marković',
    role: 'Izvršni Kuvar',
    bio: 'Kreira sezonske menije prilagođene poslovnoj sredini. HACCP sertifikovan, fokus na nutritivnu ravnotežu.',
    icon: ChefHat,
    initials: 'SM',
  },
]

export default function TeamSection() {
  return (
    <section id="o-nama" className="bg-canvas px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 border-b border-charcoal/10 pb-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-8 rounded-full bg-clay" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe">
              Naš Tim
            </span>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl">
              Ljudi Ispred Sistema
            </h2>
            <p className="max-w-md text-base leading-relaxed text-taupe">
              Naš tim kombinuje kulinarsko majstorstvo sa vojničkom logističkom preciznošću.
              Svaki član garantuje deo lanca poverenja.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((member, i) => {
            const Icon = member.icon
            return (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-charcoal/10 bg-warm/40 p-8 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-clay/40 hover:bg-warm hover:shadow-[0_24px_48px_-20px_rgba(43,41,39,0.2)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal font-heading text-xl font-bold text-canvas transition-all duration-300 group-hover:bg-clay">
                    {member.initials}
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-canvas">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-2xl font-bold text-charcoal">{member.name}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-clay">
                    {member.role}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-taupe">{member.bio}</p>
                <div className="mt-auto h-px w-0 bg-clay transition-all duration-500 group-hover:w-full" />
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
