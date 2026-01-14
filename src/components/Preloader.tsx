import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<'together' | 'split' | 'photos' | 'expand' | 'done'>('together');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Photos to cycle through in the box
  const photos = ['/club1.jpeg', '/JAY_2.jpg', '/Hacktopia2.jpg', '/JAY_3.jpg'];
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Preload images for smooth transitions
  useEffect(() => {
    const imagePromises = photos.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Continue even if some images fail
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

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
  }, [onComplete, imagesLoaded]);

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
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden px-4"
          animate={{
            backgroundColor: phase === 'expand' ? '#000000' : '#ffffff',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Content container */}
          <div className="relative flex items-center justify-center w-full max-w-screen-xl">
            {/* JAY */}
            <motion.span
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black italic tracking-tight select-none whitespace-nowrap"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: phase === 'together' ? 0 : phase === 'expand' ? '-50vw' : window.innerWidth < 640 ? -60 : window.innerWidth < 768 ? -80 : -130,
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
              className="bg-black rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center"
              initial={{ width: 0, height: 0, opacity: 0, margin: 0 }}
              animate={{
                width: phase === 'together' ? 0 : phase === 'expand' ? '100vw' : window.innerWidth < 640 ? 140 : window.innerWidth < 768 ? 180 : 240,
                height: phase === 'together' ? 0 : phase === 'expand' ? '100vh' : window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 130 : 180,
                opacity: phase === 'together' ? 0 : 1,
                margin: phase === 'together' ? 0 : phase === 'expand' ? 0 : window.innerWidth < 640 ? '0 12px' : '0 24px',
                borderRadius: phase === 'expand' ? 0 : window.innerWidth < 640 ? 12 : 16,
              }}
              transition={{ 
                duration: phase === 'expand' ? 0.6 : 0.5, 
                ease: [0.76, 0, 0.24, 1],
                delay: phase === 'split' ? 0.2 : 0
              }}
            >
              {/* Photo slideshow inside box */}
              {(phase === 'split' || phase === 'photos') && imagesLoaded && (
                <div className="relative w-full h-full">
                  {photos.map((photo, index) => (
                    <motion.img
                      key={photo}
                      src={photo}
                      alt={`Jay ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: currentPhoto === index ? 1 : 0,
                        scale: currentPhoto === index ? 1 : 1.05
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* SHINDE */}
            <motion.span
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black italic tracking-tight select-none whitespace-nowrap"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: phase === 'together' ? 0 : phase === 'expand' ? '50vw' : window.innerWidth < 640 ? 60 : window.innerWidth < 768 ? 80 : 130,
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
