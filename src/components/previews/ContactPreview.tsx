import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Send, Github, Linkedin, Heart, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactPreview = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle'|'success'|'error'>('idle');

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== 'your_public_key_here') emailjs.init(publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields'); setIsSubmitting(false); return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address'); setIsSubmitting(false); return;
    }
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    try {
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Jay Shinde',
        reply_to: formData.email,
      }, publicKey);
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch {
      setSubmitStatus('error');
    } finally { setIsSubmitting(false); }
  };

  const contactMethods = [
    { icon: <Mail className="w-5 h-5 text-blue-400" />, title: "Email", value: "jayshinde4554@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-blue-400" />, title: "Phone", value: "+91 9370458094" },
    { icon: <MapPin className="w-5 h-5 text-blue-400" />, title: "Location", value: "Nashik, Maharashtra, India" }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jayshinde0', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jayshinde10/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jayshinde4554@gmail.com', label: 'Email' },
  ];

  const inputStyle = "w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300";

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Outer card */}
        <div className="relative rounded-3xl p-8" style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <div className="flex items-center gap-2.5 mb-4 justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
              <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Reach Out</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Touch</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">Let's connect and discuss opportunities</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Contact Information</h3>
              <div className="w-8 h-0.5 bg-blue-500/60 mb-5" style={{boxShadow:'0 0 6px rgba(59,130,246,0.3)'}} />
              {contactMethods.map((method, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)'}}>
                  <div className="p-2.5 rounded-xl" style={{background:'rgba(59,130,246,0.1)',border:'1px solid rgba(99,162,255,0.15)'}}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] text-blue-400/60 uppercase tracking-[0.18em] font-semibold">{method.title}</h4>
                    <p className="text-gray-300 text-sm">{method.value}</p>
                  </div>
                </motion.div>
              ))}
              <div className="flex items-start gap-2.5 pt-3" style={{borderTop:'1px solid rgba(255,255,255,0.04)'}}>
                <Clock className="w-3.5 h-3.5 text-gray-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-xs">I typically respond within 24 hours.</p>
              </div>
            </div>

            {/* Quick Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="p-6 rounded-2xl" style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)'}}>
              <h3 className="text-lg font-bold text-white mb-2">Quick Message</h3>
              <div className="w-8 h-0.5 bg-blue-500/60 mb-5" style={{boxShadow:'0 0 6px rgba(59,130,246,0.3)'}} />
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required
                  className={inputStyle} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}
                  onFocus={e=>{e.target.style.border='1px solid rgba(99,162,255,0.3)';}} onBlur={e=>{e.target.style.border='1px solid rgba(255,255,255,0.06)';}} />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required
                  className={inputStyle} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}
                  onFocus={e=>{e.target.style.border='1px solid rgba(99,162,255,0.3)';}} onBlur={e=>{e.target.style.border='1px solid rgba(255,255,255,0.06)';}} />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={3} required
                  className={`${inputStyle} resize-none`} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}
                  onFocus={e=>{e.target.style.border='1px solid rgba(99,162,255,0.3)';}} onBlur={e=>{e.target.style.border='1px solid rgba(255,255,255,0.06)';}} />
                <motion.button type="submit" disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
                  style={submitStatus === 'success'
                    ? {background:'rgba(34,197,94,0.15)',border:'1px solid rgba(34,197,94,0.3)',color:'#86efac'}
                    : {background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)',color:'#93c5fd'}}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                  {isSubmitting ? (
                    <><motion.div className="w-4 h-4 border-2 border-blue-400/30 border-t-blue-400 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} /> Sending...</>
                  ) : submitStatus === 'success' ? (
                    <><span>✓</span> Message Sent!</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </motion.button>
                {submitStatus === 'error' && (
                  <p className="text-red-400/80 text-xs text-center mt-2">Failed to send. Please try the full contact page.</p>
                )}
              </form>
            </motion.div>
          </div>

          {/* Social + Footer */}
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-6" style={{borderTop:'1px solid rgba(255,255,255,0.04)'}}>
            <div className="flex items-center justify-center gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" title={social.label}
                  className="p-3 rounded-full text-gray-500 hover:text-blue-400 transition-all duration-300"
                  style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)'}}
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-600 text-xs text-center italic mb-4">"Let's build something amazing together"</p>
            <div className="flex justify-center">
              <motion.button onClick={() => navigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-300 transition-all duration-300"
                style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.25)'}}
                whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(59,130,246,0.2)' }} whileTap={{ scale: 0.97 }}>
                <span>View Full Contact Page</span><ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="text-center mt-4 pt-4" style={{borderTop:'1px solid rgba(255,255,255,0.03)'}}>
              <p className="text-gray-700 text-xs flex items-center justify-center gap-2">
                <span>© 2025 Jay Shinde</span><Heart className="w-3 h-3 text-gray-600" /><span>Made with passion</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;