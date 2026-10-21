import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Carousel from './Carousel'

const About = () => {
  const prefersReduced = useReducedMotion()

  const highlights = [
    { title: 'Frontend Architecture', desc: 'Interactive SPA & SSR Applications with React & Next.js' },
    { title: 'Modern Tooling', desc: 'TypeScript, Tailwind CSS, State Management & Web APIs' },
    { title: 'Design Fidelity', desc: 'Translating Figma prototypes into responsive, accessible code' },
    { title: 'Performance & UX', desc: 'Semantic HTML, responsive layouts & micro-interactions' },
  ]

  return (
    <section id="About" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header & Bio */}
        <div>
          <h2 className="text-4xl md:text-5xl font-mono font-extrabold mb-6 text-[#10002B] dark:text-white tracking-tight">
            ABOUT ME
          </h2>

          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-white/85 dark:bg-gray-800/85 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-purple-100 dark:border-gray-700/60 shadow-lg"
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              Hi, I’m <span className="font-bold text-purple-700 dark:text-purple-400">Arya</span>, a frontend developer who focuses on turning design concepts and ideas into modern, functional, and high-performance digital experiences. I specialize in building user-focused web applications with React, Next.js, and TypeScript, continuously refining my technical foundations and solving real-world frontend challenges for fast-paced teams and early-stage startup environments.
            </p>

            {/* Quick Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={prefersReduced ? false : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: prefersReduced ? 0 : idx * 0.08 }}
                  whileHover={prefersReduced ? undefined : { y: -3 }}
                  className="p-4 rounded-2xl bg-purple-50/70 dark:bg-gray-900/60 border border-purple-100/80 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600/50 transition-all duration-200"
                >
                  <h4 className="font-bold font-mono text-purple-900 dark:text-purple-300 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-[#10002B] dark:text-white">
            TECHNICAL SKILLS
          </h3>

          <Carousel />
        </div>
      </div>
    </section>
  )
}

export default About
