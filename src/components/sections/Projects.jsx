import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'

const PROJECTS = [
  {
    seed: 'project-ledger',
    caption: 'Ledger — a budgeting app that doesn’t nag',
    alt: 'Screenshot of the Ledger budgeting app interface',
  },
  {
    seed: 'project-grove',
    caption: 'Grove — booking flow for a plant nursery',
    alt: 'Screenshot of the Grove booking flow',
  },
  {
    seed: 'project-signal',
    caption: 'Signal — internal dashboard, rebuilt from scratch',
    alt: 'Screenshot of the Signal internal dashboard',
  },
  {
    seed: 'project-marlow',
    caption: 'Marlow & Co. — brand identity for a coffee roaster',
    alt: 'Brand identity mockup for Marlow & Co. coffee roaster',
  },
]

export default function Projects() {
  return (
    <section id="selected-work" aria-labelledby="selected-work-heading" className="py-10 sm:py-14">
      <SectionHeading id="selected-work-heading" title="Selected Work" level="h1" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.seed}
            image={`https://picsum.photos/seed/${project.seed}/480/360`}
            alt={project.alt}
            caption={project.caption}
          />
        ))}
      </div>
    </section>
  )
}
