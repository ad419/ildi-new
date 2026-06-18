/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { TawkChat } from './components/TawkChat';
import { Language, translations } from './translations';

export default function App() {
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
      <FAQ language={language} />
      <Testimonials language={language} />
      <Gallery language={language} />
      <Contact language={language} />
      <MapSection language={language} />
      <Footer language={language} />
      <TawkChat />
    </div>
  );
}
