'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiRedis,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiSupabase,
  SiCloudinary,
  SiStripe,
  SiSwagger,
  SiJsonwebtokens,
} from 'react-icons/si'

const techCategories = [
  {
    title: 'Backend',
    color: 'from-cyan to-blue-500',
    bgColor: 'bg-cyan/10',
    techs: [
      { icon: SiPython, name: 'Python', color: '#3776AB' },
      { icon: SiDjango, name: 'Django', color: '#0C4B33' },
      { icon: SiDjango, name: 'DRF', color: '#A30000' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
      { icon: SiJsonwebtokens, name: 'JWT', color: '#fffff' },
      { icon: SiSwagger, name: 'OpenAPI', color: '#85EA2D' },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-electric-blue to-indigo',
    bgColor: 'bg-electric-blue/10',
    techs: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiNextdotjs, name: 'Next.js', color: '#fffff' },
      { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    ],
  },
  {
    title: 'Tools & Deployment',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    techs: [
      { icon: SiGit, name: 'Git', color: '#F05032' },
      { icon: SiGithub, name: 'GitHub', color: '#fffff' },
      { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
      { icon: SiVercel, name: 'Vercel', color: '#fffff' },
      { icon: SiRender, name: 'Render', color: '#46E3B7' },
      { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
      { icon: SiCloudinary, name: 'Cloudinary', color: '#3448C5' },
    ],
  },
  {
    title: 'Payments',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    techs: [
      { icon: SiStripe, name: 'Stripe', color: '#008CDD' },
      { icon: SiStripe, name: 'SSLCommerz', color: '#2E8B57' },
    ],
  },
]

function TechCard({
  tech,
  index,
  isInView,
}: {
  tech: { icon: React.ElementType; name: string; color: string }
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative rounded-xl p-4 md:p-5 flex flex-col items-center justify-center gap-2 md:gap-3 bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden transition-colors duration-300 hover:border-border"
        whileHover={{
          scale: 1.05,
          y: -5,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${tech.color}22 0%, transparent 70%)`,
          }}
        />

        {/* Icon with brand color on hover */}
        <motion.div
          animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative"
        >
          {/* Icon glow */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 blur-xl"
              style={{ backgroundColor: tech.color }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
            />
          )}
          <tech.icon
            className="w-8 h-8 md:w-10 md:h-10 relative z-10 transition-colors duration-300"
            style={{ color:  tech.color }}
          />
        </motion.div>

        {/* Name */}
        <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
          {tech.name}
        </span>

        {/* Animated bottom border on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: tech.color }}
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="tech-stack" className="relative py-24 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
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
            Tech Stack
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            A curated collection of modern tools and frameworks I use to build scalable applications
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-10 md:space-y-14">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className={`h-1 w-8 md:w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-lg md:text-xl font-semibold">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent" />
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4">
                {category.techs.map((tech, index) => (
                  <TechCard
                    key={`${category.title}-${tech.name}`}
                    tech={tech}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-20 overflow-hidden"
        >
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <motion.div
              className="flex gap-6 md:gap-8 items-center"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...techCategories.flatMap((c) => c.techs), ...techCategories.flatMap((c) => c.techs)].map(
                (tech, index) => (
                  <div
                    key={`marquee-${index}`}
                    className="flex items-center gap-2 text-muted-foreground/40 whitespace-nowrap"
                  >
                    <tech.icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: tech.color }} />
                    <span className="text-xs md:text-sm font-medium">{tech.name}</span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
