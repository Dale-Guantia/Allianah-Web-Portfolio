import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash || hash === '#hero') {
      window.scrollTo({ top: 0 })
      return
    }

    const el = document.getElementById(hash.slice(1))
    el?.scrollIntoView({ block: 'start' })
  }, [hash])
}
