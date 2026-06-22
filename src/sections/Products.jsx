// src/sections/Products.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Products = React.memo(() => {
  const [brokenImages, setBrokenImages] = useState({});
  const products = [
    {
      title: "Fire Rated Door",
      description: "Engineered to compartmentalize fire and smoke, ensuring maximum safety and compliance with international fire safety standards.",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Anti Radiation Door",
      description: "Specialized lead-lined doors providing absolute protection against X-ray and harmful radiation in medical and industrial facilities.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Medical OT Door",
      description: "Hermetically sealed doors designed specifically for operating theaters, intensive care units, and sterile hospital environments.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Clean Room Door",
      description: "Flush-surfaced, contamination-free modular doors built to maintain rigorous hygiene standards in pharmaceutical and lab environments.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Sliding Door",
      description: "Space-saving, automated sliding solutions designed for high-traffic zones requiring smooth, silent, and reliable operation.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Hinged Door",
      description: "Robust, heavy-duty hinged doors engineered for maximum durability and seamless integration in demanding industrial facilities.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Insulated Panels",
      description: "High-performance modular sandwich panels providing superior thermal insulation and structural integrity for modern cleanrooms.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section id="products" className="relative py-24 bg-[#0F2942] overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00B4D8]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#00B4D8]"></span>
            <span className="text-[#00B4D8] font-bold tracking-widest uppercase text-sm">
              Premium Solutions
            </span>
            <span className="h-px w-8 bg-[#00B4D8]"></span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Our Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-blue-200">Catalog</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg font-light leading-relaxed"
          >
            Discover our comprehensive range of high-performance doors and modular panels, 
            engineered for absolute precision, hygiene, and durability in critical environments.
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-[#13304d] border border-white/5 hover:border-[#00B4D8]/30 rounded-2xl transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_15px_40px_rgba(0,180,216,0.15)] flex flex-col h-full"
            >
              {/* Premium Image Header with Hover Zoom */}
              <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-[#13304d] to-[#0a1c2e]">
                <div className="absolute inset-0 bg-[#0F2942]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                {!brokenImages[index] && (
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    decoding="async"
                    onError={() => setBrokenImages((b) => ({ ...b, [index]: true }))}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                )}
                {/* Bottom gradient fade into card */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#13304d] to-transparent z-10" />
              </div>

              <div className="relative z-20 flex-grow p-6 pt-2">
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00B4D8] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="relative z-20 mt-auto p-6 pt-0 border-t border-transparent group-hover:border-white/5 transition-colors duration-300">
                <a
                  href={`#${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-[#00B4D8] font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
Products.displayName = "Products";

export default Products;