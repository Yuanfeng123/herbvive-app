const stats = [
  { num: '20', unit: '+', label: '年行业经验' },
  { num: '160', unit: '+', label: '专利技术' },
  { num: '80', unit: '+', label: '国家级荣誉' },
  { num: '20', unit: '+', label: '覆盖全球国家地区' },
]

export default function StatsRow() {
  return (
    <div className="bg-sage-ultra border-t border-b border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4 reveal">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-8 sm:py-10 lg:py-[52px] px-5 sm:px-8 lg:px-10 text-center transition-colors duration-300 hover:bg-sage-pale
              ${i % 2 === 0 ? 'border-r border-border lg:border-r-0' : ''}
              ${i < 2 ? 'border-b border-border lg:border-b-0' : ''}
              ${i < stats.length - 1 ? 'lg:border-r lg:border-border' : ''}`}
          >
            <div className="font-serif text-[38px] sm:text-[46px] lg:text-[52px] font-light text-sage leading-none">
              {stat.num}
              {stat.unit && <span className="text-[16px] text-sage-light">{stat.unit}</span>}
            </div>
            <div className="text-[12px] text-ink-soft mt-2 tracking-[0.04em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
