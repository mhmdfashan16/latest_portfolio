export default function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/80">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{title}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
    </div>
  )
}
