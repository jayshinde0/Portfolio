import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Ayunext Solutions",
      position: "Full Stack Developer Intern",
      duration: "Sept 2025 – Feb 2026",
      location: "Remote",
      description: "Architected dynamic UIs and engineered significant performance gains through modern web technologies.",
      achievements: [
        "Built responsive UIs using Next.js and React.js",
        "Achieved 30%+ performance gains through SSR and SSG",
        "Reduced file sizes by 50% with modern optimization",
        "Full-lifecycle development from design to deployment"
      ]
    },
    {
      company: "Golden Dreams Software Solutions",
      position: "Frontend Developer Intern",
      duration: "June 2024 – Aug 2024",
      location: "On-site",
      description: "Developed modern responsive websites and spearheaded UI/UX modernization.",
      achievements: [
        "Developed cross-browser compatible websites",
        "Achieved 15% increase in user engagement",
        "Improved content management workflow by 20%",
        "Translated mockups into functional web pages"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-black min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Work</span>
            <span className="text-gray-500"> Experience</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Professional journey and contributions in software development
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="border border-white/20 rounded-2xl p-8 bg-neutral-900"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-white" />
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  </div>
                  <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm max-w-xl">{exp.description}</p>
                </div>
                <div className="flex flex-col lg:items-end space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-sm font-medium text-gray-400 mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-white mt-0.5">→</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '30%+', label: 'Performance Gain' },
            { value: '50%', label: 'File Size Reduction' },
            { value: '15%', label: 'Engagement Increase' },
            { value: '20%', label: 'Workflow Efficiency' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 border border-white/10 rounded-xl bg-white/[0.02]">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <p className="text-gray-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
