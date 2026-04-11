import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import QualityHero from '@/components/quality/QualityHero'
import Timeline from '@/components/quality/Timeline'
import QualitySystem from '@/components/quality/QualitySystem'
import Science from '@/components/quality/Science'
import OutputGuarantee from '@/components/quality/OutputGuarantee'
import QualityCTA from '@/components/quality/QualityCTA'

export const metadata = {
  title: '质量保证 · HERBVIVE 美国康仁堂',
  description: '以科技创新推动中药标准化，以严格质控保障用药安全。',
}

export default function QualityPage() {
  return (
    <>
      <Navbar activePath="/quality" />
      <main>
        <QualityHero />
        <QualitySystem />
        <Timeline />
        <Science />
        <OutputGuarantee />
        <QualityCTA />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
