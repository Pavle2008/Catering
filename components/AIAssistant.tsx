'use client'

import { useState } from 'react'

type Step = 'employees' | 'mealType' | 'location' | 'result'

const employeeOptions = ['10–30', '30–60', '60–100', '100+']
const mealTypeOptions = ['Dnevni Ručak', 'Koktel / Prezentacija', 'Korporativna Proslava']
const locationOptions = ['Novi Beograd', 'Stari Beograd', 'Zemun', 'Beograd okolina']

interface SelectionState {
  employees: string
  mealType: string
  location: string
}

function getRecommendation(sel: SelectionState): string {
  const vol = sel.employees
  const type = sel.mealType
  const loc = sel.location

  const time =
    type === 'Dnevni Ručak'
      ? '11:30h'
      : type === 'Koktel / Prezentacija'
      ? '18:00h'
      : '19:00h'

  const menu =
    type === 'Dnevni Ručak'
      ? 'Linijski Meni (3 topla jela + salata bife)'
      : type === 'Koktel / Prezentacija'
      ? 'Finger Food Kanapei + Piće bife'
      : 'Svečani Set Meni (5 kurseva)'

  const supervisor =
    parseInt(vol.replace('+', '').split('–')[1] || vol) >= 60
      ? '2 namenjena HACCP supervizora'
      : '1 namenski HACCP supervizor'

  return `Predloženi sistem: ${menu}, dostava u ${time}, ${supervisor}, logistika za ${loc}.`
}

export default function AIAssistant() {
  const [step, setStep] = useState<Step>('employees')
  const [selection, setSelection] = useState<SelectionState>({
    employees: '',
    mealType: '',
    location: '',
  })

  const handleSelect = (field: keyof SelectionState, value: string) => {
    const updated = { ...selection, [field]: value }
    setSelection(updated)

    if (field === 'employees') setStep('mealType')
    else if (field === 'mealType') setStep('location')
    else if (field === 'location') setStep('result')
  }

  const reset = () => {
    setStep('employees')
    setSelection({ employees: '', mealType: '', location: '' })
  }

  const stepLabels: Record<Step, string> = {
    employees: 'Broj zaposlenih',
    mealType: 'Tip obroka',
    location: 'Lokacija',
    result: 'Preporuka sistema',
  }

  const stepOrder: Step[] = ['employees', 'mealType', 'location', 'result']
  const currentStepIndex = stepOrder.indexOf(step)

  return (
    <section id="logistika" className="bg-[#FAFAF9] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-3 border-b border-[#E8E4DF] pb-8">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-6 rounded-full bg-[#1C1917]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#78716C]">
              Interaktivni Alat
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-[#1C1917] sm:text-4xl">
            AI Asistent za Logistiku Hrane
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-[#78716C]">
            Unesite parametre vaše firme i sistem će instantno generisati optimalni logistički predlog.
          </p>
        </div>

        {/* Step progress */}
        <div className="mb-10 flex items-center gap-3" aria-label="Koraci konfiguracije">
          {stepOrder.slice(0, 3).map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  i < currentStepIndex
                    ? 'bg-[#1C1917] text-[#FAFAF9]'
                    : i === currentStepIndex
                    ? 'border-2 border-[#1C1917] bg-transparent text-[#1C1917]'
                    : 'border border-[#D6CFC8] bg-transparent text-[#A8A29E]'
                }`}
              >
                {i < currentStepIndex ? '✓' : i + 1}
              </div>
              <span
                className={`hidden text-sm sm:block transition-colors duration-300 ${
                  i <= currentStepIndex ? 'text-[#1C1917]' : 'text-[#A8A29E]'
                }`}
              >
                {stepLabels[s]}
              </span>
              {i < 2 && <div className="mx-1 h-px w-8 bg-[#E8E4DF]" aria-hidden="true" />}
            </div>
          ))}
        </div>

        {/* Step panels */}
        <div className="rounded-xl border border-[#E8E4DF] bg-white p-8 shadow-sm">
          {step === 'employees' && (
            <div className="flex flex-col gap-6 transition-all duration-300">
              <p className="text-sm font-medium text-[#1C1917]">
                Koliko zaposlenih ima vaša firma?
              </p>
              <div className="flex flex-wrap gap-3">
                {employeeOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('employees', opt)}
                    className="rounded-lg border border-[#E8E4DF] bg-[#FAFAF9] px-6 py-3 text-sm font-semibold text-[#1C1917] transition-all duration-200 hover:border-[#1C1917] hover:shadow-sm active:scale-95"
                  >
                    {opt} Zaposlenih
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'mealType' && (
            <div className="flex flex-col gap-6 transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#F0EDE9] px-3 py-1 text-xs font-medium text-[#78716C]">
                  {selection.employees} zaposlenih
                </span>
              </div>
              <p className="text-sm font-medium text-[#1C1917]">Koji tip obroka vas zanima?</p>
              <div className="flex flex-wrap gap-3">
                {mealTypeOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('mealType', opt)}
                    className="rounded-lg border border-[#E8E4DF] bg-[#FAFAF9] px-6 py-3 text-sm font-semibold text-[#1C1917] transition-all duration-200 hover:border-[#1C1917] hover:shadow-sm active:scale-95"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'location' && (
            <div className="flex flex-col gap-6 transition-all duration-300">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#F0EDE9] px-3 py-1 text-xs font-medium text-[#78716C]">
                  {selection.employees} zap.
                </span>
                <span className="rounded-full bg-[#F0EDE9] px-3 py-1 text-xs font-medium text-[#78716C]">
                  {selection.mealType}
                </span>
              </div>
              <p className="text-sm font-medium text-[#1C1917]">Gde se nalazi vaš poslovni prostor?</p>
              <div className="flex flex-wrap gap-3">
                {locationOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect('location', opt)}
                    className="rounded-lg border border-[#E8E4DF] bg-[#FAFAF9] px-6 py-3 text-sm font-semibold text-[#1C1917] transition-all duration-200 hover:border-[#1C1917] hover:shadow-sm active:scale-95"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'result' && (
            <div className="flex flex-col gap-6 transition-all duration-300">
              {/* Context chips */}
              <div className="flex flex-wrap items-center gap-2">
                {[selection.employees + ' zap.', selection.mealType, selection.location].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-[#1C1917] px-3 py-1 text-xs font-medium text-[#FAFAF9]"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>

              {/* Recommendation box */}
              <div className="rounded-lg border border-[#1C1917]/10 bg-[#F7F5F3] p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#78716C]">
                  Predlog sistema
                </p>
                <p className="text-base font-medium leading-relaxed text-[#1C1917]">
                  {getRecommendation(selection)}
                </p>
              </div>

              <button
                onClick={reset}
                className="w-fit text-sm font-medium text-[#78716C] underline underline-offset-4 transition-colors hover:text-[#1C1917]"
              >
                Ponovo konfigurišite
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
