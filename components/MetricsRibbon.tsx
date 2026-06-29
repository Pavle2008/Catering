const metrics = [
  { value: '200+', label: 'Aktivnih korporativnih klijenata' },
  { value: '15.000+', label: 'Obedjenih osoba godišnje' },
  { value: '98%', label: 'Stopa zadovoljstva klijenata' },
  { value: '12 god.', label: 'Iskustva na tržištu' },
]

export default function MetricsRibbon() {
  return (
    <section className="bg-[#FAFAF9] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-[#E8E4DF] lg:grid-cols-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 bg-white px-8 py-10 text-center"
            >
              <span className="font-heading text-4xl font-bold text-[#1C1917]">
                {metric.value}
              </span>
              <span className="text-sm leading-snug text-[#78716C]">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
