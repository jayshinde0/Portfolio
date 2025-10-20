import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Code, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPreview = () => {
  const navigate = useNavigate();

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A brief introduction to who I am and what I do
          </p>
        </motion.div>

        {/* Preview Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Full Stack Developer & Innovator
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Passionate about creating innovative web solutions and participating in hackathons.
                Currently pursuing my degree while gaining hands-on experience through multiple internships
                and competitive programming challenges.
              </p>
              
              {/* Internship Experience */}
              <div className="mb-6 space-y-3">
                <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <h4 className="text-sm font-semibold text-purple-400 mb-1">Full Stack Developer Intern</h4>
                  <p className="text-xs text-gray-300">Ayunext Solutions (Sept 2025 – Nov 2025)</p>
                  <p className="text-xs text-gray-400 mt-1">Built SEO-friendly UIs with Next.js, improved page load times by 30%+</p>
                </div>
                <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <h4 className="text-sm font-semibold text-green-400 mb-1">Frontend Developer Intern</h4>
                  <p className="text-xs text-gray-300">Golden Dreams Software Solutions (June 2024 – Aug 2024)</p>
                  <p className="text-xs text-gray-400 mt-1">Developed responsive websites, increased user engagement by 15%</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  Tech Stack
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-purple-400 font-medium">• Programming Languages: </span>
                    <span className="text-gray-300">Python, Java, C, C++, JavaScript, PHP</span>
                  </div>
                  <div>
                    <span className="text-cyan-400 font-medium">• Frontend Development: </span>
                    <span className="text-gray-300">HTML, CSS, React, Tailwind CSS, Bootstrap, Next.js</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-medium">• Backend Frameworks: </span>
                    <span className="text-gray-300">Node.js, Express.js</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-medium">• Databases: </span>
                    <span className="text-gray-300">MySQL, SQLite, MongoDB</span>
                  </div>
                  <div>
                    <span className="text-orange-400 font-medium">• Developer Tools: </span>
                    <span className="text-gray-300">VS Code, GitHub, Android Studio</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <User className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold text-white">2</div>
                  <div className="text-gray-400 text-xs">Internships</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Code className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-xl font-bold text-white">7+</div>
                  <div className="text-gray-400 text-xs">Projects</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Lightbulb className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="text-xl font-bold text-white">4+</div>
                  <div className="text-gray-400 text-xs">Awards</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-br from-cyan-500/50 to-purple-600/50 shadow-2xl mb-6">
                <img
                  src="/JAY_2.jpg"
                  alt="Jay Shinde"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-gray-700/50">
                          <div class="text-center">
                            <svg class="w-16 h-16 text-cyan-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            <p class="text-gray-400">Jay Shinde</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Personal Info */}
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-white">Jay Shinde</h4>
                <p className="text-cyan-400 font-medium">Computer Engineering Student</p>
                <p className="text-gray-300 text-sm">K.K. Wagh Institute of Engineering</p>
                
                {/* Key Highlights */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Open Source Contributor</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Hackathon Enthusiast</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More About Me</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;