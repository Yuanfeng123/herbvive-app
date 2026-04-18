import { getTranslations } from 'next-intl/server'

export default async function StatsRow() {
  const t = await getTranslations('StatsRow')
  const stats = t.raw('stats') as { num: string; unit: string; label: string }[]

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
              {stat.unit ? <span className="text-[16px] text-sage-light">{stat.unit}</span> : null}
            </div>
            <div className="text-[12px] text-ink-soft mt-2 tracking-[0.04em]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
