import { Language, translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Props {
  language: Language;
}

export function Testimonials({ language }: Props) {
  const t = translations[language].testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { text: t.r1, name: t.n1, role: t.role1 },
    { text: t.r2, name: t.n2, role: t.role2 },
    { text: t.r3, name: t.n3, role: t.role3 },
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, [reviews.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-900 border-t border-gray-800 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdib3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4PGc+PHBhdGggZD0iTTU0LjYyNyAzLjM3M2E1IDUgMCAwIDEgMCA3LjA3MWwtNDUuMjU1IDQ1LjI1NWE1IDUgMCAxIDEtNy4wNzEtNy4wNzFsNDUuMjU1LTQ1LjI1NWE1IDUgMCAwIDEgNy4wNzEgMHptLTI4LjI4NCAwbC0yMC4yIDMy4ydGE1IDUgMCAxIDAtNy4wNzEgNy4wNzFsMjcuMjc1LTI3LjI3N2E1IDUgMCAwIDAgMC03LjA3MXoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+')] opacity-50 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-medium mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-20">
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative h-[300px] sm:h-[250px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 sm:px-16"
              >
                <Quote className="text-blue-500 mb-6 opacity-50" size={48} />
                <p className="text-xl sm:text-3xl font-light text-gray-100 mb-8 leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
                <div>
                  <div className="font-display font-medium text-lg text-white mb-1">
                    {reviews[currentIndex].name}
                  </div>
                  <div className="text-gray-400 font-light text-sm">
                    {reviews[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  currentIndex === idx ? 'bg-blue-500 w-8' : 'bg-gray-700 w-2 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
