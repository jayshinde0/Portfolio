import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Code, Trophy, Layers, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Home', icon: Home },
    { id: '/about', label: 'About', icon: User },
    { id: '/experience', label: 'Experience', icon: Briefcase },
    { id: '/projects', label: 'Projects', icon: Code },
    { id: '/achievements', label: 'Achievements', icon: Trophy },
    { id: '/tech-stack', label: 'Tech Stack', icon: Layers },
    { id: '/contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="cursor-pointer"
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl font-bold text-white tracking-tight">
                Jay Shinde
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full"
                        layoutId="navbar-underline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(100, 160, 255, 0.8), transparent)',
                          boxShadow: '0 0 8px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.2)',
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-2xl font-medium tracking-tight ${
                    location.pathname === item.id ? 'text-white' : 'text-gray-500'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.label}
                  {location.pathname === item.id && (
                    <div
                      className="h-[2px] w-full mt-1 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(100, 160, 255, 0.8), transparent)',
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
