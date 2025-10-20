import React from 'react';
import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';

const TechStackPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20"
    >
      <TechStack />
    </motion.div>
  );
};

export default TechStackPage;