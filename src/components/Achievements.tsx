import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Code, Lightbulb, Target, ExternalLink, BookOpen, FileText, Activity, Star, Calendar, MapPin } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Top 18 Finalist",
      event: "Zennit UI Front-End Battle 2025",
      description: "Ranked among Top 18 out of 500 participants with 'Nomadia' - a visually immersive travel storytelling website featuring cinematic animations, parallax effects, and ZennitUI components.",
      skills: ["React.js", "Tailwind CSS", "ZennitUI", "Animation"],
      color: "from-yellow-400 to-orange-500",
      liveLink: "https://lnkd.in/dmdZ_PCi"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Top 10 Finalist",
      event: "MET Eureka Idea Pitching Competition 2024",
      description: "Made it to the Top 10 in the National Entrepreneurship Challenge 2024, pitching innovative ideas alongside brightest minds and pushing boundaries of innovation and creativity.",
      skills: ["Entrepreneurship", "Innovation", "Pitch Presentation", "Business Strategy"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Design Excellence Award",
      event: "Zennit UI Front-End Battle 2025",
      description: "Received ZennitUI Pro+ Subscription and Certificate of Participation from NexaCrft x ZennitUI for creativity and outstanding design implementation.",
      skills: ["UI/UX Design", "Creative Development", "Component Integration"],
      color: "from-purple-400 to-pink-500"
    }
  ];

  const extracurriculars = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Entrepreneurship Cell Member",
      organization: "ECell MET Bhujbal Knowledge City",
      duration: "2024 - Present",
      description: "Active member participating in entrepreneurship events, workshops, and idea pitching competitions.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Tech Community Contributor",
      organization: "Open Source Projects",
      duration: "2023 - Present",
      description: "Contributing to open source projects and participating in hackathons to build innovative solutions.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Workshop Participant",
      organization: "Various Tech Events",
      duration: "2023 - Present",
      description: "Regularly attending workshops on emerging technologies, design thinking, and innovation methodologies.",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const certifications = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "React.js Development",
      issuer: "Meta",
      date: "2024",
      description: "Advanced React.js concepts including hooks, context, and performance optimization.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Full Stack Web Development",
      issuer: "The Odin Project",
      date: "2024",
      description: "Comprehensive full-stack development covering frontend and backend technologies.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      date: "2023",
      description: "Design principles, user research, prototyping, and usability testing.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'extracurricular', label: 'Extracurricular', icon: Activity },
    { id: 'certifications', label: 'Certifications', icon: BookOpen }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements & Extracurricular
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my accomplishments and involvement in activities beyond academics
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-2">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>

                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-400/30"
                      layoutId="activeTabBg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'achievements' && (
            <>
              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                      {/* Icon and Title */}
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white mr-4`}>
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      {/* Event */}
                      <div className="mb-4">
                        <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.event}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {achievement.description}
                      </p>

                      {/* Skills */}
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Code className="w-4 h-4 mr-2" />
                          <span>Key Skills:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {achievement.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300 hover:border-purple-500/50 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Live Link Button */}
                      {achievement.liveLink && (
                        <div className="mt-4 pt-4 border-t border-gray-700/30">
                          <motion.a
                            href={achievement.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${achievement.color} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>View Live Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        </div>
                      )}

                      {/* Decorative Elements */}
                      <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br ${achievement.color} opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
                  <div className="flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 text-yellow-400 mr-2" />
                    <span className="text-2xl font-bold text-white">Top 18</span>
                  </div>
                  <p className="text-gray-400 text-sm">Out of 500 Participants</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="w-6 h-6 text-green-400 mr-2" />
                    <span className="text-2xl font-bold text-white">Top 10</span>
                  </div>
                  <p className="text-gray-400 text-sm">Entrepreneurship Challenge</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
                  <div className="flex items-center justify-center mb-3">
                    <Lightbulb className="w-6 h-6 text-purple-400 mr-2" />
                    <span className="text-2xl font-bold text-white">Pro+</span>
                  </div>
                  <p className="text-gray-400 text-sm">ZennitUI Subscription</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
                  <div className="flex items-center justify-center mb-3">
                    <Trophy className="w-6 h-6 text-blue-400 mr-2" />
                    <span className="text-2xl font-bold text-white">3+</span>
                  </div>
                  <p className="text-gray-400 text-sm">Major Awards</p>
                </div>
              </motion.div>
            </>
          )}

          {activeTab === 'extracurricular' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extracurriculars.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${activity.color} text-white mr-4`}>
                        {activity.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {activity.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className={`text-sm font-semibold bg-gradient-to-r ${activity.color} bg-clip-text text-transparent`}>
                        {activity.organization}
                      </p>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{activity.duration}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {activity.description}
                    </p>

                    <div className={`absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br ${activity.color} opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white mr-4`}>
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                        {cert.issuer}
                      </p>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{cert.date}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    <div className={`absolute -top-1 -right-1 w-12 h-12 bg-gradient-to-br ${cert.color} opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>
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