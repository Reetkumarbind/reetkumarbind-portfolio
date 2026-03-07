'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const Counter = ({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: CounterProps) => {
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setDisplayValue(Math.floor(value * progress));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  return (
    <motion.span className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default Counter;
