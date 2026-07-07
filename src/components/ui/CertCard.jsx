export default function CertCard({ title, issuer, year, url }) {
  return (
    <div className="border border-ink/10 p-6 flex flex-col gap-2 transition-colors duration-200 hover:border-ink/30">
      <h3 className="font-serif text-lg font-bold text-ink leading-snug">{title}</h3>
      <p className="text-sm text-ink/70">{issuer}</p>
      <p className="text-sm text-ink/50">{year}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-sm uppercase tracking-wide text-ink underline underline-offset-4 hover:text-ink/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        View credential ↗
      </a>
    </div>
  )
}
