import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section id="Projects" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        <h2 className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] mb-10 dark:text-white">
          PROJECTS
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center w-full">
          
        
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="pro h-64 md:h-96 sm:h-52 sm:w-48 w-full md:w-[500px] bg-white flex dark:bg-gray-50 flex-col justify-center items-center rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <img src="pro1.png" alt="Project 1" className="w-full h-auto rounded-2xl" />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-extrabold text-fuchsia-950 mt-4 dark:text-white">
              Clinic Management System
            </h3>
          </div>

     
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="pro h-64 md:h-96 w-full md:w-[500px] bg-white flex flex-col justify-center items-center rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <img src="movie.png" alt="Project 2" className="w-full h-auto rounded-2xl" />
            </motion.div>
            <h3 className="text-xl md:text-2xl font-extrabold text-fuchsia-950 mt-4 dark:text-white">
              Movie Recommender App
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
