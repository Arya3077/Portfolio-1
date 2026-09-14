import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: 'GTech μLearn',
      role: 'Frontend Developer Intern',
      duration: '6 months',
      status: 'Present',
      description:
        'Currently working as a Frontend Developer Intern at GTech μLearn, contributing to production-oriented web applications and user-facing features.',
      projects: [
        {
          name: 'μLearn Dashboard 2.0',
          description:
            'Contributed to frontend development and implementation of features for the μLearn platform.',
        },
      ],
      skills: ['React.js', 'Frontend Development', 'UI/UX Implementation', 'Web Applications'],
    },
  ]

  return (
    <section id="Experience" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] dark:text-white mb-3"
          >
            EXPERIENCE
          </motion.h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Professional experience & key contributions in web application development.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 shadow-xl border border-purple-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-fuchsia-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-700 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#10002B] dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300">
                      {exp.status}
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-500 bg-clip-text text-transparent mt-1">
                    {exp.company}
                  </h4>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {exp.projects && exp.projects.length > 0 && (
                <div className="mb-6 bg-purple-50/50 dark:bg-gray-900/50 rounded-2xl p-5 border border-purple-100/50 dark:border-gray-700/50">
                  <h5 className="text-xs font-bold uppercase font-mono tracking-wider text-purple-900 dark:text-purple-300 mb-3">
                    Projects Worked On:
                  </h5>
                  <ul className="space-y-2">
                    {exp.projects.map((proj, pIdx) => (
                      <li key={pIdx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        <span className="font-semibold text-purple-700 dark:text-purple-400 font-mono">
                          • {proj.name} —
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">{proj.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs md:text-sm font-mono font-medium rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
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

export default Experience
