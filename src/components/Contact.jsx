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
    // Open default email client using mailto
    window.location.href = `mailto:yourname@example.com?subject=Contact from ${form.name}&body=${form.message} - Email: ${form.email}`;
  };

  return (
    <>
    <h1 className="text-[#10002B] mt-40 text-4xl font-mono font-extrabold pl-10">Let's connect</h1>
    <div className="flex justify-center items-center py-12 bg-primary dark:bg-primary-dark">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-purple-700 dark:text-purple-400 mb-4">
          Contact Me
        </h2>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white"
          required
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white"
          required
        />

        {/* Message Input */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-700 dark:text-white"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section id="Contact">
        <ContactForm />
      </section>
    </>
  );
}

export default Contact