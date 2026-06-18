import { Language, translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  language: Language;
}

export function FAQ({ language }: Props) {
  const t = translations[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-medium text-gray-900 mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-lg sm:text-xl font-medium text-gray-900 pr-8">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-gray-500 font-light leading-relaxed border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
