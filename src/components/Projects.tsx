import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  image: string;
  category: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  year: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'PharmaRise',
      shortDescription: 'Professional pharma website with product showcase',
      fullDescription: 'Client project - Professional pharmaceutical website showcasing products with integrated BMI calculator. Built complete frontend with EmailJS service for contact functionality. Clean, responsive design optimized for healthcare industry.',
      techStack: ['React', 'Tailwind CSS', 'EmailJS', 'JavaScript'],
      image: '/Pharmarise.png',
      category: 'Client Project',
      githubUrl: 'https://github.com/jayshinde0/PharmaRise',
      liveUrl: 'https://www.pharmarise.in/',
      features: ['Product Showcase', 'BMI Calculator', 'EmailJS Contact Form'],
      year: '2025'
    },
    {
      id: 2,
      title: 'Habit Tracker',
      shortDescription: 'Full-stack MERN habit tracking application',
      fullDescription: 'A comprehensive habit tracking application built with the MERN stack. Features JWT authentication, interactive monthly calendar view, streak tracking, and real-time progress updates. Clean minimal interface with Tailwind CSS.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      image: '/Habit tracker.png',
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/Habit-Tracker',
      liveUrl: 'https://habit-tracker-iota-gray.vercel.app/',
      features: ['JWT Authentication', 'Streak Tracking', 'Monthly Calendar View'],
      year: '2025'
    },
    {
      id: 3,
      title: 'Blooms Taxonomy QPG',
      shortDescription: 'AI-powered question paper generation using ML',
      fullDescription: 'Automates question paper creation using Bloom\'s Taxonomy and ML techniques with automatic mark prediction.',
      techStack: ['Django', 'Python', 'Scikit-learn'],
      image: '/blooms.jpg',
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Blooms-Taxonomy-Based-Question-Paper-Generation',
      liveUrl: 'https://blooms-taxonomy-generator.netlify.app',
      features: ['Bloom\'s Taxonomy Integration', 'ML-based prediction', 'Customizable parameters'],
      year: '2024'
    },
    {
      id: 4,
      title: 'BudgeStitch',
      shortDescription: 'Connect local tailors with customers',
      fullDescription: 'Platform connecting local tailors with customers for affordable custom clothing.',
      techStack: ['Django', 'Python', 'SQLite'],
      image: '/Budge.png',
      category: 'E-Commerce',
      githubUrl: 'https://github.com/jayshinde0/BudgeStitch',
      liveUrl: 'https://budgestitch.netlify.app',
      features: ['Fabric selection', 'Custom tailoring', 'Tailor portfolios'],
      year: '2024'
    },
    {
      id: 5,
      title: 'Secure Transfer',
      shortDescription: 'Real-time file transfer on local network',
      fullDescription: 'Secure file transfer system for real-time transfers between devices without cloud storage.',
      techStack: ['React', 'Spring Boot', 'WebSocket'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/File-flow',
      liveUrl: '',
      features: ['Real-time transfers', 'No cloud required', 'Secure encryption'],
      year: '2024'
    },
    {
      id: 6,
      title: 'LeetMetric',
      shortDescription: 'Track LeetCode performance visually',
      fullDescription: 'Web tool that tracks and visualizes LeetCode performance with beautiful charts.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/LeetMetric',
      liveUrl: 'https://leetmetric.netlify.app',
      features: ['Performance tracking', 'Interactive charts', 'Real-time data'],
      year: '2024'
    },
    {
      id: 7,
      title: 'InterviewAce',
      shortDescription: 'AI-powered interview preparation',
      fullDescription: 'Intelligent interview preparation platform with AI-powered practice and personalized learning.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind'],
      image: 'interview.png',
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/InterviewAcee',
      liveUrl: '',
      features: ['AI mock interviews', 'Progress tracking', 'Analytics'],
      year: '2025'
    },
    {
      id: 8,
      title: 'Debuggers Club',
      shortDescription: 'Official club website with event management',
      fullDescription: 'Official platform for Debugger\'s Club with event registration and data management.',
      techStack: ['Next.js', 'MongoDB', 'Cloudinary'],
      image: 'Debuggers.png',
      category: 'Full Stack',
      githubUrl: '',
      liveUrl: 'https://debuggers-club.vercel.app/',
      features: ['Event registration', 'Payment uploads', 'Google Sheets export'],
      year: '2025'
    }
  ];

  return (
    <section className="py-24 px-4 bg-black relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">Featured</span>
            <br />
            <span className="text-gray-600">Work</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-md">
            Selected projects showcasing full-stack development and modern web technologies
          </p>
        </motion.div>

        {/* Projects Grid - Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
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

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs text-gray-300 bg-white/10 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredId === project.id ? 1 : 0,
                        y: hoveredId === project.id ? 0 : 10
                      }}
                      className="flex items-center gap-2 text-white text-sm mt-4 pt-4 border-t border-white/10"
                    >
                      View Details <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
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
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-neutral-900 border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-72">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs text-gray-400 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3 inline-block">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300 text-sm bg-white/5 p-3 rounded-lg">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="text-sm text-white border border-white/20 px-4 py-2 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-4 bg-white text-black rounded-full font-medium text-center flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${selectedProject.liveUrl ? 'flex-1' : 'w-full'} py-4 border border-white/20 text-white rounded-full font-medium text-center flex items-center justify-center gap-2 hover:bg-white/10 transition-colors`}
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
