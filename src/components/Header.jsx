import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        theme === 'dark' ? 'bg-primary text-white' : 'bg-white text-black'
      } shadow-md`}
    >
      {/* Top Bar */}
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <motion.h1
          className="text-xl md:text-2xl font-bold text-secondary"
          whileHover={{ scale: 1.05 }}
        >
          Azim Shaikh
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={`capitalize hover:text-secondary transition ${
                location.pathname === item.path
                  ? 'text-secondary border-b-2 border-secondary'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <select
            value={theme}
            onChange={(e) => toggleTheme(e.target.value)}
            className={`rounded-md px-3 py-1 text-sm font-semibold border outline-none transition-all shadow-sm ${
              theme === 'dark'
                ? 'bg-gray-900 text-white border-gray-700'
                : 'bg-white text-black border-gray-300'
            }`}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          {/* Resume */}
          <a
            href="/Azimuddin_Shaikh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-3 py-1 rounded text-sm hover:scale-105 transition-transform"
          >
            Resume
          </a>

          {/* Socials */}
          <a
            href="https://github.com/Zolddd"
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/azim-shaikh-3b12a3282/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary"
          >
            <FaLinkedin className="text-lg" />
          </a>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-xl focus:outline-none">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown — pushes content below */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-3 py-4 border-t border-gray-300 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`capitalize text-base font-medium hover:text-secondary ${
                    location.pathname === item.path
                      ? 'text-secondary border-b-2 border-secondary'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
