import React from "react";
import { motion } from "framer-motion";
import { Heart, Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/ipsita__mishra/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/ipsita.mishra.395891",
      label: "Facebook",
    },

    { icon: Mail, href: "mailto:mipsita955@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-br from-wedding-primary via-wedding-dusty to-wedding-primary text-white relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              rotate: 0,
            }}
            animate={{
              y: -100,
              rotate: 360,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          >
            <Heart size={Math.random() * 15 + 10} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="font-elegant text-6xl md:text-8xl text-transparent bg-gradient-to-r from-wedding-secondary to-wedding-accent bg-clip-text mb-4">
              Ipsita & Jayant
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-wedding-accent to-wedding-secondary mx-auto mb-6"></div>
            <p className="font-script text-2xl md:text-3xl text-wedding-secondary mb-4">
              November 23, 2025
            </p>
            <p className="text-lg text-wedding-blush">
              Thank you for being part of our love story
            </p>
          </motion.div>

          {/* Wedding Hashtag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
              <span className="text-2xl md:text-3xl font-script text-wedding-accent">
                #IpsitaJayantForever
              </span>
              <motion.div
                className="inline-block ml-2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-purple-200 mb-6">Follow our journey</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5 text-pink-200" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12"
          >
            <div className="text-center">
              <h3 className="font-serif text-lg text-wedding-secondary mb-2">
                For Questions
              </h3>
              <p className="text-wedding-blush">Ipsita: +91 8248719892</p>
              <p className="text-wedding-blush">Jayant: +91 7737181699</p>
              <ul>
                Others:
                <li className="text-wedding-blush">+91 7008207704 </li>
                <li className="text-wedding-blush">+91 7749054590 </li>
                <li className="text-wedding-blush">+91 7681021260 </li>
                <li className="text-wedding-blush">+91 9437729690 </li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-wedding-secondary mb-2">
                Email Us
              </h3>
              <a
                href="mailto:mipsita955@gmail.com"
                className="text-wedding-blush hover:text-wedding-secondary transition-colors"
              >
                mipsita955@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-wedding-blush text-sm">
              © 2025 Ipsita & Jayant Wedding. Made with{" "}
              <Heart className="inline w-4 h-4 text-wedding-accent fill-current" />{" "}
              for our special day.
            </p>
            <div className="flex gap-6 text-sm text-purple-200">
              <a href="#" className="hover:text-pink-200 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-pink-200 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 pt-0 "
          >
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-base font-medium">
                <span className="text-gray-200">Developed by</span>
                <a
                  href="https://subhransu.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-2 underline-offset-2 hover:text-red-400 hover:decoration-red-400 transition-all duration-300 flex items-center gap-2 font-semibold"
                >
                  Subhransu
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-wedding-accent via-wedding-secondary to-wedding-accent"></div>
    </footer>
  );
};

export default Footer;
