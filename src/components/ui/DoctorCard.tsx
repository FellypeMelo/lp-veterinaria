
import React from 'react';
import { motion } from 'framer-motion';

interface DoctorCardProps {
  name: string;
  specialty: string;
  crmv: string;
  image: string;
  index: number;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, crmv, image, index }) => {
  return (
    <motion.div
        className="group relative overflow-hidden rounded-2xl shadow-lg bg-surface-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
    >
        <div className="aspect-[3/4] overflow-hidden">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-6 text-center relative z-10 bg-white group-hover:bg-transparent group-hover:text-white transition-colors duration-300 mt-[-20px] pt-8 rounded-t-3xl group-hover:mt-0 group-hover:rounded-none group-hover:pt-6 group-hover:absolute group-hover:bottom-0 group-hover:w-full">
            <h3 className="text-xl font-bold text-primary-dark group-hover:text-white mb-1 transition-colors duration-300">{name}</h3>
            <p className="text-secondary font-semibold group-hover:text-secondary-light transition-colors duration-300">{specialty}</p>
            <p className="text-xs text-gray-500 group-hover:text-gray-300 mt-2 transition-colors duration-300">{crmv}</p>
        </div>
    </motion.div>
  );
};
