import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Process from './pages/Process'
import Why from './pages/Why'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/process" element={<Process />} />
      <Route path="/why" element={<Why />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
