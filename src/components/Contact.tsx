import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Github, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // EmailJS configuration - You'll need to replace these with your actual values
  // const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  // const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  // const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jay Shinde', // Your name
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      setError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayshinde4554@gmail.com',
      color: 'from-cyan-400 to-blue-500',
      href: 'mailto:jayshinde4554@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9370458094',
      color: 'from-purple-400 to-pink-500',
      href: 'tel:+919370458094'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nashik, Maharashtra, India',
      color: 'from-green-400 to-emerald-500',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jayshinde10',
      color: 'from-blue-400 to-blue-600',
      href: 'https://www.linkedin.com/in/jayshinde10/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/jayshinde0',
      color: 'from-gray-400 to-gray-600',
      href: 'https://github.com/jayshinde0'
    },


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

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 font-orbitron text-cyan-400">
                    Let's Connect
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    I'm always interested in hearing about new opportunities,
                    creative projects, or just having a conversation about technology
                    and innovation. Feel free to reach out!
                  </p>

                  <div className="space-y-4 mb-8">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 group cursor-pointer block"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`p-3 bg-gradient-to-r ${info.color} rounded-full group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Contact Note */}
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation. Feel free to reach out!
                    </p>
                    <div className="mt-4 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-lg border border-cyan-500/20">
                      <p className="text-cyan-400 text-sm font-medium">Quick Response Guaranteed</p>
                      <p className="text-gray-400 text-xs mt-1">I typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">Send me a message</h3>
                        <p className="text-gray-400 text-sm">
                          Fill out the form below and I'll get back to you as soon as possible.
                        </p>
                      </div>

                      {/* Error Message */}
                      <AnimatePresence>
                        {error && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span className="text-sm">{error}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project, ideas, or just say hello..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            backgroundPosition: ['0%', '100%']
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.button>

                      <p className="text-xs text-gray-400 text-center">
                        * Required fields. Your information will be kept private and secure.
                      </p>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                        className="inline-block p-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6"
                      >
                        <CheckCircle className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-300 mb-4">
                        Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                      </p>
                      <p className="text-sm text-gray-400">
                        You can also reach me directly at{' '}
                        <a href="mailto:jayshinde4554@gmail.com" className="text-cyan-400 hover:underline">
                          jayshinde4554@gmail.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;