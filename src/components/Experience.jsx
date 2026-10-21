import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const Experience = () => {
  const prefersReduced = useReducedMotion()

  const experiences = [
    {
      company: 'GTech μLearn',
      role: 'Frontend Developer Intern',
      status: 'Present',
      description:
        'Working as a Frontend Developer Intern at GTech μLearn, actively contributing to production-oriented web applications, developing scalable frontend components, and delivering responsive user interfaces.',
      projects: [
        {
          name: 'μLearn Dashboard 2.0',
          description:
            'Contributed to core frontend development, data display modules, and responsive UI implementations for the foundation platform.',
        },
      ],
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX Implementation', 'Web Applications'],
    },
  ]

  return (
    <section id="Experience" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] dark:text-white mb-3 tracking-tight">
            EXPERIENCE
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Professional experience & key contributions in web application engineering and collaborative development.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: prefersReduced ? 0 : index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={prefersReduced ? undefined : { y: -4 }}
              className="bg-white dark:bg-gray-800/90 rounded-3xl p-6 md:p-10 shadow-xl border border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600/70 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-fuchsia-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-700 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#10002B] dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
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
                    className="px-3 py-1 text-xs md:text-sm font-mono font-medium rounded-lg bg-gray-100 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 border border-transparent hover:border-purple-200 dark:hover:border-purple-700 transition-colors"
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
