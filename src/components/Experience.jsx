import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import TimelineItem from './TimelineItem'

export default function Experience({ fadeUp }) {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience"
          title="Professional growth through delivery and collaboration"
          description="A concise internship experience focused on platform development, team workflows, and modern web engineering."
        />
        <div className="mt-10 rounded-[28px] border border-slate-200 bg-white/60 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="relative ml-2 space-y-8 before:absolute before:bottom-0 before:left-[7px] before:top-0 before:w-px before:bg-cyan-400/40">
            <TimelineItem
              title="Software Engineer Intern"
              company="EPRGroupers (Pvt) Ltd"
              period="2024"
              tasks={[
                'Developed frontend features using React.js and Tailwind CSS.',
                'Collaborated with the backend team on Django APIs and PostgreSQL-backed workflows.',
                'Used Git and Trello to maintain version control and team task visibility.',
              ]}
              technologies={['React.js', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Git', 'Trello']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
