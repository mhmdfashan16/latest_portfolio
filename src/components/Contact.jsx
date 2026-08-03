import { ArrowRight, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import SectionHeader from './SectionHeader'
import ContactPill from './ContactPill'

export default function Contact({ fadeUp }) {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect for software opportunities"
          description="I’m open to full-stack and software engineering opportunities where I can contribute quality code, thoughtful UX, and dependable product outcomes."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="space-y-4">
              <ContactPill href="mailto:mohammedfashan@example.com" icon={<Mail size={16} />} label="Email" value="mohammedfashan@example.com" />
              <ContactPill href="https://linkedin.com" icon={<BriefcaseBusiness size={16} />} label="LinkedIn" value="linkedin.com/in/mohammedfashan" />
              <ContactPill href="https://github.com" icon={<GitBranch size={16} />} label="GitHub" value="github.com/mohammedfashan" />
            </div>
          </div>

          <form className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <span>Name</span>
                <input type="text" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-800" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <span>Email</span>
                <input type="email" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-800" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <span>Message</span>
              <textarea rows="6" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-800" placeholder="Tell me about your project or opportunity." />
            </label>
            <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400">
              Send Message
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
