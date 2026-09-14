import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const socials = [
    { href: "https://github.com/Arya3077", img: "git.png", label: "GitHub" },
    { href: "https://www.linkedin.com/in/arya-shibu-dhanya/", img: "linkedin.png", label: "LinkedIn" },
    { href: "mailto:arya.shibu.dhanya1200@gmail.com", img: "mail.png", label: "Email" },
  ]

  return (
    <footer className="py-10 bg-[#10002B] dark:bg-gray-950 text-white flex flex-col justify-center items-center gap-6 border-t border-purple-900/30">
      <div className="flex flex-row justify-center items-center gap-5">
        {socials.map((soc, idx) => (
          <a
            key={idx}
            href={soc.href}
            target="_blank"
            rel="noreferrer"
            aria-label={soc.label}
          >
            <motion.div
              className="h-12 w-12 bg-white/90 hover:bg-white dark:bg-gray-800 dark:hover:bg-gray-700 flex justify-center items-center rounded-2xl shadow-md p-2.5 transition-all"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
            >
              <img src={soc.img} alt={soc.label} className="w-full h-full object-contain" />
            </motion.div>
          </a>
        ))}
      </div>

      <div className="text-center px-4">
        <p className="text-xs sm:text-sm font-mono text-purple-200/80 dark:text-gray-400">
          Designed & Built by Arya Shibu Dhanya • © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
