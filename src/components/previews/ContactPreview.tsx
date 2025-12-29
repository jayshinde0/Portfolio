import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Send, Github, Linkedin, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactPreview = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submitted with data:', formData);
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:jayshinde4554@gmail.com?subject=${subject}&body=${body}`;
      
      console.log('Opening mailto link:', mailtoLink);
      
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Try to open email client
      const result = window.open(mailtoLink, '_blank');
      
      if (result === null) {
        // Fallback if popup blocked
        window.location.href = mailtoLink;
      }
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      alert('Email client opened! Please send the message from there.');
      
    } catch (error) {
      console.error('Error opening email client:', error);
      alert('Unable to open email client. Please copy the email address: jayshinde4554@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jayshinde4554@gmail.com",
      color: "bg-white text-black"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9370458094",
      color: "bg-white text-black"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Nashik, Maharashtra, India",
      color: "bg-white text-black"
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jayshinde0', color: 'hover:text-gray-400', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jayshinde10/', color: 'hover:text-blue-400', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jayshinde4554@gmail.com', color: 'hover:text-purple-400', label: 'Email' },
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Card Container with Border */}
        <div className="relative bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 shadow-2xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl ${method.color}`}>
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{method.title}</h4>
                  <p className="text-gray-500">{method.value}</p>
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
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Debug info */}
              <div className="text-xs text-gray-600 mb-2">
                Form Status: {formData.name ? '✓' : '✗'} Name | {formData.email ? '✓' : '✗'} Email | {formData.message ? '✓' : '✗'} Message
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-colors"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={3}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-white/30 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>



          {/* Small Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Quick Quote */}
            <div className="text-center mb-6">
              <p className="text-gray-500 text-sm italic">
                "Let's build something amazing together"
              </p>
            </div>

            {/* View More Button */}
            <div className="flex justify-center">
              <motion.button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Full Contact Page</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Mini Copyright */}
            <div className="text-center mt-6 pt-4 border-t border-white/5">
              <p className="text-gray-600 text-xs flex items-center justify-center gap-2">
                <span>© 2025 Jay Shinde</span>
                <Heart className="w-3 h-3 text-gray-500" />
                <span>Made with passion</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;