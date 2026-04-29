import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProjectModal.css';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  category: string;
  githubUrl: string;
  liveUrl: string;
  status: string;
  features?: string[];
  detailedDescription?: string;
}

const ProjectsPreview = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const featuredProjects: Project[] = [
    {
      id: 1, title: 'StudyAssist AI',
      description: 'Intelligent study assistant that transforms learning materials into interactive AI-powered quizzes with adaptive learning and topic mastery tracking.',
      detailedDescription: 'An intelligent study assistant that transforms static learning materials into interactive, personalized learning experiences. Upload content in multiple formats (PDFs, DOCX, TXT, YouTube videos) and the system automatically generates AI-powered quizzes while tracking topic-level performance. The adaptive learning engine analyzes your performance and adjusts future quizzes to focus on weaker areas, improving learning efficiency and retention. Uses local Mistral LLM via Ollama for privacy, reduced latency, and cost-efficient AI processing without relying on cloud APIs.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Ollama', 'Mistral LLM', 'Express', 'Tailwind CSS'],
      image: '/Study_Assistant_2.webp', category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Study-Assistant-', liveUrl: '', status: 'In progress',
      features: ['AI Quiz Generation - Context-aware questions from uploaded content','Adaptive Learning Engine - Adjusts difficulty based on performance','Topic Mastery Tracking - Weak/Medium/Strong categorization','Multi-format Upload - PDF, DOCX, TXT, YouTube transcripts','Local LLM Processing - Privacy-focused with Mistral via Ollama','Analytics Dashboard - Learning progress trends and insights','Personalized Revision - Smart scheduling based on weak topics','Performance Analytics - Topic-wise accuracy and improvement tracking']
    },
    {
      id: 2, title: 'Habit Tracker',
      description: 'Full-stack MERN habit tracking app with JWT auth, interactive calendar, streak tracking, and real-time progress updates.',
      detailedDescription: 'A comprehensive habit tracking application built with the MERN stack. Features JWT authentication for secure user sessions, an interactive monthly calendar view for visualizing habit completion, streak tracking to maintain motivation, and real-time progress updates. The clean minimal interface built with Tailwind CSS provides an intuitive user experience for managing daily habits and building consistent routines.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'],
      image: '/Habit tracker.webp', category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/Habit-Tracker', liveUrl: 'https://habit-tracker-iota-gray.vercel.app/', status: 'Live',
      features: ['JWT Authentication - Secure user login and session management','Streak Tracking - Monitor consecutive days of habit completion','Monthly Calendar View - Visual representation of habit progress','Real-time Updates - Instant feedback on habit completion','Responsive Design - Works seamlessly on all devices','Progress Analytics - Track improvement over time','Multiple Habits - Manage unlimited habits simultaneously','Clean UI - Minimal and intuitive interface']
    },
    {
      id: 3, title: 'Blooms Taxonomy Question Paper Generator',
      description: 'AI-powered question paper generation system using Bloom\'s Taxonomy and machine learning',
      detailedDescription: 'An intelligent question paper generation system that automates the creation of educational assessments using Bloom\'s Taxonomy principles. The system uses machine learning techniques to analyze question difficulty levels and automatically predict appropriate marks. Built with Django and Python, it helps educators create balanced question papers that test different cognitive levels from remembering to creating.',
      techStack: ['Django', 'Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: '/blooms.webp', category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Blooms-Taxonomy-Based-Question-Paper-Generation', liveUrl: 'https://blooms-taxonomy-generator.netlify.app', status: 'Completed',
      features: ['Bloom\'s Taxonomy Integration - Questions across all cognitive levels','ML-based Mark Prediction - Automatic difficulty assessment','Customizable Parameters - Adjust question distribution','Question Bank Management - Store and categorize questions','PDF Export - Generate printable question papers','Difficulty Analysis - Balance easy, medium, and hard questions','Topic Coverage - Ensure comprehensive syllabus coverage','Automated Generation - Save time in paper creation']
    },
    {
      id: 4, title: 'BudgeStitch',
      description: 'Platform connecting local tailors with customers for affordable custom clothing',
      detailedDescription: 'A comprehensive e-commerce platform that bridges the gap between local tailors and customers seeking affordable custom clothing. Users can browse tailor portfolios, select fabrics, provide measurements, and place orders for custom-tailored garments. The platform empowers local artisans while providing customers with personalized clothing options at competitive prices.',
      techStack: ['Django', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      image: '/Budge.webp', category: 'E-Commerce',
      githubUrl: 'https://github.com/jayshinde0/BudgeStitch', liveUrl: 'https://budgestitch.netlify.app', status: 'Live',
      features: ['Fabric Selection - Browse and choose from various fabric options','Custom Tailoring - Provide measurements for perfect fit','Tailor Portfolios - View work samples and ratings','Order Management - Track orders from placement to delivery','Price Comparison - Compare quotes from multiple tailors','Review System - Rate and review tailor services','Measurement Guide - Help users take accurate measurements','Secure Payments - Safe transaction processing']
    },
    {
      id: 5, title: 'Debuggers Club',
      description: 'Official platform for Debugger\'s Club with event registration, payment uploads, and Google Sheets integration.',
      detailedDescription: 'The official website for Debugger\'s Club featuring comprehensive event management capabilities. Students can register for technical events, upload payment confirmations, and receive instant updates. The platform integrates with Google Sheets for seamless data management and uses Cloudinary for efficient image storage. Built with Next.js for optimal performance and SEO.',
      techStack: ['Next.js', 'MongoDB', 'Cloudinary', 'TypeScript', 'Google Sheets API'],
      image: '/Debuggers.webp', category: 'Full Stack',
      githubUrl: '', liveUrl: 'https://debuggers-club.vercel.app/', status: 'Live',
      features: ['Event Registration - Easy signup for club events','Payment Upload - Submit payment confirmations','Google Sheets Export - Automatic data synchronization','Image Management - Cloudinary integration for media','Real-time Updates - Instant event notifications','Member Dashboard - Track registrations and participation','Responsive Design - Mobile-friendly interface','SEO Optimized - Better discoverability with Next.js']
    },
    {
      id: 6, title: 'LeetMetric',
      description: 'Web tool for tracking and visualizing LeetCode performance',
      detailedDescription: 'A performance tracking tool designed for competitive programmers to visualize their LeetCode progress. The application fetches user statistics and presents them through interactive charts and graphs, helping users identify strengths and areas for improvement. Built with vanilla JavaScript and Chart.js for lightweight, fast performance.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LeetCode API'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/LeetMetric', liveUrl: 'https://leetmetric.netlify.app', status: 'Live',
      features: ['Performance Tracking - Monitor solving progress over time','Interactive Charts - Beautiful data visualizations','Real-time Data - Fetch latest LeetCode statistics','Problem Analysis - Breakdown by difficulty and topic','Streak Tracking - Monitor consistent practice','Comparison Tools - Compare with other users','Progress Insights - Identify improvement areas','Lightweight - Fast loading with vanilla JavaScript']
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
            <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-3">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Projects</span>
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto">A showcase of my recent work and technical skills</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="relative rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1"
                style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}
                onMouseEnter={e=>(e.currentTarget.style.border='1px solid rgba(99,162,255,0.2)')}
                onMouseLeave={e=>(e.currentTarget.style.border='1px solid rgba(255,255,255,0.06)')}>
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-blue-300"
                      style={{background:'rgba(59,130,246,0.15)',border:'1px solid rgba(99,162,255,0.3)'}}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                      project.status === 'Live' ? 'text-green-300' : 'text-gray-400'
                    }`} style={{background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.12)'}}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.techStack.slice(0, 3).map((tech, ti) => (
                      <span key={ti} className="px-2 py-0.5 rounded-full text-[10px] text-gray-400"
                        style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}>
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] text-gray-600"
                        style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.04)'}}>
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-gray-600 group-hover:text-blue-400/60 transition-colors text-center tracking-wider uppercase">
                    Click to view details →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-300 transition-all duration-300"
            style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}
            whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(59,130,246,0.2)' }}
            whileTap={{ scale: 0.97 }}>
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-blue-300"
                    style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}>
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-500 text-sm">2025</span>
                </div>
                <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="modal-content">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{selectedProject.title}</h2>
                <div className="mb-8">
                  <h3 className="text-[11px] font-semibold text-blue-400/70 mb-3 uppercase tracking-[0.15em]">Overview</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{selectedProject.detailedDescription || selectedProject.description}</p>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-[11px] font-semibold text-blue-400/70 mb-4 uppercase tracking-[0.15em]">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-xl"
                          style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)'}}>
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40 mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-[11px] font-semibold text-blue-400/70 mb-4 uppercase tracking-[0.15em]">Built With</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="px-3 py-1.5 rounded-lg text-gray-200 text-sm font-medium"
                        style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-white transition-all duration-300"
                      style={{background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.12)'}}>
                      <Github className="w-4 h-4" /><span>View Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl ? (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-blue-300 transition-all duration-300"
                      style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.3)'}}>
                      <ExternalLink className="w-4 h-4" /><span>View Live</span>
                    </a>
                  ) : (
                    <div className="flex-1 py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-gray-600 cursor-not-allowed"
                      style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.06)'}}>
                      <ExternalLink className="w-4 h-4" /><span>Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPreview;