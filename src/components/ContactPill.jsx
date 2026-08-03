import { ExternalLink } from 'lucide-react'

export default function ContactPill({ href, icon, label, value }) {
  return (
    <a href={href} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-cyan-500/10 p-2 text-cyan-500">{icon}</span>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-1 text-sm font-semibold">{value}</p>
        </div>
      </div>
      <ExternalLink size={16} />
    </a>
  )
}
