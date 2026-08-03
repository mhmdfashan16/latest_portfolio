import { GraduationCap } from 'lucide-react'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation in software engineering"
          description="Delivered through a structured learning journey emphasizing software systems, engineering practice, and applied development."
        />
        <div className="mt-10 rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[24px] bg-gradient-to-br from-slate-900 to-cyan-700 p-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap />
                <span className="text-sm uppercase tracking-[0.25em] text-cyan-100">Degree</span>
              </div>
              <h3 className="text-2xl font-bold">Bachelor of Science Honours in Software Engineering</h3>
              <p className="mt-3 text-cyan-100">Sabaragamuwa University of Sri Lanka</p>
            </div>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p><span className="font-semibold text-slate-900 dark:text-white">Faculty:</span> Faculty of Computing</p>
              <p><span className="font-semibold text-slate-900 dark:text-white">Relevant Coursework:</span> Software Engineering, Web Technologies, Database Systems, Software Quality, Human-Computer Interaction, Object-Oriented Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
