
import React from 'react';
import { content } from '../../data/content';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Veterinária carinhosa com cachorro" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent sm:from-white/95 sm:via-white/80"></div>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-xl" data-aos="fade-up" data-aos-duration="1000">
           <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary-dark font-bold text-sm mb-6">
              {content.hero.badge}
           </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-dark mb-6 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-body leading-relaxed">
            {content.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#contact" variant="accent" className="text-lg px-8 py-4">
              {content.hero.cta}
            </Button>
             <Button href="#services" variant="outline" className="text-lg px-8 py-4">
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
