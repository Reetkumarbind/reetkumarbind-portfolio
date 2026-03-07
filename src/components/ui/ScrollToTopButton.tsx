'use client';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 10,
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        fixed bottom-8 right-8 z-40
        p-3 rounded-full
        bg-gradient-to-r from-accent to-blue-600
        text-white shadow-lg
        cursor-pointer
        ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Icon icon="tabler:arrow-up" width={24} height={24} />
      </motion.div>
    </motion.button>
  );
};

export default ScrollToTopButton;
