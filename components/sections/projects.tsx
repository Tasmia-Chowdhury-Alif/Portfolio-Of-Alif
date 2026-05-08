'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, FileCode, ArrowRight, Sparkles } from 'lucide-react'
import {
  SiReact,
  SiDjango,
  SiPostgresql,
  SiStripe,
  SiRedis,
  SiTensorflow,
} from 'react-icons/si'
import { Button } from '@/components/ui/button'

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
      { icon: SiDjango, name: 'DRF', color: '#A30000' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiStripe, name: 'Stripe', color: '#008CDD' },
      { icon: SiTensorflow, name: 'TensorFlow.js', color: '#FF6F00' },
    ],
    gradient: 'from-cyan via-blue-500 to-indigo',
    links: {
      live: '#',
      frontend: '#',
      backend: '#',
      github: '#',
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
      'Cart & wishlist',
    ],
    tech: [
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiDjango, name: 'DRF', color: '#A30000' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    links: {
      live: '#',
      frontend: '#',
      backend: '#',
      github: '#',
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
      { icon: SiReact, name: 'Next.js', color: '#000000' },
      { icon: SiReact, name: 'React', color: '#61DAFB' },
    ],
    gradient: 'from-electric-blue via-indigo to-purple-500',
    links: {
      live: '#',
      github: '#',
    },
  },
]

function ProjectCard({
  project,
  index,
  isInView,
  isActive,
  onHover,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
  isActive: boolean
  onHover: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={onHover}
    >
      <div className="relative glass rounded-3xl overflow-hidden border border-border/50">
        {/* Header Image Area */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/30 rounded-full" />
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/30 rounded-full" />
          </div>

          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/20 backdrop-blur-sm text-xs font-medium text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            <Sparkles className="w-3 h-3" />
            {project.subtitle}
          </motion.span>

          {/* Floating tech icons */}
          <div className="absolute bottom-4 right-4 flex -space-x-2">
            {project.tech.slice(0, 4).map((tech, i) => (
              <motion.div
                key={tech.name}
                className="w-8 h-8 rounded-full bg-background/90 flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.4 + i * 0.1 }}
              >
                <tech.icon className="w-4 h-4" style={{ color: tech.color }} />
              </motion.div>
            ))}
            {project.tech.length > 4 && (
              <motion.div
                className="w-8 h-8 rounded-full bg-background/90 flex items-center justify-center shadow-lg text-xs font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.8 }}
              >
                +{project.tech.length - 4}
              </motion.div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
              >
                {feature}
              </span>
            ))}
            {project.features.length > 4 && (
              <span className="px-2 py-1 rounded-md bg-secondary/50 text-xs font-medium text-muted-foreground">
                +{project.features.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links.live && (
              <Button size="sm" variant="outline" className="group/btn gap-2" asChild>
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.links.github && (
              <Button size="sm" variant="ghost" className="gap-2" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3" />
                  Code
                </a>
              </Button>
            )}
            {project.links.backend && (
              <Button size="sm" variant="ghost" className="gap-2" asChild>
                <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                  <FileCode className="w-3 h-3" />
                  API Docs
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Hover border effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none`}
          style={{
            background: `linear-gradient(var(--card), var(--card)) padding-box, linear-gradient(135deg, transparent, ${isActive ? 'var(--cyan)' : 'transparent'}, transparent) border-box`,
          }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-[150px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-electric-blue mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Featured Projects
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my most impactful projects demonstrating backend engineering and full-stack capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              isActive={activeProject === project.id}
              onHover={() => setActiveProject(project.id)}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="group glass border-border/50 hover:border-cyan/50"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-text="GitHub"
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
