import { Language, translations } from '../translations';
import { Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function LanguageToggle({ language, setLanguage }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-current opacity-80 hover:opacity-100 transition-opacity text-sm font-medium"
      >
        <Globe size={16} />
        <span className="uppercase">{language}</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100"
          >
            <button
              onClick={() => { setLanguage('it'); setIsOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 flex items-center gap-2 ${language === 'it' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
            >
              🇮🇹 Italiano
            </button>
            <button
              onClick={() => { setLanguage('sq'); setIsOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 flex items-center gap-2 border-t border-gray-100 ${language === 'sq' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
            >
              🇦🇱 Shqip
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
