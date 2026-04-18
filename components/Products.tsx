import { PROFESSIONAL_PORTAL_URL } from '@/lib/professionalPortal'

function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function Products() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12" id="products">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left — copy */}
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              Ready-Made · 成品产品
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-ink mb-4 leading-[1.2]">
              精选成品产品
            </h2>
            <p className="text-[15px] text-ink-soft font-light leading-[1.7] max-w-[480px]">
              严选高端草本配方，标准化生产工艺，每一瓶均经过严格质量检测。标签清晰、成分透明，适合直接为患者推荐使用。
            </p>

            <div className="mt-9 flex gap-3 flex-wrap">
              <a
                href={PROFESSIONAL_PORTAL_URL}
                className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium tracking-[0.03em] px-[22px] py-3 rounded-full no-underline transition-all duration-200 hover:bg-sage-light hover:translate-x-0.5"
              >
                进入商城 <ArrowIcon />
              </a>
              <a
                href={PROFESSIONAL_PORTAL_URL}
                className="inline-flex items-center gap-2 bg-transparent text-sage text-[13px] font-medium tracking-[0.03em] px-[22px] py-3 rounded-full border-[1.5px] border-sage no-underline transition-all duration-200 hover:bg-sage hover:text-white"
              >
                查看产品目录 <ArrowIcon />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { val: '50+', label: '诊所精选 · 常备品类' },
                { val: 'GMP', label: '认证生产' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 bg-mist rounded-xl border border-border">
                  <div className="font-serif text-[22px] font-light text-sage">{stat.val}</div>
                  <div className="text-xs text-ink-soft mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — product shelf visual */}
          <div className="reveal bg-mist rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border relative overflow-hidden shelf-gradient flex items-center justify-center">
            {/* Placeholder bottles when no image is available */}
            <img
              src="/pic.png"
              alt="HERBVIVE 产品瓶装展示"
              className="w-full max-w-[520px] h-auto block"
             
            />
            {/* SVG bottle fallback */}
            {/* <div className="flex gap-4 items-end justify-center">
              {[
                { h: 180, w: 52, label: '益气' },
                { h: 210, w: 60, label: '补肾' },
                { h: 160, w: 48, label: '养肝' },
                { h: 195, w: 56, label: '健脾' },
              ].map((b, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="rounded-[8px_8px_6px_6px] shadow-[0_8px_24px_rgba(74,124,89,0.12)] transition-transform duration-300 hover:-translate-y-2 flex items-center justify-center"
                    style={{
                      width: b.w,
                      height: b.h,
                      background: `linear-gradient(170deg, #e8f2ec ${i % 2 === 0 ? '20%' : '30%'}, #c4deca)`,
                      border: '1px solid #d6e8db',
                    }}
                  >
                    <span className="font-serif text-sage text-lg font-light">{b.label}</span>
                  </div>
                  <span className="text-[9px] tracking-[0.06em] text-ink-soft uppercase font-medium">
                    HERBVIVE
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
