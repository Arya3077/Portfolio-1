import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:arya.shibu.dhanya1200@gmail.com?subject=Contact from ${form.name}&body=${form.message} - Email: ${form.email}`;
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-lg flex flex-col gap-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <section
      id="Contact"
      className="bg-primary dark:bg-primary-dark px-4 md:px-10 py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <h1 className="text-4xl md:text-5xl font-mono font-extrabold text-[#10002B] text-center mb-12">
          LET'S CONNECT
        </h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
