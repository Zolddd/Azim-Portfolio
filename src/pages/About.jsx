import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiNetlify,
  SiRender,
  SiGit,
} from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 />, tooltip: 'HTML5' },
    { name: 'CSS3', icon: <FaCss3Alt />, tooltip: 'CSS3' },
    { name: 'JavaScript', icon: <SiJavascript />, tooltip: 'JavaScript' },
    { name: 'React.js', icon: <FaReact />, tooltip: 'React.js' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, tooltip: 'Tailwind CSS' },
    { name: 'Bootstrap', icon: <FaBootstrap />, tooltip: 'Bootstrap' },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs />, tooltip: 'Node.js' },
    { name: 'Express.js', icon: <SiExpress />, tooltip: 'Express.js' },
    { name: 'MongoDB', icon: <SiMongodb />, tooltip: 'MongoDB' },
  ],
  tools: [
    { name: 'Git', icon: <SiGit />, tooltip: 'Git' },
    { name: 'GitHub', icon: <FaGithub />, tooltip: 'GitHub' },
    { name: 'Postman', icon: <SiPostman />, tooltip: 'Postman' },
    { name: 'Netlify', icon: <SiNetlify />, tooltip: 'Netlify' },
    { name: 'Render', icon: <SiRender />, tooltip: 'Render' },
  ],
};

const About = () => {
  return (
    <PageWrapper>
      <section
        id="about"
        className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center bg-white dark:bg-primary transition-all duration-300"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-secondary mb-4"
        >
          About Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-md md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
        >
          Passionate full-stack developer turning ideas into interactive experiences.
        </motion.p>

        {/* Summary Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl text-sm md:text-base text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
        >
          <p>
            Hi, I’m <strong className="text-secondary">Azim Shaikh</strong> — a
            MERN Stack Developer with a knack for creating fast, responsive, and
            beautiful web apps. I combine strong frontend design with backend
            logic to build full-stack solutions that work seamlessly.
          </p>
          <p className="mt-4">
            From developing user interfaces in React, to managing APIs in Node
            and Express, to testing with Postman or deploying with Netlify and
            Render — I love shipping complete, elegant products that solve real
            problems.
          </p>
        </motion.div>

        {/* Grouped Skills */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold capitalize mb-4 text-secondary">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {items.map((skill, index) => (
                  <motion.div
                    key={index}
                    title={skill.tooltip}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center p-3 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white transition-all duration-300"
                  >
                    <div className="text-2xl mb-1">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
