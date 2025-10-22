import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jayshinde0', color: 'hover:text-gray-400', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jayshinde10/', color: 'hover:text-blue-400', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jayshinde4554@gmail.com', color: 'hover:text-purple-400', label: 'Email' },
  ];

  const codingQuotes = [
    "Code is poetry written in logic.",
    "First, solve the problem. Then, write the code.",
    "The best error message is the one that never shows up.",
    "Clean code always looks like it was written by someone who cares.",
    "Programming isn't about what you know; it's about what you can figure out."
  ];





  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % codingQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [codingQuotes.length]);

  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* No background - inherit from parent App component */}

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
              Jay Shinde
            </h3>
            <p className="text-gray-400 text-sm">
              B.Tech Computer Science Student | Web Developer
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Building the future, one line of code at a time
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-400 ${social.color} transition-all duration-300 group`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Coding Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-8 max-w-2xl"
          >
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-gray-300 text-center italic text-sm md:text-base font-light"
            >
              "{codingQuotes[currentQuote]}"
            </motion.p>
          </motion.div>



          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-8 text-sm"
          >
            <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Projects</a>
            <a href="#achievements" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Achievements</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 text-sm flex items-center justify-center gap-2 border-t border-white/10 pt-6"
          >
            <span>© {new Date().getFullYear()} Jay Shinde. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>Made with passion</span>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              ↑
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;