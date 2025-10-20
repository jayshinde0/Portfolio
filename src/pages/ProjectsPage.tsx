import React from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20"
    >
      <Projects />
    </motion.div>
  );
};

export default ProjectsPage;