import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CommandOutput {
  type: 'command' | 'output' | 'error';
  content: React.ReactNode;
}

const Terminal: React.FC<{ className?: string }> = ({ className }) => {
  const [input, setInput] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [output, setOutput] = useState<CommandOutput[]>([]);
  const [showFullResume, setShowFullResume] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Command handlers with all content
  const commandHandlers: { [key: string]: () => React.ReactNode } = {
    help: () => (
      <div className="text-white">
        <p>📋 <strong>Available commands:</strong></p>
        <ul className="commands-list ml-4 mt-2 space-y-1">
          <li>📋 <span className="text-cyan-400 font-semibold">help</span> - Show this help message</li>
          <li>🖥️ <span className="text-cyan-400 font-semibold">neofetch</span> - Display system information</li>
          <li>👤 <span className="text-cyan-400 font-semibold">about</span> - Show personal information & education</li>
          <li>💼 <span className="text-cyan-400 font-semibold">experience</span> - Show professional work experience</li>
          <li>🛠️ <span className="text-cyan-400 font-semibold">skills</span> - List complete technical skills</li>
          <li>🚀 <span className="text-cyan-400 font-semibold">projects</span> - List all projects & applications</li>
          <li>🏆 <span className="text-cyan-400 font-semibold">achievements</span> - Show awards & extracurricular activities</li>
          <li>🎯 <span className="text-cyan-400 font-semibold">interests</span> - Show learning interests & goals</li>
          <li>📧 <span className="text-cyan-400 font-semibold">contact</span> - Show contact information</li>
          <li>📜 <span className="text-cyan-400 font-semibold">certifications</span> - Show certifications & courses</li>
          <li>🐙 <span className="text-cyan-400 font-semibold">github</span> - Show GitHub repositories</li>
          <li>📄 <span className="text-cyan-400 font-semibold">resume</span> - View resume summary and download link</li>
          <li>🧹 <span className="text-cyan-400 font-semibold">clear</span> - Clear terminal</li>
          <li>👨 <span className="text-cyan-400 font-semibold">whoami</span> - Display current user</li>
        </ul>
      </div>
    ),

    neofetch: () => (
      <div className="text-white">
        <p>🖥️ <strong>System Information</strong></p>
        <ul className="ml-4 mt-2 space-y-1">
          <li><strong>OS:</strong> JayOS 10.20.25</li>
          <li><strong>Shell:</strong> React Terminal v2.0.0</li>
          <li><strong>CPU:</strong> Human Brain (8-core Creativity Processor)</li>
          <li><strong>Memory:</strong> 16GB Curiosity</li>
          <li><strong>Editor:</strong> VS Code</li>
          <li><strong>Theme:</strong> Cyan Aurora 🌌</li>
        </ul>
      </div>
    ),

    about: () => (
      <div className="text-white space-y-2">
        <p>👋 Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">Jay Nitin Shinde</span> — an aspiring software engineer passionate about full-stack development.</p>
        <p>I specialize in creating interactive, performant, and visually stunning web applications with a strong foundation in AI/ML integration.</p>
        <p><strong>Education:</strong></p>
        <ul className="ml-4 mt-1 space-y-1">
          <li>• B.Tech in Computer Science, K.K. Wagh Institute of Engineering (2024 – 2027) | CGPA: 9.23</li>
          <li>• Diploma in Computer Technology, K.K. Wagh Polytechnic (2021 – 2024) | Score: 93.41</li>
        </ul>
        <p className="mt-2"><strong>Location:</strong> Nashik, Maharashtra, India</p>
      </div>
    ),

    experience: () => (
      <div className="text-white">
        <p>💼 <strong>Professional Experience:</strong></p>
        <ul className="ml-4 mt-2 space-y-3">
          <li><strong>Full Stack Developer Intern</strong> @ Ayunext Solutions (Sept 2025 – Feb 2026) Remote
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Built SEO-friendly, responsive UIs with Next.js and React.js</li>
              <li>• Improved page load times by over 30% using SSR & SSG</li>
              <li>• Optimized images reducing file sizes by 50% with modern formats and lazy loading</li>
              <li>• Enhanced performance and scalability through testing and optimization</li>
            </ul>
          </li>
          <li><strong>Frontend Developer Intern</strong> @ Golden Dreams Software Solutions (June 2023 – July 2023) On-site
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Developed responsive front-end designs using HTML, CSS, React.js, Tailwind CSS, Bootstrap</li>
              <li>• Increased user engagement by 15% through UI/UX modernization</li>
              <li>• Customized WordPress themes and plugins improving content management by 20%</li>
              <li>• Ensured cross-browser compatibility and consistent user experience</li>
            </ul>
          </li>
        </ul>
      </div>
    ),

    skills: () => (
      <div className="text-white">
        <p>🛠️ <strong>Technical Skills:</strong></p>
        <ul className="ml-4 mt-2 space-y-1">
          <li><strong>Programming Languages:</strong> Python, Java, C, C++, JavaScript, PHP</li>
          <li><strong>Frontend:</strong> HTML, CSS, React, Tailwind CSS, Bootstrap, Next.js</li>
          <li><strong>Backend:</strong> Node.js, Express.js, Django</li>
          <li><strong>Databases:</strong> MySQL, SQLite, MongoDB</li>
          <li><strong>ML/AI:</strong> Scikit-learn, Linear Regression, Random Forest</li>
          <li><strong>Developer Tools:</strong> VS Code, GitHub, Android Studio</li>
          <li><strong>Soft Skills:</strong> Problem-solving, Communication, Teamwork, Adaptability</li>
        </ul>
      </div>
    ),

    projects: () => (
      <div className="text-white">
        <p>🚀 <strong>Featured Projects:</strong></p>
        <ul className="ml-4 mt-2 space-y-3">
          <li><strong>Blooms Taxonomy Question Paper Generator</strong> (AI/ML - Completed)
            <ul className="ml-4 mt-1 space-y-1">
              <li>• ML-powered system for automated question paper generation</li>
              <li>• Implemented Linear Regression and Random Forest for predictions</li>
              <li>• Tech: Django, Python, Scikit-learn</li>
            </ul>
          </li>
          <li><strong>InterviewAce</strong> (Full Stack - In Progress)
            <ul className="ml-4 mt-1 space-y-1">
              <li>• AI-powered interview preparation platform with personalized learning paths</li>
              <li>• Real-time code execution and progress analytics</li>
              <li>• Tech: Next.js, TypeScript, Tailwind CSS, JWT, Recharts</li>
            </ul>
          </li>
          <li><strong>Debugger's Club Website</strong> (Full Stack - Live)
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Official website with event registration and data management</li>
              <li>• Tech: Next.js, React, Tailwind CSS, MongoDB</li>
            </ul>
          </li>
          <li><strong>BudgeStitch</strong> (E-Commerce - Live)
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Platform connecting local tailors with customers for custom clothing</li>
              <li>• Tech: Django, Python, HTML, CSS</li>
            </ul>
          </li>
          <li><strong>Secure Transfer</strong> (Full Stack - In Progress)
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Real-time file transfer system for devices on same network</li>
              <li>• Tech: React, Spring Boot, HTML5</li>
            </ul>
          </li>
          <li><strong>LeetMetric</strong> (Frontend - Live)
            <ul className="ml-4 mt-1 space-y-1">
              <li>• Web tool for tracking and visualizing LeetCode performance</li>
              <li>• Tech: HTML, CSS, JavaScript</li>
            </ul>
          </li>
          <li><strong>Tourism App</strong> (Frontend - Completed)
            <ul className="ml-4 mt-1 space-y-1">
              <li>• React-based travel destinations showcase with interactive cards</li>
              <li>• Tech: React, CSS3, JavaScript</li>
            </ul>
          </li>
        </ul>
      </div>
    ),

    achievements: () => (
      <div className="text-white">
        <p>🏆 <strong>Achievements & Awards:</strong></p>
        <ul className="ml-4 mt-2 space-y-1">
          <li>🌍 <strong>NASA Space Apps Challenge 2025</strong> — Global Nominee</li>
          <li>🥇 <strong>Hacktopia - PCCOE Hackathon</strong> — Top 15 out of 500 participants (2024)</li>
          <li>🎯 <strong>MET Eureka Idea Pitching</strong> — Top 10 National Entrepreneurship Challenge (2024)</li>
          <li>🎨 <strong>Zennit UI Frontend Battle 2025</strong> — Participant & Recognition</li>
          <li>👥 <strong>Website/ERP Coordinator</strong> — Debuggers' Club, KKWIEER (2025-26)</li>
          <li>💻 <strong>GSSoC 2025 Contributor</strong> — GirlScript Summer of Code</li>
          <li>📄 <strong>Paper Publication</strong> — Bloom's Taxonomy Based Question Paper Generation (March 2024)</li>
          <li>🎓 <strong>National-level Project Competition Participant</strong></li>
        </ul>
      </div>
    ),

    interests: () => (
      <div className="text-white">
        <p>🎯 <strong>Interests & Goals:</strong></p>
        <ul className="ml-4 mt-2 space-y-1">
          <li>Exploring AI-driven web applications 🤖</li>
          <li>Building developer tools & open source contributions</li>
          <li>Continuous learning in cloud architecture and DevOps</li>
          <li>Hackathon participation and innovation challenges</li>
          <li>Full-stack web application development at scale</li>
          <li>ML/AI integration in real-world problems</li>
        </ul>
      </div>
    ),

    contact: () => (
      <div className="text-white">
        <p>📧 <strong>Contact Me:</strong></p>
        <ul className="ml-4 mt-2 space-y-1">
          <li><strong>Email:</strong> <a href="mailto:jayshinde4554@gmail.com" className="text-cyan-400 hover:text-cyan-300 hover:underline">jayshinde4554@gmail.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+919370458094" className="text-cyan-400 hover:text-cyan-300 hover:underline">+91 9370458094</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/jayshinde0" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">github.com/jayshinde0</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jayshinde10/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">linkedin.com/in/jayshinde10</a></li>
        </ul>
      </div>
    ),

    certifications: () => (
      <div className="text-white">
        <p>📜 <strong>Certifications & Courses:</strong></p>
        <ul className="ml-4 mt-2 space-y-1">
          <li>✅ <strong>Hands On React JS</strong> — From Beginner to Expert (2024)</li>
          <li>✅ <strong>C++ Training</strong> — Crash Course for Beginners (2024)</li>
          <li>✅ <strong>Java Training</strong> — IIT Bombay Spoken Tutorial Project (2024)</li>
          <li>✅ <strong>Git Mastery</strong> — Basics & Version Control (2024)</li>
          <li>✅ <strong>HackerRank Certification</strong> — Problem Solving (Basic)</li>
          <li>✅ <strong>Research Publication</strong> — Blooms Taxonomy Based Question Paper Generation</li>
        </ul>
      </div>
    ),

    github: () => (
      <div className="text-white">
        <p>🐙 <strong>GitHub Repositories:</strong></p>
        <ul className="ml-4 mt-2 space-y-1">
          <li><a href="https://github.com/jayshinde0" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">github.com/jayshinde0</a> — Main GitHub Profile</li>
          <li><a href="https://github.com/jayshinde0/Blooms-Taxonomy-Based-Question-Paper-Generation" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">blooms-taxonomy-question-generator</a> — AI/ML Project</li>
          <li><a href="https://github.com/jayshinde0" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline">InterviewAcee</a> — Interview Preparation Platform</li>
        </ul>
      </div>
    ),

    resume: () => (
      <div className="text-white space-y-4">
        <div className="border border-cyan-400/50 rounded p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50">
          <p className="mb-3"><strong className="text-cyan-400">📄 JAY NITIN SHINDE</strong></p>
          <p className="mb-3 text-gray-300">📧 jayshinde4554@gmail.com | 📱 +91 9370458094 | 🔗 <a href="https://github.com/jayshinde0" className="text-cyan-400 hover:text-cyan-300 hover:underline">jayshinde0</a> | <a href="https://www.linkedin.com/in/jayshinde10/" className="text-cyan-400 hover:text-cyan-300 hover:underline">jayshinde10</a></p>
          
          <p className="mb-3 text-gray-300"><em>Aspiring software engineer pursuing B.Tech in Computer Engineering with strong foundation in web development. Eager to contribute to innovative real-world projects through hands-on technical experience and continuous learning.</em></p>
          
          <p className="mt-4 mb-2 text-cyan-400"><strong>SUMMARY</strong></p>
          <ul className="ml-4 space-y-1 text-sm text-gray-300">
            <li>• Full Stack Developer with expertise in React, Next.js, Django, and Node.js</li>
            <li>• AI/ML experience with Python, Scikit-learn, Linear Regression, Random Forest</li>
            <li>• Improved page load times by 30%+ and user engagement by 15% through optimization</li>
            <li>• Published research paper on Bloom's Taxonomy-Based Question Paper Generation</li>
            <li>• Participated in NASA Space Apps Challenge 2025 (Global Nominee)</li>
            <li>• Top 15 in Hacktopia Hackathon out of 500 participants</li>
          </ul>

          <p className="mt-4 mb-2 text-cyan-400"><strong>KEY PROJECTS</strong></p>
          <ul className="ml-4 space-y-2 text-sm text-gray-300">
            <li><strong>InterviewAce:</strong> AI-powered interview prep platform with real-time code execution</li>
            <li><strong>Question Paper Generator:</strong> ML system using Bloom's Taxonomy classification</li>
            <li><strong>Debugger's Club Website:</strong> Full-stack platform for event management</li>
            <li><strong>BudgeStitch:</strong> E-commerce platform connecting tailors with customers</li>
          </ul>

          <p className="mt-4 mb-2 text-cyan-400"><strong>TECH STACK</strong></p>
          <ul className="ml-4 space-y-1 text-sm text-gray-300">
            <li>• Languages: Python, Java, C, C++, JavaScript, PHP</li>
            <li>• Frontend: React, Next.js, Tailwind CSS, Bootstrap, HTML, CSS</li>
            <li>• Backend: Node.js, Express.js, Django, Spring Boot</li>
            <li>• Databases: MySQL, SQLite, MongoDB</li>
            <li>• ML/AI: Scikit-learn, Linear Regression, Random Forest</li>
          </ul>
        </div>

        {!showFullResume ? (
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setShowFullResume(true)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded transition-all transform hover:scale-105"
            >
              📖 View Full Resume
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded transition-all transform hover:scale-105 inline-block"
            >
              📥 Download PDF
            </a>
          </div>
        ) : (
          <div>
            <div className="border border-cyan-400/50 rounded p-4 mt-4 text-sm space-y-3 max-h-96 overflow-y-auto bg-gray-900/30">
              <p className="text-cyan-400"><strong>WORK EXPERIENCE</strong></p>
              <div>
                <p><strong>Full Stack Developer Intern</strong> @ Ayunext Solutions (Sept 2025 – Feb 2026)</p>
                <ul className="ml-4 mt-1 space-y-1 text-gray-300">
                  <li>• Built SEO-friendly responsive UIs with Next.js and React.js</li>
                  <li>• Improved page load times by over 30% using SSR and Static Site Generation</li>
                  <li>• Enhanced performance by optimizing images (50% file size reduction)</li>
                  <li>• Contributed to full-lifecycle development from design to deployment</li>
                </ul>
              </div>
              <div>
                <p><strong>Frontend Developer Intern</strong> @ Golden Dreams Software Solutions (June 2023 – July 2023)</p>
                <ul className="ml-4 mt-1 space-y-1 text-gray-300">
                  <li>• Developed responsive front-end designs using HTML, CSS, React.js</li>
                  <li>• Increased user engagement by 15% through UI/UX modernization with Tailwind CSS</li>
                  <li>• Customized WordPress environments improving content management by 20%</li>
                  <li>• Translated mockups into fully functional interactive web pages</li>
                </ul>
              </div>

              <p className="mt-3 text-cyan-400"><strong>EDUCATION</strong></p>
              <ul className="ml-4 space-y-1 text-gray-300">
                <li>• B.Tech in Computer Science, K.K. Wagh Institute of Engineering (2024 – 2027) | CGPA: 9.23</li>
                <li>• Diploma in Computer Technology, K.K. Wagh Polytechnic (2021 – 2024) | Score: 93.41</li>
              </ul>

              <p className="mt-3 text-cyan-400"><strong>ACHIEVEMENTS</strong></p>
              <ul className="ml-4 space-y-1 text-gray-300">
                <li>• NASA Space Apps Challenge 2025 — Global Nominee</li>
                <li>• Hacktopia Hackathon — Top 15 out of 500 (2024)</li>
                <li>• MET Eureka Idea Pitching — Top 10 National Entrepreneurship Challenge (2024)</li>
                <li>• Paper Publication: Bloom's Taxonomy Based Question Paper Generation (March 2024)</li>
                <li>• Website/ERP Coordinator — Debuggers' Club, KKWIEER (2025-26)</li>
                <li>• GSSoC 2025 Contributor — GirlScript Summer of Code</li>
              </ul>
            </div>
            <button
              onClick={() => setShowFullResume(false)}
              className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
            >
              ⬆️ Hide Full Resume
            </button>
          </div>
        )}
      </div>
    ),

    whoami: () => 'visitor',

    clear: () => {
      setOutput([]);
      return null;
    },
  };
const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Execute command
const executeCommand = (command: string) => {
  const cmd = command.trim().toLowerCase();
  if (!cmd) return;

  // Show the typed command
  setOutput((prev) => [...prev, { type: 'command', content: cmd }]);

  // Execute valid command or show error
  if (cmd in commandHandlers) {
    const result = commandHandlers[cmd]();
    if (result !== null) {
      setOutput((prev) => [...prev, { type: 'output', content: result }]);
    }
  } else {
    setOutput((prev) => [
      ...prev,
      { type: 'error', content: `Command not found: ${cmd}. Type 'help' to see available commands.` },
    ]);
  }

  // ⬇️ Smooth scroll to bottom *after* React updates the DOM
setTimeout(() => {
  if (terminalBodyRef.current) {
    terminalBodyRef.current.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }
}, 100);

};

  // Handle keyboard input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;
      executeCommand(input);
      setInput('');
    }
  };



  // Focus input when terminal is clicked, not on page load
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    setOutput([
      { type: 'output', content: `Welcome to Jay Shinde's Interactive Terminal Portfolio (v2.0.0)` },
      { type: 'output', content: `Type 'help' to see available commands.` }
    ]);
  }, []);

  const renderOutput = (item: CommandOutput, index: number) => {
    if (item.type === 'command') {
      return (
        <div key={index} className="flex gap-2 my-2">
          <span className="text-purple-400 whitespace-nowrap font-bold">visitor@portfolio:~$</span>
          <span className="text-cyan-300">{item.content}</span>
        </div>
      );
    } else if (item.type === 'error') {
      return <div key={index} className="text-red-400 my-2 font-semibold">{item.content}</div>;
    } else {
      return <div key={index} className="text-gray-100 my-2">{item.content}</div>;
    }
  };

  return (
    <div className={`relative w-full h-[650px] ${className || ''} bg-black`}>
      <motion.div
        className={`relative w-full h-full flex flex-col border border-cyan-400/30 rounded-lg overflow-hidden transition-all duration-300 ${
          isHovered ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-cyan-400/30'
        }`}
        style={{
          background: '#000000',
          display: 'flex',
          flexDirection: 'column'
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleTerminalClick}
      >
        {/* Header */}
        <div className="bg-black px-6 py-3 border-b border-cyan-400/30 flex items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 hover:brightness-125 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-125 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 hover:brightness-125 cursor-pointer"></span>
          </div>
          <span className="text-sm text-gray-400 ml-3 font-mono">terminal</span>
        </div>

        {/* Terminal Content */}
        <div 
  ref={terminalBodyRef}  // ✅ attach the ref here
  className="flex-1 overflow-y-auto custom-scrollbar p-6"
  style={{
    background: '#000000',
    scrollBehavior: 'smooth',
    position: 'relative',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column'
  }}
>
          <div className="flex-1">
            {output.map((item, index) => renderOutput(item, index))}
          </div>
        </div>

        {/* Command Input - Fixed at bottom */}
        <div className="border-t border-cyan-400/30 p-4 bg-black">
          <div className="flex items-center max-w-5xl mx-auto w-full">
            <span className="text-green-400 font-mono font-bold mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-cyan-400 outline-none font-mono"
              placeholder="Type a command..."
 
            />
            <span className="ml-2 w-2 h-5 bg-cyan-400 animate-pulse"></span>
          </div>
        </div>
        
        <div ref={endRef} />

        {/* Custom scrollbar styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
              height: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(0, 0, 0, 0.2);
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(34, 211, 238, 0.3);
              border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(34, 211, 238, 0.5);
            }
          `
        }} />
      </motion.div>
    </div>
  );
};

export default Terminal;