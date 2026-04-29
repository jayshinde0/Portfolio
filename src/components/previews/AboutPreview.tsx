import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Code, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
            <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Who I Am</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-3">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Me</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto">A brief introduction to who I am and what I do</p>
        </motion.div>

        {/* Preview Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl p-8" style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Full Stack Developer & Innovator</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Passionate about creating innovative web solutions and participating in hackathons.
                Currently pursuing my degree while gaining hands-on experience through multiple internships
                and competitive programming challenges.
              </p>

              {/* Internship Experience */}
              <div className="mb-6 space-y-3">
                <div className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <h4 className="text-sm font-semibold text-white mb-1">Full Stack Developer Intern</h4>
                  <p className="text-xs text-blue-400/70">Ayunext Solutions (Sept 2025 – Feb 2026)</p>
                  <p className="text-xs text-gray-500 mt-1">Built SEO-friendly UIs with Next.js, improved page load times by 30%+</p>
                </div>
                <div className="p-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <h4 className="text-sm font-semibold text-white mb-1">Frontend Developer Intern</h4>
                  <p className="text-xs text-blue-400/70">Golden Dreams Software Solutions (June 2024 – Aug 2024)</p>
                  <p className="text-xs text-gray-500 mt-1">Developed responsive websites, increased user engagement by 15%</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400/60" />
                  Tech Stack
                </h4>
                <div className="space-y-3 text-sm">
                  <div><span className="text-gray-300 font-medium">• Programming Languages: </span><span className="text-gray-500">Python, Java, C, C++, JavaScript, PHP</span></div>
                  <div><span className="text-gray-300 font-medium">• Frontend Development: </span><span className="text-gray-500">HTML, CSS, React, Tailwind CSS, Bootstrap, Next.js</span></div>
                  <div><span className="text-gray-300 font-medium">• Backend Frameworks: </span><span className="text-gray-500">Node.js, Express.js</span></div>
                  <div><span className="text-gray-300 font-medium">• Databases: </span><span className="text-gray-500">MySQL, SQLite, MongoDB</span></div>
                  <div><span className="text-gray-300 font-medium">• Developer Tools: </span><span className="text-gray-500">VS Code, GitHub, Android Studio</span></div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[{icon:User,val:'2',label:'Internships'},{icon:Code,val:'7+',label:'Projects'},{icon:Lightbulb,val:'4+',label:'Awards'}].map((s,i)=>(
                  <div key={i} className="text-center p-3 rounded-xl" style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}>
                    <s.icon className="w-4 h-4 text-blue-400/60 mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl mb-6"
                style={{border:'3px solid rgba(99,162,255,0.2)',boxShadow:'0 0 40px rgba(59,130,246,0.1)'}}>
                <img src="/JAY_2.webp" alt="Jay Shinde" className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>

              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-white">Jay Shinde</h4>
                <p className="text-blue-400/70 font-medium">Computer Engineering Student</p>
                <p className="text-gray-500 text-sm">K.K. Wagh Institute of Engineering</p>
                <div className="space-y-2 mt-4">
                  {['Open Source Contributor','Hackathon Enthusiast','Problem Solver'].map((h,i)=>(
                    <div key={i} className="flex items-center justify-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full" />
                      <span className="text-gray-400">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-8">
            <motion.button onClick={() => navigate('/about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-300 transition-all duration-300"
              style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}
              whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(59,130,246,0.2)' }}
              whileTap={{ scale: 0.97 }}>
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