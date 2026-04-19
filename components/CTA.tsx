import { getLocale, getTranslations } from 'next-intl/server'
import WeChatQR from '@/components/WeChatQR'
import { professionalPortalHomeUrl, type SiteLang } from '@/lib/professionalPortal'

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default async function CTA() {
  const t = await getTranslations('CTA')
  const tFooter = await getTranslations('Footer')
  const lang = ((await getLocale()) === 'en' ? 'en' : 'zh') as SiteLang
  const portalUrl = professionalPortalHomeUrl(lang)

  return (
    <section
      id="contact"
      className="text-center py-16 sm:py-24 lg:py-[100px] xl:py-[120px] px-5 sm:px-8 lg:px-12 border-t border-border"
      style={{ background: 'linear-gradient(160deg, #e8f2ec 0%, #f4f9f6 100%)' }}
    >
      <div className="max-w-[1120px] mx-auto reveal">
        <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
          {t('eyebrow')}
        </p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-ink mb-3 leading-[1.2]">
          {t('titleLine1')}<br />
          <em className="not-italic text-sage">{t('titleEm')}</em>
        </h2>
        <p className="text-[14px] sm:text-[15px] text-ink-soft font-light mb-8 sm:mb-12 leading-[1.7] px-1">
          {t('sub')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center flex-wrap max-w-md sm:max-w-none mx-auto">
          <a
            href={portalUrl}
            className="inline-flex items-center justify-center gap-2 bg-sage text-white text-[14px] sm:text-[15px] font-medium px-8 sm:px-9 py-3.5 sm:py-4 rounded-full no-underline transition-all duration-200 hover:bg-sage-light hover:translate-x-0.5"
          >
            {t('ctaShop')} <ArrowIcon />
          </a>
          <a
            href={portalUrl}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-sage text-[14px] sm:text-[15px] font-medium px-8 sm:px-9 py-3.5 sm:py-4 rounded-full border-[1.5px] border-sage no-underline transition-all duration-200 hover:bg-sage hover:text-white"
          >
            {t('ctaCustom')} <ArrowIcon />
          </a>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-2">
          <p className="text-[12px] sm:text-[13px] text-ink-soft font-light m-0 text-center">{t('wechatNote')}</p>
          <WeChatQR size={96} className="rounded-lg ring-1 ring-sage/25 shadow-sm" alt={tFooter('wechatQrAlt')} />
        </div>
      </div>
    </section>
  )
}
