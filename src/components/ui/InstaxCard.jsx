import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView.js'

// Tilt only applies from sm and up — on narrow screens the rotated corner + shadow
// have too little clearance from the viewport edge and can look clipped.
const ROTATIONS = ['sm:-rotate-3', 'sm:rotate-2', 'sm:-rotate-1', 'sm:rotate-3']

const FLOAT_DELAYS = [
  '[animation-delay:0ms]',
  '[animation-delay:400ms]',
  '[animation-delay:800ms]',
  '[animation-delay:1200ms]',
]

const REVEAL_DELAYS = [
  '[transition-delay:0ms]',
  '[transition-delay:80ms]',
  '[transition-delay:160ms]',
  '[transition-delay:240ms]',
  '[transition-delay:320ms]',
  '[transition-delay:400ms]',
  '[transition-delay:480ms]',
  '[transition-delay:560ms]',
]

export default function InstaxCard({ id, cover, alt, label, kind, index }) {
  const [ref, isInView] = useInView({ threshold: 0.25 })

  const rotation = ROTATIONS[index % ROTATIONS.length]
  const floatDelay = FLOAT_DELAYS[index % FLOAT_DELAYS.length]
  const revealDelay = REVEAL_DELAYS[index % REVEAL_DELAYS.length]
  const icon = kind === 'date' ? '🗓️' : '📍'

  return (
    <Link
      ref={ref}
      to={`/gallery/${id}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
    >
      <div className={`motion-safe:animate-float ${floatDelay}`}>
        <div
          className={`bg-white border border-ink/10 shadow-md p-2 pb-8 transition-all duration-300 ease-out motion-safe:group-hover:rotate-0 motion-safe:group-hover:scale-[1.03] motion-safe:group-hover:shadow-xl motion-reduce:rotate-0 cursor-pointer ${rotation}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <img
              src={cover}
              alt={alt}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-700 ease-out motion-reduce:grayscale-0 motion-reduce:blur-0 motion-reduce:opacity-100 group-hover:grayscale-0 group-hover:blur-0 group-hover:opacity-100 group-focus-visible:grayscale-0 group-focus-visible:blur-0 group-focus-visible:opacity-100 ${revealDelay} ${
                isInView ? 'grayscale-0 blur-0 opacity-100' : 'grayscale blur-[1px] opacity-90'
              }`}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
          <div className="pt-3 flex items-center justify-center gap-1.5 font-hand text-ink">
            <span aria-hidden="true">{icon}</span>
            <span className="text-lg leading-none">{label}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
