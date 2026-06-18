import { Language, translations } from '../translations';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

interface Props {
  language: Language;
}

export function Contact({ language }: Props) {
  const t = translations[language].contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contacts = [
    { icon: <Phone size={20} />, title: t.phone, value: t.phoneValue, link: "tel:+393331234567" },
    { icon: <Mail size={20} />, title: t.email, value: t.emailValue, link: "mailto:info@ildiidraulico.it" },
    { icon: <MapPin size={20} />, title: t.address, value: t.addressValue, link: "#" },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gray-900 mb-8 tracking-tight">
              {t.title}
            </h2>
            <p className="text-xl text-gray-500 mb-12 font-light max-w-lg leading-relaxed">
              {t.subtitle}
            </p>

            <div className="space-y-6">
              {contacts.map((item, i) => (
                <div key={i} className="flex items-center gap-6 group hover:bg-gray-50 p-4 -ml-4 rounded-2xl transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 flex-shrink-0 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-gray-900 text-lg mb-1 tracking-tight">{item.title}</h4>
                    <a href={item.link} className="text-gray-500 font-light hover:text-blue-600 transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#fafafa] p-8 sm:p-12 rounded-[2.5rem]"
          >
            {showSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-medium text-gray-900 tracking-tight">
                  {t.successTitle}
                </h3>
                <p className="text-gray-500 text-lg font-light max-w-sm">
                  {t.successDesc}
                </p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="mt-8 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-medium transition-colors"
                >
                  {t.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3 ml-1">{t.name}</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    minLength={2}
                    className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-gray-900 focus:outline-none bg-white shadow-sm transition-all text-gray-900"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3 ml-1">{t.email}</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-gray-900 focus:outline-none bg-white shadow-sm transition-all text-gray-900"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3 ml-1">{t.phone}</label>
                    <input 
                      id="phone"
                      type="tel" 
                      className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-gray-900 focus:outline-none bg-white shadow-sm transition-all text-gray-900"
                      placeholder={t.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3 ml-1">{t.message}</label>
                  <textarea 
                    id="message"
                    required
                    minLength={10}
                    rows={5}
                    className="w-full px-6 py-4 rounded-2xl border-none focus:ring-2 focus:ring-gray-900 focus:outline-none bg-white shadow-sm transition-all text-gray-900 resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] mt-4"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      {t.send}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
