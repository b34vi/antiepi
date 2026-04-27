import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function NoiseSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section ref={ref} className="relative py-40 bg-brutal-black overflow-hidden flex flex-col items-center justify-center">
      <motion.div style={{ x: x1 }} className="absolute top-20 left-0 whitespace-nowrap opacity-20 pointer-events-none">
        <span className="text-[20vw] font-black text-acid-green uppercase">EXPERIMENTAL EXPERIMENTAL EXPERIMENTAL</span>
      </motion.div>
      
      <div className="relative z-10 text-center px-4">
        <motion.div style={{ scale }} className="brutal-border bg-safety-orange p-12 md:p-20 inline-block">
          <h3 className="text-4xl md:text-7xl font-black uppercase text-brutal-black leading-none mb-8 glitch-text" data-text="BEYOND THE GRID">
            BEYOND THE GRID
          </h3>
          <p className="max-w-md mx-auto text-xl font-bold uppercase text-brutal-black">
            System failure is the ultimate creative catalyst. We embrace the noise, the lag, and the unexpected outputs.
          </p>
        </motion.div>
      </div>

      <motion.div style={{ x: x2 }} className="absolute bottom-20 right-0 whitespace-nowrap opacity-20 pointer-events-none">
        <span className="text-[20vw] font-black text-electric-blue uppercase italic">DISRUPTION DISRUPTION DISRUPTION</span>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
         <motion.div 
           animate={{ 
             y: [-1000, 1000],
             opacity: [0, 1, 0]
           }}
           transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
           className="h-2 w-full bg-white blur-sm mb-4"
         />
      </div>
    </section>
  );
}
