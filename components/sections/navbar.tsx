'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Skills', href: '#skills' },
  {
    name: 'More',
    href: '#',
    dropdown: [
      { name: 'Education', href: '#education' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
  },
]

const allSectionIds = ['home', 'about', 'tech-stack', 'skills', 'education', 'projects', 'contact']

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Track active section using Intersection Observer
  useEffect(() => {
    setMounted(true)
    
    const observers: IntersectionObserver[] = []
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    allSectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  const isLinkActive = (href: string) => {
    const sectionId = href.replace('#', '')
    return activeSection === sectionId
  }

  const isDropdownActive = (dropdown: { name: string; href: string }[]) => {
    return dropdown.some((item) => isLinkActive(item.href))
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'py-3 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/5' 
          : 'py-5 bg-transparent'
      )}
    >
      {/* Animated gradient line at top when scrolled */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: isScrolled ? 1 : 0, 
          opacity: isScrolled ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      />

      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="relative text-2xl font-bold font-mono"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="gradient-text">Alif</span>
          <motion.span
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan to-electric-blue rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.a
                href={link.href}
                className={cn(
                  'relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                  link.dropdown 
                    ? isDropdownActive(link.dropdown) 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                    : isLinkActive(link.href)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active background pill */}
                {(link.dropdown ? isDropdownActive(link.dropdown) : isLinkActive(link.href)) && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-secondary/80 border border-border/50"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10">{link.name}</span>
                {link.dropdown && (
                  <motion.span
                    className="relative z-10"
                    animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </motion.span>
                )}
              </motion.a>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 min-w-[180px] bg-card/95 backdrop-blur-xl rounded-xl border border-border/50 shadow-xl shadow-background/10 overflow-hidden"
                  >
                    {/* Glow effect */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-10 bg-cyan/20 blur-2xl" />
                    
                    {link.dropdown.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          'relative flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200',
                          isLinkActive(item.href)
                            ? 'text-foreground bg-secondary/50'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
                        )}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {/* Active indicator */}
                        {isLinkActive(item.href) && (
                          <motion.span
                            layoutId="activeDropdownIndicator"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gradient-to-b from-cyan to-electric-blue rounded-full"
                          />
                        )}
                        <span className="pl-2">{item.name}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={cn(
              'relative p-2.5 rounded-full overflow-hidden transition-colors duration-300',
              'bg-secondary/50 hover:bg-secondary border border-border/50'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {mounted && (
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-indigo" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2.5 rounded-full transition-colors duration-300',
              'bg-secondary/50 hover:bg-secondary border border-border/50'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden mt-2 mx-4 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.dropdown ? (
                      <div className="space-y-1">
                        <span className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {link.name}
                        </span>
                        <div className="pl-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={cn(
                                'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                                isLinkActive(item.href)
                                  ? 'text-foreground bg-secondary/80'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                              )}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {isLinkActive(item.href) && (
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan to-electric-blue" />
                              )}
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                          isLinkActive(link.href)
                            ? 'text-foreground bg-secondary/80'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {isLinkActive(link.href) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan to-electric-blue" />
                        )}
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
