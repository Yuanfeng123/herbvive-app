'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import WeChatQR from '@/components/WeChatQR'
import { useLang } from '@/context/LangContext'
import Link from 'next/link'

/* ── translation map ── */
const copy = {
  breadcrumb:   ['首页', 'Home'],
  page:         ['联系我们', 'Contact Us'],
  badge:        ['Contact · 联系我们', 'Contact · Get in Touch'],
  heroTitle1:   ['随时联系', 'Get in Touch'],
  heroTitleEm:  ['我们的团队', 'Our Team'],
  heroTitle2:   ['', ''],
  heroSub:      [
    '无论您有任何问题、合作意向或产品咨询，我们的团队随时准备为您提供专业支持。',
    'Whether you have questions, partnership inquiries, or product consultations — our team is ready to support you.',
  ],

  // Info cards
  addressLabel:  ['地址', 'Address'],
  addressVal:    ['1178 N Grove St Unit C\nAnaheim, CA 92806', '1178 N Grove St Unit C\nAnaheim, CA 92806'],
  emailLabel:    ['邮箱', 'Email'],
  phoneLabel:    ['电话', 'Phone'],
  hoursLabel:    ['营业时间', 'Business Hours'],
  hoursVal:      ['周一至周五  9:00 – 18:00 PST', 'Mon – Fri  9:00 AM – 6:00 PM PST'],
  wechatLabel:   ['微信客服', 'WeChat'],
  wechatVal:     ['扫码添加销售经理，领取样品和报价单', 'Scan to add our sales manager for samples & a quote'],

  // Form
  formTitle:     ['发送消息', 'Send a Message'],
  formSub:       ['我们通常在 1 个工作日内回复。', 'We typically respond within 1 business day.'],
  fname:         ['姓名', 'Full Name'],
  fnamePh:       ['您的姓名', 'Your name'],
  femail:        ['邮箱地址', 'Email Address'],
  femailPh:      ['your@email.com', 'your@email.com'],
  fphone:        ['联系电话（选填）', 'Phone (optional)'],
  fphonePh:      ['657-000-0000', '657-000-0000'],
  fclinic:       ['诊所 / 机构名称（选填）', 'Clinic / Organization (optional)'],
  fclinicPh:     ['诊所名称', 'Clinic name'],
  ftype:         ['咨询类型', 'Inquiry Type'],
  ftypes:        [
    ['成品商城', '配方定制', '合作洽谈', '质量问题', '其他'],
    ['Ready-Made Products', 'Custom Formula', 'Partnership', 'Quality Issue', 'Other'],
  ],
  fmsg:          ['留言内容', 'Message'],
  fmsgPh:        ['请描述您的需求或问题…', 'Please describe your inquiry…'],
  fsend:         ['发送消息', 'Send Message'],
  fsending:      ['发送中…', 'Sending…'],

  // Success toast
  successTitle:  ['消息已发送！', 'Message Sent!'],
  successSub:    ['我们将尽快与您联系。', 'We will get back to you shortly.'],

  // Map section
  mapTitle:      ['我们的位置', 'Our Location'],
  mapSub:        ['位于加州阿纳海姆市，服务全美执业医师。', 'Based in Anaheim, CA — serving licensed practitioners nationwide.'],
  mapBtn:        ['在 Google Maps 中打开', 'Open in Google Maps'],

  // FAQ
  faqTitle:      ['常见问题', 'FAQ'],
  faqs: [
    [
      ['如何注册成为会员医师？', 'How do I register as a member physician?'],
      [
        '提交执业执照信息后，我们将在 1 个工作日内审核并开通您的专属账户。',
        'After submitting your practitioner license, we will review and activate your account within 1 business day.',
      ],
    ],
    [
      ['配方定制有最低起订量吗？', 'Is there a minimum order for custom formulas?'],
      [
        '没有。每个配方均无最低起订量，按实际用量灵活下单，零加工费。',
        'No. There is no minimum order quantity for custom formulas. Order as needed with zero processing fees.',
      ],
    ],
    [
      ['配送范围覆盖哪些地区？', 'What areas do you ship to?'],
      [
        '我们提供全美配送服务，覆盖 50 个州，当日或次日达（视地区）。',
        'We ship nationwide across all 50 states, with next-day delivery available in select areas.',
      ],
    ],
    [
      ['产品是否通过 GMP 认证？', 'Are your products GMP certified?'],
      [
        '是的。所有产品均来自 GMP 认证工厂，依托北京康仁堂药业完整质控体系。',
        'Yes. All products are sourced from GMP-certified facilities backed by Beijing Kanrentang\'s quality system.',
      ],
    ],
  ],
}

/* ── info card data ── */
function InfoCards({ t }: { t: (zh: string, en: string) => string }) {
  const cards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t(...copy.addressLabel as [string,string]),
      content: (
        <span className="whitespace-pre-line">{t(...copy.addressVal as [string,string])}</span>
      ),
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t(...copy.emailLabel as [string,string]),
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
      label: t(...copy.phoneLabel as [string,string]),
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
      label: t(...copy.hoursLabel as [string,string]),
      content: <span>{t(...copy.hoursVal as [string,string])}</span>,
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

/* ── contact form ── */
import { useState } from 'react'

function ContactForm({ t }: { t: (zh: string, en: string) => string }) {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1200)
  }

  const inputCls = "w-full border border-border rounded-xl px-4 py-3 text-[14px] text-ink bg-white placeholder:text-ink-soft/50 outline-none focus:border-sage focus:ring-2 focus:ring-sage/15 transition-all duration-200"
  const labelCls = "block text-[12px] font-medium text-ink-soft tracking-[0.04em] uppercase mb-1.5"

  const types = t('0', '1') === '0'
    ? copy.ftypes[0]
    : copy.ftypes[1]

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-sage-pale flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="2" className="w-8 h-8">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div className="font-serif text-[28px] font-light text-ink mb-2">
          {t(...copy.successTitle as [string,string])}
        </div>
        <p className="text-[14px] text-ink-soft font-light">{t(...copy.successSub as [string,string])}</p>
        <button onClick={() => setSent(false)}
          className="mt-6 text-[13px] text-sage hover:underline">
          {t('再发一条', 'Send another')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>{t(...copy.fname as [string,string])}</label>
          <input required type="text" placeholder={t(...copy.fnamePh as [string,string])} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{t(...copy.femail as [string,string])}</label>
          <input required type="email" placeholder={t(...copy.femailPh as [string,string])} className={inputCls} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>{t(...copy.fphone as [string,string])}</label>
          <input type="tel" placeholder={t(...copy.fphonePh as [string,string])} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{t(...copy.fclinic as [string,string])}</label>
          <input type="text" placeholder={t(...copy.fclinicPh as [string,string])} className={inputCls} />
        </div>
      </div>
      <div>
        <label className={labelCls}>{t(...copy.ftype as [string,string])}</label>
        <div className="flex flex-wrap gap-2">
          {(types as string[]).map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="inquiry_type" value={type}
                className="accent-sage w-4 h-4" />
              <span className="text-[13px] text-ink-soft">{type}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>{t(...copy.fmsg as [string,string])}</label>
        <textarea required rows={5} placeholder={t(...copy.fmsgPh as [string,string])}
          className={`${inputCls} resize-none`} />
      </div>
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
            {t(...copy.fsending as [string,string])}
          </>
        ) : (
          <>
            {t(...copy.fsend as [string,string])}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

/* ── FAQ accordion ── */
function FAQ({ t }: { t: (zh: string, en: string) => string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto mb-14 reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">FAQ</p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink leading-[1.2]">
            {t(...copy.faqTitle as [string,string])}
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-3 reveal">
          {copy.faqs.map((faq, i) => {
            const q = t(faq[0][0], faq[0][1])
            const a = t(faq[1][0], faq[1][1])
            const isOpen = open === i
            return (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-colors duration-200
                ${isOpen ? 'border-sage/40 bg-sage-ultra' : 'border-border bg-white hover:bg-mist'}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left gap-3"
                >
                  <span className="text-[14px] sm:text-[15px] font-medium text-ink">{q}</span>
                  <span className={`text-sage transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-52' : 'max-h-0'}`}>
                  <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-[14px] text-ink-soft leading-[1.75] font-light">{a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── map section ── */
function MapSection({ t }: { t: (zh: string, en: string) => string }) {
  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto reveal">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            {t('Location · 位置', 'Location · 位置')}
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-3 leading-[1.2]">
            {t(...copy.mapTitle as [string,string])}
          </h2>
          <p className="text-[15px] text-ink-soft font-light">{t(...copy.mapSub as [string,string])}</p>
        </div>

        {/* Map embed */}
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
            {t(...copy.mapBtn as [string,string])}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── main page ── */
export default function ContactPage() {
  const { t } = useLang()

  return (
    <>
      <Navbar activePath="/contact" />

      <main>
        {/* Hero */}
        <div className="min-h-[48vh] sm:min-h-[52vh] pt-[72px] flex items-center bg-sage-ultra relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[440px] h-[440px] rounded-full opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c4deca, transparent 70%)' }} />
          <div className="absolute -bottom-14 left-[8%] w-[260px] h-[260px] rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c4deca, transparent 70%)' }} />

          <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 w-full">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-ink-soft mb-4 sm:mb-5">
              <Link href="/" className="text-sage no-underline hover:underline">
                {t(...copy.breadcrumb as [string,string])}
              </Link>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                <path d="M9 18l6-6-6-6" />
              </svg>
              {t(...copy.page as [string,string])}
            </div>
            <span className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase text-sage bg-sage-pale border border-border px-3.5 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
              {t(...copy.badge as [string,string])}
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.15] text-ink mb-4">
              {t(...copy.heroTitle1 as [string,string])}<br />
              <em className="not-italic text-sage">{t(...copy.heroTitleEm as [string,string])}</em>
            </h1>
            <p className="text-[15px] sm:text-base text-ink-soft font-light leading-[1.7] max-w-[560px]">
              {t(...copy.heroSub as [string,string])}
            </p>
          </div>
        </div>

        {/* Main 2-col content */}
        <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-[1120px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">

              {/* Left — info */}
              <div className="reveal">
                <InfoCards t={t} />

                {/* WeChat promo card */}
                <div className="bg-sage-ultra border border-border rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                  <div className="flex-shrink-0">
                    <WeChatQR size={88} className="rounded-xl ring-1 ring-border" />
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-ink mb-1">
                      {t('微信咨询', 'WeChat Support')}
                    </div>
                    <p className="text-[13px] text-ink-soft font-light leading-[1.6]">
                      {t('扫码添加销售经理，领取样品和报价单', 'Scan to add our sales manager for samples & a quote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="reveal bg-sage-ultra border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8">
                <div className="mb-7">
                  <h2 className="font-serif text-[28px] font-light text-ink mb-1.5">
                    {t(...copy.formTitle as [string,string])}
                  </h2>
                  <p className="text-[13px] text-ink-soft font-light">{t(...copy.formSub as [string,string])}</p>
                </div>
                <ContactForm t={t} />
              </div>
            </div>
          </div>
        </section>

        <FAQ t={t} />
        <MapSection t={t} />
      </main>

      <Footer />
      <RevealObserver />
    </>
  )
}
