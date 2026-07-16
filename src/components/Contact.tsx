import { FormEvent, ReactNode, useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // This form is a UI placeholder. Wire it up to a service like
    // Formspree, EmailJS, or your own backend to actually receive messages.
    setSent(true)
  }

  return (
    <section id="contact" className="border-t border-line py-16">
      <div className="mx-auto max-w-[1080px] px-6">
        <SectionHeading
          fieldLabel="df.contact"
          title="Get In Touch"
          subtitle="Open to entry-level software development, AI, and data science roles — feel free to reach out."
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <ContactItem icon={<Mail size={16} />} text={profile.email} color="bg-teal-soft text-teal" />
            <ContactItem icon={<Phone size={16} />} text={profile.phone} color="bg-coral-soft text-coral" />
            <ContactItem icon={<MapPin size={16} />} text={profile.location} color="bg-violet-soft text-violet" />
          </div>

          <form onSubmit={handleSubmit}>
            <Field label="Name" id="name" type="text" placeholder="Your name" />
            <Field label="Email" id="email" type="email" placeholder="you@example.com" />
            <div className="mb-4">
              <label htmlFor="message" className="mb-1.5 block font-mono text-[12.5px] text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Say hello..."
                className="w-full rounded-md border border-line bg-card px-3.5 py-2.5 text-sm focus:outline-2 focus:outline-accent"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Send size={15} /> Send Message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-accent">
                This form is a UI placeholder — connect it to Formspree, EmailJS, or your own
                backend to receive real messages.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  text,
  color,
}: {
  icon: ReactNode
  text: string
  color: string
}) {
  return (
    <div className="mb-4.5 flex items-center gap-3 text-[14.5px]">
      <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${color}`}>
        {icon}
      </span>
      {text}
    </div>
  )
}

function Field({
  label,
  id,
  type,
  placeholder,
}: {
  label: string
  id: string
  type: string
  placeholder: string
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block font-mono text-[12.5px] text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-line bg-card px-3.5 py-2.5 text-sm focus:outline-2 focus:outline-accent"
      />
    </div>
  )
}
