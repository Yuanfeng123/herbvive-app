import { getTranslations } from 'next-intl/server'

export default async function ClinicalData() {
  const t = await getTranslations('ClinicalData')
  const cards = t.raw('cards') as { num: string; sup: string; desc: string }[]

  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 text-center">
      <div className="max-w-[1120px] mx-auto">
        <div className="reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-4">
            {t('eyebrow')}
          </p>
          <div
            className="font-serif leading-none text-sage mb-2"
            style={{ fontSize: 'clamp(80px, 14vw, 140px)', fontWeight: 300 }}
          >
            {t('statNumber')}
            {t('statUnit') ? (
              <span className="text-sage-light" style={{ fontSize: 'clamp(28px,4vw,40px)' }}>
                {t('statUnit')}
              </span>
            ) : null}
          </div>
          <div className="text-[18px] text-ink-soft font-light">{t('statLabel')}</div>
          <div className="text-[13px] text-ink-soft mt-1.5">{t('statSub')}</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0.5 mt-10 sm:mt-14 reveal">
          {cards.map((stat, i) => (
            <div
              key={stat.num + stat.sup}
              className={`bg-white py-7 sm:py-9 px-5 sm:px-6 border border-border rounded-xl sm:rounded-none
                ${i === 0 ? 'sm:rounded-tl-xl sm:rounded-bl-xl' : ''}
                ${i === cards.length - 1 ? 'sm:rounded-tr-xl sm:rounded-br-xl' : ''}
              `}
            >
              <div className="font-serif text-[44px] font-light text-sage">
                {stat.num}
                {stat.sup ? (
                  <span className="text-[20px] text-sage-light">{stat.sup}</span>
                ) : null}
              </div>
              <p className="text-[13px] text-ink-soft mt-1.5 font-light leading-[1.5]">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
