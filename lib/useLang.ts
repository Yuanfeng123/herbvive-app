'use client'

import {useLocale} from 'next-intl'
import {useRouter} from 'next/navigation'

export type SiteLang = 'zh' | 'en'

const LOCALE_COOKIE = 'NEXT_LOCALE'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function useLang() {
  const locale = (useLocale() === 'en' ? 'en' : 'zh') as SiteLang
  const router = useRouter()

  const setLang = (nextLang: SiteLang) => {
    if (nextLang === locale) return
    document.cookie = `${LOCALE_COOKIE}=${nextLang}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`
    router.refresh()
  }

  const toggle = () => setLang(locale === 'zh' ? 'en' : 'zh')

  return {
    lang: locale,
    setLang,
    toggle,
  }
}
