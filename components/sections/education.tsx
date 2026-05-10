'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles } from 'lucide-react'

const educationData = [
  {
    id: 1,
    degree: 'SSC',
    institution: 'C & B Colony Ideal High School',
    location: 'Chittagong, Bangladesh',
    period: 'Completed',
    description: 'Secondary School Certificate with strong foundation in science and mathematics.',
    achievements: ['Strong academic performance', 'Science background'],
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    glowColor: 'oklch(0.65 0.2 145)',
  },
  {
    id: 2,
    degree: 'Diploma in Computer Science',
    institution: 'National Institute of Technology (NIT)',
    location: 'Chittagong, Bangladesh',
    period: '2022 – 2026',
    description:
      'Comprehensive technical education in computer science with focus on programming, system design, and modern development practices.',
    achievements: [
      'Full-stack development projects',
      'Database management',
      'Software engineering principles',
      'Competitive programming',
    ],
    icon: Award,
    color: 'from-cyan to-blue-500',
    glowColor: 'oklch(0.75 0.15 195)',
  },
  {
    id: 3,
    degree: 'B.Sc. in CSE',
    institution: 'East Delta University (EDU)',
    location: 'Chittagong, Bangladesh',
    period: '2026 – Present',
    description:
      'Pursuing Bachelor of Science in Computer Science and Engineering with focus on advanced computing concepts and research.',
    achievements: ['Advanced algorithms', 'Research methodology', 'AI & Machine Learning'],
    icon: GraduationCap,
    color: 'from-electric-blue to-indigo',
    glowColor: 'oklch(0.65 0.22 260)',
    current: true,
  },
]

function TimelineCard({
  item,
  index,
  isInView,
  isLeft,
}: {
  item: (typeof educationData)[0]
  index: number
  isInView: boolean
  isLeft: boolean
}) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden">

        {/* glow */}
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${item.glowColor} / 0.15, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />

        {/* card */}
        <div className="relative rounded-2xl p-5 md:p-6 bg-card/60 backdrop-blur-xl border border-border/50">

          {/* top bar */}
          <motion.div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{ transformOrigin: isLeft ? 'right' : 'left' }}
          />

          {/* current */}
          {item.current && (
            <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-electric-blue to-indigo text-white text-xs">
              <Sparkles className="w-3 h-3" />
              Current
            </div>
          )}

          {/* header */}
          <div className="flex gap-4 mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-white" />
            </div>

            <div>
              <h3 className="text-lg font-bold">{item.degree}</h3>
              <h4 className="text-md text-muted-foreground">{item.institution}</h4>
            </div>
          </div>

          {/* meta */}
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1 px-2 py-1 bg-secondary/50 rounded-lg">
              <MapPin className="w-3 h-3" />
              {item.location}
            </span>
            <span className="flex items-center gap-1 px-2 py-1 bg-secondary/50 rounded-lg">
              <Calendar className="w-3 h-3" />
              {item.period}
            </span>
          </div>

          {/* <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.achievements.map((a) => (
              <span
                key={a}
                className={`px-3 py-1 text-xs rounded-lg bg-gradient-to-r ${item.color} bg-opacity-10 border border-border/30`}
              >
                {a}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </motion.div>
  )
}

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, oklch(0.55 0.2 280 / 0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise" />

        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-electric-blue/30 hidden md:block"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-cyan mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            My educational path towards becoming a professional software engineer
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline Line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            {/* Background line */}
            <div className="absolute inset-0 bg-gradient-to-b from-border/50 via-border to-border/50" />
            {/* Animated progress line */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan via-electric-blue to-indigo"
              style={{ height: lineHeight }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-b from-cyan via-electric-blue to-indigo blur-md"
              style={{ height: lineHeight, opacity: 0.5 }}
            />
          </div>

          {/* Left Timeline Line - Mobile/Tablet */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px lg:hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-border/50 via-border to-border/50" />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan via-electric-blue to-indigo"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
         <div className="space-y-16">

          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] items-center"
              >

                {/* LEFT */}
                <div className="hidden lg:flex justify-end">
                  {isLeft && (
                    <TimelineCard
                      item={item}
                      index={index}
                      isInView={isInView}
                      isLeft={true}
                    />
                  )}
                </div>

                {/* CENTER DOT */}
                <div className="hidden lg:flex justify-center relative">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color}`} />
                </div>

                {/* RIGHT */}
                <div className="hidden lg:flex justify-start">
                  {!isLeft && (
                    <TimelineCard
                      item={item}
                      index={index}
                      isInView={isInView}
                      isLeft={false}
                    />
                  )}
                </div>

                {/* MOBILE */}
                <div className="lg:hidden">
                  <TimelineCard
                    item={item}
                    index={index}
                    isInView={isInView}
                    isLeft={false}
                  />
                </div>

              </div>
            )
          })}
        </div>
        </div>
      </div>
    </section>
  )
}