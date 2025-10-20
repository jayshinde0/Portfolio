import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
 const skills = [
  { name: 'React.js', level: 88, icon: Code },
  { name: 'Next.js', level: 85, icon: Code },
  { name: 'Java', level: 80, icon: Code },
  { name: 'C/C++', level: 82, icon: Code },
  { name: 'Node.js', level: 75, icon: Code },
  { name: 'Express.js', level: 74, icon: Code },
  { name: 'MongoDB', level: 78, icon: Code },
  { name: 'Docker', level: 60, icon: Code },
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
                        src="/JAY_2.jpg"
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

                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                        <Briefcase className="w-5 h-5 text-purple-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white">Full Stack Developer Intern</h4>
                          <p className="text-sm text-gray-300">Ayunext Solutions</p>
                          <p className="text-xs text-gray-400">Sept 2025 - Nov 2025 · Remote</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Built SEO-friendly UIs with Next.js & React.js, improved page load times by 30%+
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                        <Briefcase className="w-5 h-5 text-green-400 mt-1" />
                        <div>
                          <h4 className="font-semibold text-white">Frontend Developer Intern</h4>
                          <p className="text-sm text-gray-300">Golden Dreams Software Solutions</p>
                          <p className="text-xs text-gray-400">June 2024 - Aug 2024 · On-site</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Developed responsive websites, increased user engagement by 15%
                          </p>
                        </div>
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
                    <span className="text-purple-400 mt-1">•</span>
                    Completed Full Stack Developer Internship at Ayunext Solutions (2025)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    Completed Frontend Developer Internship at Golden Dreams Software (2024)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    Improved web performance by 30%+ through optimization techniques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    Enhanced user engagement by 15% with responsive UI/UX design
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Gained expertise in modern web technologies and frameworks
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