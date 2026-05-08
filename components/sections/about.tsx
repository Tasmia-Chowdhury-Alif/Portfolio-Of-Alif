'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Database, Server, Users, Trophy, Zap } from 'lucide-react'

const stats = [
  { icon: Code2, value: '592+', label: 'Problems Solved', color: 'text-cyan' },
  { icon: Trophy, value: '2x', label: 'Innovation Winner', color: 'text-yellow-500' },
  { icon: Database, value: '5+', label: 'Fullstack Projects', color: 'text-electric-blue' },
  { icon: Users, value: 'Team', label: 'Leadership', color: 'text-green-500' },
]

const highlights = [
  'Django & DRF Expert',
  'React.js Development',
  'PostgreSQL & Redis',
  'JWT Authentication',
  'Stripe Integration',
  'RESTful APIs',
  'System Architecture',
  'Scalable Backend',
]

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-cyan mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passionate About <span className="gradient-text">Backend Engineering</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building secure, scalable systems with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-electric-blue/20 rounded-3xl blur-2xl" />
              
              {/* Main Card */}
              <div className="relative glass rounded-3xl p-8 border border-border/50">
                <div className="space-y-6">
                  {/* Name Card */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-electric-blue flex items-center justify-center">
                      <Server className="w-8 h-8 text-background" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Tasmia Chowdhury Alif</h3>
                      <p className="text-muted-foreground">Backend Developer</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Bangladesh</span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="px-3 py-2 rounded-lg bg-secondary/50 text-sm font-medium text-center"
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Border Line */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-cyan via-electric-blue to-indigo rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m a <span className="text-foreground font-medium">Backend-focused Fullstack Developer</span> with 
                hands-on experience in Python, Django, React, and RESTful API development. I&apos;m passionate 
                about building <span className="text-cyan font-medium">secure, scalable backend systems</span> with 
                strong problem-solving skills and a competitive programming background.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                With experience leading team projects and working on{' '}
                <span className="text-electric-blue font-medium">SaaS architecture</span>, I focus on creating 
                efficient, maintainable code that solves real-world problems. My competitive programming 
                journey has sharpened my algorithmic thinking and optimization skills.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="glass rounded-2xl p-6 border border-border/50 hover:border-cyan/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan/5">
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/5 to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
