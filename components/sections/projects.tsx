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
} from 'react-icons/si'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Driver Safety Monitoring System',
    subtitle: 'SaaS Platform',
    description:
      'Real-time driver monitoring SaaS platform that detects drowsiness and distracted driving situations using AI-based detection and scalable backend architecture.',
    features: [
      'TensorFlow.js detection',
      'Real-time alerts',
      'Email notifications',
      'Location sharing',
      'Stripe subscription',
      'Scalable backend',
    ],
    tech: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
      { icon: SiTensorflow, name: 'TensorFlow.js', color: '#FF6F00' },
    ],
    gradient: 'from-cyan via-blue-500 to-indigo',
    image: '/images/projects/driver-safety.jpg',
    links: {
      live: '#',
      github: '#',
      docs: '#',
    },
  },
  {
    id: 2,
    title: 'Green Harvest',
    subtitle: 'E-commerce Platform',
    description:
      'Scalable grocery e-commerce backend system with authentication, order processing, caching, and multi-payment integration.',
    features: [
      'JWT authentication',
      'Djoser auth system',
      'Redis caching',
      'Stripe integration',
      'SSLCommerz integration',
      'Product filtering',
    ],
    tech: [
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
      { icon: SiStripe, name: 'Stripe', color: '#635BFF' },
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    image: '/images/projects/green-harvest.jpg',
    links: {
      live: '#',
      github: '#',
      docs: '#',
    },
  },
  {
    id: 3,
    title: 'Portfolio Website',
    subtitle: 'Personal Showcase',
    description:
      'Modern, animated portfolio website built with Next.js and Tailwind CSS featuring smooth animations, dark mode, and responsive design.',
    features: [
      'Framer Motion animations',
      'GSAP scroll effects',
      'Dark/Light mode',
      'Responsive design',
      'Custom cursor',
      'Smooth scrolling',
    ],
    tech: [
      { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    ],
    gradient: 'from-electric-blue via-indigo to-purple-500',
    image: '/images/projects/portfolio.jpg',
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    id: 4,
    title: 'Task Management API',
    subtitle: 'Backend Service',
    description:
      'RESTful API for task management with user authentication, team collaboration, real-time notifications, and comprehensive documentation.',
    features: [
      'REST API Design',
      'OAuth2 Authentication',
      'Team Workspaces',
      'Real-time WebSockets',
      'API Documentation',
      'Rate Limiting',
    ],
    tech: [
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    ],
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    image: '/images/projects/task-api.jpg',
    links: {
      github: '#',
      docs: '#',
    },
  },
  {
    id: 5,
    title: 'Real-time Chat Application',
    subtitle: 'Full Stack App',
    description:
      'Modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption for secure communications.',
    features: [
      'WebSocket messaging',
      'File attachments',
      'Group chats',
      'Message encryption',
      'Read receipts',
      'Online status',
    ],
    tech: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
      { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    ],
    gradient: 'from-purple-500 via-violet-500 to-indigo',
    image: '/images/projects/chat-app.jpg',
    links: {
      live: '#',
      github: '#',
    },
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    subtitle: 'Data Visualization',
    description:
      'Comprehensive analytics dashboard with real-time data visualization, custom reports, and export functionality for business intelligence.',
    features: [
      'Real-time charts',
      'Custom reports',
      'Data export',
      'User tracking',
      'Performance metrics',
      'Email reports',
    ],
    tech: [
      { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
    ],
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    image: '/images/projects/analytics.jpg',
    links: {
      live: '#',
      github: '#',
    },
  },
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
        <div className={`relative h-44 md:h-48 bg-gradient-to-br ${project.gradient} p-5 overflow-hidden`}>
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
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {project.links.live && (
              <Button size="sm" variant="outline" className="gap-1.5 h-8 text-xs" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="ghost" className="gap-1.5 h-8 text-xs" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3" />
                  Code
                </a>
              </Button>
            )}
            {project.links.docs && (
              <Button size="sm" variant="ghost" className="gap-1.5 h-8 text-xs" asChild>
                <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                  <FileCode className="w-3 h-3" />
                  Docs
                </a>
              </Button>
            )}
            <Link href={`/projects/${project.id}`} className="ml-auto">
              <Button size="sm" variant="ghost" className="gap-1.5 h-8 text-xs text-cyan hover:text-cyan">
                <Eye className="w-3 h-3" />
                Details
              </Button>
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
            className="w-10 h-10 rounded-full border-border/50 hover:border-cyan/50 hover:bg-cyan/5"
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
            className="w-10 h-10 rounded-full border-border/50 hover:border-cyan/50 hover:bg-cyan/5"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* View More Button */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  )
}
