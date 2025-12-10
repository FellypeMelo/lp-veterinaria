
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from './components/layout/Header/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Location } from './components/sections/Location';
import { Footer } from './components/layout/Footer/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';

import { Doctors } from './components/sections/Doctors';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen bg-surface-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Doctors />
        <Location />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
