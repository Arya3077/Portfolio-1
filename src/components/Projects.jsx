import React from 'react'
import { motion } from 'framer-motion'

const projectList = [
  {
    title: 'Clinic Management System',
    img: 'pro1.png',
    description:
      'A comprehensive web application designed to streamline patient records, appointment scheduling, and clinic workflow management with an intuitive UI.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'UI/UX Design'],
  },
  {
    title: 'Movie Recommender App',
    img: 'movie.png',
    description:
      'An interactive movie discovery application that offers personalized movie suggestions, details, and search capabilities based on user selections.',
    tags: ['React.js', 'Python', 'Web API', 'Responsive Design'],
  },
]

const Projects = () => {
  return (
    <section id="Projects" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] dark:text-white mb-3">
            PROJECTS
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Featured projects showcasing frontend development and creative web solutions.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-5 md:p-6 shadow-xl border border-purple-100 dark:border-gray-700 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
            >
              <div>
                {/* Project Image Container */}
                <div className="w-full h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 mb-6 flex items-center justify-center border border-purple-50 dark:border-gray-700/50">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-extrabold text-[#10002B] dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700/60">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
