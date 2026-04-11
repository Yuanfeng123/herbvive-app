import Link from 'next/link'

export default function QualityHero() {
  return (
    <div className="min-h-[48vh] sm:min-h-[52vh] pt-[72px] flex items-center bg-sage-ultra relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full opacity-35"
        style={{ background: 'radial-gradient(circle, #c4deca, transparent 70%)' }} />
      <div className="absolute -bottom-15 left-[8%] w-[280px] h-[280px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #c4deca, transparent 70%)' }} />

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-ink-soft mb-4 sm:mb-5">
          <Link href="/" className="text-sage no-underline hover:underline">首页</Link>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
            <path d="M9 18l6-6-6-6" />
          </svg>
          质量保证
        </div>

        <span className="inline-block text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase text-sage bg-sage-pale border border-border px-3.5 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
          Quality Assurance · 质量体系
        </span>

        <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.15] text-ink mb-4">
          国家项目支持<br />
          <em className="not-italic text-sage">科研引领</em>中药现代化
        </h1>

        <p className="text-[15px] sm:text-base text-ink-soft font-light leading-[1.7] max-w-[560px]">
          以科技创新推动中药标准化，以严格质控保障用药安全。每一瓶产品都经过严格的质量管控流程。
        </p>
      </div>
    </div>
  )
}
