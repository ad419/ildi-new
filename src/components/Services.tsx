import { Language, translations } from '../translations';
import { Droplet, Bath, Thermometer, Clock, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface Props {
  language: Language;
}

export function Services({ language }: Props) {
  const t = translations[language].services;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  const servicesList = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: t.plumbing,
      desc: t.plumbingDesc,
      fullDesc: t.plumbingFull,
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: t.heating,
      desc: t.heatingDesc,
      fullDesc: t.heatingFull,
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: t.renovation,
      desc: t.renovationDesc,
      fullDesc: t.renovationFull,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t.emergency,
      desc: t.emergencyDesc,
      fullDesc: t.emergencyFull,
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gray-900 mb-6 tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 font-light max-w-lg leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setSelectedService(index)}
              className={`p-8 rounded-[2rem] transition-all duration-300 border cursor-pointer select-none ${
                hoveredIdx === index 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-2xl scale-[1.02]' 
                  : 'bg-gray-50 text-gray-900 border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
                hoveredIdx === index ? 'bg-white/10 text-white' : 'bg-white text-gray-900 shadow-sm'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-display font-medium mb-4 tracking-tight">
                {service.title}
              </h3>
              
              <p className={`font-light leading-relaxed mb-8 ${hoveredIdx === index ? 'text-gray-300' : 'text-gray-500'}`}>
                {service.desc}
              </p>

              <div className={`mt-auto flex items-center gap-2 text-sm font-medium transition-colors ${
                hoveredIdx === index ? 'text-white' : 'text-gray-400'
              }`}>
                {language === 'it' ? 'Scopri' : 'Discover'} 
                <ArrowRight size={16} className={`transition-transform ${hoveredIdx === index ? 'translate-x-1' : ''}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 sm:p-12">
                 <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
                   {servicesList[selectedService].icon}
                 </div>
                 <h3 className="text-3xl sm:text-4xl font-display font-medium text-gray-900 mb-6 tracking-tight">
                   {servicesList[selectedService].title}
                 </h3>
                 <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                   {servicesList[selectedService].fullDesc}
                 </p>
                 
                 <a 
                   href="#contact"
                   onClick={() => setSelectedService(null)}
                   className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all active:scale-95 text-lg w-full sm:w-auto"
                 >
                   {translations[language].hero.cta}
                 </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
