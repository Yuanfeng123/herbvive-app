import Navbar from '@/components/Navbar'
import TickerBar from '@/components/TickerBar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Formula from '@/components/Formula'
import HomeVideos from '@/components/HomeVideos'
import Process from '@/components/Process'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <Navbar />
      <TickerBar />
      <main>
        <Hero />
        <Products />
        <Formula />
        <HomeVideos />
        <Process />
        <CTA />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
