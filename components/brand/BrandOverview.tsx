import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function BrandOverview() {
  const t = await getTranslations('BrandOverview')

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          <div className="reveal">
            <div className="bg-mist border border-border rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 flex items-center justify-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full opacity-30 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #c4deca, transparent 70%)' }} />

              <div className="relative z-10 text-center w-full">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-white">
                  <Image
                    src="/company.jpg"
                    alt={t('imageAlt')}
                    width={960}
                    height={640}
                    className="w-full h-[240px] sm:h-[300px] lg:h-[340px] object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              {t('eyebrow')}
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-6 leading-[1.2]">
              {t('heading')}
            </h2>

            <p className="text-[14px] text-ink-soft leading-[1.85] font-light mb-4">
              {t('p1')}
            </p>
            <p className="text-[14px] text-ink-soft leading-[1.85] font-light mb-4">
              {t('p2')}
            </p>
            <p className="text-[14px] text-ink-soft leading-[1.85] font-light mb-4">
              {t('p3')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <Link href="#contact"
                className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium px-[22px] py-3 rounded-full no-underline transition-colors duration-200 hover:bg-sage-light">
                {t('ctaContact')}
              </Link>
              <Link href="/quality"
                className="inline-flex items-center gap-2 bg-transparent text-sage text-[13px] font-medium px-[22px] py-3 rounded-full border-[1.5px] border-sage no-underline transition-all duration-200 hover:bg-sage hover:text-white">
                {t('ctaQuality')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
