import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Instagram, Mail } from 'lucide-react';

// ── 3D Cube Canvas ──────────────────────────────────────────────────────────
const FuturisticCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Project 3D point to 2D
    const project = (x: number, y: number, z: number, cx: number, cy: number, scale: number) => {
      const perspective = 600;
      const factor = perspective / (perspective + z);
      return {
        x: cx + x * factor * scale,
        y: cy + y * factor * scale,
        factor,
      };
    };

    // Rotate point around Y and X axis
    const rotateY = (x: number, z: number, angle: number) => ({
      x: x * Math.cos(angle) - z * Math.sin(angle),
      z: x * Math.sin(angle) + z * Math.cos(angle),
    });
    const rotateX = (y: number, z: number, angle: number) => ({
      y: y * Math.cos(angle) - z * Math.sin(angle),
      z: y * Math.sin(angle) + z * Math.cos(angle),
    });

    const draw = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      time += 0.008;

      const cx = w * 0.5;
      const cy = h * 0.45;
      const cubeSize = Math.min(w, h) * 0.28;
      const angleY = time * 0.6;
      const angleX = 0.35;

      // Cube vertices
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1,  1], [1, -1,  1], [1, 1,  1], [-1, 1,  1],
      ];

      // Edges
      const edges = [
        [0,1],[1,2],[2,3],[3,0],
        [4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7],
      ];

      // Transform vertices
      const projected = vertices.map(([vx, vy, vz]) => {
        let { x: rx, z: rz } = rotateY(vx, vz, angleY);
        let { y: ry, z: rz2 } = rotateX(vy, rz, angleX);
        return project(rx, ry, rz2, cx, cy, cubeSize);
      });

      // Draw glow behind cube
      const glowGrad = ctx.createRadialGradient(cx, cy, cubeSize * 0.2, cx, cy, cubeSize * 2);
      glowGrad.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      glowGrad.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, w, h);

      // Draw orbit rings
      ctx.save();
      ctx.translate(cx, cy);
      for (let i = 0; i < 3; i++) {
        const ringAngle = time * (0.3 + i * 0.15) + i * (Math.PI / 3);
        const ringRadius = cubeSize * (1.4 + i * 0.25);
        ctx.save();
        ctx.rotate(ringAngle);
        ctx.beginPath();
        ctx.ellipse(0, 0, ringRadius, ringRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99, 162, 255, ${0.12 - i * 0.03})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();

      // Draw cube edges with glow
      edges.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];

        // Glow layer
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = 'rgba(100, 160, 255, 0.15)';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Main edge
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = 'rgba(140, 180, 255, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw vertices as glowing dots
      projected.forEach((p) => {
        const dotGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 6);
        dotGrad.addColorStop(0, 'rgba(150, 190, 255, 0.9)');
        dotGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = dotGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(200, 220, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Floating </> code symbol
      const codeX = cx + cubeSize * 1.1;
      const codeY = cy - cubeSize * 0.8 + Math.sin(time * 2) * 10;
      ctx.font = `bold ${Math.min(w, h) * 0.06}px 'Inter', monospace`;
      ctx.fillStyle = 'rgba(180, 200, 255, 0.6)';
      ctx.textAlign = 'center';
      ctx.fillText('</>', codeX, codeY);

      // "Next.js" floating label
      const labelX = cx + cubeSize * 0.6;
      const labelY = cy + cubeSize * 1.0 + Math.sin(time * 1.5 + 1) * 6;
      ctx.font = `500 ${Math.min(w, h) * 0.025}px 'Inter', sans-serif`;
      
      // Dot
      ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
      ctx.beginPath();
      ctx.arc(labelX - 30, labelY - 4, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'rgba(180, 200, 255, 0.5)';
      ctx.fillText('Next.js', labelX, labelY);

      // Floating particles
      for (let i = 0; i < 8; i++) {
        const px = cx + Math.sin(time * 0.5 + i * 1.2) * cubeSize * 1.8;
        const py = cy + Math.cos(time * 0.7 + i * 0.9) * cubeSize * 1.2;
        const pSize = 1.5 + Math.sin(time + i) * 0.5;
        ctx.fillStyle = `rgba(100, 160, 255, ${0.2 + Math.sin(time + i) * 0.1})`;
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Light reflection line at bottom
      const reflGrad = ctx.createLinearGradient(cx - cubeSize * 1.5, cy + cubeSize * 1.3, cx + cubeSize * 1.5, cy + cubeSize * 1.3);
      reflGrad.addColorStop(0, 'transparent');
      reflGrad.addColorStop(0.3, 'rgba(59, 130, 246, 0.15)');
      reflGrad.addColorStop(0.5, 'rgba(59, 130, 246, 0.25)');
      reflGrad.addColorStop(0.7, 'rgba(59, 130, 246, 0.15)');
      reflGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = reflGrad;
      ctx.fillRect(cx - cubeSize * 1.5, cy + cubeSize * 1.25, cubeSize * 3, 2);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

// ── Stats Card ──────────────────────────────────────────────────────────────
interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatCard = ({ icon, value, label, delay }: StatCardProps) => (
  <motion.div
    className="flex flex-col items-center text-center gap-1 sm:gap-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="text-blue-400/60 mb-0.5 sm:mb-1">{icon}</div>
    <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight">{value}</span>
    <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm tracking-wide leading-tight">{label}</span>
  </motion.div>
);

// ── Mobile Social Bar (horizontal, bottom of hero text) ─────────────────────
const MobileSocialBar = () => {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/jayshinde0', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/jayshinde', label: 'LinkedIn' },
    { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com/jayshinde', label: 'Instagram' },
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:jayshinde@email.com', label: 'Email' },
  ];

  return (
    <motion.div
      className="flex lg:hidden items-center gap-4 mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
    >
      <span className="text-gray-600 text-[9px] tracking-[0.2em] uppercase font-medium">Connect</span>
      <div className="w-6 h-px bg-gray-700/50" />
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
  );
};

// ── Main Hero ───────────────────────────────────────────────────────────────
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* ── Glowing Grid Background ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.8)_70%,#000_100%)]" />
      </div>

      {/* ── Decorative Corner Crosses (desktop only) ── */}
      <motion.div
        className="absolute top-24 left-24 text-gray-700 text-sm font-light tracking-widest hidden lg:flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>+</span><span>+</span><span>+</span>
      </motion.div>

      {/* ── Main Content ── */}
      <div
        className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-16 pt-16 sm:pt-20"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        {/* 
          Mobile: single column, text first then cube below
          Desktop: two columns side by side
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-4 w-full items-center">
          
          {/* ── Left: Text Content ── */}
          <div className="flex flex-col justify-center z-10 order-1">
            {/* Hi I'm */}
            <motion.p
              className="text-gray-400 text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase mb-2 sm:mb-4 font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              HI, I'M
            </motion.p>

            {/* JAY / SHINDE */}
            <motion.h1
              className="leading-[0.85] mb-3 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="block text-[clamp(3.2rem,14vw,10rem)] font-black text-white tracking-tighter">
                JAY
              </span>
              <span className="block text-[clamp(3.2rem,14vw,10rem)] font-black text-white tracking-tighter">
                SHINDE
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 sm:mb-3 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              A <span className="text-white font-medium">Next.js Developer</span>, who loves to build things!
            </motion.p>

            {/* Supporting paragraph */}
            <motion.p
              className="text-gray-500 text-xs sm:text-sm md:text-base max-w-md leading-relaxed mb-5 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              I craft fast, modern and scalable web applications with clean code and great user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="hero-btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View My Work
              </motion.button>
              <a href="/resume.pdf" download>
                <motion.button
                  className="hero-btn-secondary"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </motion.button>
              </a>
            </motion.div>

            {/* Mobile Social Bar */}
            <MobileSocialBar />
          </div>

          {/* ── Right: 3D Cube ── */}
          <motion.div
            className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[550px] order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FuturisticCube />
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Stats ── */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-6 sm:pb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 py-4 sm:py-6 border-t border-white/5">
          <StatCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            }
            value="2+"
            label="Years Experience"
            delay={1.6}
          />
          <StatCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            }
            value="15+"
            label="Projects & Deployments"
            delay={1.7}
          />
          <StatCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" /><path d="M18 15h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M6 15H4.5a2.5 2.5 0 0 1 0-5H6" /><line x1="6" y1="9" x2="18" y2="9" /><line x1="6" y1="15" x2="18" y2="15" /><line x1="6" y1="9" x2="6" y2="15" /><line x1="18" y1="9" x2="18" y2="15" /><path d="M12 15v5" /><path d="M8 20h8" />
              </svg>
            }
            value="Finalist"
            label="Srijan 2026 / NASA Nominee"
            delay={1.8}
          />
          <StatCard
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            }
            value="Full Stack + AI"
            label="Modern Scalable Systems"
            delay={1.9}
          />
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => scrollToSection('terminal-section')}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center text-gray-600 hover:text-gray-400 transition-colors duration-300">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
