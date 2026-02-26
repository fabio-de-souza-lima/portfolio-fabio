import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedFadeInProps {
  children: ReactNode;
  delay?: number;
}

export function AnimatedFadeIn({ children, delay = 0 }: AnimatedFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className='w-full'
    >
      { children }
    </motion.div>
  )
}