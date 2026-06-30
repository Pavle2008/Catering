'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useInView } from '@/hooks/useInView'

const faqs = [
  {
    q: 'Koliki je minimalni broj obroka za dnevni servis?',
    a: 'Minimalni broj obroka za redovni dnevni servis je 30 osoba. Za jednokratne događaje (konferencije, team building) ne postoji strogi minimum — kontaktirajte nas za individualnu procenu.',
  },
  {
    q: 'Kako funkcioniše dostava i logistika na licu mesta?',
    a: 'Koristimo rashladna transportna vozila sa temperaturnim nadzorom. Za svaki događaj iznad 100 osoba obezbeđujemo logističkog koordinatora na licu mesta, koji upravlja rasporedom i HACCP procedurama.',
  },
  {
    q: 'Da li nudite veganske i posne opcije?',
    a: 'Da. Veganski meni (bez ikakvih životinjskih proizvoda) i posni meni (srpski pravoslavni post — bez mesa i mlečnih proizvoda određenim danima) su standardne opcije koje možete aktivirati bez doplate. Obaveštavamo goste putem QR menija.',
  },
  {
    q: 'Kako se formira cena za korporativni ugovor?',
    a: 'Cena zavisi od volumena (broja obroka), tipa menija, lokacije dostave i učestalosti. Za redovne ugovore nudimo godišnje fiksne cene sa SLA zaštitom. Koristite naš kalkulator za orijentacionu procenu, a ponudu šaljemo u roku od 24h.',
  },
  {
    q: 'Koje sertifikate posedujete?',
    a: 'Posedujemo HACCP sertifikat, ISO 22000:2018 i sve zakonski propisane dozvole za ugostiteljsku delatnost u Republici Srbiji. Svaki supervizor na terenu je lično sertifikovan.',
  },
  {
    q: 'Da li je moguća dostava van Beograda?',
    a: 'Da, pokrivamo celu Srbiju za jednokratne događaje (uz prethodnu koordinaciju). Za dnevni servis, trenutno operišemo u Beogradu, Novom Sadu i Nišu.',
  },
  {
    q: 'Koliko unapred treba da nas kontaktirate?',
    a: 'Za jednokratne događaje do 100 osoba — idealno 5 radnih dana. Za veće kongrese (500+) — preporučujemo koordinaciju 3–6 nedelja ranije. Hitne slučajeve razmatramo individualno.',
  },
]

export default function FAQSection() {
  const [headerRef, headerInView] = useInView()
  const [accordionRef, accordionInView] = useInView({ threshold: 0.05 })

  return (
    <section id="faq" className="px-6 py-20 sm:py-28" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="mx-auto max-w-4xl">

        <div
          ref={headerRef}
          className={`mb-12 flex flex-col gap-3 ${headerInView ? 'animate-fade-in-slide-up' : 'opacity-0'}`}
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6" style={{ backgroundColor: '#D48C70' }} aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#D48C70' }}>
              Česta Pitanja
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-balance" style={{ color: '#2B2927' }}>
            Odgovori na Vaša Pitanja
          </h2>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: '#6B7066' }}>
            Ukoliko ne pronađete odgovor, naš tim je dostupan svakim radnim danom od 08:00 do 17:00h.
          </p>
        </div>

        <div
          ref={accordionRef}
          className={`${accordionInView ? 'animate-fade-in-slide-up animation-delay-150' : 'opacity-0'}`}
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-xl border px-6 data-[state=open]:shadow-sm"
                style={{ borderColor: '#DFE3DC', backgroundColor: 'white' }}
              >
                <AccordionTrigger
                  className="py-5 text-left text-sm font-semibold hover:no-underline transition-all duration-200"
                  style={{ color: '#2B2927' }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5 text-sm leading-relaxed"
                  style={{ color: '#6B7066' }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
