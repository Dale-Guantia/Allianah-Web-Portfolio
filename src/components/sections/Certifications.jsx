import SectionHeading from '../ui/SectionHeading.jsx'
import CertCard from '../ui/CertCard.jsx'
import { certifications } from '../../data/certifications.js'

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="py-10 sm:py-14">
      <SectionHeading id="certifications-heading" title="Certifications" level="h1" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <CertCard key={cert.title} {...cert} />
        ))}
      </div>
    </section>
  )
}
