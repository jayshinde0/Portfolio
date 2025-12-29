import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/jayshinde0', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jayshinde10/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jayshinde4554@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="py-16 px-4 border-t border-white/10 bg-black relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">jay.shinde</h3>
            <p className="text-gray-500 text-sm mt-1">Web Developer</p>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 border border-white/20 rounded-full text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Jay Shinde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
