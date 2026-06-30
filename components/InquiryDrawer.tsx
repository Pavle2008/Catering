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

const serviceTypes = ['Dnevni Obedi', 'Korporativna Proslava', 'Koktel / Prezentacija', 'Kongres / Konferencija']
const volumeOptions = ['Do 50', '50 – 150', '150 – 500', '500+']

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
        className="w-full sm:w-[440px] p-0"
        style={{ borderLeft: '1px solid #DFE3DC', backgroundColor: '#FDFBF7' }}
      >
        {submitted ? (
          <div className="flex h-full flex-col items-center justify-center gap-5 px-10 text-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: '#D48C70' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold" style={{ color: '#2B2927' }}>Zahtev primljen</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7066' }}>
              Naš tim će vas kontaktirati u roku od 24 sata radnim danima.
            </p>
          </div>
        ) : (
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="border-b px-8 py-7" style={{ borderColor: '#DFE3DC' }}>
              <SheetHeader>
                <SheetTitle className="font-heading text-2xl font-bold" style={{ color: '#2B2927' }}>
                  Rezervišite Termin
                </SheetTitle>
                <SheetDescription className="text-sm leading-relaxed" style={{ color: '#6B7066' }}>
                  Ostavite kontakt — javimo se u roku od 24 sata sa konkretnom ponudom.
                </SheetDescription>
              </SheetHeader>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-y-auto">
              <div className="flex flex-col gap-6 px-8 py-8">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6B7066' }}>
                    Ime i prezime
                  </Label>
                  <Input
                    id="name"
                    placeholder="npr. Marko Marković"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-lg bg-white placeholder:text-[#A5A89F]"
                    style={{ borderColor: '#DFE3DC', color: '#2B2927' }}
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6B7066' }}>
                    Naziv kompanije
                  </Label>
                  <Input
                    id="company"
                    placeholder="npr. TechCorp d.o.o."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className="rounded-lg bg-white placeholder:text-[#A5A89F]"
                    style={{ borderColor: '#DFE3DC', color: '#2B2927' }}
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6B7066' }}>
                    Kontakt telefon
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+381 60 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="rounded-lg bg-white placeholder:text-[#A5A89F]"
                    style={{ borderColor: '#DFE3DC', color: '#2B2927' }}
                  />
                </div>

                {/* Service type */}
                <div className="flex flex-col gap-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6B7066' }}>
                    Tip događaja
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {serviceTypes.map((type) => {
                      const active = formData.serviceType === type
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: type })}
                          className="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ease-in-out hover:scale-[1.03]"
                          style={{
                            backgroundColor: active ? '#D48C70' : 'white',
                            color: active ? 'white' : '#2B2927',
                            border: active ? '1px solid #D48C70' : '1px solid #DFE3DC',
                          }}
                        >
                          {type}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Volume */}
                <div className="flex flex-col gap-3">
                  <Label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#6B7066' }}>
                    Volumen (broj osoba)
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {volumeOptions.map((vol) => {
                      const active = formData.volume === vol
                      return (
                        <button
                          key={vol}
                          type="button"
                          onClick={() => setFormData({ ...formData, volume: vol })}
                          className="rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ease-in-out hover:scale-[1.03]"
                          style={{
                            backgroundColor: active ? '#D48C70' : 'white',
                            color: active ? 'white' : '#2B2927',
                            border: active ? '1px solid #D48C70' : '1px solid #DFE3DC',
                          }}
                        >
                          {vol}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="border-t px-8 py-6 mt-auto" style={{ borderColor: '#DFE3DC' }}>
                <Button
                  type="submit"
                  className="w-full py-6 text-base font-semibold transition-all duration-300 ease-in-out hover:brightness-110"
                  style={{ backgroundColor: '#D48C70', color: 'white' }}
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
