import React from 'react';
import { X, Minus, Square } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Window({ 
  title, 
  children, 
  className,
  color = "bg-white"
}: { 
  title: string; 
  children: React.ReactNode; 
  className?: string;
  color?: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`brutal-border ${color} flex flex-col ${className}`}
    >
      <div className="border-b-4 border-brutal-black p-3 flex justify-between items-center bg-brutal-black text-white">
        <span className="font-mono text-xs uppercase font-bold tracking-widest">{title}</span>
        <div className="flex gap-2">
          <Minus size={14} />
          <Square size={14} />
          <X size={14} />
        </div>
      </div>
      <div className="p-6 md:p-10 flex-1">
        {children}
      </div>
    </motion.div>
  );
}
