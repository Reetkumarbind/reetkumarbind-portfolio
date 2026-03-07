'use client';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

interface AnimatedDividerProps {
  variant?: 'wave' | 'line' | 'dots';
  className?: string;
  color?: string;
}

const AnimatedDivider = ({
  variant = 'wave',
  className = '',
  color = 'text-accent',
}: AnimatedDividerProps) => {
  // Wave variant
  if (variant === 'wave') {
    return (
      <svg
        className={`w-full h-16 ${color} ${className}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ position: 'relative' } as CSSProperties}
      >
        <motion.path
          d="M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z"
          fill="currentColor"
          fillOpacity="0.3"
          animate={{
            d: [
              'M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z',
              'M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z',
              'M0,40 Q300,80 600,40 T1200,40 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
          fillOpacity="0.1"
          animate={{
            d: [
              'M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z',
              'M0,70 Q300,30 600,70 T1200,70 L1200,120 L0,120 Z',
              'M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    );
  }

  // Line variant - Animated gradient line
  if (variant === 'line') {
    return (
      <motion.div
        className={`h-1 ${className}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          background:
            'linear-gradient(90deg, transparent, currentColor, transparent)',
          originX: 0.5,
        }}
      />
    );
  }

  // Dots variant - Animated dots
  if (variant === 'dots') {
    return (
      <div
        className={`flex items-center justify-center gap-2 py-8 ${className}`}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full ${color}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default AnimatedDivider;
