import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const skills = [
  { img: 'react.webp', name: 'React' },
  { img: 'next.svg', name: 'Next.js' },
  { img: 'typescript.svg', name: 'TypeScript' },
  { img: 'javascript.png', name: 'JavaScript' },
  { img: 'tanstack.svg', name: 'TanStack' },
  { img: 'mysql.svg', name: 'MySQL' },
  { img: 'python.png', name: 'Python' },
  { img: 'firebase.png', name: 'Firebase' },
  { img: 'supa.png', name: 'Supabase' },
  { img: 'figma.png', name: 'Figma' },
  { img: 'html.png', name: 'HTML5' },
  { img: 'css.png', name: 'CSS3' },
  { img: 'git.png', name: 'Git' },
]

const Carousel = () => {
  const prefersReduced = useReducedMotion()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 py-2">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={prefersReduced ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: prefersReduced ? 0 : index * 0.04 }}
          whileHover={prefersReduced ? undefined : { y: -3 }}
          whileTap={prefersReduced ? undefined : { scale: 0.96 }}
          tabIndex={0}
          role="group"
          aria-label={`Skill: ${skill.name}`}
          className="bg-white/90 dark:bg-gray-800/90 border border-purple-100 dark:border-gray-700/80 hover:border-purple-300 dark:hover:border-purple-600/70 flex flex-col justify-center items-center p-3 sm:p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group cursor-default focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
        >
          {/* Fixed-dimension icon container with restrained image zoom */}
          <div className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center mb-2 overflow-hidden">
            <img
              src={skill.img}
              alt=""
              aria-hidden="true"
              className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300 ease-out"
              loading="lazy"
            />
          </div>
          <span className="text-xs sm:text-sm font-semibold font-mono text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default Carousel
