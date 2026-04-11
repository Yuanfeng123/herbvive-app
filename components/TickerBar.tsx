'use client'

const tickerItems = [
  { name: '黄芪 Astragalus', val: 'In Stock', tag: '✓ GMP' },
  { name: '白术 Atractylodes', val: 'In Stock', tag: '✓ GMP' },
  { name: '当归 Angelica', val: 'In Stock', tag: '✓ GMP' },
  { name: '人参 Ginseng', val: 'In Stock', tag: '✓ GMP' },
  { name: '枸杞 Goji Berry', val: 'In Stock', tag: '✓ GMP' },
  { name: '丹参 Salvia', val: 'In Stock', tag: '✓ GMP' },
  { name: '茯苓 Poria', val: 'In Stock', tag: '✓ GMP' },
  { name: '甘草 Licorice', val: 'In Stock', tag: '✓ GMP' },
  { name: '川芎 Ligusticum', val: 'In Stock', tag: '✓ GMP' },
  { name: '五味子 Schisandra', val: 'In Stock', tag: '✓ GMP' },
]

// Duplicate for seamless loop
const allItems = [...tickerItems, ...tickerItems]

export default function TickerBar() {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-[190] h-9 sm:h-9 bg-ink flex items-center overflow-hidden border-b border-sage/35">
      {/* Label */}
      <div className="flex-shrink-0 px-2.5 sm:px-4 h-full flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-medium tracking-[0.08em] sm:tracking-[0.1em] uppercase text-sage-light bg-sage/18 border-r border-sage/25 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-sage-light animate-blink flex-shrink-0" />
        <span className="sm:hidden">库存</span>
        <span className="hidden sm:inline">LIVE · 库存状态</span>
      </div>

      {/* Scrolling track */}
      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker ticker-track">
          {allItems.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-7 text-[10px] sm:text-[11px] font-mono text-white/40 border-r border-white/5"
            >
              <span className="text-white/78">{item.name}</span>
              <span className="text-sage-light font-medium">{item.val}</span>
              <span className="text-[#6fcf97] text-[10px]">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
