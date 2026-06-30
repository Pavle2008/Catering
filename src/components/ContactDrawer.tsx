'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ContactDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const serviceTypes = ['Dnevni Obedi', 'Korporativna Proslava', 'Koktel / Prezentacija', 'Kongres / Konferencija']
const volumeOptions = ['20 – 50', '50 – 150', '150 – 500+']

const emptyForm = {
  name: '',
  company: '',
  phone: '',
  serviceType: '',
  volume: '',
}

export default function ContactDrawer({ open, onOpenChange }: ContactDrawerProps) {
  const [formData, setFormData] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false)
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onOpenChange])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
      setFormData(emptyForm)
    }, 2600)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[460px] flex-col bg-canvas shadow-2xl"
            role="dialog"
            aria-label="Rezervacija termina"
          >
            {/* Close button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-canvas active:scale-90"
              aria-label="Zatvori"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center gap-6 px-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 0.1 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-clay"
                >
                  <Check className="h-8 w-8 text-canvas" strokeWidth={2.5} />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-2xl font-bold text-charcoal">Zahtev primljen</h3>
                  <p className="text-sm leading-relaxed text-taupe">
                    Naš tim će vas kontaktirati u roku od 24 sata radnim danima.
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="border-b border-charcoal/10 px-8 pt-16 pb-7">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-clay">
                    B2B Upit
                  </span>
                  <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-charcoal">
                    Rezervišite Termin
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-taupe">
                    Popunite formu i naš koordinator će vas kontaktirati sa predlogom logističkog rešenja.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-y-auto">
                  <div className="flex flex-col gap-6 px-8 py-7">
                    <Field label="Ime i prezime" id="name">
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="npr. Nikola Petrović"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Kompanija" id="company">
                      <input
                        id="company"
                        type="text"
                        required
                        placeholder="npr. TechCorp d.o.o."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Kontakt telefon" id="phone">
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+381 60 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                      />
                    </Field>

                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-taupe">
                        Tip događaja
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {serviceTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, serviceType: type })}
                            className={cn(
                              'rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ease-in-out active:scale-95',
                              formData.serviceType === type
                                ? 'bg-charcoal text-canvas shadow-md'
                                : 'border border-charcoal/20 bg-canvas text-charcoal/70 hover:border-charcoal hover:text-charcoal',
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-taupe">
                        Volumen (broj osoba)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {volumeOptions.map((vol) => (
                          <button
                            key={vol}
                            type="button"
                            onClick={() => setFormData({ ...formData, volume: vol })}
                            className={cn(
                              'rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ease-in-out active:scale-95',
                              formData.volume === vol
                                ? 'bg-clay text-canvas shadow-md'
                                : 'border border-charcoal/20 bg-canvas text-charcoal/70 hover:border-clay hover:text-clay-dark',
                            )}
                          >
                            {vol}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="mt-auto border-t border-charcoal/10 px-8 py-6">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-4 text-sm font-semibold text-canvas shadow-[0_10px_24px_-10px_rgba(212,140,112,0.7)] transition-all duration-300 ease-in-out hover:bg-clay-dark active:scale-[0.98]"
                    >
                      Pošaljite Zahtev
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <p className="mt-3 text-center text-[11px] text-taupe">
                      Odgovor u roku od 24h · Bez obaveze
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

const inputClass =
  'w-full rounded-xl border border-charcoal/15 bg-canvas px-4 py-3 text-sm text-charcoal placeholder:text-taupe/60 outline-none transition-all duration-300 focus:border-clay focus:ring-2 focus:ring-clay/30'

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-taupe">
        {label}
      </label>
      {children}
    </div>
  )
}
