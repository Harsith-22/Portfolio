import { ReactNode } from 'react'
import { CloudSun, ExternalLink, Github, Sprout } from 'lucide-react'
import { projects } from '../data/profile'
import SectionHeading from './SectionHeading'

const icons: Record<string, typeof CloudSun> = { CloudSun, Sprout }

const iconBg: Record<string, string> = {
  indigo2: 'bg-indigo2-soft text-indigo2',
  green2: 'bg-green2-soft text-green2',
}
const labelColor: Record<string, string> = {
  indigo2: 'text-indigo2',
  green2: 'text-green2',
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading fieldLabel="df.projects" title="Featured Projects" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = icons[project.icon] ?? CloudSun
            return (
              <div
                key={project.title}
                className="flex flex-col gap-3.5 rounded-xl border border-line bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-22px_rgba(17,22,26,0.25)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={`mb-1 font-mono text-[11.5px] uppercase tracking-wide ${labelColor[project.color]}`}>
                      {project.problem}
                    </p>
                    <h3 className="text-[19px] font-bold">{project.title}</h3>
                  </div>
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${iconBg[project.color]}`}>
                    <Icon size={18} />
                  </div>
                </div>

                <p className="text-[14.5px] leading-relaxed text-[#39424A]">
                  {project.description}
                </p>

                <ul className="list-disc pl-[18px] text-sm leading-relaxed text-[#39424A]">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-paper px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-1.5 flex gap-2.5">
                  <ProjectLink href={project.github} label="GitHub" icon={<Github size={14} />} />
                  <ProjectLink
                    href={project.demo}
                    label="Live Demo"
                    icon={<ExternalLink size={14} />}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectLink({
  href,
  label,
  icon,
}: {
  href: string | null
  label: string
  icon: ReactNode
}) {
  const isPlaceholder = !href
  return (
    <a
      href={href ?? '#'}
      onClick={(e) => {
        if (isPlaceholder) e.preventDefault()
      }}
      className={`inline-flex items-center gap-1.5 rounded-md border border-line px-3.5 py-2 text-[13px] font-semibold text-muted ${
        isPlaceholder ? 'cursor-default' : 'hover:border-accent hover:text-accent'
      }`}
    >
      {icon} {label}
      {isPlaceholder && (
        <span className="ml-1 rounded bg-warm-soft px-1.5 py-0.5 font-mono text-[9.5px] text-warm">
          placeholder
        </span>
      )}
    </a>
  )
}
