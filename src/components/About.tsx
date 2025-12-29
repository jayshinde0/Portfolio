import { motion } from 'framer-motion';
import { Code, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React.js', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C/C++', level: 82 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 74 },
    { name: 'MongoDB', level: 78 },
    { name: 'Docker', level: 60 },
  ];

  return (
    <section className="py-24 px-4 bg-black min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white">About</span>
            <span className="text-gray-500"> Me</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border border-white/20 rounded-2xl p-8 bg-neutral-900">
                {/* Profile Image */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <img
                      src="/JAY_2.jpg"
                      alt="Jay Shinde"
                      className="w-32 h-32 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-4 text-white">
                  Jay Shinde
                </h3>
                <p className="text-gray-300 text-center leading-relaxed mb-8">
                  B.Tech Computer Science Student at KKWIEER with hands-on experience 
                  in web development. Passionate about creating innovative digital solutions.
                </p>

                {/* Education & Experience */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 border border-white/20 rounded-xl bg-white/5">
                    <GraduationCap className="w-5 h-5 text-white mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Education</h4>
                      <p className="text-sm text-gray-300">B.Tech Computer Science</p>
                      <p className="text-xs text-gray-400">KKWIEER</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 border border-white/20 rounded-xl bg-white/5">
                    <Briefcase className="w-5 h-5 text-white mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Full Stack Developer</h4>
                      <p className="text-sm text-gray-300">Ayunext Solutions</p>
                      <p className="text-xs text-gray-400">Sept 2025 - Feb 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 border border-white/20 rounded-xl bg-white/5">
                    <Briefcase className="w-5 h-5 text-white mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Frontend Developer</h4>
                      <p className="text-sm text-gray-300">Golden Dreams Software</p>
                      <p className="text-xs text-gray-400">June 2024 - Aug 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-8 text-gray-300 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Highlights */}
              <motion.div
                className="mt-12 p-6 border border-white/20 rounded-xl bg-neutral-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-lg font-medium text-white mb-4">Highlights</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white">→</span>
                    Improved web performance by 30%+
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">→</span>
                    Enhanced user engagement by 15%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white">→</span>
                    Built SEO-friendly UIs with Next.js
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
