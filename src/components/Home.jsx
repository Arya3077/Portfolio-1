import React, { useRef } from 'react'
import Typewriter from 'typewriter-effect'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const Home = () => {
  const containerRef = useRef(null)
  const prefersReduced = useReducedMotion()

  // Subtle parallax effect on decorative background ambient glow
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const glowY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.35, 0.05])

  return (
    <section
      ref={containerRef}
      id="Home"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col justify-center items-center min-h-[85vh] text-center relative overflow-hidden"
    >
      {/* Decorative Gradient Glow Blob with Parallax */}
      <motion.div
        style={prefersReduced ? undefined : { y: glowY, opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/35 dark:bg-purple-900/25 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Hero Title */}
        <motion.h1
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold text-[#10002B] dark:text-white tracking-tight leading-tight"
        >
          Hello, I am{' '}
          <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent inline-block">
            Arya
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl font-mono font-semibold text-purple-700 dark:text-purple-400 min-h-[60px] flex items-center justify-center"
        >
          <Typewriter
            options={{
              strings: [
                'Frontend Developer',
                'React & Next.js Engineer',
                'Design-Driven Builder',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </motion.div>

        {/* Short Sub-description */}
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
        >
          Crafting high-performance, responsive web applications with modern architectures, clean code, and interactive visual polish.
        </motion.p>

        {/* Action Buttons with Magnetic CTA Interaction */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-4"
        >
          <MagneticButton>
            <a
              href="#Projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#Contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-300 font-mono font-bold border border-purple-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Home