import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, icon: Palette },
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'jQuery', level: 85, icon: Code },
    { name: 'React', level: 88, icon: Code },
    { name: 'Spring Boot', level: 80, icon: Database },
    { name: 'Python', level: 75, icon: Code },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Section */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-50"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <img
                        src="/Jay.jpeg"
                        alt="Jay Shinde"
                        className="relative w-32 h-32 rounded-full object-cover border-4 border-gradient-to-r from-cyan-400 to-purple-600 shadow-2xl"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 font-orbitron">
                    Jay Shinde
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed mb-6">
                    B.Tech Computer Science Student at KKWIEER with hands-on experience 
                    in web development. Passionate about creating innovative digital solutions 
                    and continuously learning new technologies to build impactful applications.
                  </p>

                  {/* Education & Experience */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Education</h4>
                        <p className="text-sm text-gray-300">B.Tech Computer Science</p>
                        <p className="text-xs text-gray-400">KKWIEER</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <Briefcase className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white">Internship</h4>
                        <p className="text-sm text-gray-300">Golden Dreams Software Solutions</p>
                        <p className="text-xs text-gray-400">Jun 2023 - Jul 2023 · Nashik, Maharashtra</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Developed 3 comprehensive projects using HTML, CSS, JavaScript, and jQuery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-8 font-orbitron text-cyan-400">
                Technical Skills
              </h3>
              
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-cyan-400" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      animate={{
                        backgroundPosition: ['0%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Professional Highlights */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl border border-cyan-500/20"
              >
                <h4 className="text-lg font-bold text-cyan-400 mb-4">Professional Highlights</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Successfully completed internship at Golden Dreams Software Solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Developed 3 comprehensive web development projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Enhanced problem-solving abilities through hands-on training
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Collaborated effectively with development teams
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;