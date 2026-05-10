'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Server, Layout, Brain, Wrench, ChevronDown, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: Server,
    gradient: 'from-cyan to-blue-500',
    skills: [
      { name: 'Django & DRF', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'Authentication (JWT)', level: 88 },
      { name: 'Database Design', level: 85 },
      { name: 'Redis Caching', level: 80 },
      { name: 'Payment Integration', level: 82 },
      { name: 'Scalable Architecture', level: 78 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Layout,
    gradient: 'from-electric-blue to-indigo',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 82 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Responsive UI', level: 90 },
      { name: 'State Management', level: 80 },
      { name: 'Component Design', level: 85 },
    ],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    icon: Brain,
    gradient: 'from-indigo to-purple-500',
    skills: [
      { name: 'Data Structures', level: 88 },
      { name: 'Algorithms', level: 85 },
      { name: 'Competitive Programming', level: 82 },
      { name: 'Code Optimization', level: 80 },
      { name: 'Problem Analysis', level: 90 },
    ],
  },
  {
    id: 'tools',
    title: 'Dev Tools',
    icon: Wrench,
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 88 },
      { name: 'Cloud Deployment', level: 78 },
      { name: 'CI/CD', level: 72 },
      { name: 'Docker', level: 70 },
    ],
  },
]

function SkillCard({
  category,
  index,
  isInView,
  isExpanded,
  onToggle,
}: {
  category: (typeof skillCategories)[0]
  index: number
  isInView: boolean
  isExpanded: boolean
  onToggle: () => void
}) {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="relative rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden cursor-pointer hover:border-border transition-colors duration-300"
        onClick={onToggle}
        layout
      >
        {/* Background gradient on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Header */}
        <div className="p-5 md:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <motion.div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
            <div>
              <h3 className="text-base md:text-lg font-semibold">{category.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{category.skills.length} skills</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center"
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>

        {/* Skills List - Expandable */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4">
                <div className="h-px bg-gradient-to-r from-border/50 via-border to-border/50" />
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick preview badges when collapsed */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="px-5 md:px-6 pb-5 md:pb-6"
            >
              <div className="flex flex-wrap gap-2">
                {category.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.gradient} text-white shadow-sm`}
                  >
                    {skill.name}
                  </span>
                ))}
                {category.skills.length > 3 && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary/50 text-muted-foreground border border-border/50">
                    +{category.skills.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  // All dropdowns closed by default
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.65 0.22 260 / 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-indigo mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-3 h-3" />
            Skills
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Specialized skills honed through real-world projects and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              isInView={isInView}
              isExpanded={expandedId === category.id}
              onToggle={() => handleToggle(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
