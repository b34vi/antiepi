import { motion } from 'framer-motion';

const GALLERY_ITEMS = [
  { id: 1, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', title: 'FORM_01' },
  { id: 2, img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop', title: 'COLOR_VOID' },
  { id: 3, img: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2670&auto=format&fit=crop', title: 'STRUCT_X' },
  { id: 4, img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop', title: 'TYPE_DIST' },
  { id: 5, img: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2564&auto=format&fit=crop', title: 'GHOST_OS' },
  { id: 6, img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop', title: 'FLOW_STATE' },
  { id: 7, img: 'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2670&auto=format&fit=crop', title: 'ACID_THOUGHT' },
  { id: 8, img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop', title: 'NOISE_LEVEL' },
  { id: 9, img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop', title: 'CHROMA_KEY' },
  { id: 10, img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop', title: 'LIGHT_LEAK' },
  { id: 11, img: 'https://images.unsplash.com/photo-1515405299443-f716940a049c?q=80&w=2574&auto=format&fit=crop', title: 'BRUTAL_FORM' },
  { id: 12, img: 'https://images.unsplash.com/photo-1550859484-d9bc029e46a7?q=80&w=2670&auto=format&fit=crop', title: 'VOID_SCAN' },
  { id: 13, img: 'https://images.unsplash.com/photo-1615184661386-79c9fe4ec093?q=80&w=2670&auto=format&fit=crop', title: 'DIGI_DUST' },
  { id: 14, img: 'https://images.unsplash.com/photo-1624396115568-55b89eb0ba4d?q=80&w=2670&auto=format&fit=crop', title: 'SIGNAL_LOST' },
  { id: 15, img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2574&auto=format&fit=crop', title: 'TEXTURE_00' },
  { id: 16, img: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2658&auto=format&fit=crop', title: 'GRADIENT_B' },
  { id: 17, img: 'https://images.unsplash.com/photo-1626544823105-df93bc839d48?q=80&w=2564&auto=format&fit=crop', title: 'SYSTEM_32' },
  { id: 18, img: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop', title: 'CORE_DUMP' },
  { id: 19, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', title: 'LIQUID_X' },
  { id: 20, img: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=2574&auto=format&fit=crop', title: 'MIN_FORM' },
];

export default function GridGallery() {
  return (
    <section className="bg-white px-4 md:px-12 py-20 relative z-40">
      <div className="flex justify-between items-start mb-20 border-b-2 border-brutal-black pb-10">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest leading-none">
          Index<span className="text-hot-pink font-mono opacity-50 ml-4">[20 ITEMS]</span>
        </h2>
        <div className="hidden md:flex gap-4 font-mono text-xs uppercase font-bold">
          <span>Sort: RANDOM</span>
          <span>View: MESH</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 md:gap-8">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 7) * 0.05 }}
            whileHover={{ y: -5, rotate: i % 2 === 0 ? 1 : -1 }}
            className="group cursor-crosshair"
          >
            <div className="relative aspect-[3/4] overflow-hidden brutal-border bg-gray-100 mb-3 group-hover:shadow-[8px_8px_0px_#FF00FF] transition-all">
              <img 
                src={item.img} 
                alt="" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
              />
              <div className="absolute top-2 right-2 font-mono text-[8px] bg-brutal-black text-white px-1 leading-tight">
                {item.id.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <span className="font-mono text-[10px] uppercase font-black tracking-tighter opacity-100 group-hover:text-hot-pink transition-colors">
                {item.title}
              </span>
              <div className="w-full h-[1px] bg-brutal-black/10 group-hover:bg-hot-pink transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
