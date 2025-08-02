import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { icon: Heart, color: "text-pink-300", size: "w-4 h-4" },
    { icon: Star, color: "text-yellow-300", size: "w-3 h-3" },
    { icon: Sparkles, color: "text-purple-300", size: "w-5 h-5" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Large Floating Elements */}
      {[...Array(8)].map((_, i) => {
        const Element = elements[i % elements.length];
        const Icon = Element.icon;

        return (
          <motion.div
            key={`large-${i}`}
            className={`absolute ${Element.color} opacity-20`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              rotate: 0,
              scale: 0.5,
            }}
            animate={{
              y: -100,
              rotate: 360,
              x: Math.random() * window.innerWidth,
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          >
            <Icon className={Element.size} />
          </motion.div>
        );
      })}

      {/* Small Floating Elements */}
      {[...Array(15)].map((_, i) => {
        const Element = elements[i % elements.length];
        const Icon = Element.icon;

        return (
          <motion.div
            key={`small-${i}`}
            className={`absolute ${Element.color} opacity-10`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 20,
              rotate: 0,
            }}
            animate={{
              y: -50,
              rotate: 180,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          >
            <Icon className="w-2 h-2" />
          </motion.div>
        );
      })}

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-10 left-10 text-pink-200 opacity-30"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute top-10 right-10 text-purple-200 opacity-30"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Star className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 text-yellow-200 opacity-30"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-7 h-7" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-pink-200 opacity-30"
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
    </div>
  );
};

export default FloatingElements;
