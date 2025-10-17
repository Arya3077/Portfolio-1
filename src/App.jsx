import React from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import { motion } from 'framer-motion'
import Footer from './components/Footer'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const App = () => {
  
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 w-full">
      
      <nav className="flex flex-wrap justify-between items-center h-[60px] px-6  text-[#240046] text-2xl font-mono font-extrabold">
       
        <div className="flex items-center">
          <a href="#Home" className="hover:text-gray-700">Arya Shibu Dhanya</a>
        </div>

        
        <div className="flex flex-wrap items-center gap-4">
          <a href="#About" className="hover:text-gray-700 hidden md:flex">About</a>
          <a href="#Projects" className="hover:text-gray-700 hidden md:flex">Projects</a>
          <a href="#Contact" className="hover:text-gray-700 hidden md:flex">Contact</a>
          </div>
          <div>
          <button className='w-12 h-12 rounded-full bg-gradient-to-r from-purple-100 to-purple-400 text-white flex items-center justify-center hover:bg-purple-600 transition'>
            
          </button>
        </div>
      </nav>

     
      <motion.div
        id="Home"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Home />
        <div className='flex justify-center items-center'>
        </div>
      </motion.div>

    
      <motion.div
        id="About"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <About />
      </motion.div>

      <motion.div
        id="Projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        id="Contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Contact />
      </motion.div>

      <motion.div
        id="Contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default App