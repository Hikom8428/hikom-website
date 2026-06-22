import { useState } from "react";
import { motion } from "framer-motion";
import { productCategories } from "../constants/productCategories";
import BrochureModal from "../components/BrochureModal";
import { slugify } from "../utils/slugify";

// TODO: drop real photos at public/media/gallery/photo-1.jpg ... photo-8.jpg
const galleryPhotos = Array.from({ length: 8 }, (_, i) => `/media/gallery/photo-${i + 1}.jpg`);

// TODO: replace with real video files at the same paths once available
const galleryVideos = [
  { title: "Factory Walkthrough", src: "/media/gallery/video-1.mp4" },
  { title: "Cleanroom Installation", src: "/media/gallery/video-2.mp4" },
  { title: "Product Showcase", src: "/media/gallery/video-3.mp4" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Media = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [brokenPhotos, setBrokenPhotos] = useState({});

  return (
    <main className="bg-[#0F2942]">
      {/* Page Header */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00B4D8]/5 blur-[150px] rounded-full mix-blend-screen" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#00B4D8]"></span>
            <span className="text-[#00B4D8] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Media &amp; Resources
            </span>
            <span className="h-px w-8 bg-[#00B4D8]"></span>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Gallery &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-blue-200">
              Product Brochures
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Gallery: Pictures */}
      <section className="relative py-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Pictures</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryPhotos.map((src, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#13304d] to-[#0a1c2e]"
              >
                {brokenPhotos[idx] ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#00B4D8]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                ) : (
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="800"
                    onError={() => setBrokenPhotos((b) => ({ ...b, [idx]: true }))}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery: Videos */}
      <section className="relative py-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((video, idx) => (
              <div
                key={idx}
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#13304d] to-[#0a1c2e]"
              >
                <video src={video.src} controls preload="metadata" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-4 text-white text-sm font-semibold drop-shadow pointer-events-none">
                  {video.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Categories */}
      {productCategories.map((category) => (
        <section key={category.title} className="relative py-12 border-t border-white/[0.05]">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((itemName) => {
                const file = `/brochures/${slugify(category.title)}/${slugify(itemName)}.pdf`;
                return (
                  <div
                    key={itemName}
                    className="rounded-2xl p-6 bg-white/[0.02] border border-white/5 hover:border-[#00B4D8]/30 transition-all duration-300 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-[#00B4D8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                        />
                      </svg>
                      <span className="text-white font-medium text-sm">{itemName}</span>
                    </div>
                    <button
                      onClick={() => setSelectedItem({ name: itemName, category: category.title, file })}
                      className="flex-shrink-0 text-[#00B4D8] hover:text-white text-xs font-bold uppercase tracking-wide border border-[#00B4D8]/40 hover:bg-[#00B4D8] rounded-md px-3 py-2 transition-colors"
                    >
                      PDF / PPT
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <BrochureModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  );
};

export default Media;
