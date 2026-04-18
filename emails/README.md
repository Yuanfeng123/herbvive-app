# HERBVIVE Email Templates

两个 HTML 邮件模板，对应联系表单提交后的两封邮件。

---

## 文件说明

| 文件 | 用途 | 收件人 |
|---|---|---|
| `team-notification.html` | 新询盘通知 | info@herbvive.co（团队内部） |
| `user-confirmation.html` | 提交确认回执 | 用户填写的邮箱 |

---

## 模板变量

两个模板共用以下变量，发送前用实际数据替换：

| 变量 | 说明 | 示例值 |
|---|---|---|
| `{{name}}` | 用户姓名 | 张医生 |
| `{{email}}` | 用户邮箱 | zhang@clinic.com |
| `{{phone}}` | 联系电话（可为"未填写"） | 657-123-4567 |
| `{{clinic}}` | 诊所/机构名称（可为"未填写"） | 仁和中医诊所 |
| `{{inquiry_type}}` | 咨询类型 | 配方定制 |
| `{{message}}` | 留言内容 | 请问贵方是否支持… |
| `{{submitted_at}}` | 提交时间（仅 team 模板） | 2025-04-12 14:30 PST |

---

## 集成示例（Resend）

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

function fillTemplate(template: string, vars: Record<string, string>) {
  return Object.entries(vars).reduce(
    (html, [key, val]) => html.replaceAll(`{{${key}}}`, val || '未填写'),
    template
  )
}

export async function POST(req: Request) {
  const { name, email, phone, clinic, inquiry_type, message } = await req.json()

  const vars = {
    name,
    email,
    phone,
    clinic,
    inquiry_type,
    message,
    submitted_at: new Date().toLocaleString('zh-CN', { timeZone: 'America/Los_Angeles' }) + ' PST',
  }

  const teamTpl = fs.readFileSync(path.join(process.cwd(), 'emails/team-notification.html'), 'utf8')
  const userTpl = fs.readFileSync(path.join(process.cwd(), 'emails/user-confirmation.html'), 'utf8')

  // 1. 通知团队
  await resend.emails.send({
    from: 'HERBVIVE <noreply@herbvive.co>',
    to: 'info@herbvive.co',
    subject: `📋 新询盘：${inquiry_type} · ${name}`,
    html: fillTemplate(teamTpl, vars),
  })

  // 2. 确认回执给用户
  await resend.emails.send({
    from: 'HERBVIVE 美国康仁堂 <noreply@herbvive.co>',
    to: email,
    subject: `感谢您的询盘，我们已收到！· HERBVIVE`,
    html: fillTemplate(userTpl, vars),
  })

  return Response.json({ ok: true })
}
```

---

## 集成示例（SendGrid）

```typescript
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

await sgMail.send({
  to: 'info@herbvive.co',
  from: 'noreply@herbvive.co',
  subject: `📋 新询盘：${inquiry_type} · ${name}`,
  html: fillTemplate(teamTpl, vars),
})
```

---

## 邮件主题建议

| 邮件 | Subject |
|---|---|
| 团队通知 | `📋 新询盘：配方定制 · 张医生` |
| 用户确认 | `感谢您的询盘，我们已收到！· HERBVIVE` |
