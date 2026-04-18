'use client'

import { useState, type FormEvent } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import WeChatQR from '@/components/WeChatQR'
import Link from 'next/link'

type FaqItem = { q: string; a: string }

function InfoCards() {
  const t = useTranslations('Contact')
  const cards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('addressLabel'),
      content: <span className="whitespace-pre-line">{t('addressVal')}</span>,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t('emailLabel'),
      content: (
        <a href="mailto:info@herbvive.co" className="text-sage hover:underline">
          info@herbvive.co
        </a>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: t('phoneLabel'),
      content: (
        <a href="tel:6577810476" className="text-sage hover:underline">
          657-781-0476
        </a>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      ),
      label: t('hoursLabel'),
      content: <span>{t('hoursVal')}</span>,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {cards.map((card) => (
        <div key={card.label} className="bg-white border border-border rounded-2xl p-5 flex gap-4 items-start
          transition-all duration-200 hover:shadow-[0_4px_20px_rgba(74,124,89,0.08)] hover:-translate-y-0.5">
          <div className="w-10 h-10 rounded-xl bg-sage-pale flex items-center justify-center flex-shrink-0 mt-0.5">
            {card.icon}
          </div>
          <div>
            <div className="text-[11px] font-medium text-ink-soft tracking-[0.06em] uppercase mb-1">
              {card.label}
            </div>
            <div className="text-[14px] text-ink leading-[1.6]">{card.content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactForm() {
  const t = useTranslations('Contact')
  const locale = useLocale()
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const types = t.raw('ftypes') as string[]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSending(true)
    const form = e.currentTarget
    const fd = new FormData(form)
    const inquiry = fd.get('inquiry_type')
    const body = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      phone: String(fd.get('phone') ?? '').trim(),
      clinic: String(fd.get('clinic') ?? '').trim(),
      inquiry_type: typeof inquiry === 'string' ? inquiry : '',
      message: String(fd.get('message') ?? '').trim(),
      locale: locale === 'en' ? 'en' : 'zh',
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('send_failed')
      setSent(true)
    } catch {
      setError(t('errorSend'))
    } finally {
      setSending(false)
    }
  }

  const inputCls = "w-full border border-border rounded-xl px-4 py-3 text-[14px] text-ink bg-white placeholder:text-ink-soft/50 outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all duration-200"
  const labelCls = "block text-[12px] font-medium text-ink-soft tracking-[0.04em] uppercase mb-1.5"

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-sage-pale flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2" className="w-8 h-8">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div className="font-serif text-[28px] font-light text-ink mb-2">
          {t('successTitle')}
        </div>
        <p className="text-[14px] text-ink-soft font-light">{t('successSub')}</p>
        <button onClick={() => setSent(false)}
          className="mt-6 text-[13px] text-sage hover:underline">
          {t('sendAnother')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>{t('fname')}</label>
          <input name="name" required type="text" placeholder={t('fnamePh')} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{t('femail')}</label>
          <input name="email" required type="email" placeholder={t('femailPh')} className={inputCls} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>{t('fphone')}</label>
          <input name="phone" type="tel" placeholder={t('fphonePh')} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{t('fclinic')}</label>
          <input name="clinic" type="text" placeholder={t('fclinicPh')} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>{t('ftype')}</label>
        <div className="flex flex-wrap gap-2">
          {types.map((type, i) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="inquiry_type" value={type} required
                defaultChecked={i === 0}
                className="accent-sage w-4 h-4" />
              <span className="text-[13px] text-ink-soft">{type}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>{t('fmsg')}</label>
        <textarea name="message" required rows={5} placeholder={t('fmsgPh')}
          className={`${inputCls} resize-none`} />
      </div>
      {error ? (
        <p className="text-[13px] text-red-600/90 font-light" role="alert">{error}</p>
      ) : null}
      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 bg-sage text-white text-[14px] font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-sage-light disabled:opacity-60"
      >
        {sending ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            {t('fsending')}
          </>
        ) : (
          <>
            {t('fsend')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

function FAQ() {
  const t = useTranslations('Contact')
  const [open, setOpen] = useState<number | null>(null)
  const faqs = t.raw('faqs') as FaqItem[]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto mb-14 reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">FAQ</p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink leading-[1.2]">
            {t('faqTitle')}
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-3 reveal">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-colors duration-200
                ${isOpen ? 'border-sage/40 bg-sage-ultra' : 'border-border bg-white hover:bg-mist'}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left gap-3"
                >
                  <span className="text-[14px] sm:text-[15px] font-medium text-ink">{faq.q}</span>
                  <span className={`text-sage transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-52' : 'max-h-0'}`}>
                  <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-[14px] text-ink-soft leading-[1.75] font-light">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  const t = useTranslations('Contact')
  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto reveal">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            {t('mapEyebrow')}
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-3 leading-[1.2]">
            {t('mapTitle')}
          </h2>
          <p className="text-[15px] text-ink-soft font-light">{t('mapSub')}</p>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-[0_8px_40px_rgba(74,124,89,0.08)] bg-mist">
          <iframe
            title="HERBVIVE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9!2d-117.8837!3d33.8570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7f3e3e3e3e3%3A0x1!2s1178+N+Grove+St+Unit+C%2C+Anaheim%2C+CA+92806!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href="https://maps.google.com/?q=1178+N+Grove+St+Unit+C,+Anaheim,+CA+92806"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium px-5 sm:px-6 py-3 rounded-full no-underline transition-colors duration-200 hover:bg-sage-light"
          >
            {t('mapBtn')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function ContactPageClient() {
  const t = useTranslations('Contact')
  const tFooter = useTranslations('Footer')

  return (
    <main>
      <div className="min-h-[48vh] sm:min-h-[52vh] pt-[72px] flex items-center bg-sage-ultra relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[440px] h-[440px] rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c4deca, transparent 70%)' }} />
        <div className="absolute -bottom-14 left-[8%] w-[260px] h-[260px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c4deca, transparent 70%)' }} />

        <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 w-full">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-ink-soft mb-4 sm:mb-5">
            <Link href="/" className="text-sage no-underline hover:underline">
              {t('breadcrumb')}
            </Link>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
              <path d="M9 18l6-6-6-6" />
            </svg>
            {t('page')}
          </div>
          <span className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase text-sage bg-sage-pale border border-border px-3.5 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
            {t('badge')}
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.15] text-ink mb-4">
            {t('heroTitle1')}<br />
            <em className="not-italic text-sage">{t('heroTitleEm')}</em>
          </h1>
          <p className="text-[15px] sm:text-base text-ink-soft font-light leading-[1.7] max-w-[560px]">
            {t('heroSub')}
          </p>
        </div>
      </div>

      <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">

            <div className="reveal">
              <InfoCards />

              <div className="bg-sage-ultra border border-border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <WeChatQR size={88} className="rounded-xl ring-1 ring-border" alt={tFooter('wechatQrAlt')} />
                </div>
                <div>
                  <div className="text-[14px] font-medium text-ink mb-1">
                    {t('wechatCardTitle')}
                  </div>
                  <p className="text-[13px] text-ink-soft font-light leading-[1.6]">
                    {t('wechatCardBody')}
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal bg-sage-ultra border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <div className="mb-7">
                <h2 className="font-serif text-[28px] font-light text-ink mb-1.5">
                  {t('formTitle')}
                </h2>
                <p className="text-[13px] text-ink-soft font-light">{t('formSub')}</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <MapSection />
    </main>
  )
}
