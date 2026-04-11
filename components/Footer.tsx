import Link from 'next/link'
import Disclaimer from '@/components/Disclaimer'
import WeChatQR from '@/components/WeChatQR'

const productLinks = [
  { href: '#', label: '成品商城' },
  { href: '#', label: '配方定制平台' },
  { href: '#', label: '产品目录' },
  { href: '#', label: '质量标准' },
]

const aboutLinks = [
  { href: '#', label: '公司介绍' },
  { href: '#', label: '医师认证' },
  { href: '#', label: '联系方式' },
  { href: '#', label: '隐私政策' },
]

export default function Footer() {
  return (
    <>
      <Disclaimer />
      <footer className="bg-ink text-white/70 pt-12 sm:pt-14 lg:pt-[60px] pb-8 sm:pb-10 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_1fr_1fr] gap-10 lg:gap-12 mb-10 lg:mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="inline-flex items-center mb-3">
            {/* Replace with <Image src="/herbvive.png" alt="HERBVIVE" height={40} width={130} /> when logo is ready */}
            <span className="font-serif text-white text-2xl font-light tracking-widest">HERBVIVE</span>
          </div>
          <p className="text-[13px] text-white/50 leading-[1.7] mb-4">
            美国康仁堂<br />面向中医从业者的专业草本解决方案
          </p>
          <div className="text-[12px] text-white/40 leading-[1.8]">
            📍 Anaheim, California<br />
            🌐{' '}
            <a href="https://www.herbvive.co" className="text-sage-light hover:text-sage transition-colors duration-200">
              www.herbvive.co
            </a>
          </div>
          <div className="mt-6">
            <div className="text-[11px] tracking-[0.1em] uppercase text-white/30 font-medium mb-3">官方微信</div>
            <WeChatQR size={112} className="rounded-lg ring-1 ring-white/15" />
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-white/30 font-medium mb-4">产品服务</div>
          <ul className="space-y-2.5 list-none p-0 m-0">
            {productLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[13px] text-white/55 hover:text-white no-underline transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <div className="text-[11px] tracking-[0.1em] uppercase text-white/30 font-medium mb-4">关于我们</div>
          <ul className="space-y-2.5 list-none p-0 m-0">
            {aboutLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[13px] text-white/55 hover:text-white no-underline transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-8 border-t border-white/10 text-[11px] sm:text-[12px] text-white/30 text-center sm:text-left">
        <span>© 2025 HERBVIVE · 美国康仁堂. All rights reserved.</span>
        <span className="sm:max-w-[min(100%,280px)] sm:text-right lg:max-w-none">Professional TCM Solutions for Licensed Practitioners</span>
      </div>

      
      </footer>
    </>
  )
}
