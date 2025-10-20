import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactPreview = () => {
  const navigate = useNavigate();

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jay.shinde@example.com",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 98765 43210",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Mumbai, India",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: "GitHub", color: "hover:text-gray-300" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", color: "hover:text-cyan-400" }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        {/* Preview Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white`}>
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{method.title}</h4>
                  <p className="text-gray-400">{method.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400/50 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all duration-300">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.button
              key={index}
              className={`p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.button>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Full Contact Page</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;