'use client'

import { useInView } from '@/hooks/useInView'

const systems = [
  {
    id: '01',
    title: 'Dnevni Korporativni Obedi',
    description:
      'Redovni ručkovi za vaš poslovni objekat — linijski meni, temperaturno kontrolisana dostava, fleksibilni termini.',
    details: ['Dostava 10:30–12:00h', 'Min. 30 obroka', 'HACCP dokumentacija'],
  },
  {
    id: '02',
    title: 'Konferencije i Kongresi',
    description:
      'Logistika za događaje od 100 do 2.000+ učesnika — višezonski servis, live kuhinja, kompletan tim.',
    details: ['Koordinacija na licu mesta', 'Multi-zona servis', 'Izveštaj unutar 24h'],
  },
  {
    id: '03',
    title: 'Kokteli i Poslovne Prezentacije',
    description:
      'Elegantan finger food i piće servis za vaše korporativne prijeme, lansiranja proizvoda i prezentacije.',
    details: ['Personalizovani meni', 'Bela odela tim', 'Dekorativna prezentacija'],
  },
  {
    id: '04',
    title: 'Sezonski i Tematski Meniji',
    description:
      'Specijalni meniji za korporativne praznike, team building događaje i tematske prezentacije.',
    details: ['Srpska kuhinja', 'International fusion', 'Veganski i posni meni'],
  },
]

export default function DeliverySection() {
  const [headerRef, headerInView] = useInView()
  const [gridRef, gridInView] = useInView({ threshold: 0.05 })

  return (
    <section id="sistemi-isporuke" className="px-6 py-20 sm:py-28" style={{ backgroundColor: '#E6EBE4' }}>
      <div className="mx-auto max-w-7xl">

        <div
          ref={headerRef}
          className={`mb-14 flex flex-col gap-3 pb-8 border-b ${headerInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
          style={{ borderColor: 'rgba(43,41,39,0.12)' }}
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D48C70' }}>
              Sistemi Isporuke
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance" style={{ color: '#2B2927' }}>
            Katering Rešenja za Svaki Format
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6B7066' }}>
            Prilagođavamo se vašem prostoru, terminu i broju gostiju — svi sistemi isporuke su u potpunosti operativni od prvog dana.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {systems.map((system, idx) => (
            <div
              key={system.id}
              style={{
                animationDelay: `${idx * 100}ms`,
                backgroundColor: idx % 2 === 0 ? '#2B2927' : 'white',
              }}
              className={`flex flex-col gap-5 rounded-2xl p-8 ${gridInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-3xl font-bold"
                  style={{ color: idx % 2 === 0 ? 'rgba(212,140,112,0.35)' : 'rgba(43,41,39,0.15)' }}
                >
                  {system.id}
                </span>
                <div className="h-[2px] w-8" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-heading text-xl font-semibold"
                  style={{ color: idx % 2 === 0 ? '#FDFBF7' : '#2B2927' }}
                >
                  {system.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: idx % 2 === 0 ? '#A09890' : '#6B7066' }}
                >
                  {system.description}
                </p>
              </div>
              <div className="mt-auto flex flex-col gap-2 pt-2">
                {system.details.map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: '#D48C70' }} />
                    <span
                      className="text-xs font-medium"
                      style={{ color: idx % 2 === 0 ? '#6B7066' : '#A5A89F' }}
                    >
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
