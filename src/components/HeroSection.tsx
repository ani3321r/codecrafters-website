'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { AuroraBackground } from './ui/aurora-background';
import { Button } from './ui/moving-border';

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative flex flex-col items-center justify-center gap-4 px-4'
      >
        <div className='text-center text-3xl font-bold md:text-7xl dark:text-white'>
          Welcome To CodeCrafters
        </div>
        <div className='py-4 text-base font-extralight md:text-4xl dark:text-neutral-200'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          perferendis corporis cum nam, saepe accusantium molestias deleniti
          magni eaque sint amet rem, dolorum explicabo dicta similique? Numquam
          obcaecati corrupti libero.
        </div>
        <Button>Join Now</Button>
      </motion.div>
    </AuroraBackground>
  );
}

export default HeroSection;
