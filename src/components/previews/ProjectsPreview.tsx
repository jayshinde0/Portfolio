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

  // Lock body scroll when modal is open
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
      id: 1,
      title: 'StudyAssist AI',
      description: 'Intelligent study assistant that transforms learning materials into interactive AI-powered quizzes with adaptive learning and topic mastery tracking.',
      detailedDescription: 'An intelligent study assistant that transforms static learning materials into interactive, personalized learning experiences. Upload content in multiple formats (PDFs, DOCX, TXT, YouTube videos) and the system automatically generates AI-powered quizzes while tracking topic-level performance. The adaptive learning engine analyzes your performance and adjusts future quizzes to focus on weaker areas, improving learning efficiency and retention. Uses local Mistral LLM via Ollama for privacy, reduced latency, and cost-efficient AI processing without relying on cloud APIs.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Ollama', 'Mistral LLM', 'Express', 'Tailwind CSS'],
      image: '/Study_Assistant_2.webp',
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Study-Assistant-',
      liveUrl: '',
      status: 'In progress',
      features: [
        'AI Quiz Generation - Context-aware questions from uploaded content',
        'Adaptive Learning Engine - Adjusts difficulty based on performance',
        'Topic Mastery Tracking - Weak/Medium/Strong categorization',
        'Multi-format Upload - PDF, DOCX, TXT, YouTube transcripts',
        'Local LLM Processing - Privacy-focused with Mistral via Ollama',
        'Analytics Dashboard - Learning progress trends and insights',
        'Personalized Revision - Smart scheduling based on weak topics',
        'Performance Analytics - Topic-wise accuracy and improvement tracking'
      ]
    },
    {
      id: 2,
      title: 'Habit Tracker',
      description: 'Full-stack MERN habit tracking app with JWT auth, interactive calendar, streak tracking, and real-time progress updates.',
      detailedDescription: 'A comprehensive habit tracking application built with the MERN stack. Features JWT authentication for secure user sessions, an interactive monthly calendar view for visualizing habit completion, streak tracking to maintain motivation, and real-time progress updates. The clean minimal interface built with Tailwind CSS provides an intuitive user experience for managing daily habits and building consistent routines.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'],
      image: '/Habit tracker.webp',
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/Habit-Tracker',
      liveUrl: 'https://habit-tracker-iota-gray.vercel.app/',
      status: 'Live',
      features: [
        'JWT Authentication - Secure user login and session management',
        'Streak Tracking - Monitor consecutive days of habit completion',
        'Monthly Calendar View - Visual representation of habit progress',
        'Real-time Updates - Instant feedback on habit completion',
        'Responsive Design - Works seamlessly on all devices',
        'Progress Analytics - Track improvement over time',
        'Multiple Habits - Manage unlimited habits simultaneously',
        'Clean UI - Minimal and intuitive interface'
      ]
    },
    {
      id: 3,
      title: 'Blooms Taxonomy Question Paper Generator',
      description: 'AI-powered question paper generation system using Bloom\'s Taxonomy and machine learning',
      detailedDescription: 'An intelligent question paper generation system that automates the creation of educational assessments using Bloom\'s Taxonomy principles. The system uses machine learning techniques to analyze question difficulty levels and automatically predict appropriate marks. Built with Django and Python, it helps educators create balanced question papers that test different cognitive levels from remembering to creating.',
      techStack: ['Django', 'Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: '/blooms.webp',
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Blooms-Taxonomy-Based-Question-Paper-Generation',
      liveUrl: 'https://blooms-taxonomy-generator.netlify.app',
      status: 'Completed',
      features: [
        'Bloom\'s Taxonomy Integration - Questions across all cognitive levels',
        'ML-based Mark Prediction - Automatic difficulty assessment',
        'Customizable Parameters - Adjust question distribution',
        'Question Bank Management - Store and categorize questions',
        'PDF Export - Generate printable question papers',
        'Difficulty Analysis - Balance easy, medium, and hard questions',
        'Topic Coverage - Ensure comprehensive syllabus coverage',
        'Automated Generation - Save time in paper creation'
      ]
    },
    {
      id: 4,
      title: 'BudgeStitch',
      description: 'Platform connecting local tailors with customers for affordable custom clothing',
      detailedDescription: 'A comprehensive e-commerce platform that bridges the gap between local tailors and customers seeking affordable custom clothing. Users can browse tailor portfolios, select fabrics, provide measurements, and place orders for custom-tailored garments. The platform empowers local artisans while providing customers with personalized clothing options at competitive prices.',
      techStack: ['Django', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      image: '/Budge.webp',
      category: 'E-Commerce',
      githubUrl: 'https://github.com/jayshinde0/BudgeStitch',
      liveUrl: 'https://budgestitch.netlify.app',
      status: 'Live',
      features: [
        'Fabric Selection - Browse and choose from various fabric options',
        'Custom Tailoring - Provide measurements for perfect fit',
        'Tailor Portfolios - View work samples and ratings',
        'Order Management - Track orders from placement to delivery',
        'Price Comparison - Compare quotes from multiple tailors',
        'Review System - Rate and review tailor services',
        'Measurement Guide - Help users take accurate measurements',
        'Secure Payments - Safe transaction processing'
      ]
    },
    {
      id: 5,
      title: 'Debuggers Club',
      description: 'Official platform for Debugger\'s Club with event registration, payment uploads, and Google Sheets integration.',
      detailedDescription: 'The official website for Debugger\'s Club featuring comprehensive event management capabilities. Students can register for technical events, upload payment confirmations, and receive instant updates. The platform integrates with Google Sheets for seamless data management and uses Cloudinary for efficient image storage. Built with Next.js for optimal performance and SEO.',
      techStack: ['Next.js', 'MongoDB', 'Cloudinary', 'TypeScript', 'Google Sheets API'],
      image: '/Debuggers.webp',
      category: 'Full Stack',
      githubUrl: '',
      liveUrl: 'https://debuggers-club.vercel.app/',
      status: 'Live',
      features: [
        'Event Registration - Easy signup for club events',
        'Payment Upload - Submit payment confirmations',
        'Google Sheets Export - Automatic data synchronization',
        'Image Management - Cloudinary integration for media',
        'Real-time Updates - Instant event notifications',
        'Member Dashboard - Track registrations and participation',
        'Responsive Design - Mobile-friendly interface',
        'SEO Optimized - Better discoverability with Next.js'
      ]
    },
    {
      id: 6,
      title: 'LeetMetric',
      description: 'Web tool for tracking and visualizing LeetCode performance',
      detailedDescription: 'A performance tracking tool designed for competitive programmers to visualize their LeetCode progress. The application fetches user statistics and presents them through interactive charts and graphs, helping users identify strengths and areas for improvement. Built with vanilla JavaScript and Chart.js for lightweight, fast performance.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LeetCode API'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/LeetMetric',
      liveUrl: 'https://leetmetric.netlify.app',
      status: 'Live',
      features: [
        'Performance Tracking - Monitor solving progress over time',
        'Interactive Charts - Beautiful data visualizations',
        'Real-time Data - Fetch latest LeetCode statistics',
        'Problem Analysis - Breakdown by difficulty and topic',
        'Streak Tracking - Monitor consistent practice',
        'Comparison Tools - Compare with other users',
        'Progress Insights - Identify improvement areas',
        'Lightweight - Fast loading with vanilla JavaScript'
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical skills
          </p>
        </motion.div>

        {/* Preview Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-neutral-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col hover:border-white/20 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 backdrop-blur-sm rounded-full text-xs font-medium border ${
                      project.status === 'Live' 
                        ? 'bg-white/20 text-white border-white/30' 
                        : 'bg-white/10 text-gray-300 border-white/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-gray-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-full text-gray-400 text-xs font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 backdrop-blur-sm rounded-full text-gray-500 text-xs font-medium border border-white/10">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Hint */}
                  <div className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors text-center">
                    Click to view details
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
              {/* Header */}
              <div className="modal-header">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white text-xs font-medium">
                    {selectedProject.category}
                  </span>
                  <span className="text-gray-400 text-sm">2025</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="modal-content">
                {/* Project Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {selectedProject.title}
                </h2>

                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-white mb-3 uppercase tracking-wide text-sm">
                    Overview
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                </div>

                {/* Key Features - Compact Grid */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide text-sm">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-neutral-800/30 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
                        >
                          <div className="w-1 h-1 rounded-full bg-white mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide text-sm">
                    Built With
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-neutral-800/60 rounded-md text-gray-200 text-sm font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-white text-black rounded-lg font-semibold text-center flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 border-2 border-white/20 text-white rounded-lg font-semibold text-center flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live</span>
                    </a>
                  ) : (
                    <div className="flex-1 py-3 border-2 border-white/10 text-gray-500 rounded-lg font-semibold text-center flex items-center justify-center gap-2 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      <span>Coming Soon</span>
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