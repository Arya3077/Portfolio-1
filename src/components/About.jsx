import React from 'react'
import { motion } from 'framer-motion'
import Carousel from './Carousel'

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="About" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-20 dark:text-shadow-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        <div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
          <h2 className="text-4xl md:text-5xl font-mono font-extrabold mb-6 dark:text-white">ABOUT</h2>
          </motion.div>
           <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
          <p className="text-lg md:text-2xl leading-relaxed dark:text-white">
            Hi! I’m Arya, an aspiring web developer and designer passionate about turning ideas into beautiful, functional websites. I love coding interactive experiences and designing eye-catching visuals using Figma. I’m always learning, experimenting, and pushing my creative boundaries to build projects that inspire.
          </p>
          </motion.div>
        </div>

      
        <div>
           <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white mt-20">SKILLS</h3>
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
