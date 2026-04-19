/** Herbvive 从业者工作台（登录、商城入口） */
export const PROFESSIONAL_PORTAL_URL = 'https://professional.herbvive.co'

/** 中文注册页 */
export const PROFESSIONAL_REGISTER_ZH_URL = `${PROFESSIONAL_PORTAL_URL}/zh/register`

export type SiteLang = 'zh' | 'en'

/** 与注册页一致：中文 /zh，英文 /en */
export function professionalPortalHomeUrl(lang: SiteLang): string {
  return lang === 'zh' ? `${PROFESSIONAL_PORTAL_URL}/zh` : `${PROFESSIONAL_PORTAL_URL}/en`
}

export function professionalRegisterUrl(lang: SiteLang): string {
  return lang === 'zh' ? PROFESSIONAL_REGISTER_ZH_URL : `${PROFESSIONAL_PORTAL_URL}/en/register`
}
