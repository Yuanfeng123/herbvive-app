import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HERBVIVE · 美国康仁堂',
  description: '面向中医从业者的专业草本解决方案',
  icons: {
    icon: [{ url: '/herbvive.png', type: 'image/png' }],
    apple: '/herbvive.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className="font-sans bg-white text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
