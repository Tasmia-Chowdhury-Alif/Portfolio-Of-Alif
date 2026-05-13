'use client'

import { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, FileCode, ArrowRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiStripe,
  SiRedis,
  SiTensorflow,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiRender,
  SiGmail,
  SiSupabase,
  SiVercel,
  SiBootstrap,
  SiJavascript,
} from 'react-icons/si'
import { TbShieldLock } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export const projects = [
  {
    id: 1,
    title: 'Driver Safety Monitoring System',
    subtitle: 'SaaS Platform',
    description: 'Real-time driver monitoring SaaS platform that detects drowsiness and distracted driving situations using AI-based detection and scalable backend architecture.',
    longDescription: 'A comprehensive driver safety solution designed to reduce road accidents caused by driver fatigue and distraction. The platform uses advanced computer vision and machine learning to monitor driver behavior in real-time, providing instant alerts when dangerous situations are detected.',
    features: [
      'TensorFlow.js detection',
      'Real-time alerts',
      'Email notifications',
      'Location sharing',
      'Stripe subscription',
      'Scalable backend',
    ],
    longFeatures: [
      'Real-time drowsiness detection using TensorFlow.js',
      'Distracted driving alerts with computer vision',
      'Email and SMS notification system',
      'GPS location sharing with emergency contacts',
      'Stripe-powered subscription management',
      'Admin dashboard for fleet management',
      'Historical data analytics and reports',
      'Multi-tenant SaaS architecture',
    ],
    tech: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
      { icon: SiTensorflow, name: 'TensorFlow.js', color: '#FF6F00' },
      { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
      { icon: SiVercel, name: 'Vercel', color: '#000000' },
    ],
    gradient: 'from-cyan via-blue-500 to-indigo',
    image: 'https://res.cloudinary.com/dlhx7zvg3/image/upload/v1778503239/driver-safety_h24svt.png',
    links: { live: 'https://safe-driving-nine.vercel.app/', github: 'https://github.com/Tasmia-Chowdhury-Alif/Driver-Safety-Monitoring-System', docs: 'https://driver-safety-monitoring-system.vercel.app/api/docs' },
    challenges: [
      'Optimizing TensorFlow.js model for real-time performance in browser',
      'Building a scalable WebSocket infrastructure for live updates',
      'Implementing secure multi-tenant data isolation',
      'Handling high-frequency sensor data efficiently',
    ],
    futureImprovements: [
      'Mobile app with native camera integration',
      'Advanced analytics with ML-powered insights',
      'Integration with vehicle OBD systems',
      'Voice-activated emergency assistance',
    ],
    timeline: '3 months (Research + Dev)',
    teamSize: 'Team Of 2',
    status: 'Live',
  },
  {
    id: 2,
    title: 'Green Harvest',
    subtitle: 'E-commerce Platform',
    description: 'Scalable grocery e-commerce backend system with authentication, order processing, caching, and multi-payment integration.',
    longDescription: 'A full-featured e-commerce platform designed specifically for grocery and fresh produce delivery. The system handles complex inventory management, delivery scheduling, and supports multiple payment gateways for a seamless checkout experience.',
    features: [
      'JWT authentication',
      'Djoser auth system',
      'Redis caching',
      'Stripe integration',
      'SSLCommerz integration',
      'Product filtering',
    ],
    longFeatures: [
      'JWT-based authentication with refresh tokens',
      'Djoser integration for user management',
      'Redis caching for improved performance',
      'Stripe payment integration',
      'SSLCommerz for local payments',
      'Advanced product filtering and search',
      'Shopping cart and wishlist functionality',
      'Order tracking and delivery management',
    ],
    tech: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
      { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
      { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
      { icon: SiVercel, name: 'Vercel', color: '#000000' },
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    image: 'https://res.cloudinary.com/dlhx7zvg3/image/upload/v1778505107/green-harvest_dcuzld.png',
    links: { live: 'https://green-harvest-seven.vercel.app/', github: 'https://github.com/Tasmia-Chowdhury-Alif/Green-Harvest-Backend', docs: 'https://green-harvest-backend-seven.vercel.app/api/docs' },
    challenges: [
      'Managing real-time inventory across multiple warehouses',
      'Implementing efficient delivery slot algorithms',
      'Handling payment gateway failures gracefully',
      'Optimizing database queries for product searches',
    ],
    futureImprovements: [
      'AI-powered product recommendations',
      'Voice ordering integration',
      'Subscription-based recurring orders',
      'Carbon footprint tracking for deliveries',
    ],
    timeline: '1 months',
    teamSize: 'Team of 2',
    status: 'Live',
  },
  {
    id: 3,
    title: 'BookPilot',
    subtitle: 'Library Management System',
    description: 'A Full-stack Django application for efficient library management with a responsive frontend and secure transaction logic.',
    longDescription: 'BookPilot is a full-stack Django application designed to streamline library management with a user-friendly, responsive interface. This project demonstrates proficiency in building secure, scalable web applications featuring robust backend logic, polished frontend design, and seamless database integration. Deployed on Render, it highlights the ability to deliver production-ready solutions using modern web standards.',
    features: [
      'One-Click Borrowing',
      'User Dashboard',
      'Review & Ratings',
      'Category Filters',
      'Email Notifications',
      'Secure Transactions',
    ],
    longFeatures: [
      'One-Click Book Borrowing & Returns with real-time balance updates',
      'Personal User Dashboard to track history and deposit funds',
      'Restricted Review & Rating system (borrowers only)',
      'Dynamic Category Filters with sleek, mobile-friendly UI',
      'Gmail SMTP integration for instant HTML email alerts',
      'Atomic transactions for concurrency safety in financial operations',
      'PostgreSQL database hosted on Supabase',
      'Responsive layouts with Tailwind CSS and gradient themes',
    ],
    tech: [
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
      { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
      { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
      { icon: SiGmail, name: 'Gmail SMTP', color: '#EA4335' },
      { icon: SiRender, name: 'Render', color: '#46E3B7' },
    ],
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    image: 'https://res.cloudinary.com/dlhx7zvg3/image/upload/v1778515497/book-pilot_npwab6.png',
    links: { 
      live: 'https://bookpilot-library-management.onrender.com', 
      github: 'https://github.com/Tasmia-Chowdhury-Alif/BookPilot-Library_Management', 
    },
    challenges: [
      'Ensuring data integrity during concurrent borrow/return transactions',
      'Configuring SMTP for reliable HTML-based email notifications',
      'Integrating PostgreSQL with Supabase while maintaining deployment stability on Render',
      'Creating a seamless UX for real-time balance and inventory updates',
    ],
    futureImprovements: [
      'Advanced search with autocomplete functionality',
      'SMS alerts for overdue book reminders',
      'Digital E-book reader integration',
      'Multi-librarian role-based access control (RBAC)',
    ],
    timeline: '1 week',
    teamSize: 'Solo Developer',
    status: 'Live',
  },
  {
    id: 4,
    title: 'DocEra Health Care',
    subtitle: 'Hospital Management System',
    description: 'A secure healthcare API and frontend system for appointments, doctor management, and integrated payments.',
    longDescription: 'DocEra Health Care is a high-performance hospital management ecosystem powered by a secure Django REST Framework backend and a dynamic, responsive Bootstrap frontend. It features a complete ecosystem for patients to book appointments, doctors to manage profiles, and administrators to oversee operations. The system emphasizes security with JWT authentication and financial reliability through automated Stripe payment and refund handling.',
    features: [
      'JWT Authentication',
      'Stripe Payment Gateway',
      'Doctor Review System',
      'Appointment Scheduling',
      'Email Notifications',
      'Interactive API Docs',
    ],
    longFeatures: [
      'Role-based access control for Patients, Doctors, and Admins',
      'Secure Stripe integration for online fee payments and automated refunds',
      'Smart appointment cancellation logic with a 24-hour refund window',
      'Comprehensive Doctor profiles with specializations, fees, and ratings',
      'Automated email alerts for account activation and booking confirmations',
      'Jazzmin-powered custom admin dashboard with CKEditor5 integration',
      'Data isolation ensuring patients only access their personal records',
      'Live API documentation via Swagger UI and Redoc (OpenAPI 3.0)',
    ],
    tech: [
      { icon: SiDjango, name: 'Django DRF', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiBootstrap, name: 'Bootstrap 5', color: '#7952B3' },
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { icon: SiStripe, name: 'Stripe', color: '#008CDD' },
      { icon: SiVercel, name: 'Vercel', color: '#000000' },
    ],
    gradient: 'from-blue-600 via-sky-500 to-indigo-500',
    image: 'https://res.cloudinary.com/dlhx7zvg3/image/upload/v1778516212/DocEra_xss4bh.png',
    links: { 
      live: 'https://tasmia-chowdhury-alif.github.io/Smart-Care-Hospital-Frontend/', 
      github: 'https://github.com/Tasmia-Chowdhury-Alif/DocEra_Health_Care',
      docs: 'https://docera-health-care.vercel.app/api/swagger/' 
    },
    challenges: [
      'Implementing Stripe webhooks for secure payment and refund verification',
      'Managing complex appointment concurrency and data isolation between roles',
      'Customizing the Jazzmin admin interface for a streamlined medical workflow',
      'Optimizing API performance using Django Debug Toolbar insights',
    ],
    futureImprovements: [
      'Telemedicine video consultation integration',
      'Automated prescription generation in PDF format',
      'Integration with laboratory and pharmacy inventory systems',
      'AI-based doctor availability prediction',
    ],
    timeline: '1.5 months',
    teamSize: 'Solo Developer',
    status: 'Live',
  },
  {
    id: 5,
    title: 'Learnhub',
    subtitle: 'Course Management Platform',
    description: 'A full-stack Next.js application for educational platform with secure authentication, course management, and a polished responsive UI.',
    longDescription: 'Learnhub is a comprehensive course management application built with Next.js and MongoDB. It features a robust authentication system using NextAuth.js, allowing users to browse courses publicly while restricting management features to authorized users. The platform emphasizes a clean user experience with Shadcn UI components, real-time form validation with Zod, and seamless data persistence.',
    features: [
      'NextAuth Authentication',
      'Course CRUD Operations',
      'Dynamic Search & Filtering',
      'Responsive Dashboard',
      'Toast Notifications',
      'Social Login (Google)',
    ],
    longFeatures: [
      'Secure Authentication using NextAuth.js with Credentials and Google providers',
      'Protected routes for adding and managing courses',
      'Dynamic course listing with search and category filtering logic',
      'Interactive User Dashboard with dropdown navigation and profile info',
      'Fully responsive UI built with Tailwind CSS and Shadcn/UI components',
      'Form handling and validation using React Hook Form and Zod',
      'Real-time feedback via Sonner toast notifications',
      'Persistent storage using MongoDB and Mongoose ODM',
    ],
    tech: [
      { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
      { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' }, 
      { icon: TbShieldLock, name: 'NextAuth.js', color: '#61DAFB' },
      { icon: FcGoogle, name: 'Google Auth', color: '#4285F4' },
      { icon: SiVercel, name: 'Vercel', color: '#000000' },
    ],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    image: 'https://res.cloudinary.com/dlhx7zvg3/image/upload/v1778510670/learnhub_dszmea.png',
    links: { 
      live: 'https://learn-hub-rho-two.vercel.app/', 
      github: 'https://github.com/Tasmia-Chowdhury-Alif/LearnHub' 
    },
    challenges: [
      'Implementing secure route protection and session management',
      'Synchronizing server-side data fetching with client-side UI states',
      'Creating a consistent and accessible UI using custom Radix-based components',
      'Optimizing MongoDB queries for efficient course searching',
    ],
    futureImprovements: [
      'Video streaming integration for lessons',
      'Stripe payment gateway for premium courses',
      'Student progress tracking and certification',
      'Interactive quiz system for each module',
    ],
    timeline: '4 Days',
    teamSize: 'Solo Developer',
    status: 'Live',
  },
  // {
  //   id: 6,
  //   title: 'Analytics Dashboard',
  //   subtitle: 'Data Visualization',
  //   description: 'Comprehensive analytics dashboard with real-time data visualization, custom reports, and export functionality for business intelligence.',
  //   longDescription: 'A powerful analytics platform providing real-time insights into business metrics. Features customizable dashboards, automated reporting, and advanced data visualization tools for data-driven decision making.',
  //   longFeatures: [
  //     'Real-time data charts',
  //     'Customizable dashboards',
  //     'Report generation',
  //     'Data export (CSV, PDF)',
  //     'User behavior tracking',
  //     'Performance metrics',
  //     'Automated email reports',
  //     'Role-based access control',
  //   ],
  //   tech: [
  //     { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  //     { icon: SiReact, name: 'React', color: '#61DAFB' },
  //     { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  //   ],
  //   gradient: 'from-yellow-500 via-orange-500 to-red-500',
  //   image: '/images/projects/analytics.jpg',
  //   links: { live: '#', github: '#' },
  //   challenges: [
  //     'Handling large datasets efficiently',
  //     'Building responsive chart components',
  //     'Implementing real-time data updates',
  //     'Optimizing query performance',
  //   ],
  //   futureImprovements: [
  //     'AI-powered insights',
  //     'Predictive analytics',
  //     'Custom widget builder',
  //     'Mobile app',
  //   ],
  //   timeline: '5 months',
  //   teamSize: 'Solo Developer',
  //   status: 'Live',
  // },
]

const ITEMS_PER_PAGE = 3

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden hover:border-border transition-all duration-300">
        {/* Header Image Area with gradient */}
        <div className={`relative object-cover h-50 md:h-52 bg-gradient-to-br ${project.image ? "" : project.gradient} p-5 overflow-hidden`}>
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />

          {/* Dark overlay to keep text readable */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}


          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${isHovered ? '70% 30%' : '30% 70%'}, white 0%, transparent 50%)`,
            }}
            animate={{ opacity: isHovered ? 0.4 : 0.2 }}
            transition={{ duration: 0.5 }}
          />

          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20 overflow-hidden">
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 border border-white/40 rounded-full"
              animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 border border-white/30 rounded-full"
              animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? -30 : 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Badge */}
          <span className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white">
            {project.subtitle}
          </span>

          {/* Floating tech icons */}
          <div className="absolute bottom-4 right-4 flex -space-x-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <motion.div
                key={tech.name}
                className="w-8 h-8 rounded-full bg-background/95 flex items-center justify-center shadow-lg border border-border/20"
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.15, y: -2 }}
              >
                <tech.icon className="w-4 h-4" style={{ color: tech.color }} />
              </motion.div>
            ))}
            {project.tech.length > 4 && (
              <motion.div
                className="w-8 h-8 rounded-full bg-background/95 flex items-center justify-center shadow-lg text-[10px] font-bold border border-border/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                +{project.tech.length - 4}
              </motion.div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan group-hover:to-electric-blue transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5">
            {project.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 rounded-md bg-secondary/50 text-[11px] font-medium text-secondary-foreground border border-border/30"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-secondary/30 text-[11px] font-medium text-muted-foreground">
                +{project.features.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="mt-auto pt-3 space-y-3">

            {/* Top Action Buttons */}
            <div className="flex flex-wrap gap-2">
              {project.links.live && (
                <Button
                  size="sm"
                  variant="outline"
                  className="
                    group h-8 px-3 text-[11px]
                    rounded-full
                    border-border/60
                    bg-background/80
                    text-white
                    backdrop-blur-sm

                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    hover:bg-cyan/40
                    hover:border-cyan/40
                    hover:shadow-lg hover:shadow-cyan/25

                    hover:text-background

                    active:scale-[0.98]

                    transition-all duration-300
                    bg-linear-to-r from-cyan to-electric-blue font-semibold
                  "
                  asChild
                >
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    Live Demo
                  </a>
                </Button>
              )}

              {project.links.github && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="
                    group h-8 px-3 text-[11px]
                    rounded-full
                    bg-transparent
                    text-foreground

                    hover:text-foreground
                    dark:hover:text-white

                    active:scale-[0.98]

                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    hover:bg-cyan/40
                    hover:border-cyan/40
                    hover:shadow-lg hover:shadow-cyan/25

                    hover:bg-linear-to-r from-cyan to-electric-blue font-semibold
                  "
                  asChild
                >
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                    Code
                  </a>
                </Button>
              )}

              {project.links.docs && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="
                    group h-8 px-3 text-[11px]
                    rounded-full
                    bg-transparent
                    text-foreground

                    hover:-translate-y-0.5
                    hover:scale-[1.03]

                    hover:text-foreground
                    dark:hover:text-white

                    active:scale-[0.98]

                    transition-all duration-300

                    hover:bg-cyan/40
                    hover:border-cyan/40
                    hover:shadow-lg hover:shadow-cyan/25

                    hover:bg-linear-to-r from-cyan to-electric-blue font-semibold
                    
                  "
                  asChild
                >
                  <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                    <FileCode className="w-3 h-3 mr-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    API Docs
                  </a>
                </Button>
              )}
            </div>

            {/* Modern Details Button */}
            <Link href={`/projects/${project.id}`} className="block">
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group/details
                  relative overflow-hidden
                  rounded-2xl
                  border border-border/60
                  bg-gradient-to-r
                  from-cyan/5
                  via-electric-blue/5
                  to-cyan/5
                  hover:border-cyan/50
                  transition-all duration-300
                "
              >
                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 group-hover/details:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-electric-blue/10 to-cyan/10" />
                </div>

                <div className="relative flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex items-center justify-center
                        w-9 h-9 rounded-xl
                        bg-cyan/10
                        border border-cyan/20
                        group-hover/details:scale-110
                        transition-transform duration-300
                      "
                    >
                      <ArrowRight className="w-4 h-4 text-cyan" />
                    </div>

                    <p className="text-sm font-semibold">
                      View Project Details
                    </p>
                  </div>

                  <ArrowRight
                    className="
                      w-4 h-4 text-cyan
                      group-hover/details:translate-x-1
                      transition-transform duration-300
                    "
                  />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Hover glow border */}
        <motion.div
          className={`absolute inset-0 rounded-2xl pointer-events-none`}
          style={{
            background: `linear-gradient(135deg, transparent 40%, oklch(0.75 0.15 195 / ${isHovered ? 0.2 : 0}) 50%, transparent 60%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

  const currentProjects = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE
    return projects.slice(start, start + ITEMS_PER_PAGE)
  }, [currentPage])

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.65 0.22 260 / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-electric-blue mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Featured Projects
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            A showcase of my most impactful projects demonstrating backend engineering and full-stack capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto"
          >
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-10 md:mt-12"
        >
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full hover:text-cyan-500 hover:border-cyan hover:bg-cyan/5 shadow-lg hover:shadow-cyan/40 transition-shadow"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Page Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? 'w-8 h-2 bg-gradient-to-r from-cyan to-electric-blue'
                    : 'w-2 h-2 bg-border hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="w-10 h-10 rounded-full hover:text-cyan-500 hover:border-cyan hover:bg-cyan/5 shadow-lg hover:shadow-cyan/40 transition-shadow"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* View More Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-border/50 hover:border-cyan/50 hover:bg-cyan/5"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}
