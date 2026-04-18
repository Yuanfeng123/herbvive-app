import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

const scienceImages = ['/quality-system-1.png', '/quality-system-2.png', '/quality-system-3.png']

export default async function Science() {
  const t = await getTranslations('Science')
  const cards = t.raw('cards') as { title: string; desc: string }[]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto reveal">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12 reveal">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(74,124,89,0.1)]"
            >
              <div className="h-[180px] sm:h-[200px] bg-mist border-b border-border overflow-hidden">
                <Image
                  src={scienceImages[i] ?? '/quality-system-1.png'}
                  alt={card.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-[15px] font-medium text-ink mb-2">{card.title}</div>
                <p className="text-[13px] text-ink-soft leading-[1.7] font-light">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
