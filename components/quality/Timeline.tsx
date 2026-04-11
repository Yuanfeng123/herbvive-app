const timelineItems = [
  {
    side: 'left',
    year: '2002',
    event: '标准化工艺奠定基础',
    desc: '启动中药配方颗粒标准化研究，建立从原材料到成品的全流程质控体系，获得首批国家认证。',
  },
  {
    side: 'right',
    year: '2003–2009',
    event: '国家专项研究突破',
    desc: '承担多项国家级科研专项，攻克指纹图谱鉴别、有效成分定量等核心技术难题，建立行业标准。',
  },
  {
    side: 'left',
    year: '2012',
    event: '引进外资，国际标准接轨',
    desc: '完成国际质量体系认证，产品标准与 FDA、GMP 国际规范全面接轨，开启北美市场布局。',
  },
  {
    side: 'right',
    year: '至今',
    event: '持续创新，全球领先',
    desc: '持续更新检测技术与质控标准，成为中药配方颗粒市场占有率最高的民营企业，进军北美市场。',
  },
]

export default function Timeline() {
  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        {/* Intro */}
        <div className="text-center max-w-[560px] mx-auto mb-10 sm:mb-14 lg:mb-[72px] reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            History · 国家项目背书
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
            科研历程
          </h2>
          <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
            自 2002 年起，持续投入建立中药配方颗粒现代工艺与质量标准体系，实现从传统炮制到现代制剂的转化。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative reveal">
          {/* Center line */}
          <div className="hidden md:block absolute top-7 left-1/2 -translate-x-1/2 w-px bg-border"
            style={{ height: 'calc(100% - 56px)' }} />

          {timelineItems.map((item, i) => (
            <div key={i} className="grid mb-6 sm:mb-8 md:mb-12 items-center md:grid-cols-[1fr_60px_1fr]">
              {item.side === 'left' ? (
                <>
                  {/* Content left */}
                  <div className="md:pr-10 md:text-right order-2 md:order-1">
                    <div className="bg-mist border border-border rounded-xl p-6 px-7 transition-colors duration-300 hover:bg-sage-pale inline-block text-left w-full">
                      <div className="font-serif text-3xl font-light text-sage mb-1.5">{item.year}</div>
                      <div className="text-[15px] font-medium text-ink mb-1.5">{item.event}</div>
                      <p className="text-[13px] text-ink-soft leading-[1.6] font-light">{item.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex justify-center order-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-sage border-[3px] border-white shadow-[0_0_0_2px_#c4deca]" />
                  </div>
                  {/* Empty */}
                  <div className="hidden md:block order-3" />
                </>
              ) : (
                <>
                  {/* Empty */}
                  <div className="hidden md:block order-1" />
                  {/* Dot */}
                  <div className="hidden md:flex justify-center order-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-sage border-[3px] border-white shadow-[0_0_0_2px_#c4deca]" />
                  </div>
                  {/* Content right */}
                  <div className="md:pl-10 order-2 md:order-3">
                    <div className="bg-mist border border-border rounded-xl p-6 px-7 transition-colors duration-300 hover:bg-sage-pale">
                      <div className="font-serif text-3xl font-light text-sage mb-1.5">{item.year}</div>
                      <div className="text-[15px] font-medium text-ink mb-1.5">{item.event}</div>
                      <p className="text-[13px] text-ink-soft leading-[1.6] font-light">{item.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
