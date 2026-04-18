import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('BrandPage')
  return {
    title: t('title'),
    description: t('description'),
  }
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
