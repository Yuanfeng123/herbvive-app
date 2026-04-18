import { getTranslations } from 'next-intl/server'
import { PROFESSIONAL_PORTAL_URL } from '@/lib/professionalPortal'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const featureIcons = [
  (
    <svg key="i0" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  (
    <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  (
    <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  (
    <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-4 h-4">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
    </svg>
  ),
]

export default async function Formula() {
  const t = await getTranslations('Formula')
  const features = t.raw('features') as { title: string; desc: string }[]
  const herbs = t.raw('herbs') as { name: string; amount: string }[]

  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12" id="formula">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              {t('eyebrow')}
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-ink mb-6 leading-[1.2]">
              {t('titleLine1')}<br />{t('titleLine2')}
            </h2>

            <div className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 bg-sage text-white rounded-full px-4 sm:px-5 py-2.5 text-[12px] sm:text-[13px] font-medium tracking-[0.02em] mb-7">
              <span>{t('fee0a')}</span>
              <span className="opacity-60">·</span>
              <span>{t('fee0b')}</span>
              <span className="opacity-60">·</span>
              <span>{t('fee0c')}</span>
            </div>

            <p className="text-[15px] text-ink-soft font-light leading-[1.7] max-w-[480px] mb-8">
              {t('body')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {features.map((feat, i) => (
                <div key={feat.title} className="formula-feat bg-white border border-border rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sage-pale flex items-center justify-center flex-shrink-0">
                    {featureIcons[i]}
                  </div>
                  <div className="text-[13px] text-ink-soft leading-[1.5] font-normal">
                    <strong className="block text-[13px] text-ink font-medium mb-0.5">{feat.title}</strong>
                    {feat.desc}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={PROFESSIONAL_PORTAL_URL}
              className="inline-flex items-center gap-2 bg-sage text-white text-[14px] font-medium px-7 py-3.5 rounded-full no-underline transition-all duration-200 hover:bg-sage-light hover:translate-x-0.5"
            >
              {t('cta')} <ArrowIcon />
            </a>
          </div>

          <div className="reveal bg-white rounded-2xl sm:rounded-[20px] border border-border overflow-hidden shadow-[0_24px_60px_rgba(74,124,89,0.10)] max-w-full min-w-0">
            <div className="bg-mist border-b border-border px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f28b82]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#fdd663]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#81c995]" />
              <span className="flex-1 min-w-0 bg-white rounded-md px-2 sm:px-3 py-[5px] text-[10px] sm:text-[11px] text-ink-soft ml-2 border border-border truncate">
                herbvive.co/formula
              </span>
            </div>

            <div className="p-4 sm:p-6">
              <p className="text-[12px] font-medium text-ink mb-4 tracking-[0.02em]">
                {t('mockTitle')}
              </p>

              {herbs.map((herb) => (
                <div key={herb.name} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-2 border border-border">
                  <span className="w-2 h-2 rounded-full bg-sage flex-shrink-0" />
                  <span className="flex-1 text-[11px] text-ink-soft">{herb.name}</span>
                  <span className="text-[11px] font-medium text-sage">{herb.amount}</span>
                </div>
              ))}

              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-2 border border-border bg-sage-ultra">
                <span className="w-2 h-2 rounded-full bg-sage-mid flex-shrink-0" />
                <span className="flex-1 text-[11px] text-sage">{t('addHerb')}</span>
                <span className="text-[11px] font-medium text-sage-mid">{t('dash')}</span>
              </div>

              <hr className="border-border my-3" />

              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] text-ink-soft">{t('shippingLabel')}</span>
                <span className="text-[11px] font-medium text-ink bg-sage-pale px-2.5 py-0.5 rounded-full">{t('shippingBadge')}</span>
              </div>
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-[11px] text-ink-soft">{t('processingLabel')}</span>
                <span className="text-[13px] font-semibold text-sage">$0.00</span>
              </div>

              <button type="button" className="w-full py-2.5 rounded-lg bg-sage text-white text-[12px] font-medium tracking-[0.03em] cursor-pointer border-none hover:bg-sage-light transition-colors duration-200">
                {t('submit')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
