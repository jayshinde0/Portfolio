# Jay Shinde - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Contact Form**: Integrated with EmailJS for real email functionality
- **Tech Stack Showcase**: Interactive display of technical skills
- **Project Portfolio**: Detailed project showcases with live demos
- **Performance Optimized**: Fast loading and smooth scrolling

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jayshinde0/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (for contact form):
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and verify your email
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template
   - Update the EmailJS configuration in `src/components/Contact.tsx`

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## EmailJS Setup

To enable the contact form functionality:

1. **Create EmailJS Account**: Sign up at [emailjs.com](https://www.emailjs.com/)

2. **Add Email Service**: 
   - Go to Email Services
   - Add your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name
     - `{{reply_to}}` - Reply-to email

4. **Update Configuration**:
   - Replace the placeholder values in `src/components/Contact.tsx`:
     - `EMAILJS_SERVICE_ID`
     - `EMAILJS_TEMPLATE_ID`
     - `EMAILJS_PUBLIC_KEY`

## Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form with EmailJS
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   ├── NavigationDots.tsx # Side navigation dots
│   ├── ParticleField.tsx  # Animated background
│   ├── Projects.tsx    # Projects showcase
│   └── TechStack.tsx   # Technology skills
├── utils/              # Utility functions
│   └── emailConfig.ts  # EmailJS configuration
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

The site is configured for deployment on Netlify:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment from your Git repository

## Contact

- **Email**: jayshinde4554@gmail.com
- **LinkedIn**: [linkedin.com/in/jayshinde10](https://www.linkedin.com/in/jayshinde10/)
- **GitHub**: [github.com/jayshinde0](https://github.com/jayshinde0)

## License

This project is open source and available under the [MIT License](LICENSE).