🚀 Jay Shinde - Interactive Portfolio
Badges
Netlify StatusLicense: MITTypeScriptReact

Description
A modern, interactive portfolio website built with cutting-edge web technologies to showcase my skills, projects, and professional journey.

✨ Features
Interactive Terminal Interface - Navigate through my portfolio using a custom-built terminal
Responsive Design - Flawless experience across all devices and screen sizes
Modern Animations - Smooth transitions powered by Framer Motion
Contact Form - Integrated with EmailJS for direct communication
Dark Mode - Eye-friendly dark theme with customizable accent colors
Performance Optimized - Fast loading with code splitting and lazy loading
🛠️ Tech Stack
Category	Technologies
Frontend	React 18, TypeScript, Vite
Styling	Tailwind CSS, PostCSS
Animations	Framer Motion, React Spring
Icons	Lucide Icons
Form	React Hook Form, EmailJS
Deployment	Netlify
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)
npm (v9 or higher) or yarn (v1.22 or higher)
Installation
Clone the repository
bash
git clone https://github.com/jayshinde0/portfolio.git
cd portfolio
Install dependencies
bash
npm install
# or
yarn
Environment Setup
Create a .env file in the root directory
Add your EmailJS credentials:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
Start the development server
bash
npm run dev
# or
yarn dev
Open http://localhost:5173 in your browser.
🏗️ Project Structure
src/
├── components/     # Reusable UI components
│   ├── common/    # Common components (Button, Card, etc.)
│   ├── layout/    # Layout components (Header, Footer, etc.)
│   └── sections/  # Page sections (About, Projects, etc.)
├── pages/         # Page components
├── assets/        # Static assets (images, icons, fonts)
├── styles/        # Global styles and CSS modules
├── hooks/         # Custom React hooks
├── utils/         # Utility functions and helpers
├── types/         # TypeScript type definitions
└── App.tsx        # Main application component
🛠 Development
Available Scripts
npm run dev - Start development server
npm run build - Create production build
npm run preview - Preview production build locally
npm run lint - Run ESLint
npm run format - Format code with Prettier
npm run type-check - Check TypeScript types
Code Style
Follows Airbnb JavaScript Style Guide
Uses ESLint and Prettier for code formatting
TypeScript strict mode enabled
🌐 Deployment
Fork this repository
Connect your GitHub repository to Netlify
Set up environment variables in Netlify
Configure build settings:
Build command: npm run build
Publish directory: dist
Deploy!
🎨 Customization
Update Personal Information
Edit src/data/profile.ts for personal details
Update src/data/projects.ts for project showcases
Modify src/data/skills.ts for skills section
Styling
Theme colors can be customized in tailwind.config.js
Global styles are in 
src/index.css
Component-specific styles use Tailwind's @apply directive
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
React - A JavaScript library for building user interfaces
TypeScript - Typed JavaScript
Tailwind CSS - A utility-first CSS framework
Framer Motion - Production-ready animation library
Vite - Next Generation Frontend Tooling
