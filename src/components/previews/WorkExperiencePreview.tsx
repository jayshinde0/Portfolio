import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkExperiencePreview = () => {
  const navigate = useNavigate();

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and contributions in software development
          </p>
        </motion.div>

        {/* Preview Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Ayunext Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 text-white mr-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Full Stack Developer Intern</h3>
                <p className="text-purple-400 font-semibold">Ayunext Solutions</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-4 text-sm">
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Sept 2025 – Nov 2025</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Remote</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-sm">30%+ performance improvements with Next.js SSR/SSG</p>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-sm">50% image optimization and lazy loading</p>
              </div>
            </div>
          </motion.div>

          {/* Golden Dreams Software Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white mr-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">Frontend Developer Intern</h3>
                <p className="text-green-400 font-semibold">Golden Dreams Software</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-4 text-sm">
              <div className="flex items-center text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span>June 2024 – Aug 2024</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span>On-site</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-sm">15% user engagement increase with modern UI/UX</p>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <p className="text-gray-300 text-sm">20% workflow efficiency with WordPress customization</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => navigate('/experience')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Full Experience</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WorkExperiencePreview;