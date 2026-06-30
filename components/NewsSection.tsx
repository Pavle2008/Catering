'use client'

import { useInView } from '@/hooks/useInView'

export const newsItems = [
  {
    id: 1,
    title: 'Kako Planirati Savršeni Korporativni Ručak',
    excerpt:
      'Ključni koraci za organizovanje bezglasnog i profesionalnog korporativnog ručka sa vrhunskom logistikom.',
    fullContent:
      'Organizovanje korporativnog ručka zahteva preciznu koordinaciju između kuhinje, logistike i poslovnog domaćina. Ključni faktori uključuju: pravovremenu dostavu hrane (uvek pre 11:45h), prilagođenu nutritivnu strukturu menija za radnu sredinu, i HACCP-certifikovane supervizore koji garantuju higijenske standarde. Na osnovu iskustva sa više od 200 klijenata, primećujemo da firme koje implementiraju redovan dnevni katering beleže 12% veće zadovoljstvo zaposlenih i manji absentizam. Naš tim izrađuje individualni logistički plan za svaki poslovni objekat.',
    date: '15. Decembar 2024.',
    image: '/placeholder.svg?height=300&width=500',
    category: 'Vodič',
  },
  {
    id: 2,
    title: 'Katering Trendovi za 2025. Godinu',
    excerpt:
      'Analiza najnovijih trendova u B2B katering industriji i kako se prilagoditi zahtevima modernog klijenta.',
    fullContent:
      'Industrija korporativnog cateringa prolazi kroz značajnu transformaciju. Dominantni trendovi za 2025. uključuju: personalizovane nutritivne planove za svakog zaposlenog, plant-based opcije kao standardnu komponentu menija (ne više poseban zahtev), i digitalnu integraciju narudžbina. Firme sve češće traže i izveštaje o ugljendioksidnom otisku svake dostave. Naš sistem već podržava sve ove zahteve, uključujući QR meni koji zaposleni skeniraju ujutro za jutarnju preferencu.',
    date: '8. Decembar 2024.',
    image: '/placeholder.svg?height=300&width=500',
    category: 'Analiza',
  },
  {
    id: 3,
    title: 'Studija Slučaja: Kongres sa 1.500 Osoba',
    excerpt:
      'Detaljno kako smo organizovali logistiku za najveću korporativnu manifestaciju u regionu.',
    fullContent:
      'U oktobru 2024. organizovali smo katering za regionalni tehnološki kongres sa 1.500 učesnika u Beogradu. Projekat je zahtevao: 4 paralelne servisne zone, 18-članski tim, 3 rashladna transportna vozila i live kuhinja stanicu. Dostava prve ture počela je u 7:30h, sa tri uzastopna talasa servisa između 12:00h i 14:30h. Svaki obrok je bio HACCP dokumentovan. Klijent je dobio digitalni logistički izveštaj unutar 24 sata od završetka događaja. Ocena zadovoljstva: 4.9/5.',
    date: '1. Decembar 2024.',
    image: '/placeholder.svg?height=300&width=500',
    category: 'Studija slučaja',
  },
]

interface NewsSectionProps {
  onSelectNews: (id: number) => void
}

export default function NewsSection({ onSelectNews }: NewsSectionProps) {
  const [headerRef, headerInView] = useInView()
  const [cardsRef, cardsInView] = useInView({ threshold: 0.05 })

  return (
    <section id="vesti" className="px-6 py-20 sm:py-28" style={{ backgroundColor: '#E6EBE4' }}>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-12 flex flex-col gap-3 pb-8 border-b ${headerInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
          style={{ borderColor: 'rgba(43,41,39,0.12)' }}
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D48C70' }}>
              Vesti i Izveštaji
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl" style={{ color: '#2B2927' }}>
            Stručni Uvidi i Studije Slučaja
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6B7066' }}>
            Saznajte više iz naših stručnih članaka i iskustvenih studija
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {newsItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => onSelectNews(item.id)}
              style={{ animationDelay: `${idx * 120}ms` }}
              className={`group flex flex-col overflow-hidden rounded-2xl border bg-white text-left transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl ${
                cardsInView ? 'animate-fade-in-slide-up' : 'opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{ backgroundColor: '#FFF5F0', color: '#D48C70' }}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs" style={{ color: '#A5A89F' }}>{item.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug line-clamp-2" style={{ color: '#2B2927' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#6B7066' }}>
                  {item.excerpt}
                </p>
                <span
                  className="mt-2 text-xs font-semibold underline underline-offset-4 transition-all duration-200 group-hover:underline-offset-2"
                  style={{ color: '#D48C70' }}
                >
                  Pročitaj više
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
