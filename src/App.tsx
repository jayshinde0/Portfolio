import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Preloader from './components/Preloader';

// Lazy load non-critical pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WorkExperiencePage = lazy(() => import('./pages/WorkExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AchievementsPage = lazy(() => import('./pages/AchievementsPage'));
const TechStackPage = lazy(() => import('./pages/TechStackPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<WorkExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </motion.main>
      
      {/* Footer - Only show on non-home pages */}
      {!isHomePage && <Footer />}
    </>
  );
}

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <Router>
      {/* Preloader */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
      
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Minimal Background - Black & White Theme */}
        <div className="fixed inset-0 bg-black pointer-events-none z-0" />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none z-0" />
        
        <div className="relative z-10">
          <AppContent />
        </div>
      </div>
    </Router>
  );
}

export default App;