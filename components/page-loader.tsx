'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="text-center space-y-6">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className="text-5xl font-bold font-mono gradient-text"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(0, 200, 255, 0.3)',
                    '0 0 40px rgba(0, 200, 255, 0.5)',
                    '0 0 20px rgba(0, 200, 255, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Alif
              </motion.div>
              
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-8 border-2 border-cyan/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-12 border border-electric-blue/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-electric-blue rounded-full"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              Loading experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
