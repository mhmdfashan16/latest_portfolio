import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import StatCard from './StatCard'
import assets from '../assets/assets'

export default function AboutMe({ fadeUp }) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About Me"
          title="Software Engineering with product-minded execution"
          description="I am a software engineering graduate passionate about crafting dependable web systems, elegant interfaces, and practical user-first solutions."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div whileHover={{ y: -4 }} className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex h-full min-h-80 items-center justify-center rounded-[20px] bg-linear-to-br from-slate-900 via-blue-950 to-cyan-700 text-white">
                <img src={assets.heroImage02} alt="Profile" 
                className="h-full w-full rounded-[20px] object-cover" />

            </div>
            
          </motion.div>


          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} custom={0.15} className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                I am a software engineering graduate with a strong academic foundation and a practical mindset for full-stack development. My work focuses on building readable, maintainable, and user-centric products using modern web technologies.
              </p>
              <p>
                I enjoy turning requirements into robust digital experiences by combining structured engineering principles with a strong eye for elegant front-end architecture and dependable back-end APIs.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <StatCard title="Background" value="Software Engineering" />
                <StatCard title="Focus" value="Full-Stack" />
                <StatCard title="Goal" value="High-quality products" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
