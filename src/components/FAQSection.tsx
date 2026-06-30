'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Koliko unapred moramo rezervisati termin?',
    a: 'Za pakete Essential i Professional preporučujemo rezervaciju minimalno 48 sati unapred. Za Premium Enterprise pakete (150+ osoba) potrebno je 7 radnih dana zbog koordinacije logističkog tima i opreme.',
  },
  {
    q: 'Da li možete da obezbedite veganske i posne menije?',
    a: 'Da. Naš kuhinja radi sa tri standardna tipa menija — Standardni, Veganski i Posni. Sva tri su dostupna u okviru svakog paketa, bez dodatne naknade. Specifični nutritivni zahtevi (alergije, religijske restrikcije) se rešavaju individualno.',
  },
  {
    q: 'Šta se dešava u slučaju kašnjenja dostave?',
    a: 'U 12 godina rada zabeležili smo manje od 0.5% kašnjenja. Ukoliko se dostava kasni više od 15 minuta od dogovorenog termina, klijent dobija 10% popusta na sledeću narudžbinu. Sva kašnjenja se dokumentuju u logističkom izveštaju.',
  },
  {
    q: 'Da li ste HACCP sertifikovani?',
    a: 'Da, naša kuhinja i transportni lanac su HACCP sertifikovani. Sertifikat se obnavlja godišnje, a svaki supervizor na terenu poseduje individualnu HACCP akreditaciju. Sertifikat možemo dostaviti na zahtev.',
  },
  {
    q: 'Kako se vrši naplata za korporativne klijente?',
    a: 'Radimo sa mesečnim fakturisanjem za stalne klijente (dnevni obed), ili po događaju za jednokratne narudžbine. Sve cene su u RSD bez PDV-a. Moguće je ugovoriti dugoročnu saradnju sa preferencijalnim cenama.',
  },
  {
    q: 'Možete li da pokrijete lokacije van Beograda?',
    a: 'Da. Naša baza je u Beogradu, ali pokrivamo celu Srbiju za Premium Enterprise pakete. Za pakete Essential i Professional dostava je besplatna u okrugu Beograda, dok se za udaljenije lokacije naplaćuje transport po dogovoru.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="pitanja" className="bg-canvas px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 border-b border-charcoal/10 pb-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-8 rounded-full bg-clay" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe">
              Česta Pitanja
            </span>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl">
              Odgovori na Najčešća Pitanja
            </h2>
            <p className="max-w-md text-base leading-relaxed text-taupe">
              Sve što treba da znate pre saradnje. Za specifične situacije, slobodno nas kontaktirajte.
            </p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.q}
                  className={cn(
                    'overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out',
                    isOpen
                      ? 'border-charcoal/20 bg-warm/40 shadow-sm'
                      : 'border-charcoal/10 bg-canvas hover:border-charcoal/20',
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-lg font-semibold text-charcoal">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-in-out',
                        isOpen ? 'rotate-45 bg-clay text-canvas' : 'bg-charcoal/5 text-charcoal',
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-taupe">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
