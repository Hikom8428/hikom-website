import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    {
      name: "Apex Healthcare",
      logo: (
        <svg className="h-8 w-auto text-gray-400 group-hover:text-[#00B4D8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v4m-2-2h4" />
        </svg>
      ),
    },
    {
      name: "BioGen Labs",
      logo: (
        <svg className="h-8 w-auto text-gray-400 group-hover:text-[#00B4D8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      name: "MedTech Systems",
      logo: (
        <svg className="h-8 w-auto text-gray-400 group-hover:text-[#00B4D8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      name: "Zenith Pharma",
      logo: (
        <svg className="h-8 w-auto text-gray-400 group-hover:text-[#00B4D8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.341A2 2 0 0019 15.228l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      ),
    },
    {
      name: "Quantum Research",
      logo: (
        <svg className="h-8 w-auto text-gray-400 group-hover:text-[#00B4D8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
    },
    {
      name: "Prime Hospitals",
      logo: (
        <svg className="h-8 w-auto text-gray-400 group-hover:text-[#00B4D8] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="relative py-20 bg-[#0F2942] overflow-hidden border-y border-white/[0.02]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00B4D8]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="h-px w-6 bg-[#00B4D8]"></span>
          <span className="text-[#00B4D8] font-bold tracking-widest uppercase text-xs">
            Trusted Partners
          </span>
          <span className="h-px w-6 bg-[#00B4D8]"></span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl font-extrabold text-white tracking-tight"
        >
          Powering Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-blue-200">Leaders</span>
        </motion.h2>
      </div>

      {/* Infinite Slider Container */}
      <div className="relative z-10 max-w-screen-2xl mx-auto overflow-hidden">
        
        {/* Left and Right Gradient Masks for smooth fading */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0F2942] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0F2942] to-transparent z-20 pointer-events-none" />

        {/* Sliding Track */}
        <div className="animate-marquee flex w-max">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-64 px-8"
            >
              <div className="group relative w-full h-24 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-[#00B4D8]/30 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 flex items-center justify-center px-6 cursor-default">
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00B4D8]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex flex-col items-center gap-2 relative z-10">
                  {client.logo}
                  <span className="text-gray-400 text-sm font-semibold tracking-wide group-hover:text-white transition-colors duration-300">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;