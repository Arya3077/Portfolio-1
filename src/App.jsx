import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] } 
  },
}

const App = () => {
  const [mode, setMode] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const prefersReduced = useReducedMotion()

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Contact', href: '#Contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-pink-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-purple-500 selection:text-white">
      {/* Scroll-Linked Reading Progress Indicator */}
      {!prefersReduced && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 z-[100] origin-left shadow-sm"
          style={{ scaleX }}
          aria-hidden="true"
        />
      )}

      {/* Sticky Glassmorphism Header Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/80 border-b border-purple-200/50 dark:border-gray-800 shadow-sm transition-all duration-300">
        <nav
          className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
          aria-label="Main Navigation"
        >
          {/* Logo / Name */}
          <a
            href="#Home"
            className="text-xl sm:text-2xl font-mono font-extrabold text-[#240046] dark:text-white tracking-tight hover:opacity-85 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded-lg px-1 transition-opacity"
          >
            Arya Shibu Dhanya
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 font-mono font-semibold text-sm lg:text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded-md px-1.5 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions: Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <motion.button
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
              whileTap={prefersReduced ? undefined : { scale: 0.92, rotate: 15 }}
              whileHover={prefersReduced ? undefined : { scale: 1.05 }}
              className="w-10 h-10 rounded-full bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300 flex items-center justify-center hover:bg-purple-200 dark:hover:bg-gray-700 transition cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            >
              {mode === 'dark' ? (
                <img className="h-5 w-5" src="dark.png" alt="" aria-hidden="true" />
              ) : (
                <img className="h-5 w-5" src="light.png" alt="" aria-hidden="true" />
              )}
            </motion.button>

            {/* Hamburger Button for Mobile */}
            <motion.button
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              whileTap={prefersReduced ? undefined : { scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-purple-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
              animate={prefersReduced ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 border-b border-purple-100 dark:border-gray-800 px-6 py-4 space-y-3 font-mono font-semibold"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 border-b border-gray-100 dark:border-gray-800/50 last:border-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Sections */}
      <main className="w-full">
        <motion.div
          variants={sectionVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Home />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <About />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Experience />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial={prefersReduced ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default App