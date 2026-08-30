import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function TechSkills({ skillGroups, fadeUp }) {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Technical Skills"
          title="A balanced toolkit for modern product delivery"
          description="I work across front-end craft, API reasoning, data modeling, and delivery tooling to produce end-to-end solutions."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 ">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              custom={groupIndex * 0.1}
              className="rounded-[28px] border border-slate-200 bg-white/60 p-6 shadow-xl shadow-slate-900/5
               dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-xs text-slate-700 dark:text-slate-200">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`h-1.5 rounded-full bg-linear-to-r ${group.accent}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
