import Image from 'next/image'

const scienceCards = [
  {
    image: '/quality-system-1.png',
    title: '指纹图谱比对技术',
    desc: '应用红外光谱指纹图谱技术，对原料与成品进行精准鉴别，建立行业最大中药指纹图谱数据库，杜绝掺假混伪。',
  },
  {
    image: '/quality-system-2.png',
    title: '有效成分定量分析',
    desc: '采用 HPLC 高效液相色谱法，对每批产品的有效成分进行精确定量，确保每批产品成分含量符合标准规格。',
  },
  {
    image: '/quality-system-3.png',
    title: '批次稳定性管控',
    desc: '通过统计过程控制（SPC）对生产批次进行实时监测，确保每批产品品质高度一致，满足临床应用标准要求。',
  },
]

export default function Science() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            Science · 科技成果
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
            科研能力展示
          </h2>
          <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
            以前沿科技为依托，建立中药现代化研究与检测的完整体系。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-12 reveal">
          {scienceCards.map((card) => (
            <div
              key={card.title}
              className="border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(74,124,89,0.1)]"
            >
              {/* Card header */}
              <div className="h-[180px] sm:h-[200px] bg-mist border-b border-border overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Card body */}
              <div className="p-6">
                <div className="text-[15px] font-medium text-ink mb-2">{card.title}</div>
                <p className="text-[13px] text-ink-soft leading-[1.7] font-light">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
