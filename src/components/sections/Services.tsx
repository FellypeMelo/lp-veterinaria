
import React from 'react';
import { content } from '../../data/content';
import { ServiceCard } from '../ui/ServiceCard';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-surface-light">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {content.services.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">
            {content.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.items.map((service, index) => (
            <ServiceCard 
              key={service.title}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
