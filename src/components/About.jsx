import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const highlights = [
    { title: "Frontend Development", desc: "Interactive Web Apps" },
    { title: "Modern Tech", desc: "React, Modern JS & Tailwind" },
  ]

  return (
    <section id="About" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Header & Bio */}
        <div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-mono font-extrabold mb-6 text-[#10002B] dark:text-white">
              ABOUT ME
            </h2>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-purple-100 dark:border-gray-700/60 shadow-lg"
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              Hi, I’m <span className="font-bold text-purple-700 dark:text-purple-400">Arya</span>, a web developer who enjoys turning ideas into modern, functional, and engaging digital experiences. I’m passionate about frontend development, building user-focused applications, and continuously exploring new technologies. Through real-world projects and hands-on experience, I’m always looking for opportunities to learn, solve problems, and create better experiences on the web.
            </p>

            {/* Quick Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-purple-50/80 dark:bg-gray-900/60 border border-purple-100 dark:border-gray-700/50">
                  <h4 className="font-bold font-mono text-purple-900 dark:text-purple-300 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-[#10002B] dark:text-white">
              TECHNICAL SKILLS
            </h3>
          </motion.div>
          
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Carousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
