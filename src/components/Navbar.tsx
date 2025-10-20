import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Code, Trophy, Layers, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Home', icon: Home, sectionId: 'hero' },
    { id: '/about', label: 'About', icon: User, sectionId: 'about' },
    { id: '/experience', label: 'Experience', icon: Briefcase, sectionId: 'work-experience' },
    { id: '/projects', label: 'Projects', icon: Code, sectionId: 'projects' },
    { id: '/achievements', label: 'Achievements', icon: Trophy, sectionId: 'achievements' },
    { id: '/tech-stack', label: 'Tech Stack', icon: Layers, sectionId: 'tech-stack' },
    { id: '/contact', label: 'Contact', icon: Mail, sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    // Always navigate to the page
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Jay Shinde
              </motion.div>
              <motion.div
                className="ml-2 w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      location.pathname === item.id
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </span>
                    
                    {location.pathname === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full border border-cyan-400/30"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute top-16 left-4 right-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-all duration-300 ${
                      location.pathname === item.id
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border-l-4 border-cyan-400'
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    
                    {location.pathname === item.id && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1]
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;