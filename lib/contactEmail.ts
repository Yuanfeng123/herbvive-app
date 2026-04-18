import fs from 'fs'
import path from 'path'
import sgMail from '@sendgrid/mail'

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

const EMPTY = '未填写'

export function buildContactTemplateVars(payload: {
  name: string
  email: string
  phone: string
  clinic: string
  inquiry_type: string
  message: string
}) {
  const phoneTrim = payload.phone.trim()
  const phoneDigits = phoneTrim.replace(/\D/g, '')

  return {
    name: escapeHtml(payload.name.trim()),
    email: escapeHtml(payload.email.trim()),
    phone: escapeHtml(phoneTrim || EMPTY),
    clinic: escapeHtml(payload.clinic.trim() || EMPTY),
    inquiry_type: escapeHtml(payload.inquiry_type.trim() || EMPTY),
    message: escapeHtml(payload.message.trim()),
    submitted_at:
      new Date().toLocaleString('zh-CN', { timeZone: 'America/Los_Angeles' }) +
      ' PST',
    phone_tel: phoneDigits ? `tel:${phoneDigits}` : '#',
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
  if (!emailRe.test(email)) return null

  return {
    name,
    email,
    phone: typeof o.phone === 'string' ? o.phone : '',
    clinic: typeof o.clinic === 'string' ? o.clinic : '',
    inquiry_type: typeof o.inquiry_type === 'string' ? o.inquiry_type : '',
    message,
  }
}

export async function sendContactEmails(payload: {
  name: string
  email: string
  phone: string
  clinic: string
  inquiry_type: string
  message: string
}) {
  const apiKey = process.env.SENDGRID_API_KEY
  if (!apiKey) throw new Error('Missing SENDGRID_API_KEY')

  const fromEmail = process.env.CONTACT_FROM_EMAIL
  if (!fromEmail) throw new Error('Missing CONTACT_FROM_EMAIL')

  const teamTo = parseTeamRecipients(process.env.CONTACT_TEAM_TO)
  const fromName = process.env.CONTACT_FROM_NAME || 'HERBVIVE'
  const from = `${fromName} <${fromEmail}>`

  sgMail.setApiKey(apiKey)

  const vars = buildContactTemplateVars(payload)
  const teamTpl = fs.readFileSync(
    path.join(process.cwd(), 'emails/team-notification.html'),
    'utf8'
  )
  const userTpl = fs.readFileSync(
    path.join(process.cwd(), 'emails/user-confirmation.html'),
    'utf8'
  )

  const inquiryShort = payload.inquiry_type.trim() || EMPTY
  const subjectTeam = `📋 新询盘：${inquiryShort} · ${payload.name.trim()}`

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
      subject: '感谢您的询盘，我们已收到！· HERBVIVE',
      html: fillTemplate(userTpl, vars),
    }),
  ])
}
