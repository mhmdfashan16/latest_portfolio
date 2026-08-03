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
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left, rgba(34,211,238,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.25),_transparent_30%)]"></div>
      <div className="mx-auto flex-clo max-w-6xl items-center justify-between gap-10 sm:flex sm:gap-20 lg:gap-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            <Code2 size={14} />
            Available for opportunities
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium text-slate-300">Hi, I&apos;m</p>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Mohammed Fashan
            </h1>
            <h2 className="text-xl font-semibold text-cyan-500 sm:text-2xl">
              Software Engineer | Full Stack Developer
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              I build scalable, responsive, and user-focused web applications using modern technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2 text-slate-700 dark:text-slate-200">
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
          <div className="rounded-[30px] w-fit border border-white/20 bg-white/70 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/5 dark:bg-slate-900/70 sm:p-6">
            <div className="space-y-4 w-fit">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">Engineer</span>
                <span className="text-xs text-cyan-100">2026</span>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/60 shadow-lg shadow-slate-900/20">
                <img
                  src={assets.darkModeImage}
                  alt="Profile"
                  className="h-80 w-60 object-cover object-center sm:h-105"
                />
              </div>
            </div>
          </div>
        </motion.div>

       
      </div>
       <motion.div classname="mt-10 rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60"
        initial="hidden"
        whileInView="visible">
                <div className="space-y-4 grid gap-6 sm:grid-cols-3 p-5">
                <div className="rounded-3xl  border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                
                  <h3 className="text-2xl font-bold">Full-Stack</h3>
                  <p className="text-sm text-cyan-100">Building polished software experiences with scalable architecture.</p>
                
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
