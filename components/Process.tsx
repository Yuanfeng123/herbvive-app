import { getTranslations } from 'next-intl/server'

const stepIcons = [
  (
    <svg key="s0" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="#4a7c59" className="w-[22px] h-[22px]">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  (
    <svg key="s1" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="#4a7c59" className="w-[22px] h-[22px]">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  (
    <svg key="s2" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="#4a7c59" className="w-[22px] h-[22px]">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  (
    <svg key="s3" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="#4a7c59" className="w-[22px] h-[22px]">
      <path d="M5 12H2l10-9 10 9h-3v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8z" />
    </svg>
  ),
]

export default async function Process() {
  const t = await getTranslations('Process')
  const steps = t.raw('steps') as { num: string; title: string; desc: string }[]
  const stats = t.raw('stats') as { val: string; label: string }[]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12" id="process">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto px-1 reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-ink leading-[1.2]">
            {t('heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0.5 mt-10 sm:mt-12 lg:mt-14 reveal">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative p-6 sm:p-7 lg:p-10 lg:px-7 border border-border bg-white transition-colors duration-300 hover:bg-sage-ultra rounded-2xl lg:rounded-none
                ${i === 0 ? 'lg:rounded-tl-2xl lg:rounded-bl-2xl' : ''}
                ${i === steps.length - 1 ? 'lg:rounded-tr-2xl lg:rounded-br-2xl' : ''}
              `}
            >
              <div className="font-serif text-4xl sm:text-5xl font-light text-sage-mid leading-none mb-4 lg:mb-5">{step.num}</div>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sage-pale flex items-center justify-center mb-3 sm:mb-4">
                {stepIcons[i]}
              </div>
              <div className="text-[14px] sm:text-[15px] font-medium text-ink mb-1.5 sm:mb-2">{step.title}</div>
              <div className="text-[12px] sm:text-[13px] text-ink-soft leading-[1.6] font-light">{step.desc}</div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute right-[-14px] top-1/2 -translate-y-1/2 w-7 h-7 bg-white border border-border rounded-full items-center justify-center z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2" className="w-3 h-3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10 reveal">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-sage-ultra border border-border rounded-2xl p-5 sm:p-7">
              <div className="font-serif text-[clamp(32px,8vw,40px)] sm:text-[40px] font-light text-sage leading-none">{stat.val}</div>
              <div className="text-[12px] sm:text-[13px] text-ink-soft mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
