import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Calendar, Gem, Camera, Gift, Plane } from "lucide-react";

const WeddingTimeline = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const milestones = [
    {
      title: "Engagement",
      date: "May 2023",
      description: "The moment we said yes to forever",
      icon: Gem,
      color: "text-pink-500",
    },
    
    {
      title: "Pre-Wedding Shoot",
      date: "Oct 2025",
      description: "Capturing our love story in frames",
      icon: Camera,
      color: "text-blue-500",
    },
    {
      title: "Wedding Day",
      date: "Nov 23, 2025",
      description: "The big day - becoming one",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Reception",
      date: "25 Nov 2025",
      description: "Reception celebration with family and friends",
      icon: Plane,
      color: "text-green-500",
    },
  ];

  return (
    <section className="section-padding bg-white/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-6xl md:text-7xl text-yellow-500 mb-4">
            Our Timeline
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
            Every love story has beautiful milestones. Here's ours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-yellow-400 hidden md:block"></div>

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left"
                  } text-center md:text-left mb-4 md:mb-0`}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-script text-3xl text-purple-600 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-yellow-600 font-semibold mb-3">
                      {milestone.date}
                    </p>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-lg z-10 mb-4 md:mb-0">
                  <Icon className={`${milestone.color} w-8 h-8`} />
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeddingTimeline;
