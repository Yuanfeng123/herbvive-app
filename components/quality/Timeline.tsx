import { getTranslations } from 'next-intl/server'

export default async function Timeline() {
  const t = await getTranslations('Timeline')
  const timelineItems = t.raw('items') as { side: string; year: string; event: string; desc: string }[]

  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto mb-10 sm:mb-14 lg:mb-[72px] reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
            {t('heading')}
          </h2>
          <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
            {t('sub')}
          </p>
        </div>

        <div className="relative reveal">
          <div className="hidden md:block absolute top-7 left-1/2 -translate-x-1/2 w-px bg-border"
            style={{ height: 'calc(100% - 56px)' }} />

          {timelineItems.map((item, i) => (
            <div key={i} className="grid mb-6 sm:mb-8 md:mb-12 items-center md:grid-cols-[1fr_60px_1fr]">
              {item.side === 'left' ? (
                <>
                  <div className="md:pr-10 md:text-right order-2 md:order-1">
                    <div className="bg-mist border border-border rounded-xl p-6 px-7 transition-colors duration-300 hover:bg-sage-pale inline-block text-left w-full">
                      <div className="font-serif text-3xl font-light text-sage mb-1.5">{item.year}</div>
                      <div className="text-[15px] font-medium text-ink mb-1.5">{item.event}</div>
                      <p className="text-[13px] text-ink-soft leading-[1.6] font-light">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-center order-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-sage border-[3px] border-white shadow-[0_0_0_2px_#c4deca]" />
                  </div>
                  <div className="hidden md:block order-3" />
                </>
              ) : (
                <>
                  <div className="hidden md:block order-1" />
                  <div className="hidden md:flex justify-center order-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-sage border-[3px] border-white shadow-[0_0_0_2px_#c4deca]" />
                  </div>
                  <div className="md:pl-10 order-2 md:order-3">
                    <div className="bg-mist border border-border rounded-xl p-6 px-7 transition-colors duration-300 hover:bg-sage-pale">
                      <div className="font-serif text-3xl font-light text-sage mb-1.5">{item.year}</div>
                      <div className="text-[15px] font-medium text-ink mb-1.5">{item.event}</div>
                      <p className="text-[13px] text-ink-soft leading-[1.6] font-light">{item.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
