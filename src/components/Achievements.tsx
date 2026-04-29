import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Users, Code, ExternalLink, BookOpen, Activity, Star, Calendar, MapPin, Globe } from 'lucide-react';

/* ── Canvas Trophy HUD ── */
const TrophyHUD = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, 220, 220);
      const cx = 110, cy = 110;
      // glow
      const g = ctx.createRadialGradient(cx, cy, 5, cx, cy, 100);
      g.addColorStop(0, 'rgba(59,130,246,0.08)'); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 220, 220);
      // orbits
      [55, 75, 92].forEach((r, i) => {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * (1.2 - i * 0.3) + i);
        ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,162,255,${0.14 - i * 0.03})`; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
      });
      // trophy
      ctx.save(); ctx.translate(cx, cy + Math.sin(t * 1.8) * 3);
      ctx.strokeStyle = 'rgba(99,162,255,0.65)'; ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(99,162,255,0.5)'; ctx.shadowBlur = 12;
      const s = 22;
      ctx.beginPath();
      ctx.moveTo(-s, -s * 0.8); ctx.lineTo(-s * 1.3, -s * 1.8); ctx.lineTo(s * 1.3, -s * 1.8); ctx.lineTo(s, -s * 0.8);
      ctx.quadraticCurveTo(s * 0.5, s * 0.3, 0, s * 0.5); ctx.quadraticCurveTo(-s * 0.5, s * 0.3, -s, -s * 0.8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s, -s * 1.4); ctx.quadraticCurveTo(-s * 1.8, -s * 0.8, -s, -s * 0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(s, -s * 1.4); ctx.quadraticCurveTo(s * 1.8, -s * 0.8, s, -s * 0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s * 0.3, s * 0.5); ctx.lineTo(-s * 0.3, s * 0.9); ctx.lineTo(s * 0.3, s * 0.9); ctx.lineTo(s * 0.3, s * 0.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s * 0.8, s * 0.9); ctx.lineTo(s * 0.8, s * 0.9); ctx.stroke();
      ctx.fillStyle = 'rgba(99,162,255,0.85)'; ctx.font = `${s * 0.6}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('★', 0, -s * 1.3); ctx.restore();
      t += 0.012; raf.current = requestAnimationFrame(draw);
    };
    draw(); return () => cancelAnimationFrame(raf.current);
  }, []);
  return <canvas ref={ref} width={220} height={220} />;
};

/* ── Data ── */
const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "SpectraX'26 (AIMSS Flagship AI/ML Hackathon)",
    subtitle: 'StudyAssist AI – AI-Powered Adaptive Study Assistant',
    year: '2026', location: 'VIT Bhiwewadi',
    description: "Selected as a finalist team at SpectraX'26, a 9-hour AI/ML hackathon focused on building intelligent solutions for real-world problems. Led a team of four members to design and develop StudyAssist AI, an intelligent adaptive learning platform.",
    tags: ['AI/ML', 'Local LLM', 'Mistral', 'Ollama', 'React.js', 'Node.js', 'MongoDB'],
    image: '/SpectraX26.webp',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'NASA Space Apps Challenge 2025 – Global Nominee',
    subtitle: 'Team Lakshya – Global Nominee',
    year: '2025', location: 'K.K. Wagh Institute, Nashik',
    description: "Team Lakshya selected as Global Nominee in NASA Space Apps Challenge 2025 — a prestigious international hackathon for Earth and Space challenges.",
    tags: ['Space Technology', 'AI', 'Environmental Data Analytics', 'Innovation'],
    image: '/Nasa_space app.webp',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Hacktopia - PCCOE Hackathon (Top 15)',
    subtitle: 'Top 15 out of 500 Participants',
    year: '2024', location: 'PCCOE, Pune',
    description: 'Developed a Club Management Website for event coordination and membership tracking. Secured Top 15 among 500+ participants in a 24-hour offline hackathon.',
    tags: ['React.js', 'Node.js', 'Full Stack', 'UI/UX'],
    image: '/Hacktopia.webp',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'MET Eureka – Top 10',
    subtitle: 'National Entrepreneurship Challenge 2024',
    year: '2024', location: 'MET BKC, Nashik',
    description: 'Made it to the Top 10 in the MET Eureka Idea Pitching Competition, pitching innovative ideas alongside the brightest young entrepreneurs.',
    tags: ['Entrepreneurship', 'Innovation', 'Pitch Presentation', 'Business Strategy'],
    image: '/MET Eureka.webp',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Top 18 Finalist – Zennit UI Front-End Battle',
    subtitle: 'Design Excellence Award Winner',
    year: '2025', location: 'Online',
    description: "Ranked among Top 18 out of 500 participants with 'Nomadia' — a travel storytelling website. Also received ZennitUI Pro+ Subscription for creativity and outstanding design.",
    tags: ['React.js', 'Tailwind CSS', 'ZennitUI', 'Animation'],
    image: '/zennit_ui.webp',
    liveLink: 'https://lnkd.in/dmdZ_PCi',
  },
];

const activities = [
  { icon: <Users className="w-5 h-5" />, title: 'Entrepreneurship Cell Member', organization: 'ECell MET Bhujbal Knowledge City', duration: '2024 - Present', image: '/MET Eureka.webp' },
  { icon: <Code className="w-5 h-5" />, title: 'GirlScript Summer of Code Contributor', organization: 'Open Source – GSSoC 2025', duration: '2025', image: '/ggsoc_1.webp' },
  { icon: <Activity className="w-5 h-5" />, title: 'Tech Community Contributor', organization: 'Open Source Projects', duration: '2023 - Present', image: '/Debuggers.webp' },
];

const certifications = [
  { title: 'React.js Development', issuer: 'Meta / Coursera', date: '2024', image: '/React_page-0001.webp' },
  { title: 'C++ Training Course', issuer: 'Spoken Tutorial, IIT Bombay', date: '2023', image: '/C++_page-0001.webp' },
  { title: 'Java Programming', issuer: 'Spoken Tutorial, IIT Bombay', date: '2023', image: '/JAVA_page-0001.webp' },
  { title: 'GitHub Foundations', issuer: 'GitHub', date: '2024', image: '/GITHUB_page-0001.webp' },
  { title: 'Problem Solving (Basic)', issuer: 'HackerRank', date: '2024', image: '/problem_solving_basic certificate_page-0001.webp' },
  { title: 'WoCS 2025 Contributor', issuer: 'WoCS', date: '2025', image: '/WoCS2025_contributor_Jay_Nitin_Shinde.webp' },
];

const tabs = [
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'activities', label: 'Activities', icon: Activity },
  { id: 'certifications', label: 'Certifications', icon: BookOpen },
];

/* ── Tag chip ── */
const Tag = ({ label }: { label: string }) => (
  <span className="text-[11px] px-2.5 py-1 rounded-full text-gray-400"
    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
    {label}
  </span>
);

/* ── Card glow overlay ── */
const CardGlow = () => (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
    style={{ border: '1px solid rgba(99,162,255,0.18)', background: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.07), transparent 70%)' }} />
);

/* ── Main Component ── */
const Achievements = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  return (
    <section id="achievements" className="relative min-h-screen py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom,#020204,#06060a,#020204)' }}>

      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Hero Header ── */}
        <div className="flex items-start justify-between mb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400" style={{ boxShadow: '0 0 8px rgba(99,162,255,0.9)' }} />
              <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Beyond Academics</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none mb-5"
              style={{ textShadow: '0 0 60px rgba(59,130,246,0.3)' }}>
              Achievements
            </h1>
            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              Milestones, recognitions and activities that reflect my<br className="hidden sm:block" /> passion, leadership and commitment to excellence.
            </p>
          </motion.div>

          {/* Trophy HUD desktop */}
          <motion.div className="hidden lg:block flex-shrink-0 -mt-6"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <TrophyHUD />
          </motion.div>
        </div>

        {/* ── Tabs ── */}
        <motion.div className="flex gap-2 mb-10 overflow-x-auto pb-1" initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ scrollbarWidth: 'none' }}>
          {tabs.map(tab => {
            const active = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300"
                style={active
                  ? { background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(99,162,255,0.4)', color: '#93c5fd', boxShadow: '0 0 16px rgba(59,130,246,0.2)' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#6b7280' }}>
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* ── Content ── */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.28 }}>

            {/* ACHIEVEMENTS */}
            {activeTab === 'achievements' && (
              <div className="flex flex-col gap-5">
                {achievements.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="group relative rounded-2xl overflow-hidden transition-all duration-400"
                    style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <CardGlow />
                    <div className="relative flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="w-full sm:w-[280px] h-[180px] sm:h-auto flex-shrink-0 overflow-hidden"
                        style={{ background: '#0a0a0c' }}>
                        <img src={item.image} alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                            <div>
                              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                                {item.title}
                              </h3>
                              <p className="text-blue-400/80 text-sm font-medium mt-0.5">{item.subtitle}</p>
                            </div>
                            <a href={item.liveLink || '#'} target={item.liveLink ? '_blank' : undefined} rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-blue-300 flex-shrink-0 transition-all hover:bg-blue-500/20"
                              style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(99,162,255,0.25)' }}
                              onClick={item.liveLink ? undefined : (e) => e.preventDefault()}>
                              View Details <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-3">
                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{item.year}</span>
                            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{item.location}</span>
                          </div>

                          <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.slice(0, 5).map((t, j) => <Tag key={j} label={t} />)}
                          {item.tags.length > 5 && <Tag label={`+${item.tags.length - 5} more`} />}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* ACTIVITIES */}
            {activeTab === 'activities' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {activities.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group relative rounded-2xl overflow-hidden transition-all duration-400"
                    style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <CardGlow />
                    <div className="h-36 overflow-hidden" style={{ background: '#0a0a0c' }}>
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                    <div className="relative p-5">
                      <div>
                        <h3 className="font-bold text-white text-sm">{item.title}</h3>
                        <p className="text-blue-400/70 text-xs mt-0.5">{item.organization}</p>
                        <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />{item.duration}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CERTIFICATIONS */}
            {activeTab === 'certifications' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {certifications.map((cert, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="group relative rounded-2xl overflow-hidden transition-all duration-400"
                    style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <CardGlow />
                    <div className="h-40 overflow-hidden" style={{ background: '#0a0a0c' }}>
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                    <div className="relative p-5">
                      <h3 className="font-bold text-white text-sm group-hover:text-blue-50 transition-colors mb-1">{cert.title}</h3>
                      <p className="text-blue-400/70 text-xs">{cert.issuer}</p>
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />{cert.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;
