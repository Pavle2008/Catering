import { Card } from '@/components/ui/card'

const capacityTiers = [
  {
    id: 'small',
    capacity: 'Do 50',
    service: 'Kokteli i Prezentacije',
    color: 'bg-accent/10 hover:bg-accent/20',
    borderColor: 'border-accent',
  },
  {
    id: 'medium',
    capacity: '50 – 150',
    service: 'Korporativni Ručakovi',
    color: 'bg-accent/5 hover:bg-accent/15',
    borderColor: 'border-border',
  },
  {
    id: 'large',
    capacity: '150 – 500',
    service: 'Konferencije i Slavlja',
    color: 'bg-accent/5 hover:bg-accent/15',
    borderColor: 'border-border',
  },
  {
    id: 'xlarge',
    capacity: '500+',
    service: 'Nacionalne Manifestacije',
    color: 'bg-accent/5 hover:bg-accent/15',
    borderColor: 'border-border',
  },
]

export default function EstimatorSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <h2 className="text-balance text-3xl font-bold text-primary sm:text-4xl">
          Koja je Veličina vašeg Dogadjaja?
        </h2>
        <p className="text-lg text-foreground/70">
          Odaberite kapacitet kako bismo vam preporučili idealno rešenje
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capacityTiers.map((tier) => (
          <Card
            key={tier.id}
            className={`cursor-pointer border-2 ${tier.borderColor} ${tier.color} transition-all duration-200 hover:shadow-lg`}
          >
            <div className="flex flex-col gap-4 p-6">
              <div className="text-3xl font-bold text-primary">{tier.capacity}</div>
              <p className="text-sm text-foreground/70">{tier.service}</p>
              <div className="flex gap-2 pt-2 text-xs text-foreground/60">
                <span className="rounded bg-background px-2 py-1">Logistika</span>
                <span className="rounded bg-background px-2 py-1">Hrana</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
