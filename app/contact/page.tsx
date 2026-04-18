import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import ContactPageClient from './ContactPageClient'

export default function ContactPage() {
  return (
    <>
      <Navbar activePath="/contact" />
      <ContactPageClient />
      <Footer />
      <RevealObserver />
    </>
  )
}
