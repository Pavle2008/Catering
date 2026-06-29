export default function MetricsRibbon() {
  const metrics = [
    { label: 'Klijenta', value: '200+' },
    { label: 'Obedjenih Osoba', value: '15,000+' },
    { label: 'Zadovoljstva', value: '98%' },
  ]

  return (
    <section className="border-y border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 text-center sm:border-r sm:border-border last:border-r-0"
            >
              <div className="text-4xl font-bold text-accent">{metric.value}</div>
              <p className="text-sm text-foreground/60">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
