import { Language, translations } from '../translations';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import toolsImage from '../assets/images/about_tools_1781818003937.jpg';

interface Props {
  language: Language;
}

export function About({ language }: Props) {
  const t = translations[language].about;
  const points = [t.point1, t.point2, t.point3, t.point4];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <img 
                src={toolsImage} 
                alt="Plumbing professionals" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:-bottom-8 sm:-right-8 lg:-right-12 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 sm:max-w-[240px]">
              <div className="flex items-center sm:items-start gap-4">
                <ShieldCheck size={32} className="text-blue-600 flex-shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-medium text-gray-900 mb-1">100%</div>
                  <div className="text-sm text-gray-500 leading-tight">
                    {t.guaranteedWork}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-gray-900 mb-8 tracking-tight">
              {t.title}
            </h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light">
              {t.subtitle}
            </p>
            
            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  key={i} 
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-gray-900" size={20} />
                  </div>
                  <span className="text-gray-800 text-lg font-light">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
