export default function Footer({ year }) {
  return (
    <footer className="border-t border-slate-200 bg-white/70 px-4 py-6 dark:border-slate-800 dark:bg-slate-950/70 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <span>Copyright © {year} Mohammed Fashan. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com" className="hover:text-cyan-500">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-cyan-500">LinkedIn</a>
          <a href="#home" className="hover:text-cyan-500">Quick Navigation</a>
        </div>
      </div>
    </footer>
  )
}
