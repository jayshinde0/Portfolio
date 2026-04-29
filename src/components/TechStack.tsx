import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Code HUD ── */
const CodeHUD = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    let t = 0;
    const particles: {x:number,y:number,s:number,a:number,v:number}[] = [];
    for (let i = 0; i < 10; i++) particles.push({x:Math.random()*200,y:Math.random()*200,s:Math.random()*1.5+0.5,a:Math.random(),v:Math.random()*0.3+0.1});
    const draw = () => {
      ctx.clearRect(0, 0, 200, 200);
      const cx = 100, cy = 100;
      const g = ctx.createRadialGradient(cx, cy, 5, cx, cy, 90);
      g.addColorStop(0, 'rgba(59,130,246,0.08)'); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 200, 200);
      particles.forEach(p => {
        p.y -= p.v; p.a += 0.008;
        if (p.y < 0) { p.y = 200; p.x = Math.random() * 200; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,162,255,${0.12 + Math.sin(p.a) * 0.08})`; ctx.fill();
      });
      [48, 65, 80].forEach((r, i) => {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * (1.1 - i * 0.25) + i * 1.2);
        ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,162,255,${0.12 - i * 0.025})`; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
      });
      // stacked layers
      ctx.save(); ctx.translate(cx, cy + Math.sin(t * 1.6) * 3);
      ctx.strokeStyle = 'rgba(99,162,255,0.5)'; ctx.lineWidth = 1.4;
      ctx.shadowColor = 'rgba(99,162,255,0.4)'; ctx.shadowBlur = 10;
      [-12, 0, 12].forEach((yy, i) => {
        const w = 30 - i * 3, h = 8;
        ctx.globalAlpha = 0.4 + i * 0.2;
        ctx.beginPath();
        ctx.roundRect(-w, yy - h/2, w*2, h, 3);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(99,162,255,0.85)'; ctx.font = 'bold 16px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('</>', 0, -20);
      ctx.restore();
      t += 0.012; raf.current = requestAnimationFrame(draw);
    };
    draw(); return () => cancelAnimationFrame(raf.current);
  }, []);
  return <canvas ref={ref} width={200} height={200} style={{display:'block'}} />;
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const technologies = [
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Programming', level: 'Intermediate' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Programming', level: 'Advanced' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Programming', level: 'Advanced' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Programming', level: 'Intermediate' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend', level: 'Advanced' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend', level: 'Intermediate' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg', category: 'Frontend', level: 'Advanced' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend', level: 'Intermediate' },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend', level: 'Intermediate' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', category: 'Backend', level: 'Intermediate' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database', level: 'Intermediate' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Database', level: 'Intermediate' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tools', level: 'Advanced' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg', category: 'Backend', level: 'Beginner' },
  ];

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredTechnologies = selectedCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced': return { bg: 'rgba(59,130,246,0.12)', border: '1px solid rgba(99,162,255,0.25)', color: '#93c5fd', barW: '90%' };
      case 'Intermediate': return { bg: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#9ca3af', barW: '60%' };
      case 'Beginner': return { bg: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: '#6b7280', barW: '30%' };
      default: return { bg: 'transparent', border: 'none', color: '#6b7280', barW: '0%' };
    }
  };

  return (
    <section className="py-24 px-4 min-h-screen relative z-10 overflow-hidden" style={{background:'linear-gradient(to bottom,#020204,#06060a,#020204)'}}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)',backgroundSize:'70px 70px'}} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="flex items-start justify-between mb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
              <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">My Tools & Technologies</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight" style={{textShadow:'0 0 60px rgba(59,130,246,0.2)'}}>
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Stack</span>
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Technologies I've mastered through hands-on projects and continuous learning.
            </p>
          </motion.div>
          <motion.div className="hidden lg:block flex-shrink-0 -mt-4" initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}}>
            <CodeHUD />
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="flex gap-2 mb-12 overflow-x-auto pb-1" style={{scrollbarWidth:'none'}}>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const count = category !== 'All' ? technologies.filter(t => t.category === category).length : null;
            return (
              <button key={category} onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300"
                style={isActive
                  ? {background:'rgba(59,130,246,0.15)',border:'1px solid rgba(99,162,255,0.4)',color:'#93c5fd',boxShadow:'0 0 16px rgba(59,130,246,0.2)'}
                  : {background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',color:'#6b7280'}}>
                {category}
                {count !== null && <span className="text-xs opacity-60">({count})</span>}
              </button>
            );
          })}
        </motion.div>

        {/* Tech Grid */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" layout>
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech, index) => {
              const ls = getLevelColor(tech.level);
              return (
                <motion.div key={tech.name} layout
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group">
                  <div className="rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1"
                    style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}
                    onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
                    onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}>
                    <img src={tech.logo} alt={tech.name}
                      className="w-12 h-12 object-contain mb-4 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                    <h3 className="text-sm font-bold text-white mb-2">{tech.name}</h3>
                    <span className="text-[10px] px-2.5 py-1 rounded-full font-medium mb-3"
                      style={{background:ls.bg, border:ls.border, color:ls.color}}>
                      {tech.level}
                    </span>
                    {/* Progress bar */}
                    <div className="w-full h-1 rounded-full mt-1" style={{background:'rgba(255,255,255,0.04)'}}>
                      <motion.div className="h-full rounded-full"
                        initial={{width:0}} animate={{width:ls.barW}}
                        transition={{duration:0.8,delay:index*0.05+0.3}}
                        style={{background: tech.level === 'Advanced' ? 'linear-gradient(90deg,rgba(59,130,246,0.6),rgba(99,162,255,0.8))' : 'rgba(255,255,255,0.12)'}} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
