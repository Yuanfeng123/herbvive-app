const productionSteps = [
  {
    title: '原料精选与炮制',
    desc: '严选道地药材，按古法炮制规范进行前处理，保留最大化的活性成分。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    title: '提取与浓缩',
    desc: '全成分提取技术，水提醇沉工艺精准控温，确保有效成分充分转移，保留率达 98%+。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: '干燥制粒成型',
    desc: '先进的喷雾干燥与流化床制粒技术，无辅料或极少辅料，成品颗粒均匀细腻，溶解性优异。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: '全检出库',
    desc: '每批成品进行红外指纹图谱全检、含量测定，出具完整质量报告，合格后方可出库配送。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-5 h-5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

// Equipment cards
const equipment = [
  {
    name: '提取浓缩罐',
    sub: 'GMP 级不锈钢',
    image: '/equipment-1.png',
  },
  {
    name: '球磨过滤机',
    sub: '精密过滤系统',
    image: '/equipment-2.png',
  },
  {
    name: '出盒包装系统',
    sub: '自动化包装线',
    image: '/equipment-3.png',
  },
  {
    name: '立盒储运系统',
    sub: '冷链仓储管理',
    image: '/equipment-4.png',
  },
]

export default function Production() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — steps */}
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              Manufacturing · 生产创新
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
              数字化自动<br />生产体系
            </h2>
            <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
              中药炮制工艺参数化、自动化控制，实现中药生产数字化、智能化、规模化。
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col">
              {productionSteps.map((step, i) => (
                <div key={step.title}
                  className={`flex gap-4 sm:gap-5 py-5 sm:py-6 ${i < productionSteps.length - 1 ? 'border-b border-border' : ''}`}>
                  <div className="w-11 h-11 rounded-[11px] bg-sage-pale flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-ink mb-1.5">{step.title}</div>
                    <p className="text-[13px] text-ink-soft leading-[1.6] font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — equipment */}
          <div className="reveal">
            <p className="text-[11px] tracking-[0.1em] uppercase text-ink-soft mb-5">现代化设备展示</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {equipment.map((eq) => (
                <div key={eq.name}
                  className="rounded-2xl overflow-hidden border border-border bg-white transition-transform duration-300 hover:-translate-y-1">
                  <div className="h-40 relative overflow-hidden bg-mist">
                    <img
                      src={eq.image}
                      alt={eq.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3.5 px-4">
                    <div className="text-[13px] font-medium text-ink">{eq.name}</div>
                    <div className="text-[11px] text-ink-soft mt-0.5">{eq.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
