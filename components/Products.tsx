import { getLocale, getTranslations } from 'next-intl/server'
import { PRODUCT_CATALOG_PDF_URL, professionalPortalHomeUrl, type SiteLang } from '@/lib/professionalPortal'

function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default async function Products() {
  const t = await getTranslations('Products')
  const lang = ((await getLocale()) === 'en' ? 'en' : 'zh') as SiteLang
  const portalUrl = professionalPortalHomeUrl(lang)
  const stats = [
    { val: t('stat1Val'), label: t('stat1Label') },
    { val: 'GMP', label: t('stat2Label') },
  ]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12" id="products">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              {t('eyebrow')}
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-ink mb-4 leading-[1.2]">
              {t('title')}
            </h2>
            <p className="text-[15px] text-ink-soft font-light leading-[1.7] max-w-[480px]">
              {t('body')}
            </p>

            <div className="mt-9 flex gap-3 flex-wrap">
              <a
                href={portalUrl}
                className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium tracking-[0.03em] px-[22px] py-3 rounded-full no-underline transition-all duration-200 hover:bg-sage-light hover:translate-x-0.5"
              >
                {t('ctaShop')} <ArrowIcon />
              </a>
              <a
                href={PRODUCT_CATALOG_PDF_URL}
                className="inline-flex items-center gap-2 bg-transparent text-sage text-[13px] font-medium tracking-[0.03em] px-[22px] py-3 rounded-full border-[1.5px] border-sage no-underline transition-all duration-200 hover:bg-sage hover:text-white"
              >
                {t('ctaCatalog')} <ArrowIcon />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-mist rounded-xl border border-border">
                  <div className="font-serif text-[22px] font-light text-sage">{stat.val}</div>
                  <div className="text-xs text-ink-soft mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal bg-mist rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border relative overflow-hidden shelf-gradient flex items-center justify-center">
            <img
              src="/pic.png"
              alt={t('imageAlt')}
              className="w-full max-w-[520px] h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
