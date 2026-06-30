'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { useInView } from '@/hooks/useInView'

const menuTypes = [
  { id: 'standard', label: 'Standardni Meni', pricePerPerson: 12, description: 'Linijski meni, 3 topla jela, salata bife' },
  { id: 'premium', label: 'Premium Meni', pricePerPerson: 20, description: 'Višezonski servis, 5 jela, piće uključeno' },
  { id: 'bespoke', label: 'Individualni Meni', pricePerPerson: 32, description: 'Live kuhinja, personalizovani meni, kompletan tim' },
]

const dietaryFilters = [
  { id: 'vegan', label: 'Veganski Meni', description: 'Bez životinjskih proizvoda' },
  { id: 'posni', label: 'Posni Meni', description: 'Srpski pravoslavni post' },
]

function getTierSuggestion(guests: number): string | null {
  if (guests >= 500) return 'Preporučujemo: Premium Paket usled obima logistike'
  if (guests >= 150) return 'Preporučujemo: Individualni Meni za optimalan utisak'
  if (guests >= 50) return 'Idealno za: Premium Meni servis'
  return null
}

function getTeamSize(guests: number): string {
  if (guests <= 50) return '1 supervizor + 2 konobara'
  if (guests <= 150) return '2 supervizora + 4 konobara'
  if (guests <= 300) return '3 supervizora + 8 konobara'
  return '5+ supervizora + kompletan tim'
}

function getDeliveryNote(guests: number): string {
  if (guests <= 50) return 'Dostava u jednoj turi — 45 min setup'
  if (guests <= 150) return 'Dostava u 2 ture — 60 min setup'
  if (guests <= 300) return 'Višezonska dostava — 90 min setup'
  return 'Logistički tim na licu mesta — 3h setup'
}

export default function EstimatorSection() {
  const [guests, setGuests] = useState(80)
  const [selectedMenu, setSelectedMenu] = useState(menuTypes[0])
  const [activeDietary, setActiveDietary] = useState<string[]>([])

  const [sectionRef, sectionInView] = useInView()
  const [cardsRef, cardsInView] = useInView({ threshold: 0.05 })

  const tierSuggestion = getTierSuggestion(guests)
  const totalMin = Math.round(guests * selectedMenu.pricePerPerson * 0.9)
  const totalMax = Math.round(guests * selectedMenu.pricePerPerson * 1.15)

  const toggleDietary = (id: string) => {
    setActiveDietary((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    )
  }

  return (
    <section id="cenovnik" className="px-6 py-20 sm:py-28" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div
          ref={sectionRef}
          className={`mb-14 flex flex-col gap-3 pb-8 border-b ${sectionInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
          style={{ borderColor: '#DFE3DC' }}
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D48C70' }}>
              Interaktivni Kalkulator
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance" style={{ color: '#2B2927' }}>
            Koliko Osoba Trebate da Ugostite?
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6B7066' }}>
            Podesite broj gostiju i tip menija — cena i logistika se računaju u realnom vremenu.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${cardsInView ? 'animate-fade-in-slide-up animation-delay-150' : 'opacity-0'}`}
        >
          {/* Left — controls */}
          <div className="flex flex-col gap-8 rounded-2xl border p-8 bg-white" style={{ borderColor: '#DFE3DC' }}>

            {/* Guest slider */}
            <div className="flex flex-col gap-5">
              <div className="flex items-end justify-between">
                <label className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6B7066' }}>
                  Broj Gostiju
                </label>
                <span className="font-mono text-4xl font-bold" style={{ color: '#2B2927' }}>
                  {guests}
                </span>
              </div>
              <Slider
                min={10}
                max={1000}
                step={5}
                value={[guests]}
                onValueChange={(v) => {
                  const val = Array.isArray(v) ? v[0] : v
                  if (typeof val === 'number') setGuests(val)
                }}
                className="[&_[role=slider]]:border-[#D48C70] [&_[role=slider]]:bg-[#D48C70] [&_[role=slider]]:shadow-none [&>.relative>.absolute]:bg-[#D48C70]"
              />
              <div className="flex justify-between text-xs" style={{ color: '#A5A89F' }}>
                <span>10</span>
                <span>500</span>
                <span>1000+</span>
              </div>
            </div>

            {/* Smart tier suggestion */}
            {tierSuggestion && (
              <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: '#FFF5F0', border: '1px solid #F5C4AE' }}>
                <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: '#D48C70' }} />
                <p className="text-sm font-medium" style={{ color: '#D48C70' }}>{tierSuggestion}</p>
              </div>
            )}

            {/* Menu type selector */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6B7066' }}>
                Tip Menija
              </span>
              <div className="flex flex-col gap-2">
                {menuTypes.map((menu) => {
                  const active = selectedMenu.id === menu.id
                  return (
                    <button
                      key={menu.id}
                      onClick={() => setSelectedMenu(menu)}
                      className="flex items-start justify-between rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 ease-in-out hover:scale-[1.01]"
                      style={{
                        borderColor: active ? '#D48C70' : '#DFE3DC',
                        backgroundColor: active ? '#D48C70' : '#FDFBF7',
                      }}
                      aria-pressed={active}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold transition-colors duration-200" style={{ color: active ? '#FFFFFF' : '#2B2927' }}>
                          {menu.label}
                        </span>
                        <span className="text-xs transition-colors duration-200" style={{ color: active ? 'rgba(255,255,255,0.75)' : '#6B7066' }}>
                          {menu.description}
                        </span>
                      </div>
                      <span className="ml-4 shrink-0 font-mono text-sm font-bold transition-colors duration-200" style={{ color: active ? 'rgba(255,255,255,0.9)' : '#2B2927' }}>
                        od {menu.pricePerPerson}€/os.
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Dietary filters */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6B7066' }}>
                Dijetetski Filteri
              </span>
              <div className="flex flex-wrap gap-2">
                {dietaryFilters.map((f) => {
                  const active = activeDietary.includes(f.id)
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleDietary(f.id)}
                      className="flex flex-col rounded-xl border-2 px-4 py-2.5 text-left transition-all duration-200 ease-in-out hover:scale-[1.02]"
                      style={{
                        borderColor: active ? '#D48C70' : '#DFE3DC',
                        backgroundColor: active ? '#FFF5F0' : 'white',
                      }}
                      aria-pressed={active}
                    >
                      <span className="text-xs font-semibold" style={{ color: active ? '#D48C70' : '#2B2927' }}>{f.label}</span>
                      <span className="text-[11px]" style={{ color: '#A5A89F' }}>{f.description}</span>
                    </button>
                  )
                })}
              </div>
              {activeDietary.length > 0 && (
                <p className="text-xs" style={{ color: '#6B7066' }}>
                  Aktivan filter: {activeDietary.map(id => dietaryFilters.find(f => f.id === id)?.label).join(', ')} · Meni varijacije su dostupne na zahtev.
                </p>
              )}
            </div>
          </div>

          {/* Right — live result + direct contact */}
          <div className="flex flex-col gap-5">

            {/* Price card */}
            <div className="flex flex-col gap-3 rounded-2xl p-8" style={{ backgroundColor: '#2B2927' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6B7066' }}>
                Procenjena Cena
              </span>
              <div className="flex items-end gap-3">
                <span className="font-mono text-5xl font-bold" style={{ color: '#FDFBF7' }}>
                  {totalMin.toLocaleString('sr-RS')}€
                </span>
                <span className="mb-1 font-mono text-xl" style={{ color: '#6B7066' }}>
                  – {totalMax.toLocaleString('sr-RS')}€
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7066' }}>
                Opseg je orijentacioni. Konačna cena zavisi od lokacije i datuma.
              </p>
              <div className="mt-2 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
              <div className="flex items-center gap-2 pt-1">
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#D48C70' }} />
                <span className="font-mono text-sm" style={{ color: '#A09890' }}>
                  {selectedMenu.pricePerPerson}€ po osobi · {guests} gostiju
                </span>
              </div>
            </div>

            {/* Logistics */}
            <div className="flex flex-col gap-3 rounded-2xl border p-6 bg-white" style={{ borderColor: '#DFE3DC' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#6B7066' }}>
                Logistika
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Tim', value: getTeamSize(guests) },
                  { label: 'Dostava', value: getDeliveryNote(guests) },
                  { label: 'HACCP', value: 'Sertifikovani supervizori na svakom događaju' },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: '#D48C70' }} />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#A5A89F' }}>{row.label}</span>
                      <span className="text-sm" style={{ color: '#2B2927' }}>{row.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact block */}
            <div className="flex flex-col gap-4 rounded-2xl border-2 p-6" style={{ borderColor: '#D48C70', backgroundColor: '#FFF5F0' }}>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D48C70' }}>
                Direktan Kontakt
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Telefon', value: '+381 11 000 0000' },
                  { label: 'Instagram', value: '@vukotic.sistemi' },
                  { label: 'Email', value: 'kontakt@vukoticsistemi.rs' },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="w-16 text-xs font-semibold uppercase tracking-wider" style={{ color: '#A5A89F' }}>{c.label}</span>
                    <span className="text-sm font-medium" style={{ color: '#2B2927' }}>{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
