import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Play, Heart } from "lucide-react";
import Masonry from "react-masonry-css";

const Gallery = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState("all");

  // Sample gallery items - replace with actual photos
  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400",
      category: "engagement",
      alt: "Engagement Photo 1",
    },
    {
      id: 2,
      type: "image",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
      category: "prewedding",
      alt: "Pre-wedding Photo 1",
    },
    {
      id: 3,
      type: "image",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      category: "engagement",
      alt: "Engagement Photo 2",
    },
    {
      id: 4,
      type: "video",
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      category: "prewedding",
      alt: "Pre-wedding Video",
      thumbnail:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
    },
    {
      id: 5,
      type: "image",
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400",
      category: "couple",
      alt: "Couple Photo 1",
    },
    {
      id: 6,
      type: "image",
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400",
      category: "engagement",
      alt: "Engagement Photo 3",
    },
    {
      id: 7,
      type: "image",
      src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=400",
      category: "couple",
      alt: "Couple Photo 2",
    },
    {
      id: 8,
      type: "image",
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400",
      category: "prewedding",
      alt: "Pre-wedding Photo 2",
    },
  ];

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "engagement", label: "Engagement" },
    { id: "prewedding", label: "Pre-Wedding" },
    { id: "couple", label: "Couple Shots" },
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
