import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth out scroll progress with high-response spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-transparent">
      {/* Dynamic Scroll Progress Line */}
      <motion.div
        className="h-full bg-[#075D91] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
