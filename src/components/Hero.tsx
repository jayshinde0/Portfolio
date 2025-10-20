import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import Particles from './Particles';
import RotatingText from './RotatingText';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* Glowing Name */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-orbitron"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Jay Shinde
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-xl opacity-50"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Jay Shinde
          </motion.div>
        </motion.h1>

        {/* Subtitle with Rotating Text */}
        <motion.div
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300 font-light flex flex-wrap justify-center items-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>I'm a</span>
          <RotatingText
            texts={['Web Developer', 'MERN Stack Developer', 'Next.js']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-semibold shadow-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                backgroundPosition: ['0%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.button>
          <a href="/resume.pdf" download>
            <motion.button
              className="group relative px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
              <motion.div
                className="absolute inset-0 border-2 border-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300">
          <span className="text-sm mb-2 font-light">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;