export default function Footer() {
  return (
    <footer className="px-4 md:px-12 py-12 bg-brutal-black text-acid-green flex flex-col md:flex-row justify-between items-center gap-8 border-t border-acid-green/20">
      <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">
        © 2026 Kinetic Studio / All rights reserved
      </div>
      <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest">
        <span>Melbourne, AU</span>
        <span>Local Time 10:30 PM</span>
      </div>
      <div className="text-2xl font-black uppercase italic tracking-tighter">
        Keep Distorting.
      </div>
    </footer>
  );
}
