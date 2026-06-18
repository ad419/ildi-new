import { Language, translations } from '../translations';
import { LanguageToggle } from './LanguageToggle';
import { Menu, X, Droplets } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Navbar({ language, setLanguage }: Props) {
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#', label: t.home },
    { href: '#services', label: t.services },
    { href: '#about', label: t.about },
    { href: '#gallery', label: t.gallery },
    { href: '#contact', label: t.contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-2 sm:py-3' 
        : 'py-3 sm:py-5'
    }`}>
      <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 transition-all duration-300 ${isScrolled ? 'px-3 sm:px-4' : ''}`}>
        <div className={`relative flex items-center justify-between rounded-[2rem] px-5 sm:px-6 py-3 sm:py-4 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100' : 'bg-transparent'
        }`}>
          <a href="#" className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter text-gray-900 z-10 flex-shrink-0">
            <Droplets className="text-blue-600" />
            <span className="truncate">Ildi<span className="font-light text-gray-500">{language === 'it' ? 'Idraulico' : 'Hidraulik'}</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8 bg-gray-50/80 rounded-full px-6 py-2.5 border border-transparent hover:border-gray-100 transition-colors">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              <a href="#contact" className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-transform active:scale-95 shadow-sm">
                {t.contact}
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 lg:hidden z-10">
            <div className="hidden sm:block">
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-gray-900 bg-gray-50/80 hover:bg-gray-100 transition-colors rounded-full"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-[100%] left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-6 py-4 rounded-2xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="p-4 pt-2 border-t border-gray-50 sm:hidden">
               <p className="text-xs font-medium text-gray-400 mb-3 px-2 uppercase tracking-wider">
                 {t.languagePicker}
               </p>
               <div className="flex gap-2 mb-4">
                 <button 
                   onClick={() => setLanguage('it')} 
                   className={`flex-1 py-3 px-4 rounded-2xl text-sm font-medium transition-colors ${language === 'it' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}
                 >
                   Italiano
                 </button>
                 <button 
                   onClick={() => setLanguage('sq')} 
                   className={`flex-1 py-3 px-4 rounded-2xl text-sm font-medium transition-colors ${language === 'sq' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'}`}
                 >
                   Shqip
                 </button>
               </div>
            </div>

            <div className="p-4 pt-2 border-t border-gray-50">
               <a 
                 href="#contact" 
                 onClick={() => setMobileMenuOpen(false)} 
                 className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white rounded-2xl font-medium w-full text-base transition-transform active:scale-95 shadow-sm"
               >
                 {t.contact}
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
