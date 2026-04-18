import { getTranslations } from 'next-intl/server'

function OutputIcon({ index }: { index: number }) {
  const c = 'w-6 h-6'
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className={c}>
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className={c}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className={c}>
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

export default async function OutputGuarantee() {
  const t = await getTranslations('OutputGuarantee')
  const outputCards = t.raw('cards') as { title: string; desc: string }[]

  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink leading-[1.2]">
            {t('heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12 reveal">
          {outputCards.map((card, i) => (
            <div
              key={card.title}
              className="bg-white border border-border rounded-2xl p-6 sm:p-8 sm:px-7 text-center transition-all duration-300 hover:bg-sage-pale hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-[14px] bg-sage-pale flex items-center justify-center mx-auto mb-[18px]">
                <OutputIcon index={i} />
              </div>
              <div className="text-[15px] font-medium text-ink mb-2">{card.title}</div>
              <p className="text-[13px] text-ink-soft leading-[1.7] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
