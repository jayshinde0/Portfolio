import React from 'react';
import { motion } from 'framer-motion';
import WorkExperience from '../components/WorkExperience';

const WorkExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20"
    >
      <WorkExperience />
    </motion.div>
  );
};

export default WorkExperiencePage;