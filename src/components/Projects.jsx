import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch, MoveRight } from 'lucide-react'
import { useRef, useState } from 'react'
import SectionHeader from './SectionHeader'

export default function Projects({ projects, fadeUp }) {
  const marqueeRef = useRef(null)
  const visibleCount = 3
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalProjects = projects.length
  const maxIndex = Math.max(0, totalProjects - visibleCount)

  const scrollProjects = (direction) => {
    const container = marqueeRef.current
    if (!container) return

    const firstCard = container.querySelector('.project-card')
    if (!firstCard) return

    const cardWidth = firstCard.getBoundingClientRect().width
    const gap = 20
    const offset = cardWidth + gap

    let newIndex = currentIndex

    if (direction === 'right') {
      newIndex = Math.min(currentIndex + visibleCount, maxIndex)
    } else if (direction === 'left') {
      newIndex = Math.max(currentIndex - visibleCount, 0)
    }

    if (newIndex === currentIndex) return

    container.scrollTo({
      left: newIndex * offset,
      behavior: 'smooth',
    })

    setCurrentIndex(newIndex)
  }

  const renderProjectCard = (project, index) => (
    <motion.article
      key={`${project.name}-${index}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={index * 0.08}
      whileHover={{ y: -6 }}
      className="project-card group rounded-[28px] border border-slate-200 bg-white/70 p-5 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60"
    >
      <div className="mb-4 h-40 rounded-[20px] bg-linear-to-br from-slate-900 via-blue-950 to-cyan-700 p-2 text-white">
        <div
          className="flex h-full items-end justify-between rounded-2xl bg-cover bg-center p-4 "
          style={{ backgroundImage: `url(${project.image})` }}
        >
          
          <div className="rounded-full bg-white/10 p-2">
            <ExternalLink size={16} />
          </div>
        </div>
      </div>
      <div className="">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-950 dark:text-cyan-200">Case Study</p>
            <h3 className="mt-3 text-2xl font-bold">{project.name}</h3>
      </div>

      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={`${project.name}-${item}`}
            className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
        {project.features.map((feature) => (
          <li key={`${project.name}-${feature}`} className="flex items-center gap-2">
            <MoveRight size={14} className="text-cyan-500" /> {feature}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-2 text-sm font-semibold">
        <a
          href={project.github}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-slate-800 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-100"
        >
          <GitBranch size={14} /> GitHub
        </a>
        <a
          href={project.demo}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-slate-800 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-100"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      </div>
    </motion.article>
  )

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected product work and engineering artifacts"
          description="A premium showcase of responsive applications, product-focused builds, and full-stack engineering contributions."
        />        

        <div className="project-marquee-wrapper mt-6">
          <div ref={marqueeRef} className="project-marquee">
            <div className="project-marquee-track mt-10">
              {[...projects, ...projects].map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        </div>

        

        <div className="mt-5 flex items-center justify-center gap-3">

  {/* Previous */}
  <button
    type="button"
    onClick={() => scrollProjects("left")}
    disabled={currentIndex === 0}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:border-cyan-400 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
    aria-label="Previous projects"
  >
    <ArrowLeft size={18} />
  </button>

  {/* Project counter */}
  <div className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">

    {/* Previous */}
    <span className="text-slate-400">
      {currentIndex > 0
        ? String(Math.max(1, currentIndex - visibleCount + 1)).padStart(2, "0")
        : "--"}
    </span>

    {/* Current */}
    <span className="text-cyan-500">
      {String(currentIndex + 1).padStart(2, "0")}
    </span>

    {/* Visible */}
    <span className="text-slate-800 dark:text-slate-100">
      {String(
        Math.min(currentIndex + visibleCount, totalProjects)
      ).padStart(2, "0")}
    </span>

    {/* Next */}
    <span className="text-slate-400">
      {currentIndex + visibleCount < totalProjects
        ? String(currentIndex + visibleCount + 1).padStart(2, "0")
        : "--"}
    </span>

  </div>

  {/* Next */}
  <button
    type="button"
    onClick={() => scrollProjects("right")}
    disabled={currentIndex >= maxIndex}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:border-cyan-400 hover:text-cyan-500 disabled:cursor-not-allowed disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
    aria-label="Next projects"
  >
    <ArrowRight size={18} />
  </button>

</div>


      </div>
    </section>
  )
}
