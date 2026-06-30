'use client'

import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface InquiryDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const serviceTypes = ['Dnevni Obedi', 'Korporativna Proslava', 'Koktel / Prezentacija']
const volumeOptions = ['Do 50', '50 – 150', '150+']

const emptyForm = {
  name: '',
  company: '',
  phone: '',
  serviceType: '',
  volume: '',
}

export default function InquiryDrawer({ open, onOpenChange }: InquiryDrawerProps) {
  const [formData, setFormData] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
      setFormData(emptyForm)
    }, 2500)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] border-l border-[#E8E4DF] bg-[#FAFAF9] p-0"
      >
        {submitted ? (
          <div className="flex h-full flex-col items-center justify-center gap-5 px-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1C1917]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="#FAFAF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-[#1C1917]">Zahtev primljen</h3>
            <p className="text-sm leading-relaxed text-[#78716C]">
              Naš tim će vas kontaktirati u roku od 24 sata radnim danima.
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="border-b border-[#E8E4DF] px-8 py-7">
              <SheetHeader>
                <SheetTitle className="font-heading text-2xl font-bold text-[#1C1917]">
                  Rezerviši Termin
                </SheetTitle>
                <SheetDescription className="text-sm leading-relaxed text-[#78716C]">
                  Ostavite kontakt — javimo se u roku od 24 sata sa konkretnom ponudom.
                </SheetDescription>
              </SheetHeader>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-0 overflow-y-auto">
              <div className="flex flex-col gap-6 px-8 py-8">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                    Ime i prezime
                  </Label>
                  <Input
                    id="name"
                    placeholder="npr. Marko Marković"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-lg border-[#D6CFC8] bg-white text-[#1C1917] placeholder:text-[#A8A29E] focus-visible:ring-[#1C1917]"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                    Naziv kompanije
                  </Label>
                  <Input
                    id="company"
                    placeholder="npr. TechCorp d.o.o."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="rounded-lg border-[#D6CFC8] bg-white text-[#1C1917] placeholder:text-[#A8A29E] focus-visible:ring-[#1C1917]"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                    Kontakt telefon
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+381 60 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="rounded-lg border-[#D6CFC8] bg-white text-[#1C1917] placeholder:text-[#A8A29E] focus-visible:ring-[#1C1917]"
                  />
                </div>

                {/* Service type */}
                <div className="flex flex-col gap-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                    Tip događaja
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {serviceTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: type })}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                          formData.serviceType === type
                            ? 'bg-[#1C1917] text-[#FAFAF9]'
                            : 'border border-[#D6CFC8] bg-white text-[#57534E] hover:border-[#1C1917]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Volume */}
                <div className="flex flex-col gap-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                    Volumen (broj osoba)
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {volumeOptions.map((vol) => (
                      <button
                        key={vol}
                        type="button"
                        onClick={() => setFormData({ ...formData, volume: vol })}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                          formData.volume === vol
                            ? 'bg-[#1C1917] text-[#FAFAF9]'
                            : 'border border-[#D6CFC8] bg-white text-[#57534E] hover:border-[#1C1917]'
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="border-t border-[#E8E4DF] px-8 py-6 mt-auto">
                <Button
                  type="submit"
                  className="w-full bg-[#1C1917] text-[#FAFAF9] font-semibold hover:bg-[#2C2825] transition-all duration-300 py-6 text-base"
                >
                  Pošaljite Zahtev
                </Button>
              </div>
            </form>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
