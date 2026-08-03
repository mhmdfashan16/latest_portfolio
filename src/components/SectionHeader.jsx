export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-500">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}
