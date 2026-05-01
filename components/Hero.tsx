'use client'

import HeroCanvas from './HeroCanvas'
import { useLocale, useTranslations } from 'next-intl'
import { useLang } from '@/lib/useLang'
import { professionalRegisterUrl } from '@/lib/professionalPortal'

export default function Hero() {
  const locale = useLocale()
  const { lang } = useLang()
  const t = useTranslations('Hero')

  return (
    <section className="min-h-screen pt-[108px] flex flex-col items-center justify-center bg-sage-ultra relative overflow-hidden">
      <HeroCanvas />

      <div className="relative z-10 w-full max-w-[820px] mx-auto px-5 sm:px-8 md:px-12 flex flex-col items-center text-center animate-fadeUp">

        <span className="inline-block text-[11px] font-medium tracking-[0.12em] uppercase text-sage bg-sage-pale border border-border px-4 py-1.5 rounded-full mb-8">
          {t('badge')}
        </span>

        <h1 className="font-serif text-[clamp(32px,6.5vw,80px)] font-light leading-[1.12] text-ink tracking-[-0.015em] mb-6 text-balance">
          {locale === 'zh' ? (
            <>
              {t('titleTop')}
              <br />
              <em className="not-italic text-sage">{t('titleHighlight')}</em>
            </>
          ) : (
            <>
              <em className="not-italic text-sage">{t('titleHighlight')}</em>
              <br />
              {t('titleTop')}
            </>
          )}
        </h1>

        <p className="text-[16px] text-ink-soft font-light leading-relaxed mb-4 max-w-[520px] w-full lg:max-w-none lg:whitespace-nowrap">
          {t('subtitle')}
        </p>

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5 md:gap-x-6 mb-12 w-full max-w-[520px] lg:max-w-none text-[11px] sm:text-[12px] text-ink-soft font-light">
          <span className="whitespace-nowrap"><strong className="text-sage font-medium">300+</strong> {t('statProducts')}</span>
          <span className="hidden sm:block w-px h-3 bg-border shrink-0" aria-hidden />
          <span className="whitespace-nowrap"><strong className="text-sage font-medium">500+</strong> {t('statHerbs')}</span>
          <span className="hidden sm:block w-px h-3 bg-border shrink-0" aria-hidden />
          <span className="whitespace-nowrap"><strong className="text-sage font-medium">$0</strong> {t('statProcessing')}</span>
          <span className="hidden sm:block w-px h-3 bg-border shrink-0" aria-hidden />
          <span className="whitespace-nowrap text-center"><strong className="text-sage font-medium">{t('statNationwide')}</strong> {t('statDelivery')}</span>
        </div>

        <a
          href={professionalRegisterUrl(lang)}
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-sage px-10 py-4 text-white no-underline shadow-[0_8px_32px_rgba(74,124,89,0.32)] transition-all duration-300 hover:shadow-[0_14px_44px_rgba(74,124,89,0.48)] hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

          <span className="relative font-medium text-[15px] tracking-[0.025em]">
            {t('cta')}
          </span>

          <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-0.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </a>

        <p className="mt-5 text-[12px] text-ink-soft/55 font-light flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 max-w-[520px] w-full px-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0 text-sage">
            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          {t('trustNote')}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(244,249,246,0.7))' }} />
    </section>
  )
}
