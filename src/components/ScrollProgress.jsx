import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/20 backdrop-blur-sm z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-pink-400 via-purple-500 to-yellow-400"
        style={{
          width: `${scrollProgress}%`,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Progress Indicator */}
      <motion.div
        className="absolute top-0 right-4 bg-white/90 backdrop-blur-sm rounded-b-lg px-3 py-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: scrollProgress > 5 ? 1 : 0,
          y: scrollProgress > 5 ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xs font-medium text-gray-700">
          {Math.round(scrollProgress)}%
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollProgress;
