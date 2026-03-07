'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },
  };

  return domLoaded ? (
    <motion.div 
      {...rest} 
      className="w-full max-w-[350px]"
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <motion.button
        onClick={(e) => {
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="block w-full overflow-hidden rounded-lg shadow-xl group bg-bg-secondary dark:shadow-2xl border border-accent/10 hover:border-accent/30 transition-colors duration-300"
        whileHover={{ borderColor: 'rgba(var(--color-accent), 0.5)' }}
      >
        {/* Image container with enhanced animation */}
        <div className="overflow-hidden h-[200px] bg-gradient-to-br from-accent/10 to-transparent">
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-125 group-focus:scale-125"
            loading="lazy"
            quality={75}
          />
          
          {/* Overlay gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content section */}
        <div className="p-4 py-3 space-y-1">
          {/* Tags and Links */}
          <div className="flex items-center justify-between">
            <motion.p 
              className="font-mono text-xs capitalize text-accent/70"
              whileHover={{ color: 'var(--color-accent)' }}
            >
              {tags.join(' | ')}
            </motion.p>
            
            <div className="flex items-center space-x-2">
              <motion.a
                href={repo}
                className="block p-1 rounded duration-200 hover:bg-accent/10 hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon="tabler:brand-github" width={20} height={20} />
              </motion.a>
              
              <motion.a
                href={url}
                className="block p-1 rounded duration-200 hover:bg-accent/10 hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </motion.a>
            </div>
          </div>

          {/* Title and Year */}
          <motion.h4 
            className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent"
            whileHover={{ x: 4 }}
          >
            <span>{name}</span>
            <motion.span 
              className="mr-1 text-accent/60"
              whileHover={{ x: -4 }}
            >
              {year}
            </motion.span>
          </motion.h4>
        </div>
      </motion.button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
