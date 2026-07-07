import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#selected-work', label: 'Selected Work' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
]

// Swap this path (or the file at public/resume.pdf) to update the resume link.
const RESUME_HREF = '/resume.pdf'

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  )
}

export default function Nav() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const currentHash = location.pathname === '/' ? location.hash || '#hero' : ''

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-cream/60">
      <nav
        className="max-w-[1040px] mx-auto px-4 sm:px-12 flex items-center justify-between gap-x-6 py-4"
        aria-label="Primary"
      >
        <Link to="/#hero" className="shrink-0 font-serif text-lg sm:text-xl font-bold text-ink">
          Allianah Fradejas
        </Link>

        <div className="hidden md:flex flex-wrap items-center justify-end gap-x-5 gap-y-2 sm:gap-x-6">
          <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6 text-xs uppercase tracking-wide">
            {LINKS.map((link) => {
              const isActive = currentHash === link.href.slice(1)
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`pb-1 border-b-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                      isActive ? 'border-ink text-ink' : 'border-transparent text-ink/70 hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-black text-white text-xs font-medium tracking-widest rounded-full px-4 py-2 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden shrink-0 p-2 -mr-2 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-6 pt-2 border-t border-ink/10">
          <ul className="flex flex-col items-start gap-4 text-sm uppercase tracking-wide">
            {LINKS.map((link) => {
              const isActive = currentHash === link.href.slice(1)
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`pb-1 border-b-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                      isActive ? 'border-ink text-ink' : 'border-transparent text-ink/70 hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-5 inline-block bg-black text-white text-xs font-medium tracking-widest rounded-full px-4 py-2 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  )
}
