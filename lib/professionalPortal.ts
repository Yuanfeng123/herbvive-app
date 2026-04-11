/** Herbvive 从业者工作台（登录、商城入口） */
export const PROFESSIONAL_PORTAL_URL = 'https://professional.herbvive.co'

/** 中文注册页 */
export const PROFESSIONAL_REGISTER_ZH_URL = `${PROFESSIONAL_PORTAL_URL}/zh/register`

export type SiteLang = 'zh' | 'en'

export function professionalRegisterUrl(lang: SiteLang): string {
  return lang === 'zh' ? PROFESSIONAL_REGISTER_ZH_URL : `${PROFESSIONAL_PORTAL_URL}/register`
}
