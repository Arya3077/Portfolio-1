import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { img: 'react.webp', name: 'React' },
  { img: 'next.svg', name: 'Next.js' },
  { img: 'typescript.svg', name: 'TypeScript' },
  { img: 'javascript.png', name: 'JavaScript' },
  { img: 'tanstack.svg', name: 'TanStack' },
  { img: 'fastapi.svg', name: 'FastAPI' },
  { img: 'mysql.svg', name: 'MySQL' },
  { img: 'python.png', name: 'Python' },
  { img: 'firebase.png', name: 'Firebase' },
  { img: 'supa.png', name: 'Supabase' },
  { img: 'figma.png', name: 'Figma' },
  { img: 'html.png', name: 'HTML5' },
  { img: 'css.png', name: 'CSS3' },
  { img: 'git.png', name: 'Git' },
];

const Carousel = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 py-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800/90 border border-purple-100 dark:border-gray-700/80 flex flex-col justify-center items-center p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center mb-3 p-2">
            <img
              src={skill.img}
              alt={skill.name}
              className="max-h-full max-w-full object-contain filter group-hover:drop-shadow-md transition-all"
            />
          </div>
          <span className="text-sm font-semibold font-mono text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default Carousel
