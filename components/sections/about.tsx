'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Database, Server, Users, Trophy, Zap, Terminal, GitBranch } from 'lucide-react'

const stats = [
  { icon: Code2, value: '592+', label: 'Problems Solved', color: 'from-cyan to-blue-500' },
  { icon: Trophy, value: '2x', label: 'Innovation Winner', color: 'from-yellow-500 to-orange-500' },
  { icon: Database, value: '5+', label: 'Fullstack Projects', color: 'from-electric-blue to-indigo' },
  { icon: Users, value: 'Team', label: 'Leadership', color: 'from-green-500 to-emerald-500' },
]

const codeSnippet = [
  { type: 'comment', content: '# Backend Developer Profile' },
  { type: 'keyword', content: 'class' },
  { type: 'class', content: ' Developer' },
  { type: 'punctuation', content: ':' },
  { type: 'newline', content: '' },
  { type: 'keyword', content: '    def' },
  { type: 'function', content: ' __init__' },
  { type: 'punctuation', content: '(self):' },
  { type: 'newline', content: '' },
  { type: 'property', content: '        self.name' },
  { type: 'operator', content: ' = ' },
  { type: 'string', content: '"Tasmia Alif"' },
  { type: 'newline', content: '' },
  { type: 'property', content: '        self.role' },
  { type: 'operator', content: ' = ' },
  { type: 'string', content: '"Backend Developer"' },
  { type: 'newline', content: '' },
  { type: 'property', content: '        self.stack' },
  { type: 'operator', content: ' = ' },
  { type: 'array', content: '["Django", "React"]' },
  { type: 'newline', content: '' },
  { type: 'property', content: '        self.problems' },
  { type: 'operator', content: ' = ' },
  { type: 'number', content: '592' },
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
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 text-sm font-medium text-cyan mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            About Me
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Passionate About <span className="gradient-text">Backend Engineering</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Building secure, scalable systems with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Terminal/Code Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan/10 via-electric-blue/10 to-indigo/10 rounded-3xl blur-2xl" />
              
              {/* Terminal Window */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-muted-foreground font-mono flex items-center justify-center gap-2">
                      <Terminal className="w-3 h-3" />
                      developer.py
                    </span>
                  </div>
                  <GitBranch className="w-3 h-3 text-muted-foreground" />
                </div>

                {/* Code Content */}
                <div className="p-4 md:p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-0">
                    {codeSnippet.map((token, index) => {
                      if (token.type === 'newline') {
                        return <br key={index} />
                      }
                      
                      const colorClass = {
                        comment: 'text-muted-foreground',
                        keyword: 'text-pink-400',
                        class: 'text-yellow-400',
                        function: 'text-blue-400',
                        punctuation: 'text-foreground',
                        property: 'text-foreground',
                        operator: 'text-cyan',
                        string: 'text-green-400',
                        array: 'text-orange-400',
                        number: 'text-purple-400',
                      }[token.type] || 'text-foreground'

                      return (
                        <motion.span
                          key={index}
                          className={colorClass}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.02 }}
                        >
                          {token.content}
                        </motion.span>
                      )
                    })}
                    <motion.span
                      className="inline-block w-2 h-4 bg-cyan ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Skill Tags */}
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="flex flex-wrap gap-2">
                    {highlights.slice(0, 4).map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.05 }}
                        className="px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-medium border border-border/50"
                      >
                        {item}
                      </motion.span>
                    ))}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 }}
                      className="px-3 py-1.5 rounded-lg bg-cyan/10 text-cyan text-xs font-medium border border-cyan/20"
                    >
                      +{highlights.length - 4} more
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I&apos;m a <span className="text-foreground font-medium">Backend-focused Fullstack Developer</span> with 
                hands-on experience in Python, Django, React, and RESTful API development. I&apos;m passionate 
                about building <span className="text-cyan font-medium">secure, scalable backend systems</span> with 
                strong problem-solving skills and a competitive programming background.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                With experience leading team projects and working on{' '}
                <span className="text-electric-blue font-medium">SaaS architecture</span>, I focus on creating 
                efficient, maintainable code that solves real-world problems. My competitive programming 
                journey has sharpened my algorithmic thinking and optimization skills.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative rounded-xl p-4 md:p-5 bg-card/50 backdrop-blur-sm border border-border/50 hover:border-cyan/30 transition-all duration-300 overflow-hidden">
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</span>
                        <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
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
