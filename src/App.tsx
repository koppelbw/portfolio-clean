import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Grain from './components/Grain'
import Home from './pages/Home'
import Career from './pages/Career'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Pages() {
  const { pathname } = useLocation()
  return (
    <main className="page" key={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Grain />
      <Nav />
      <Pages />
      <Footer />
    </HashRouter>
  )
}
