import fs from 'fs'
import path from 'path'
import sgMail from '@sendgrid/mail'
import zhMessages from '../messages/zh.json'
import enMessages from '../messages/en.json'

export type ContactEmailLocale = 'zh' | 'en'

export function fillTemplate(template: string, vars: Record<string, string>) {
  return Object.entries(vars).reduce(
    (html, [key, val]) => html.replaceAll(`{{${key}}}`, val ?? ''),
    template
  )
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function sanitizeSubjectLine(s: string): string {
  return s.replace(/[\r\n]+/g, ' ').trim()
}

function interpolateBraces(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? '')
}

function flattenEmailStrings(
  obj: Record<string, unknown>,
  prefix: string
): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(obj)) {
    const key = `${prefix}_${k}`
    if (typeof v === 'string') out[key] = v
  }
  return out
}

type ContactEmailBlock = {
  empty: string
  teamSubject: string
  userSubject: string
  team: Record<string, string>
  user: Record<string, string>
}

function getContactEmailBlock(locale: ContactEmailLocale): ContactEmailBlock {
  const root = (locale === 'en' ? enMessages : zhMessages) as {
    ContactEmail: ContactEmailBlock
  }
  return root.ContactEmail
}

export function parseContactPayload(body: unknown): {
  name: string
  email: string
  phone: string
  clinic: string
  inquiry_type: string
  message: string
} | null {
  if (!body || typeof body !== 'object') return null
  const o = body as Record<string, unknown>
  const name = typeof o.name === 'string' ? o.name.trim() : ''
  const email = typeof o.email === 'string' ? o.email.trim() : ''
  const message = typeof o.message === 'string' ? o.message.trim() : ''
  if (!name || !email || !message) return null
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null

  return {
    name,
    email,
    phone: typeof o.phone === 'string' ? o.phone : '',
    clinic: typeof o.clinic === 'string' ? o.clinic : '',
    inquiry_type: typeof o.inquiry_type === 'string' ? o.inquiry_type : '',
    message,
  }
}

function parseLocaleFromCookie(cookieHeader: string | null): ContactEmailLocale | null {
  if (!cookieHeader) return null
  const parts = cookieHeader.split(';').map((s) => s.trim())
  for (const p of parts) {
    if (p.startsWith('NEXT_LOCALE=')) {
      const v = p.slice('NEXT_LOCALE='.length)
      return v === 'en' ? 'en' : v === 'zh' ? 'zh' : null
    }
  }
  return null
}

/** Prefer JSON `locale`; else `NEXT_LOCALE` cookie; default en. */
export function parseContactLocale(body: unknown, cookieHeader?: string | null): ContactEmailLocale {
  if (body && typeof body === 'object') {
    const raw = (body as Record<string, unknown>).locale
    if (raw === 'en' || raw === 'zh') return raw
  }
  return parseLocaleFromCookie(cookieHeader ?? null) ?? 'en'
}

export function buildContactTemplateVars(
  payload: {
    name: string
    email: string
    phone: string
    clinic: string
    inquiry_type: string
    message: string
  },
  locale: ContactEmailLocale
): Record<string, string> {
  const emailBlock = getContactEmailBlock(locale)
  const empty = emailBlock.empty
  const phoneTrim = payload.phone.trim()
  const phoneDigits = phoneTrim.replace(/\D/g, '')

  const submittedAt =
    new Date().toLocaleString(locale === 'en' ? 'en-US' : 'zh-CN', {
      timeZone: 'America/Los_Angeles',
    }) + (locale === 'en' ? ' (Pacific Time)' : ' PST')

  const teamVars = flattenEmailStrings(emailBlock.team as unknown as Record<string, unknown>, 'team')
  const userVars = flattenEmailStrings(emailBlock.user as unknown as Record<string, unknown>, 'user')

  const replySubjectRaw = emailBlock.team.replyMailSubject
  const team_replyMailSubjectEncoded = encodeURIComponent(replySubjectRaw)

  return {
    name: escapeHtml(payload.name.trim()),
    email: escapeHtml(payload.email.trim()),
    phone: escapeHtml(phoneTrim || empty),
    clinic: escapeHtml(payload.clinic.trim() || empty),
    inquiry_type: escapeHtml(payload.inquiry_type.trim() || empty),
    message: escapeHtml(payload.message.trim()),
    submitted_at: escapeHtml(submittedAt),
    phone_tel: phoneDigits ? `tel:${phoneDigits}` : '#',
    team_replyMailSubjectEncoded,
    ...teamVars,
    ...userVars,
  }
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Comma, semicolon, or newline — multiple team inboxes for the same notification. */
function parseTeamRecipients(value: string | undefined): string[] {
  const fallback = ['info@herbvive.co']
  if (value === undefined || !value.trim()) return fallback
  const parts = value
    .split(/[,;\n]+/)
    .map((s) => s.trim())
    .filter(Boolean)
  const valid = parts.filter((e) => emailRe.test(e))
  if (parts.length > 0 && valid.length === 0) {
    throw new Error('CONTACT_TEAM_TO has no valid email addresses')
  }
  return valid.length > 0 ? valid : fallback
}

export async function sendContactEmails(
  payload: {
    name: string
    email: string
    phone: string
    clinic: string
    inquiry_type: string
    message: string
  },
  locale: ContactEmailLocale
) {
  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) throw new Error('Missing SENDGRID_API_KEY')

  const fromEmail = process.env.CONTACT_FROM_EMAIL
  if (!fromEmail) throw new Error('Missing CONTACT_FROM_EMAIL')

  const teamTo = parseTeamRecipients(process.env.CONTACT_TEAM_TO)
  const fromName = process.env.CONTACT_FROM_NAME || 'HERBVIVE'
  const from = `${fromName} <${fromEmail}>`

  sgMail.setApiKey(apiKey)

  const emailBlock = getContactEmailBlock(locale)
  const vars = buildContactTemplateVars(payload, locale)

  const teamTpl = fs.readFileSync(
    path.join(process.cwd(), 'emails/team-notification.html'),
    'utf8'
  )
  const userTpl = fs.readFileSync(
    path.join(process.cwd(), 'emails/user-confirmation.html'),
    'utf8'
  )

  const inquiryShort = sanitizeSubjectLine(payload.inquiry_type.trim() || emailBlock.empty)
  const nameShort = sanitizeSubjectLine(payload.name.trim())
  const subjectTeam = sanitizeSubjectLine(
    interpolateBraces(emailBlock.teamSubject, {
      inquiry: inquiryShort,
      name: nameShort,
    })
  )
  const subjectUser = sanitizeSubjectLine(emailBlock.userSubject)

  await Promise.all([
    sgMail.send({
      to: teamTo,
      from,
      replyTo: payload.email.trim(),
      subject: subjectTeam,
      html: fillTemplate(teamTpl, vars),
    }),
    sgMail.send({
      to: payload.email.trim(),
      from,
      subject: subjectUser,
      html: fillTemplate(userTpl, vars),
    }),
  ])
}
