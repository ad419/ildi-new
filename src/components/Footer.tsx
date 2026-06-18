import { Language, translations } from '../translations';
import { Droplets } from 'lucide-react';

interface Props {
  language: Language;
}

export function Footer({ language }: Props) {
  const currentYear = new Date().getFullYear();
  const t = translations[language].footer;

  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <Droplets className="text-blue-500" />
            {translations[language].hero.title}
          </div>
          
          <div className="text-center md:text-right">
            &copy; {currentYear} {translations[language].hero.title}. {t.rights}<br/>
            {t.developed}
          </div>
        </div>
      </div>
    </footer>
  );
}
