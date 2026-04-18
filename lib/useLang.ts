'use client'

import { startTransition, useCallback } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

export type SiteLang = 'zh' | 'en'

const LOCALE_COOKIE = 'NEXT_LOCALE'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function useLang() {
  const locale = (useLocale() === 'en' ? 'en' : 'zh') as SiteLang
  const router = useRouter()

  const setLang = useCallback(
    (nextLang: SiteLang) => {
      document.cookie = `${LOCALE_COOKIE}=${nextLang}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`
      // Let the cookie commit before RSC refetch; avoids refresh seeing a stale Cookie header.
      queueMicrotask(() => {
        startTransition(() => {
          router.refresh()
        })
      })
    },
    [router]
  )

  const toggle = useCallback(() => {
    setLang(locale === 'zh' ? 'en' : 'zh')
  }, [locale, setLang])

  return {
    lang: locale,
    setLang,
    toggle,
  }
}
