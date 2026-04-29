import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  Zap,
  Brain,
  Code2,
  Sparkles,
  Lightbulb,
  BookOpen,
} from 'lucide-react';

// ── Animated HUD rings behind portrait ──────────────────────────────────────
const HUDRings = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

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

    const draw = () => {
      const w = canvas.parentElement!.getBoundingClientRect().width;
      const h = canvas.parentElement!.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);
      t += 0.005;

      const cx = w / 2;
      const cy = h / 2;

      // Outer glow
      const glow = ctx.createRadialGradient(cx, cy, 40, cx, cy, w * 0.48);
      glow.addColorStop(0, 'rgba(59,130,246,0.06)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Orbiting rings
      for (let i = 0; i < 3; i++) {
        const r = 90 + i * 28;
        const angle = t * (1.2 - i * 0.3);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle + i * 0.8);
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,162,255,${0.12 - i * 0.03})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Corner ticks (HUD style)
      const tickLen = 12;
      const tickOff = Math.min(w, h) * 0.38;
      ctx.strokeStyle = 'rgba(99,162,255,0.15)';
      ctx.lineWidth = 1;
      const corners = [
        [cx - tickOff, cy - tickOff],
        [cx + tickOff, cy - tickOff],
        [cx - tickOff, cy + tickOff],
        [cx + tickOff, cy + tickOff],
      ];
      corners.forEach(([x, y], i) => {
        const dx = i % 2 === 0 ? 1 : -1;
        const dy = i < 2 ? 1 : -1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + tickLen * dx, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + tickLen * dy);
        ctx.stroke();
      });

      // Small floating dots
      for (let i = 0; i < 5; i++) {
        const px = cx + Math.sin(t * 0.8 + i * 1.5) * (70 + i * 20);
        const py = cy + Math.cos(t * 0.6 + i * 1.2) * (50 + i * 15);
        ctx.fillStyle = `rgba(99,162,255,${0.15 + Math.sin(t + i) * 0.05})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

// ── Trait card ───────────────────────────────────────────────────────────────
interface TraitProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}

const TraitCard = ({ icon, title, desc, delay }: TraitProps) => (
  <motion.div
    className="flex flex-col items-center text-center p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="text-blue-400/70 mb-3">{icon}</div>
    <h4 className="text-white font-semibold text-sm sm:text-base mb-1.5">{title}</h4>
    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

// ── Stat item ────────────────────────────────────────────────────────────────
interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatProps) => (
  <div className="flex flex-col items-center text-center gap-1">
    <div className="text-blue-400/50 mb-0.5">{icon}</div>
    <span className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">{value}</span>
    <span className="text-gray-500 text-[10px] sm:text-xs leading-tight">{label}</span>
  </div>
);

// ── Main About Component ────────────────────────────────────────────────────
const About = () => {
  const expertise = [
    'Full Stack Development',
    'Backend Systems',
    'REST APIs',
    'AI / LLMs',
    'Database Design',
    'DevOps (Basics)',
    'Clean Architecture',
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-black min-h-screen z-10">
      {/* ── Subtle grid background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_80%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section Label + Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 font-light">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Me.</span>
          </h2>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-10">
          {/* ════════ LEFT COLUMN ════════ */}
          <div className="space-y-6 sm:space-y-8">
            {/* ── Profile Card ── */}
            <motion.div
              className="relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-8 overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* HUD Canvas */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] mb-4 flex items-center justify-center">
                <HUDRings />
                <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/JAY_2.webp"
                    alt="Jay Shinde"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Status badge */}
                <motion.div
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-white/10 bg-black/70 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <div className="leading-tight">
                      <p className="text-[10px] text-gray-400">Open to</p>
                      <p className="text-xs font-semibold text-white">Opportunities</p>
                    </div>
                  </div>
                </motion.div>

                {/* Code symbol */}
                <motion.div
                  className="absolute left-2 sm:left-4 bottom-4 z-20 text-blue-400/40 text-xl sm:text-2xl font-mono"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {'</>'}
                </motion.div>
              </div>

              {/* Info bar */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { icon: <MapPin className="w-3.5 h-3.5" />, label: 'Based in', value: 'India' },
                  { icon: <GraduationCap className="w-3.5 h-3.5" />, label: 'Education', value: 'B.Tech CSE' },
                  { icon: <Zap className="w-3.5 h-3.5" />, label: 'Focus', value: 'Full Stack + AI' },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-gray-400"
                  >
                    <span className="text-blue-400/60">{item.icon}</span>
                    <div className="leading-tight min-w-0">
                      <p className="text-[9px] sm:text-[10px] text-gray-500 truncate">{item.label}</p>
                      <p className="text-[11px] sm:text-xs font-medium text-white truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Achievement Stats Card ── */}
            <motion.div
              className="rounded-2xl border border-white/[0.06] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02] p-5 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                <StatItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  value="2+"
                  label="Years Experience"
                />
                <StatItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  }
                  value="15+"
                  label="Projects Built"
                />
                <StatItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  }
                  value="9.0"
                  label="Top Ranker CGPA"
                />
                <StatItem
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 9 7 12 7s5-3 7.5-3a2.5 2.5 0 0 1 0 5H18" /><path d="M18 15h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M6 15H4.5a2.5 2.5 0 0 1 0-5H6" /><line x1="6" y1="9" x2="18" y2="9" /><line x1="6" y1="15" x2="18" y2="15" /><line x1="6" y1="9" x2="6" y2="15" /><line x1="18" y1="9" x2="18" y2="15" /><path d="M12 15v5" /><path d="M8 20h8" />
                    </svg>
                  }
                  value="5+"
                  label="Achievements"
                />
              </div>
            </motion.div>
          </div>

          {/* ════════ RIGHT COLUMN ════════ */}
          <div className="space-y-8 sm:space-y-10">
            {/* ── Intro ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400/70 font-mono text-lg">{'</>'}</span>
                Hi, I'm <span className="text-white">Jay Shinde</span>
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                I'm a Computer Science student with a strong passion for building intelligent,
                scalable, and user-focused web applications. I love turning ideas into real-world
                products by combining clean code, modern technologies, and AI.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                I specialize in the MERN stack, backend development, and AI-powered systems.
                From building REST APIs to working with LLMs and RAG pipelines, I enjoy
                solving complex problems that create real impact.
              </p>
            </motion.div>

            {/* ── Trait Cards ── */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TraitCard
                icon={<Sparkles className="w-5 h-5" />}
                title="Problem Solver"
                desc="I love solving real-world problems with code."
                delay={0.3}
              />
              <TraitCard
                icon={<Code2 className="w-5 h-5" />}
                title="Clean Coder"
                desc="I write clean, scalable and efficient code."
                delay={0.4}
              />
              <TraitCard
                icon={<Brain className="w-5 h-5" />}
                title="AI Enthusiast"
                desc="Passionate about LLMs, NLP & intelligent apps."
                delay={0.5}
              />
              <TraitCard
                icon={<BookOpen className="w-5 h-5" />}
                title="Always Learning"
                desc="Exploring new tech and sharpening my skills."
                delay={0.6}
              />
            </motion.div>

            {/* ── What Drives Me ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-blue-400/60" />
                What <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Drives Me</span>
              </h4>
              <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6">
                <span className="absolute top-3 left-4 text-3xl text-blue-400/20 font-serif leading-none">"</span>
                <p className="text-gray-400 text-sm leading-relaxed pl-4 sm:pl-6">
                  I'm driven by curiosity and a hunger to build solutions that make a difference.
                  Whether it's automating complex workflows with AI or crafting smooth user
                  experiences, I aim to create technology that truly helps people.
                </p>
              </div>
            </motion.div>

            {/* ── Core Expertise ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400/60" />
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-300 text-xs sm:text-sm hover:bg-white/[0.06] hover:border-blue-400/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
