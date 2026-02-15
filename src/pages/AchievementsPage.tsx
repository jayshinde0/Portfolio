import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, ExternalLink, Calendar, MapPin, Users, FileText, Globe, X } from 'lucide-react';

const AchievementsPage = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "SpectraX'26 (AIMSS Flagship AI/ML Hackathon)",
      event: "StudyAssist AI – AI-Powered Adaptive Study Assistant",
      date: "2026",
      location: "VIT Bibwewadi",
      description: "Selected as a finalist team at SpectraX'26, a 9-hour AI/ML hackathon focused on building intelligent solutions for real-world problems. Led a team of four members to design and develop StudyAssist AI, an intelligent study assistant that converts static learning materials into interactive and personalized learning experiences.",
      skills: ["AI/ML", "Local LLM", "Mistral", "Ollama", "React", "Node.js", "Adaptive Learning"],
      imageFile: "SpectraX26.jpeg",
      highlights: [
        "Led system design and AI workflow implementation",
        "Developed adaptive quiz generation and performance tracking logic",
        "Integrated multi-format content ingestion and analysis",
        "Implemented topic-wise analytics and personalized revision strategy",
        "Designed privacy-focused local LLM architecture using Mistral via Ollama"
      ],
      fullDescription: "The system enables users to upload study content in multiple formats including PDFs, DOCX, TXT files, and YouTube lectures. Using a local Mistral LLM powered through Ollama, the platform generates context-aware quizzes, summarizes learning material, and adapts question difficulty based on learner performance. The adaptive learning engine tracks topic-level mastery, identifies weak areas, and provides personalized revision recommendations to improve retention and learning efficiency. The solution emphasizes privacy-first AI by running inference locally, reducing latency and eliminating dependency on cloud-based APIs while ensuring cost-efficient processing."
    },
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
        "Created animated visualization using NASA Terra's MODIS data",
        "Advanced to global judging stage among top nominees",
        "Represented India at global innovation platform",
        "Told Earth science story through motion and imagery",
        "Revealed 25 years of planetary changes in land, oceans, and atmosphere"
      ],
      fullDescription: "Our project, 'Animation Celebration of Terra Data', focuses on NASA Terra's MODIS (Moderate Resolution Imaging Spectroradiometer) — one of the most important instruments observing Earth for the past 25 years. Using MODIS data, we created an animated visualization that tells an Earth science story through motion and imagery — revealing how our planet's land, oceans, and atmosphere have changed over time. The animation highlights how data and storytelling can come together to make science more accessible and impactful. This achievement is the result of collaboration, creativity, and hard work by our team: Sanket Belekar, Yash Ingle, Ayush Brahmankar, and Shantanu Patil. We're honored that our project was recognized among global submissions and grateful to NASA Space Apps Challenge for providing a platform to turn data into meaningful stories about our planet."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Hacktopia - PCCOE Hackathon (Top 15)",
      event: "Top 15 out of 500 Participants",
      date: "2024",
      location: "PCCOE, Pune",
      description: "Developed a Club Management Website for event coordination and membership tracking. Secured Top 15 among 500+ participants in a 24-hour offline hackathon.",
      skills: ["React.js", "Node.js", "Full Stack", "UI/UX"],
      imageFile: "Hacktopia.jpg",
      highlights: [
        "Built Smart Club Connect platform addressing 'Broken Club Ecosystem'",
        "Solved invisibility crisis with centralized event discovery",
        "Implemented accountability features with automated attendance & finance tracking",
        "Reduced leader burnout by unifying disconnected tools",
        "Survived 24-hour non-stop coding with no sleep"
      ],
      fullDescription: "Had an incredible experience participating in Hacktopia 2025, a 24-hour offline hackathon organized by Pimpri Chinchwad College of Engineering (PCCOE), Pune — where over 500+ teams registered, and our Team Sankalp made it to the finals! Our problem statement addressed the 'Broken Club Ecosystem' — tackling inefficiencies in college club management including scattered event promotions, manual attendance tracking, and leader burnout from managing multiple disconnected tools. Our solution, Smart Club Connect, is a unified digital platform offering 'One Platform, Total Control', designed to streamline participation, coordination, and reporting for college clubs. The hackathon began at 9:00 AM with evaluations at 2:00 PM (Logic Review), midnight (UI/UX & Functionality), and final round at 10:30 AM. Even though we didn't win, the experience was incredible — from ideation to execution, it was pure learning, collaboration, and growth. Team Sankalp: Jay Shinde, Sanket Belekar, Ayush Lad, Amey Vaidya."
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
        "Networked with top innovators and mentors",
        "Competed in National Entrepreneurship Challenge 2024",
        "Pushed boundaries of innovation and creativity"
      ],
      fullDescription: "Excited to share that we made it to the Top 10 in the MET Eureka Idea Pitching Competition, part of the National Entrepreneurship Challenge 2024! It was an incredible experience to pitch our ideas alongside some of the brightest minds, pushing the boundaries of innovation and creativity. The competition provided an amazing platform to nurture and showcase entrepreneurial talent. A big thank you to ECell MET Bhujbal Knowledge City for organizing this event and creating opportunities for aspiring entrepreneurs to innovate and create meaningful impact."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Zennit UI Frontend Battle 2025",
      event: "Zennit UI × NexaCrft",
      date: "2025",
      location: "Online",
      description: "Ranked among Top 18 out of 500 participants with 'Nomadia' - a visually immersive travel storytelling website blending minimalism and striking imagery.",
      skills: ["React.js", "Tailwind CSS", "ZennitUI", "Animation"],
      liveLink: "https://nomadia-livid.vercel.app/",
      imageFile: "zennit_ui.png",
      highlights: [
        "Built 5-section single-page website using React + Tailwind CSS",
        "Integrated ZennitUI carousel component for destinations gallery",
        "Designed cinematic hero section with floating navbar and smooth scroll",
        "Implemented parallax cards and hover effects in stories section",
        "Received ZennitUI Pro+ Subscription for creativity and design excellence"
      ],
      fullDescription: "Thrilled to share that my project Nomadia – A Visual Journey Through Hidden Places ranked among the Top 18 out of 500 participants in the Zennit UI Front-End Battle 2025 Hackathon! The challenge was to build a fully functional, 5-section single-page website using React + Tailwind CSS, while integrating at least one Zennit UI component. Nomadia is a visually immersive travel storytelling website that blends minimalism, poetic storytelling, and striking imagery from hidden destinations around the world. Key features include a cinematic hero section with floating navbar and smooth scroll animations, destinations gallery powered by ZennitUI carousel, stories section with parallax cards and hover effects, and pricing & contact sections with clean, responsive layouts. I also received a ZennitUI Pro+ Subscription and a Certificate of Participation from NexaCrft x ZennitUI for creativity and design excellence."
    }
  ];

  const extracurriculars = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Winter of Code Social 2025 Contributor",
      organization: "Code Social",
      duration: "2025",
      description: "Exploring open source as part of Winter of Code Social 2025 as a Contributor. Over the past few months, contributed to multiple projects, learned how Git works in collaborative environments, and worked on resolving issues while interacting with the community. Grateful to the mentors, project admins, and the Code Social for their guidance and support throughout this journey.",
      skills: ["Open Source", "Git & GitHub", "Collaborative Development", "Community Engagement"],
      imageFile: "WoCS2025_contributor_Jay_Nitin_Shinde.png",
      highlights: [
        "Contributed to multiple open-source projects",
        "Learned Git workflows in collaborative environments",
        "Resolved issues and interacted with developer community",
        "Received mentorship from project admins and Code Social team"
      ]
    },
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
                  className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer hover:border-white/20 transition-all"
                  onClick={() => setSelectedAchievement(item)}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="h-64 lg:h-auto bg-neutral-800 flex items-center justify-center p-4">
                      <img
                        src={`/${item.imageFile}`}
                        alt={item.title}
                        className="w-full h-full object-contain"
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

                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.skills.slice(0, 4).map((skill, i) => (
                          <span key={i} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">
                            {skill}
                          </span>
                        ))}
                        {item.skills.length > 4 && (
                          <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">
                            +{item.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="text-sm text-white/60 hover:text-white transition-colors">
                        Click to view details →
                      </div>
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
                  className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer hover:border-white/20 transition-all"
                  onClick={() => setSelectedAchievement(item)}
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="h-48 lg:h-auto bg-neutral-800 flex items-center justify-center p-4">
                      <img
                        src={`/${item.imageFile}`}
                        alt={item.title}
                        className="w-full h-full object-contain"
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
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">
                            {skill}
                          </span>
                        ))}
                        {item.skills.length > 3 && (
                          <span className="text-xs border border-white/10 px-2 py-1 rounded text-gray-400">
                            +{item.skills.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-white/60 hover:text-white transition-colors">
                        Click to view details →
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
                  <div className="h-40 bg-neutral-800 flex items-center justify-center p-2">
                    <img
                      src={`/${cert.imageFile}`}
                      alt={cert.title}
                      className="w-full h-full object-contain"
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

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-neutral-900 border-b border-white/10 p-6 flex items-start justify-between z-10">
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2 border border-white/20 rounded-lg text-white">
                    {selectedAchievement.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedAchievement.title}</h2>
                    <p className="text-sm text-gray-400">
                      {selectedAchievement.event || selectedAchievement.organization}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Image */}
                <div className="mb-6 bg-neutral-800 rounded-xl overflow-hidden flex items-center justify-center p-4" style={{ maxHeight: '400px' }}>
                  <img
                    src={`/${selectedAchievement.imageFile}`}
                    alt={selectedAchievement.title}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Achievement';
                    }}
                  />
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  {selectedAchievement.date && (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {selectedAchievement.date}
                    </span>
                  )}
                  {selectedAchievement.duration && (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {selectedAchievement.duration}
                    </span>
                  )}
                  {selectedAchievement.location && (
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {selectedAchievement.location}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedAchievement.description}</p>
                </div>

                {/* Full Description */}
                {selectedAchievement.fullDescription && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Details</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedAchievement.fullDescription}</p>
                  </div>
                )}

                {/* Key Contributions / Highlights */}
                {selectedAchievement.highlights && selectedAchievement.highlights.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {selectedAchievement.organization ? 'Key Activities' : 'Key Contributions'}
                    </h3>
                    <div className="space-y-3">
                      {selectedAchievement.highlights.map((highlight: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-white mt-1">→</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.skills.map((skill: string, i: number) => (
                      <span key={i} className="text-sm border border-white/20 px-3 py-1.5 rounded-lg text-gray-300 bg-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link */}
                {selectedAchievement.liveLink && (
                  <a
                    href={selectedAchievement.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsPage;
