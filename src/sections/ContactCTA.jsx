import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "9015055777";
const CONSULTATION_MESSAGE =
  "Hello! I would like to schedule a consultation regarding cleanroom infrastructure for my facility.";

const ContactCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Apple-style premium easing
      },
    },
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#0F2942] overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050f1a] via-[#0F2942] to-[#0a1c2e]" />
        
        {/* Animated glowing orbs */}
        <div className="animate-glow-pulse-c absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#00B4D8] rounded-full blur-[150px] mix-blend-screen" />
        <div className="animate-glow-pulse-d absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00B4D8] rounded-full blur-[180px] mix-blend-screen" />

        {/* Technical dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl p-8 sm:p-12 md:p-16 text-center"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#00B4D8]/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20 text-[#00B4D8] text-xs sm:text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,180,216,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] mr-2 animate-pulse" />
                Partner With Experts
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
            >
              Ready To Build Your{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-blue-200">
                Cleanroom Infrastructure?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
            >
              Connect with our engineering specialists today. We deliver turn-key, contamination-free modular solutions tailored to your facility's exact specifications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              {/* Primary Button */}
              <Link
                to="/#contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#0096b4] overflow-hidden shadow-[0_0_30px_rgba(0,180,216,0.3)] hover:shadow-[0_0_40px_rgba(0,180,216,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 flex items-center">
                  Get A Quote
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>

              {/* Secondary Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONSULTATION_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white uppercase tracking-wider rounded-xl bg-transparent border border-white/20 hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400 group-hover:text-[#00B4D8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Consultation
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;