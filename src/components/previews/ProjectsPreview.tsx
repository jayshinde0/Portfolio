import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectsPreview = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      id: 1,
      title: 'PharmaRise',
      description: 'Professional pharma website showcasing products with BMI calculator. Client project with full frontend development and EmailJS integration.',
      techStack: ['React', 'Tailwind CSS', 'EmailJS', 'BMI Calculator'],
      image: '/Pharmarise.png',
      category: 'Client Project',
      githubUrl: 'https://github.com/jayshinde0/PharmaRise',
      liveUrl: 'https://www.pharmarise.in/',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Habit Tracker',
      description: 'Full-stack MERN habit tracking app with JWT auth, interactive calendar, streak tracking, and real-time progress updates.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      image: '/Habit tracker.png',
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/Habit-Tracker',
      liveUrl: 'https://habit-tracker-iota-gray.vercel.app/',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Blooms Taxonomy Question Paper Generator',
      description: 'AI-powered question paper generation system using Bloom\'s Taxonomy and machine learning',
      techStack: ['Django', 'Python', 'Scikit-learn', 'Pandas'],
      image: '/blooms.jpg',
      category: 'AI/ML',
      githubUrl: 'https://github.com/jayshinde0/Blooms-Taxonomy-Based-Question-Paper-Generation',
      liveUrl: 'https://blooms-taxonomy-generator.netlify.app',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'BudgeStitch',
      description: 'Platform connecting local tailors with customers for affordable custom clothing',
      techStack: ['Django', 'Python', 'HTML', 'CSS'],
      image: '/Budge.png',
      category: 'E-Commerce',
      githubUrl: 'https://github.com/jayshinde0/BudgeStitch',
      liveUrl: 'https://budgestitch.netlify.app',
      status: 'Live'
    },
    {
      id: 5,
      title: 'Secure Transfer',
      description: 'Real-time file transfer system for devices on the same network',
      techStack: ['React', 'Spring Boot', 'HTML5', 'CSS3'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      githubUrl: 'https://github.com/jayshinde0/File-flow',
      liveUrl: 'https://secure-transfer-app.netlify.app',
      status: 'In progress'
    },
    {
      id: 6,
      title: 'LeetMetric',
      description: 'Web tool for tracking and visualizing LeetCode performance',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Frontend',
      githubUrl: 'https://github.com/jayshinde0/LeetMetric',
      liveUrl: 'https://leetmetric.netlify.app',
      status: 'Live'
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
              className="group relative"
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

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm text-gray-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-white text-black rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-gray-200 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
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
    </section>
  );
};

export default ProjectsPreview;