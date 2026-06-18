import { Language, translations } from '../translations';
import { motion } from 'motion/react';
import { Phone, ClipboardCheck, Wrench, ShieldCheck } from 'lucide-react';

interface Props {
  language: Language;
}

export function Process({ language }: Props) {
  const t = translations[language].process;

  const steps = [
    { icon: <Phone className="w-8 h-8" />, title: t.step1Title, desc: t.step1Desc },
    { icon: <ClipboardCheck className="w-8 h-8" />, title: t.step2Title, desc: t.step2Desc },
    { icon: <Wrench className="w-8 h-8" />, title: t.step3Title, desc: t.step3Desc },
    { icon: <ShieldCheck className="w-8 h-8" />, title: t.step4Title, desc: t.step4Desc },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-gray-200" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center text-blue-600 mb-8 relative z-10">
                 {step.icon}
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">
                   {idx + 1}
                 </div>
              </div>
              <h3 className="text-2xl font-display font-medium text-gray-900 mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
