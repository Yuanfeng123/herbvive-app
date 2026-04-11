const stats = [
  {
    num: '500',
    sup: '+',
    desc: '草本原料品种，全面覆盖临床常用配方，满足多种治疗需求',
  },
  {
    num: '98',
    sup: '%+',
    desc: '全成分转移率，远超市场同类产品，最大程度保留临床有效成分',
  },
  {
    num: '$0',
    sup: '',
    desc: '定制加工费，配方颗粒按原料成本计费，无额外加工及包装费用',
  },
]

export default function ClinicalData() {
  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 text-center">
      <div className="max-w-[1120px] mx-auto">
        <div className="reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-4">
            Clinical Evidence · 产品验证
          </p>
          <div className="font-serif leading-none text-sage mb-2"
            style={{ fontSize: 'clamp(80px, 14vw, 140px)', fontWeight: 300 }}>
            122<span className="text-sage-light" style={{ fontSize: 'clamp(28px,4vw,40px)' }}>项</span>
          </div>
          <div className="text-[18px] text-ink-soft font-light">临床观察</div>
          <div className="text-[13px] text-ink-soft mt-1.5">
            覆盖 20,000+ 病例，多中心、多病种系统性临床研究
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0.5 mt-10 sm:mt-14 reveal">
          {stats.map((stat, i) => (
            <div
              key={stat.num}
              className={`bg-white py-7 sm:py-9 px-5 sm:px-6 border border-border rounded-xl sm:rounded-none
                ${i === 0 ? 'sm:rounded-tl-xl sm:rounded-bl-xl' : ''}
                ${i === stats.length - 1 ? 'sm:rounded-tr-xl sm:rounded-br-xl' : ''}
              `}
            >
              <div className="font-serif text-[44px] font-light text-sage">
                {stat.num}
                {stat.sup && (
                  <span className="text-[20px] text-sage-light">{stat.sup}</span>
                )}
              </div>
              <p className="text-[13px] text-ink-soft mt-1.5 font-light leading-[1.5]">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
