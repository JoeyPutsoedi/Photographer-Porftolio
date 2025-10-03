import { AnimatePresence, motion } from "motion/react";
import { Outlet, useLocation } from "react-router-dom";

// Wrapper to animate each page
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageWrapper key={location.pathname}>
        <Outlet />
      </PageWrapper>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
