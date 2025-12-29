import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const technologies = [
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Programming', level: 'Intermediate' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Programming', level: 'Advanced' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Programming', level: 'Advanced' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Programming', level: 'Intermediate' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend', level: 'Advanced' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend', level: 'Intermediate' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg', category: 'Frontend', level: 'Advanced' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend', level: 'Intermediate' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend', level: 'Intermediate' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', category: 'Backend', level: 'Intermediate' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database', level: 'Intermediate' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database', level: 'Intermediate' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools', level: 'Advanced' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg', category: 'Backend', level: 'Beginner' },
  ];

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredTechnologies = selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getLevelStyle = (level: string) => {
    switch (level) {
      case 'Advanced': return 'text-white bg-white/10';
      case 'Intermediate': return 'text-gray-300 bg-white/5';
      case 'Beginner': return 'text-gray-400 bg-white/[0.02]';
      default: return 'text-gray-500';
    }
  };

  return (
    <section className="py-24 px-4 bg-black min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Tech</span>
            <span className="text-gray-500"> Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Technologies I've mastered through hands-on projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-white text-black'
                  : 'border border-white/20 text-gray-400 hover:text-white hover:border-white/40'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-60">
                  ({technologies.filter(t => t.category === category).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="border border-white/10 rounded-xl p-6 bg-neutral-900 hover:border-white/30 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <h3 className="text-sm font-medium text-white mb-2">{tech.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getLevelStyle(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
