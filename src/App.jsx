import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import CoupleIntroduction from "./components/CoupleIntroduction";
import WeddingEvents from "./components/WeddingEvents";
import Gallery from "./components/Gallery";
import WeddingTimeline from "./components/WeddingTimeline";
import RSVP from "./components/RSVP";
import TravelStay from "./components/TravelStay";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import FloatingElements from "./components/FloatingElements";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.h1
            className="font-elegant text-6xl md:text-8xl text-yellow-500 mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            S & M
          </motion.h1>
          <motion.div
            className="w-16 h-1 bg-yellow-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 min-h-screen">
      <ScrollProgress />
      <AudioPlayer />
      <FloatingElements />

      <main>
        <HeroSection />
        <CoupleIntroduction />
        <WeddingEvents />
        <WeddingTimeline />
        <Gallery />
        <RSVP />
        <TravelStay />
        <Footer />
      </main>
    </div>
  );
}

export default App;
