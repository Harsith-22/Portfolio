import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/profile'

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let current = 'hero'
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = item.id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight">
          Harsith<span className="text-accent">.</span>K
        </a>

        <nav className="hidden gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                active === item.id
                  ? 'border-accent text-ink'
                  : 'border-transparent text-muted hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-1 border-t border-line px-6 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="border-b border-line py-2.5 text-sm font-medium text-muted"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
