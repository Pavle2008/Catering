'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface InquiryDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const serviceTypes = ['Dnevni Obedi', 'Korporativna Slavlja', 'Koktel / Prezentacija']
const capacityOptions = ['Do 50', '50 – 150', '150+']

export default function InquiryDrawer({ open, onOpenChange }: InquiryDrawerProps) {
  const [formData, setFormData] = useState({
    contactPerson: '',
    company: '',
    email: '',
    serviceType: '',
    capacity: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onOpenChange(false)
      setFormData({ contactPerson: '', company: '', email: '', serviceType: '', capacity: '' })
    }, 2000)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:w-96">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl text-primary">Zahtevaj Ponudu</SheetTitle>
          <SheetDescription>
            Popuni formu ispod i naš tim će ti se javiti u roku od 24 sata
          </SheetDescription>
        </SheetHeader>

        {submitted ? (
          <div className="flex h-96 flex-col items-center justify-center gap-4">
            <div className="text-5xl">✓</div>
            <h3 className="text-lg font-semibold text-primary">Hvala!</h3>
            <p className="text-center text-sm text-foreground/70">
              Tvoj zahtev je primljen. Uskoro ćemo te kontaktirati.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Contact Person */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="contactPerson" className="font-medium text-foreground">
                Ime osobe za kontakt
              </Label>
              <Input
                id="contactPerson"
                placeholder="npr. Marko Marković"
                value={formData.contactPerson}
                onChange={(e) =>
                  setFormData({ ...formData, contactPerson: e.target.value })
                }
                required
                className="border-border bg-background"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="company" className="font-medium text-foreground">
                Naziv Kompanije
              </Label>
              <Input
                id="company"
                placeholder="npr. TechCorp d.o.o."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                className="border-border bg-background"
              />
            </div>

            {/* Email / Phone */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="font-medium text-foreground">
                Email ili Telefon
              </Label>
              <Input
                id="email"
                placeholder="marko@techcorp.rs ili +381 60 123 4567"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-border bg-background"
              />
            </div>

            {/* Service Type Pills */}
            <div className="flex flex-col gap-3">
              <Label className="font-medium text-foreground">Tip Usluge</Label>
              <div className="flex flex-wrap gap-2">
                {serviceTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: type })}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      formData.serviceType === type
                        ? 'bg-accent text-accent-foreground'
                        : 'border border-border bg-background text-foreground hover:border-accent'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Capacity Pills */}
            <div className="flex flex-col gap-3">
              <Label className="font-medium text-foreground">Kapacitet</Label>
              <div className="flex flex-wrap gap-2">
                {capacityOptions.map((capacity) => (
                  <button
                    key={capacity}
                    type="button"
                    onClick={() => setFormData({ ...formData, capacity })}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      formData.capacity === capacity
                        ? 'bg-accent text-accent-foreground'
                        : 'border border-border bg-background text-foreground hover:border-accent'
                    }`}
                  >
                    {capacity}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Pošalji Zahtev
            </Button>
          </form>
        )}
      </SheetContent>
    </Sheet>
  )
}
