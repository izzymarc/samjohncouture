
import React from 'react';

const HeritagePage: React.FC = () => {
  return (
    <div className="pt-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="mb-32 reveal">
          <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">The Narrative</span>
          <h1 className="serif-display text-7xl md:text-[10rem] text-white italic leading-[0.8] mb-12">Origins of <br /> <span className="gold-shimmer font-bold not-italic">Abuja Pride.</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40">
          <div className="reveal">
            <p className="text-xl text-stone-300 font-light leading-loose mb-10 italic serif-display">
              "Every garment is a verse in the poem of identity."
            </p>
            <p className="text-stone-500 leading-relaxed mb-8">
              Founded in the vibrant heart of Garki, Samjohn Couture began as a vision to harmonize the intricate soul of Nigerian traditional attire with the rigid, elegant geometry of Western bespoke tailoring. 
            </p>
            <p className="text-stone-500 leading-relaxed">
              Our founder, a master artisan who trained across three continents, brought back a singular philosophy to Abuja: that the African gentleman deserves a fit that doesn't just look luxury—it feels like an inheritance.
            </p>
          </div>
          <div className="relative h-[600px] overflow-hidden reveal" style={{ transitionDelay: '0.2s' }}>
            <img 
              src="https://images.unsplash.com/photo-1558223175-1994e66df424?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-1000" 
              alt="Artisan at work" 
            />
            <div className="absolute inset-0 border-[20px] border-black/50 pointer-events-none"></div>
          </div>
        </div>

        <div className="py-40 border-t border-stone-900">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="reveal">
                 <h3 className="serif-display text-5xl text-white italic mb-8">The Studio Ethos</h3>
                 <p className="text-stone-500 font-light text-sm tracking-widest uppercase mb-12">Zero compromise. Infinite precision.</p>
                 <div className="space-y-12">
                    <div className="flex gap-8">
                       <span className="text-[#D4AF37] text-2xl font-bold italic serif-display">1998</span>
                       <p className="text-stone-400 text-sm">Our first studio opens in Abuja, redefining local tailoring standards.</p>
                    </div>
                    <div className="flex gap-8">
                       <span className="text-[#D4AF37] text-2xl font-bold italic serif-display">2012</span>
                       <p className="text-stone-400 text-sm">International expansion. Sourcing partnerships with Italian wool mills.</p>
                    </div>
                    <div className="flex gap-8">
                       <span className="text-[#D4AF37] text-2xl font-bold italic serif-display">Today</span>
                       <p className="text-stone-400 text-sm">The leading authority on bespoke Native and Western wear in Nigeria.</p>
                    </div>
                 </div>
              </div>
              <div className="reveal flex items-center justify-center">
                 <div className="p-20 border border-[#D4AF37]/10 rounded-full relative">
                    <div className="absolute inset-0 border border-[#D4AF37]/5 animate-pulse rounded-full"></div>
                    <h2 className="serif-display text-3xl text-[#D4AF37] italic">Hand-Finished in Nigeria</h2>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HeritagePage;
