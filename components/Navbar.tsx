'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useLang } from '@/lib/useLang'
import { professionalPortalHomeUrl, professionalRegisterUrl } from '@/lib/professionalPortal'

const navLinks = [
  { href: '/', key: 'home' as const },
  { href: '/brand', key: 'brand' as const },
  { href: '/quality', key: 'quality' as const },
  { href: '/innovation', key: 'innovation' as const },
  { href: '/contact', key: 'contact' as const },
]

interface NavbarProps {
  activePath?: string
}

export default function Navbar({ activePath }: NavbarProps) {
  const { lang, toggle } = useLang()
  const t = useTranslations('Navbar')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-6 lg:px-12 h-[72px] bg-white/92 backdrop-blur-[12px] border-b border-border">
      <Link href="/" className="inline-flex items-center no-underline flex-shrink-0">
        <Image
          src="/herbvive.png"
          alt="HERBVIVE"
          width={150}
          height={40}
          className="h-7 sm:h-8 w-auto object-contain"
          priority
        />
      </Link>

      <ul className="hidden lg:flex gap-6 xl:gap-8 list-none m-0 p-0 items-center">
        {navLinks.map((link) => {
          const isActive = activePath === link.href
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] tracking-[0.04em] no-underline transition-colors duration-200 hover:text-sage
                  ${isActive
                    ? 'font-medium text-sage border-b-[1.5px] border-sage pb-0.5'
                    : 'font-normal text-ink-soft'
                  }`}
              >
                {t(`links.${link.key}`)}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t('toggleLanguage')}
            className="relative flex items-center h-8 w-[72px] rounded-full border border-border bg-mist transition-colors duration-300 hover:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/30"
          >
            <span
              className={`absolute top-[3px] h-[22px] w-[32px] rounded-full bg-sage shadow-sm transition-all duration-300
                ${lang === 'zh' ? 'left-[3px]' : 'left-[37px]'}`}
            />
            <span className={`relative z-10 w-[36px] text-center text-[11px] font-medium transition-colors duration-200
              ${lang === 'zh' ? 'text-white' : 'text-ink-soft'}`}>
              {t('toggleZhLabel')}
            </span>
            <span className={`relative z-10 w-[36px] text-center text-[11px] font-medium transition-colors duration-200
              ${lang === 'en' ? 'text-white' : 'text-ink-soft'}`}>
              {t('toggleEnLabel')}
            </span>
          </button>

          <div
            className="hidden sm:flex items-center rounded-full bg-sage text-white text-[12px] sm:text-[13px] font-medium tracking-[0.04em] overflow-hidden divide-x divide-white/25 shadow-sm transition-all duration-200 hover:bg-sage-light"
          >
            <a
              href={professionalPortalHomeUrl(lang)}
              className="px-4 sm:px-5 py-[10px] no-underline text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {t('login')}
            </a>
            <a
              href={professionalRegisterUrl(lang)}
              className="px-4 sm:px-5 py-[10px] no-underline text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {t('register')}
            </a>
          </div>
        </div>

        <div className="sm:hidden flex items-center rounded-full bg-sage text-white text-[11px] font-medium overflow-hidden divide-x divide-white/25">
          <a
            href={professionalPortalHomeUrl(lang)}
            className="px-3 py-2 no-underline text-white hover:bg-white/10 whitespace-nowrap"
          >
            {t('login')}
          </a>
          <a
            href={professionalRegisterUrl(lang)}
            className="px-3 py-2 no-underline text-white hover:bg-white/10 whitespace-nowrap"
          >
            {t('register')}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-lg border border-border bg-mist/80 focus:outline-none focus:ring-2 focus:ring-sage/30"
        >
          <span className={`block h-0.5 w-5 bg-ink mx-auto rounded transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 bg-ink mx-auto rounded transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-ink mx-auto rounded transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            aria-label={t('closeMenu')}
            className="lg:hidden fixed inset-0 top-[72px] z-[198] bg-ink/25"
            onClick={() => setMenuOpen(false)}
          />
          <div className="lg:hidden fixed left-0 right-0 top-[72px] z-[199] bg-white border-b border-border shadow-lg max-h-[min(70vh,calc(100dvh-72px))] overflow-y-auto">
            <ul className="list-none m-0 p-4 flex flex-col gap-0">
              {navLinks.map((link) => {
                const isActive = activePath === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-3.5 px-2 text-[15px] no-underline border-b border-border/80
                        ${isActive ? 'font-medium text-sage' : 'text-ink-soft'}`}
                    >
                      {t(`links.${link.key}`)}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="p-4 pt-2 flex items-center justify-between gap-3 border-t border-border bg-mist/50">
              <button
                type="button"
                onClick={toggle}
                aria-label={t('toggleLanguage')}
                className="relative flex items-center h-8 w-[72px] rounded-full border border-border bg-white transition-colors duration-300"
              >
                <span
                  className={`absolute top-[3px] h-[22px] w-[32px] rounded-full bg-sage shadow-sm transition-all duration-300
                    ${lang === 'zh' ? 'left-[3px]' : 'left-[37px]'}`}
                />
                <span className={`relative z-10 w-[36px] text-center text-[11px] font-medium ${lang === 'zh' ? 'text-white' : 'text-ink-soft'}`}>{t('toggleZhLabel')}</span>
                <span className={`relative z-10 w-[36px] text-center text-[11px] font-medium ${lang === 'en' ? 'text-white' : 'text-ink-soft'}`}>{t('toggleEnLabel')}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
