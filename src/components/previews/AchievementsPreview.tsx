import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Star, Award, Target, Code, ExternalLink, ImageIcon, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AchievementsPreview = () => {
  const navigate = useNavigate();

  const topAchievements = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "NASA Space Apps Challenge 2025 – Global Nominee",
      event: "Team Lakshya - Global Nominee",
      description: "Team Lakshya from K.K. Wagh Institute has been selected as a Global Nominee in the NASA Space Apps Challenge 2025 — a prestigious international hackathon encouraging creative solutions for Earth and Space challenges.",
      skills: ["Space Technology", "AI", "Environmental Data Analytics", "Innovation"],
      color: "from-purple-400 to-pink-500",
      imageFile: "Nasa_space app.png"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "MET Eureka – Top 10",
      event: "National Entrepreneurship Challenge 2024",
      description: "Made it to the Top 10 in the MET Eureka Idea Pitching Competition, pitching innovative ideas alongside brightest young entrepreneurs and pushing boundaries of creativity.",
      skills: ["Entrepreneurship", "Innovation", "Pitch Presentation", "Business Strategy"],
      color: "from-green-400 to-emerald-500",
      imageFile: "MET Eureka.jpeg"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Hacktopia – Top 15 Finalist",
      event: "PCCOE Hackathon (500+ Participants)",
      description: "Secured Top 15 Finalist position in Hacktopia hackathon by developing a Club Management Website with event coordination, membership tracking, and communication features.",
      skills: ["Web Development", "React.js", "Node.js", "Full Stack"],
      color: "from-blue-400 to-cyan-500",
      imageFile: "Hacktopia.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Recognition and awards from competitions and challenges
          </p>
        </motion.div>

        {/* Preview Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {topAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white mr-4`}>
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
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

              {/* Achievement Image */}
              {achievement.imageFile && (
                <div className="mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-700/50 rounded-lg overflow-hidden group-hover:border-yellow-400/50 transition-colors">
                    <img
                      src={`/${achievement.imageFile}`}
                      alt={achievement.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center">
                              <div class="text-center">
                                <svg class="w-8 h-8 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <p class="text-gray-500 text-xs">${achievement.imageFile}</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {achievement.description}
              </p>

              {/* Skills */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-400 text-xs">
                  <Code className="w-3 h-3 mr-2" />
                  <span>Key Skills:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {achievement.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300 hover:border-purple-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                  {achievement.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300">
                      +{achievement.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Live Link Button */}
              {achievement.liveLink && (
                <div className="mt-4">
                  <motion.a
                    href={achievement.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${achievement.color} text-white text-xs font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              )}

              {/* Decorative Elements */}
              <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br ${achievement.color} opacity-20 rounded-full blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="text-2xl font-bold text-white">Top 15</span>
            </div>
            <p className="text-gray-400 text-xs">Out of 500</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-green-400 mr-1" />
              <span className="text-2xl font-bold text-white">Top 10</span>
            </div>
            <p className="text-gray-400 text-xs">Entrepreneurship</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-purple-400 mr-1" />
              <span className="text-2xl font-bold text-white">Global</span>
            </div>
            <p className="text-gray-400 text-xs">NASA Nominee</p>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl">
            <div className="flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-blue-400 mr-1" />
              <span className="text-2xl font-bold text-white">4+</span>
            </div>
            <p className="text-gray-400 text-xs">Major Awards</p>
          </div>
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => navigate('/achievements')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Achievements</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;