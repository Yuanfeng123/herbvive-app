import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import QualityHero from '@/components/quality/QualityHero'
import Timeline from '@/components/quality/Timeline'
import QualitySystem from '@/components/quality/QualitySystem'
import Science from '@/components/quality/Science'
import OutputGuarantee from '@/components/quality/OutputGuarantee'
import QualityCTA from '@/components/quality/QualityCTA'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('QualityPage')
  return {
    title: t('title'),
    description: t('description'),
  }
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
