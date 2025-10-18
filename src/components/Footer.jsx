import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='h-40 bg-fuchsia-950 flex justify-center flex-col gap-3 items-center dark:bg-gray-950 dark:text-shadow-white'>
        
        <div className='flex flex-row justify-center items-center gap-6' >
       <a href="https://github.com/Arya3077"> <motion.div
                  className="pro h-[50px] w-[50px] bg-white flex  justify-center items-center rounded-xl"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  
                ><img src="git.png"></img></motion.div></a>

       <a href="https://www.linkedin.com/in/arya-shibu-dhanya/"> <motion.div
                  className="pro h-[50px] w-[50px] bg-white flex  justify-center items-center rounded-xl"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  
                ><img src="linkedin.png"></img></motion.div></a>

                 

                 <a href="mailto:arya.shibu.dhanya@gmail.com"> <motion.div
                  className="pro h-[50px] w-[50px] bg-white flex  justify-center items-center rounded-xl"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  
                ><img src="mail.png"></img></motion.div></a>

       
                </div>
<div> <p className='dark:text-gray-500'>© 2025 Arya Shibu</p></div>
                
    </div>
    
  )
}

export default Footer