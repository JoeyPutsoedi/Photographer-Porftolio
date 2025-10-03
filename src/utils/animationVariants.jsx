// animationVariants.js
export const pageVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100, // slide in from left/right
    scale: 0.8,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
};
