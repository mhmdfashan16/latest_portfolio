import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import MetricCard from './MetricCard'

export default function Research({ fadeUp }) {
  return (
    <section id="research" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Research"
          title="Evaluating the Effectiveness of Automated Web Testing Tools Using Software Quality Metrics"
          description="An experimental study highlighting the significance of quality-aware test automation in modern software engineering workflows."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} custom={0.12} className="mt-10 rounded-[30px] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500">Experimental Study</div>
              <div className="space-y-2 text-slate-700 dark:text-slate-200">
                <p><span className="font-semibold text-slate-900 dark:text-white">Tools:</span> Jest, Cypress, Playwright</p>
                <p><span className="font-semibold text-slate-900 dark:text-white">Metrics:</span> Defect Detection Rate, Test Coverage, Execution Time, Maintainability Score</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <MetricCard label="Defect Detection Rate" value="High" />
              <MetricCard label="Test Coverage" value="Strong" />
              <MetricCard label="Execution Time" value="Efficient" />
              <MetricCard label="Maintainability Score" value="Optimized" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
