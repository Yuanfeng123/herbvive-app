import { getTranslations } from 'next-intl/server'

export default async function HomeVideos() {
  const t = await getTranslations('HomeVideos')
  const items = t.raw('items') as { title: string; subtitle: string; src: string }[]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12 reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink leading-[1.2]">
            {t('heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 reveal">
          {items.map((item) => (
            <article
              key={item.src}
              className="bg-sage-ultra border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-[16/10] bg-black">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-[15px] font-medium text-ink mb-1">{item.title}</h3>
                <p className="text-[13px] text-ink-soft leading-[1.6]">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
