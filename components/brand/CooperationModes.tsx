import { getTranslations } from 'next-intl/server'

export default async function CooperationModes() {
  const t = await getTranslations('CooperationModes')
  const modes = t.raw('modes') as { num: string; title: string; desc: string; tag: string }[]

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0.5 mt-10 sm:mt-12 reveal">
          {modes.map((mode, i) => (
            <div
              key={mode.num}
              className={`bg-white px-6 sm:px-8 py-7 sm:py-10 border border-border transition-colors duration-300 hover:bg-sage-pale rounded-2xl md:rounded-none
                ${i === 0 ? 'md:rounded-tl-2xl md:rounded-bl-2xl' : ''}
                ${i === modes.length - 1 ? 'md:rounded-tr-2xl md:rounded-br-2xl' : ''}
              `}
            >
              <div className="font-serif text-[40px] font-light text-sage-mid leading-none mb-4">
                {mode.num}
              </div>
              <div className="text-[16px] font-medium text-ink mb-2.5">{mode.title}</div>
              <p className="text-[13px] text-ink-soft leading-[1.7] font-light">{mode.desc}</p>
              <span className="inline-block mt-3 text-[10px] tracking-[0.08em] uppercase text-sage bg-sage-pale border border-border px-2.5 py-0.5 rounded-full">
                {mode.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
