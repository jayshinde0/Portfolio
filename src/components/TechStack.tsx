import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const technologies = [
    { 
      name: 'C++', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 
      color: 'from-blue-600 to-blue-800', 
      category: 'Programming', 
      level: 'Intermediate' 
    },
    { 
      name: 'Java', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 
      color: 'from-orange-500 to-red-600', 
      category: 'Programming', 
      level: 'Advanced' 
    },
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
      color: 'from-yellow-400 to-orange-400', 
      category: 'Programming', 
      level: 'Advanced' 
    },
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
      color: 'from-blue-400 to-yellow-400', 
      category: 'Programming', 
      level: 'Intermediate' 
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
      color: 'from-blue-400 to-cyan-400', 
      category: 'Frontend', 
      level: 'Intermediate' 
    },
    { 
      name: 'Bootstrap', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', 
      color: 'from-purple-500 to-purple-700', 
      category: 'Frontend', 
      level: 'Advanced' 
    },
    { 
      name: 'TailwindCSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg', 
      color: 'from-cyan-400 to-blue-500', 
      category: 'Frontend', 
      level: 'Intermediate' 
    },
    { 
      name: 'Django', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', 
      color: 'from-green-600 to-green-800', 
      category: 'Backend', 
      level: 'Intermediate' 
    },
    { 
      name: 'Apache', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', 
      color: 'from-red-500 to-red-700', 
      category: 'Server', 
      level: 'Beginner' 
    },
      { 
      name: 'Spring boot', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg', 
      color: 'from-green-500 to-green-700', 
      category: 'Server', 
      level: 'Beginner' 
    },
    { 
      name: 'WordPress', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', 
      color: 'from-blue-500 to-gray-600', 
      category: 'CMS', 
      level: 'Intermediate' 
    },
    { 
      name: 'SQLite', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', 
      color: 'from-blue-500 to-blue-700', 
      category: 'Database', 
      level: 'Intermediate' 
    },
    { 
      name: 'MySQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 
      color: 'from-orange-400 to-orange-600', 
      category: 'Database', 
      level: 'Intermediate' 
    },
    { 
      name: 'GitHub', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 
      color: 'from-gray-400 to-gray-600', 
      category: 'Tools', 
      level: 'Advanced' 
    },
    { 
    name: 'MongoDB', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
    color: 'from-green-400 to-green-600', 
    category: 'Database', 
    level: 'Intermediate' 
  },
  { 
    name: 'Express.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 
    color: 'from-gray-400 to-gray-600', 
    category: 'Backend', 
    level: 'Intermediate' 
  },
  { 
    name: 'Node.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
    color: 'from-green-500 to-green-700', 
    category: 'Backend', 
    level: 'Intermediate' 
  },
  { 
    name: 'Next.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 
    color: 'from-gray-600 to-gray-800', 
    category: 'Frontend', 
    level: 'Intermediate' 
  }
  ];

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools', 'CMS', 'Server'];

  const filteredTechnologies = selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3, 
      rotateY: -180,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: 0.3,
      rotateY: 180,
      y: -50,
      transition: {
        duration: 0.4
      }
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Beginner': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 relative overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20 sm:opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(34, 211, 238, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced Floating Code Elements - Responsive */}
        {['<div>', '</div>', '{...}', '[]', '()', '=>', '&&', '||', '===', '!==', 'const', 'let', 'var', 'function'].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute text-cyan-400/10 sm:text-cyan-400/20 text-lg sm:text-2xl md:text-4xl font-mono font-bold pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.05, 0.2, 0.05],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Binary Rain Effect - Reduced for mobile */}
        {Array.from({ length: window.innerWidth < 768 ? 10 : 20 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-green-400/5 sm:text-green-400/10 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10%',
            }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j} className="mb-1 sm:mb-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Enhanced Title with Animation - Mobile Responsive */}
          <motion.div
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-6xl font-bold font-orbitron mb-4 relative"
              animate={{
                textShadow: [
                  '0 0 20px rgba(34, 211, 238, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.5)',
                  '0 0 20px rgba(34, 211, 238, 0.5)',
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-pulse">
                Tech Stack
              </span>
              
              {/* Animated Underline */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.h2>

            <motion.p
              className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              A comprehensive collection of technologies I've mastered through hands-on projects and continuous learning
            </motion.p>
          </motion.div>

          {/* Enhanced Category Filter - Mobile Responsive */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-16 px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden text-xs sm:text-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: selectedCategory === category 
                    ? '0 0 30px rgba(34, 211, 238, 0.4)' 
                    : '0 0 20px rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20"
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
                <span className="relative z-10">
                  {category}
                  {category !== 'All' && (
                    <span className="ml-1 sm:ml-2 text-xs opacity-70">
                      ({technologies.filter(tech => tech.category === category).length})
                    </span>
                  )}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Enhanced Tech Cards Grid - Mobile Responsive */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="group relative"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  {/* Enhanced Main Card - Mobile Responsive */}
                  <div className="relative h-32 sm:h-40 lg:h-44 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500">
                    {/* Enhanced Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Animated Border Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100"
                      style={{
                        background: `conic-gradient(from 0deg, transparent, ${tech.color.split(' ')[1]}, transparent) border-box`,
                        WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'exclude',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Content - Mobile Responsive */}
                    <div className="relative h-full flex flex-col items-center justify-center p-2 sm:p-4">
                      {/* Enhanced Logo - Mobile Responsive */}
                      <motion.div
                        className="relative mb-2 sm:mb-4"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        <motion.img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter drop-shadow-lg"
                          animate={{
                            filter: [
                              'drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))',
                              'drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))',
                              'drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))',
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Logo Glow Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-cyan-400/50 opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>

                      {/* Enhanced Name - Mobile Responsive */}
                      <motion.h3 
                        className="text-xs sm:text-sm font-bold text-white text-center mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight"
                        animate={{
                          textShadow: [
                            '0 0 0px rgba(34, 211, 238, 0)',
                            '0 0 10px rgba(34, 211, 238, 0.5)',
                            '0 0 0px rgba(34, 211, 238, 0)',
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {tech.name}
                      </motion.h3>

                      {/* Enhanced Level Badge - Mobile Responsive */}
                      <motion.div 
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(tech.level)} backdrop-blur-sm`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech.level}
                      </motion.div>

                      {/* Category - Hidden on mobile */}
                      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-1 sm:px-2 py-1 rounded hidden sm:block">
                        {tech.category}
                      </div>
                    </div>

                    {/* Enhanced Floating Particles - Reduced for mobile */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          x: [0, Math.random() * 10 - 5, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}

                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Stats Section - Mobile Responsive */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/20 group overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                <motion.div
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-2 sm:mb-3"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: index * 0.3 + 0.5
                  }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(34, 211, 238, 0.5)',
                      '0 0 20px rgba(34, 211, 238, 0.8)',
                      '0 0 10px rgba(34, 211, 238, 0.5)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {stat.count}
                </motion.div>
                
                <div className="text-xs sm:text-sm text-gray-300 relative z-10 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;