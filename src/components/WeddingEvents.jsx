import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, MapPin, Plus } from "lucide-react";

const WeddingEvents = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Haldi Ceremony",
      date: "November 22, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "Ipsita's Family Home",
      address: "Sogar Park, Dhenkanal",
      description:
        "A traditional ceremony where turmeric paste is applied for blessing and purification.",
      dress: "Yellow & Orange Traditional Wear",
      color: "wedding-gold",
      emoji: "🌼",
      details: [
        "Traditional turmeric ceremony",
        "Family blessings and rituals",
        "Photography session",
        "Light refreshments",
      ],
    },
    {
      id: 2,
      title: "Mehendi Night",
      date: "November 22, 2025",
      time: "6:00 PM - 10:00 PM",
      venue: "Sogar Park, Dhenkanal",
      address: "Sogar Park, Dhenkanal",
      description:
        "An evening of intricate henna designs, music, and celebration with close family and friends.",
      dress: "Green & Pink Traditional Wear",
      color: "wedding-sage",
      emoji: "🎨",
      details: [
        "Professional mehendi artists",
        "Live music and dance",
        "Traditional games",
        "Dinner and sweets",
      ],
    },
    {
      id: 3,
      title: "Wedding Ceremony",
      date: "November 23, 2025",
      time: "12:00 PM - 6:00 PM",
      venue: "Sogar Park, Dhenkanal",
      address: "Sogar Park, Dhenkanal",
      description:
        "The sacred union ceremony where two souls become one in the presence of family and friends.",
      dress: "Traditional Wedding Attire",
      color: "wedding-rose",
      emoji: "💒",
      details: [
        "Sacred wedding rituals",
        "Exchange of vows",
        "Ring ceremony",
        "Family blessings",
      ],
    },
    {
      id: 4,
      title: "Reception Party",
      date: "November 23, 2025",
      time: "8:30 PM - 12:00 AM",
      venue: "Bhubaneswar Banquet Hall",
      address: "789 Royal Road, Mumbai",
      description:
        "A grand celebration with dinner, dancing, and unforgettable memories.",
      dress: "Cocktail & Party Wear",
      color: "wedding-blush",
      emoji: "🎉",
      details: [
        "Cocktail hour",
        "Multi-cuisine dinner",
        "Live band performance",
        "Dancing till midnight",
      ],
    },
  ];

  const addToCalendar = (event) => {
    const startDate = new Date(`${event.date} ${event.time.split(" - ")[0]}`);
    const endDate = new Date(`${event.date} ${event.time.split(" - ")[1]}`);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${
      endDate.toISOString().replace(/[-:]/g, "").split(".")[0]
    }Z&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.address)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <section
      className="section-padding bg-gradient-to-br from-wedding-cream to-wedding-peach/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-6xl md:text-7xl text-wedding-gold mb-4">
            Wedding Events
          </h2>
          <div className="w-24 h-1 bg-wedding-gold mx-auto mb-6"></div>
          <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for multiple days of celebration, tradition, and joy as we
            embark on our journey together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative h-full glass-effect rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-${event.color}/20 rounded-full -translate-y-12 translate-x-12`}
                ></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-4 text-center">{event.emoji}</div>

                  <h3 className="font-script text-3xl text-wedding-dusty text-center mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3 text-wedding-gold" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-3 text-wedding-gold" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 text-wedding-gold flex-shrink-0" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCalendar(event);
                      }}
                      className="flex-1 bg-wedding-gold/20 hover:bg-wedding-gold hover:text-white text-wedding-dusty px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                    >
                      Add to Calendar
                    </button>
                    <button className="p-2 bg-wedding-blush/20 hover:bg-wedding-blush hover:text-white text-wedding-dusty rounded-full transition-all duration-300">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <div className="text-8xl mb-4">{selectedEvent.emoji}</div>
                  <h3 className="font-elegant text-4xl text-wedding-gold mb-2">
                    {selectedEvent.title}
                  </h3>
                  <p className="text-wedding-dusty font-medium">
                    {selectedEvent.dress}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-serif text-lg font-semibold mb-3">
                      Event Details
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-wedding-gold" />
                        <span className="text-sm">{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-wedding-gold" />
                        <span className="text-sm">{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 mt-0.5 text-wedding-gold" />
                        <div className="text-sm">
                          <div>{selectedEvent.venue}</div>
                          <div className="text-gray-500">
                            {selectedEvent.address}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-semibold mb-3">
                      What to Expect
                    </h4>
                    <ul className="space-y-1">
                      {selectedEvent.details.map((detail, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <span className="w-2 h-2 bg-wedding-gold rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => addToCalendar(selectedEvent)}
                    className="flex-1 bg-wedding-gold hover:bg-wedding-dusty text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Add to Calendar
                  </button>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WeddingEvents;
