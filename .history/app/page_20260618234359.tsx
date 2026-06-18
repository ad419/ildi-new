/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { Stats } from '@/src/components/Stats';
import { Services } from '@/src/components/Services';
import { Process } from '@/src/components/Process';
import { About } from '@/src/components/About';
import { Gallery } from '@/src/components/Gallery';
import { FAQ } from '@/src/components/FAQ';
import { Testimonials } from '@/src/components/Testimonials';
import { Contact } from '@/src/components/Contact';
import { MapSection } from '@/src/components/MapSection';
import { Footer } from '@/src/components/Footer';
import { TawkChat } from '@/src/components/TawkChat';
import { Language, translations } from '@/src/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language>('it');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const seo = translations[language].seo;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500/30">
      <Helmet>
        <html lang={language} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Stats language={language} />
      <Services language={language} />
      <Process language={language} />
      <About language={language} />
      <Gallery language={language} />
      <FAQ language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
      <MapSection language={language} />
      <Footer language={language} />
      <TawkChat />
    </div>
  );
}
