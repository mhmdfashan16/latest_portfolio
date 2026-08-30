import { ArrowRight, BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionHeader from './SectionHeader'
import ContactPill from './ContactPill'


export default function Contact({ fadeUp }) {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const service_id = import.meta.env.VITE_SERVICE_ID
  const template_id = import.meta.env.VITE_TEMPLATE_ID
  const public_key = import.meta.env.VITE_PUBLIC_KEY
  console.log(service_id, template_id, public_key)

  console.log('User Name : ', import.meta.env.VITE_USER_NAME)

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      await emailjs.send(
        service_id,
        template_id,
        {
          from_name:formData.name,
          from_email:formData.email,
          message:formData.message
        },
        public_key
      )
      console.log(formData)
      setStatus('Message sent successfully, I will get back to you soon!')
      setFormData({
        name:'',
        email:'',
        message:''
      })

    }catch(e){
      setStatus('Error sending message. Please try again.')
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect for software opportunities"
          description="I’m open to full-stack and software engineering opportunities where I can contribute quality code, thoughtful UX, and dependable product outcomes."
        />
        <div className="mt-10 w-full grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[28px] border border-slate-200 bg-white/70 p-4 lg:p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="space-y-2 lg:space-y-4">
              <ContactPill href="mailto:mohammedfashan16@gmail.com" 
              icon={<Mail size={16} />} 
              label="Email" 
              value="mohammedfashan16@gmail.com" />
              <ContactPill href="https://www.linkedin.com/in/mohammed-fashan-9b317a309/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVnRISFnlT%2B2z8eEP8uLxsw%3D%3D" 
              icon={<BriefcaseBusiness size={16} />} 
              label="LinkedIn"
               value="linkedin.com/in/mohammedfashan" />
              <ContactPill 
              href="https://github.com/mhmdfashan16" 
              icon={<GitBranch size={16} />} 
              label="GitHub" 
              value="github.com/mhmdfashan16" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white/70 p-4 lg:p-6 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <span>Name</span>
                <input required type="text" name="name" 
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-800" placeholder="Your name" />
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <span>Email</span>
                <input required type="email" name="email" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-800" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <span>Message</span>
              <textarea required name="message" rows="6" className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-800 placeholder:text-gray-400" placeholder="Tell me about your project or opportunity." />
            </label>
            <button type="submit" 
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400  disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
              {loading ? 'Sending...' : 'Send Message'}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
