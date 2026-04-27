import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useVelocity } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const xVelocity = useVelocity(mouseX);
  const yVelocity = useVelocity(mouseY);
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 400 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        translateX: springX,
        translateY: springY,
        scale: isHovering ? 2.5 : 1,
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-brutal-black mix-blend-difference pointer-events-none z-[9999] flex items-center justify-center"
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>
  );
}
