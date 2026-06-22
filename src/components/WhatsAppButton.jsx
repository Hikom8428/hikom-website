import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = ({ 
  phoneNumber = "9015055777", // Replace with actual number including country code (no + or spaces)
  message = "Hello! I would like to know more about your premium cleanroom solutions." 
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex flex-col items-end">
      
      {/* Optional Hover Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-[#0b1e30]/90 backdrop-blur-md border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap">
          Chat with our experts
        </div>
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing Outer Glow / Rings */}
        <div className="animate-ping-ring-a absolute inset-0 rounded-full bg-[#25D366] pointer-events-none" />
        <div className="animate-ping-ring-b absolute inset-0 rounded-full bg-[#25D366] pointer-events-none" />

        {/* Premium Glassmorphic Button Core */}
        <div className="relative z-10 w-full h-full rounded-full bg-white/[0.05] border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors duration-300 overflow-hidden">
          
          {/* Subtle Inner Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#25D366]/20 to-transparent opacity-50" />

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:text-[#25D366] transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] relative z-20"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 0C5.394 0 .01 5.385.01 12.022c0 2.122.553 4.192 1.603 6.012L.01 24l6.113-1.603c1.763.957 3.743 1.464 5.908 1.464 6.637 0 12.022-5.385 12.022-12.022S18.668 0 12.031 0zm0 21.848c-1.782 0-3.528-.48-5.061-1.388l-.363-.214-3.766.988.998-3.673-.235-.374a9.98 9.98 0 01-1.523-5.352c0-5.526 4.498-10.023 10.024-10.023 5.526 0 10.023 4.497 10.023 10.023s-4.497 10.013-10.097 10.013zm5.5-7.518c-.302-.151-1.787-.882-2.063-.983-.277-.101-.479-.151-.681.151-.202.302-.782.983-.958 1.184-.176.202-.353.227-.655.076-.302-.151-1.275-.471-2.428-1.501-.897-.803-1.503-1.794-1.68-2.096-.176-.302-.019-.465.132-.616.136-.136.302-.353.453-.529.151-.176.202-.302.302-.504.101-.202.05-.378-.025-.529-.076-.151-.681-1.642-.932-2.247-.245-.591-.495-.51-.681-.519-.176-.008-.378-.008-.58-.008-.202 0-.529.076-.807.378-.277.302-1.059 1.034-1.059 2.521 0 1.487 1.084 2.924 1.235 3.126.151.202 2.132 3.253 5.166 4.56.721.31 1.284.495 1.724.634.723.23 1.382.197 1.902.12.584-.087 1.787-.731 2.039-1.437.252-.706.252-1.311.176-1.437-.076-.126-.277-.202-.58-.353z" />
          </svg>
        </div>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;