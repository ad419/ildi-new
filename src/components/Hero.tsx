import { Language, translations } from '../translations';
import { motion } from 'motion/react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_plumbing_1781818133085.jpg';

interface Props {
  language: Language;
}

export function Hero({ language }: Props) {
  const t = translations[language].hero;

  return (
    <section className="relative flex pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-[#fafafa]">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative z-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[55%] flex flex-col justify-center pt-8 lg:pt-0"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6 lg:mb-8 w-fit shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {language === 'it' ? 'Pronto Intervento 24/7' : '24/7 Emergency Service'}
          </div>
          
          <h1 className="text-[2.75rem] leading-[1.1] sm:text-[4rem] md:text-5xl lg:text-[5rem] xl:text-[5.5rem] font-display font-medium text-gray-900 mb-6 lg:mb-8 tracking-tighter">
            {t.title}
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-6 lg:mb-8 leading-relaxed max-w-2xl font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col gap-3 mb-8 lg:mb-10 text-gray-500 text-sm sm:text-base font-light">
             <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0"/> {language === 'it' ? 'Interventi rapidi in tutta la zona' : 'Ndërhyrje të shpejta në të gjithë zonën'}</div>
             <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0"/> {language === 'it' ? 'Preventivi trasparenti senza sorprese' : 'Oferta transparente pa surpriza'}</div>
             <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-blue-500 flex-shrink-0"/> {language === 'it' ? 'Team certificato con anni di esperienza' : 'Ekip i certifikuar me vite përvojë'}</div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-medium transition-all active:scale-95 text-lg"
            >
              <Phone size={20} />
              {t.cta}
            </a>
            <a 
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-900 rounded-full font-medium transition-all active:scale-95 text-lg"
            >
              {t.ctaSecondary}
              <ArrowRight size={20} className="text-gray-400" />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] relative h-[400px] sm:h-[500px] lg:h-[700px] mt-4 lg:mt-0"
        >
          <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Modern plumbing" 
              className="w-full h-full object-cover object-center will-change-transform"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[200px] hidden md:block">
            <div className="text-4xl font-display font-bold text-blue-600 mb-1">10k+</div>
            <div className="text-sm font-medium text-gray-500 leading-tight">
              {language === 'it' ? 'Clienti soddisfatti nella tua zona' : 'Happy customers in your area'}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
