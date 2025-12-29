import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, ExternalLink, Calendar, MapPin, Users, FileText, Globe } from 'lucide-react';

const AchievementsPage = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "NASA Space Apps Challenge 2025 – Global Nominee",
      event: "Team Lakshya - Global Nominee",
      date: "2025",
      location: "K.K. Wagh Institute, Nashik",
      description: "Team Lakshya selected as Global Nominee in NASA Space Apps Challenge 2025 — a prestigious international hackathon for Earth and Space challenges.",
      skills: ["Space Technology", "AI", "Environmental Data Analytics", "Innovation"],
      imageFile: "Nasa_space app.png",
      highlights: [
        "Designed space innovation project integrating AI and environmental data",
        "Advanced to global judging stage among top nominees",
        "Represented India at global innovation platform"
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Hacktopia - PCCOE Hackathon (Top 15)",
      event: "Top 15 out of 500 Participants",
      date: "2024",
      location: "PCCOE, Pune",
      description: "Developed a Club Management Website for event coordination and membership tracking. Secured Top 15 among 500+ participants.",
      skills: ["React.js", "Node.js", "Full Stack", "UI/UX"],
      imageFile: "Hacktopia.jpg",
      highlights: [
        "Built Club Management Platform with events and member modules",
        "Implemented React.js frontend and Node.js backend",
        "Recognized for impactful implementation"
      ]
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "MET Eureka Idea Pitching – Top 10",
      event: "National Entrepreneurship Challenge 2024",
      date: "2024",
      location: "E-Cell MET Bhujbal Knowledge City",
      description: "Made it to Top 10 in MET Eureka Idea Pitching Competition, pitching innovative ideas alongside brightest young entrepreneurs.",
      skills: ["Entrepreneurship", "Innovation", "Pitch Presentation"],
      imageFile: "MET Eureka.jpeg",
      highlights: [
        "Pitched scalable idea using technology and design thinking",
        "Received recognition for innovation and potential impact",
        "Networked with top innovators and mentors"
      ]
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Zennit UI Frontend Battle 2025",
      event: "Zennit UI × NexaCrft",
      date: "2025",
      location: "Online",
      description: "Created visually engaging and responsive user interfaces using premium Zennit components with clean design principles.",
      skills: ["React.js", "Tailwind CSS", "ZennitUI", "Animation"],
      liveLink: "https://nomadia-livid.vercel.app/",
      imageFile: "zennit_ui.png",
      highlights: [
        "Designed responsive interface using React + TailwindCSS",
        "Implemented interactive animations",
        "Recognized for creativity and aesthetics"
      ]
    }
  ];

  const extracurriculars = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website/ERP Coordinator",
      organization: "Debuggers' Club KKWIEER",
      duration: "2025-26",
      description: "Appointed as Website/ERP Coordinator for Debuggers' Club. Overseeing design, maintenance, and updates of club's website and ERP system.",
      skills: ["Web Development", "ERP Systems", "Technical Leadership"],
      imageFile: "club1.jpeg"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "GSSoC 2025 Contributor",
      organization: "GirlScript Summer of Code 2025",
      duration: "2025",
      description: "Selected as Contributor for GSSoC '25 — collaborating on impactful open-source projects and enhancing real-world coding experience.",
      skills: ["Open Source", "Git & GitHub", "Software Development"],
      imageFile: "ggsoc_1.png"
    }
  ];

  const certifications = [
    { title: "Hands On React JS", issuer: "Training Course", date: "2024", imageFile: "React_page-0001.jpg" },
    { title: "Blooms Taxonomy Research Paper", issuer: "IJSREM Journal", date: "2024", imageFile: "Paper_publish_page-0001.jpg" },
    { title: "C++ Training Course", issuer: "Training Course", date: "2024", imageFile: "C++_page-0001.jpg" },
    { title: "Java Training (IIT Bombay)", issuer: "Spoken Tutorial, IIT Bombay", date: "2024", imageFile: "JAVA_page-0001.jpg" },
    { title: "Problem Solving - HackerRank", issuer: "HackerRank", date: "2024", imageFile: "problem_solving_basic certificate_page-0001.jpg" },
    { title: "Git Basics", issuer: "Training Course", date: "2024", imageFile: "GITHUB_page-0001.jpg" }
  ];

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'extracurricular', label: 'Activities', icon: Users },
    { id: 'certifications', label: 'Certifications', icon: FileText }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-black relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Achievements</span>
          </h1>
          <p className="text-gray-400">Accomplishments and activities beyond academics</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 mb-12 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'border border-white/20 text-gray-400 hover:text-white hover:border-white/40'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'achievements' && (
            <div className="space-y-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-900"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="h-64 lg:h-auto bg-neutral-800">
                      <img
                        src={`/${item.imageFile}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Achievement';
                        }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 border border-white/20 rounded-lg text-white">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.event}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      </div>

                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                      <div className="space-y-2 mb-4">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-white">→</span> {h}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.skills.map((skill, i) => (
                          <span key={i} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'extracurricular' && (
            <div className="space-y-6">
              {extracurriculars.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-900"
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="h-48 lg:h-auto bg-neutral-800">
                      <img
                        src={`/${item.imageFile}`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Activity';
                        }}
                      />
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 border border-white/20 rounded-lg text-white">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.organization}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{item.duration}</p>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <span key={i} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-white/10 rounded-xl overflow-hidden bg-neutral-900"
                >
                  <div className="h-40 bg-neutral-800">
                    <img
                      src={`/${cert.imageFile}`}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=Certificate';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white text-sm mb-1">{cert.title}</h3>
                    <p className="text-xs text-gray-400">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AchievementsPage;
