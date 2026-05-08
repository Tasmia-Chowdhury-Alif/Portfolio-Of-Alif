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
    techs: [
      { icon: SiPython, name: 'Python', color: '#3776AB' },
      { icon: SiDjango, name: 'Django', color: '#092E20' },
      { icon: SiDjango, name: 'DRF', color: '#A30000' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
      { icon: SiJsonwebtokens, name: 'JWT', color: '#000000' },
      { icon: SiSwagger, name: 'OpenAPI', color: '#85EA2D' },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-electric-blue to-indigo',
    techs: [
      { icon: SiReact, name: 'React', color: '#61DAFB' },
      { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    ],
  },
  {
    title: 'Tools & Deployment',
    color: 'from-purple-500 to-pink-500',
    techs: [
      { icon: SiGit, name: 'Git', color: '#F05032' },
      { icon: SiGithub, name: 'GitHub', color: '#181717' },
      { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
      { icon: SiVercel, name: 'Vercel', color: '#000000' },
      { icon: SiRender, name: 'Render', color: '#46E3B7' },
      { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E' },
      { icon: SiCloudinary, name: 'Cloudinary', color: '#3448C5' },
    ],
  },
  {
    title: 'Payments',
    color: 'from-green-500 to-emerald-500',
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
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
      data-cursor-text={tech.name}
    >
      <motion.div
        className="relative glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-border/50 overflow-hidden"
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${tech.color}20 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <motion.div
          animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <tech.icon
            className="w-10 h-10 transition-all duration-300"
            style={{ color: isHovered ? tech.color : undefined }}
          />
        </motion.div>

        {/* Name */}
        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {tech.name}
        </span>

        {/* Animated border on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent"
          style={{ color: tech.color }}
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="tech-stack" className="relative py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-[150px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            Tech Stack
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A curated collection of modern tools and frameworks I use to build scalable applications
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <div className="flex-1 h-px bg-border/50" />
              </div>

              {/* Tech Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
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
          className="mt-20 overflow-hidden"
        >
          <div className="relative flex">
            <motion.div
              className="flex gap-8 items-center"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...techCategories.flatMap((c) => c.techs), ...techCategories.flatMap((c) => c.techs)].map(
                (tech, index) => (
                  <div
                    key={`marquee-${index}`}
                    className="flex items-center gap-2 text-muted-foreground/50 whitespace-nowrap"
                  >
                    <tech.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{tech.name}</span>
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
