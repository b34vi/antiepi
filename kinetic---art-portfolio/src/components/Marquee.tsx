import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Marquee({ 
  text, 
  velocity = 20, 
  className,
  outline = false,
  direction = 1
}: { 
  text: string; 
  velocity?: number; 
  className?: string;
  outline?: boolean;
  direction?: 1 | -1;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const skew = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ skewY: skew }}
      className={`relative overflow-hidden whitespace-nowrap py-6 md:py-10 border-y-2 border-brutal-black ${className}`}
    >
      <motion.div
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{
          duration: velocity,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex"
      >
        {[...Array(12)].map((_, i) => (
          <span 
            key={i} 
            className={`text-7xl md:text-[12vw] font-black uppercase px-6 select-none ${
              outline ? 'text-transparent' : 'text-brutal-black'
            }`}
            style={{ 
              WebkitTextStroke: outline ? '3px #050505' : 'none',
              transform: 'translateZ(0)' // GPU acceleration
            }}
          >
            {text}&nbsp;
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
