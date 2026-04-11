const rows = [
  {
    label: '制粒方式',
    a: '直接将提取干粉在压力作用下压缩成颗粒，无需加黏合剂或辅料',
    b: '需要加入淀粉、糊精、蔗糖等黏合剂形成「湿软块」，再干燥成颗粒',
  },
  {
    label: '辅料使用',
    a: '98%品种无辅料（西梅，枸杞等难成型的添加极少量辅料），不添加糖、淀粉等物质',
    b: '含辅料，通常添加5–20%不等的糖或淀粉',
  },
  {
    label: '活性成分保留',
    a: '活性成分完整保留，无因高温干燥或辅料反应而损失',
    b: '高温干燥易破坏部分热敏成分，辅料可能影响溶出率',
  },
  {
    label: '颗粒稳定性',
    a: '纯度高、吸湿性低、溶出快',
    b: '含糖淀粉易吸潮、易结块，溶出较慢',
  },
  {
    label: '口感与颜色',
    a: '味道接近传统煎煮汤剂，颜色自然深',
    b: '味道偏甜、颜色偏浅',
  },
  {
    label: '适用人群',
    a: '糖尿病、低糖饮食者可安全使用',
    b: '不适合糖尿病或需控糖人群',
  },
]

export default function CompareTable() {
  return (
    <section className="bg-sage-ultra py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            Comparison · 技术对比
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink mb-4 leading-[1.2]">
            康仁堂工艺优势对比
          </h2>
          <p className="text-[15px] text-ink-soft font-light leading-[1.75]">
            从制备方式到临床应用，全方位对比两种主流制剂形式的优劣。
          </p>
        </div>

        <div className="mt-10 sm:mt-12 rounded-2xl border border-border overflow-hidden reveal bg-white">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 px-6 text-[12px] font-medium tracking-[0.06em] uppercase bg-mist text-ink-soft text-left w-[22%]">
                  对比项目
                </th>
                <th className="p-4 px-6 text-[12px] font-medium tracking-[0.06em] uppercase bg-sage text-white">
                  干法制粒（康仁堂）
                </th>
                <th className="p-4 px-6 text-[12px] font-medium tracking-[0.06em] uppercase bg-[#e8eef4] text-ink-soft">
                  湿法制粒（多数厂商）
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
