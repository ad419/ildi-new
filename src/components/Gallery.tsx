import { useState, useEffect } from 'react';
import { Language, translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/images/modern_bath_plumbing_1781817895324.jpg';
import img2 from '../assets/images/boiler_inspection_1781817910829.jpg';
import img3 from '../assets/images/radiant_heating_manifold_1781817923047.jpg';
import img4 from '../assets/images/shower_fixtures_1781817934123.jpg';
import img5 from '../assets/images/under_floor_heating_1781817951802.jpg';
import img6 from '../assets/images/clean_water_filtration_1781817963245.jpg';

interface Props {
  language: Language;
}

export function Gallery({ language }: Props) {
  const t = translations[language].gallery;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: img1, alt: t.img1Alt },
    { src: img2, alt: t.img2Alt },
    { src: img3, alt: t.img3Alt },
    { src: img4, alt: t.img4Alt },
    { src: img5, alt: t.img5Alt },
    { src: img6, alt: t.img6Alt },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') setSelectedIndex((selectedIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium mb-6 tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-light max-w-lg leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-[2rem] overflow-hidden bg-gray-800 cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6"
          >
            <button
              onClick={(e) => { e.stopPropagation(); handleClose(); }}
              className="absolute top-6 right-6 z-[60] p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-[60] p-3 md:p-4 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-[60] p-3 md:p-4 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
