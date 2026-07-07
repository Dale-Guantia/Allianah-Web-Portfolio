const LINKS = [
  { label: 'Email', href: 'mailto:allifradj@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
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
              className="hover:text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
