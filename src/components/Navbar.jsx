import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../content/AppContext';

export default function Navbar({ navItems, activeSection, menuOpen, setMenuOpen, theme, setTheme }) {

  // const {theme, setTheme} = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl dark:bg-white/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-wide text-white">
          Mohammed Fashan
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              className={`text-sm transition ${activeSection === item.hash.slice(1) ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

