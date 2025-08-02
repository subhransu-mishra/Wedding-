import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({})
  const weddingDate = new Date('2024-12-15T18:00:00')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-cream via-wedding-peach to-wedding-blush opacity-90" />
      
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-wedding-rose opacity-30"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 100,
            rotate: 0 
          }}
          animate={{ 
            y: -100, 
            rotate: 360,
            x: Math.random() * window.innerWidth 
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
        >
          <Heart size={Math.random() * 20 + 10} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-8"
        >
          <motion.h1
            className="font-elegant text-8xl md:text-9xl lg:text-[12rem] text-wedding-gold animate-glow leading-none"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Sarah
          </motion.h1>
          <motion.div
            className="font-script text-4xl md:text-6xl text-wedding-dusty my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &
          </motion.div>
          <motion.h1
            className="font-elegant text-8xl md:text-9xl lg:text-[12rem] text-wedding-gold animate-glow leading-none"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
          >
            Michael
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-serif text-2xl md:text-3xl text-gray-700 mb-4">
            Save the Date
          </p>
          <p className="font-script text-4xl md:text-5xl text-wedding-blush mb-8">
            December 15, 2024
          </p>
          
          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="glass-effect rounded-lg p-4 text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                <div className="text-3xl md:text-4xl font-bold text-wedding-gold">
                  {value || 0}
                </div>
                <div className="text-sm text-gray-600 capitalize">{unit}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center"
        >
          <p className="font-serif text-lg text-gray-600 mb-8">
            Join us as we celebrate our love story
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-wedding-gold cursor-pointer"
          onClick={() => document.getElementById('couple-intro').scrollIntoView()}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
