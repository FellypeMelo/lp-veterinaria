
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { content } from '../../../data/content';
import { Button } from '../../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled ? styles.headerScrolled : styles.headerTransparent;

  return (
    <header className={`${styles.header} ${headerClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-primary-dark font-sans">
          {content.header.logo}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {content.header.nav.map((item) => (
            <a key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
          <Button href="#contact" variant="accent">{content.header.cta}</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            {content.header.nav.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-2xl font-bold text-primary-dark"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <Button href="#contact" variant="accent" onClick={() => setIsMobileMenuOpen(false)}>
                {content.header.cta}
             </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
