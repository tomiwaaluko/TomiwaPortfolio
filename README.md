# Tomiwa's ePortfolio

This is my personal ePortfolio website built with [Next.js](https://nextjs.org), showcasing my projects, skills, and professional journey as a Computer Engineering student at the University of Central Florida.

## About This Portfolio

This ePortfolio serves as a comprehensive display of my:

- Professional experience and background
- Technical and soft skills
- Projects and achievements
- Contact information and resume

## Tech Stack

### Frontend Framework

- **Next.js 15** - React framework with App Router for modern development
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe development (where applicable)

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Production-ready motion library for smooth animations
- **React Icons** - Comprehensive icon library
- **Heroicons** - Beautiful hand-crafted SVG icons

### Communication & APIs

- **Resend** - Modern email API for contact form functionality
- **REST APIs** - For backend communication

### Development Tools

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Typography & Assets

- **Geist Font** - Modern, professional typeface
- **Next.js Image Optimization** - Automatic image optimization and lazy loading

## Architecture

### Project Structure

```
tomiwaportfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── components/         # Reusable UI components
│   │   │   ├── AboutSection.jsx       # About me with tabbed navigation
│   │   │   ├── AchievementsSection.jsx # Stats and achievements
│   │   │   ├── AnimatedNavbar.jsx     # Responsive navigation
│   │   │   ├── EmailSection.jsx       # Contact form with Resend
│   │   │   ├── Footer.jsx             # Site footer
│   │   │   ├── HeroSection.jsx        # Landing hero section
│   │   │   ├── MenuOverlay.jsx        # Mobile menu
│   │   │   ├── Navbar.jsx             # Desktop navigation
│   │   │   ├── NavLink.jsx            # Navigation link component
│   │   │   ├── ProjectCard.jsx        # Individual project cards
│   │   │   ├── ProjectSection.jsx     # Projects showcase
│   │   │   ├── ProjectTag.jsx         # Project filtering tags
│   │   │   ├── ScrollLinked.js        # Scroll-based animations
│   │   │   ├── SmoothScroll.js        # Smooth scrolling behavior
│   │   │   └── TabButton.jsx          # Tab navigation component
│   │   ├── context/           # React context providers
│   │   ├── fonts/             # Custom font files
│   │   ├── api/               # API routes
│   │   │   └── send/          # Email sending endpoint
│   │   ├── globals.css        # Global styles
│   │   ├── layout.js          # Root layout component
│   │   └── page.js            # Home page
├── public/                    # Static assets
│   ├── images/               # Project screenshots and images
│   │   └── projects/         # Project-specific images
│   └── assets/               # Documents and additional assets
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.mjs          # Next.js configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

### Component Architecture

#### **Core Layout Components**

- **Navbar/AnimatedNavbar**: Responsive navigation with mobile menu support
- **HeroSection**: Landing section with animated typing effects
- **AboutSection**: Tabbed interface for skills, education, and certifications
- **ProjectSection**: Dynamic project showcase with filtering
- **EmailSection**: Contact form with backend integration
- **Footer**: Site footer with social links

#### **Interactive Features**

- **Framer Motion Animations**: Smooth page transitions and scroll-triggered animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Project filtering and tabbed navigation
- **Contact Integration**: Email functionality through Resend API

#### **Performance Optimizations**

- **Next.js Image Component**: Automatic image optimization and lazy loading
- **Server-Side Rendering**: Improved SEO and initial load performance
- **Component Code Splitting**: Optimized bundle sizes
- **Font Optimization**: Automatic font loading with next/font

## Features

### User Interface

- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Dark Theme**: Professional dark color scheme with amber/yellow accents
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Interactive Navigation**: Sticky navbar with smooth scroll to sections

### Content Sections

- **Hero Section**: Dynamic introduction with animated typing
- **About Me**: Comprehensive background with skill categorization
- **Projects Showcase**: Filterable project grid with detailed descriptions
- **Skills Display**: Organized by languages, frameworks, tools, and technologies
- **Contact Form**: Direct email communication with form validation

### Technical Features

- **Email Integration**: Contact form connected to Resend API
- **Image Optimization**: Next.js automatic image processing
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Focused**: Optimized loading and rendering

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tomiwaaluko/TomiwaPortfolio.git
   cd TomiwaPortfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Resend API key for email functionality

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

This portfolio is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Build Commands

```bash
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

## Portfolio Sections

- **Home**: Hero section with introduction and call-to-action
- **About**: Professional background, education, and detailed skills breakdown
- **Projects**: Comprehensive project showcase including:
  - DigiConvo (AI-powered conversation platform)
  - Portfolio websites (Next.js and HTML/CSS versions)
  - Xi Iota Chapter Website (Fraternity official site)
  - Fisch Macro (Python automation tool)
- **Contact**: Direct communication through integrated contact form

## Contact

- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [tomiwaaluko](https://github.com/tomiwaaluko)
- **Portfolio**: [Live Site URL]

---

Built using Next.js, React, and Tailwind CSS
