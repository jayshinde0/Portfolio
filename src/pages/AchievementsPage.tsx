import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, ExternalLink, Calendar, MapPin, Users, FileText, Globe, X } from 'lucide-react';

/* ── Floating Trophy HUD ── */
const TrophyHUD = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    let t = 0;
    const particles: {x:number,y:number,s:number,a:number,v:number}[] = [];
    for (let i = 0; i < 12; i++) particles.push({x:Math.random()*220,y:Math.random()*220,s:Math.random()*1.5+0.5,a:Math.random(),v:Math.random()*0.3+0.1});
    const draw = () => {
      ctx.clearRect(0, 0, 220, 220);
      const cx = 110, cy = 110;
      const g = ctx.createRadialGradient(cx, cy, 5, cx, cy, 100);
      g.addColorStop(0, 'rgba(59,130,246,0.08)'); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 220, 220);
      // particles
      particles.forEach(p => {
        p.y -= p.v; p.a += 0.008;
        if (p.y < 0) { p.y = 220; p.x = Math.random() * 220; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,162,255,${0.15 + Math.sin(p.a) * 0.1})`; ctx.fill();
      });
      // orbits
      [55, 75, 92].forEach((r, i) => {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * (1.2 - i * 0.3) + i);
        ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,162,255,${0.14 - i * 0.03})`; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
      });
      // trophy
      ctx.save(); ctx.translate(cx, cy + Math.sin(t * 1.8) * 3);
      ctx.strokeStyle = 'rgba(99,162,255,0.65)'; ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(99,162,255,0.5)'; ctx.shadowBlur = 12;
      const s = 22;
      ctx.beginPath();
      ctx.moveTo(-s, -s*0.8); ctx.lineTo(-s*1.3, -s*1.8); ctx.lineTo(s*1.3, -s*1.8); ctx.lineTo(s, -s*0.8);
      ctx.quadraticCurveTo(s*0.5, s*0.3, 0, s*0.5); ctx.quadraticCurveTo(-s*0.5, s*0.3, -s, -s*0.8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s, -s*1.4); ctx.quadraticCurveTo(-s*1.8, -s*0.8, -s, -s*0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(s, -s*1.4); ctx.quadraticCurveTo(s*1.8, -s*0.8, s, -s*0.3); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s*0.3, s*0.5); ctx.lineTo(-s*0.3, s*0.9); ctx.lineTo(s*0.3, s*0.9); ctx.lineTo(s*0.3, s*0.5); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s*0.8, s*0.9); ctx.lineTo(s*0.8, s*0.9); ctx.stroke();
      ctx.fillStyle = 'rgba(99,162,255,0.85)'; ctx.font = `${s*0.6}px serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('★', 0, -s*1.3); ctx.restore();
      t += 0.012; raf.current = requestAnimationFrame(draw);
    };
    draw(); return () => cancelAnimationFrame(raf.current);
  }, []);
  return <canvas ref={ref} width={220} height={220} style={{display:'block'}} />;
};

const AchievementsPage = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open and scroll modal to top
  useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = 'hidden';
      // Scroll modal container to top
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAchievement]);

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Srijan 2026 - National Hackathon Winner 🏆",
      event: "Atos Global IT Solutions and Services - 1st Place",
      date: "2026",
      location: "National Level Competition",
      description: "Secured 1st place among 500-600 competing teams at Srijan 2026, a prestigious national-level hackathon organized by Atos Global IT Solutions and Services. Demonstrated exceptional problem-solving skills, innovative thinking, and technical excellence to emerge as champions in this highly competitive event.",
      skills: ["National Winner", "Hackathon", "Innovation", "Team Leadership", "Problem Solving", "Atos"],
      imageFile: "Srijan.webp",
      highlights: [
        "Secured 1st place among 500-600 competing teams",
        "National-level hackathon organized by Atos Global IT Solutions",
        "Demonstrated exceptional problem-solving and technical excellence",
        "Led team to victory through innovative thinking and collaboration",
        "Delivered cutting-edge solutions under competitive pressure"
      ],
      fullDescription: "Srijan 2026 was a prestigious national-level hackathon organized by Atos Global IT Solutions and Services, bringing together 500-600 of the brightest minds from across the country. Our team emerged as champions by demonstrating exceptional problem-solving skills, innovative thinking, and technical excellence throughout the competition. The victory showcases our ability to deliver cutting-edge solutions under pressure and collaborate effectively to tackle complex real-world challenges. This achievement represents not just technical prowess, but also leadership, teamwork, and the ability to think creatively under competitive conditions. The recognition from Atos Global IT Solutions and Services, a leading digital transformation company, validates our approach to solving real-world problems with innovative technology solutions."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "SpectraX'26 (AIMSS Flagship AI/ML Hackathon)",
      event: "StudyAssist AI – AI-Powered Adaptive Study Assistant",
      date: "2026",
      location: "VIT Bibwewadi",
      description: "Selected as a finalist team at SpectraX'26, a 9-hour AI/ML hackathon focused on building intelligent solutions for real-world problems. Led a team of four members to design and develop StudyAssist AI, an intelligent study assistant that converts static learning materials into interactive and personalized learning experiences.",
      skills: ["AI/ML", "Local LLM", "Mistral", "Ollama", "React", "Node.js", "Adaptive Learning"],
      imageFile: "SpectraX26.webp",
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
      imageFile: "Nasa_space app.webp",
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
      imageFile: "Hacktopia.webp",
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
      imageFile: "MET Eureka.webp",
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
      imageFile: "zennit_ui.webp",
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
      imageFile: "WoCS2025_contributor_Jay_Nitin_Shinde.webp",
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
      imageFile: "club1.webp"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "GSSoC 2025 Contributor",
      organization: "GirlScript Summer of Code 2025",
      duration: "2025",
      description: "Selected as Contributor for GSSoC '25 — collaborating on impactful open-source projects and enhancing real-world coding experience.",
      skills: ["Open Source", "Git & GitHub", "Software Development"],
      imageFile: "ggsoc_1.webp"
    }
  ];

  const certifications = [
    { title: "Hands On React JS", issuer: "Training Course", date: "2024", imageFile: "React_page-0001.webp" },
    { title: "Blooms Taxonomy Research Paper", issuer: "IJSREM Journal", date: "2024", imageFile: "Paper_publish_page-0001.webp" },
    { title: "C++ Training Course", issuer: "Training Course", date: "2024", imageFile: "C++_page-0001.webp" },
    { title: "Java Training (IIT Bombay)", issuer: "Spoken Tutorial, IIT Bombay", date: "2024", imageFile: "JAVA_page-0001.webp" },
    { title: "Problem Solving - HackerRank", issuer: "HackerRank", date: "2024", imageFile: "problem_solving_basic certificate_page-0001.webp" },
    { title: "Git Basics", issuer: "Training Course", date: "2024", imageFile: "GITHUB_page-0001.webp" }
  ];

  const tabs = [
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'extracurricular', label: 'Activities', icon: Users },
    { id: 'certifications', label: 'Certifications', icon: FileText }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10" style={{background:'linear-gradient(to bottom,#020204,#06060a,#020204)'}}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)',backgroundSize:'70px 70px'}} />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-14">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
              <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Beyond Academics</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-5" style={{textShadow:'0 0 60px rgba(59,130,246,0.25)'}}>
              Achievements
            </h1>
            <p className="text-gray-400 max-w-md">Milestones, recognitions and activities that reflect my passion, leadership and commitment to excellence.</p>
          </motion.div>
          {/* Trophy HUD - desktop */}
          <motion.div className="hidden lg:block flex-shrink-0 -mt-4" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:0.8,delay:0.2}}>
            <TrophyHUD />
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 mb-12 flex-wrap"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                style={isActive
                  ? {background:'rgba(59,130,246,0.15)',border:'1px solid rgba(99,162,255,0.4)',color:'#93c5fd',boxShadow:'0 0 16px rgba(59,130,246,0.2)'}
                  : {background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',color:'#6b7280'}}>
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
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
                  className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
                  style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)',boxShadow:'0 4px 30px rgba(0,0,0,0.3)'}}
                  onClick={() => setSelectedAchievement(item)}
                  onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
                  onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="h-64 lg:h-auto overflow-hidden" style={{background:'#0a0a0c'}}>
                      <img src={`/${item.imageFile}`} alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {(e.target as HTMLImageElement).style.display='none';}}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-white leading-snug">{item.title}</h3>
                        <p className="text-sm text-blue-400/80 font-medium mt-1">{item.event}</p>
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
                          <span key={i} className="text-[11px] px-2.5 py-1 rounded-full text-gray-400"
                            style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                            {skill}
                          </span>
                        ))}
                        {item.skills.length > 4 && (
                          <span className="text-[11px] px-2.5 py-1 rounded-full text-gray-400"
                            style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                            +{item.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-blue-300 transition-all"
                        style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}>
                        View Details <ExternalLink className="w-3.5 h-3.5" />
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
                  className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1"
                  style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}
                  onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
                  onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}
                  onClick={() => setSelectedAchievement(item)}
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="h-48 lg:h-auto overflow-hidden" style={{background:'#0a0a0c'}}>
                      <img src={`/${item.imageFile}`} alt={item.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        onError={(e) => {(e.target as HTMLImageElement).style.display='none';}}
                      />
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-sm text-blue-400/70 mt-0.5">{item.organization}</p>
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
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-blue-300 transition-all"
                        style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}>
                        View Details <ExternalLink className="w-3.5 h-3.5" />
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
                  className="group rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}
                  onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
                  onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}
                >
                  <div className="h-40 overflow-hidden" style={{background:'#0a0a0c'}}>
                    <img src={`/${cert.imageFile}`} alt={cert.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {(e.target as HTMLImageElement).style.display='none';}}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm mb-1">{cert.title}</h3>
                    <p className="text-xs text-blue-400/70">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mt-1.5">{cert.date}</p>
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
            onClick={() => setSelectedAchievement(null)}
            ref={modalRef}
          >
            <div className="min-h-screen flex items-center justify-center p-4 py-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="rounded-2xl max-w-4xl w-full"
                style={{background:'linear-gradient(135deg,rgba(12,12,16,0.98),rgba(8,8,12,0.99))',border:'1px solid rgba(99,162,255,0.15)',boxShadow:'0 0 60px rgba(59,130,246,0.08)'}}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="border-b border-white/10 p-6 flex items-start justify-between" style={{background:'rgba(12,12,16,0.95)'}}>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white">{selectedAchievement.title}</h2>
                    <p className="text-sm text-blue-400/80 mt-1">
                      {selectedAchievement.event || selectedAchievement.organization}
                    </p>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsPage;
