const SERVICES = ['Product design', 'Design systems', 'Prototyping', 'User research', 'Brand & identity']

export default function AboutServices() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-10 sm:py-14">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 id="about-heading" className="font-serif text-3xl sm:text-4xl font-bold text-ink mb-6">
            About
          </h1>
          <p className="text-base sm:text-lg text-ink/80 leading-relaxed mb-8">
            I&apos;m a product designer based in Manila. I&apos;ve spent the last six years turning
            messy problems into clear, simple products. I like tight deadlines, strong opinions
            loosely held, and interfaces that get out of the way. When I&apos;m not working I&apos;m
            usually swimming or losing at chess.
          </p>
          <ul className="space-y-2">
            {SERVICES.map((service) => (
              <li key={service} className="text-ink/80 border-b border-ink/10 pb-2">
                {service}
              </li>
            ))}
          </ul>
        </div>
        <img
          src="https://picsum.photos/seed/maya-about/640/720"
          alt="sketching a wireframe"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </section>
  )
}
