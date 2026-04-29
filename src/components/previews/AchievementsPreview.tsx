import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Star, Award, Target, Code, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AchievementsPreview = () => {
  const navigate = useNavigate();

  const topAchievements = [
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: "NASA Space Apps Challenge 2025 – Global Nominee",
      event: "Team Lakshya - Global Nominee",
      description: "Team Lakshya from K.K. Wagh Institute has been selected as a Global Nominee in the NASA Space Apps Challenge 2025 — a prestigious international hackathon encouraging creative solutions for Earth and Space challenges.",
      skills: ["Space Technology", "AI", "Environmental Data Analytics", "Innovation"],
      imageFile: "Nasa_space app.webp"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-400" />,
      title: "MET Eureka – Top 10",
      event: "National Entrepreneurship Challenge 2024",
      description: "Made it to the Top 10 in the MET Eureka Idea Pitching Competition, pitching innovative ideas alongside brightest young entrepreneurs and pushing boundaries of creativity.",
      skills: ["Entrepreneurship", "Innovation", "Pitch Presentation", "Business Strategy"],
      imageFile: "MET Eureka.webp"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "Hacktopia – Top 15 Finalist",
      event: "PCCOE Hackathon (500+ Participants)",
      description: "Secured Top 15 Finalist position in Hacktopia hackathon by developing a Club Management Website with event coordination, membership tracking, and communication features.",
      skills: ["Web Development", "React.js", "Node.js", "Full Stack"],
      imageFile: "Hacktopia.webp"
    }
  ];

  const stats = [
    { icon: Target, val: 'Top 15', label: 'Out of 500' },
    { icon: Star, val: 'Top 10', label: 'Entrepreneurship' },
    { icon: Award, val: 'Global', label: 'NASA Nominee' },
    { icon: Trophy, val: '4+', label: 'Major Awards' }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
            <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-3">
            Achie<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">vements</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto">Recognition and awards from competitions and challenges</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {topAchievements.map((achievement, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}
              onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
              onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}>
              <div className="flex items-center mb-4">
                <div className="p-2.5 rounded-xl mr-3" style={{background:'rgba(59,130,246,0.1)',border:'1px solid rgba(99,162,255,0.15)'}}>
                  {achievement.icon}
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">{achievement.title}</h3>
              </div>

              <p className="text-xs text-blue-400/70 font-medium mb-3">{achievement.event}</p>

              {achievement.imageFile && (
                <div className="mb-4 rounded-xl overflow-hidden" style={{border:'1px solid rgba(255,255,255,0.06)'}}>
                  <img src={`/${achievement.imageFile}`} alt={achievement.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
              )}

              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{achievement.description}</p>

              <div className="mb-2">
                <div className="flex items-center text-gray-600 text-[10px] mb-1.5"><Code className="w-3 h-3 mr-1.5" />Key Skills:</div>
                <div className="flex flex-wrap gap-1">
                  {achievement.skills.slice(0, 3).map((skill, si) => (
                    <span key={si} className="px-2 py-0.5 rounded-full text-[10px] text-gray-400"
                      style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}>
                      {skill}
                    </span>
                  ))}
                  {achievement.skills.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] text-gray-600"
                      style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.04)'}}>
                      +{achievement.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-4 rounded-xl"
              style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}>
              <div className="flex items-center justify-center mb-2">
                <s.icon className="w-4 h-4 text-blue-400/60 mr-1.5" />
                <span className="text-2xl font-bold text-white">{s.val}</span>
              </div>
              <p className="text-gray-500 text-xs">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <motion.button onClick={() => navigate('/achievements')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-300 transition-all duration-300"
            style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(59,130,246,0.2)' }}
            whileTap={{ scale: 0.97 }}>
            <span>View All Achievements</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;