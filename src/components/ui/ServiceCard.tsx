
import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      className="bg-surface-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full hover:border-[#88B04B]/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-secondary dark:text-secondary-dark">
        <Icon size={28} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-primary-dark mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed font-body">{description}</p>
    </motion.div>
  );
};
