import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkExperiencePreview = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: 'Full Stack Developer Intern', company: 'Ayunext Solutions',
      date: 'Sept 2025 – Feb 2026', location: 'Remote',
      highlights: ['30%+ performance improvements with Next.js SSR/SSG', '50% image optimization and lazy loading']
    },
    {
      title: 'Frontend Developer Intern', company: 'Golden Dreams Software',
      date: 'June 2024 – Aug 2024', location: 'On-site',
      highlights: ['15% user engagement increase with modern UI/UX', '20% workflow efficiency with WordPress customization']
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
            <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Career Path</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-3">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Experience</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto">Professional journey and contributions in software development</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {experiences.map((exp, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}
              onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
              onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl mr-4" style={{background:'rgba(59,130,246,0.1)',border:'1px solid rgba(99,162,255,0.2)'}}>
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <p className="text-blue-400/70 font-medium text-sm">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4 text-xs">
                <span className="flex items-center gap-1.5 text-gray-500"><Calendar className="w-3.5 h-3.5" />{exp.date}</span>
                <span className="flex items-center gap-1.5 text-gray-500"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
              </div>

              <div className="space-y-2.5">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)'}}>
                    <div className="w-1.5 h-1.5 bg-blue-400/50 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{h}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button onClick={() => navigate('/experience')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-300 transition-all duration-300"
            style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(59,130,246,0.2)' }}
            whileTap={{ scale: 0.97 }}>
            <span>View Full Experience</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperiencePreview;