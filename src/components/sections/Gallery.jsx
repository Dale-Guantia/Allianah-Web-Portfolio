import SectionHeading from '../ui/SectionHeading.jsx'
import InstaxCard from '../ui/InstaxCard.jsx'
import { collections } from '../../data/collections.js'

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20 sm:py-24">
      <SectionHeading
        id="gallery-heading"
        title="Film Gallery"
        subtitle="I shoot on an Instax Mini Evo. I take pictures when I remember to."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-1 sm:px-2">
        {collections.map((collection, index) => (
          <InstaxCard
            key={collection.id}
            id={collection.id}
            cover={collection.cover}
            alt={`Cover photo for the ${collection.label} collection`}
            label={collection.label}
            kind={collection.kind}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
