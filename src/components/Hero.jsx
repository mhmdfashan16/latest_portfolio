import { motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  FileCode2,
  GitBranch,
  Mail,
  MonitorSmartphone,
} from 'lucide-react'
import assets from '../assets/assets'

export default function Hero({ fadeUp }) {

  return (
    <section id="home" 
    className="lg:relative overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pb-20 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_34%)]"></div>
      <div className="mx-auto flex flex-col-reverse  lg:grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.9fr)_minmax(280px,0.85fr)] lg:gap-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-800/30 dark:border-cyan-400/30 bg-cyan-800/10 dark:bg-cyan-500/10 px-3 py-1 lg:text-xs text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
            <Code2 size={14} />
            Available for opportunities
          </div>

          <div className="md:space-y-4 space-y-2">
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300">Hi, I&apos;m</p>
            <h1 className="typewriter-text max-w-2xl text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Mohammed Fashan
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.1, ease: 'easeOut' }}
              className="text-sm md:text-xl font-semibold text-cyan-700 dark:text-cyan-500 sm:text-2xl"
            >
              Software Engineer | Full Stack Developer
            </motion.h2>
            <p className="max-w-2xl md:text-base text-sm leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              I build scalable, responsive, and user-focused web applications using modern technologies.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400 sm:w-auto"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white sm:w-auto"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white sm:w-auto"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-2 text-slate-700 dark:text-slate-200">
            <a href="https://github.com" className="rounded-full border border-slate-300 p-3 transition hover:border-cyan-400 hover:text-cyan-400 dark:border-slate-700">
              <GitBranch size={18} />
            </a>
            <a href="https://linkedin.com" className="rounded-full border border-slate-300 p-3 transition hover:border-cyan-400 hover:text-cyan-400 dark:border-slate-700">
              <BriefcaseBusiness size={18} />
            </a>
            <a href="mailto:mohammedfashan@example.com" className="rounded-full border border-slate-300 p-3 transition hover:border-cyan-400 hover:text-cyan-400 dark:border-slate-700">
              <Mail size={18} />
            </a>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative "
        >
          <div className="absolute -left-4 top-4 h-28 w-28 rounded-full bg-cyan-400/30 blur-3xl"></div>
          <div className="absolute -bottom-6 right-4 h-36 w-36 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="h-50 w-35 sm:h-70 sm:w-45 md:h-90 md:w-60  lg:h-110 lg:w-70">
                <img
                  src={assets.Hero_image_left}
                  alt="Profile"
                  className="w-full h-full object-cover object-center sm:aspect-5/6"
                />
          </div>
        </motion.div>    
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0.2}
        className="mx-auto max-w-6xl mt-5 rounded-[28px] border border-slate-200 bg-white/70 p-3 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60 sm:mt-4 sm:p-3"
      >
        <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl  border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">                
                  <h3 className="text-2xl font-bold">Full-Stack</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Building polished software experiences with scalable architecture.</p>                
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <MonitorSmartphone size={16} className="text-cyan-500" />
                    Responsive UI
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Mobile-first products with a premium, accessible quality bar.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <FileCode2 size={16} className="text-cyan-500" />
                    Modern stack
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">React, Tailwind, Node.js, Django, PostgreSQL, and cloud-ready delivery habits.</p>
                </div>
        </div>
      </motion.div>
       
    </section>
  )
}
