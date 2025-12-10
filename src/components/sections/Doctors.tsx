
import React from 'react';
import { content } from '../../data/content';
import { DoctorCard } from '../ui/DoctorCard';

interface Doctor {
  name: string;
  specialty: string;
  crmv: string;
  image: string;
}

interface DoctorsData {
  title: string;
  subtitle: string;
  items: Doctor[];
}

export const Doctors: React.FC = () => {
    // Determine which content object to use for doctors. 
    // Fallback to empty array if content.doctors is undefined (though we just added it).
    // Using 'unknown' cast first to safely access the property.
    const doctorsData = (content as unknown as { doctors: DoctorsData }).doctors;

  if (!doctorsData) return null;

  return (
    <section id="doctors" className="py-20 bg-surface-light">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
           <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6">
              Nossa Equipe
           </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            {doctorsData.title}
          </h2>
          <p className="text-lg text-gray-600 font-body">
            {doctorsData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.items.map((doctor: Doctor, index: number) => (
            <DoctorCard 
              key={doctor.name}
              index={index}
              {...doctor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
