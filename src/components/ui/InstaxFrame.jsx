export default function InstaxFrame({ src, alt, size = 'thumb', active = false, className = '' }) {
  const chinClass = size === 'featured' ? 'pb-8 pt-3 px-3' : 'pb-4 pt-2 px-2'
  const ringClass = active ? 'ring-2 ring-black ring-offset-2 ring-offset-white' : ''

  return (
    <div
      className={`bg-white border border-ink/10 shadow-md ${chinClass} ${ringClass} transition-shadow duration-300 ${className}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover grayscale" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </div>
  )
}
