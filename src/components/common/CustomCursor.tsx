import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorVariant = 'default' | 'pointer' | 'card' | 'input' | 'hidden';

export const CustomCursor: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tight spring for central precision dot
  const dotSpringConfig = { damping: 35, stiffness: 800 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Elastic trailing spring for the outer architectural ring
  const ringSpringConfig = { damping: 25, stiffness: 280 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Detect touch-only screen to prevent displaying on mobile/tablets
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering over case studies or interactive system cards
      const isCard = target.closest('#work .bg-white, #solutions .group, #erp');
      // Check if hovering over buttons, links, or clickable controls
      const isClickable = target.closest('button, a, [role="button"], .cursor-pointer');
      // Check if hovering over form inputs
      const isInput = target.closest('input, textarea, select');

      if (isInput) {
        setCursorVariant('input');
        setCursorText('');
      } else if (isCard && !isClickable) {
        setCursorVariant('card');
        setCursorText('< >');
      } else if (isClickable) {
        setCursorVariant('pointer');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  // If on a touch device or cursor is off-screen, do not render
  if (isTouchDevice || !isVisible) {
    return null;
  }

  // Ring dimension & style variants based on active interaction state
  const ringVariants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: 'rgba(0, 172, 212, 0.04)',
      borderColor: 'rgba(0, 172, 212, 0.45)',
      borderWidth: 1.5,
      scale: 1
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(0, 172, 212, 0.12)',
      borderColor: '#00ACD4',
      borderWidth: 1.5,
      scale: 1.15
    },
    card: {
      width: 54,
      height: 54,
      backgroundColor: 'rgba(7, 93, 145, 0.14)',
      borderColor: '#075D91',
      borderWidth: 1.5,
      scale: 1.1
    },
    input: {
      width: 20,
      height: 36,
      backgroundColor: 'rgba(0, 172, 212, 0.08)',
      borderColor: '#00ACD4',
      borderWidth: 1.5,
      borderRadius: 4,
      scale: 1
    },
    hidden: {
      opacity: 0,
      scale: 0
    }
  };

  const dotVariants = {
    default: {
      width: 6,
      height: 6,
      backgroundColor: '#00ACD4',
      scale: 1
    },
    pointer: {
      width: 4,
      height: 4,
      backgroundColor: '#075D91',
      scale: 0.8
    },
    card: {
      width: 4,
      height: 4,
      backgroundColor: '#00ACD4',
      scale: 0.8
    },
    input: {
      width: 2,
      height: 20,
      backgroundColor: '#00ACD4',
      borderRadius: 1,
      scale: 1
    },
    hidden: {
      opacity: 0
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 select-none overflow-hidden" aria-hidden="true">
      {/* Outer Dynamic Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none text-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        variants={ringVariants}
        animate={cursorVariant}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        {cursorText && (
          <span className="text-[9px] font-bold text-[#075D91] select-none tracking-tighter">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precision Indicator Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        variants={dotVariants}
        animate={cursorVariant}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  );
};
