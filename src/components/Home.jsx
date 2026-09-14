import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col justify-center items-center min-h-[85vh] text-center relative overflow-hidden" id="Home">
      {/* Decorative Gradient Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl font-mono font-semibold text-purple-700 dark:text-purple-400 min-h-[60px] flex items-center justify-center"
        >
          <Typewriter
            options={{
              strings: ['Aspiring Web-Developer', 'Aspiring Designer', 'Welcome to my portfolio!'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </motion.div>

        {/* Short Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
        >
          Crafting responsive, user-focused web applications with clean code & intuitive design aesthetics.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <a
            href="#Experience"
            className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Explore Experience
          </a>
          <a
            href="#Contact"
            className="px-6 py-3 rounded-2xl bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-300 font-mono font-bold border border-purple-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Home