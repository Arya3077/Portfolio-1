import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const prefersReduced = useReducedMotion()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.location.href = `mailto:arya.shibu.dhanya1200@gmail.com?subject=Contact from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)} (From: ${encodeURIComponent(form.email)})`
  }

  return (
    <div className="bg-white dark:bg-gray-800/90 shadow-xl rounded-3xl p-6 sm:p-8 border border-purple-100 dark:border-gray-700/80 w-full">
      <h3 className="text-2xl font-bold font-mono text-[#10002B] dark:text-white mb-6">
        Send Me a Message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-white text-sm sm:text-base transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
            Your Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-white text-sm sm:text-base transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Hi Arya, I would like to connect with you regarding..."
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-white text-sm sm:text-base transition-all resize-none"
            required
          ></textarea>
        </div>

        <div className="pt-2">
          <MagneticButton>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold py-3.5 px-7 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 cursor-pointer inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
            >
              <span>Send Message</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </MagneticButton>
        </div>

        {submitted && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3.5 rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 text-xs font-mono font-medium text-green-700 dark:text-green-300 text-center"
          >
            Opening your email client to dispatch the message!
          </motion.div>
        )}
      </form>
    </div>
  )
}

const Contact = () => {
  return (
    <section
      id="Contact"
      className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24 transition-colors"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] dark:text-white mb-3 tracking-tight">
            LET'S CONNECT
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            Have an early-stage frontend opportunity, project idea, or just want to discuss web engineering? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Email Card */}
            <div className="bg-white dark:bg-gray-800/90 p-6 rounded-3xl border border-purple-100 dark:border-gray-700/80 shadow-md flex items-center gap-4 hover:border-purple-300 dark:hover:border-purple-600/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300 text-xl font-bold">
                ✉️
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Email
                </h4>
                <a
                  href="mailto:arya.shibu.dhanya1200@gmail.com"
                  className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300 hover:underline break-all focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded-md"
                >
                  arya.shibu.dhanya1200@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub Card with SVG Image */}
            <div className="bg-white dark:bg-gray-800/90 p-6 rounded-3xl border border-purple-100 dark:border-gray-700/80 shadow-md flex items-center gap-4 hover:border-purple-300 dark:hover:border-purple-600/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-gray-900 dark:text-white p-2.5">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  GitHub
                </h4>
                <a
                  href="https://github.com/Arya3077"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300 hover:underline focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded-md"
                >
                  <span>Arya3077</span>
                  <span className="transform group-hover/link:translate-x-0.5 transition-transform">↗</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card with SVG Image */}
            <div className="bg-white dark:bg-gray-800/90 p-6 rounded-3xl border border-purple-100 dark:border-gray-700/80 shadow-md flex items-center gap-4 hover:border-purple-300 dark:hover:border-purple-600/70 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/10 dark:bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5] p-2.5">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  LinkedIn
                </h4>
                <a
                  href="https://www.linkedin.com/in/arya-shibu-dhanya/"
                  target="_blank"
                  rel="noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300 hover:underline focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none rounded-md"
                >
                  <span>Arya Shibu Dhanya</span>
                  <span className="transform group-hover/link:translate-x-0.5 transition-transform">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
