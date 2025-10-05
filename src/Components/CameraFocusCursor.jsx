// src/components/CameraFocusCursor.jsx
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CameraFocusCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const cursorX = useSpring(x, { stiffness: 120, damping: 12 });
  const cursorY = useSpring(y, { stiffness: 120, damping: 12 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  // detect hover on interactive elements
  useEffect(() => {
    const hoverables = document.querySelectorAll("button, a, .hover-target");

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`camera-cursor ${isHovering ? "hover" : ""}`}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      <div className="reticle">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
      </div>
    </motion.div>
  );
}
