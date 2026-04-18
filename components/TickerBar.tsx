'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const T_MIN = 100
const T_MAX = 200
const AVG_MIN = 10
const AVG_MAX = 20

function dispensingBounds(T: number) {
  const dMin = Math.floor(T / 2) + 1
  return { dMin, dMax: T }
}

/** 排队 + 正在调配 = 今日开方数，且 排队 < 正在调配（故 D > T/2） */
function randomDQForT(T: number) {
  const b = dispensingBounds(T)
  const D = b.dMin + Math.floor(Math.random() * (b.dMax - b.dMin + 1))
  return { D, Q: T - D }
}

function randomInitial() {
  const T = T_MIN + Math.floor(Math.random() * (T_MAX - T_MIN + 1))
  const { D, Q } = randomDQForT(T)
  const avgMins = AVG_MIN + Math.floor(Math.random() * (AVG_MAX - AVG_MIN + 1))
  return { D, Q, T, avgMins }
}

/** 与 randomInitial 同约束；固定值保证 SSR 与首帧客户端一致，避免 hydration 不匹配 */
const SSR_METRICS = { D: 82, Q: 74, T: 156, avgMins: 15 }

type StockItem = { name: string; tag: string }

type MetricRow = { prefixKey: string; suffixKey: string; value: number }

const metricAccentClass =
  'text-[#6fcf97] font-medium tabular-nums text-[10px] sm:text-[11px]'

export default function TickerBar() {
  const t = useTranslations('TickerBar')
  const items = t.raw('items') as StockItem[]
  const [{ D, Q, T, avgMins }, setMetrics] = useState(() => SSR_METRICS)

  useEffect(() => {
    setMetrics(randomInitial())

    const id = window.setInterval(() => {
      setMetrics((prev) => {
        const roll = Math.random()
        let { D, Q, T, avgMins } = prev

        if (roll < 0.2 && T < T_MAX) {
          T += 1
          D += 1
          Q = T - D
        } else if (roll < 0.26 && T > T_MIN) {
          T -= 1
          const pair = randomDQForT(T)
          D = pair.D
          Q = pair.Q
        } else if (roll < 0.52) {
          const delta = Math.random() < 0.5 ? -1 : 1
          let nextD = D + delta
          const b = dispensingBounds(T)
          nextD = Math.min(b.dMax, Math.max(b.dMin, nextD))
          D = nextD
          Q = T - D
        } else if (roll < 0.64 && avgMins > AVG_MIN) {
          avgMins -= 1
        } else if (roll < 0.74 && avgMins < AVG_MAX) {
          avgMins += 1
        }

        return { D, Q, T, avgMins }
      })
    }, 4200 + Math.floor(Math.random() * 2800))

    return () => window.clearInterval(id)
  }, [])

  const metricRows: MetricRow[] = [
    { prefixKey: 'lineDispensingPrefix', suffixKey: 'lineDispensingSuffix', value: D },
    { prefixKey: 'lineQueuePrefix', suffixKey: 'lineQueueSuffix', value: Q },
    { prefixKey: 'lineTodayRxPrefix', suffixKey: 'lineTodayRxSuffix', value: T },
    { prefixKey: 'lineAvgTimePrefix', suffixKey: 'lineAvgTimeSuffix', value: avgMins },
  ]
  const track = [...metricRows, ...items.map((item) => ({ kind: 'stock' as const, item }))]
  const allCells = [...track, ...track]

  return (
    <div className="fixed top-[72px] left-0 right-0 z-[190] h-9 sm:h-9 bg-ink text-white flex items-center overflow-hidden border-b border-sage/35">
      <div className="flex-shrink-0 px-2.5 sm:px-4 h-full flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-medium tracking-[0.08em] sm:tracking-[0.1em] uppercase text-sage-light bg-sage/18 border-r border-sage/25 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-sage-light animate-blink flex-shrink-0" />
        <span className="sm:hidden">{t('queueMobile')}</span>
        <span className="hidden sm:inline">{t('queueDesktop')}</span>
      </div>

      <div className="flex-1 min-w-0 overflow-hidden text-white">
        <div className="flex whitespace-nowrap animate-ticker ticker-track text-white">
          {allCells.map((cell, i) =>
            'prefixKey' in cell ? (
              <div
                key={i}
                className="inline-flex items-center px-4 sm:px-7 text-[10px] sm:text-[11px] font-mono border-r border-white/10"
              >
                <span className="text-white/95">{t(cell.prefixKey)}</span>
                <span className={metricAccentClass}>{cell.value}</span>
                {t(cell.suffixKey) ? (
                  <span className={metricAccentClass}>{t(cell.suffixKey)}</span>
                ) : null}
              </div>
            ) : (
              <div
                key={i}
                className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-7 text-[10px] sm:text-[11px] font-mono border-r border-white/10"
              >
                <span className="text-white/95">{cell.item.name}</span>
                <span className="text-sage-light font-medium">{t('inStock')}</span>
                <span className="text-[#6fcf97] text-[10px]">{cell.item.tag}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
