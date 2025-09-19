import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/jayshinde0', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jayshinde10/', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:jayshinde4554@gmail.com', color: 'hover:text-purple-400' },
  ];

  const matrixChars = '010110100101101001011010010110100101101001011010010110100101101001'.split('');

  return (
    <footer className="relative py-12 px-4 mt-20 overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

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
                className={`p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-400 ${social.color} transition-all duration-300 group`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-500 text-sm flex items-center gap-2"
          >

          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white group"
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