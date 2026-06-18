import { Language, translations } from '../translations';
import { motion } from 'motion/react';

interface Props {
  language: Language;
}

export function Stats({ language }: Props) {
  const t = translations[language].stats;

  const statsList = [
    { value: '10+', label: t.years },
    { value: '2500+', label: t.clients },
    { value: '5000+', label: t.interventions },
    { value: '24', label: t.guarantee },
  ];

  return (
    <section className="py-12 sm:py-16 bg-blue-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdib3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4PGc+PHBhdGggZD0iTTU0LjYyNyAzLjM3M2E1IDUgMCAwIDEgMCA3LjA3MWwtNDUuMjU1IDQ1LjI1NWE1IDUgMCAxIDEtNy4wNzEtNy4wNzFsNDUuMjU1LTQ1LjI1NWE1IDUgMCAwIDEgNy4wNzEgMHptLTI4LjI4NCAwbC0yMC4yIDMy4ydGE1IDUgMCAxIDAtNy4wNzEgNy4wNzFsMjcuMjc1LTI3LjI3N2E1IDUgMCAwIDAgMC03LjA3MXoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+')] opacity-20 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/20">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`flex flex-col items-center justify-center text-center px-4 ${idx % 2 !== 0 ? 'border-none md:border-solid' : 'border-none'}`}
            >
              <div className="text-4xl sm:text-5xl font-display font-medium mb-3 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-blue-100 font-light max-w-[150px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
