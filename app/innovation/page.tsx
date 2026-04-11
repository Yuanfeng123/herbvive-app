import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import InnovationHero from '@/components/innovation/InnovationHero'
import TechInnovation from '@/components/innovation/TechInnovation'
import CompareTable from '@/components/innovation/CompareTable'
import Production from '@/components/innovation/Production'
import ClinicalData from '@/components/innovation/ClinicalData'
import InnovationCTA from '@/components/innovation/InnovationCTA'

export const metadata = {
  title: '产品创新 · HERBVIVE 美国康仁堂',
  description: '以创新驱动产品升级，推动中药产业高质量发展。',
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
