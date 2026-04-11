const partners = [
  {
    title: '高质量保障',
    desc: '依托康仁堂科研实力，代际国家实验室空间产格品质管控体系，确保每一件产品的安全与有效。GMP 认证生产，全程溯源。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-[22px] h-[22px]">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Herbvive康仁堂',
    desc: '华药堂智能系统智能化下单、自动配药、物流追踪，助力诊所高效运营。当日调配，次日到达，全流程线上管理。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-[22px] h-[22px]">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: '合作共赢',
    desc: '提升诊所收益与效率，多种合作模式，赋能中医诊所。携手共创行业新生态，支持执业医师长期稳定发展。',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4a7c59" strokeWidth="1.8" className="w-[22px] h-[22px]">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Partnership() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-10 sm:mb-14 lg:mb-16 reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            Our Partners · 核心优势
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
            三大核心价值
          </h2>
          <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
            汇聚顶级中药资源，以技术与服务为执业医师赋能。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {partners.map((p, i) => (
            <div
              key={p.title}
              className="reveal border border-border rounded-2xl p-6 sm:p-8 lg:p-9 lg:px-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(74,124,89,0.1)] hover:bg-sage-ultra"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-sage-pale flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <div className="text-[16px] font-medium text-ink mb-2.5">{p.title}</div>
              <p className="text-[13px] text-ink-soft leading-[1.7] font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
