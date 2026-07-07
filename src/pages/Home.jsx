import Nav from '../components/sections/Nav.jsx'
import Hero from '../components/sections/Hero.jsx'
import AboutServices from '../components/sections/AboutServices.jsx'
import PullQuote from '../components/sections/PullQuote.jsx'
import Projects from '../components/sections/Projects.jsx'
import Certifications from '../components/sections/Certifications.jsx'
import Gallery from '../components/sections/Gallery.jsx'
import Contact from '../components/sections/Contact.jsx'
import Footer from '../components/sections/Footer.jsx'
import useScrollToHash from '../hooks/useScrollToHash.js'

export default function Home() {
  useScrollToHash()

  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <div className="px-4 sm:px-8 py-6">
        <div className="max-w-[1040px] mx-auto px-6 sm:px-12">
          <main>
            <Hero />
            <AboutServices />
            <PullQuote
              quote="Maya shipped in three weeks what our team had been stuck on for a year. She just gets it."
              attribution="— Dana Cruz, Head of Product at Northwind"
            />
            <Projects />
            <Certifications />
            <Gallery />
            <PullQuote
              quote="She asks the questions nobody else thought to ask, then answers them with the design."
              attribution="— Ravi Menon, Founder at Grove"
            />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
