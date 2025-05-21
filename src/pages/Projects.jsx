import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Job Portal Web App',
    description:
      'A full-featured MERN stack job portal with role-based dashboards, JWT authentication, job posting, and application tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    live: 'https://job-portal-mern-project.netlify.app',
    github: 'https://github.com/Zolddd/job-portal-mern',
  },
  {
    title: 'Mellow Caps Online Store',
    description:
      'A modern and responsive frontend cap store using custom CSS and React. Built with clean UI principles and mobile-first design.',
    tech: ['React', 'Custom CSS'],
    live: 'https://mellow-caps.netlify.app',
    github: 'https://github.com/Zolddd/Mellow-caps',
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <section className="min-h-screen px-6 py-20 text-center bg-white dark:bg-primary transition-all duration-300">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-secondary mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-white transition-all duration-300 hover:bg-secondary hover:text-white dark:hover:bg-secondary dark:hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary font-medium flex items-center gap-2 hover:underline"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary font-medium flex items-center gap-2 hover:underline"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-16"
        >
          <a
            href="https://github.com/Zolddd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-secondary text-white text-sm font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            View More on GitHub
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Projects;
