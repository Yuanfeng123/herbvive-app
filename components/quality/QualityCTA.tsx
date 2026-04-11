import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function QualityCTA() {
  return (
    <section
      id="contact"
      className="text-center py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 border-t border-border"
      style={{ background: 'linear-gradient(160deg, #e8f2ec 0%, #f4f9f6 100%)' }}
    >
      <div className="max-w-[1120px] mx-auto reveal">
        <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
          Get Started · 立即开始
        </p>
        <h2 className="font-serif text-[clamp(34px,5vw,56px)] font-light text-ink mb-3 leading-[1.2]">
          以科研实力<br />保障每一份<em className="not-italic text-sage">处方安全</em>
        </h2>
        <p className="text-[14px] sm:text-[15px] text-ink-soft font-light mb-8 sm:mb-10">
          服务全美执业医师 · 高效、专业、稳定
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center flex-wrap max-w-md sm:max-w-none mx-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-sage text-white text-[14px] font-medium px-8 py-3.5 rounded-full no-underline transition-colors duration-200 hover:bg-sage-light"
          >
            进入商城 <ArrowIcon />
          </Link>
          <Link
            href="/innovation"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-sage text-[14px] font-medium px-8 py-3.5 rounded-full border-[1.5px] border-sage no-underline transition-all duration-200 hover:bg-sage hover:text-white"
          >
            产品创新 <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
