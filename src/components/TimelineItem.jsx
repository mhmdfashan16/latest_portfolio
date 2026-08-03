import { MoveRight } from 'lucide-react'

export default function TimelineItem({ title, company, period, tasks, technologies }) {
  return (
    <div className="relative pl-7">
      <span className="absolute left-0 top-2.5 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 dark:border-cyan-300"></span>
      <div className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-800/50">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-slate-950 dark:text-white">{title}</p>
            <p className="text-sm font-medium text-cyan-600 dark:text-cyan-300">{company}</p>
          </div>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-cyan-500 dark:text-slate-950">{period}</span>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
          {tasks.map((task) => (
            <li key={task} className="flex items-start gap-2"><MoveRight size={14} className="mt-1 shrink-0 text-cyan-500" /> {task}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((item) => (
            <span key={item} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-300">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
