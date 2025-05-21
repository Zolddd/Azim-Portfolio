import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center transition-all duration-300 bg-white dark:bg-primary"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-4 text-secondary"
      >
        Hi, I'm Azim Shaikh
      </motion.h1>

      {/* Role */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-2xl text-gray-800 dark:text-gray-200 max-w-xl mb-3"
      >
        MERN Stack Developer | Frontend Engineer | Freelancer
      </motion.p>

      {/* About line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-md mb-6"
      >
        I create modern, responsive web apps using React, Node.js, and MongoDB — with a strong focus on UI/UX.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="/projects"
          className="bg-secondary text-white px-6 py-3 rounded-md text-sm font-semibold transition hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="border border-secondary text-secondary px-6 py-3 rounded-md text-sm font-semibold transition hover:bg-secondary hover:text-white"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
    </PageWrapper>
  );
};

export default Home;
