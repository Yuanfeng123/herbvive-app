'use client'

import { useTranslations } from 'next-intl'

export default function TickerBar() {
  const t = useTranslations('TickerBar')
  const items = t.raw('items') as { name: string; tag: string }[]
  const allItems = [...items, ...items]

  return (
    <div className="fixed top-[72px] left-0 right-0 z-[190] h-9 sm:h-9 bg-ink flex items-center overflow-hidden border-b border-sage/35">
      <div className="flex-shrink-0 px-2.5 sm:px-4 h-full flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-medium tracking-[0.08em] sm:tracking-[0.1em] uppercase text-sage-light bg-sage/18 border-r border-sage/25 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-sage-light animate-blink flex-shrink-0" />
        <span className="sm:hidden">{t('stockMobile')}</span>
        <span className="hidden sm:inline">{t('stockDesktop')}</span>
      </div>

      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker ticker-track">
          {allItems.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-7 text-[10px] sm:text-[11px] font-mono text-white/40 border-r border-white/5"
            >
              <span className="text-white/78">{item.name}</span>
              <span className="text-sage-light font-medium">{t('inStock')}</span>
              <span className="text-[#6fcf97] text-[10px]">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
