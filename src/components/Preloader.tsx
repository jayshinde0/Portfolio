import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<'together' | 'split' | 'photos' | 'expand' | 'done'>('together');

  useEffect(() => {
    // Phase 1: Names together for 0.8s
    const timer1 = setTimeout(() => setPhase('split'), 800);
    
    // Phase 2: Split and show box with photos for 2s
    const timer2 = setTimeout(() => setPhase('photos'), 1200);
    
    // Phase 3: Expand box to full screen after photos
    const timer3 = setTimeout(() => setPhase('expand'), 3500);
    
    // Phase 4: Complete
    const timer4 = setTimeout(() => setPhase('done'), 4300);
    
    const timer5 = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  // Photos to cycle through in the box
  const photos = ['/club1.jpeg', '/JAY_2.jpg', '/Hacktopia2.jpg', '/JAY_3.jpg'];
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    if (phase === 'photos' || phase === 'split') {
      const photoInterval = setInterval(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }, 500);
      return () => clearInterval(photoInterval);
    }
  }, [phase, photos.length]);

  return (
    <AnimatePresence>
      {phase !== 'done' ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
          animate={{
            backgroundColor: phase === 'expand' ? '#000000' : '#ffffff',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Content container */}
          <div className="relative flex items-center justify-center">
            {/* JAY */}
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-black italic tracking-tight select-none"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: phase === 'together' ? 0 : phase === 'expand' ? '-50vw' : -130,
                opacity: phase === 'expand' ? 0 : 1,
              }}
              transition={{ 
                duration: phase === 'expand' ? 0.4 : 0.6, 
                ease: [0.76, 0, 0.24, 1] 
              }}
            >
              Jay
            </motion.span>

            {/* Black Box with Photos */}
            <motion.div
              className="bg-black rounded-2xl overflow-hidden flex items-center justify-center"
              initial={{ width: 0, height: 0, opacity: 0, margin: 0 }}
              animate={{
                width: phase === 'together' ? 0 : phase === 'expand' ? '100vw' : 240,
                height: phase === 'together' ? 0 : phase === 'expand' ? '100vh' : 180,
                opacity: phase === 'together' ? 0 : 1,
                margin: phase === 'together' ? 0 : phase === 'expand' ? 0 : '0 24px',
                borderRadius: phase === 'expand' ? 0 : 16,
              }}
              transition={{ 
                duration: phase === 'expand' ? 0.6 : 0.5, 
                ease: [0.76, 0, 0.24, 1],
                delay: phase === 'split' ? 0.2 : 0
              }}
            >
              {/* Photo slideshow inside box */}
              {(phase === 'split' || phase === 'photos') && (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto}
                    src={photos[currentPhoto]}
                    alt="Jay"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>
              )}
            </motion.div>

            {/* SHINDE */}
            <motion.span
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-black italic tracking-tight select-none"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: phase === 'together' ? 0 : phase === 'expand' ? '50vw' : 130,
                opacity: phase === 'expand' ? 0 : 1,
              }}
              transition={{ 
                duration: phase === 'expand' ? 0.4 : 0.6, 
                ease: [0.76, 0, 0.24, 1] 
              }}
            >
              Shinde
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;
