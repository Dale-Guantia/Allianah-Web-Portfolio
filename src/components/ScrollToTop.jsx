import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Router doesn't reset scroll on navigation. Jump instantly rather than
// window.scrollTo(0, 0), which would animate under the global smooth-scroll
// CSS and visibly scroll up the old page before the new one renders.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
