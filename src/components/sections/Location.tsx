
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { content } from '../../data/content';
import { Button } from '../ui/Button';

export const Location: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-surface-light relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {content.contact.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">
            {content.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 border border-gray-100">
          
          {/* Info Cards */}
          <div className="space-y-8" data-aos="fade-right">
            
            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-surface-light rounded-xl">
              <MapPin className="text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-primary-dark text-lg mb-2">Endereço</h3>
                <p className="text-gray-600">
                    {content.contact.address.street}<br />
                    {content.contact.address.city}
                </p>
                <p className="text-sm text-gray-500 mt-2">{content.contact.address.ref}</p>
              </div>
            </div>

            {/* Hours */}
             <div className="flex items-start gap-4 p-6 bg-surface-light rounded-xl">
              <Clock className="text-secondary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-primary-dark text-lg mb-2">Horários</h3>
                <ul className="text-gray-600 space-y-1">
                    {content.contact.hours.map((line, i) => (
                        <li key={i}>{line}</li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Contact Methods */}
             <div className="flex items-start gap-4 p-6 bg-surface-light rounded-xl">
              <Phone className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-primary-dark text-lg mb-2">Fale Conosco</h3>
                <p className="text-gray-600 font-semibold mb-1">{content.contact.phone.whatsapp}</p>
                <p className="text-gray-600 mb-2">{content.contact.phone.fixed}</p>
                 <a href={`mailto:${content.contact.email}`} className="text-primary hover:underline flex items-center gap-2">
                    <Mail size={16} /> {content.contact.email}
                 </a>
              </div>
            </div>

            <div className="pt-4">
                <Button className="w-full text-lg py-4 shadow-xl shadow-accent/20 animate-pulse" variant="accent">
                    {content.contact.cta}
                </Button>
            </div>

          </div>

          {/* Map */}
          <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px]" data-aos="fade-left">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.324269199347!2d-46.63720911762295!3d-23.565437172081603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c17e82200f%3A0x6295da9be6587c48!2sAclima%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1715000000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
