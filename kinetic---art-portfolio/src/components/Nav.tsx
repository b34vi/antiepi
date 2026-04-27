import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-12 py-8 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
      <div className="pointer-events-auto">
        <a href="/" className="text-2xl font-black uppercase tracking-tighter hover:skew-x-12 transition-transform inline-block">
          Kinetic.
        </a>
      </div>
      
      <div className="flex flex-col items-end gap-2 pointer-events-auto">
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
          <a href="#work" className="hover:text-acid-green transition-colors">[ Work ]</a>
          <a href="#about" className="hover:text-acid-green transition-colors">[ About ]</a>
          <a href="#contact" className="hover:text-acid-green transition-colors">[ Connect ]</a>
        </div>
        <div className="w-12 h-[1px] bg-white mt-2" />
      </div>
    </nav>
  );
}
