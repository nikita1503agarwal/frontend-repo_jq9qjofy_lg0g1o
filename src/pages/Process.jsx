import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import { Lightbulb, CalendarClock, PenTool, RefreshCw, LifeBuoy } from 'lucide-react'

const steps = [
  { title: 'Understand', text: 'We clarify goals, timelines and essentials.', icon: Lightbulb },
  { title: 'Plan', text: 'We map the scope and simple milestones.', icon: CalendarClock },
  { title: 'Create', text: 'We design, build and refine the core pieces.', icon: PenTool },
  { title: 'Improve', text: 'We polish details and prepare for launch.', icon: RefreshCw },
  { title: 'Support', text: 'We stay close with updates and help.', icon: LifeBuoy },
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Process</h1>
          <p className="mt-3 text-slate-600">Simple steps with a blue line to connect.</p>
          <div className="mt-10 grid md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute left-0 right-0 top-16 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />
            {steps.map(({ title, text, icon: Icon }, i) => (
              <div key={title} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-blue-50 text-blue-600 border border-blue-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
                <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full border-2 border-white bg-blue-400 shadow" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
