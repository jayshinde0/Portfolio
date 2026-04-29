import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

/* ── Floating Envelope HUD ── */
const EnvelopeHUD = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d')!;
    let t = 0;
    const particles: {x:number,y:number,s:number,a:number,v:number}[] = [];
    for (let i = 0; i < 10; i++) particles.push({x:Math.random()*200,y:Math.random()*200,s:Math.random()*1.5+0.5,a:Math.random(),v:Math.random()*0.3+0.1});
    const draw = () => {
      ctx.clearRect(0, 0, 200, 200);
      const cx = 100, cy = 100;
      const g = ctx.createRadialGradient(cx, cy, 5, cx, cy, 90);
      g.addColorStop(0, 'rgba(59,130,246,0.08)'); g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 200, 200);
      particles.forEach(p => {
        p.y -= p.v; p.a += 0.008;
        if (p.y < 0) { p.y = 200; p.x = Math.random() * 200; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,162,255,${0.12 + Math.sin(p.a) * 0.08})`; ctx.fill();
      });
      [50, 68, 84].forEach((r, i) => {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(t * (1.1 - i * 0.25) + i * 1.2);
        ctx.beginPath(); ctx.ellipse(0, 0, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(99,162,255,${0.12 - i * 0.025})`; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
      });
      ctx.save(); ctx.translate(cx, cy + Math.sin(t * 1.6) * 3);
      ctx.strokeStyle = 'rgba(99,162,255,0.6)'; ctx.lineWidth = 1.6;
      ctx.shadowColor = 'rgba(99,162,255,0.5)'; ctx.shadowBlur = 10;
      const s = 20;
      ctx.beginPath();
      ctx.moveTo(-s*1.4, -s*0.8); ctx.lineTo(s*1.4, -s*0.8); ctx.lineTo(s*1.4, s*0.8); ctx.lineTo(-s*1.4, s*0.8); ctx.closePath(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s*1.4, -s*0.8); ctx.lineTo(0, s*0.15); ctx.lineTo(s*1.4, -s*0.8); ctx.stroke();
      ctx.restore();
      t += 0.012; raf.current = requestAnimationFrame(draw);
    };
    draw(); return () => cancelAnimationFrame(raf.current);
  }, []);
  return <canvas ref={ref} width={200} height={200} style={{display:'block'}} />;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Initialize EmailJS with public key once on component mount
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey && publicKey !== 'your_public_key_here') {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:jayshinde4554@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setError('Opened your email client.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Don't pass publicKey here - it's already initialized in useEffect
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Jay Shinde',
        reply_to: formData.email,
        email: formData.email, // Add this for Reply To field
        name: formData.name, // Add this as alternative
      });

      if (result.status === 200) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.open(`mailto:jayshinde4554@gmail.com?subject=${subject}&body=${body}`, '_blank');
      setError('Email service unavailable. Opened your email client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'jayshinde4554@gmail.com', href: 'mailto:jayshinde4554@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9370458094', href: 'tel:+919370458094' },
    { icon: MapPin, label: 'Location', value: 'Nashik, Maharashtra, India', href: '#' }
  ];

  const inputStyle = "w-full px-4 py-3.5 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300";

  return (
    <section className="py-24 px-4 relative z-10 overflow-hidden" style={{background:'linear-gradient(to bottom,#020204,#06060a,#020204)'}}>
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)',backgroundSize:'70px 70px'}} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Header */}
        <div className="flex items-start justify-between mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400" style={{boxShadow:'0 0 8px rgba(99,162,255,0.9)'}} />
              <span className="text-[11px] tracking-[0.22em] text-blue-400/80 font-semibold uppercase">Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight" style={{textShadow:'0 0 60px rgba(59,130,246,0.2)'}}>
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Have a project in mind or just want to chat?<br/>Feel free to reach out.
            </p>
          </motion.div>
          {/* Envelope HUD desktop */}
          <motion.div className="hidden lg:block flex-shrink-0 -mt-4" initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}}>
            <EnvelopeHUD />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact Info Card */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl p-8 h-full" style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}>
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <div className="w-10 h-0.5 bg-blue-500/60 mb-8" style={{boxShadow:'0 0 8px rgba(59,130,246,0.4)'}} />

              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <a key={info.label} href={info.href}
                    className="flex items-center gap-4 group p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{background:'rgba(255,255,255,0.02)',border:'1px solid rgba(255,255,255,0.05)'}}>
                    <div className="p-3 rounded-xl transition-all duration-300" style={{background:'rgba(59,130,246,0.1)',border:'1px solid rgba(99,162,255,0.2)'}}>
                      <info.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-400/70 uppercase tracking-[0.2em] font-semibold mb-0.5">{info.label}</p>
                      <p className="text-white text-sm font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 flex items-start gap-3" style={{borderTop:'1px solid rgba(255,255,255,0.06)'}}>
                <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form Card */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="rounded-3xl p-8 h-full" style={{background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',border:'1px solid rgba(255,255,255,0.06)'}}>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                    <div className="w-10 h-0.5 bg-blue-500/60 mb-6" style={{boxShadow:'0 0 8px rgba(59,130,246,0.4)'}} />

                    <AnimatePresence>
                      {error && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 p-3 rounded-xl text-red-400 text-sm"
                          style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.2)'}}>
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2 font-medium">Name</label>
                      <div className="relative">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                          className={inputStyle}
                          style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)'}}
                          onFocus={e=>{e.target.style.border='1px solid rgba(99,162,255,0.4)';e.target.style.boxShadow='0 0 16px rgba(59,130,246,0.12)';}}
                          onBlur={e=>{e.target.style.border='1px solid rgba(255,255,255,0.08)';e.target.style.boxShadow='none';}}
                          placeholder="Your name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2 font-medium">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        className={inputStyle}
                        style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)'}}
                        onFocus={e=>{e.target.style.border='1px solid rgba(99,162,255,0.4)';e.target.style.boxShadow='0 0 16px rgba(59,130,246,0.12)';}}
                        onBlur={e=>{e.target.style.border='1px solid rgba(255,255,255,0.08)';e.target.style.boxShadow='none';}}
                        placeholder="your@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2 font-medium">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                        className={`${inputStyle} resize-none`}
                        style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)'}}
                        onFocus={e=>{e.target.style.border='1px solid rgba(99,162,255,0.4)';e.target.style.boxShadow='0 0 16px rgba(59,130,246,0.12)';}}
                        onBlur={e=>{e.target.style.border='1px solid rgba(255,255,255,0.08)';e.target.style.boxShadow='none';}}
                        placeholder="Tell me about your project..." />
                    </div>

                    <motion.button type="submit" disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 text-blue-300"
                      style={{background:'rgba(59,130,246,0.12)',border:'1px solid rgba(99,162,255,0.3)',boxShadow:'0 0 20px rgba(59,130,246,0.1)'}}
                      whileHover={{ scale: isSubmitting ? 1 : 1.01, boxShadow: '0 0 30px rgba(59,130,246,0.2)' }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                      {isSubmitting ? (
                        <>
                          <motion.div className="w-5 h-5 border-2 border-blue-400/30 border-t-blue-400 rounded-full"
                            animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="inline-block p-4 rounded-full mb-6" style={{background:'rgba(59,130,246,0.1)',border:'1px solid rgba(99,162,255,0.25)'}}>
                      <CheckCircle className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-500">I'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
