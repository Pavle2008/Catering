import { Card } from '@/components/ui/card'

const newsItems = [
  {
    id: 1,
    title: 'Kako Planirati Savršeni Korporativni Ručak',
    excerpt:
      'Otkrijte ključne korake za organizovanje bezglasnog i profesionalnog korporativnog ručka sa vrhunskom logistikom.',
    date: '15. Decembar 2024',
    image: '/placeholder.svg?height=240&width=360',
  },
  {
    id: 2,
    title: 'Catering Trendovi za 2025',
    excerpt:
      'Analiza najnovijih trendova u B2B catering industriji i kako se prilagoditi zahtevima modernog klijenta.',
    date: '8. Decembar 2024',
    image: '/placeholder.svg?height=240&width=360',
  },
  {
    id: 3,
    title: 'Studija Slučaja: Nacionalni Kongres sa 1,500 osoba',
    excerpt:
      'Detaljno kako smo organizovali logistiku za najveću korporativnu manifestaciju u regionu.',
    date: '1. Decembar 2024',
    image: '/placeholder.svg?height=240&width=360',
  },
]

export default function NewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <h2 className="text-balance text-3xl font-bold text-primary sm:text-4xl">
          Vesti i Izveštaji
        </h2>
        <p className="text-lg text-foreground/70">
          Saznajte više iz naših stručnih članaka i iskustvenih studija
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden border-border transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex flex-col gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-col gap-3 px-6 pb-6">
                <p className="text-xs text-foreground/50">{item.date}</p>
                <h3 className="text-lg font-semibold text-primary line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
