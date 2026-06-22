import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update state
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-24 right-6 sm:bottom-28 sm:right-8 z-[90]">
          {/* Tooltip */}
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
            <div className="bg-[#0b1e30]/90 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
              Back to top
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0F2942]/80 backdrop-blur-xl border border-[#00B4D8]/30 shadow-[0_0_20px_rgba(0,180,216,0.15)] hover:shadow-[0_0_35px_rgba(0,180,216,0.6)] hover:bg-[#00B4D8] hover:border-[#00B4D8] transition-colors duration-300 focus:outline-none overflow-hidden"
            aria-label="Scroll to top"
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00B4D8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Arrow Icon */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4D8] group-hover:text-white relative z-10 transition-colors duration-300 drop-shadow-md transform group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 15l7-7 7 7"
              />
            </svg>
            
            {/* Second Arrow for continuous animation effect on hover */}
            <svg
              className="absolute w-5 h-5 sm:w-6 sm:h-6 text-white/50 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-2 transition-all duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;