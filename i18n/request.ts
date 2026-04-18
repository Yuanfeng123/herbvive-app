import {getRequestConfig} from 'next-intl/server'
import {cookies} from 'next/headers'

type AppLocale = 'zh' | 'en'

function resolveLocale(): AppLocale {
  const raw = cookies().get('NEXT_LOCALE')?.value
  return raw === 'en' ? 'en' : 'zh'
}

export default getRequestConfig(async () => {
  const locale = resolveLocale()
  const messages = (await import(`../messages/${locale}.json`)).default

  return {
    locale,
    messages,
  }
})
