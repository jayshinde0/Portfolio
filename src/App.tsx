import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import TechStackPage from './pages/TechStackPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)] pointer-events-none" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<WorkExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;