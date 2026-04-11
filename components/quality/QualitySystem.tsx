import Link from 'next/link'

const qualityItems = [
  {
    num: '01',
    title: '专利技术',
    desc: '拥有多项中药配方颗粒制备工艺专利，从提取浓缩到干燥成型，全程工艺优化，保障有效成分最大保留。',
  },
  {
    num: '02',
    title: '红外指纹图谱数据库',
    desc: '建立包含 500+ 品种的中药红外指纹图谱数据库，实现快速精准的原料鉴别与成品检测，杜绝掺假。',
  },
  {
    num: '03',
    title: '标准化检测设备',
    desc: '配备先进的现代化检测仪器，包括 HPLC、GC-MS 等国际标准设备，确保每批产品的一致性与稳定性。',
  },
]

const certs = [
  { label: 'GMP 认证', sub: '国际标准生产规范' },
  { label: 'FDA 备案', sub: '美国食品药品监管' },
  { label: '国家级科研项目', sub: '政府级质量背书' },
  { label: 'ISO 质量管理', sub: '国际质量管理体系' },
  { label: 'A股上市品质', sub: '康仁堂 · 300026' },
  { label: '全程溯源', sub: '从产地到诊所' },
]

function CheckIcon() {
  return (
    <div className="w-7 h-7 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3.5 h-3.5">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </div>
  )
}

export default function QualitySystem() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              Quality System · 科研与检测体系
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
              三重核心<br />质量保障
            </h2>
            <p className="text-[15px] text-ink-soft font-light leading-[1.75] max-w-[480px]">
              从原料采购到成品出库，每一个环节均有严格的科学标准把控，确保产品的安全性与有效性。
            </p>
            <div className="mt-7">
              <Link
                href="/innovation"
                className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium px-[22px] py-3 rounded-full no-underline transition-colors duration-200 hover:bg-sage-light"
              >
                了解产品创新
              </Link>
            </div>
          </div>

          {/* Right — quality list */}
          <div className="reveal flex flex-col gap-4 sm:gap-5">
            {qualityItems.map((item) => (
              <div
                key={item.num}
                className="flex gap-4 sm:gap-5 p-5 sm:p-6 bg-white border border-border rounded-[14px] transition-all duration-[250ms] hover:translate-x-1.5 hover:shadow-[0_8px_28px_rgba(74,124,89,0.08)]"
              >
                <div className="w-10 h-10 rounded-[10px] bg-sage text-white flex items-center justify-center text-[14px] font-medium flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <div className="text-[15px] font-medium text-ink mb-1.5">{item.title}</div>
                  <p className="text-[13px] text-ink-soft leading-[1.65] font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cert panel */}
        <div className="mt-10 sm:mt-12 reveal">
          <div className="bg-white border border-border rounded-[20px] p-5 sm:p-7 lg:p-9">
            <div className="text-[13px] font-medium text-ink tracking-[0.04em] uppercase mb-5">
              认证资质 · Certifications
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {certs.map((cert) => (
                <div key={cert.label} className="flex items-center gap-3.5 p-3.5 px-4 bg-sage-ultra rounded-[10px] border border-border">
                  <CheckIcon />
                  <div>
                    <div className="text-[13px] text-ink font-normal">{cert.label}</div>
                    <div className="text-[11px] text-ink-soft mt-0.5">{cert.sub}</div>
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
