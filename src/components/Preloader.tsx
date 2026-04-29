import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<'together' | 'split' | 'photos' | 'expand' | 'done'>('together');
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Photos to cycle through in the box - optimized with WebP
  const photos = ['/club1.webp', '/JAY_2.jpg', '/Hacktopia2.webp', '/JAY_3.jpg'];
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Track whether we're on mobile for animation values
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images for smooth transitions - optimized
  useEffect(() => {
    const imagePromises = photos.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.loading = 'eager';
        img.decoding = 'async';
        img.onload = resolve;
        img.onerror = resolve; // Continue even if image fails
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true));
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const timer1 = setTimeout(() => setPhase('split'), 800);
    const timer2 = setTimeout(() => setPhase('photos'), 1200);
    const timer3 = setTimeout(() => setPhase('expand'), 3500);
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

  // Responsive animation values
  const getTextOffset = () => {
    if (phase === 'together') return 0;
    if (phase === 'expand') return isMobile ? '-40vw' : '-50vw';
    return isMobile ? -50 : -130;
  };

  const getTextOffsetRight = () => {
    if (phase === 'together') return 0;
    if (phase === 'expand') return isMobile ? '40vw' : '50vw';
    return isMobile ? 50 : 130;
  };

  const getBoxWidth = () => {
    if (phase === 'together') return 0;
    if (phase === 'expand') return '100vw';
    return isMobile ? 120 : 240;
  };

  const getBoxHeight = () => {
    if (phase === 'together') return 0;
    if (phase === 'expand') return '100vh';
    return isMobile ? 85 : 180;
  };

  const getBoxMargin = () => {
    if (phase === 'together' || phase === 'expand') return 0;
    return isMobile ? '0 8px' : '0 24px';
  };

  return (
    <AnimatePresence>
      {phase !== 'done' ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden px-3 sm:px-4"
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
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black italic tracking-tight select-none whitespace-nowrap gpu-accelerated"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: getTextOffset(),
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
              className="bg-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center gpu-accelerated"
              initial={{ width: 0, height: 0, opacity: 0, margin: 0 }}
              animate={{
                width: getBoxWidth(),
                height: getBoxHeight(),
                opacity: phase === 'together' ? 0 : 1,
                margin: getBoxMargin(),
                borderRadius: phase === 'expand' ? 0 : isMobile ? 8 : 16,
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
                      className="absolute inset-0 w-full h-full object-cover gpu-accelerated"
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
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black italic tracking-tight select-none whitespace-nowrap gpu-accelerated"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: getTextOffsetRight(),
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
