import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import './previews/ProjectModal.css';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  image: string;
  images?: string[]; // Add carousel images
  category: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  year: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');

  const categories = ['All Projects', 'AI/ML', 'Full Stack', 'Frontend', 'E-Commerce'];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); // Reset carousel when opening modal
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Auto-slide carousel
  useEffect(() => {
    if (!selectedProject || !selectedProject.images || selectedProject.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [selectedProject, currentImageIndex]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'StudyAssist AI',
      shortDescription: 'Adaptive study platform with AI-powered quiz generation',
      fullDescription: 'An intelligent study assistant that transforms static learning materials into interactive, personalized learning experiences. Upload content in multiple formats (PDFs, DOCX, TXT, YouTube videos) and the system automatically generates AI-powered quizzes while tracking topic-level performance. The adaptive learning engine analyzes your performance and adjusts future quizzes to focus on weaker areas, improving learning efficiency and retention. Uses local Mistral LLM via Ollama for privacy, reduced latency, and cost-efficient AI processing without relying on cloud APIs.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Ollama', 'Mistral LLM', 'Express', 'Tailwind CSS'],
      image: '/Study_Assistant_2.png',
      images: ['/Study_Assistant_1.png', '/Study_Assistant_2.png', '/Study_Assistant_3.png'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Study-Assistant-',
      liveUrl: '',
      features: [
        'AI Quiz Generation - Context-aware questions from uploaded content',
        'Adaptive Learning Engine - Adjusts difficulty based on performance',
        'Topic Mastery Tracking - Weak/Medium/Strong categorization',
        'Multi-format Upload - PDF, DOCX, TXT, YouTube transcripts',
        'Local LLM Processing - Privacy-focused with Mistral via Ollama',
        'Analytics Dashboard - Learning progress trends and insights',
        'Personalized Revision - Smart scheduling based on weak topics',
        'Performance Analytics - Topic-wise accuracy and improvement tracking'
      ],
      year: '2026'
    },
    {
      id: 2,
      title: 'LegalMind AI',
      shortDescription: 'Production-grade RAG system for legal document analysis',
      fullDescription: 'A production-grade RAG (Retrieval-Augmented Generation) system for intelligent legal document analysis with zero hallucinations. Built to help professionals analyze legal documents instantly by combining semantic search with AI generation to provide accurate, cited answers. The system processes 50-page legal PDFs in ~20 seconds, answers questions with exact citations, and prevents hallucinations through grounded responses. Uses Google Gemini 2.5 Flash Lite for text generation and HuggingFace all-MiniLM-L6-v2 for local embeddings, with FAISS for similarity search and MongoDB for metadata storage.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'LangChain', 'Google Gemini', 'FAISS', 'HuggingFace', 'Tailwind CSS'],
      image: '/Legal_ai_1.jpeg',
      images: ['/Legal_ai_1.jpeg', '/Legal_ai_2.jpeg'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/LegalMind-AI',
      liveUrl: '',
      features: [
        'PDF Upload & Processing - Drag-and-drop interface for legal documents',
        'Semantic Search - Find information by meaning, not just keywords',
        'AI-Powered Q&A - Ask questions in natural language',
        'Citation Tracking - Every answer includes source references',
        'Zero Hallucinations - Answers only from document content',
        'Multi-Document Support - Query across multiple documents',
        'Fast Processing - 50-page documents processed in ~20 seconds',
        '100% Free AI Stack - No paid API costs with local embeddings'
      ],
      year: '2026'
    },
    {
      id: 3,
      title: 'Habit Tracker',
      shortDescription: 'Full-stack MERN habit tracking application',
      fullDescription: 'A comprehensive habit tracking application built with the MERN stack. Features JWT authentication for secure user sessions, an interactive monthly calendar view for visualizing habit completion, streak tracking to maintain motivation, and real-time progress updates. The clean minimal interface built with Tailwind CSS provides an intuitive user experience for managing daily habits and building consistent routines.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'],
      image: '/Habit tracker.png',
      images: ['/Habit tracker.png'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/Habit-Tracker',
      liveUrl: 'https://habit-tracker-iota-gray.vercel.app/',
      features: [
        'JWT Authentication - Secure user login and session management',
        'Streak Tracking - Monitor consecutive days of habit completion',
        'Monthly Calendar View - Visual representation of habit progress',
        'Real-time Updates - Instant feedback on habit completion',
        'Responsive Design - Works seamlessly on all devices',
        'Progress Analytics - Track improvement over time',
        'Multiple Habits - Manage unlimited habits simultaneously',
        'Clean UI - Minimal and intuitive interface'
      ],
      year: '2026'
    },
    {
      id: 4,
      title: 'InterviewAce',
      shortDescription: 'AI-powered interview preparation',
      fullDescription: 'An intelligent interview preparation platform that leverages AI to provide personalized mock interviews and learning paths. Built with Next.js and TypeScript, it offers comprehensive interview practice with real-time feedback, progress tracking, and detailed analytics to help candidates prepare effectively for technical interviews.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML'],
      image: 'interview.png',
      images: ['interview.png'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/InterviewAcee',
      liveUrl: '',
      features: [
        'AI Mock Interviews - Realistic interview simulations',
        'Progress Tracking - Monitor improvement over time',
        'Analytics Dashboard - Detailed performance insights',
        'Personalized Learning - Adaptive question difficulty',
        'Multiple Categories - Technical, behavioral, and more',
        'Feedback System - Instant AI-powered feedback',
        'Practice History - Review past interview sessions',
        'Performance Metrics - Track success rates and timing'
      ],
      year: '2025'
    },
    {
      id: 5,
      title: 'Blooms Taxonomy QPG',
      shortDescription: 'AI-powered question paper generation using ML',
      fullDescription: 'An intelligent question paper generation system that automates the creation of educational assessments using Bloom\'s Taxonomy principles. The system uses machine learning techniques to analyze question difficulty levels and automatically predict appropriate marks. Built with Django and Python, it helps educators create balanced question papers that test different cognitive levels from remembering to creating.',
      techStack: ['Django', 'Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: '/blooms.jpg',
      images: ['/blooms.jpg'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Blooms-Taxonomy-Based-Question-Paper-Generation',
      liveUrl: 'https://blooms-taxonomy-generator.netlify.app',
      features: [
        'Bloom\'s Taxonomy Integration - Questions across all cognitive levels',
        'ML-based Mark Prediction - Automatic difficulty assessment',
        'Customizable Parameters - Adjust question distribution',
        'Question Bank Management - Store and categorize questions',
        'PDF Export - Generate printable question papers',
        'Difficulty Analysis - Balance easy, medium, and hard questions',
        'Topic Coverage - Ensure comprehensive syllabus coverage',
        'Automated Generation - Save time in paper creation'
      ],
      year: '2024'
    },
    {
      id: 6,
      title: 'Flash AI',
      shortDescription: 'Stranger Things themed AI prompt challenge event',
      fullDescription: 'An immersive, Stranger Things-themed web application designed to host an AI prompt challenge event. The website creates a cinematic experience where students explore the dark world of the Upside Down while participating in 7 AI-powered challenges. Features include a cinematic Chronicles storytelling experience with VHS effects, progressive card unlocking system with puzzles, interactive spin wheel rewards, comprehensive screenshot protection, and advanced key logging for security. Built with React, TypeScript, and Framer Motion for smooth 60fps animations. The event uses a narrative-driven approach with strict time limits (75 minutes total, 60 seconds per card) and includes a dramatic book closing animation when all challenges are completed.',
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'IndexedDB'],
      image: '/Flash_ai_1.jpeg',
      images: ['/Flash_ai_1.jpeg', '/Flash_ai_2.jpeg', '/Flash_ai_3.jpeg', '/Flash_ai_4.jpeg', '/Flash_ai_5.jpeg'],
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/Flash-AI',
      liveUrl: 'https://flash-ai.vercel.app',
      features: [
        'Cinematic Chronicles - 5 chapters with VHS effects, lightning, and atmospheric animations',
        'Progressive Card System - 7 AI challenge cards with puzzle-based unlocking',
        'Timer System - 75-minute event timer with 60-second per-card countdown',
        'Spin Wheel Rewards - Interactive droplets with time bonuses and card unlocks',
        'Screenshot Protection - Comprehensive blocking with black screen flash and alerts',
        'Key Logger System - Advanced keystroke monitoring with persistent storage',
        'Book Closing Animation - Cinematic ending with 3D page turning effects',
        'Audio Integration - Stranger Things theme and ambient horror soundscapes'
      ],
      year: '2026'
    },
    {
      id: 7,
      title: 'Emergency Coordination System',
      shortDescription: 'AI-powered emergency response coordination platform',
      fullDescription: 'A comprehensive AI-powered emergency response coordination platform that connects victims, volunteers, and administrators for efficient emergency management. Features real-time communication via Socket.IO, interactive Google Maps integration for visual emergency locations, and smart volunteer matching. The system includes role-based access control with three user types: victims who can create and track emergency requests, volunteers who can accept and help with emergencies after admin verification, and administrators who manage the entire system. Built with modern tech stack including React, Node.js, MongoDB, and Socket.IO for real-time updates.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Google Maps API', 'JWT', 'Tailwind CSS'],
      image: '/Emergency-Volunteer-Coordination-System_1.png',
      images: ['/Emergency-Volunteer-Coordination-System_1.png', '/Emergency-Volunteer-Coordination-System_2.png', '/Emergency-Volunteer-Coordination-System_3.png', '/Emergency-Volunteer-Coordination-System_4.png', '/Emergency-Volunteer-Coordination-System_5.png'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/Emergency-Volunteer-Coordination-System',
      liveUrl: '',
      features: [
        'Emergency Request Management - Create, track, and manage emergency requests',
        'Volunteer Coordination - Smart matching and assignment of volunteers',
        'Real-time Communication - Live updates and notifications via Socket.IO',
        'Interactive Maps - Visual emergency locations with Google Maps integration',
        'Role-based Access Control - Victim, Volunteer, and Admin roles',
        'Volunteer Verification - Admin-approved volunteer system',
        'JWT Authentication - Secure user sessions',
        'Responsive Design - Modern dark theme that works on all devices'
      ],
      year: '2026'
    },
    {
      id: 8,
      title: 'BudgeStitch',
      shortDescription: 'Connect local tailors with customers',
      fullDescription: 'A comprehensive e-commerce platform that bridges the gap between local tailors and customers seeking affordable custom clothing. Users can browse tailor portfolios, select fabrics, provide measurements, and place orders for custom-tailored garments. The platform empowers local artisans while providing customers with personalized clothing options at competitive prices.',
      techStack: ['Django', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      image: '/Budge.png',
      images: ['/Budge.png'],
      category: 'E-Commerce',
      githubUrl: 'https://github.com/jayshinde0/BudgeStitch',
      liveUrl: 'https://budgestitch.netlify.app',
      features: [
        'Fabric Selection - Browse and choose from various fabric options',
        'Custom Tailoring - Provide measurements for perfect fit',
        'Tailor Portfolios - View work samples and ratings',
        'Order Management - Track orders from placement to delivery',
        'Price Comparison - Compare quotes from multiple tailors',
        'Review System - Rate and review tailor services',
        'Measurement Guide - Help users take accurate measurements',
        'Secure Payments - Safe transaction processing'
      ],
      year: '2024'
    },
    {
      id: 9,
      title: 'Secure Transfer',
      shortDescription: 'Real-time file transfer on local network',
      fullDescription: 'A secure file transfer system designed for real-time transfers between devices on the same local network without requiring cloud storage. Built with React and Spring Boot, it uses WebSocket technology for instant file sharing with end-to-end encryption to ensure data privacy and security.',
      techStack: ['React', 'Spring Boot', 'WebSocket', 'HTML5', 'CSS3'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: ['https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/File-flow',
      liveUrl: '',
      features: [
        'Real-time Transfers - Instant file sharing via WebSocket',
        'No Cloud Required - Direct peer-to-peer transfer',
        'Secure Encryption - End-to-end encrypted transfers',
        'Local Network - Works on same WiFi network',
        'Multiple File Types - Support for all file formats',
        'Progress Tracking - Real-time upload/download progress',
        'Cross-platform - Works on any device with browser',
        'No Size Limit - Transfer files of any size'
      ],
      year: '2024'
    },
    {
      id: 10,
      title: 'LeetMetric',
      shortDescription: 'Track LeetCode performance visually',
      fullDescription: 'A performance tracking tool designed for competitive programmers to visualize their LeetCode progress. The application fetches user statistics and presents them through interactive charts and graphs using Chart.js, helping users identify strengths and areas for improvement. Built with vanilla JavaScript for lightweight, fast performance.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LeetCode API'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: ['https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800'],
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/LeetMetric',
      liveUrl: 'https://leetmetric.netlify.app',
      features: [
        'Performance Tracking - Monitor solving progress over time',
        'Interactive Charts - Beautiful data visualizations',
        'Real-time Data - Fetch latest LeetCode statistics',
        'Problem Analysis - Breakdown by difficulty and topic',
        'Streak Tracking - Monitor consistent practice',
        'Comparison Tools - Compare with other users',
        'Progress Insights - Identify improvement areas',
        'Lightweight - Fast loading with vanilla JavaScript'
      ],
      year: '2024'
    },
    {
      id: 11,
      title: 'InterviewAce',
      shortDescription: 'AI-powered interview preparation',
      fullDescription: 'An intelligent interview preparation platform that leverages AI to provide personalized mock interviews and learning paths. Built with Next.js and TypeScript, it offers comprehensive interview practice with real-time feedback, progress tracking, and detailed analytics to help candidates prepare effectively for technical interviews.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML'],
      image: 'interview.png',
      images: ['interview.png'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/InterviewAcee',
      liveUrl: '',
      features: [
        'AI Mock Interviews - Realistic interview simulations',
        'Progress Tracking - Monitor improvement over time',
        'Analytics Dashboard - Detailed performance insights',
        'Personalized Learning - Adaptive question difficulty',
        'Multiple Categories - Technical, behavioral, and more',
        'Feedback System - Instant AI-powered feedback',
        'Practice History - Review past interview sessions',
        'Performance Metrics - Track success rates and timing'
      ],
      year: '2025'
    },
    {
      id: 12,
      title: 'Debuggers Club',
      shortDescription: 'Official club website with event management',
      fullDescription: 'The official website for Debugger\'s Club featuring comprehensive event management capabilities. Students can register for technical events, upload payment confirmations, and receive instant updates. The platform integrates with Google Sheets for seamless data management and uses Cloudinary for efficient image storage. Built with Next.js for optimal performance and SEO.',
      techStack: ['Next.js', 'MongoDB', 'Cloudinary', 'TypeScript', 'Google Sheets API'],
      image: 'Debuggers.png',
      images: ['Debuggers.png'],
      category: 'Full Stack',
      githubUrl: '',
      liveUrl: 'https://debuggers-club.vercel.app/',
      features: [
        'Event Registration - Easy signup for club events',
        'Payment Upload - Submit payment confirmations',
        'Google Sheets Export - Automatic data synchronization',
        'Image Management - Cloudinary integration for media',
        'Real-time Updates - Instant event notifications',
        'Member Dashboard - Track registrations and participation',
        'Responsive Design - Mobile-friendly interface',
        'SEO Optimized - Better discoverability with Next.js'
      ],
      year: '2025'
    },
    {
      id: 13,
      title: 'Zennit UI',
      shortDescription: 'Modern component library for React',
      fullDescription: 'A comprehensive UI component library built with React and Tailwind CSS. Features over 50 customizable components with dark mode support and accessibility-first design. Perfect for rapidly building modern web applications with consistent design patterns and best practices.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/zennit_ui.png',
      images: ['/zennit_ui.png'],
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/zennit-ui',
      liveUrl: 'https://zennit-ui.vercel.app/',
      features: [
        '50+ Components - Comprehensive component library',
        'Dark Mode - Built-in theme switching',
        'Fully Accessible - WCAG compliant components',
        'TypeScript Support - Full type safety',
        'Customizable - Easy theming and styling',
        'Responsive - Mobile-first design approach',
        'Animations - Smooth transitions with Framer Motion',
        'Documentation - Detailed usage examples'
      ],
      year: '2024'
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-12 px-4 bg-black relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md">
            Selected projects showcasing full-stack development and modern web technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500 h-[350px]">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">{project.year}</span>
                  </div>

                  {/* Bottom */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack - Single Line */}
                    <div className="text-xs text-gray-400 truncate">
                      {project.techStack.join(' • ')}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
                  <span className="text-gray-400 text-sm">{selectedProject.year}</span>
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
                {/* Image Carousel - Reduced Height */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mb-8 -mx-8 md:-mx-12 -mt-6">
                    <div className="relative bg-neutral-800 border-b border-white/10" style={{ paddingBottom: '40%' }}>
                      {/* Images */}
                      {selectedProject.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${selectedProject.title} screenshot ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-700 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ 
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            margin: '16px'
                          }}
                        />
                      ))}
                      
                      {/* Left Arrow */}
                      {selectedProject.images.length > 1 && (
                        <button
                          onClick={() => setCurrentImageIndex((prev) => 
                            prev === 0 ? selectedProject.images!.length - 1 : prev - 1
                          )}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all"
                          aria-label="Previous image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                      )}
                      
                      {/* Right Arrow */}
                      {selectedProject.images.length > 1 && (
                        <button
                          onClick={() => setCurrentImageIndex((prev) => 
                            prev === selectedProject.images!.length - 1 ? 0 : prev + 1
                          )}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-all"
                          aria-label="Next image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                      
                      {/* Navigation Dots */}
                      {selectedProject.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`h-2 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? 'bg-white w-8'
                                  : 'bg-white/40 hover:bg-white/60 w-2'
                              }`}
                              aria-label={`View image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* Image Counter */}
                      {selectedProject.images.length > 1 && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      )}
                    </div>
                  </div>
                )}

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
                    {selectedProject.fullDescription}
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

export default Projects;
