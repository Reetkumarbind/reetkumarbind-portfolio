'use client';
import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface BadgeProps extends MotionProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  animated = true,
  ...rest
}: BadgeProps) => {
  const variantStyles = {
    primary: 'bg-accent-light text-accent border-accent/30',
    secondary: 'bg-bg-secondary text-text border-accent/20',
    accent: 'bg-gradient-to-r from-accent to-blue-600 text-white',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs font-mono',
    md: 'px-3 py-1.5 text-sm font-mono',
    lg: 'px-4 py-2 text-base font-mono',
  };

  const baseStyles = `
    inline-flex items-center justify-center
    border rounded-full
    transition-all duration-300 ease-in-out
    cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  const hoverVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' },
    tap: { scale: 0.95 },
  };

  if (animated) {
    return (
      <motion.div
        initial={hoverVariants.hidden}
        animate={hoverVariants.show}
        whileHover={hoverVariants.hover}
        whileTap={hoverVariants.tap}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={baseStyles}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
};

export default Badge;
