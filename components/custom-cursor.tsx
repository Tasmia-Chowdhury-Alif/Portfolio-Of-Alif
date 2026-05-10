'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring configuration for premium feel
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)
  
  // Slower spring for the trailing ring
  const trailConfig = { damping: 30, stiffness: 150, mass: 0.8 }
  const trailX = useSpring(mouseX, trailConfig)
  const trailY = useSpring(mouseY, trailConfig)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Use clientX/clientY for viewport-relative positioning
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
    if (!isVisible) setIsVisible(true)
  }, [mouseX, mouseY, isVisible])

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const interactive = target.closest('a, button, [data-cursor], input, textarea, select, [role="button"], [tabindex="0"]')
    if (interactive) {
      setIsHovering(true)
    }
  }, [])

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const interactive = target.closest('a, button, [data-cursor], input, textarea, select, [role="button"], [tabindex="0"]')
    if (interactive) {
      setIsHovering(false)
    }
  }, [])

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 1024
      setIsMobile(isTouchDevice || isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) {
      document.documentElement.classList.remove('custom-cursor-active')
      return
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeaveWindow = () => setIsVisible(false)
    const handleMouseEnterWindow = () => setIsVisible(true)

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeaveWindow)
    document.addEventListener('mouseenter', handleMouseEnterWindow)
    document.addEventListener('mouseover', handleMouseEnter, { passive: true })
    document.addEventListener('mouseout', handleMouseLeave, { passive: true })

    // Enable custom cursor styles
    document.documentElement.classList.add('custom-cursor-active')

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeaveWindow)
      document.removeEventListener('mouseenter', handleMouseEnterWindow)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [isMobile, handleMouseMove, handleMouseEnter, handleMouseLeave])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor dot with glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            // scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 w-4 h-4 rounded-full blur-md"
            style={{
              background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.6) 0%, transparent 70%)',
              transform: 'translate(-25%, -25%) scale(2)',
            }}
          />
          {/* Core dot */}
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan to-electric-blue mix-blend-difference" />
        </motion.div>
      </motion.div>

      {/* Trailing cursor ring with glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {/* Outer glow ring */}
          <div 
            className="absolute inset-0 w-10 h-10 rounded-full blur-sm"
            style={{
              background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.3) 0%, transparent 70%)',
              transform: 'translate(-25%, -25%) scale(1.5)',
            }}
          />
          {/* Ring border */}
          <div 
            className="w-10 h-10 rounded-full border-2"
            style={{
              borderColor: 'oklch(0.75 0.15 195 / 0.5)',
              background: isHovering ? 'oklch(0.75 0.15 195 / 0.1)' : 'transparent',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div 
            className="w-8 h-8 rounded-full"
            style={{
              background: 'radial-gradient(circle, oklch(0.75 0.15 195 / 0.4) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}
    </>
  )
}
