import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "../constants/productCategories";
import { productDescriptions } from "../constants/productDescriptions";
import { productPhotoCaptions } from "../constants/productPhotoCaptions";
import { productPhotoDescriptions } from "../constants/productPhotoDescriptions";
import { slugify } from "../utils/slugify";
import BrochureModal from "../components/BrochureModal";

const DEFAULT_DESCRIPTION =
  "Engineered to the highest standards of precision, hygiene, and durability, this solution is built for hospitals, pharmaceutical manufacturers, and critical-care facilities that demand uncompromising contamination control.";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProductDetail = () => {
  const { categorySlug, itemSlug } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [brokenPhotos, setBrokenPhotos] = useState({});
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [descriptionIndex, setDescriptionIndex] = useState(null);

  const category = productCategories.find((c) => slugify(c.title) === categorySlug);
  const itemName = category?.items.find((i) => slugify(i) === itemSlug);

  if (!category || !itemName) {
    return (
      <main className="bg-[#0F2942] min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/" className="text-[#00B4D8] font-semibold hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  const file = `/brochures/${categorySlug}/${itemSlug}.pdf`;
  const description = productDescriptions[`${categorySlug}/${itemSlug}`] || DEFAULT_DESCRIPTION;
  // TODO: drop real photos/video at public/products/<category>/<item>/...
  const photos = Array.from({ length: 4 }, (_, i) => `/products/${categorySlug}/${itemSlug}/photo-${i + 1}.jpg`);
  const captions = productPhotoCaptions[`${categorySlug}/${itemSlug}`] || ["Photo 1", "Photo 2", "Photo 3", "Photo 4"];
  const photoDescriptions = productPhotoDescriptions[`${categorySlug}/${itemSlug}`] || captions;
  const video = `/products/${categorySlug}/${itemSlug}/video.mp4`;

  return (
    <main className="bg-[#0F2942]">
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00B4D8]/5 blur-[150px] rounded-full mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-px w-8 bg-[#00B4D8]"></span>
            <span className="text-[#00B4D8] font-bold tracking-widest uppercase text-xs sm:text-sm">
              {category.title}
            </span>
            <span className="h-px w-8 bg-[#00B4D8]"></span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            {itemName}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10"
          >
            {description}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setSelectedItem({ name: itemName, category: category.title, file })}
              className="bg-[#00B4D8] text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm hover:bg-[#0096b4] hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(0,180,216,0.3)]"
            >
              Download Brochure (PDF / PPT)
            </button>
            <Link
              to="/#contact"
              className="bg-transparent text-white border border-gray-400 px-8 py-4 rounded-md font-bold uppercase tracking-wider text-sm hover:border-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Photos & Video */}
      <section className="relative py-16 border-t border-white/[0.05]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Photos &amp; Video</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {photos.map((src, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#13304d] to-[#0a1c2e]"
              >
                <div className="aspect-square">
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
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="block w-full h-full cursor-zoom-in"
                      aria-label={`View larger image: ${captions[idx]}`}
                    >
                      <img
                        src={src}
                        alt={captions[idx]}
                        onError={() => setBrokenPhotos((b) => ({ ...b, [idx]: true }))}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setDescriptionIndex(idx)}
                  className="w-full text-left text-gray-400 hover:text-[#00B4D8] text-xs leading-relaxed px-3 py-2.5 transition-colors"
                >
                  {captions[idx]}
                </button>
              </div>
            ))}
          </div>

          <div className="aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#13304d] to-[#0a1c2e]">
            <video src={video} controls preload="metadata" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Other items in this category */}
      <section className="relative py-16 border-t border-white/[0.05]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
            More in {category.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items
              .filter((i) => i !== itemName)
              .map((i) => (
                <Link
                  key={i}
                  to={`/${categorySlug}/${slugify(i)}`}
                  className="rounded-2xl p-6 bg-white/[0.02] border border-white/5 hover:border-[#00B4D8]/30 transition-all duration-300 text-white font-medium text-sm flex items-center justify-between gap-3"
                >
                  {i}
                  <svg className="w-4 h-4 text-[#00B4D8] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex]}
                alt={captions[lightboxIndex]}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-gray-300 text-sm text-center mt-4">{captions[lightboxIndex]}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Description Popup */}
      <AnimatePresence>
        {descriptionIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setDescriptionIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setDescriptionIndex(null)}
                aria-label="Close"
                className="absolute top-5 right-5 text-gray-400 hover:text-[#0F2942] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="text-[#00B4D8] font-bold tracking-widest uppercase text-xs">Description</span>
              <p className="text-[#0F2942] text-sm font-medium leading-relaxed mt-3">
                {photoDescriptions[descriptionIndex]}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BrochureModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  );
};

export default ProductDetail;
