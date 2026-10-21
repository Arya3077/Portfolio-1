import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const projects = [
  {
    number: '01',
    category: 'Mission Control System',
    title: 'ASTRAL — Astronaut Health Monitoring Dashboard',
    tagline: 'Mission Control for Astronaut Health',
    description:
      'A mission-control-inspired astronaut health dashboard that visualizes simulated telemetry, detects abnormal conditions, and generates real-time mission alerts.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SVG', 'Web Audio API'],
    links: {
      demo: null,
      code: null,
      figma: null,
    },
  },
  {
    number: '02',
    category: 'Full-Stack Healthcare Web App',
    title: 'Clinic Management System',
    tagline: 'Patient Records & Appointment Workflow Portal',
    description:
      'A web-based clinic management system designed to streamline patient records, doctor scheduling, and administrative workflows using Supabase and Firebase Auth.',
    tags: ['React', 'Tailwind CSS', 'React Router', 'Supabase (PostgreSQL)', 'Firebase Auth', 'React Hooks'],
    links: {
      demo: null,
      code: null,
      figma: null,
    },
  },
  {
    number: '03',
    category: 'Event Platform',
    title: 'AI Evolve',
    tagline: 'Official Event Website • μLearn Foundation',
    description:
      'The official website for AI Evolve under the μLearn Foundation, presenting event schedules, speaker tracks, and responsive registration workflows.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    links: {
      demo: null,
      code: null,
      figma: null,
    },
  },
]

const Projects = () => {
  const prefersReduced = useReducedMotion()

  return (
    <section id="Projects" className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] dark:text-white mb-3 tracking-tight">
            PROJECTS
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Featured technical projects focusing on systems architecture, responsive interfaces, and production-grade frontend engineering.
          </p>
        </div>

        {/* Editorial Typographic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.article
              key={project.number}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : idx * 0.12 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={prefersReduced ? undefined : { y: -4 }}
              className="group relative bg-white dark:bg-gray-800/90 rounded-3xl p-6 sm:p-7 shadow-lg border border-purple-100/80 dark:border-gray-700/70 hover:border-purple-300 dark:hover:border-purple-600/70 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header & Content */}
              <div>
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-gray-100 dark:border-gray-700/60">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-purple-100/80 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50">
                    PROJECT {project.number}
                  </span>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-[#10002B] dark:text-white mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 leading-snug">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-mono font-semibold text-purple-700 dark:text-purple-400 mb-3">
                  {project.tagline}
                </p>

                {/* Smaller Concise Description */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section: Tags & Actions */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-md bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions (Only render buttons when links exist; no pending placeholders) */}
                {(project.links.demo || project.links.figma || project.links.code) && (
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    {/* Live Demo Action */}
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View Live Demo for ${project.title} (opens in new tab)`}
                        whileTap={prefersReduced ? undefined : { scale: 0.96 }}
                        className="group/btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow-md hover:shadow-purple-500/20 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none transition-all duration-200"
                      >
                        <span>Live Demo</span>
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}

                    {/* Figma Design Reference if available */}
                    {project.links.figma && (
                      <motion.a
                        href={project.links.figma}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View Figma Design Reference for ${project.title} (opens in new tab)`}
                        whileTap={prefersReduced ? undefined : { scale: 0.96 }}
                        className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-purple-50 dark:bg-gray-700 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-gray-600 hover:bg-purple-100 dark:hover:bg-gray-600 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none transition-all duration-200"
                      >
                        <span>Figma Specs</span>
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}

                    {/* Source Code Action */}
                    {project.links.code && (
                      <motion.a
                        href={project.links.code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View Source Code for ${project.title} on GitHub (opens in new tab)`}
                        whileTap={prefersReduced ? undefined : { scale: 0.96 }}
                        className="group/btn inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none transition-all duration-200"
                      >
                        <span>Source Code</span>
                        <svg
                          className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
