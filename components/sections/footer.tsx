'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, Heart, Code2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com', label: 'LeetCode' },
  { icon: SiCodeforces, href: 'https://codeforces.com', label: 'Codeforces' },
  { icon: SiCodechef, href: 'https://codechef.com', label: 'CodeChef' },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

// Back to Top Button Component
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-cyan to-electric-blue text-white shadow-lg shadow-cyan/30 flex items-center justify-center"
          aria-label="Back to top"
        >
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-electric-blue"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <ArrowUp className="w-5 h-5 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <BackToTop />
      
      <footer className="relative py-12 md:py-16 border-t border-border/50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg opacity-10" />
          {/* Subtle gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: 'linear-gradient(to top, oklch(0.75 0.15 195 / 0.03), transparent)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4">
              <motion.a
                href="#home"
                className="inline-flex items-center gap-2 text-2xl font-bold font-mono"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-electric-blue flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="gradient-text">Alif</span>
              </motion.a>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Backend-focused fullstack developer building scalable and intelligent web systems with Django, React, and modern architecture.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Navigation
              </h4>
              <nav className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Connect
              </h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a
                  href="mailto:contact@tasmia.dev"
                  className="block hover:text-cyan transition-colors"
                >
                  contact@tasmia.dev
                </a>
                <p>Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground flex items-center gap-1 flex-wrap justify-center sm:justify-start">
              <span>&copy; {currentYear} Tasmia Chowdhury Alif.</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-3 h-3 text-red-500" fill="currentColor" /> using Next.js
              </span>
            </p>

            <p className="text-xs text-muted-foreground">
              Designed & Developed with passion
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
