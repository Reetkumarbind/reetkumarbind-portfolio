'use client';
import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'gradient';
}

const HoverCard = ({
  children,
  className = '',
  variant = 'light',
  ...rest
}: HoverCardProps) => {
  const variantStyles = {
    light: 'bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl',
    dark: 'bg-bg-secondary shadow-xl hover:shadow-2xl',
    gradient:
      'bg-gradient-to-br from-accent-light to-transparent dark:from-blue-900/20',
  };

  const baseStyles = `
    relative rounded-lg border border-accent/10
    transition-all duration-300 ease-out
    overflow-hidden
    ${variantStyles[variant]}
    ${className}
  `;

  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      }}
      whileTap={{ y: -4 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className={baseStyles}
      {...rest}
    >
      {/* Gradient overlay effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {children}
    </motion.div>
  );
};

export default HoverCard;
