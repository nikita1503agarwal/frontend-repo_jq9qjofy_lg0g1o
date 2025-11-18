import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import { ContactSection } from '../components/Sections'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  )
}
