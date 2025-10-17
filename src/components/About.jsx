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
    <section id="About" className='mb-12'> 
    <div className='dark'>
        <div className='h-[120vh] w-full bg-primary dark:bg-primary-dark flex flex-col p-7 mt-24 mb-14 '> 
            <div className='p-10'>
        <p className='text-4xl font-mono font-extrabold mb-12'>ABOUT</p> 
        <div className='text-2xl mb-20'>Hi! I’m Arya, an aspiring web developer and designer passionate about turning ideas into beautiful, functional websites. I love coding interactive experiences and designing eye-catching visuals using Figma. I’m always learning, experimenting,
             and pushing my creative boundaries to build projects that inspire.</div>
        </div>
      

        <div>
          <div className='p-10 font-mono text-4xl font-extrabold'>SKILLS</div>
          <div className='flex justify-center '>
            
 <motion.div
         id="About"
         variants={sectionVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.3 }}
       >
         <div className='mb-14'><Carousel /></div>
        
       </motion.div>
</div>
        </div>
        </div>
        </div>
        
    </section>
  )
}

export default About