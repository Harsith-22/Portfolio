import { BarChart3, Code2 } from 'lucide-react'
import { certifications } from '../data/profile'
import SectionHeading from './SectionHeading'

const icons: Record<string, typeof BarChart3> = { BarChart3, Code2 }
const iconBg: Record<string, string> = {
  gold: 'bg-gold-soft text-gold',
  indigo2: 'bg-indigo2-soft text-indigo2',
}

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading fieldLabel="df.certifications" title="Certifications & Achievements" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((cert) => {
            const Icon = icons[cert.icon] ?? Code2
            return (
              <div
                key={cert.name}
                className="flex items-center gap-3.5 rounded-lg border border-line bg-card px-5 py-4.5"
              >
                <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${iconBg[cert.color]}`}>
                  <Icon size={17} />
                </div>
                <div>
                  <p className="text-[14.5px] font-semibold">{cert.name}</p>
                  <p className="mt-0.5 text-[12.5px] text-muted">{cert.issuer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
