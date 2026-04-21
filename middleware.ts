import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

/** 与 `lib/useLang.ts` 一致 */
const LOCALE_COOKIE = 'NEXT_LOCALE'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]
  if (first !== 'zh' && first !== 'en') {
    return NextResponse.next()
  }

  const locale = first
  const rest = pathname.slice(`/${locale}`.length)
  const newPath = rest === '' || rest === '/' ? '/' : rest

  const url = request.nextUrl.clone()
  url.pathname = newPath
  const response = NextResponse.redirect(url)
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
  })
  return response
}

export const config = {
  matcher: ['/zh', '/zh/:path*', '/en', '/en/:path*'],
}
