
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20',
  secondary: 'bg-secondary text-white hover:bg-secondary-light shadow-lg shadow-secondary/20',
  accent: 'bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20',
  outline: 'border-2 border-primary text-primary hover:bg-primary/5',
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href,
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-colors duration-300 font-sans text-sm md:text-base';
  const variantStyles = variants[variant];
  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <motion.a 
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type={type}
      className={combinedClassName}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};
