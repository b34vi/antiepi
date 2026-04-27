import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ArrowUpRight } from 'lucide-react';

const WORKS = [
  {
    id: '01',
    title: 'Liquid Distortion',
    category: 'Motion Design',
    color: 'bg-safety-orange',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    size: 'tall'
  },
  {
    id: '02',
    title: 'Acid Echoes',
    category: 'Digital Art',
    color: 'bg-electric-blue',
    img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop',
    size: 'wide'
  },
  {
    id: '03',
    title: 'Structural Void',
    category: '3D Installation',
    color: 'bg-brutal-black',
    img: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2670&auto=format&fit=crop',
    size: 'normal'
  },
  {
    id: '04',
    title: 'Kinetic Type',
    category: 'Experiment',
    color: 'bg-white',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop',
    size: 'tall'
  },
  {
    id: '05',
    title: 'Ghost Signals',
    category: 'Photography',
    color: 'bg-acid-green',
    img: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2564&auto=format&fit=crop',
    size: 'normal'
  }
];

export default function WorkGrid() {
  return (
    <section className="px-4 md:px-12 py-32 bg-brutal-black text-acid-green">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b-4 border-acid-green pb-12">
        <div className="max-w-4xl">
          <h2 className="text-8xl md:text-[14vw] font-black uppercase tracking-tighter leading-[0.75]">
            Archive<span className="text-safety-orange italic">_</span>
          </h2>
          <p className="font-mono text-lg uppercase mt-6 tracking-widest">[ SYSTEM STATUS: STABLE / DATA RETRIEVED ]</p>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="w-20 h-20 border-4 border-acid-green rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-xs font-mono">SCROLL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {WORKS.map((work, idx) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className={cn(
              "group relative flex flex-col justify-end transition-all duration-500",
              work.size === 'tall' ? "md:col-span-5 md:row-span-2" : 
              work.size === 'wide' ? "md:col-span-12 h-[60vh]" : "md:col-span-7"
            )}
          >
            <div className="relative h-full overflow-hidden grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 bg-acid-green/10">
              <img 
                src={work.img} 
                alt={work.title}
                className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-brutal-black/40 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brutal-black to-transparent">
                 <button className="bg-acid-green text-brutal-black px-8 py-3 font-black uppercase text-sm tracking-widest hover:bg-safety-orange hover:text-white transition-colors">
                   View Project
                 </button>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-end border-b-2 border-acid-green/20 pb-6">
              <div className="max-w-[70%]">
                <span className="text-xs font-mono uppercase opacity-50 tracking-[0.2em] mb-2 block">{work.category} / {work.id}</span>
                <h3 
                  className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none glitch-text" 
                  data-text={work.title}
                >
                  {work.title}
                </h3>
              </div>
              <motion.div 
                whileHover={{ rotate: 45, scale: 1.2 }}
                className="w-16 h-16 border-4 border-acid-green flex items-center justify-center cursor-pointer group-hover:bg-acid-green group-hover:text-brutal-black transition-all"
              >
                <ArrowUpRight size={32} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
}
