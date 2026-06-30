'use client'

import { useInView } from '@/hooks/useInView'

const metrics = [
  { value: '200+', label: 'Aktivnih korporativnih klijenata' },
  { value: '15.000+', label: 'Obedjenih osoba godišnje' },
  { value: '98%', label: 'Stopa zadovoljstva klijenata' },
  { value: '12 god.', label: 'Iskustva na tržištu' },
]

const staff = [
  {
    name: 'Nikola Vukotić',
    role: 'Šef logistike',
    initials: 'NV',
    bio: 'Koordinira svu terensku operativu za događaje sa 50–2.000 gostiju.',
  },
  {
    name: 'Marija Petrović',
    role: 'Koordinator događaja',
    initials: 'MP',
    bio: 'Prva kontakt tačka za korporativne klijente — od ponude do izveštaja.',
  },
  {
    name: 'Milan Đorđević',
    role: 'Glavni tehnolog hrane',
    initials: 'MĐ',
    bio: 'HACCP supervizija i razvoj menija za posebne dijetetske zahteve.',
  },
  {
    name: 'Ana Stanković',
    role: 'Menadžer klijenata',
    initials: 'AS',
    bio: 'Upravljanje dugoročnim B2B ugovorima i praćenje zadovoljstva.',
  },
]

const testimonials = [
  {
    quote: 'Savršena organizacija za naš godišnji kongres od 800 učesnika. Svaki detalj bio je na mestu.',
    author: 'Petar Lukić',
    company: 'TechCorp Serbia d.o.o.',
    initials: 'TC',
  },
  {
    quote: 'Naši zaposleni su primetili razliku od prvog dana. Dnevni obedi su postali tema pohvale, ne žalbi.',
    author: 'Jelena Milošević',
    company: 'BeoFinance Group',
    initials: 'BF',
  },
  {
    quote: 'Jedina katering firma koja je ispoštovala HACCP dokumentaciju po meri naše industrije.',
    author: 'Dragan Nikolić',
    company: 'PharmaRS d.o.o.',
    initials: 'PR',
  },
]

export default function ONameSection() {
  const [metricsRef, metricsInView] = useInView({ threshold: 0.1 })
  const [staffRef, staffInView] = useInView({ threshold: 0.05 })
  const [testRef, testInView] = useInView({ threshold: 0.05 })

  return (
    <>
      {/* Metrics ribbon */}
      <section id="o-nama" className="px-6 py-16" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="mx-auto max-w-7xl">
          <div
            ref={metricsRef}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border lg:grid-cols-4"
            style={{ borderColor: '#DFE3DC' }}
          >
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                style={{ animationDelay: `${idx * 100}ms`, backgroundColor: 'white' }}
                className={`flex flex-col items-center justify-center gap-2 px-8 py-10 text-center ${
                  metricsInView ? 'animate-fade-in-slide-up' : 'opacity-0'
                }`}
              >
                <span className="font-mono text-4xl font-bold" style={{ color: '#2B2927' }}>
                  {metric.value}
                </span>
                <span className="text-sm leading-snug" style={{ color: '#6B7066' }}>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff profiles */}
      <section className="px-6 py-20 sm:py-24" style={{ backgroundColor: '#E6EBE4' }}>
        <div className="mx-auto max-w-7xl">
          <div
            ref={staffRef}
            className={`mb-12 flex flex-col gap-3 ${staffInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-6" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D48C70' }}>
                Naš Tim
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance" style={{ color: '#2B2927' }}>
              Stručnjaci Iza Svakog Obroka
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((member, idx) => (
              <div
                key={member.name}
                style={{ animationDelay: `${idx * 100}ms`, backgroundColor: 'white' }}
                className={`flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  staffInView ? 'animate-fade-in-slide-up' : 'opacity-0'
                }`}
              >
                {/* Avatar */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#2B2927' }}
                  aria-hidden="true"
                >
                  <span className="font-heading text-lg font-bold text-[#FDFBF7]">{member.initials}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-base font-semibold" style={{ color: '#2B2927' }}>{member.name}</span>
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#D48C70' }}>{member.role}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7066' }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 sm:py-24" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="mx-auto max-w-7xl">
          <div
            ref={testRef}
            className={`mb-12 flex flex-col gap-3 ${testInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-6" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D48C70' }}>
                Iskustva Klijenata
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance" style={{ color: '#2B2927' }}>
              Šta Kažu Naši Klijenti
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={t.author}
                style={{ animationDelay: `${idx * 100}ms`, backgroundColor: 'white' }}
                className={`flex flex-col gap-5 rounded-2xl border p-7 ${testInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
              >
                {/* Stars */}
                <div className="flex gap-1" aria-label="Ocena 5 od 5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-3 w-3 rounded-full" style={{ backgroundColor: '#D48C70' }} />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed italic" style={{ color: '#2B2927' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: '#DFE3DC' }}>
                  {/* Company logo placeholder */}
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#E6EBE4' }}
                    aria-hidden="true"
                  >
                    <span className="text-xs font-bold" style={{ color: '#6B7066' }}>{t.initials}</span>
                  </div>
                  <div className="flex flex-col gap-0">
                    <span className="text-sm font-semibold" style={{ color: '#2B2927' }}>{t.author}</span>
                    <span className="text-xs" style={{ color: '#6B7066' }}>{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
