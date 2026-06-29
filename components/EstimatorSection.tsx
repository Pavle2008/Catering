'use client'

import { useState } from 'react'

const capacityTiers = [
  {
    id: 'small',
    capacity: 'Do 50',
    label: 'Kokteli i Prezentacije',
    detail: 'Finger food servis, brza rotacija, minimalan setup.',
    tags: ['Finger food', 'Bife piće', '1 supervizor'],
  },
  {
    id: 'medium',
    capacity: '50 – 150',
    label: 'Korporativni Ručakovi',
    detail: 'Linijski meni, topla jela u termosima, dostava u 11:30h.',
    tags: ['3 topla jela', 'Salata bife', 'HACCP certifikat'],
  },
  {
    id: 'large',
    capacity: '150 – 500',
    label: 'Konferencije i Slavlja',
    detail: 'Višezonska organizacija, paralelni servis, moderatorska podrška.',
    tags: ['Višezonski servis', '2 supervizora', 'Oprema uključena'],
  },
  {
    id: 'xlarge',
    capacity: '500+',
    label: 'Nacionalne Manifestacije',
    detail: 'Kompletan logistički tim, transportni hladnjaci, live kuhinja.',
    tags: ['Live kuhinja', 'Transportni hladnjaci', 'Kompletan tim'],
  },
]

export default function EstimatorSection() {
  const [activeId, setActiveId] = useState<string>('medium')

  return (
    <section id="o-nama" className="bg-[#F0EDE9] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 border-b border-[#D6CFC8] pb-8">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-6 rounded-full bg-[#1C1917]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
              Kapaciteti
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-[#1C1917] sm:text-4xl">
            Koja je Veličina vašeg Događaja?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[#78716C]">
            Kliknite na kapacitet kako bismo vam prikazali odgovarajuće rešenje
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capacityTiers.map((tier) => {
            const isActive = activeId === tier.id
            return (
              <button
                key={tier.id}
                onClick={() => setActiveId(tier.id)}
                className={`group flex flex-col gap-4 rounded-xl border-2 p-6 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-[#1C1917] bg-[#1C1917] shadow-lg'
                    : 'border-[#D6CFC8] bg-white hover:border-[#78716C] hover:shadow-md'
                }`}
                aria-pressed={isActive}
              >
                <div
                  className={`text-3xl font-bold transition-colors duration-300 ${
                    isActive ? 'text-[#FAFAF9]' : 'text-[#1C1917]'
                  }`}
                >
                  {tier.capacity}
                </div>
                <p
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-[#D6CFC8]' : 'text-[#57534E]'
                  }`}
                >
                  {tier.label}
                </p>
                <p
                  className={`text-xs leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-[#A8A29E]' : 'text-[#78716C]'
                  }`}
                >
                  {tier.detail}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {tier.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-white/10 text-[#D6CFC8]'
                          : 'bg-[#F0EDE9] text-[#78716C]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
