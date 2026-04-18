import { getTranslations } from 'next-intl/server'

function StepIcon({ index }: { index: number }) {
  const common = 'w-5 h-5'
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className={common}>
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className={common}>
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className={common}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className={common}>
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

const equipmentImages = ['/equipment-1.png', '/equipment-2.png', '/equipment-3.png', '/equipment-4.png']

export default async function Production() {
  const t = await getTranslations('Production')
  const processSteps = t.raw('processSteps') as { title: string; desc: string }[]
  const equipment = t.raw('equipment') as { name: string; sub: string }[]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              {t('eyebrow')}
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
              {t('headingLine1')}<br />
              {t('headingLine2')}
            </h2>
            <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
              {t('sub')}
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col">
              {processSteps.map((step, i) => (
                <div
                  key={step.title}
                  className={`flex gap-4 sm:gap-5 py-5 sm:py-6 ${i < processSteps.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="w-11 h-11 rounded-[11px] bg-sage-pale flex items-center justify-center flex-shrink-0">
                    <StepIcon index={i} />
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-ink mb-1.5">{step.title}</div>
                    <p className="text-[13px] text-ink-soft leading-[1.6] font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <p className="text-[11px] tracking-[0.1em] uppercase text-ink-soft mb-5">{t('equipmentCaption')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {equipment.map((eq, i) => (
                <div
                  key={eq.name}
                  className="rounded-2xl overflow-hidden border border-border bg-white transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="h-40 relative overflow-hidden bg-mist">
                    <img
                      src={equipmentImages[i] ?? '/equipment-1.png'}
                      alt={eq.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3.5 px-4">
                    <div className="text-[13px] font-medium text-ink">{eq.name}</div>
                    <div className="text-[11px] text-ink-soft mt-0.5">{eq.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
