'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const educationData = [
  {
    id: 1,
    degree: 'SSC',
    institution: 'C & B Colony Ideal High School',
    location: 'Chittagong, Bangladesh',
    period: 'Completed',
    description: 'Secondary School Certificate with strong foundation in science and mathematics.',
    achievements: ['Strong academic performance', 'Science background'],
    icon: GraduationCap,
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
}: {
  item: (typeof educationData)[0]
  index: number
  isInView: boolean
}) {
  const Icon = item.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}
    >
      {/* Content Card */}
      <motion.div
        className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative group">
          {/* Glow effect */}
          <div
            className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
          />

          <div className="relative glass rounded-2xl p-6 border border-border/50 hover:border-cyan/30 transition-all duration-300">
            {/* Current Badge */}
            {item.current && (
              <motion.span
                className="absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan to-electric-blue text-background"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Current
              </motion.span>
            )}

            {/* Icon */}
            <motion.div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 ${isEven ? 'lg:ml-auto' : ''}`}
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Icon className="w-6 h-6 text-background" />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
            <h4 className="text-lg text-muted-foreground mb-2">{item.institution}</h4>

            <div
              className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${isEven ? 'lg:justify-end' : ''} flex-wrap`}
            >
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {item.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {item.period}
              </span>
            </div>

            <p className="text-muted-foreground mb-4">{item.description}</p>

            {/* Achievements */}
            <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
              {item.achievements.map((achievement) => (
                <span
                  key={achievement}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Node */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10 hidden lg:flex">
        <motion.div
          className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} border-4 border-background shadow-lg`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
          whileHover={{ scale: 1.3 }}
        />
        {item.current && (
          <motion.div
            className={`absolute w-10 h-10 rounded-full bg-gradient-to-br ${item.color} opacity-30`}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Empty space for opposite side */}
      <div className="hidden lg:block w-1/2" />
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
    <section id="education" className="relative py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        className="absolute top-1/3 left-0 w-96 h-96 bg-indigo/10 rounded-full blur-[150px]"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-cyan mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Education
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My educational path towards becoming a professional software engineer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan via-electric-blue to-indigo"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-24">
            {educationData.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
