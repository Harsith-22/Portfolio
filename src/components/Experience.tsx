import { experience } from '../data/profile'
import SectionHeading from './SectionHeading'

const dotColor: Record<string, string> = {
  teal: 'bg-teal border-teal-soft',
  violet: 'bg-violet border-violet-soft',
}
const orgColor: Record<string, string> = {
  teal: 'text-teal',
  violet: 'text-violet',
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading fieldLabel="df.experience" title="Experience" />
        <div className="relative pl-7">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-line" />
          {experience.map((item, i) => (
            <div key={item.role} className={`relative ${i !== experience.length - 1 ? 'pb-9' : ''}`}>
              <div
                className={`absolute -left-7 top-1 h-2.5 w-2.5 rounded-full border-[3px] ${dotColor[item.color]}`}
              />
              <h3 className="text-[17px] font-bold">{item.role}</h3>
              <p className={`mb-2.5 mt-0.5 font-mono text-[12.5px] ${orgColor[item.color]}`}>{item.org}</p>
              <p className="max-w-[64ch] text-[14.5px] leading-relaxed text-[#39424A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
