import Hero from './components/Hero';
import Nav from './components/Nav';
import Marquee from './components/Marquee';
import WorkGrid from './components/WorkGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import NoiseSection from './components/NoiseSection';
import DraggableGallery from './components/DraggableGallery';
import Window from './components/Window';
import GridGallery from './components/GridGallery';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SmoothScroll>
      <div className="noise-overlay" />
      <div className="scanline" />
      <CustomCursor />
      
      <motion.div 
        style={{ scaleX }} 
        className="fixed top-0 left-0 right-0 h-2 bg-hot-pink z-[101] origin-left" 
      />

      <main ref={containerRef} className="min-h-screen selection:bg-hot-pink selection:text-white bg-acid-green overflow-hidden">
        <Nav />
        
        <Hero />
        
        <div className="relative z-20 -mt-20 md:-mt-40 px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 pointer-events-none">
          <div className="md:col-start-2 md:col-span-5 pointer-events-auto">
             <motion.div
               animate={{ rotate: [-1, 1, -1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
                <Window title="Manifesto_v1.0" color="bg-white">
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                    STRUCTURE IS A <span className="text-hot-pink italic">LIE</span>
                  </h2>
                  <p className="text-lg font-bold uppercase leading-tight">
                    We've abandoned the grid. We've abandoned the sequence. Welcome to the noise environment where artifacts are features.
                  </p>
                </Window>
             </motion.div>
          </div>

          <div className="md:col-start-8 md:col-span-4 mt-20 pointer-events-auto">
            <Window title="System_Stats" color="bg-electric-blue text-white">
              <div className="font-mono text-xs space-y-2 uppercase">
                <div className="flex justify-between"><span>Memory Usage:</span><span>CRITICAL</span></div>
                <div className="flex justify-between"><span>Core Temp:</span><span>98°C</span></div>
                <div className="flex justify-between"><span>Uptime:</span><span>2500h</span></div>
                <div className="w-full bg-white/20 h-4 mt-4 relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-hot-pink w-1/2"
                  />
                </div>
              </div>
            </Window>
          </div>

          <div className="md:col-start-4 md:col-span-4 -mt-10 pointer-events-auto relative z-30">
            <motion.div whileHover={{ scale: 1.1, rotate: 2 }}>
              <Window title="POPUP_01" color="bg-hot-pink text-white">
                 <p className="text-2xl font-black uppercase tracking-widest text-center">GLITCH_EXPECTED</p>
              </Window>
            </motion.div>
          </div>
        </div>

        <Marquee 
          text="Glitch In The Matrix • System Overload" 
          velocity={10} 
          className="bg-hot-pink text-white z-20 my-20"
        />
        
        <DraggableGallery />

        <div className="px-4 md:px-12 -mt-40 relative z-30 pointer-events-none">
           <div className="max-w-4xl ml-auto pointer-events-auto">
             <Window title="The_Void" color="bg-safety-orange">
                <p className="text-3xl md:text-6xl font-black uppercase text-brutal-black leading-none">
                  "THE BEST WAY TO PREDICT THE FUTURE IS TO CRASH THE PRESENT."
                </p>
             </Window>
           </div>
        </div>

        <div id="work" className="mt-40 relative">
           <div className="absolute top-0 right-0 w-full h-full bg-hot-pink/5 pointer-events-none" />
           <WorkGrid />
        </div>

        <NoiseSection />

        <GridGallery />

        <div className="relative py-60 overflow-hidden">
          <motion.div 
            style={{ x: useTransform(scrollYProgress, [0.7, 1], [0, -2000]) }}
            className="text-[40vw] font-black uppercase whitespace-nowrap opacity-5 leading-none absolute top-1/2 -translate-y-1/2"
          >
            AVANT GARDE AVANT GARDE AVANT GARDE
          </motion.div>
          <div className="relative z-10 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full translate-y-20 transform hover:scale-105 transition-transform">
              <Window title="Connect_Process_04" color="bg-acid-green">
                 <Contact />
              </Window>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </SmoothScroll>
  );
}
