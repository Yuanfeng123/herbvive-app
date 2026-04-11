const videos = [
  {
    title: '智能配方系统',
    subtitle: '快速搜索颗粒，自动计算浓缩比与价格',
    src: '/智能配方系统-快速搜索颗粒，自动计算浓缩比与价格.mp4',
  },
  {
    title: '协定方一键下单',
    subtitle: '常用方直接下单，无需重复操作，高效便捷',
    src: '/协定方一键下单-常用方直接下单，无需重复操作，高效便捷.mp4',
  },
  {
    title: '单位颗粒灵活分装',
    subtitle: '满足您的个性化需求',
    src: '/单位颗粒灵活分装-满足您的个性化需求.mp4',
  },
]

export default function HomeVideos() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12 reveal">
          <p className="text-[11px] tracking-[0.12em] uppercase text-sage font-medium mb-3">
            Product Demo · 功能演示
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,48px)] font-light text-ink leading-[1.2]">
            平台核心功能视频
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 reveal">
          {videos.map((item) => (
            <article
              key={item.src}
              className="bg-sage-ultra border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-[16/10] bg-black">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-[15px] font-medium text-ink mb-1">{item.title}</h3>
                <p className="text-[13px] text-ink-soft leading-[1.6]">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
