import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code, ExternalLink, BookOpen, Activity, Star, Calendar } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Top 18 Finalist",
      event: "Zennit UI Front-End Battle 2025",
      description: "Ranked among Top 18 out of 500 participants with 'Nomadia' - a travel storytelling website.",
      skills: ["React.js", "Tailwind CSS", "ZennitUI", "Animation"],
      liveLink: "https://lnkd.in/dmdZ_PCi"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Top 10 Finalist",
      event: "MET Eureka Idea Pitching 2024",
      description: "Made it to Top 10 in the National Entrepreneurship Challenge 2024.",
      skills: ["Entrepreneurship", "Innovation", "Pitch Presentation"]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Design Excellence Award",
      event: "Zennit UI Front-End Battle 2025",
      description: "Received ZennitUI Pro+ Subscription for creativity and outstanding design.",
      skills: ["UI/UX Design", "Creative Development"]
    }
  ];

  const extracurriculars = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Entrepreneurship Cell Member",
      organization: "ECell MET Bhujbal Knowledge City",
      duration: "2024 - Present"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Tech Community Contributor",
      organization: "Open Source Projects",
      duration: "2023 - Present"
    }
  ];

  const certifications = [
    { title: "React.js Development", issuer: "Meta", date: "2024" },
    { title: "Full Stack Web Development", issuer: "The Odin Project", date: "2024" },
    { title: "UI/UX Design Fundamentals", issuer: "Google", date: "2023" }
  ];

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'extracurricular', label: 'Activities', icon: Activity },
    { id: 'certifications', label: 'Certifications', icon: BookOpen }
  ];

  return (
    <section className="py-24 px-4 bg-black min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Achievements</span>
          </h2>
          <p className="text-gray-400">Accomplishments and activities beyond academics</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'border border-white/20 text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/20 rounded-2xl p-6 bg-neutral-900"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 border border-white/20 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-gray-400">{item.event}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white hover:text-gray-300"
                    >
                      View Project <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'extracurricular' && (
            <div className="grid md:grid-cols-2 gap-6">
              {extracurriculars.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/20 rounded-2xl p-6 bg-neutral-900"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 border border-white/20 rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/20 rounded-2xl p-6 bg-neutral-900"
                >
                  <BookOpen className="w-5 h-5 text-white mb-3" />
                  <h3 className="font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-2">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
