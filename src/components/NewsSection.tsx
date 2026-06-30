'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Calendar } from 'lucide-react'

export const newsItems = [
  {
    id: 1,
    title: 'Kako Planirati Savršeni Korporativni Ručak',
    excerpt:
      'Otkrijte ključne korake za organizovanje besprekornog i profesionalnog korporativnog ručka sa vrhunskom logistikom.',
    fullContent:
      'Organizovanje korporativnog ručka zahteva preciznu koordinaciju između kuhinje, logistike i poslovnog domaćina. Ključni faktori uključuju: pravovremenu dostavu hrane (uvek pre 11:45h), prilagođenu nutritivnu strukturu menija za radnu sredinu, i HACCP-certifikovane supervizore koji garantuju higijenske standarde. Na osnovu iskustva sa više od 200 klijenata, primećujemo da firme koje implementiraju redovan dnevni ketering beleže 12% veće zadovoljstvo zaposlenih i manji absentizam. Naš tim izrađuje individualni logistički plan za svaki poslovni objekat, sa posebnim naglaskom na vremenske prozore i temperaturne standarde.',
    date: '15. Decembar 2024.',
    image: 'https://images.pexels.com/photos/3179558/pexels-photo-3179558.jpeg?auto=compress&cs=tinysrgb&w=900',
    category: 'Vodič',
  },
  {
    id: 2,
    title: 'Ketering Trendovi za 2025. Godinu',
    excerpt:
      'Analiza najnovijih trendova u B2B ketering industriji i kako se prilagoditi zahtevima modernog klijenta.',
    fullContent:
      'Industrija korporativnog keteringa prolazi kroz značajnu transformaciju. Dominantni trendovi za 2025. uključuju: personalizovane nutritivne planove za svakog zaposlenog, plant-based opcije kao standardnu komponentu menija (ne više poseban zahtev), i digitalnu integraciju narudžbina. Firme sve češće traže i izveštaje o ugljendioksidnom otisku svake dostave. Naš sistem već podržava sve ove zahteve, uključujući QR meni koji zaposleni skeniraju ujutro za jutarnju preferencu. Očekujemo da će do kraja 2025. godine 40% korporativnih klijenata tražiti bar jednu vegansku opciju kao standard, a ne kao dodatak.',
    date: '8. Decembar 2024.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=900',
    category: 'Analiza',
  },
  {
    id: 3,
    title: 'Studija Slučaja: Kongres sa 1.500 Osoba',
    excerpt:
      'Detaljno kako smo organizovali logistiku za najveću korporativnu manifestaciju u regionu.',
    fullContent:
      'U oktobru 2024. organizovali smo ketering za regionalni tehnološki kongres sa 1.500 učesnika u Beogradu. Projekat je zahtevao: 4 paralelne servisne zone, 18-članski tim, 3 rashladna transportna vozila i live kuhinja stanicu. Dostava prve ture počela je u 7:30h, sa tri uzastopna talasa servisa između 12:00h i 14:30h. Svaki obrok je bio HACCP dokumentovan. Klijent je dobio digitalni logistički izveštaj unutar 24 sata od završetka događaja, sa temperaturnim logovima, vremenima servisa i ocenom zadovoljstva: 4.9/5.',
    date: '1. Decembar 2024.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=900',
    category: 'Studija Slučaja',
  },
]

interface NewsSectionProps {
  selectedNewsId: number | null
  onSelectNews: (id: number | null) => void
}

export default function NewsSection({ selectedNewsId, onSelectNews }: NewsSectionProps) {
  const selectedItem = newsItems.find((n) => n.id === selectedNewsId) ?? null

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedNewsId !== null) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [selectedNewsId])

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onSelectNews(null)
    }
    if (selectedNewsId !== null) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedNewsId, onSelectNews])

  return (
    <section id="vesti" className="bg-canvas px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 border-b border-charcoal/10 pb-10">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-8 rounded-full bg-clay" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-taupe">
              Vesti i Izveštaji
            </span>
          </div>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl">
              Stručni Uvidi i Studije Slučaja
            </h2>
            <p className="max-w-md text-base leading-relaxed text-taupe">
              Saznajte više iz naših članaka i iskustvenih studija o korporativnoj logistici hrane.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              onClick={() => onSelectNews(item.id)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-canvas text-left transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-clay/40 hover:shadow-[0_24px_48px_-20px_rgba(43,41,39,0.25)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs text-taupe">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="font-heading text-xl font-bold leading-snug text-charcoal">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-taupe">{item.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-clay">
                  Pročitajte više
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => onSelectNews(null)}
              className="fixed inset-0 z-[80] bg-charcoal/50 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: 'spring', damping: 26, stiffness: 280 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-charcoal/10 bg-canvas shadow-2xl"
                role="dialog"
                aria-label={selectedItem.title}
              >
                <button
                  onClick={() => onSelectNews(null)}
                  className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-canvas/20 bg-canvas/80 text-charcoal backdrop-blur-md transition-all duration-300 hover:bg-charcoal hover:text-canvas active:scale-90"
                  aria-label="Zatvori"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="max-h-[90vh] overflow-y-auto">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                    <div className="absolute bottom-5 left-6 flex items-center gap-3">
                      <span className="rounded-full bg-clay px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-canvas">
                        {selectedItem.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-canvas/90">
                        <Calendar className="h-3.5 w-3.5" />
                        {selectedItem.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 p-8">
                    <h3 className="text-balance font-heading text-3xl font-bold leading-tight text-charcoal">
                      {selectedItem.title}
                    </h3>
                    <p className="text-base leading-relaxed text-charcoal/85">
                      {selectedItem.fullContent}
                    </p>
                    <div className="mt-2 flex items-center gap-3 border-t border-charcoal/10 pt-5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal font-heading text-xs font-bold text-canvas">
                        VKS
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-charcoal">
                          Vukotić Kulinarski Sistemi
                        </span>
                        <span className="text-xs text-taupe">Editorijalni tim</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
