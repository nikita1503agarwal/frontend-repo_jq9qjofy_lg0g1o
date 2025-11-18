import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

const groups = [
  {
    title: 'Brand & Design',
    items: ['Logo', 'Identity', 'Brand guide', 'Product, print and digital design'],
  },
  {
    title: 'Web & App',
    items: ['Website UI', 'Website build', 'App UI', 'WordPress, Shopify, custom work'],
  },
  {
    title: 'Digital Growth',
    items: ['Content', 'Social media', 'Email', 'Basic SEO'],
  },
  {
    title: 'Photo & Video',
    items: ['Product shots', 'Corporate shots', 'Media edits'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Services</h1>
          <p className="mt-3 text-slate-600">Equal cards, blue accents and clear headings.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all">
                <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200" />
                <h3 className="mt-4 font-semibold text-slate-900">{g.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
