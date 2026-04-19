import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

function CheckIcon() {
  return (
    <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3.5 h-3.5">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  )
}

export default async function QualitySystem() {
  const t = await getTranslations('QualitySystem')
  const cards = t.raw('cards') as { title: string; desc: string }[]
  const badges = t.raw('badges') as { label: string; sub: string }[]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              {t('eyebrow')}
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
              {t('headingLine1')}
              {t('headingLine2') ? (
                <>
                  <br />
                  {t('headingLine2')}
                </>
              ) : null}
            </h2>
            <p className="text-[15px] text-ink-soft font-light leading-[1.75] max-w-[480px]">
              {t('sub')}
            </p>
            <div className="mt-7">
              <Link
                href="/innovation"
                className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium px-[22px] py-3 rounded-full no-underline transition-colors duration-200 hover:bg-sage-light"
              >
                {t('ctaInnovation')}
              </Link>
            </div>
          </div>

          <div className="reveal flex flex-col gap-4 sm:gap-5">
            {cards.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 sm:gap-5 p-5 sm:p-6 bg-white border border-border rounded-[14px] transition-all duration-[250ms] hover:translate-x-1.5 hover:shadow-[0_8px_28px_rgba(74,124,89,0.08)]"
              >
                <div className="w-10 h-10 rounded-[10px] bg-sage text-white flex items-center justify-center text-[14px] font-medium flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="text-[15px] font-medium text-ink mb-1.5">{item.title}</div>
                  <p className="text-[13px] text-ink-soft leading-[1.65] font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 reveal">
          <div className="bg-white border border-border rounded-[20px] p-5 sm:p-7 lg:p-9">
            <div className="text-[13px] font-medium text-ink tracking-[0.04em] uppercase mb-5">
              {t('certHeading')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {badges.map((cert) => (
                <div key={cert.label} className="flex items-center gap-3.5 p-3.5 px-4 bg-sage-ultra rounded-[10px] border border-border">
                  <CheckIcon />
                  <div>
                    <div className="text-[13px] text-ink font-normal">{cert.label}</div>
                    <div className="text-[11px] text-ink-soft mt-0.5">{cert.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
