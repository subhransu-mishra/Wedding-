import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const weddingDate = new Date("2025-11-23T18:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-ivory via-wedding-secondary to-wedding-blush opacity-95" />

      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-wedding-sage opacity-30"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: (typeof window !== "undefined" ? window.innerHeight : 800) + 100,
            rotate: 0,
          }}
          animate={{
            y: -100,
            rotate: 360,
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1200),
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Heart size={Math.random() * 20 + 10} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mb-12"
        >
          <motion.h1
            className="font-elegant text-6xl md:text-7xl lg:text-8xl text-wedding-primary mb-4 leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Ipsita
          </motion.h1>
          <motion.div
            className="font-script text-3xl md:text-4xl text-wedding-accent my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            &
          </motion.div>
          <motion.h1
            className="font-elegant text-6xl md:text-7xl lg:text-8xl text-wedding-primary leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring", delay: 0.3 }}
          >
            Jayant
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-serif text-xl md:text-2xl text-wedding-dusty mb-6">
            Save the Date
          </p>
          <p className="font-script text-3xl md:text-4xl text-wedding-terracotta mb-12">
            November 23, 2025
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-lg mx-auto mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="bg-white/40 backdrop-blur-sm border border-wedding-accent/30 rounded-xl p-3 md:p-4 text-center shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                <div className="text-2xl md:text-3xl font-bold text-wedding-primary">
                  {value || 0}
                </div>
                <div className="text-xs md:text-sm text-wedding-dusty capitalize">
                  {unit}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mb-8"
        >
          <p className="font-serif text-base md:text-lg text-wedding-dusty">
            Join us as we celebrate our love story
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-wedding-accent cursor-pointer"
          onClick={() =>
            document.getElementById("couple-intro")?.scrollIntoView()
          }
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
