import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import BrandHero from '@/components/brand/BrandHero'
import BrandOverview from '@/components/brand/BrandOverview'
import StatsRow from '@/components/brand/StatsRow'
import Partnership from '@/components/brand/Partnership'
import CooperationModes from '@/components/brand/CooperationModes'
import ContactCard from '@/components/brand/ContactCard'
import BrandCTA from '@/components/brand/BrandCTA'

export const metadata = {
  title: '品牌介绍 · HERBVIVE 美国康仁堂',
  description: '以科技创新和智能服务，助力中医诊所高效、安全、智能地开展中药配方颗粒临床应用。',
}

export default function BrandPage() {
  return (
    <>
      <Navbar activePath="/brand" />
      <main>
        <BrandHero />
        <BrandOverview />
        <StatsRow />
        <Partnership />
        <CooperationModes />
        <ContactCard />
        <BrandCTA />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
