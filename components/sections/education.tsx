'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

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
    current: true,
  },
]

function TimelineItem({
  item,
  index,
  isInView,
  isLast,
}: {
  item: (typeof educationData)[0]
  index: number
  isInView: boolean
  isLast: boolean
}) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        {/* Left Side - Icon, Title, Timeline */}
        <div className={`flex flex-col ${index % 2 === 0 ? 'items-end text-right' : 'order-3 items-start text-left'}`}>
          <motion.div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-3`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.2, type: 'spring' }}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
          <h4 className="text-base text-muted-foreground">{item.institution}</h4>
        </div>

        {/* Center - Timeline Node */}
        <div className="relative flex flex-col items-center">
          {/* Node */}
          <motion.div
            className={`relative z-10 w-5 h-5 rounded-full bg-gradient-to-br ${item.color} border-4 border-background shadow-lg`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
          />
          {/* Pulse for current */}
          {item.current && (
            <motion.div
              className={`absolute top-0 w-5 h-5 rounded-full bg-gradient-to-br ${item.color}`}
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          {/* Line */}
          {!isLast && (
            <motion.div
              className="w-0.5 flex-1 bg-gradient-to-b from-border to-border/30 mt-2"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
            />
          )}
        </div>

        {/* Right Side - Details */}
        <div className={`${index % 2 === 0 ? 'order-3' : ''}`}>
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
            
            <div className="relative rounded-2xl p-5 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-colors duration-300">
              {/* Current Badge */}
              {item.current && (
                <motion.span
                  className={`absolute -top-2.5 left-4 px-3 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${item.color} text-white shadow-lg`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Current
                </motion.span>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3 mt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

              {/* Achievements */}
              <div className="flex flex-wrap gap-2">
                {item.achievements.map((achievement) => (
                  <span
                    key={achievement}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border/50"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex gap-4">
          {/* Timeline line & node */}
          <div className="flex flex-col items-center">
            <motion.div
              className={`relative z-10 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-2 border-background shadow-md flex-shrink-0`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.2, type: 'spring' }}
            />
            {item.current && (
              <motion.div
                className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${item.color}`}
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            {!isLast && (
              <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-border/30 mt-2" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-bold">{item.degree}</h3>
                  {item.current && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium bg-gradient-to-r ${item.color} text-white`}>
                      Current
                    </span>
                  )}
                </div>
                <h4 className="text-sm text-muted-foreground">{item.institution}</h4>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </span>
              </div>

              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {item.achievements.slice(0, 3).map((achievement) => (
                  <span
                    key={achievement}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary/50 text-secondary-foreground"
                  >
                    {achievement}
                  </span>
                ))}
                {item.achievements.length > 3 && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary/30 text-muted-foreground">
                    +{item.achievements.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
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
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.55 0.2 280 / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-cyan mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Education
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            My educational path towards becoming a professional software engineer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line - Desktop only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/30 -translate-x-1/2 hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan via-electric-blue to-indigo"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-6 lg:space-y-16">
            {educationData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isInView={isInView}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
