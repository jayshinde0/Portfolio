import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Code, ExternalLink, Calendar, MapPin, ImageIcon, Users, FileText, Globe } from 'lucide-react';

const AchievementsPage = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const achievements = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "NASA Space Apps Challenge 2025 – Global Nominee",
      event: "Team Lakshya - Global Nominee",
      date: "2025",
      location: "K.K. Wagh Institute of Engineering Education & Research, Nashik",
      description: "Team Lakshya from K.K. Wagh Institute of Engineering Education & Research, Nashik has been selected as a Global Nominee in the NASA Space Apps Challenge 2025 — a prestigious international hackathon encouraging creative solutions for Earth and Space challenges.",
      skills: ["Space Technology", "AI", "Environmental Data Analytics", "Innovation", "Global Collaboration"],
      color: "from-purple-400 to-pink-500",
      liveLink: "",
      hasPhoto: true,
      imageFile: "Nasa_space app.png",
      achievements: [
        "Designed a space innovation project integrating AI and environmental data analytics",
        "Demonstrated strong teamwork, problem-solving, and innovation under tight deadlines",
        "Advanced to the global judging stage among top global nominees",
        "Represented India at a global innovation platform and showcased technological excellence"
      ]
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Hacktopia - PCCOE Hackathon (Top 15)",
      event: "Top 15 out of 500 Participants",
      date: "2024",
      location: "Pimpri Chinchwad College of Engineering (PCCOE), Pune",
      description: "Participated in Hacktopia, the flagship hackathon event organized by PCCOE, where our team developed a Club Management Website designed to simplify event coordination, membership tracking, and communication across student clubs. Among 500+ participants, our team secured a Top 15 position.",
      skills: ["Web Development", "React.js", "Node.js", "Full Stack", "Team Collaboration", "UI/UX"],
      color: "from-blue-400 to-cyan-500",
      liveLink: "",
      hasPhoto: true,
      imageFile: "Hacktopia.jpg",
      achievements: [
        "Built a Club Management Platform with modules for events, announcements, and member management",
        "Implemented React.js for the frontend and Node.js for backend integration",
        "Focused on UI/UX, performance, and real-time data handling",
        "Recognized among top-performing teams for impactful implementation"
      ]
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "MET Eureka Idea Pitching Competition – Top 10",
      event: "National Entrepreneurship Challenge 2024",
      date: "2024",
      location: "E-Cell MET Bhujbal Knowledge City",
      description: "Excited to share that our team made it to the Top 10 in the MET Eureka Idea Pitching Competition, a part of the National Entrepreneurship Challenge 2024! It was an inspiring experience pitching innovative ideas alongside some of the brightest young entrepreneurs, pushing the boundaries of creativity and problem-solving.",
      skills: ["Entrepreneurship", "Innovation", "Pitch Presentation", "Business Strategy", "Problem Solving"],
      color: "from-green-400 to-emerald-500",
      liveLink: "",
      hasPhoto: true,
      imageFile: "MET Eureka.jpeg",
      achievements: [
        "Pitched a scalable idea focused on solving real-world challenges using technology and design thinking",
        "Received recognition for innovation, clarity, and potential impact",
        "Networked with top innovators and mentors in the startup ecosystem",
        "Gained valuable entrepreneurship and presentation experience"
      ]
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Zennit UI Frontend Battle 2025",
      event: "Zennit UI × NexaCrft",
      date: "2025",
      location: "Online",
      description: "Participated in the Zennit UI Frontend Battle 2025, a competition focused on creating visually engaging and responsive user interfaces using premium Zennit components. Developed a modern and interactive UI with clean design principles and component-based architecture.",
      skills: ["React.js", "Tailwind CSS", "ZennitUI", "Animation", "Responsive Design"],
      color: "from-yellow-400 to-orange-500",
      liveLink: "https://nomadia-livid.vercel.app/",
      hasPhoto: true,
      imageFile: "zennit_ui.png",
      achievements: [
        "Designed a responsive interface using React + TailwindCSS",
        "Implemented interactive animations and optimized layout for multiple devices",
        "Recognized for creativity, aesthetics, and functional design",
        "Successfully showcased design and front-end development capabilities"
      ]
    }
  ];

  const extracurriculars = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website/ERP Coordinator",
      organization: "Debuggers' Club KKWIEER",
      date: "August 13, 2025",
      duration: "2025-26",
      location: "KKWIEER College",
      description: "Appointed as Website/ERP Coordinator for the Debuggers' Club for the term 2025-26. This appointment reflects trust and confidence in technical expertise, problem-solving skills, and dedication to maintaining digital efficiency.",
      responsibilities: [
        "Oversee design, maintenance, and regular updates of club's website and ERP system",
        "Collaborate with different committees to integrate features and troubleshoot technical issues",
        "Ensure data accuracy and smooth access to resources and information",
        "Enhance club's online presence and improve operational efficiency",
        "Ensure all digital platforms run seamlessly for member benefit"
      ],
      skills: ["Web Development", "ERP Systems", "Database Management", "Team Collaboration", "Technical Leadership"],
      color: "from-blue-400 to-cyan-500",
      hasPhoto: true,
      hasDocument: true,
      imageFile: "club1.jpeg",
      documentFile: "Letter.jpeg"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "GSSoC 2025 Contributor",
      organization: "GirlScript Summer of Code 2025",
      date: "2025",
      duration: "2025",
      location: "Open Source | Community Contribution",
      description: "Selected as a Contributor for GirlScript Summer of Code 2025 (GSSoC '25) — a prestigious open-source program that provides a platform for developers to collaborate on impactful projects and enhance real-world coding experience. Throughout the program, contributors work closely with mentors and fellow developers, gaining hands-on exposure to Git, GitHub, and large-scale software collaboration.",
      responsibilities: [
        "Collaborating with mentors and contributors on open-source projects across diverse tech stacks",
        "Learning and applying Git/GitHub best practices, issue tracking, and PR management",
        "Actively contributing to real-world projects with proper documentation and community standards",
        "Enhancing problem-solving, team communication, and project contribution skills",
        "Eligible for certificates, swags, and recommendation letters based on performance"
      ],
      skills: ["Open Source Collaboration", "Git & GitHub", "Software Development", "Team Communication", "Project Documentation"],
      color: "from-purple-400 to-pink-500",
      hasPhoto: true,
      hasDocument: true,
      imageFile: "ggsoc_1.png",
      documentFile: "Gssoc.jpg"
    },

  ];

  const certifications = [
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Hands On React JS From Beginner to Expert",
      issuer: "Training Course",
      date: "2024",
      description: "Comprehensive training in React JS, covering core concepts from foundational to expert levels to build modern, scalable web applications.",
      skills: ["React.js", "JavaScript", "Frontend Development"],
      color: "from-blue-400 to-cyan-500",
      hasPhoto: true,
      imageFile: "React_page-0001.jpg"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Blooms Taxonomy Based Question Paper Generation",
      issuer: "International Journal of Scientific Research in Engineering & Management",
      date: "2024",
      description: "Authored and published a research paper in the peer-reviewed International Journal of Scientific Research in Engineering & Management.",
      skills: ["Research", "Technical Writing", "Machine Learning Concepts"],
      color: "from-green-400 to-emerald-500",
      hasPhoto: true,
      imageFile: "Paper_publish_page-0001.jpg"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "C++ Training Crash Course for C++ Beginners",
      issuer: "Training Course",
      date: "2024",
      description: "Completed a foundational crash course in C++, covering core syntax and programming principles for beginners.",
      skills: ["C++", "Object-Oriented Programming (OOP)", "Software Development"],
      color: "from-purple-400 to-pink-500",
      hasPhoto: true,
      imageFile: "C++_page-0001.jpg"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Java Training (IIT Bombay)",
      issuer: "Spoken Tutorial Project, IIT Bombay",
      date: "2024",
      description: "Successfully completed a Java training program and assessment provided by the Spoken Tutorial Project, IIT Bombay.",
      skills: ["Java", "Object-Oriented Programming (OOP)", "Backend Development"],
      color: "from-yellow-400 to-orange-500",
      hasPhoto: true,
      imageFile: "JAVA_page-0001.jpg"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Problem Solving (Basic) - HackerRank",
      issuer: "HackerRank",
      date: "2024",
      description: "Demonstrated proficiency in foundational problem-solving by passing the HackerRank skill certification test.",
      skills: ["Problem Solving", "Algorithms", "Data Structures"],
      color: "from-red-400 to-pink-500",
      hasPhoto: true,
      imageFile: "problem_solving_basic certificate_page-0001.jpg"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Mastering the Basics of Git",
      issuer: "Training Course",
      date: "2024",
      description: "Completed a step-by-step course on Git, mastering the fundamental concepts of version control for effective team collaboration.",
      skills: ["Git", "Version Control", "GitHub"],
      color: "from-indigo-400 to-blue-500",
      hasPhoto: true,
      imageFile: "GITHUB_page-0001.jpg"
    }
  ];

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'extracurricular', label: 'Extracurricular', icon: Users },
    { id: 'certifications', label: 'Certifications', icon: FileText }
  ];

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements & Extracurricular
          </h1>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my accomplishments and involvement in activities beyond academics
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              {/* Achievements List */}
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-[1.01]">

                      {/* Image-First Layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                        {/* Large Image Section */}
                        {achievement.hasPhoto && (
                          <div className="lg:col-span-3">
                            <div className="w-full h-120 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border-2 border-gray-700/50 rounded-2xl overflow-hidden group-hover:border-yellow-400/50 transition-colors">
                              {achievement.imageFile ? (
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
                                      <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                      </svg>
                                      <p class="text-gray-500 text-base font-medium">Achievement Photo</p>
                                      <p class="text-gray-600 text-sm">${achievement.imageFile}</p>
                                    </div>
                                  </div>
                                `;
                                    }
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="text-center">
                                    <ImageIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                                    <p className="text-gray-500 text-lg font-medium">Achievement Photo</p>
                                    <p className="text-gray-600 text-sm">Upload image here</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Compact Info Section */}
                        <div className={achievement.hasPhoto ? "lg:col-span-2" : "lg:col-span-5"}>
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white`}>
                              {achievement.icon}
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                                {achievement.title}
                              </h2>
                              <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                                {achievement.event}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{achievement.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>{achievement.location}</span>
                            </div>
                          </div>

                          {/* Compact Description */}
                          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                            {achievement.description}
                          </p>

                          {/* Compact Skills */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {achievement.skills.slice(0, 4).map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300"
                                >
                                  {skill}
                                </span>
                              ))}
                              {achievement.skills.length > 4 && (
                                <span className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-400">
                                  +{achievement.skills.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Live Link */}
                          {achievement.liveLink && (
                            <motion.a
                              href={achievement.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${achievement.color} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>View Project</span>
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Key Highlights - Compact */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {achievement.achievements.slice(0, 4).map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-2 p-2 bg-gray-800/20 rounded-lg border border-gray-700/20"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-gray-300 text-xs leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Decorative Elements */}
                      <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'extracurricular' && (
            <div className="space-y-16">
              {extracurriculars.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:transform hover:scale-[1.01]">

                    {/* Header Section */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${activity.color} text-white shadow-lg`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {activity.title}
                        </h2>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${activity.color} bg-clip-text text-transparent mb-2`}>
                          {activity.organization}
                        </p>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{activity.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{activity.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Images Section - Redesigned for horizontal + vertical */}
                    {(activity.hasPhoto || activity.hasDocument) && (
                      <div className="mb-6">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                          {/* Activity Photo */}
                          {activity.hasPhoto && (
                            <div className="lg:col-span-3">
                              <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-700/50 rounded-xl overflow-hidden group-hover:border-blue-400/50 transition-colors">
                                {activity.imageFile ? (
                                  <img
                                    src={`/${activity.imageFile}`}
                                    alt={activity.title}
                                    className="w-full object-contain hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                      const parent = target.parentElement;
                                      if (parent) {
                                        parent.innerHTML = `
                                          <div class="w-full h-56 flex items-center justify-center">
                                            <div class="text-center">
                                              <svg class="w-12 h-12 text-gray-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                              </svg>
                                              <p class="text-gray-500 text-base font-medium">Activity Photo</p>
                                              <p class="text-gray-600 text-sm">${activity.imageFile}</p>
                                            </div>
                                          </div>
                                        `;
                                      }
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-56 flex items-center justify-center">
                                    <div className="text-center">
                                      <ImageIcon className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                                      <p className="text-gray-500 text-base font-medium">Activity Photo</p>
                                      <p className="text-gray-600 text-sm">Upload image here</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-2 text-center">Activity Photo</p>
                            </div>
                          )}

                          {/* Vertical Appointment Letter */}
                          {activity.hasDocument && (
                            <div className="lg:col-span-2">
                              <div className="w-full h-80 bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-700/50 rounded-xl overflow-hidden group-hover:border-green-400/50 transition-colors">
                                {activity.documentFile ? (
                                  <img
                                    src={`/${activity.documentFile}`}
                                    alt="Appointment Letter"
                                    className="w-full h-full object-contain bg-white/5 hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                      const parent = target.parentElement;
                                      if (parent) {
                                        parent.innerHTML = `
                                          <div class="w-full h-full flex items-center justify-center">
                                            <div class="text-center">
                                              <svg class="w-10 h-10 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                              </svg>
                                              <p class="text-gray-500 text-sm font-medium">Appointment Letter</p>
                                              <p class="text-gray-600 text-xs">${activity.documentFile}</p>
                                            </div>
                                          </div>
                                        `;
                                      }
                                    }}
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                      <FileText className="w-10 h-10 text-gray-500 mx-auto mb-2" />
                                      <p className="text-gray-500 text-sm font-medium">Appointment Letter</p>
                                      <p className="text-gray-600 text-xs">Upload document here</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-2 text-center">Official Appointment Letter</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* Description */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">About the Role</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {activity.description}
                        </p>

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Skills Developed
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {activity.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`px-3 py-1 bg-gradient-to-r ${activity.color} bg-opacity-20 border border-gray-700/50 rounded-full text-xs text-gray-300 hover:bg-opacity-30 transition-all duration-200`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Key Responsibilities */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-blue-400" />
                          Key Responsibilities
                        </h3>
                        <div className="space-y-2">
                          {activity.responsibilities.slice(0, 4).map((responsibility, respIndex) => (
                            <div
                              key={respIndex}
                              className="flex items-start gap-2 p-3 bg-gray-800/20 rounded-lg border border-gray-700/20 hover:bg-gray-800/30 transition-colors duration-200"
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${activity.color} rounded-full mt-2 flex-shrink-0`}></div>
                              <p className="text-gray-300 text-xs leading-relaxed">{responsibility}</p>
                            </div>
                          ))}
                          {activity.responsibilities.length > 4 && (
                            <p className="text-gray-500 text-xs text-center mt-2">
                              +{activity.responsibilities.length - 4} more responsibilities
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${activity.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 h-full">

                    {/* Cert Header */}
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white mr-4`}>
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    {/* Issuer and Date */}
                    <div className="mb-4">
                      <p className={`text-lg font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-2`}>
                        {cert.issuer}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Certificate Image */}
                    {cert.hasPhoto && (
                      <div className="mb-6">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 border border-gray-700/50 rounded-xl overflow-hidden group-hover:border-green-400/50 transition-colors">
                          {cert.imageFile ? (
                            <img
                              src={`/${cert.imageFile}`}
                              alt={cert.title}
                              className="w-full object-contain hover:scale-105 transition-transform duration-500"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-full h-40 flex items-center justify-center">
                                      <div class="text-center">
                                        <svg class="w-10 h-10 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                        </svg>
                                        <p class="text-gray-500 text-sm font-medium">Certificate Image</p>
                                        <p class="text-gray-600 text-xs">${cert.imageFile}</p>
                                      </div>
                                    </div>
                                  `;
                                }
                              }}
                            />
                          ) : (
                            <div className="w-full h-40 flex items-center justify-center">
                              <div className="text-center">
                                <ImageIcon className="w-10 h-10 text-gray-500 mx-auto mb-2" />
                                <p className="text-gray-500 text-sm font-medium">Certificate Image</p>
                                <p className="text-gray-600 text-xs">Upload certificate here</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className={`absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br ${cert.color} opacity-20 rounded-full blur-lg group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Summary Stats */}
        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Top 15</div>
              <p className="text-gray-400 text-sm">Out of 500</p>
              <p className="text-gray-500 text-xs mt-1">PCCOE Hacktopia</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl">
              <div className="text-3xl font-bold text-green-400 mb-2">Top 10</div>
              <p className="text-gray-400 text-sm">Entrepreneurship</p>
              <p className="text-gray-500 text-xs mt-1">MET Eureka 2024</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">Global</div>
              <p className="text-gray-400 text-sm">Nominee</p>
              <p className="text-gray-500 text-xs mt-1">NASA Space Apps</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-2xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <p className="text-gray-400 text-sm">Major Awards</p>
              <p className="text-gray-500 text-xs mt-1">International Recognition</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AchievementsPage;