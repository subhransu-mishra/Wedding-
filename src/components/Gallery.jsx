import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Play, Heart, ChevronDown, ExternalLink } from "lucide-react";
import Masonry from "react-masonry-css";

const Gallery = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Gallery items using your actual images
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/img11.JPG",
      category: "engagement",
      alt: "Engagement Photo 1",
    },
    {
      id: 2,
      type: "image",
      src: "/img10.JPG",
      category: "engagement",
      alt: "Engagement Photo 2",
    },
    {
      id: 3,
      type: "image",
      src: "/img6.JPG",
      category: "engagement",
      alt: "Engagement Photo 3",
    },
    {
      id: 4,
      type: "image",
      src: "/img5.JPG",
      category: "engagement",
      alt: "Engagement Photo 4",
    },
    {
      id: 11,
      type: "image",
      src: "/img15.JPG",
      category: "engagement",
      alt: "Engagement Photo 4",
    },

    {
      id: 13,
      type: "image",
      src: "/img17.JPG",
      category: "engagement",
      alt: "Engagement Photo 4",
    },
    {
      id: 13,
      type: "image",
      src: "/img18.JPG",
      category: "engagement",
      alt: "Engagement Photo 4",
    },
    {
      id: 12,
      type: "image",
      src: "/img14.JPG",
      category: "engagement",
      alt: "Engagement Photo 4",
    },
    {
      id: 5,
      type: "image",
      src: "/img7.JPG",
      category: "couple",
      alt: "Couple Photo 1",
    },

    {
      id: 6,
      type: "image",
      src: "/img2.JPG",
      category: "couple",
      alt: "Couple Photo 2",
    },
    {
      id: 7,
      type: "image",
      src: "/img3.JPG",
      category: "couple",
      alt: "Couple Photo 3",
    },
    {
      id: 8,
      type: "image",
      src: "/img8.JPG",
      category: "couple",
      alt: "Couple Photo 4",
    },
    {
      id: 9,
      type: "image",
      src: "/img1.JPG",
      category: "couple",
      alt: "Couple Photo 5",
    },
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "engagement", label: "Engagement" },
    { id: "couple", label: "Couple Shots" },
  ];

  // Drive links for different ceremonies
  const driveLinks = [
    {
      id: "ring-ceremony",
      label: "Ring Ceremony",
      url: "https://drive.google.com/drive/u/0/mobile/folders/1Jd2SOIXw0gP9CalKsrmWJnOLwaF2Tce2", // Replace with actual link
    },
    {
      id: "prewedding",
      label: "Pre Wedding",
      url: "", // Replace with actual link
    },
    {
      id: "wedding",
      label: "Wedding",
      url: "", // Replace with actual link
    },
    {
      id: "haldi-mehndi",
      label: "Haldi & Mehndi",
      url: "", // Replace with actual link
    },

    {
      id: "reception",
      label: "Reception",
      url: "", // Replace with actual link
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section
      className="section-padding bg-gradient-to-br from-pink-50 to-purple-50"
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
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="font-serif text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing the beautiful moments of our journey together in pictures
            and memories.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-yellow-500 text-white shadow-lg"
                  : "bg-white/70 text-gray-600 hover:bg-yellow-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedMedia(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.type === "video" ? item.thumbnail : item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-medium capitalize">
                          {item.category}
                        </span>
                        <Heart className="text-pink-400 w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-purple-600 w-8 h-8 ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        {/* View All Images Button with Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <span>View All Images</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                >
                  {driveLinks.map((link, index) => (
                    <motion.a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors duration-200 group"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="font-medium text-gray-800 group-hover:text-yellow-600 transition-colors">
                        {link.label}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[90vh] rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-medium capitalize mb-1">
                      {selectedMedia.category}
                    </h3>
                    <p className="text-sm text-gray-300">{selectedMedia.alt}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
