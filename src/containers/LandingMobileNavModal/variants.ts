import { Variants } from 'framer-motion';

export const mobileNavVariant: Variants = {
  initial: {
    x: 60,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
  exit: {
    x: 60,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
};
