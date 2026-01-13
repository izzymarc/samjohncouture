
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col md:flex-row items-stretch overflow-hidden bg-black">
      {/* Visual Side */}
      <div className="relative flex-1 overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Tailoring" 
          className="w-full h-full object-cover grayscale transition-transform duration-[8s] scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12 flex flex-col gap-4">
           <div className="flex items-center gap-3">
             <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
             <span className="text-[9px] tracking-[0.5em] text-[#D4AF37] uppercase font-bold">Curated for 2025</span>
           </div>
           <span className="text-white/40 text-[10px] font-light tracking-[0.3em] uppercase">Abuja • Lagos • London</span>
        </div>
      </div>

      {/* Content Side */}
      <div className="relative flex-1 bg-[#050505] flex items-center px-10 md:px-24 z-10">
        <div className="max-w-xl">
          <div className="reveal active flex items-center gap-4 mb-10 overflow-hidden">
            <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.8em] uppercase">Samjohn Atelier</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/30 to-transparent"></div>
          </div>
          
          <h1 className="reveal active serif-display text-8xl md:text-[10rem] text-white mb-12 leading-[0.8] italic font-light">
            Silent <br />
            <span className="gold-shimmer not-italic font-bold tracking-tighter">Bespoke.</span>
          </h1>
          
          <p className="reveal active text-stone-500 text-lg md:text-xl mb-16 font-light leading-relaxed max-w-sm tracking-wide">
            Defined by the intersection of Abuja's rich artisanal heritage and the vanguard of global luxury tailoring.
          </p>
          
          <div className="reveal active flex flex-col sm:flex-row gap-12 items-start sm:items-center">
            <a href="#collections" className="group relative px-14 py-6 bg-[#D4AF37] text-black text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500 hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Discover Archive
            </a>
            
            <a href="#stylist" className="group flex items-center gap-5 text-white/60 text-[10px] font-black tracking-[0.4em] uppercase hover:text-[#D4AF37] transition-all">
              <span className="border-b border-white/20 group-hover:border-[#D4AF37] pb-1">AI Consultation</span>
              <i className="fa-solid fa-chevron-right text-[8px] group-hover:translate-x-2 transition-transform"></i>
            </a>
          </div>
        </div>
        
        {/* Floating Geometric Accent */}
        <div className="absolute top-20 right-0 h-[1px] w-64 bg-gradient-to-l from-[#D4AF37]/20 to-transparent"></div>
        <div className="absolute top-0 right-20 h-64 w-[1px] bg-gradient-to-b from-[#D4AF37]/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
