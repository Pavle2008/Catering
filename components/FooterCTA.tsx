import { Button } from '@/components/ui/button'

export default function FooterCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        {/* Left: Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-balance text-3xl font-bold text-primary sm:text-4xl">
            Gladni za više?
          </h2>
          <p className="text-balance text-lg text-foreground/80">
            Preuzmi naš potpuni katalog usluga, menija i referentnih primera. Saznaj što je moguće i kako možemo vam pomoći da vaš event bude nepogledan.
          </p>
          <Button
            asChild
            className="w-fit bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="/katalog.pdf" download>
              Preuzmi PDF
            </a>
          </Button>
        </div>

        {/* Right: Visual */}
        <div className="flex items-center justify-center">
          <div className="aspect-square w-full max-w-sm rounded-lg bg-gradient-to-tl from-primary/10 to-accent/10 p-8 text-center">
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col gap-4">
                <p className="text-5xl">📋</p>
                <p className="text-sm font-medium text-foreground/70">
                  Kompletan Katalog Usluga
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
