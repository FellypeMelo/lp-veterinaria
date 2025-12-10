
import React from 'react';
import { content } from '../../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface-white">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
             <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              Nossa História
           </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              {content.about.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-body">
              {content.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.about.features.map((feature, idx) => {
                 const Icon = feature.icon;
                 return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary dark:text-secondary-dark">
                      <Icon size={24} />
                    </div>
                    <span className="font-semibold text-gray-800">{feature.text}</span>
                  </div>
                 );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about_team.png" 
                alt={content.about.imageAlt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
