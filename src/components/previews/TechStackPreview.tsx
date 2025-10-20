import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechStackPreview = () => {
  const navigate = useNavigate();

  const techCategories = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend",
      techs: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tools",
      techs: ["Git", "Docker", "VS Code", "Figma"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      techs: ["Python", "Java", "C", "C++", "JavaScript", "PHP"],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Preview Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-3`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.techs.slice(0, 3).map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 p-2 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{tech}</span>
                  </div>
                ))}
                {category.techs.length > 3 && (
                  <div className="text-center">
                    <span className="text-gray-500 text-xs">+{category.techs.length - 3} more</span>
                  </div>
                )}
              </div>

              <div className={`absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => navigate('/tech-stack')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Full Tech Stack</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TechStackPreview;