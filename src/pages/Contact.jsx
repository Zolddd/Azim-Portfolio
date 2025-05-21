import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  const [status, setStatus] = useState(""); // success | error | ""

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000); // Auto-dismiss after 3s
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/mdkgjjgp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form Error:", error);
      setStatus("error");
    }
  };

  return (
    <PageWrapper>
      <section
        id="contact"
        className="min-h-screen px-6 py-20 bg-white dark:bg-primary text-center transition-all duration-300"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-secondary mb-4"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12"
        >
          Feel free to reach out for opportunities, collaborations, or just a
          quick hello!
        </motion.p>

        {/* Notification */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl max-w-lg mx-auto mb-8 shadow-md"
            >
              🎉 Your message has been sent successfully!
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-red-100 border border-red-300 text-red-800 px-6 py-4 rounded-xl max-w-lg mx-auto mb-8 shadow-md"
            >
              ❌ Oops! Something went wrong. Please try again.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Info and Form */}
        <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-secondary" />
              <span className="dark:text-white">azimshaikh2400@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-secondary" />
              <span className="dark:text-white">+91 9769622838</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-secondary" />
              <span className="dark:text-white">+91 8080989896 (WhatsApp)</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary" />
              <span className="dark:text-white">
                Taloja Phase 2, Navi Mumbai, Maharashtra, India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-secondary" />
              <a
                href="https://www.linkedin.com/in/azim-shaikh-3b12a3282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-secondary" />
              <a
                href="https://github.com/Zolddd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto md:mx-0 px-8 py-10 rounded-2xl border border-gray-200 dark:border-gray-700
             bg-white dark:bg-primary shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm
             text-left"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full mb-6 px-5 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600
               text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent
               transition"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full mb-6 px-5 py-3 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600
               text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent
               transition"
            />
            <textarea
              name="message"
              rows="6"
              required
              placeholder="Your Message"
              className="w-full mb-8 px-5 py-4 rounded-xl bg-transparent border border-gray-300 dark:border-gray-600
               text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent
               resize-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-secondary text-white font-semibold text-lg
               hover:bg-secondary/90 active:scale-[0.97] transition-transform shadow-md"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
