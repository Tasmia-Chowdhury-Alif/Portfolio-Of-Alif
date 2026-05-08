'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { Mail, Download, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-white' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email', color: 'hover:text-red-400' },
  { icon: SiLeetcode, href: 'https://leetcode.com', label: 'LeetCode', color: 'hover:text-yellow-500' },
  { icon: SiCodeforces, href: 'https://codeforces.com', label: 'Codeforces', color: 'hover:text-blue-400' },
  { icon: SiCodechef, href: 'https://codechef.com', label: 'CodeChef', color: 'hover:text-amber-600' },
]

const floatingStats = [
  { value: '592+', label: 'Problems Solved', delay: 0.8 },
  { value: '2★', label: 'CodeChef', delay: 1 },
  { value: '997', label: 'CF Max Rating', delay: 1.2 },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 noise" />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/20 rounded-full blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-electric-blue/20 rounded-full blur-[128px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-foreground">Backend-Focused</span>
                <br />
                <span className="gradient-text">Fullstack Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Building Scalable & Intelligent Web Systems with{' '}
                <span className="text-cyan font-medium">Django</span>,{' '}
                <span className="text-electric-blue font-medium">React</span>, and{' '}
                <span className="text-indigo font-medium">Modern Architecture</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan to-electric-blue text-background font-semibold px-8 glow"
                data-cursor-text="Download"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group glass border-border/50 hover:border-cyan/50 hover:bg-cyan/5"
                asChild
              >
                <a href="#projects" data-cursor-text="View">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full glass text-muted-foreground transition-all duration-300 hover:scale-110 hover:glow ${social.color}`}
                  whileHover={{ y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  data-cursor-text={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image with Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Ring */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan via-electric-blue to-indigo rounded-full opacity-50 blur-2xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* Profile Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-full animated-border p-1">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cyan/10 via-transparent to-electric-blue/10 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Sparkles className="w-12 h-12 mx-auto text-cyan" />
                        <p className="text-lg font-semibold gradient-text">Tasmia Chowdhury</p>
                        <p className="text-sm text-muted-foreground">Alif</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                {floatingStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="absolute glass rounded-xl px-4 py-2 shadow-lg"
                    style={{
                      top: index === 0 ? '-10%' : index === 1 ? '30%' : '70%',
                      left: index === 0 ? '10%' : index === 1 ? '-20%' : '80%',
                      right: index === 2 ? '-20%' : 'auto',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: stat.delay }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      <p className="text-lg font-bold gradient-text">{stat.value}</p>
                      <p className="text-xs text-muted-foreground whitespace-nowrap">{stat.label}</p>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full p-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <FaCode className="w-6 h-6 text-cyan" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <motion.div
                className="w-1 h-2 bg-cyan rounded-full"
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
