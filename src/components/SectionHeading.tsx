interface Props {
  fieldLabel: string
  title: string
  subtitle?: string
}

export default function SectionHeading({ fieldLabel, title, subtitle }: Props) {
  return (
    <div className="mb-9">
      <span className="mb-2.5 block font-mono text-[12.5px] text-accent">{fieldLabel}</span>
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-[30px]">{title}</h2>
      {subtitle && (
        <p className="mt-2.5 max-w-[60ch] text-[15px] leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  )
}
