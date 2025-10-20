import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, X, Calendar, Users, Award } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Blooms Taxonomy Question Paper Generator',
      shortDescription: 'AI-powered question paper generation system using Bloom\'s Taxonomy and machine learning',
      fullDescription: 'This project aims to automate the creation of question papers by using Bloom\'s Taxonomy and machine learning techniques. The system helps educators generate questions across various cognitive levels, from basic recall to critical analysis, ensuring diverse and well-balanced assessments. The integration of machine learning algorithms allows for the automatic prediction of marks and categorization of questions based on cognitive complexity.',
      techStack: ['Django', 'Python', 'Scikit-learn', 'Pandas', 'HTML', 'CSS', 'JavaScript'],
      image: '/blooms.jpg',
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Blooms-Taxonomy-Based-Question-Paper-Generation',
      liveUrl: 'https://blooms-taxonomy-generator.netlify.app',
      features: [
        'Bloom\'s Taxonomy Integration: Generate questions based on cognitive levels',
        'Machine Learning Algorithms: Linear Regression for mark prediction',
        'Random Forest for Bloom\'s Taxonomy level prediction',
        'Customizable Parameters: Subject, grade level, difficulty, and topics',
        'Analytics: Student performance insights for educators'
      ],
      duration: '3 months',
      team: 'Solo Project',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'BudgeStitch',
      shortDescription: 'Platform connecting local tailors with customers for affordable custom clothing',
      fullDescription: 'BudgeStitch is an innovative platform designed to connect local tailors with customers seeking affordable, high-quality custom clothing. The platform enables customers to select fabric directly from suppliers or provide their own, allowing for personalized and sustainable fashion choices at competitive prices.',
      techStack: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'Git'],
      image: '/Budge.png',
      category: 'E-Commerce',
      githubUrl: 'https://github.com/jayshinde0/BudgeStitch',
      liveUrl: 'https://budgestitch.netlify.app',
      features: [
        'Fabric Selection: Choose from local suppliers or bring your own',
        'Custom Tailoring: Connect with local tailors for quality work',
        'Cost Efficiency: Eliminate intermediaries, reduce costs',
        'Local Business Support: Expand market reach for tailors',
        'Sustainability: Promote eco-friendly made-to-order clothing',
        'Tailor Portfolio: View profiles, portfolios, and reviews'
      ],
      duration: '4 months',
      team: 'Team of 3',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Secure Transfer',
      shortDescription: 'Real-time file transfer system for devices on the same network',
      fullDescription: 'Secure File transfer system for real-time file transfers between devices on the same network without requiring user accounts or cloud storage. Implemented with React frontend and Spring Boot backend for seamless and secure file sharing.',
      techStack: ['React', 'Spring Boot', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/File-flow',
      liveUrl: 'https://secure-transfer-app.netlify.app',
      features: [
        'Real-time file transfers between network devices',
        'No user accounts or cloud storage required',
        'Secure file sharing with encryption',
        'React.js frontend with dynamic UI rendering',
        'Spring Boot backend for robust file handling',
        'Bootstrap responsive design'
      ],
      duration: '2 months',
      team: 'Solo Project',
      status: 'In progress'
    },
    {
      id: 4,
      title: 'LeetMetric',
      shortDescription: 'Web tool for tracking and visualizing LeetCode performance',
      fullDescription: 'LeetMetric is a web-based tool that tracks and visualizes a user\'s LeetCode performance. It allows users to enter their username to view their problem-solving stats, including the number of easy, medium, and hard problems solved with beautiful data visualizations.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'LeetCode API'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/LeetMetric',
      liveUrl: 'https://leetmetric.netlify.app',
      features: [
        'LeetCode performance tracking and visualization',
        'Problem-solving statistics by difficulty level',
        'Interactive charts and graphs',
        'User-friendly interface for username input',
        'Real-time data fetching from LeetCode API',
        'Responsive design for all devices'
      ],
      duration: '1 month',
      team: 'Solo Project',
      status: 'Live'
    },
    {
      id: 5,
      title: 'Tourism App',
      shortDescription: 'React-based travel destinations showcase with interactive cards',
      fullDescription: 'The Tourism App is a React-based web application that displays popular travel destinations in interactive cards. Each card features an image, a brief description, and a "Not Interested" button. Clicking the button removes the card, ensuring a clean browsing experience for users exploring travel options.',
      techStack: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      image: '/Tourism.png',
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/Tourism-App',
      liveUrl: 'https://jayshinde0.github.io/Tourism-app/',
      features: [
        'Interactive destination cards with images',
        'Clean and intuitive user interface',
        'Card removal functionality for personalization',
        'Responsive design for mobile and desktop',
        'Smooth animations and transitions',
        'Modern React component architecture'
      ],
      duration: '3 weeks',
      team: 'Solo Project',
      status: 'Completed'
    },
    {
  id: 6,
  title: 'InterviewAce',
  shortDescription: 'AI-powered interview preparation platform with personalized learning paths for technical interviews',
  fullDescription: 'InterviewAce is an intelligent interview preparation platform designed to help users master technical interviews through AI-powered practice, mock interviews, and personalized learning paths. The application focuses on both coding interviews and aptitude tests, providing a comprehensive preparation environment.',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Context', 'JWT', 'Recharts', 'shadcn/ui'],
  image: 'interview.png',
  category: 'Full Stack',
  githubUrl: 'https://github.com/jayshinde0/InterviewAcee',
  liveUrl: '',
  features: [
    'AI-powered mock interviews with real-time feedback',
    'Interactive coding problems with multiple language support',
    'Comprehensive aptitude test preparation',
    'Personalized learning paths and progress tracking',
    'Performance analytics and statistics dashboard',
    'Dark/Light mode with responsive design'
  ],
  duration: '6 months',
  team: 'Solo Project',
  status: 'In progress'
},
{
  id: 7,
  title: 'Debugger’s Club Website',
  shortDescription: 'Official website for Debugger’s Club with event registration, data management, and club information',
  fullDescription: 'The Debugger’s Club Website is the official platform for our college’s Debugger’s Club, designed to showcase club information and seamlessly manage event registrations. On the frontend, it highlights club activities, achievements, and updates. The backend handles event registration forms where participants can submit details such as name, email, phone number, transaction ID, and upload payment screenshots. All submissions are securely stored in MongoDB and Cloudinary, with integrated export functionality to Google Sheets for streamlined event management.',
  techStack: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB', 'Cloudinary', 'Google Sheets API'],
  image: 'Debuggers.png',
  category: 'Full Stack',
  githubUrl: '', 
  liveUrl: 'https://debuggers-club.vercel.app/',
  features: [
    'Club information and event highlights',
    'Event registration with participant details form',
    'Cloudinary integration for payment screenshot uploads',
    'Secure storage of data in MongoDB',
    'Automated export of event data to Google Sheets',
    'Responsive and modern UI for students and organizers'
  ],
  duration: '3 months',
  team: 'Team Project',
  status: 'Live'
}

    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 font-orbitron"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 mb-16 max-w-3xl mx-auto"
          >
            A showcase of innovative projects demonstrating expertise in full-stack development, 
            AI/ML integration, and modern web technologies
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs font-medium border ${
                        project.status === 'Live' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 font-orbitron text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-xs font-medium border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 bg-gray-500/20 backdrop-blur-sm rounded-full text-gray-300 text-xs font-medium border border-gray-500/30">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <Zap className="w-4 h-4" />
                          View Details
                        </span>
                      </motion.button>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>

                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-2xl" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/30">
                      {selectedProject.category}
                    </span>
                    <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-sm font-medium border ${
                      selectedProject.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white font-orbitron">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Project Info Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="text-white font-medium">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Users className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Team</p>
                      <p className="text-white font-medium">{selectedProject.team}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg">
                    <Award className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="text-sm text-gray-400">Status</p>
                      <p className="text-white font-medium">{selectedProject.status}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Demo
                  </motion.a>

                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-white text-center border border-white/20 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                  </motion.a>
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