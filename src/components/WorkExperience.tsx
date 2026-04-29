import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, TrendingUp, FileDown, Users, Zap } from 'lucide-react';

// ── Floating briefcase HUD canvas ───────────────────────────────────────────
const BriefcaseHUD = () => {
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
      t += 0.006;

      const cx = w / 2;
      const cy = h / 2;

      // Glow
      const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.45);
      glow.addColorStop(0, 'rgba(59,130,246,0.1)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Orbit rings
      for (let i = 0; i < 3; i++) {
        const r = 55 + i * 25;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (1.5 - i * 0.4) + i * 0.9);
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,162,255,${0.15 - i * 0.04})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // Briefcase icon drawn manually
      const s = 28;
      ctx.save();
      ctx.translate(cx, cy + Math.sin(t * 2) * 4);
      ctx.strokeStyle = 'rgba(99,162,255,0.6)';
      ctx.lineWidth = 1.5;
      ctx.lineJoin = 'round';
      // Body
      ctx.strokeRect(-s, -s * 0.5, s * 2, s * 1.3);
      // Handle
      ctx.beginPath();
      ctx.moveTo(-s * 0.4, -s * 0.5);
      ctx.lineTo(-s * 0.4, -s * 0.9);
      ctx.lineTo(s * 0.4, -s * 0.9);
      ctx.lineTo(s * 0.4, -s * 0.5);
      ctx.stroke();
      // Clasp
      ctx.beginPath();
      ctx.moveTo(-s * 0.15, -s * 0.1);
      ctx.lineTo(s * 0.15, -s * 0.1);
      ctx.lineTo(s * 0.15, s * 0.2);
      ctx.lineTo(-s * 0.15, s * 0.2);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Particles
      for (let i = 0; i < 4; i++) {
        const px = cx + Math.sin(t * 0.7 + i * 1.8) * 80;
        const py = cy + Math.cos(t * 0.5 + i * 1.3) * 55;
        ctx.fillStyle = `rgba(99,162,255,${0.2 + Math.sin(t + i) * 0.1})`;
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

// ── Metric card ─────────────────────────────────────────────────────────────
interface MetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const MetricCard = ({ icon, value, label, delay }: MetricProps) => (
  <motion.div
    className="flex flex-col items-center text-center p-5 sm:p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-400/10 transition-all duration-300 group"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -4 }}
  >
    <div className="text-blue-400/50 mb-3 group-hover:text-blue-400/70 transition-colors">{icon}</div>
    <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">{value}</span>
    <span className="text-gray-500 text-xs sm:text-sm">{label}</span>
    <div className="w-8 h-0.5 bg-blue-400/20 rounded-full mt-3 group-hover:w-12 group-hover:bg-blue-400/40 transition-all duration-300" />
  </motion.div>
);

// ── Experience data ─────────────────────────────────────────────────────────
const experiences = [
  {
    company: 'Ayunext Solutions',
    position: 'Full Stack Developer Intern',
    duration: 'Sept 2025 – Apr 2026',
    location: 'Remote',
    isCurrent: true,
    description:
      'Architected dynamic UIs and engineered significant performance gains through modern web technologies.',
    achievements: [
      'Built responsive UIs using Next.js and React.js',
      'Achieved 30%+ performance gains through SSR and SSG',
      'Reduced file sizes by 50% with modern optimization',
      'Full-lifecycle development from design to deployment',
    ],
  },
  {
    company: 'Golden Dreams Software Solutions',
    position: 'Frontend Developer Intern',
    duration: 'June 2024 – Aug 2024',
    location: 'On-site',
    isCurrent: false,
    description:
      'Developed modern responsive websites and spearheaded UI/UX modernization.',
    achievements: [
      'Developed cross-browser compatible websites',
      'Achieved 15% increase in user engagement',
      'Improved content management workflow by 20%',
      'Translated mockups into functional web pages',
    ],
  },
];

// ── Main component ──────────────────────────────────────────────────────────
const WorkExperience = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-black min-h-screen z-10">
      {/* ── Grid background ── */}
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
        {/* ════════ HERO HEADER ════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 sm:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <p className="text-gray-500 text-xs sm:text-sm tracking-[0.25em] uppercase font-light">
                Journey so far
              </p>
              <div className="w-8 h-px bg-gray-700/60" />
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3">
              <span className="text-white">Work </span>
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm sm:text-base max-w-lg">
              A timeline of my professional journey and the impact I create.
            </p>
          </motion.div>

          {/* Floating HUD icon — desktop */}
          <motion.div
            className="hidden lg:block relative w-44 h-44 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <BriefcaseHUD />
          </motion.div>
        </div>

        {/* ════════ TIMELINE ════════ */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/20 via-blue-400/10 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative lg:pl-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline node — desktop */}
                <div className="hidden lg:flex absolute left-0 top-8 w-12 h-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <Briefcase className="w-5 h-5 text-blue-400/60" />
                </div>

                {/* ── Card ── */}
                <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent p-5 sm:p-7 hover:border-blue-400/10 transition-all duration-300 group">
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        {/* Mobile briefcase icon */}
                        <Briefcase className="w-5 h-5 text-blue-400/60 lg:hidden" />
                        <h3 className="text-lg sm:text-xl font-bold text-white">{exp.position}</h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase rounded-full bg-blue-500/15 text-blue-400 border border-blue-400/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1.5 text-xs sm:text-sm text-gray-500 flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="border-t border-white/[0.05] pt-5">
                    <h4 className="text-blue-400/80 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                      {exp.achievements.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm leading-relaxed"
                        >
                          <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ════════ BOTTOM METRICS ════════ */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              icon={<TrendingUp className="w-6 h-6" />}
              value="30%+"
              label="Performance Gain"
              delay={0.1}
            />
            <MetricCard
              icon={<FileDown className="w-6 h-6" />}
              value="50%"
              label="File Size Reduction"
              delay={0.2}
            />
            <MetricCard
              icon={<Users className="w-6 h-6" />}
              value="15%"
              label="Engagement Increase"
              delay={0.3}
            />
            <MetricCard
              icon={<Zap className="w-6 h-6" />}
              value="20%"
              label="Workflow Efficiency"
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
