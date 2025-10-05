// src/components/FocusOverlay.jsx
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function FocusOverlay() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth “camera” motion
  const spring = { damping: 30, stiffness: 150 };
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="focus-overlay"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
}
