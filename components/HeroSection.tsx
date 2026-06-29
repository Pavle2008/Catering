import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onOpenDrawer: () => void
}

export default function HeroSection({ onOpenDrawer }: HeroSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-balance text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Logistička Rešenja za Korporativne Dogadjaje
          </h1>
          <p className="text-balance text-lg text-foreground/80">
            Od malog sastanka do nacionalnog kongresa — naš tim skalira sa vama. Profesionalna usluga catering-a sa dokazanim iskustvom za enterprise događaje.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={onOpenDrawer}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Dogovori se sa Ekspertom
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground"
            >
              Upoznaj nas
            </Button>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="flex items-center justify-center">
          <div className="aspect-square w-full max-w-md rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 p-8 text-center">
            <div className="flex h-full items-center justify-center">
              <p className="text-4xl font-bold text-accent">
                Catering Rešenja za sve veličine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
