export default function Footer() {
  return (
    <footer className="border-t border-line py-7">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-2.5 px-6 text-[13px] text-muted">
        <span>© {new Date().getFullYear()} Harsith K. Built with intent.</span>
        <span className="font-mono">v1.0 · profile.json</span>
      </div>
    </footer>
  )
}
