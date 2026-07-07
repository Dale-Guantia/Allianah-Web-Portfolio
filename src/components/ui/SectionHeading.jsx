export default function SectionHeading({ id, eyebrow, title, subtitle, align = 'left', level = 'h2' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const Heading = level

  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm uppercase tracking-widest text-ink/60 mb-3">{eyebrow}</p>
      )}
      <Heading id={id} className="font-serif text-3xl sm:text-4xl font-bold text-ink">
        {title}
      </Heading>
      {subtitle && <p className="mt-4 text-base text-ink/70">{subtitle}</p>}
    </div>
  )
}
