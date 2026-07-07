const LINKS = [
  {
    label: 'Email',
    href: 'mailto:allifradj@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8.24h4.5V23H.22V8.24zM8.24 8.24h4.32v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.86c0-1.64-.03-3.75-2.29-3.75-2.29 0-2.64 1.79-2.64 3.63V23h-4.5V8.24z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="py-10 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink/60">
      <p>&copy; 2026 Allianah Fradejas. All Rights Reserved.</p>
      <ul className="flex items-center gap-6">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              className="block text-ink/60 hover:text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
