import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (target) => {
    if (target === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(`/${target}`);
    }
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-secondary font-semibold"
      : "hover:text-secondary transition";

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, delay: 0.5 }}
      className="w-full border-t border-gray-300 dark:border-gray-700 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.05)] px-6 py-8 bg-white dark:bg-primary text-sm"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-gray-700 dark:text-gray-300">
        {/* Developer Info */}
        <div>
          <h2 className="font-semibold text-secondary text-lg mb-2">Azim Shaikh</h2>
          <p>MERN Stack Developer</p>
          <p>Based in Navi Mumbai, India</p>
          <p>Available for freelance & full-time</p>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h2 className="font-semibold text-secondary text-lg mb-2">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => handleClick("home")}
                className={`cursor-pointer ${isActive("/")}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("projects")}
                className={`cursor-pointer ${isActive("/projects")}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("contact")}
                className={`cursor-pointer ${isActive("/contact")}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="font-semibold text-secondary text-lg mb-2">Get in Touch</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope />
              <a
                href="mailto:azimshaikh2400@gmail.com"
                className="hover:text-secondary"
              >
                azimshaikh2400@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone />
              <span>+91 9769622838</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaWhatsapp />
              <span>+91 8080989896</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt />
              <span>Taloja Phase 2, Navi Mumbai</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a
              href="https://github.com/Zolddd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/azim-shaikh-3b12a3282/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400 border-t pt-4 border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Azim Shaikh — Designed & coded by me.
      </div>
    </motion.footer>
  );
};

export default Footer;
