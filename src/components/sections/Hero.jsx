import Button from '../ui/Button.jsx'

export default function Hero() {
  return (
    <section id="hero" className="py-20 sm:py-24 text-center flex flex-col items-center">
      <img
        src="https://picsum.photos/seed/maya-avatar/240/240"
        alt="Portrait"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover grayscale mb-8"
      />
      <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ink max-w-3xl leading-tight">
        Hi, I&apos;m Allianah. I design things people actually use.
      </h1>
      <div className="mt-10">
        <Button href="#selected-work">See My Work</Button>
      </div>
    </section>
  )
}
