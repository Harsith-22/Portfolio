import { about } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-t border-line py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading fieldLabel="df.about" title="About Me" />
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-[15.5px] leading-relaxed text-[#39424A]">
                {p}
              </p>
            ))}
          </div>
          <div className="overflow-hidden rounded-lg border border-line bg-card">
            {about.stats.map((row, i) => (
              <div
                key={i}
                className={`flex justify-between px-[18px] py-4 text-sm ${
                  i !== about.stats.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <span className="font-mono text-[12.5px] text-muted">{row.k}</span>
                <span className="font-semibold">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
