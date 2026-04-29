import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/previews/AboutPreview';
import WorkExperiencePreview from '../components/previews/WorkExperiencePreview';
import ProjectsPreview from '../components/previews/ProjectsPreview';
import AchievementsPreview from '../components/previews/AchievementsPreview';
import TechStackPreview from '../components/previews/TechStackPreview';
import ContactPreview from '../components/previews/ContactPreview';
import Terminal from '../components/Terminal';
import Squares from '../components/Squares';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative bg-black"
    >
      {/* Page Background with Squares - Black & White Theme */}
      <div className="fixed inset-0 -z-10">
        <Squares 
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.05)"
          hoverFillColor="rgba(255, 255, 255, 0.03)"
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 bg-black">
        <Hero />
      </section>

      {/* Terminal Section */}
      <section id="terminal-section" className="w-full py-20 relative z-10 bg-black overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10">
            <div className="flex items-center gap-2.5 mb-4 justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
              <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Try It Out</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-3">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Terminal</span>
            </h2>
            <p className="text-gray-500 text-center max-w-xl mx-auto">Explore my portfolio, projects, and experience through an interactive terminal interface</p>
          </motion.div>
          <div className="flex justify-center w-full">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
              className="w-full max-w-4xl rounded-2xl overflow-hidden" style={{border:'1px solid rgba(99,162,255,0.12)',boxShadow:'0 0 40px rgba(59,130,246,0.06)'}}>
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-black overflow-hidden">
        <AboutPreview />
      </section>

      {/* Work Experience Section */}
      <section id="work-experience" className="relative z-10 bg-black overflow-hidden">
        <WorkExperiencePreview />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 bg-black overflow-hidden">
        <ProjectsPreview />
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative z-10 bg-black overflow-hidden">
        <AchievementsPreview />
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="relative z-10 bg-black overflow-hidden">
        <TechStackPreview />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-black overflow-hidden">
        <ContactPreview />
      </section>

      {/* Terminal Toggle Button - Fixed */}
      <div className="fixed bottom-8 right-8 z-50">
        <button onClick={() => setShowModal(!showModal)}
          className="px-4 py-3 rounded-xl flex items-center gap-2 font-semibold text-blue-300 transition-all duration-300 hover:scale-105"
          style={{background:'rgba(59,130,246,0.15)',border:'1px solid rgba(99,162,255,0.3)',boxShadow:'0 0 20px rgba(59,130,246,0.15)',backdropFilter:'blur(12px)'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          {showModal ? 'Close' : 'Open'} Terminal
        </button>
      </div>

      {/* Modal Terminal Overlay */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[85vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 rounded-t-xl flex items-center justify-between" style={{background:'rgb(10,10,14)',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full" style={{background:'rgba(255,255,255,0.15)'}}></span>
                <span className="w-3 h-3 rounded-full" style={{background:'rgba(255,255,255,0.25)'}}></span>
                <span className="w-3 h-3 rounded-full" style={{background:'rgba(255,255,255,0.35)'}}></span>
              </div>
              <h3 className="text-gray-500 font-semibold text-sm">Interactive Terminal — Full View</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Terminal Container */}
            <div className="overflow-hidden flex-1" style={{background:'rgb(6,6,10)',borderTop:'none'}}>
              <Terminal />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePage;