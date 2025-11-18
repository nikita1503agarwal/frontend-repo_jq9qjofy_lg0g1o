import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import { WhyCards } from '../components/Sections'

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <WhyCards />
      <Footer />
    </div>
  )
}
