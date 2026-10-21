import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Footer = () => {
  const prefersReduced = useReducedMotion()

  const socials = [
    { href: 'https://github.com/Arya3077', img: 'git.png', label: 'GitHub Profile' },
    { href: 'https://www.linkedin.com/in/arya-shibu-dhanya/', img: 'linkedin.png', label: 'LinkedIn Profile' },
    { href: 'mailto:arya.shibu.dhanya1200@gmail.com', img: 'mail.png', label: 'Email Contact' },
  ]

  return (
    <footer className="py-12 bg-[#10002B] dark:bg-gray-950 text-white flex flex-col justify-center items-center gap-6 border-t border-purple-900/30">
      <div className="flex flex-row justify-center items-center gap-5">
        {socials.map((soc, idx) => (
          <a
            key={idx}
            href={soc.href}
            target="_blank"
            rel="noreferrer"
            aria-label={soc.label}
            className="focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none rounded-2xl"
          >
            <motion.div
              className="h-12 w-12 bg-white/90 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-center items-center rounded-2xl shadow-md p-2.5 transition-colors"
              whileHover={prefersReduced ? undefined : { scale: 1.1, y: -2 }}
              whileTap={prefersReduced ? undefined : { scale: 0.94 }}
            >
              <img src={soc.img} alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </motion.div>
          </a>
        ))}
      </div>

      <div className="text-center px-4 space-y-1">
        <p className="text-xs sm:text-sm font-mono text-purple-200/90 dark:text-gray-400">
          Designed & Built by Arya Shibu Dhanya • © {new Date().getFullYear()}
        </p>
        <p className="text-[11px] font-mono text-purple-300/60 dark:text-gray-600">
          Crafted with React, Tailwind CSS, & Framer Motion
        </p>
      </div>
    </footer>
  )
}

export default Footer
