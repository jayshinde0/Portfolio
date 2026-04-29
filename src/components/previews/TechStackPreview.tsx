import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechStackPreview = () => {
  const navigate = useNavigate();

  const techCategories = [
    { icon: <Globe className="w-5 h-5 text-blue-400" />, title: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { icon: <Database className="w-5 h-5 text-blue-400" />, title: "Backend", techs: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { icon: <Code className="w-5 h-5 text-blue-400" />, title: "Tools", techs: ["Git", "Docker", "VS Code", "Figma"] },
    { icon: <Code className="w-5 h-5 text-blue-400" />, title: "Languages", techs: ["Python", "Java", "C", "C++", "JavaScript", "PHP"] }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
            <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">My Toolkit</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-3">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Stack</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {techCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}
              onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
              onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}>
              <div className="flex items-center mb-4">
                <div className="p-2.5 rounded-xl mr-3" style={{background:'rgba(59,130,246,0.1)',border:'1px solid rgba(99,162,255,0.15)'}}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.techs.slice(0, 3).map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-2 p-2 rounded-lg"
                    style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.04)'}}>
                    <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full" />
                    <span className="text-gray-400 text-sm">{tech}</span>
                  </div>
                ))}
                {category.techs.length > 3 && (
                  <div className="text-center pt-1">
                    <span className="text-gray-600 text-xs">+{category.techs.length - 3} more</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button onClick={() => navigate('/tech-stack')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-300 transition-all duration-300"
            style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(59,130,246,0.2)' }}
            whileTap={{ scale: 0.97 }}>
            <span>View Full Tech Stack</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TechStackPreview;