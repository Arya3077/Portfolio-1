import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = `mailto:arya.shibu.dhanya1200@gmail.com?subject=Contact from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)} (From: ${encodeURIComponent(form.email)})`;
  };

  return (
    <div className="bg-white dark:bg-gray-800/90 shadow-xl rounded-3xl p-6 sm:p-8 border border-purple-100 dark:border-gray-700/80 w-full">
      <h3 className="text-2xl font-bold font-mono text-[#10002B] dark:text-white mb-6">
        Send Me a Message
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
            Your Name
          </label>
          <input
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
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
            Your Email
          </label>
          <input
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
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-2">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Hi Arya, I would like to connect with you regarding..."
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-900 dark:text-white text-sm sm:text-base transition-all resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-mono font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 cursor-pointer mt-2"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-sm font-semibold text-green-600 dark:text-green-400 text-center mt-2">
            Opening your email client to send the message!
          </p>
        )}
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      id="Contact"
      className="bg-primary dark:bg-gray-900 px-4 md:px-10 py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] dark:text-white mb-4">
            LET'S CONNECT
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Have a project in mind, opportunity, or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-gray-800/90 p-6 rounded-3xl border border-purple-100 dark:border-gray-700/80 shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300 text-xl font-bold">
                ✉️
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Email
                </h4>
                <a
                  href="mailto:arya.shibu.dhanya1200@gmail.com"
                  className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300 hover:underline break-all"
                >
                  arya.shibu.dhanya1200@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/90 p-6 rounded-3xl border border-purple-100 dark:border-gray-700/80 shadow-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-300 text-xl font-bold">
                🔗
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Social Profiles
                </h4>
                <div className="flex gap-4 mt-1 font-semibold text-purple-700 dark:text-purple-300 text-sm sm:text-base">
                  <a
                    href="https://github.com/Arya3077"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arya-shibu-dhanya/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
