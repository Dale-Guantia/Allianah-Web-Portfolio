import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { collections } from '../data/collections.js'
import Chip from '../components/ui/Chip.jsx'
import InstaxFrame from '../components/ui/InstaxFrame.jsx'

export default function CollectionPage() {
  const { collectionId } = useParams()
  const collection = collections.find((c) => c.id === collectionId)
  const [featuredIndex, setFeaturedIndex] = useState(0)

  if (!collection) {
    return (
      <div className="py-10 sm:py-14 text-center">
        <h1 className="font-serif text-3xl font-bold text-ink mb-4">Roll not found</h1>
        <p className="text-ink/70 mb-8">
          That collection doesn&apos;t exist, or the film never made it back from the lab.
        </p>
        <Link to="/gallery" className="underline text-ink hover:text-ink/70">
          ← Back to gallery
        </Link>
      </div>
    )
  }

  const featured = collection.photos[featuredIndex] ?? collection.photos[0]

  return (
    <div className="py-10 sm:py-14">
      <Link
        to="/gallery"
        className="inline-block text-sm text-ink/60 hover:text-ink mb-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        ← Back to gallery
      </Link>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">Film Gallery</h1>
      <p className="mt-2 text-ink/70">
        I shoot on an Instax Mini Evo. I take pictures when I remember to.
      </p>

      <div className="flex flex-wrap gap-3 mt-8" role="group" aria-label="Filter by collection">
        {collections.map((c) => (
          <Chip
            key={c.id}
            to={`/gallery/${c.id}`}
            label={c.label}
            icon={c.kind === 'date' ? '🗓️' : '📍'}
            active={c.id === collection.id}
          />
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-[200px_1fr] gap-8">
        <div
          className="flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible md:overflow-y-auto md:max-h-[520px] p-2"
          aria-label="Photo thumbnails"
        >
          {collection.photos.map((photo, index) => (
            <button
              key={photo.src + index}
              type="button"
              onClick={() => setFeaturedIndex(index)}
              aria-pressed={index === featuredIndex}
              aria-label={`Show photo: ${photo.caption}, ${photo.location}`}
              className="shrink-0 w-24 md:w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <InstaxFrame
                src={photo.src}
                alt={`${photo.caption}, ${photo.location}`}
                size="thumb"
                active={index === featuredIndex}
              />
            </button>
          ))}
        </div>

        <div>
          <div key={featuredIndex} className="motion-safe:animate-develop max-w-md mx-auto">
            <InstaxFrame
              src={featured.src}
              alt={`${featured.caption}, ${featured.location}`}
              size="featured"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-bold text-ink">{featured.caption}</p>
            <p className="mt-1 text-sm italic text-ink/60">📍 {featured.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
