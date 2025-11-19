import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { img: "react.webp", alt: "React" },
  { img: "figma.png", alt: "Figma" },
  { img: "firebase.png", alt: "Firebase" },
  { img: "images.png", alt: "Images" },
  { img: "supa.png", alt: "Images" },
  { img: "javascript.png", alt: "Images" },
  
  
];

const Carousel = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="h-32 w-32 sm:h-36 sm:w-36 md:h-30 md:w-35 lg:h-44 lg:w-44 bg-white flex justify-center items-center rounded-xl shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
        >
          <img src={skill.img} alt={skill.alt} className="w-3/4 h-3/4 object-contain" />
        </motion.div>
      ))}
    </div>
  )
}

export default Carousel


