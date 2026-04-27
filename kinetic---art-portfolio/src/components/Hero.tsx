import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 py-20 overflow-hidden bg-acid-green">
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-10 right-10 flex flex-col items-end text-right z-20"
      >
        <span className="text-xs font-mono uppercase tracking-widest opacity-60">Status: Critical Error</span>
        <span className="text-sm font-bold uppercase tracking-tighter bg-brutal-black text-acid-green px-2 py-1 mt-2">Edition 2026.SYS</span>
      </motion.div>

      <div className="relative z-10 pointer-events-none">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          style={{ rotate }}
          className="chaos-hover pointer-events-auto"
        >
          <h1 className="text-[25vw] md:text-[20vw] font-black leading-[0.6] uppercase tracking-tighter text-brutal-black drop-shadow-[20px_20px_0px_#FF00FF] glitch-text" data-text="KINETIC">
            KINE<br />TIC<span className="text-safety-orange italic">.</span>
          </h1>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
              y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
              rotate: [0, 360]
            }}
            transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
            className="absolute text-[10vw] font-black opacity-5 select-none"
            style={{ color: i % 2 === 0 ? '#2E5BFF' : '#FF5C00' }}
          >
            ERROR_CODE_2026
          </motion.div>
        ))}
      </div>

      <div className="absolute top-[20%] right-[10%] w-[40vw] aspect-square pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-8 border-brutal-black relative opacity-10"
        >
          <div className="absolute inset-0 border-4 border-dashed border-electric-blue m-8" />
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 max-w-xl relative z-20"
      >
        <div className="brutal-border bg-white p-6 md:p-10 transform -rotate-2 hover:rotate-0 transition-transform">
          <p className="text-2xl md:text-3xl font-black uppercase leading-tight text-brutal-black">
            A radical departure from the <span className="text-electric-blue">conventional</span>. We don't just design; we disrupt.
          </p>
        </div>
      </motion.div>

      <motion.div 
        animate={{ 
          height: ["20%", "40%", "20%"],
          opacity: [0.2, 0.8, 0.2]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute right-12 bottom-20 w-2 bg-brutal-black z-10"
      />
    </section>
  );
}
