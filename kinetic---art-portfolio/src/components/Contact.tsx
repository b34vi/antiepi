import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
            Say<br />
            <span className="text-electric-blue italic">Hello</span>
          </h2>
          <p className="mt-8 text-xl md:text-3xl font-bold leading-tight">
            Open for collaborations, exhibitions, and late-night digital experiments.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase opacity-60 mb-2">Email</span>
            <a href="mailto:hello@kinetic.art" className="text-2xl md:text-4xl font-black hover:text-hot-pink transition-all underline decoration-2 underline-offset-4 overflow-hidden text-ellipsis">
              hello@kinetic.art
            </a>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase opacity-60 mb-2">Digital</span>
            <div className="flex flex-wrap gap-4">
              {['Instagram', 'Twitter', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="font-bold uppercase border-b-2 border-brutal-black hover:bg-hot-pink hover:text-white px-2 transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
