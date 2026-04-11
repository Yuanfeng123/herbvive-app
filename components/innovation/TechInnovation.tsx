import Link from 'next/link'
import { PROFESSIONAL_PORTAL_URL } from '@/lib/professionalPortal'

function SpectrumLine({
  label, sublabel, pct, highlightPct, color = '#4a7c59', bg = 'bg-mist', border = 'border-border',
  path, fillOpacity,
}: {
  label: string; sublabel?: string; pct?: string; highlightPct?: boolean
  color?: string
  bg?: string; border?: string; path: string; fillOpacity: string
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center gap-3 mb-1.5">
        <span className={`text-[11px] tracking-[0.04em] min-w-0 ${pct ? 'font-medium' : ''}`}
          style={{ color: pct ? color : '#3d5046' }}>
          {label}
        </span>
        {pct && (
          highlightPct ? (
            (() => {
              const m = pct.match(/^(\d+)(.*)$/)
              const num = m?.[1] ?? pct
              const rest = (m?.[2] ?? '').trim()
              return (
                <span
                  className="shrink-0 inline-flex items-baseline rounded-full bg-sage px-3 py-1 text-white shadow-md ring-2 ring-sage/25 tabular-nums"
                  aria-label={`转移率 ${pct}`}
                >
                  <span className="text-[17px] sm:text-[19px] font-bold leading-none tracking-tight">{num}</span>
                  {rest ? (
                    <span className="text-[11px] sm:text-xs font-semibold opacity-95 ml-px translate-y-px">{rest}</span>
                  ) : null}
                </span>
              )
            })()
          ) : (
            <span className="text-[11px] font-semibold shrink-0" style={{ color }}>{pct}</span>
          )
        )}
        {sublabel && <span className="text-[11px] text-ink-soft shrink-0">{sublabel}</span>}
      </div>
      <div className={`h-14 ${bg} rounded-lg border ${border} overflow-hidden`}>
        <svg viewBox="0 0 400 56" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d={path} fill="none" stroke={color} strokeWidth="2.5" />
          <path d={`${path} L400,56 L0,56 Z`} fill={`rgba(${color === '#4a7c59' ? '74,124,89' : '148,163,184'},${fillOpacity})`} />
        </svg>
      </div>
    </div>
  )
}

export default function TechInnovation() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
              Technology · 技术创新
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-6 leading-[1.2]">
              「全成分」提取技术<br />行业首创
            </h2>

            <div className="inline-flex items-center gap-2 bg-sage text-white text-[12px] font-medium px-[18px] py-2 rounded-full mb-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              核心专利技术
            </div>

            <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
              将传统汤剂中的全部成分转移到中药配方颗粒当中。区别于市场上的单味颗粒仅提取部分成分，我们采用「全成分」提取技术，成分转移率达 98% 以上，最大限度保留有效成分，确保临床疗效。
            </p>

            <div className="bg-sage-pale border border-border rounded-xl px-6 py-5 mt-6">
              <div className="text-[14px] font-medium text-sage mb-2">「单煎=共煎一致」</div>
              <p className="text-[13px] text-ink-soft leading-[1.7] font-light">
                通过全成分提取与标准化工艺，使单味颗粒组合后接近传统汤剂的整体成分结构，从而提升临床应用的一致性与稳定性。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link href="/quality"
                className="inline-flex items-center gap-2 bg-sage text-white text-[13px] font-medium px-[22px] py-3 rounded-full no-underline hover:bg-sage-light transition-colors duration-200">
                质量体系
              </Link>
              <a href={PROFESSIONAL_PORTAL_URL}
                className="inline-flex items-center gap-2 bg-transparent text-sage text-[13px] font-medium px-[22px] py-3 rounded-full border-[1.5px] border-sage no-underline hover:bg-sage hover:text-white transition-all duration-200">
                了解更多
              </a>
            </div>
          </div>

          {/* Right — spectrum visual */}
          <div className="reveal bg-mist border border-border rounded-[20px] p-5 sm:p-6 lg:p-8">
            <p className="text-[11px] tracking-[0.08em] uppercase text-ink-soft mb-4 text-center">
              全成分转移率对比 · Component Transfer Analysis
            </p>

            <SpectrumLine
              label="传统汤剂（基准）"
              color="#4a7c59"
              bg="bg-mist"
              border="border-border"
              path="M0,50 Q40,45 60,20 Q80,5 100,15 Q120,28 140,40 Q160,48 180,35 Q200,18 220,25 Q240,34 260,28 Q280,15 300,22 Q320,32 340,40 Q360,46 380,50 L400,50"
              fillOpacity="0.1"
            />
            <SpectrumLine
              label="全成分配方颗粒（HERBVIVE）"
              pct="98%+"
              highlightPct
              color="#4a7c59"
              bg="bg-sage-pale"
              border="border-sage-mid"
              path="M0,50 Q40,44 58,19 Q78,4 98,14 Q118,27 138,39 Q158,47 178,34 Q198,17 218,24 Q238,33 258,27 Q278,14 298,21 Q318,31 338,39 Q358,45 380,49 L400,50"
              fillOpacity="0.2"
            />
            <SpectrumLine
              label="普通单味颗粒（市场同类）"
              sublabel="60–75%"
              color="#94a3b8"
              bg="bg-mist"
              border="border-border"
              path="M0,52 Q40,50 60,36 Q80,22 100,30 Q120,38 140,44 Q160,50 180,42 Q200,32 220,36 Q240,40 260,36 Q280,28 300,32 Q320,38 340,44 Q360,49 380,52 L400,52"
              fillOpacity="0.12"
            />

            <p className="text-[10px] text-ink-soft text-center tracking-[0.04em] mt-2">
              红外指纹图谱对比 — 成分吸收峰一致性验证
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
