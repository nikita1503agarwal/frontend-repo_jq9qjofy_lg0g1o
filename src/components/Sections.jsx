import { motion } from 'framer-motion'
import { Brush, Code2, Megaphone, Camera, CheckCircle2, LayoutGrid, Rocket, Users, Zap } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-slate-900">Focused, calm, and clear design</h2>
          <p className="mt-4 text-slate-600">Flyvise is a creative studio building tidy brands, modern websites and sharp content. We keep the work simple, clean and fast so your message is easy to understand.</p>
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/60 shadow-sm" />
          <div className="absolute inset-4 rounded-2xl border border-blue-300/40" />
        </motion.div>
      </div>
    </section>
  )
}

const serviceList = [
  { icon: Brush, title: 'Brand & Design', text: 'Logos, identity, guides and product design.' },
  { icon: Code2, title: 'Web & App', text: 'UI/UX, website build, WordPress & Shopify.' },
  { icon: Megaphone, title: 'Digital Growth', text: 'Content, social, email and basic SEO.' },
  { icon: Camera, title: 'Photo & Video', text: 'Product, corporate and media edits.' },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">What we do</h2>
          <p className="mt-2 text-slate-600">Simple services that ship quality work.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-blue-50 text-blue-600 border border-blue-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WorkHighlight() {
  const projects = [
    { name: 'Northframe', note: 'Brand + Web', color: 'from-blue-100 to-white' },
    { name: 'Clearline', note: 'Product Design', color: 'from-white to-blue-100' },
    { name: 'Rapidly', note: 'Site Build', color: 'from-blue-50 to-blue-100' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Selected work</h2>
          <p className="mt-2 text-slate-600">Clean frames, simple interfaces.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.name} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.color}`} />
              <div className="p-4">
                <div className="text-sm text-slate-500">{p.note}</div>
                <div className="font-semibold text-slate-900">{p.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600" />
            <span className="font-bold text-slate-900">Flyvise</span>
          </div>
          <p className="mt-3 text-slate-600 text-sm">Modern, minimalist creative studio. Design, web and content with a calm, clear style.</p>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold text-slate-900 mb-2">Links</div>
          <ul className="space-y-1">
            <li><a className="hover:text-blue-600" href="/services">Services</a></li>
            <li><a className="hover:text-blue-600" href="/work">Work</a></li>
            <li><a className="hover:text-blue-600" href="/process">Process</a></li>
            <li><a className="hover:text-blue-600" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <div className="font-semibold text-slate-900 mb-2">Contact</div>
          <p>hello@flyvise.studio</p>
          <p>+1 (555) 123-4567</p>
          <div className="flex items-center gap-3 mt-3 text-slate-500">
            <span className="sr-only">Socials</span>
            <div className="h-6 w-6 rounded-md border border-slate-200" />
            <div className="h-6 w-6 rounded-md border border-slate-200" />
            <div className="h-6 w-6 rounded-md border border-slate-200" />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 text-xs text-slate-500 py-4 text-center">© {new Date().getFullYear()} Flyvise Studio</div>
    </footer>
  )
}

export function WhyCards() {
  const reasons = [
    { icon: Users, title: 'Direct access', text: 'Talk with the core team, stay close to the work.' },
    { icon: Zap, title: 'Fast feedback', text: 'Short loops, tight edits, quick delivery.' },
    { icon: Rocket, title: 'Fair pricing', text: 'Clear scope and scalable packages.' },
    { icon: LayoutGrid, title: 'Wide skill set', text: 'Brand, web, content and media in one place.' },
  ]
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Why choose us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, text }) => (
            <motion.div key={title} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-blue-50 text-blue-600 border border-blue-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-slate-900">Work with us</h2>
          <p className="mt-2 text-slate-600">Tell us about your project and we’ll get back quickly.</p>
          <form className="mt-8 grid sm:grid-cols-2 gap-4">
            <input className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Name" />
            <input className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Email" />
            <input className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Phone" />
            <div className="sm:col-span-2">
              <textarea rows="5" className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Message" />
            </div>
            <button className="sm:col-span-2 inline-flex justify-center rounded-xl px-6 py-3 bg-blue-600 text-white font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">Send Message</button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="font-semibold text-slate-900">Email</div>
            <div className="text-slate-600">hello@flyvise.studio</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="font-semibold text-slate-900">Phone</div>
            <div className="text-slate-600">+1 (555) 123-4567</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="font-semibold text-slate-900">Connect</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg border border-slate-200" />
              <div className="h-8 w-8 rounded-lg border border-slate-200" />
              <div className="h-8 w-8 rounded-lg border border-slate-200" />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 grid place-items-center">
            <div className="h-28 w-28 rounded-xl border border-dashed border-slate-300" />
            <div className="mt-2 text-xs text-slate-500">QR code</div>
          </div>
        </div>
      </div>
    </section>
  )
}
