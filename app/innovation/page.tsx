import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import InnovationHero from '@/components/innovation/InnovationHero'
import TechInnovation from '@/components/innovation/TechInnovation'
import CompareTable from '@/components/innovation/CompareTable'
import Production from '@/components/innovation/Production'
import ClinicalData from '@/components/innovation/ClinicalData'
import InnovationCTA from '@/components/innovation/InnovationCTA'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('InnovationPage')
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function InnovationPage() {
  return (
    <>
      <Navbar activePath="/innovation" />
      <main>
        <InnovationHero />
        <TechInnovation />
        <CompareTable />
        <Production />
        <ClinicalData />
        <InnovationCTA />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
