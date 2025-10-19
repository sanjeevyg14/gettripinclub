'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMoved) {
        setHasMoved(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
       if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, hasMoved]);

  return (
    <motion.div
      className={cn(
        'fixed left-0 top-0 z-[9999] pointer-events-none rounded-full mix-blend-difference',
        'border-2 border-accent'
      )}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        opacity: hasMoved ? 1 : 0
      }}
      animate={{
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        x: '-50%',
        y: '-50%',
        backgroundColor: isHovering ? 'hsl(var(--accent))' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    />
  );
};
