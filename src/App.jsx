import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SelectedWork from './pages/SelectedWork.jsx'
import Certifications from './pages/Certifications.jsx'
import Gallery from './pages/Gallery.jsx'
import CollectionPage from './pages/CollectionPage.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/selected-work" element={<SelectedWork />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:collectionId" element={<CollectionPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
