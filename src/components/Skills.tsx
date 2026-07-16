import { skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

// Explicit class maps so Tailwind's compiler can see every class name literally.
const cardBorder: Record<string, string> = {
  teal: 'border-t-teal',
  indigo2: 'border-t-indigo2',
  coral: 'border-t-coral',
  violet: 'border-t-violet',
}
const labelColor: Record<string, string> = {
  teal: 'text-teal',
  indigo2: 'text-indigo2',
  coral: 'text-coral',
  violet: 'text-violet',
}
const tagHover: Record<string, string> = {
  teal: 'hover:bg-teal hover:border-teal hover:text-white',
  indigo2: 'hover:bg-indigo2 hover:border-indigo2 hover:text-white',
  coral: 'hover:bg-coral hover:border-coral hover:text-white',
  violet: 'hover:bg-violet hover:border-violet hover:text-white',
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading
          fieldLabel="df.skills"
          title="Skills"
          subtitle="Grouped the way I actually use them — languages I write, ML & NLP concepts I apply, tools I analyze data with, and the core concepts tying it together."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className={`rounded-lg border border-t-[3px] border-line bg-card p-5 ${cardBorder[group.color]}`}
            >
              <h4 className={`mb-3.5 font-mono text-[12.5px] lowercase ${labelColor[group.color]}`}>
                {group.label}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded border border-line bg-paper px-2.5 py-1.5 text-[12.5px] font-medium text-[#2C343A] transition-colors ${tagHover[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
