import { Menu, Moon, Sun, X } from 'lucide-react'

export default function Navbar({ navItems, activeSection, theme, menuOpen, setTheme, setMenuOpen }) {

  

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-bold tracking-wide text-slate-950 dark:text-white sm:text-lg">
          Mohammed Fashan
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              className={`text-sm transition ${activeSection === item.hash.slice(1) ? 'text-cyan-300' : 'dark:text-slate-300 text-slate-500 hover:text-gray-700 dark:hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            className="rounded-full border border-slate-200 bg-slate-100 p-2 text-slate-700 transition hover:border-cyan-400/60 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-cyan-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-slate-100 p-2 text-slate-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 md:hidden dark:border-white/10 dark:bg-slate-950/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={item.hash}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
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

