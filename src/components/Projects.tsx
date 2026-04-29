import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './previews/ProjectModal.css';
import OptimizedImage from './OptimizedImage';

// ── Folder HUD canvas ─────────────────────────────────────────────────────────
const FolderHUD = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;
    let t = 0;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      const w = canvas.parentElement!.getBoundingClientRect().width;
      const h = canvas.parentElement!.getBoundingClientRect().height;
      ctx.clearRect(0, 0, w, h);
      t += 0.005;
      const cx = w / 2, cy = h / 2;
      // glow
      const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.5);
      glow.addColorStop(0, 'rgba(59,130,246,0.08)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      // orbit rings
      for (let i = 0; i < 3; i++) {
        const r = 52 + i * 22;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (1.4 - i * 0.35) + i);
        ctx.beginPath();
        ctx.ellipse(0, 0, r, r * 0.32, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,162,255,${0.14 - i * 0.035})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
      // folder body
      const s = 26;
      ctx.save();
      ctx.translate(cx, cy + Math.sin(t * 1.8) * 3.5);
      ctx.strokeStyle = 'rgba(99,162,255,0.55)';
      ctx.lineWidth = 1.5;
      ctx.lineJoin = 'round';
      // tab
      ctx.beginPath();
      ctx.moveTo(-s, -s * 0.15);
      ctx.lineTo(-s * 0.2, -s * 0.15);
      ctx.lineTo(-s * 0.05, -s * 0.4);
      ctx.lineTo(s * 0.5, -s * 0.4);
      ctx.lineTo(s * 0.5, -s * 0.15);
      ctx.stroke();
      // body
      ctx.strokeRect(-s, -s * 0.15, s * 2, s * 1.2);
      // </> symbol inside
      ctx.font = `bold ${s * 0.55}px monospace`;
      ctx.fillStyle = 'rgba(99,162,255,0.6)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('</>', 0, s * 0.45);
      ctx.restore();
      // particles
      for (let i = 0; i < 4; i++) {
        const px = cx + Math.sin(t * 0.6 + i * 1.7) * 72;
        const py = cy + Math.cos(t * 0.45 + i * 1.2) * 48;
        ctx.fillStyle = `rgba(99,162,255,${0.18 + Math.sin(t + i) * 0.08})`;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};


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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const categories = ['All Projects', 'AI/ML', 'Full Stack', 'Frontend', 'E-Commerce'];

  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Lock body scroll + ESC key
  useEffect(() => {
    const html = document.documentElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) setLightboxImage(null);
        else closeModal();
      }
    };
    if (selectedProject) {
      // Freeze scroll: save position then lock body
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
      if (contentRef.current) contentRef.current.scrollTop = 0;
      requestAnimationFrame(() => {
        if (contentRef.current) contentRef.current.scrollTop = 0;
      });
    } else {
      // Restore scroll position
      const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, scrollY);
    }
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      // Always restore body on cleanup
      const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollY) window.scrollTo(0, scrollY);
    };
  }, [selectedProject, closeModal, lightboxImage]);

  // Auto-slide carousel
  useEffect(() => {
    if (!selectedProject?.images || selectedProject.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'TicketFlow AI',
      shortDescription: 'Intelligent HITL ticket management system with 10-agent AI pipeline for automated resolution',
      fullDescription: 'An enterprise-grade ticket management system that combines machine learning, natural language processing, and large language models to automate IT support workflows. The system features a 10-agent AI pipeline including NLP preprocessing with spaCy, sentiment analysis using HuggingFace Transformers, category/priority classification with scikit-learn, and RAG-powered response generation using Mistral-Nemo LLM via Ollama. Built with FastAPI and React, it includes ChromaDB for semantic search, real-time WebSocket updates, LIME explainability for predictions, and continuous learning through human-in-the-loop feedback. The system automatically classifies tickets, predicts SLA deadlines, detects duplicates, generates AI responses, and routes decisions based on confidence scores (≥85% auto-resolve, 60-85% suggest to agent, <60% escalate). Models automatically retrain when accuracy drops below 80%.',
      techStack: ['FastAPI', 'React', 'MongoDB', 'ChromaDB', 'Mistral-Nemo', 'Ollama', 'scikit-learn', 'HuggingFace', 'WebSocket'],
      image: '/TicketFlow-AI 1.webp',
      images: ['/TicketFlow-AI 1.webp', '/TicketFlow-AI 2.webp', '/TicketFlow-AI 3.webp', '/TicketFlow-AI 4.webp', '/TicketFlow-AI 5.webp'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/TicketFlow-AI',
      liveUrl: '',
      features: [
        '10-Agent AI Pipeline - Specialized agents for classification, sentiment, RAG, and routing',
        'RAG-Powered Responses - ChromaDB + Mistral-Nemo LLM for context-aware solutions',
        'Human-in-the-Loop - Agent review with feedback for continuous improvement',
        'Smart Classification - Auto-categorize into 10 categories with ML models',
        'SLA Prediction - Intelligent deadline estimation and breach risk alerts',
        'Duplicate Detection - Semantic search finds similar resolved tickets',
        'Real-time Analytics - Live dashboards with WebSocket updates',
        'Auto-Retraining - Models retrain when accuracy drops below threshold'
      ],
      year: '2026'
    },
    {
      id: 2,
      title: 'StudyAssist AI',
      shortDescription: 'Adaptive study platform with AI-powered quiz generation',
      fullDescription: 'An intelligent study assistant that transforms static learning materials into interactive, personalized learning experiences. Upload content in multiple formats (PDFs, DOCX, TXT, YouTube videos) and the system automatically generates AI-powered quizzes while tracking topic-level performance. The adaptive learning engine analyzes your performance and adjusts future quizzes to focus on weaker areas, improving learning efficiency and retention. Uses local Mistral LLM via Ollama for privacy, reduced latency, and cost-efficient AI processing without relying on cloud APIs.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Ollama', 'Mistral LLM', 'Express', 'Tailwind CSS'],
      image: '/Study_Assistant_2.webp',
      images: ['/Study_Assistant_1.webp', '/Study_Assistant_2.webp', '/Study_Assistant_3.webp'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Study-Assistant-',
      liveUrl: 'https://study-flow-ivory-xi.vercel.app/',
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
      id: 3,
      title: 'LegalMind AI',
      shortDescription: 'Production-grade RAG system for legal document analysis',
      fullDescription: 'A production-grade RAG (Retrieval-Augmented Generation) system for intelligent legal document analysis with zero hallucinations. Built to help professionals analyze legal documents instantly by combining semantic search with AI generation to provide accurate, cited answers. The system processes 50-page legal PDFs in ~20 seconds, answers questions with exact citations, and prevents hallucinations through grounded responses. Uses Google Gemini 2.5 Flash Lite for text generation and HuggingFace all-MiniLM-L6-v2 for local embeddings, with FAISS for similarity search and MongoDB for metadata storage.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'LangChain', 'Google Gemini', 'FAISS', 'HuggingFace', 'Tailwind CSS'],
      image: '/Legal_ai_1.webp',
      images: ['/Legal_ai_1.webp', '/Legal_ai_2.webp'],
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
      id: 4,
      title: 'Student Development Tracker',
      shortDescription: 'Holistic assessment platform for tracking student mental, emotional, and physical health with AI-powered insights',
      fullDescription: 'A comprehensive mobile application for assessing, tracking, and improving the cognitive (IQ), physical, and emotional (EQ) development of K-12 students. Built with React Native and FastAPI, the system uses APAAR ID for unique student identification and integrates Cerebras LLM for intelligent test generation and personalized recommendations. Features include dynamic EQ/IQ assessments based on the EmoSocio model, physical health tracking with BMI calculations, AI-generated parent reports with targeted SEL activities, personalized Indian nutrition plans, and comprehensive PDF reports with visual charts. The platform supports three user roles: students for taking assessments, teachers for uploading physical data and managing records, and parents for viewing comprehensive reports and actionable remedies.',
      techStack: ['React Native', 'Expo', 'FastAPI', 'MongoDB', 'Cerebras AI', 'JWT', 'Python', 'Chart.js'],
      image: '/hack1.webp',
      images: ['/hack1.webp', '/hack2.webp', '/hack3.webp', '/hack4.webp'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/standardised_evaluation',
      liveUrl: '',
      features: [
        'AI-Powered Assessments - Dynamic EQ/IQ tests using Cerebras LLM',
        'EmoSocio Model - 19 questions covering emotional competencies',
        'Physical Health Tracking - BMI, fitness scores, and biometric data',
        'Personalized Nutrition Plans - Indian diet recommendations with meal planning',
        'Parent Dashboard - Comprehensive reports with AI-generated insights',
        'PDF Report Generation - Professional reports with charts and analysis',
        'Role-Based Access - Separate experiences for students, parents, teachers',
        'Visual Analytics - Interactive charts for mental and physical health trends'
      ],
      year: '2025'
    },
    {
      id: 5,
      title: 'Habit Tracker',
      shortDescription: 'Full-stack MERN habit tracking application',
      fullDescription: 'A comprehensive habit tracking application built with the MERN stack. Features JWT authentication for secure user sessions, an interactive monthly calendar view for visualizing habit completion, streak tracking to maintain motivation, and real-time progress updates. The clean minimal interface built with Tailwind CSS provides an intuitive user experience for managing daily habits and building consistent routines.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'],
      image: '/Habit tracker.webp',
      images: ['/Habit tracker.webp'],
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
      id: 6,
      title: 'InterviewAce',
      shortDescription: 'AI-powered interview preparation',
      fullDescription: 'An intelligent interview preparation platform that leverages AI to provide personalized mock interviews and learning paths. Built with Next.js and TypeScript, it offers comprehensive interview practice with real-time feedback, progress tracking, and detailed analytics to help candidates prepare effectively for technical interviews.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML'],
      image: 'interview.webp',
      images: ['interview.webp'],
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
      id: 7,
      title: 'AuctionX',
      shortDescription: 'Real-time AI auction platform with live bidding and team management',
      fullDescription: 'A real-time auction platform designed for AI tools and problem statements at college fest events. Built with Next.js 14 and Supabase, the system features WebSocket-based real-time updates with zero latency, allowing teams to see auction items instantly without refreshing. The platform includes comprehensive admin controls for starting/ending auctions, managing teams with custom colors and balances, and updating leaderboards. Teams can track their balance, view purchased items, and participate in live auctions. The system uses PostgreSQL for data storage and Supabase Realtime for instant synchronization across all connected clients, making it perfect for high-energy auction events.',
      techStack: ['Next.js 14', 'React', 'Supabase', 'PostgreSQL', 'WebSocket', 'Tailwind CSS', 'TypeScript'],
      image: '/AI AUCTION WAR 1.webp',
      images: ['/AI AUCTION WAR 1.webp', '/AI AUCTION WAR 2.webp', '/AI AUCTION WAR 3.webp', '/AI AUCTION WAR 4.webp'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/AuctionX',
      liveUrl: 'https://auction-x-three.vercel.app/',
      features: [
        'Real-time Auction View - See live items instantly with WebSocket',
        'Team Dashboard - Track balance, purchases, and leaderboard',
        'Admin Control Panel - Start/end auctions with one click',
        'Item Management - Add/delete AI tools and problem statements',
        'Team Management - Create teams with custom colors and balances',
        'Live Updates - Zero latency synchronization via Supabase Realtime',
        'Results Management - Update leaderboard and assign winners',
        'Secure Authentication - Team-based and admin login system'
      ],
      year: '2026'
    },
    {
      id: 8,
      title: 'Blooms Taxonomy QPG',
      shortDescription: 'AI-powered question paper generation using ML',
      fullDescription: 'An intelligent question paper generation system that automates the creation of educational assessments using Bloom\'s Taxonomy principles. The system uses machine learning techniques to analyze question difficulty levels and automatically predict appropriate marks. Built with Django and Python, it helps educators create balanced question papers that test different cognitive levels from remembering to creating.',
      techStack: ['Django', 'Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      image: '/blooms.webp',
      images: ['/blooms.webp'],
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
      id: 9,
      title: 'Flash AI',
      shortDescription: 'Stranger Things themed AI prompt challenge event',
      fullDescription: 'An immersive, Stranger Things-themed web application designed to host an AI prompt challenge event. The website creates a cinematic experience where students explore the dark world of the Upside Down while participating in 7 AI-powered challenges. Features include a cinematic Chronicles storytelling experience with VHS effects, progressive card unlocking system with puzzles, interactive spin wheel rewards, comprehensive screenshot protection, and advanced key logging for security. Built with React, TypeScript, and Framer Motion for smooth 60fps animations. The event uses a narrative-driven approach with strict time limits (75 minutes total, 60 seconds per card) and includes a dramatic book closing animation when all challenges are completed.',
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router', 'IndexedDB'],
      image: '/Flash_ai_1.webp',
      images: ['/Flash_ai_1.webp', '/Flash_ai_2.webp', '/Flash_ai_3.webp', '/Flash_ai_4.webp', '/Flash_ai_5.webp'],
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
      id: 10,
      title: 'Emergency Coordination System',
      shortDescription: 'AI-powered emergency response coordination platform',
      fullDescription: 'A comprehensive AI-powered emergency response coordination platform that connects victims, volunteers, and administrators for efficient emergency management. Features real-time communication via Socket.IO, interactive Google Maps integration for visual emergency locations, and smart volunteer matching. The system includes role-based access control with three user types: victims who can create and track emergency requests, volunteers who can accept and help with emergencies after admin verification, and administrators who manage the entire system. Built with modern tech stack including React, Node.js, MongoDB, and Socket.IO for real-time updates.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Google Maps API', 'JWT', 'Tailwind CSS'],
      image: '/Emergency-Volunteer-Coordination-System_1.webp',
      images: ['/Emergency-Volunteer-Coordination-System_1.webp', '/Emergency-Volunteer-Coordination-System_2.webp', '/Emergency-Volunteer-Coordination-System_3.webp', '/Emergency-Volunteer-Coordination-System_4.webp', '/Emergency-Volunteer-Coordination-System_5.webp'],
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
      id: 11,
      title: 'BudgeStitch',
      shortDescription: 'Connect local tailors with customers',
      fullDescription: 'A comprehensive e-commerce platform that bridges the gap between local tailors and customers seeking affordable custom clothing. Users can browse tailor portfolios, select fabrics, provide measurements, and place orders for custom-tailored garments. The platform empowers local artisans while providing customers with personalized clothing options at competitive prices.',
      techStack: ['Django', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      image: '/Budge.webp',
      images: ['/Budge.webp'],
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
      id: 12,
      title: 'Secure Transfer',
      shortDescription: 'Real-time file transfer on local network',
      fullDescription: 'A secure file transfer system designed for real-time transfers between devices on the same local network without requiring cloud storage. Built with React and Spring Boot, it uses WebSocket technology for instant file sharing with end-to-end encryption to ensure data privacy and security.',
      techStack: ['React', 'Spring Boot', 'WebSocket', 'HTML5', 'CSS3'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: ['https://images.pexels.com/photos/1181675/pexels-photo-1181675.webp?auto=compress&cs=tinysrgb&w=800'],
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
      id: 13,
      title: 'LeetMetric',
      shortDescription: 'Track LeetCode performance visually',
      fullDescription: 'A performance tracking tool designed for competitive programmers to visualize their LeetCode progress. The application fetches user statistics and presents them through interactive charts and graphs using Chart.js, helping users identify strengths and areas for improvement. Built with vanilla JavaScript for lightweight, fast performance.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LeetCode API'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: ['https://images.pexels.com/photos/577585/pexels-photo-577585.webp?auto=compress&cs=tinysrgb&w=800'],
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
      id: 14,
      title: 'InterviewAce',
      shortDescription: 'AI-powered interview preparation',
      fullDescription: 'An intelligent interview preparation platform that leverages AI to provide personalized mock interviews and learning paths. Built with Next.js and TypeScript, it offers comprehensive interview practice with real-time feedback, progress tracking, and detailed analytics to help candidates prepare effectively for technical interviews.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML'],
      image: 'interview.webp',
      images: ['interview.webp'],
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
      id: 15,
      title: 'Debuggers Club',
      shortDescription: 'Official club website with event management',
      fullDescription: 'The official website for Debugger\'s Club featuring comprehensive event management capabilities. Students can register for technical events, upload payment confirmations, and receive instant updates. The platform integrates with Google Sheets for seamless data management and uses Cloudinary for efficient image storage. Built with Next.js for optimal performance and SEO.',
      techStack: ['Next.js', 'MongoDB', 'Cloudinary', 'TypeScript', 'Google Sheets API'],
      image: 'Debuggers.webp',
      images: ['Debuggers.webp'],
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
      id: 16,
      title: 'Zennit UI',
      shortDescription: 'Modern component library for React',
      fullDescription: 'A comprehensive UI component library built with React and Tailwind CSS. Features over 50 customizable components with dark mode support and accessibility-first design. Perfect for rapidly building modern web applications with consistent design patterns and best practices.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/zennit_ui.webp',
      images: ['/zennit_ui.webp'],
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
    <>
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-black min-h-screen z-10">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.03) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_80%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <p className="text-gray-500 text-xs sm:text-sm tracking-[0.25em] uppercase font-light">My Work</p>
              <div className="w-8 h-px bg-gray-700/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Projects</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg">
              A collection of projects that demonstrate my skills, creativity and passion for building real-world solutions.
            </p>
          </motion.div>
          {/* Folder HUD — desktop only */}
          <motion.div className="hidden lg:block relative w-44 h-44 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}>
            <FolderHUD />
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/40 shadow-[0_0_12px_rgba(59,130,246,0.15)]'
                    : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.06] hover:text-white border border-white/[0.06]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.08, 0.4) }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -4 }}
            >
              <div className="relative rounded-2xl border border-white/[0.06] group-hover:border-blue-400/20 bg-gradient-to-br from-white/[0.04] to-transparent transition-all duration-500 overflow-hidden h-[220px]">
                {/* Blue glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card layout: left info + right image */}
                <div className="flex h-full">

                  {/* Left: text content */}
                  <div className="flex-1 p-5 flex flex-col justify-between min-w-0 overflow-hidden">
                    <div>
                      {/* Top row */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] text-blue-300/80 bg-blue-500/10 border border-blue-400/20 px-2.5 py-0.5 rounded-full font-medium">
                          {project.category}
                        </span>
                        <span className="text-[10px] text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-blue-50 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-3">
                        {project.shortDescription}
                      </p>
                      {/* Tech chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.07] text-gray-400">{tech}</span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.07] text-gray-500">+{project.techStack.length - 3}</span>
                        )}
                      </div>
                    </div>
                    {/* CTA buttons */}
                    <div className="flex gap-2 mt-4">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/15 border border-blue-400/25 text-blue-300 text-[11px] font-medium hover:bg-blue-500/25 transition-all">
                          <ExternalLink className="w-3 h-3" /><span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300 text-[11px] font-medium hover:bg-white/10 transition-all">
                          <Github className="w-3 h-3" /><span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: screenshot preview - fixed 42% width, full height */}
                  <div className="w-[42%] flex-shrink-0 relative overflow-hidden border-l border-white/[0.05]">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>

      {createPortal(
        <AnimatePresence>
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              {/* LEFT: header + scrollable info + footer */}
              <div className="modal-left" style={{display:'flex',flexDirection:'column',flex:1,minWidth:0,overflow:'hidden'}}>
                  <div className="modal-header">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 bg-blue-500/15 border border-blue-400/25 rounded-full text-blue-300 text-xs font-medium">{selectedProject.category}</span>
                      <span className="text-gray-500 text-sm">{selectedProject.year}</span>
                    </div>
                    <button onClick={closeModal} className="p-2 hover:bg-white/[0.06] rounded-full transition-colors border border-transparent hover:border-white/10" aria-label="Close">
                      <X className="w-5 h-5 text-gray-300" />
                    </button>
                  </div>
                  <div
                    className="modal-content"
                    ref={contentRef}
                    style={{flex:1,minHeight:0,overflowY:'auto',overflowX:'hidden',padding:'1.25rem 1.5rem',overscrollBehavior:'contain'}}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{selectedProject.title}</h2>
                    <p className="text-gray-500 text-xs mb-4">{selectedProject.category} · {selectedProject.year}</p>
                    <div className="mb-4">
                      <p className="text-[10px] text-blue-400/70 font-semibold tracking-[0.18em] uppercase mb-2">Overview</p>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{selectedProject.fullDescription}</p>
                    </div>
                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div className="mb-4">
                        <p className="text-[10px] text-blue-400/70 font-semibold tracking-[0.18em] uppercase mb-2">Key Features</p>
                        <div className="flex flex-col gap-1.5">
                          {selectedProject.features.map((f, i) => (
                            <div key={i} style={{display:'flex',alignItems:'flex-start',gap:'8px',padding:'8px 10px',background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)',borderRadius:'8px'}}>
                              <span style={{width:'5px',height:'5px',borderRadius:'50%',background:'rgba(99,162,255,0.6)',marginTop:'5px',flexShrink:0}} />
                              <span className="text-gray-300 text-xs leading-relaxed">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-[10px] text-blue-400/70 font-semibold tracking-[0.18em] uppercase mb-2">Built With</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech, i) => (
                          <span key={i} style={{padding:'4px 10px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'8px',color:'#e2e8f0',fontSize:'11px',fontWeight:500}}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="flex gap-3">
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-2 transition-all">
                          <Github className="w-4 h-4" /><span>View Code</span>
                        </a>
                      )}
                      {selectedProject.liveUrl ? (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-300 rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-2 transition-all">
                          <ExternalLink className="w-4 h-4" /><span>Live Demo</span>
                        </a>
                      ) : (
                        <div className="flex-1 py-2.5 border border-white/[0.06] text-gray-600 rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-2 cursor-not-allowed">
                          <ExternalLink className="w-4 h-4" /><span>Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>
              </div>{/* end modal-left */}

              {/* RIGHT: image gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="modal-right">
                  <div className="modal-right-viewer" style={{cursor:'zoom-in'}} onClick={() => setLightboxImage(selectedProject.images![currentImageIndex])}>
                    {selectedProject.images.map((src, idx) => (
                      <img key={idx} src={src} alt={`${selectedProject.title} ${idx+1}`}
                        style={{opacity: idx===currentImageIndex ? 1 : 0}} />
                    ))}
                    <div className="modal-counter">{currentImageIndex+1} / {selectedProject.images.length}</div>
                    {selectedProject.images.length > 1 && (
                      <>
                        <button className="modal-nav-btn prev" onClick={(e)=>{e.stopPropagation();setCurrentImageIndex(p=>p===0?selectedProject.images!.length-1:p-1)}}><ChevronLeft size={14}/></button>
                        <button className="modal-nav-btn next" onClick={(e)=>{e.stopPropagation();setCurrentImageIndex(p=>p===selectedProject.images!.length-1?0:p+1)}}><ChevronRight size={14}/></button>
                      </>
                    )}
                  </div>
                  {selectedProject.images.length > 1 && (
                    <div className="modal-thumb-strip">
                      {selectedProject.images.map((src,i)=>(
                        <button key={i} className={`modal-thumb${i===currentImageIndex?' active':''}`} onClick={()=>setCurrentImageIndex(i)}>
                          <img src={src} alt="" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        </AnimatePresence>
      , document.body)}
      {/* Lightbox: full-screen image view */}
      {lightboxImage && createPortal(
        <div
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'rgba(0,0,0,0.96)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out', padding: '20px',
            animation: 'modalOverlayIn 0.2s ease-out',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute', top: 16, right: 16,
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', fontSize: 18, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <X size={18} />
          </button>
          <img
            src={lightboxImage}
            alt="Full size preview"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '95vw', maxHeight: '92vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            }}
          />
        </div>,
        document.body
      )}
    </>
  );
};

export default Projects;
