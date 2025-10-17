import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
<>
<div className="dark">
  <section id="Projects">
   <h1 className="text-4xl md:text-4xl font-mono font-extrabold text-[#10002B]   mb-10 pl-13 ">
        Projects
      </h1>
    <div className="bg-primary dark:bg-primary-dark flex flex-col items-center justify-center py-10 px-4 md:px-10">
    
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center w-full">
        <div className='flex justify-center items-center flex-col'>
        <motion.div
          className="pro h-64 md:h-96 w-full md:w-[500px] bg-white flex flex-col justify-center items-center rounded-3xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        ><img src="pro1.png" alt="Project 1" className="w-full h-auto rounded-2xl" />
        
        </motion.div>
        <h1 className='text-xl font-extrabold text-fuchsia-950'>Clinic Mangement System</h1>
       </div>
       
        <div className='flex flex-col justify-center items-center'>
        <motion.div
          className="pro h-64 md:h-96 w-full md:w-[500px] bg-white flex flex-col justify-center items-center rounded-3xl shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <img src="movie.png" alt="Project 2" className="w-full h-auto rounded-2xl" />
        </motion.div>
        <h1 className='text-xl font-extrabold text-fuchsia-950'>Movie Recommender App</h1>
        </div>
      </div>
    </div>
  </section>
</div>
</>)}
export default Projects;