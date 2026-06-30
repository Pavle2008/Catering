'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const stats = [
  { value: '5.000+', label: 'Isporučenih obroka dnevno' },
  { value: '200+', label: 'Aktivnih korporativnih klijenata' },
  { value: '98%', label: 'Stopa zadovoljstva' },
  { value: '12 god.', label: 'Iskustva na tržištu' },
]

const testimonials = [
  {
    quote:
      'Vukotić tim je preuzeo kompletnu logistiku za naš godišnji kongres sa 800 učesnika. Besprekorno izvođenje, nijedan jedini kašnjenje.',
    author: 'Ana Petrović',
    role: 'HR Direktorka, TechCorp Serbia',
    rating: 5,
  },
  {
    quote:
      'Dnevni obed za naš tim od 120 ljudi postao je rutina koju više ne moram da pratim. Hrana uvek sveža, dostava uvek na vreme.',
    author: 'Marko Stanković',
    role: 'Operativni Menadžer, FinTech Solutions',
    rating: 5,
  },
  {
    quote:
      'Profesionalan pristup od prvog upita. Veganski meni za našu ekipu bio je iznenađujuće kreativan — saradnici su tražili recepte.',
    author: 'Jelena Nikolić',
    role: 'Office Manager, GreenStudio',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-sage px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        {/* Stats ribbon */}
        <div className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal/10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
              className="flex flex-col items-center justify-center gap-2 bg-canvas px-6 py-10 text-center"
            >
              <span className="font-mono text-4xl font-bold tracking-tight text-charcoal">
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-taupe">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-8 rounded-full bg-clay" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe">
              Reference
            </span>
          </div>
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl">
            Šta Kažu Naši Klijenti
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="group flex flex-col gap-5 rounded-2xl border border-charcoal/10 bg-canvas p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-clay/40 hover:shadow-[0_24px_48px_-20px_rgba(43,41,39,0.2)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-clay text-clay" />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-clay/30 transition-colors duration-300 group-hover:text-clay/60" />
              </div>
              <p className="text-sm leading-relaxed text-charcoal/85">"{t.quote}"</p>
              <div className="mt-auto flex items-center gap-3 border-t border-charcoal/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal font-heading text-sm font-bold text-canvas">
                  {t.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-charcoal">{t.author}</span>
                  <span className="text-xs text-taupe">{t.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
