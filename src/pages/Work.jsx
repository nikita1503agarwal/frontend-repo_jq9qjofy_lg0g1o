import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

const projects = [
  { name: 'Northframe', note: 'Brand + Web', color: 'from-blue-100 to-white' },
  { name: 'Clearline', note: 'Product Design', color: 'from-white to-blue-100' },
  { name: 'Rapidly', note: 'Site Build', color: 'from-blue-50 to-blue-100' },
  { name: 'Brightpay', note: 'Brand Refresh', color: 'from-blue-100 to-white' },
  { name: 'Flowbit', note: 'Landing + Content', color: 'from-white to-blue-100' },
  { name: 'Timely', note: 'UI System', color: 'from-blue-50 to-blue-100' },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Work</h1>
          <p className="mt-3 text-slate-600">Even spacing and tidy grid lines.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-all hover:scale-[1.01]">
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.color}`} />
                <div className="p-4">
                  <div className="text-sm text-slate-500">{p.note}</div>
                  <div className="font-semibold text-slate-900">{p.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
