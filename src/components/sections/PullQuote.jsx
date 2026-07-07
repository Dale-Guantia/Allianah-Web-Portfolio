export default function PullQuote({ quote, attribution }) {
  return (
    <section aria-label="Testimonial" className="py-10 sm:py-14">
      <blockquote className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl italic text-ink leading-snug">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-6 text-sm text-ink/60">{attribution}</p>
      </blockquote>
    </section>
  )
}
