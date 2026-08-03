import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './content/AppContext.jsx'

const navItems = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Research', hash: '#research' },
  { label: 'Education', hash: '#education' },
  { label: 'Contact', hash: '#contact' },
]

const skillGroups = [
  {
    title: 'Frontend',
    accent: 'from-cyan-500 to-sky-600',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'React Router', level: 84 },
    ],
  },
  {
    title: 'Backend',
    accent: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'Node.js', level: 86 },
      { name: 'Express.js', level: 82 },
      { name: 'Django REST Framework', level: 78 },
      { name: 'Spring Boot', level: 74 },
    ],
  },
  {
    title: 'Database',
    accent: 'from-violet-500 to-fuchsia-600',
    skills: [
      { name: 'PostgreSQL', level: 84 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 76 },
    ],
  },
  {
    title: 'Tools',
    accent: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'Postman', level: 83 },
      { name: 'VS Code', level: 94 },
      { name: 'Docker', level: 72 },
    ],
  },
]

const projects = [
  {
    name: 'BuildWith',
    description: 'A collaborative platform that helps teams transform ideas into polished product plans and delivery roadmaps.',
    tech: ['React', 'Tailwind', 'Node.js'],
    features: ['Scalable UI', 'Real-time project tracking', 'Team collaboration'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Invito',
    description: 'An event invitation and RSVP experience designed for a smooth and modern guest management workflow.',
    tech: ['React', 'Express', 'PostgreSQL'],
    features: ['RSVP flows', 'Custom invite cards', 'Responsive layouts'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Dart',
    description: 'A sleek product analytics dashboard centered on business performance insights and actionable trends.',
    tech: ['React', 'Django', 'MySQL'],
    features: ['Interactive data view', 'Report dashboards', 'Performance insights'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'eSabraHub',
    description: 'A feature-rich marketplace portal designed to streamline service discovery, booking, and customer engagement.',
    tech: ['Spring Boot', 'MongoDB', 'Tailwind'],
    features: ['Marketplace UX', 'Service catalogs', 'Admin controls'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'TutorTrack',
    description: 'A scheduling and learning management tool for educators and students with a strong user experience focus.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Session planning', 'Student progress tracking', 'Notifications'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'FreshlyCart',
    description: 'A polished e-commerce storefront with a visually strong shopping journey and modern responsive storefront design.',
    tech: ['React', 'Express', 'PostgreSQL'],
    features: ['Product discovery', 'Cart experience', 'Checkout UX'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'FreshDose',
    description: 'A wellness and health-focused solution built around curated recommendations and a smooth customer experience.',
    tech: ['React', 'Django', 'Tailwind'],
    features: ['Health dashboard', 'Personalized recommendations', 'Smart filtering'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Inventory Management System',
    description: 'A resilient inventory and logistics management system that improves stock visibility across operations.',
    tech: ['Spring Boot', 'PostgreSQL', 'Docker'],
    features: ['Stock management', 'Low inventory alerts', 'Role-based access'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
}

function App() {
  const {theme, setTheme} = useState();
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.hash)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        navItems={navItems}
        theme={theme}
        activeSection={activeSection}      
        menuOpen={menuOpen}        
        setMenuOpen={setMenuOpen}
        setTheme={setTheme}
      />

      <main>
        <Hero fadeUp={fadeUp} />
        <AboutMe fadeUp={fadeUp} />
        <TechSkills skillGroups={skillGroups} fadeUp={fadeUp} />
        <Experience fadeUp={fadeUp} />
        <Projects projects={projects} fadeUp={fadeUp} />
        <Research fadeUp={fadeUp} />
        <Education />
        <Contact fadeUp={fadeUp} />
      </main>

      <Footer year={year} />
    </div>
  )
}

export default App
