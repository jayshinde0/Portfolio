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
import CodingStats from '../components/CodingStats';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen relative bg-gray-950"
    >
      {/* Page Background with Squares */}
      <div className="fixed inset-0 -z-10">
        <Squares 
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(0, 232, 255, 0.1)"
          hoverFillColor="rgba(0, 232, 255, 0.05)"
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative z-10">
        <Hero />
      </section>

      {/* Terminal Section */}
      <section id="terminal-section" className="w-full py-16 relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-center">
              Interactive Terminal
            </h2>
            <p className="text-gray-400 text-center mt-2">
              Explore my portfolio, projects, and experience through an interactive terminal interface
            </p>
          </motion.div>
          
          {/* Terminal Component - Centered Container */}
          <div className="flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10"
            >
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutPreview />
      </section>

      {/* Work Experience Section */}
      <section id="work-experience">
        <WorkExperiencePreview />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsPreview />
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <AchievementsPreview />
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack">
        <TechStackPreview />
      </section>

      {/* Coding Stats Section */}
      <section id="coding-stats">
        <ErrorBoundary>
          <CodingStats />
        </ErrorBoundary>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactPreview />
      </section>

      {/* Terminal Toggle Button - Fixed */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setShowModal(!showModal)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-terminal"
          >
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[85vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="bg-gray-900 px-6 py-4 rounded-t-lg border border-b-0 border-blue-500 flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <h3 className="text-gray-400 font-semibold">Interactive Terminal - Full View</h3>
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
            <div className="bg-gray-950 border border-t-0 border-blue-500 rounded-b-lg overflow-hidden flex-1">
              <Terminal />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HomePage;