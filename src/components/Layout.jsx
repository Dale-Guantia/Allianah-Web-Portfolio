import { Outlet } from 'react-router-dom'
import Nav from './sections/Nav.jsx'
import Footer from './sections/Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <div className="px-4 sm:px-8 py-6">
        <div className="max-w-[1040px] mx-auto px-6 sm:px-12">
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
