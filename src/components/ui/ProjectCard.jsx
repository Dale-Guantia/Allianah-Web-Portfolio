export default function ProjectCard({ image, alt, caption }) {
  return (
    <div className="group">
      <div className="aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 font-serif font-bold text-lg text-ink">{caption}</p>
    </div>
  )
}
