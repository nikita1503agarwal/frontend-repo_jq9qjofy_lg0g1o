import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Intro, ServicesPreview, WorkHighlight, WhyCards, ContactSection, Footer } from '../components/Sections'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Intro />
      <ServicesPreview />
      <WorkHighlight />
      <WhyCards />
      <ContactSection />
      <Footer />
    </div>
  )
}
