import type { ReactNode } from 'react'
import { getTranslations } from 'next-intl/server'
import WeChatQR from '@/components/WeChatQR'

const rowIcons: Record<string, ReactNode> = {
  address: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
}

export default async function ContactCard() {
  const t = await getTranslations('ContactCard')
  const tFooter = await getTranslations('Footer')
  const rows = t.raw('rows') as { key: string; label: string; value: string; href?: string }[]

  return (
    <div className="bg-white py-14 sm:py-18 lg:py-20 px-5 sm:px-8 lg:px-12" id="contact">
      <div className="max-w-[1120px] mx-auto">
        <div className="bg-sage-ultra border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-[60px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 reveal">
          <div className="w-full lg:w-auto">
            <h3 className="font-serif text-[30px] sm:text-[36px] font-light text-ink mb-3 leading-[1.25]">
              {t('titleLine1')}
              <br />
              {t('titleLine2')}
            </h3>
            <p className="text-[14px] text-ink-soft font-light leading-[1.7]">
              {t('body')}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              <WeChatQR
                size={100}
                className="rounded-xl ring-1 ring-border flex-shrink-0"
                alt={tFooter('wechatQrAlt')}
              />
              <a
                href="mailto:info@herbvive.co"
                className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium px-[22px] py-3 rounded-full no-underline transition-colors duration-200 hover:bg-sage-light"
              >
                {t('emailCta')}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 min-w-0 w-full lg:w-auto lg:min-w-[280px]">
            {rows.map((row) => (
              <div key={row.key} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sage-pale flex items-center justify-center flex-shrink-0">
                  {rowIcons[row.key]}
                </div>
                <div className="text-[13px] text-ink-soft leading-[1.5] min-w-0">
                  <strong className="block text-[12px] font-medium text-ink tracking-[0.04em] uppercase">
                    {row.label}
                  </strong>
                  {row.href ? (
                    <a href={row.href} className="text-ink-soft hover:text-sage transition-colors duration-200 no-underline break-all">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
