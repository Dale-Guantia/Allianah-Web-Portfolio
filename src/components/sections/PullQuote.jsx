export default function PullQuote({ quote, attribution }) {
  return (
    <section aria-label="Testimonial" className="py-20 sm:py-24">
      <blockquote className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-2xl sm:text-3xl italic text-ink leading-snug">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-6 text-sm text-ink/60">{attribution}</footer>
      </blockquote>
    </section>
  )
}
