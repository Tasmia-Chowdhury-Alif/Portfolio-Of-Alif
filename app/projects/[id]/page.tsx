'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, FileCode, Calendar, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react'
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
} from 'react-icons/si'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer'

const projects = [
  {
    id: 1,
    title: 'Driver Safety Monitoring System',
    subtitle: 'SaaS Platform',
    description: 'Real-time driver monitoring SaaS platform that detects drowsiness and distracted driving situations using AI-based detection and scalable backend architecture.',
    longDescription: 'A comprehensive driver safety solution designed to reduce road accidents caused by driver fatigue and distraction. The platform uses advanced computer vision and machine learning to monitor driver behavior in real-time, providing instant alerts when dangerous situations are detected.',
    features: [
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
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    ],
    gradient: 'from-cyan via-blue-500 to-indigo',
    links: { live: '#', github: '#', docs: '#' },
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
    timeline: '6 months',
    teamSize: 'Solo Developer',
    status: 'Live',
  },
  {
    id: 2,
    title: 'Green Harvest',
    subtitle: 'E-commerce Platform',
    description: 'Scalable grocery e-commerce backend system with authentication, order processing, caching, and multi-payment integration.',
    longDescription: 'A full-featured e-commerce platform designed specifically for grocery and fresh produce delivery. The system handles complex inventory management, delivery scheduling, and supports multiple payment gateways for a seamless checkout experience.',
    features: [
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
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
      { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    links: { live: '#', github: '#', docs: '#' },
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
    timeline: '4 months',
    teamSize: 'Team of 3',
    status: 'Live',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    subtitle: 'Personal Showcase',
    description: 'Modern, animated portfolio website built with Next.js and Tailwind CSS featuring smooth animations, dark mode, and responsive design.',
    longDescription: 'A cutting-edge portfolio website showcasing my skills and projects. Built with the latest web technologies, featuring smooth animations, custom cursor effects, and a premium user experience that works flawlessly across all devices.',
    features: [
      'Framer Motion powered animations',
      'GSAP scroll-triggered effects',
      'Dark and light theme support',
      'Fully responsive design',
      'Custom cursor interactions',
      'Smooth scroll navigation',
      'Optimized performance',
      'SEO friendly',
    ],
    tech: [
      { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    ],
    gradient: 'from-electric-blue via-indigo to-purple-500',
    links: { live: '#', github: '#' },
    challenges: [
      'Creating smooth animations without performance issues',
      'Building an accessible custom cursor system',
      'Ensuring consistent experience across browsers',
      'Optimizing bundle size for fast loading',
    ],
    futureImprovements: [
      'Blog section with MDX support',
      'Project case studies',
      'Interactive code snippets',
      'Analytics dashboard',
    ],
    timeline: '2 months',
    teamSize: 'Solo Developer',
    status: 'Live',
  },
  {
    id: 4,
    title: 'Task Management API',
    subtitle: 'Backend Service',
    description: 'RESTful API for task management with user authentication, team collaboration, real-time notifications, and comprehensive documentation.',
    longDescription: 'A robust backend service providing a complete task management solution for teams. Features include real-time collaboration, customizable workflows, and extensive API documentation for easy integration with any frontend.',
    features: [
      'RESTful API architecture',
      'OAuth2 authentication',
      'Team workspace management',
      'Real-time WebSocket notifications',
      'Swagger/OpenAPI documentation',
      'Rate limiting and throttling',
      'Audit logging',
      'Webhook integrations',
    ],
    tech: [
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    ],
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    links: { github: '#', docs: '#' },
    challenges: [
      'Designing a flexible permission system',
      'Implementing efficient real-time updates',
      'Building comprehensive API documentation',
      'Handling concurrent task updates',
    ],
    futureImprovements: [
      'GraphQL endpoint',
      'Calendar integration',
      'Time tracking features',
      'AI-powered task suggestions',
    ],
    timeline: '3 months',
    teamSize: 'Solo Developer',
    status: 'Beta',
  },
  {
    id: 5,
    title: 'Real-time Chat Application',
    subtitle: 'Full Stack App',
    description: 'Modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption for secure communications.',
    longDescription: 'A feature-rich chat application built for modern teams. Supports real-time messaging, multimedia sharing, and secure communications with end-to-end encryption for sensitive conversations.',
    features: [
      'WebSocket-based messaging',
      'File and image attachments',
      'Group chat functionality',
      'End-to-end encryption',
      'Read receipts and typing indicators',
      'Online presence status',
      'Message search',
      'Push notifications',
    ],
    tech: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    ],
    gradient: 'from-purple-500 via-violet-500 to-indigo',
    links: { live: '#', github: '#' },
    challenges: [
      'Implementing reliable WebSocket connections',
      'Building end-to-end encryption system',
      'Optimizing for thousands of concurrent users',
      'Handling offline message queuing',
    ],
    futureImprovements: [
      'Voice and video calling',
      'Screen sharing',
      'Bot integrations',
      'Message threading',
    ],
    timeline: '4 months',
    teamSize: 'Team of 2',
    status: 'Live',
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    subtitle: 'Data Visualization',
    description: 'Comprehensive analytics dashboard with real-time data visualization, custom reports, and export functionality for business intelligence.',
    longDescription: 'A powerful analytics platform providing real-time insights into business metrics. Features customizable dashboards, automated reporting, and advanced data visualization tools for data-driven decision making.',
    features: [
      'Real-time data charts',
      'Customizable dashboards',
      'Report generation',
      'Data export (CSV, PDF)',
      'User behavior tracking',
      'Performance metrics',
      'Automated email reports',
      'Role-based access control',
    ],
    tech: [
      { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    ],
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    links: { live: '#', github: '#' },
    challenges: [
      'Handling large datasets efficiently',
      'Building responsive chart components',
      'Implementing real-time data updates',
      'Optimizing query performance',
    ],
    futureImprovements: [
      'AI-powered insights',
      'Predictive analytics',
      'Custom widget builder',
      'Mobile app',
    ],
    timeline: '5 months',
    teamSize: 'Solo Developer',
    status: 'Live',
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = parseInt(params.id as string)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => router.push('/#projects')}>Back to Projects</Button>
        </div>
      </div>
    )
  }

  const currentIndex = projects.findIndex((p) => p.id === projectId)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
        <Navbar/>
        <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className={`relative py-20 md:py-32 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-64 h-64 border border-white/30 rounded-full" />
            <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <Button
                variant="ghost"
                onClick={() => router.push('/#projects')}
                className="text-white/80 hover:text-white hover:bg-white/10"
                >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
                </Button>
            </motion.div>

            {/* Project Info */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl"
            >
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium text-white mb-4">
                {project.subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-6">
                {project.longDescription}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{project.teamSize}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-200' : 'bg-yellow-500/20 text-yellow-200'
                    }`}>
                    {project.status}
                    </span>
                </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                {project.links.live && (
                    <Button className="bg-white text-gray-900 hover:bg-white/90" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                    </a>
                    </Button>
                )}
                {project.links.github && (
                    <Button variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                    </a>
                    </Button>
                )}
                {project.links.docs && (
                    <Button variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                    <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                        <FileCode className="w-4 h-4 mr-2" />
                        API Docs
                    </a>
                    </Button>
                )}
                </div>
            </motion.div>
            </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                {/* Tech Stack */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
                >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan" />
                    Technology Stack
                </h2>
                <div className="flex flex-wrap gap-4">
                    {project.tech.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/50"
                    >
                        <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                        <span className="font-medium">{tech.name}</span>
                    </div>
                    ))}
                </div>
                </motion.div>

                {/* Features */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
                >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                    <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/50"
                    >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                    </motion.div>
                    ))}
                </div>
                </motion.div>

                {/* Challenges */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
                >
                <h2 className="text-2xl font-bold mb-6">Challenges Faced</h2>
                <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg bg-orange-500/5 border border-orange-500/20"
                    >
                        <p className="text-sm">{challenge}</p>
                    </div>
                    ))}
                </div>
                </motion.div>

                {/* Future Improvements */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
                >
                <h2 className="text-2xl font-bold mb-6">Future Improvements</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                    {project.futureImprovements.map((improvement, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg bg-cyan/5 border border-cyan/20"
                    >
                        <p className="text-sm">{improvement}</p>
                    </div>
                    ))}
                </div>
                </motion.div>

                {/* Navigation */}
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-between pt-8 border-t border-border/50"
                >
                {prevProject ? (
                    <Link href={`/projects/${prevProject.id}`}>
                    <Button variant="ghost" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        {prevProject.title}
                    </Button>
                    </Link>
                ) : (
                    <div />
                )}
                {nextProject ? (
                    <Link href={`/projects/${nextProject.id}`}>
                    <Button variant="ghost" className="gap-2">
                        {nextProject.title}
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    </Link>
                ) : (
                    <div />
                )}
                </motion.div>
            </div>
            </div>
        </section>
        </div>
        <Footer/>
    </>
  )
}
