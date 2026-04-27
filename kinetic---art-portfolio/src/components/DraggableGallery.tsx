import { motion } from 'framer-motion';
import { useRef } from 'react';

const ITEMS = [
  { id: 1, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', x: '10%', y: '10%', rotate: -5 },
  { id: 2, img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop', x: '50%', y: '15%', rotate: 8 },
  { id: 3, img: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2670&auto=format&fit=crop', x: '30%', y: '40%', rotate: -12 },
  { id: 4, img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop', x: '5%', y: '60%', rotate: 15 },
  { id: 5, img: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2564&auto=format&fit=crop', x: '60%', y: '55%', rotate: -3 },
  { id: 6, img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop', x: '20%', y: '25%', rotate: 5 },
];

export default function DraggableGallery() {
  const constraintsRef = useRef(null);

  return (
    <section ref={constraintsRef} className="relative h-[150vh] w-full bg-hot-pink/5 overflow-hidden py-40">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[25vw] font-black uppercase opacity-10 text-brutal-black select-none">PIXELS</h2>
      </div>

      {ITEMS.map((item) => (
        <motion.div
          key={item.id}
          drag
          dragConstraints={constraintsRef}
          initial={{ x: item.x, y: item.y, rotate: item.rotate }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          className="absolute w-64 md:w-80 p-2 bg-white brutal-border cursor-grab active:cursor-grabbing group"
          style={{ left: item.x, top: item.y }}
        >
          <div className="relative overflow-hidden aspect-[4/5] bg-gray-200">
            <img 
              src={item.img} 
              alt="" 
              className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="mt-2 flex justify-between items-center px-1">
             <span className="font-mono text-[10px] uppercase">IMG_00{item.id}.RAW</span>
             <span className="font-mono text-[10px] uppercase">2026©</span>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-10 left-12 max-w-xs">
        <p className="font-mono text-xs uppercase bg-brutal-black text-white p-4">
          * Drag any element to customize the viewing experience. Spatial distribution is non-linear.
        </p>
      </div>
    </section>
  );
}
