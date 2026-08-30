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
import assets from './assets/assets.js'

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
    name: 'ShareWithMe',
    image: assets.shareWithMe,
    description: 'ShareWithMe is a money-sharing system designed for groups such as hostel students, roommates, and friends to manage shared income and expenses. Users can create groups, join using a team code, record expenses, and settle payments by dividing costs equally or manually.',
    tech: ['React', 'Django', 'Tailwind', 'PosgreSQL'],
    features: ['Group Management', 'Expense Tracking', 'Equal & Manual Splitting', 'Settlement Management', 'Team Code Joining'],
    github: 'https://github.com/mhmdfashan16/ShareWithMe',
    demo: 'https://share-with-me-6jpx.vercel.app',
  },
  {
    name: 'Feastify',
    image: assets.feastify,
    description: 'Food delivery e-commerce platform where users can browse food, place orders, and pay through online payment or COD, with separate Admin and User sections.',
    tech: ['React', 'Node.js','Express', 'Tailwind'],
    features: ['Food Ordering', 'Online Payment & COD', 'Cart Management', 'Admin & User Dashboard'],
    github: 'https://github.com/mhmdfashan16/HotelManagementSystem_FoodDelivery',
    demo: 'https://example.com',
  },
  {
    name: 'BuildWith',
    image: assets.buildWith,
    description: 'Construction company platform featuring company profiles, reviews, machinery, projects, and email communication. Worked as a Full-Stack Developer at EPR Groupers during my internship.',
    tech: ['React', 'Venilla CSS', 'Django', 'PosgreSQL'],
    features: ['Company Profiles', 'Project Showcase', 'Machinery Listings', 'Reviews & Ratings', 'Email Communication'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Invito',
    image: assets.invito,
    description: 'Digital invitation platform with customizable templates for weddings, birthdays, engagements, and more. Worked as a Full-Stack Developer at EPR Groupers, contributing new features and templates.',
    tech: ['React', 'Venilla CSS', 'Django', 'PosgreSQL'],
    features: ['Event Templates', 'Template Customization', 'Cultural Designs', 'Public Invitations', 'Time-Limited Access'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'asAutoMotors',
    image: assets.asAutoMotors,
    description: 'asAutoMotors is a university community project developed for a second-hand motorcycle dealership. The platform allows the business to showcase available bikes online while enabling users to search, filter, and explore motorcycles based on their preferences.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Bike Listings', 'Search & Filter', 'Bike Details', 'Product Showcase', 'Add, Remove, Update'],
    github: 'https://github.com/mhmdfashan16/ASAutoMotors',
    demo: 'https://example.com',
  },
  {
    name: 'FastAuth',
    image: assets.fastAuth,
    description: 'Secure user authentication system using OTP verification through email and SMS for account registration and login.',
    tech: ['React', 'Node.js','express', 'MongoDB'],
    features: ['Email OTP', 'SMS OTP', 'Secure Authentication', 'OTP Resend'],
    github: 'https://github.com',
    demo: 'https://github.com/mhmdfashan16/Authendication_System',
  },
  {
    name: 'TutorTrack',
    image: assets.tutorTrack,
    description: 'Group project connecting students with tutors based on medium, subject, and district, supporting both online and physical classes.',
    tech: ['React', 'Node.js','express', 'MongoDB'],
    features: ['Tutor Search', 'Subject & Medium Filter', 'District-Based Search', 'Online & Physical Classes'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'FreshlyCart',
    image: assets.freshlyCart,
    description: 'Grocery e-commerce platform where users can browse products, place orders, and make online payments, with separate Admin and User sections.',
    tech: ['React', 'Express','Node.js', 'PostgreSQL'],
    features: ['Online Grocery Shopping', 'Product Search & Filter', 'Online Payment', 'Order Management'],
    github: 'https://github.com/mhmdfashan16/Online-Grocery-System',
    demo: 'https://example.com',
  },
  {
    name: 'IMS',
    image: assets.ims,
    description: 'Inventory Management System developed for Fatheen Traders to manage products, stock, and inventory operations for their retail and wholesale business.',
    tech: ['React', 'Django', 'Tailwind'],
    features: ['Product Management', 'Stock Tracking', 'SKU Management', 'Category Management', 'Inventory Dashboard'],
    github: 'https://github.com/mhmdfashan16/VehicleManagementSystem',
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
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

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
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        theme={theme}
        menuOpen={menuOpen}
        setTheme={setTheme}
        setMenuOpen={setMenuOpen}
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
