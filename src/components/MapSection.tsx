import { Language, translations } from '../translations';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  language: Language;
}

export function MapSection({ language }: Props) {
  const t = translations[language].map;
  const address = translations[language].contact.addressValue;
  
  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
  };

  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-medium text-gray-900 mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200"
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
          
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-[calc(100%-2rem)] sm:max-w-xs bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-start gap-3 mb-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-display font-medium text-gray-900 mb-1">{translations[language].hero.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-snug">{address}</p>
              </div>
            </div>
            <button 
              onClick={handleGetDirections}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-medium transition-colors"
            >
              {t.getDirections}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
