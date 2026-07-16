import { Download, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded border border-accent/30 bg-gradient-to-r from-teal-soft to-indigo2-soft px-2.5 py-1.5 font-mono text-xs text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-teal to-indigo2" />
            open to entry-level &amp; internship roles
          </span>

          <h1 className="mb-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-[56px]">
            {profile.name}
          </h1>

          <p className="mb-5 text-lg font-medium text-muted md:text-[19px]">{profile.headline}</p>

          <p className="mb-8 max-w-[52ch] text-[15.5px] leading-relaxed text-[#39424A]">
            {profile.intro}
          </p>

          <div className="mb-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Terminal size={16} /> View Projects
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} /> Contact Me
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href={profile.linkedin}
              title="LinkedIn — add your URL in src/data/profile.ts"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={profile.github}
              title="GitHub — add your URL in src/data/profile.ts"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              <Github size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              title="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <SchemaCard />
      </div>
    </section>
  )
}

function SchemaCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-ink font-mono text-[13.5px] text-[#EAF0EE] shadow-[0_30px_60px_-20px_rgba(17,22,26,0.35)]">
      <div className="flex h-9 items-center border-b border-[#262E33] bg-[#1B2126] px-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5605A]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E3B341]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#57B37C]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[11px] text-[#7C8892]">
          profile.json
        </span>
      </div>
      <pre className="whitespace-pre-wrap px-6 py-6 leading-[1.75]">
        <span className="text-[#5C6B72]">{'{'}</span>{'\n'}
        {'  '}
        <span className="text-[#7FD1B9]">"name"</span>
        <span className="text-[#5C6B72]">: </span>
        <span className="text-[#E9C77B]">"Harsith K"</span>
        <span className="text-[#5C6B72]">,</span>{'\n'}
        {'  '}
        <span className="text-[#7FD1B9]">"role"</span>
        <span className="text-[#5C6B72]">: </span>
        <span className="text-[#E9C77B]">"Aspiring Software Developer"</span>
        <span className="text-[#5C6B72]">,</span>{'\n'}
        {'  '}
        <span className="text-[#7FD1B9]">"program"</span>
        <span className="text-[#5C6B72]">: </span>
        <span className="text-[#E9C77B]">"B.Tech AI & Data Science"</span>
        <span className="text-[#5C6B72]">,</span>{'\n'}
        {'  '}
        <span className="text-[#7FD1B9]">"college"</span>
        <span className="text-[#5C6B72]">: </span>
        <span className="text-[#E9C77B]">"Nandha Engineering College"</span>
        <span className="text-[#5C6B72]">,</span>{'\n'}
        {'  '}
        <span className="text-[#7FD1B9]">"cgpa"</span>
        <span className="text-[#5C6B72]">: </span>
        <span className="text-[#8FB2E8]">8.1</span>
        <span className="text-[#5C6B72]">,</span>{'\n'}
        {'  '}
        <span className="text-[#7FD1B9]">"stack"</span>
        <span className="text-[#5C6B72]">: [</span>
        <span className="text-[#E9C77B]">"Python"</span>
        <span className="text-[#5C6B72]">, </span>
        <span className="text-[#E9C77B]">"Java"</span>
        <span className="text-[#5C6B72]">, </span>
        <span className="text-[#E9C77B]">"ML"</span>
        <span className="text-[#5C6B72]">, </span>
        <span className="text-[#E9C77B]">"SQL"</span>
        <span className="text-[#5C6B72]">],</span>{'\n'}
        {'  '}
        <span className="text-[#7FD1B9]">"based_in"</span>
        <span className="text-[#5C6B72]">: </span>
        <span className="text-[#E9C77B]">"Kothagiri, Tamil Nadu"</span>{'\n'}
        <span className="text-[#5C6B72]">{'}'}</span>
      </pre>
    </div>
  )
}
