import { education } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading fieldLabel="df.education" title="Education" />
        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col justify-between gap-4 rounded-lg border border-line bg-card p-6 sm:flex-row sm:items-start"
            >
              <div>
                <h3 className="mb-1 text-base font-bold">{edu.degree}</h3>
                <p className="text-sm text-muted">{edu.school}</p>
              </div>
              <div className="whitespace-nowrap font-mono text-[12.5px] text-muted sm:text-right">
                {edu.duration}
                <span className="mt-1 block font-semibold text-accent">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
