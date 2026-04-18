import { NextResponse } from 'next/server'
import { parseContactPayload, sendContactEmails } from '@/lib/contactEmail'

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const payload = parseContactPayload(body)
  if (!payload) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 400 })
  }

  try {
    await sendContactEmails(payload)
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
