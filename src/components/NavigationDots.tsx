import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work-experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {sections.map((section, index) => (
        <motion.button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            activeSection === index
              ? 'bg-cyan-400 border-cyan-400'
              : 'bg-transparent border-gray-500 hover:border-cyan-400'
          }`} />
          
          {/* Tooltip */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {section.label}
          </div>
          
          {/* Glow Effect */}
          {activeSection === index && (
            <motion.div
              className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default NavigationDots;