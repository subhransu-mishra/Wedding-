import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Calendar, MapPin, Gem } from "lucide-react";

const CoupleIntroduction = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const timeline = [
    {
      title: "First Meeting",
      date: "March 2019",
      description: "A coffee shop encounter that changed everything",
      icon: Heart,
      color: "pink-500",
    },
    {
      title: "First Date",
      date: "April 2019",
      description: "A romantic dinner under the stars",
      icon: Calendar,
      color: "purple-500",
    },
    {
      title: "Travel Together",
      date: "August 2020",
      description: "Our first adventure to the mountains",
      icon: MapPin,
      color: "orange-500",
    },
    {
      title: "The Proposal",
      date: "December 2023",
      description: "He popped the question at sunset beach",
      icon: Gem,
      color: "yellow-500",
    },
  ];

  return (
    <section
      id="couple-intro"
      className="section-padding bg-wedding-ivory/80"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-6xl md:text-7xl text-wedding-primary mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-wedding-accent mx-auto mb-6"></div>
          <p className="font-serif text-xl text-wedding-dusty max-w-3xl mx-auto">
            Two hearts, one beautiful journey. Discover how our love story began
            and blossomed into forever.
          </p>
        </motion.div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-wedding-secondary p-8 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wedding-blush/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-wedding-secondary to-wedding-blush flex items-center justify-center text-8xl">
                  👰🏻
                </div>
                <h3 className="font-elegant text-4xl text-wedding-primary text-center mb-4">
                  Ipsita
                </h3>
                <p className="font-serif text-lg text-wedding-dusty text-center leading-relaxed">
                  A passionate artist and dreamer who believes in fairy tales.
                  Ipsita brings joy and creativity to everything she touches,
                  making the world more beautiful one smile at a time.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-2 bg-wedding-blush/20 rounded-full text-wedding-dusty font-medium">
                    The Dreamer ✨
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-sm border border-wedding-secondary p-8 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
              <div className="absolute top-0 left-0 w-32 h-32 bg-wedding-accent/20 rounded-full -translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-wedding-accent to-wedding-secondary flex items-center justify-center text-8xl">
                  🤵🏻
                </div>
                <h3 className="font-elegant text-4xl text-wedding-primary text-center mb-4">
                  Jayant
                </h3>
                <p className="font-serif text-lg text-wedding-dusty text-center leading-relaxed">
                  An adventurous soul with a heart of gold. Jayant's warmth and
                  humor light up every room, and his love for Ipsita knows no
                  bounds. Together, they're unstoppable.
                </p>
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-2 bg-wedding-accent/20 rounded-full text-wedding-dusty font-medium">
                    The Adventurer 🌟
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Love Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <h3 className="font-script text-5xl text-wedding-terracotta text-center mb-12">
            Our Journey Together
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-wedding-sage via-wedding-accent to-wedding-terracotta"></div>

            {timeline.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-white/60 backdrop-blur-sm border border-wedding-secondary rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <h4 className="font-serif text-2xl text-wedding-primary mb-2">
                        {event.title}
                      </h4>
                      <p className="text-wedding-accent font-medium mb-3">
                        {event.date}
                      </p>
                      <p className="text-wedding-dusty">{event.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-wedding-accent flex items-center justify-center shadow-lg">
                    <Icon className={`text-${event.color} w-8 h-8`} />
                  </div>

                  <div className="flex-1"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleIntroduction;
