'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { useInView } from '@/hooks/useInView'

const menuTypes = [
  { id: 'standard', label: 'Standardni Meni', pricePerPerson: 12, description: 'Linijski meni, 3 topla jela, salata bife' },
  { id: 'premium', label: 'Premium Meni', pricePerPerson: 20, description: 'Višezonski servis, 5 jela, piće uključeno' },
  { id: 'bespoke', label: 'Individualni Meni', pricePerPerson: 32, description: 'Live kuhinja, personalizovani meni, kompletan tim' },
]

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

  const [sectionRef, sectionInView] = useInView()
  const [cardsRef, cardsInView] = useInView({ threshold: 0.05 })

  const totalMin = Math.round(guests * selectedMenu.pricePerPerson * 0.9)
  const totalMax = Math.round(guests * selectedMenu.pricePerPerson * 1.15)

  return (
    <section id="cenovnik" className="bg-[#F0EDE9] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div
          ref={sectionRef}
          className={`mb-14 flex flex-col gap-3 border-b border-[#D6CFC8] pb-8 ${
            sectionInView ? 'animate-fade-in-slide-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[#1C1917]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
              Interaktivni Kalkulator
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-[#1C1917] sm:text-4xl text-balance">
            Koliko Osoba Trebate da Ugostite?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[#78716C]">
            Podesite broj gostiju i tip menija — cena i logistika se računaju u realnom vremenu.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${
            cardsInView ? 'animate-fade-in-slide-up animation-delay-150' : 'opacity-0'
          }`}
        >
          {/* Left — controls */}
          <div className="flex flex-col gap-8 rounded-2xl border border-[#D6CFC8] bg-white p-8">

            {/* Guest slider */}
            <div className="flex flex-col gap-5">
              <div className="flex items-end justify-between">
                <label className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
                  Broj Gostiju
                </label>
                <span className="font-heading text-4xl font-bold text-[#1C1917]">
                  {guests}
                </span>
              </div>
              <Slider
                min={10}
                max={1000}
                step={5}
                value={[guests]}
                onValueChange={([v]) => setGuests(v)}
                className="[&_[role=slider]]:bg-[#1C1917] [&_[role=slider]]:border-[#1C1917] [&_[role=slider]]:shadow-none [&>.relative>.absolute]:bg-[#1C1917]"
              />
              <div className="flex justify-between text-xs text-[#A8A29E]">
                <span>10</span>
                <span>500</span>
                <span>1000+</span>
              </div>
            </div>

            {/* Menu type selector */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
                Tip Menija
              </span>
              <div className="flex flex-col gap-2">
                {menuTypes.map((menu) => (
                  <button
                    key={menu.id}
                    onClick={() => setSelectedMenu(menu)}
                    className={`flex items-start justify-between rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 ${
                      selectedMenu.id === menu.id
                        ? 'border-[#1C1917] bg-[#1C1917]'
                        : 'border-[#E8E4DF] bg-[#FAFAF9] hover:border-[#78716C]'
                    }`}
                    aria-pressed={selectedMenu.id === menu.id}
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className={`text-sm font-semibold transition-colors duration-200 ${selectedMenu.id === menu.id ? 'text-[#FAFAF9]' : 'text-[#1C1917]'}`}>
                        {menu.label}
                      </span>
                      <span className={`text-xs transition-colors duration-200 ${selectedMenu.id === menu.id ? 'text-[#A8A29E]' : 'text-[#78716C]'}`}>
                        {menu.description}
                      </span>
                    </div>
                    <span className={`ml-4 shrink-0 text-sm font-bold transition-colors duration-200 ${selectedMenu.id === menu.id ? 'text-[#D6CFC8]' : 'text-[#57534E]'}`}>
                      od {menu.pricePerPerson}€/os.
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — live result */}
          <div className="flex flex-col gap-5">

            {/* Price card */}
            <div className="flex flex-col gap-3 rounded-2xl bg-[#1C1917] p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
                Procenjena Cena
              </span>
              <div className="flex items-end gap-3">
                <span className="font-heading text-5xl font-bold text-[#FAFAF9]">
                  {totalMin.toLocaleString('sr-RS')}€
                </span>
                <span className="mb-1 text-xl text-[#78716C]">– {totalMax.toLocaleString('sr-RS')}€</span>
              </div>
              <p className="text-sm text-[#78716C] leading-relaxed">
                Konačna cena zavisi od lokacije, posebnih zahteva i datuma. Opseg je orijentacioni.
              </p>
              <div className="mt-2 h-px w-full bg-white/10" />
              <div className="flex items-center gap-2 pt-1">
                <div className="h-1.5 w-1.5 rounded-full bg-[#78716C]" />
                <span className="text-sm text-[#D6CFC8]">
                  {selectedMenu.pricePerPerson}€ po osobi · {guests} gostiju
                </span>
              </div>
            </div>

            {/* Logistics details */}
            <div className="flex flex-col gap-3 rounded-2xl border border-[#D6CFC8] bg-white p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
                Logistika
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { icon: '▸', label: 'Tim', value: getTeamSize(guests) },
                  { icon: '▸', label: 'Dostava', value: getDeliveryNote(guests) },
                  { icon: '▸', label: 'HACCP', value: 'Sertifikovani supervizori na svakom događaju' },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <span className="mt-0.5 text-xs text-[#78716C]" aria-hidden="true">{row.icon}</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A8A29E]">{row.label}</span>
                      <span className="text-sm text-[#1C1917]">{row.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA note */}
            <p className="text-xs text-[#A8A29E] leading-relaxed text-center">
              Tačna ponuda se šalje u roku od 24h nakon Vaše prijave.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
