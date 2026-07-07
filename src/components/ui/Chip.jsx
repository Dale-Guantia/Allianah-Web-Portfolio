import { Link } from 'react-router-dom'

export default function Chip({ to, label, icon, active }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
        active
          ? 'bg-black text-white border-black'
          : 'bg-transparent text-ink border-ink/30 hover:border-ink'
      }`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </Link>
  )
}
