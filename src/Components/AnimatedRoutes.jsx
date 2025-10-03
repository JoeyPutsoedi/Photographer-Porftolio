import { AnimatePresence, motion } from "motion/react";
import { Outlet, useLocation } from "react-router-dom";
import { pageVariants } from "../utils/animationVariants";
import { useRef } from "react";

const AnimatedRoutes = () => {
  const location = useLocation();
  const prevPath = useRef(null);

  // crude way to detect "direction" (forward vs back)
  const direction =
    prevPath.current && location.pathname.length > prevPath.current.length
      ? 1
      : -1;

  prevPath.current = location.pathname;

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={location.pathname}
        custom={direction}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        className="h-full w-full"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
