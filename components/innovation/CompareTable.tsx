import { getTranslations } from 'next-intl/server'

export default async function CompareTable() {
  const t = await getTranslations('CompareTable')
  const rows = t.raw('rows') as { label: string; a: string; b: string }[]

  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
            {t('heading')}
          </h2>
          <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
            {t('sub')}
          </p>
        </div>

        <div className="mt-10 sm:mt-12 rounded-2xl border border-border overflow-hidden reveal bg-white">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 px-6 text-[12px] font-medium tracking-[0.06em] uppercase bg-mist text-ink-soft text-left w-[22%]">
                  {t('colLabel')}
                </th>
                <th className="p-4 px-6 text-[12px] font-medium tracking-[0.06em] uppercase bg-sage text-white">
                  {t('colA')}
                </th>
                <th className="p-4 px-6 text-[12px] font-medium tracking-[0.06em] uppercase bg-[#e8eef4] text-ink-soft">
                  {t('colB')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="p-4 px-6 text-[12px] font-medium text-ink bg-mist border-t border-border align-top leading-[1.6]">
                    {row.label}
                  </td>
                  <td className="p-4 px-6 text-[13px] text-ink-soft bg-white border-t border-border align-top leading-[1.6]">
                    {row.a}
                  </td>
                  <td className="p-4 px-6 text-[13px] text-ink-soft bg-[#f5f8fc] border-t border-border align-top leading-[1.6]">
                    {row.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  )
}
