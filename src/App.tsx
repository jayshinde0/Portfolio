import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

// Route order for determining direction
const routeOrder: { [key: string]: number } = {
  '/': 0,
  '/about': 1,
  '/experience': 2,
  '/projects': 3,
  '/achievements': 4,
  '/tech-stack': 5,
  '/contact': 6,
};

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [prevPath, setPrevPath] = useState(location.pathname);
  
  // Determine direction based on route order
  const currentOrder = routeOrder[location.pathname] ?? 0;
  const prevOrder = routeOrder[prevPath] ?? 0;
  const direction = currentOrder > prevOrder ? 1 : -1;

  useEffect(() => {
    setPrevPath(location.pathname);
  }, [location.pathname]);

  // Page transition variants
  const pageVariants = {
    initial: {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    },
    exit: {
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="overflow-hidden"
        >
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-white text-xl"
              >
                Loading...
              </motion.div>
            </div>
          }>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<WorkExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/tech-stack" element={<TechStackPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      
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
        
        <div className="relative z-10 overflow-x-hidden">
          <AppContent />
        </div>
      </div>
    </Router>
  );
}

export default App;