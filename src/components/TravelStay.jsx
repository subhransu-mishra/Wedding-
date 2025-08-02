import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Plane, Car, Hotel, Phone, Star } from "lucide-react";

const TravelStay = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const hotels = [
    {
      name: "Grand Palace Hotel",
      rating: 5,
      distance: "2 mins from venue",
      price: "$150/night",
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
      phone: "+1 234 567 8901",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    },
    {
      name: "Boutique Garden Inn",
      rating: 4,
      distance: "5 mins from venue",
      price: "$120/night",
      amenities: ["Free WiFi", "Garden View", "Breakfast"],
      phone: "+1 234 567 8902",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
    },
    {
      name: "Modern City Suites",
      rating: 4,
      distance: "10 mins from venue",
      price: "$100/night",
      amenities: ["Free WiFi", "Gym", "Business Center"],
      phone: "+1 234 567 8903",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
    },
  ];

  const transportation = [
    {
      type: "Airport",
      name: "Mumbai International Airport",
      distance: "45 mins by car",
      options: ["Taxi", "Uber/Ola", "Airport Shuttle"],
      icon: Plane,
    },
    {
      type: "Train Station",
      name: "Mumbai Central Station",
      distance: "20 mins by car",
      options: ["Taxi", "Local Bus", "Metro"],
      icon: Car,
    },
    {
      type: "Local Transport",
      name: "Around the City",
      distance: "Convenient access",
      options: ["Local Taxi", "Auto Rickshaw", "Metro"],
      icon: MapPin,
    },
  ];

  return (
    <section
      className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-elegant text-6xl md:text-7xl text-yellow-500 mb-4">
            Travel & Stay
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
            Make your journey comfortable with our recommended accommodations
            and travel information.
          </p>
        </motion.div>

        {/* Hotel Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-script text-4xl text-purple-600 text-center mb-12">
            Recommended Hotels
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-serif text-xl text-gray-800 mb-2">
                    {hotel.name}
                  </h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-purple-600 font-medium">
                      {hotel.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {hotel.distance}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-medium transition-colors">
                      Book Now
                    </button>
                    <a
                      href={`tel:${hotel.phone}`}
                      className="p-2 border border-purple-300 hover:bg-purple-50 rounded-full transition-colors"
                    >
                      <Phone className="w-4 h-4 text-purple-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transportation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-script text-4xl text-purple-600 text-center mb-12">
            Getting There
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {transportation.map((transport, index) => {
              const Icon = transport.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="font-serif text-lg text-gray-800 mb-2">
                    {transport.type}
                  </h4>
                  <h5 className="font-medium text-purple-600 mb-2">
                    {transport.name}
                  </h5>
                  <p className="text-sm text-gray-600 mb-4">
                    {transport.distance}
                  </p>

                  <div className="space-y-2">
                    {transport.options.map((option, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <h3 className="font-script text-4xl text-purple-600 text-center mb-8">
            Venue Location
          </h3>

          <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Interactive Map</p>
              <p className="text-sm text-gray-400">
                Grand Palace Resort, Mumbai
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> 789 Royal Road, Mumbai, Maharashtra
              400001
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Get Directions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelStay;
