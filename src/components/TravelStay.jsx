import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import {
  MapPin,
  Plane,
  Car,
  Hotel,
  Phone,
  Star,
  Train,
  Bus,
  Navigation,
} from "lucide-react";

const TravelStay = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
      type: "Train Station",
      name: "Dhenkanal Railway Station",
      distance: "Starting point",
      options: ["Walk to Bus Stand", "Take Auto Rickshaw"],
      icon: Train,
    },
    {
      type: "Bus Stand",
      name: "Dhenkanal Bus Stand",
      distance: "10 mins walk from station",
      options: ["Bus to Kamakhya", "Local Transport"],
      icon: Bus,
    },
    {
      type: "Landmark",
      name: "Sogar Chowk - Mahatma Gandhi Ausodhiya Aranya SOGAR",
      distance: "Main intersection",
      options: ["Look for Billboard", "Turn Right"],
      icon: Navigation,
    },
  ];

  const routeInstructions = [
    "Start from Dhenkanal Railway Station",
    "Walk to Dhenkanal Bus Stand (2 mins)",
    "Take a bus going to Kamakhya",
    "Get down at Sogar Chowk",
    "Look for Mahatma Gandhi Ausodhiya Aranya SOGAR billboard",
    "Turn right from the billboard",
    "Continue straight for 500 meters",
    "You will reach the wedding venue",
  ];

  return (
    <section
      className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Transportation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
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
                  animate={{ opacity: 1, y: 0 }}
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

        {/* Route Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <h3 className="font-script text-4xl text-purple-600 text-center mb-8">
            Route to Wedding Venue
          </h3>

          {/* Map Image */}
          <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-2 sm:p-4 mb-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex justify-center"
            >
              {/* Map Image */}
              <img
                src="/map.jpeg"
                alt="Route Map to Wedding Venue"
                className="w-full h-auto rounded-xl shadow-2xl object-contain"
                style={{ minHeight: "400px", maxHeight: "700px" }}
              />
            </motion.div>
          </div>

          {/* Route Instructions */}
          <div className="mb-8">
            <h4 className="font-serif text-2xl text-gray-800 mb-6 text-center">
              Step-by-Step Directions
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {routeInstructions.map((instruction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors"
                >
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{instruction}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="text-gray-700 mb-4 space-y-2">
              <p className="font-bold text-lg">Final Destination:</p>
              <p className="text-base">Sogar Park, Dhenkanal</p>
              <p className="text-sm">
                QH65+89, Rainarasinghpur sasan, Kamagarapatana, Odisha 759026
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  // Open Google Maps with the exact location
                  window.open(
                    "https://maps.app.goo.gl/2aTKUBt9P6Qjx27t7",
                    "_blank"
                  );
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
              <button
                onClick={() => {
                  // Copy the address to clipboard
                  const address =
                    "Sogar Park, Dhenkanal\nQH65+89, Rainarasinghpur sasan, Kamagarapatana, Odisha 759026";
                  navigator.clipboard.writeText(address);
                  toast.success("Address copied to clipboard!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Copy Address
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelStay;
  