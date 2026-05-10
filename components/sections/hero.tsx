'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'
import { Mail, Download, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-foreground hover:border-foreground' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500 hover:border-blue-500' },
  { icon: Mail, href: 'mailto:contact@example.com', label: 'Email', color: 'hover:text-red-400 hover:border-red-400' },
  { icon: SiLeetcode, href: 'https://leetcode.com', label: 'LeetCode', color: 'hover:text-yellow-500 hover:border-yellow-500' },
  { icon: SiCodeforces, href: 'https://codeforces.com', label: 'Codeforces', color: 'hover:text-blue-400 hover:border-blue-400' },
  { icon: SiCodechef, href: 'https://codechef.com', label: 'CodeChef', color: 'hover:text-amber-600 hover:border-amber-600' },
]

const floatingStats = [
  { value: '592+', label: 'Problems Solved', position: 'top-left' },
  { value: '2★', label: 'CodeChef', position: 'middle-left' },
  { value: '997', label: 'CF Max Rating', position: 'bottom-right' },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Parallax effect for profile image
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
      setMousePosition({ x: clientX / innerWidth, y: clientY / innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Tasmia_Chowdhury_Alif_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] lg:min-h-[100vh] xl:min-h-[100vh] 2xl:min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 pb-24 md:pb-16"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% -20%, oklch(0.75 0.15 195 / 0.25), transparent)',
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-full"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 80% 100%, oklch(0.65 0.22 260 / 0.15), transparent)',
            }}
            animate={{
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        {/* Interactive spotlight that follows mouse */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none hidden md:block"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
            left: `calc(${mousePosition.x * 100}% - 300px)`,
            top: `calc(${mousePosition.y * 100}% - 300px)`,
          }}
        />

        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 noise" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-[5%] w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[5%] w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, oklch(0.65 0.22 260 / 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Additional floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan/40 hidden md:block"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="oklch(0.75 0.15 195)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0" y1="25%" x2="100%" y2="25%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.line
            x1="0" y1="75%" x2="100%" y2="75%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-5 md:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50"
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
              className="space-y-3 md:space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold leading-tight">
                <span className="text-foreground">Backend-Focused</span>
                <br />
                <span className="gradient-text">Fullstack Developer</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan to-electric-blue text-background font-semibold px-6 sm:px-8 shadow-lg shadow-cyan/25 hover:shadow-cyan/40 transition-shadow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-electric-blue to-cyan"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-border/50 hover:border-cyan/50 hover:bg-cyan/5 backdrop-blur-sm"
                asChild
              >
                <a href="#projects">
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
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm text-muted-foreground transition-all duration-300 ${social.color}`}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image with Modern Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <motion.div 
              className="relative"
              style={{ x: springX, y: springY }}
            >
              {/* Outer Glow Aura */}
              <motion.div
                className="absolute -inset-8 md:-inset-12 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.3) 0%, oklch(0.65 0.22 260 / 0.1) 50%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Animated Gradient Ring */}
              <motion.div
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background: 'conic-gradient(from var(--angle), oklch(0.75 0.15 195), oklch(0.65 0.22 260), oklch(0.55 0.2 280), oklch(0.75 0.15 195))',
                  '--angle': '0deg',
                } as React.CSSProperties}
                animate={{
                  '--angle': ['0deg', '360deg'],
                } as { '--angle': string[] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Secondary spinning glow */}
              <motion.div
                className="absolute -inset-6 rounded-full opacity-30"
                style={{
                  background: 'conic-gradient(from 180deg, transparent 60%, oklch(0.75 0.15 195 / 0.6) 70%, transparent 80%)',
                  filter: 'blur(20px)',
                }}
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Profile Container */}
              <motion.div
                className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Inner glow behind image */}
                <motion.div
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.2) 0%, transparent 60%)',
                    filter: 'blur(30px)',
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Main Image Wrapper with glassmorphism */}
                <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-cyan/80 via-electric-blue/60 to-indigo/80">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                    {/* Glassmorphism inner ring */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-white/30 z-10 pointer-events-none" />
                    <div className="absolute inset-2 rounded-full ring-1 ring-white/10 z-10 pointer-events-none" />

                    {/* Profile Image */}
                    <Image
                      src="/images/profile.png"
                      alt="Tasmia Chowdhury Alif"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-700 ease-out hover:scale-110"
                    />

                    {/* Gradient Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-cyan/10" />
                    
                    {/* Light sweep animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </div>

                {/* Floating Stats - Better responsive positioning */}
                {floatingStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={`absolute hidden sm:block glass rounded-xl px-3 py-2 shadow-xl border border-white/10 backdrop-blur-xl ${
                      stat.position === 'top-left' 
                        ? '-top-2 -left-4 md:-top-4 md:-left-8 lg:-left-12' 
                        : stat.position === 'middle-left'
                        ? 'top-1/2 -translate-y-1/2 -left-14 md:-left-20 lg:-left-24'
                        : 'bottom-4 -right-4 md:-right-8 lg:-right-12'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: 'easeInOut',
                      }}
                    >
                      <p className="text-sm md:text-lg font-bold gradient-text">{stat.value}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">
                        {stat.label}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating Tech Icon with glow */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-full p-2.5 md:p-3 border border-white/10 shadow-xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan/20 blur-md"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <FaCode className="w-5 h-5 md:w-6 md:h-6 text-cyan relative z-10" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed positioning to avoid overlap on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs font-medium hidden md:block">Scroll Down</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-current/30 flex justify-center pt-2 backdrop-blur-sm"
            whileHover={{ borderColor: 'oklch(0.75 0.15 195)' }}
          >
            <motion.div
              className="w-1.5 h-2.5 bg-gradient-to-b from-cyan to-electric-blue rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <ChevronDown className="w-4 h-4 md:hidden animate-bounce" />
        </motion.a>
      </motion.div>
    </section>
  )
}
