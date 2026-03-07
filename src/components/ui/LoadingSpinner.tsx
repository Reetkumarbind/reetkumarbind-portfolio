'use client';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dots' | 'ring' | 'pulse';
  className?: string;
}

const LoadingSpinner = ({
  size = 'md',
  variant = 'ring',
  className = '',
}: LoadingSpinnerProps) => {
  const sizeMap = {
    sm: { container: 32, dot: 4 },
    md: { container: 48, dot: 6 },
    lg: { container: 64, dot: 8 },
  };

  const sizes = sizeMap[size];
  const containerSize = sizes.container;
  // dotSize is reserved for future use when implementing size variants
  // const dotSize = sizes.dot;

  // Dots variant - Multiple rotating dots
  if (variant === 'dots') {
    return (
      <motion.div
        className={`flex items-center justify-center gap-2 ${className}`}
        style={{ width: containerSize, height: containerSize }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="bg-accent rounded-full"
            style={{
              width: containerSize / 4,
              height: containerSize / 4,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.4,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Ring variant - Rotating ring
  if (variant === 'ring') {
    return (
      <motion.div
        className={`relative ${className}`}
        style={{ width: containerSize, height: containerSize }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r-accent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: containerSize, height: containerSize }}
        />

        {/* Inner pulsing circle */}
        <motion.div
          className="absolute inset-1/4 rounded-full bg-accent/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{
            width: containerSize / 2,
            height: containerSize / 2,
            left: containerSize / 4,
            top: containerSize / 4,
          }}
        />
      </motion.div>
    );
  }

  // Pulse variant - Pulsing circle with waves
  if (variant === 'pulse') {
    return (
      <motion.div
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: containerSize, height: containerSize }}
      >
        {/* Center dot */}
        <motion.div
          className="absolute bg-accent rounded-full z-10"
          style={{
            width: containerSize / 4,
            height: containerSize / 4,
          }}
        />

        {/* Wave 1 */}
        <motion.div
          className="absolute rounded-full border-2 border-accent"
          animate={{
            scale: [0, 2],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{
            width: containerSize / 2,
            height: containerSize / 2,
          }}
        />

        {/* Wave 2 */}
        <motion.div
          className="absolute rounded-full border-2 border-accent"
          animate={{
            scale: [0, 2],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            repeat: Infinity,
          }}
          style={{
            width: containerSize / 2,
            height: containerSize / 2,
          }}
        />
      </motion.div>
    );
  }

  return null;
};

export default LoadingSpinner;
