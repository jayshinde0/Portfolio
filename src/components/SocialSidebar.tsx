import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com/jayshinde0', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/jayshinde10', label: 'LinkedIn' },
  { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/jay_shinde__10/', label: 'Instagram' },
  { icon: <Mail className="w-5 h-5" />, href: 'mailto:jayshinde4554@email.com', label: 'Email' },
];

const SocialSidebar = () => {
  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      {/* LET'S CONNECT vertical text */}
      <span
        className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-medium"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Let's Connect
      </span>

      <div className="w-px h-8 bg-gray-700/50" />

      {socialLinks.map((link, i) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.2, y: -2 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 + i * 0.1 }}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
