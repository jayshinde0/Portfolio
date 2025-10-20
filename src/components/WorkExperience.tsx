import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Zap, Image, Globe } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Ayunext Solutions",
      position: "Full Stack Developer Intern",
      duration: "Sept 2025 – Nov 2025",
      location: "Remote",
      description: "Architected dynamic UIs and engineered significant performance gains through modern web technologies and optimization techniques.",
      achievements: [
        {
          icon: <Globe className="w-5 h-5" />,
          text: "Architected and developed highly responsive UIs using Next.js and React.js, translating complex designs into pixel-perfect components across all devices"
        },
        {
          icon: <Zap className="w-5 h-5" />,
          text: "Engineered 30%+ performance gains through Server-Side Rendering (SSR) and Static Site Generation (SSG), enhancing user retention and SEO ranking"
        },
        {
          icon: <Image className="w-5 h-5" />,
          text: "Spearheaded front-end optimization initiatives, implementing modern image formats and lazy loading to reduce file sizes by 50%"
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Contributed to full-lifecycle development from design to deployment, ensuring high performance and scalability through testing and optimization"
        }
      ],
      color: "from-purple-400 to-blue-400"
    },
    {
      company: "Golden Dreams Software Solutions",
      position: "Frontend Developer Intern",
      duration: "June 2024 – Aug 2024",
      location: "On-site",
      description: "Developed modern responsive websites and spearheaded UI/UX modernization using cutting-edge frontend technologies.",
      achievements: [
        {
          icon: <Globe className="w-5 h-5" />,
          text: "Developed modern, cross-browser compatible websites using HTML, CSS, JavaScript, and React.js, ensuring consistent user experience across all devices"
        },
        {
          icon: <Zap className="w-5 h-5" />,
          text: "Spearheaded UI/UX modernization using Tailwind CSS and Bootstrap, achieving 15% increase in user engagement through enhanced aesthetics"
        },
        {
          icon: <Image className="w-5 h-5" />,
          text: "Customized WordPress environments with bespoke themes and plugins, improving content management workflow efficiency by 20%"
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Translated static mockups into fully functional, interactive web pages with meticulous attention to design fidelity and user experience"
        }
      ],
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and contributions in software development
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((experience, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: expIndex * 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group">
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {experience.position}
                    </h3>
                    <p className={`text-xl font-semibold mb-3 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                      {experience.company}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                      {experience.description}
                    </p>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Key Responsibilities & Achievements
                  </h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {experience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="text-cyan-400 mt-0.5 flex-shrink-0">
                          {achievement.icon}
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {achievement.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${experience.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr ${experience.color} opacity-10 rounded-full blur-lg group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">30%+</div>
            <p className="text-gray-400 text-sm">Performance Improvement</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
            <p className="text-gray-400 text-sm">File Size Reduction</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">15%</div>
            <p className="text-gray-400 text-sm">User Engagement Increase</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="text-3xl font-bold text-cyan-400 mb-2">20%</div>
            <p className="text-gray-400 text-sm">Workflow Efficiency Gain</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;