
import React from 'react';
import Gallery from '../components/Gallery';

const ArchivePage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#050505] pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center reveal">
           <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">The Lookbook</span>
           <h1 className="serif-display text-6xl md:text-8xl text-white italic">Signature Archive</h1>
           <p className="text-stone-600 text-[10px] font-black tracking-[0.4em] uppercase mt-8">Explore the current season's masterworks</p>
        </div>
      </div>
      <Gallery />
      <div className="py-20 bg-[#050505] text-center border-t border-stone-900">
         <p className="text-stone-500 font-light mb-8 italic serif-display text-2xl">Can't find your ideal silhouette?</p>
         <a href="/concierge" className="inline-block px-12 py-5 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-black tracking-[0.4em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all">
            Consult our AI
         </a>
      </div>
    </div>
  );
};

export default ArchivePage;
