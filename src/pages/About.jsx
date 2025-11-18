import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { Footer } from '../components/Sections'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">About Flyvise</h1>
            <p className="mt-4 text-slate-600">We’re a compact team with a calm, clear style. We focus on refined layouts, gentle motion and strong typography so your story is easy to read. Our process is tidy and our edits are fast.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/60 shadow-sm" />
            <div className="absolute inset-4 rounded-2xl border border-blue-300/40" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Clear work style', text: 'Simple steps, tidy communication and clean files.' },
              { title: 'Focus on clean design', text: 'Less noise, more clarity. Blue accents, soft motion.' },
              { title: 'Fast, simple comms', text: 'Direct access and quick feedback loops.' },
              { title: 'Goal-driven mindset', text: 'Every detail supports your key outcomes.' },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                <div className="h-8 w-8 rounded-lg bg-blue-50 border border-blue-200" />
                <h3 className="mt-4 font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
