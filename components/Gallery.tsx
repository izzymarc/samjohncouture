
import React, { useState } from 'react';
import { COLLECTIONS } from '../constants';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Native' | 'Suits' | 'Casual'>('All');

  const filteredItems = activeCategory === 'All' 
    ? COLLECTIONS 
    : COLLECTIONS.filter(item => item.category === activeCategory);

  return (
    <section id="collections" className="py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="reveal">
            <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Visual Archive</span>
            <h2 className="serif-display text-6xl md:text-8xl text-white italic">The Collection</h2>
          </div>
          
          <div className="reveal flex flex-wrap gap-10">
            {['All', 'Native', 'Suits', 'Casual'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`group relative text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-300 ${
                  activeCategory === cat ? 'text-[#D4AF37]' : 'text-stone-600 hover:text-stone-300'
                }`}
              >
                {cat}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#D4AF37] transition-all duration-500 ${
                  activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {filteredItems.map((item, index) => {
            // Create asymmetrical sizing
            const colSpan = index % 3 === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4';
            const aspect = index % 3 === 0 ? 'aspect-[16/9]' : 'aspect-[4/5]';
            
            return (
              <div 
                key={item.id} 
                className={`${colSpan} reveal group relative overflow-hidden cursor-none-area`}
                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
              >
                <div className={`relative ${aspect} overflow-hidden bg-stone-900`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <div className="text-center p-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="text-[#D4AF37] text-[9px] font-black tracking-[0.5em] uppercase mb-4">{item.category}</p>
                      <h3 className="serif-display text-4xl text-white mb-4 italic">{item.name}</h3>
                      <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-start opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h4 className="text-white text-xs font-bold tracking-widest uppercase">{item.name}</h4>
                    <p className="text-stone-600 text-[10px] tracking-wider uppercase mt-1">Bespoke Tailoring</p>
                  </div>
                  <span className="text-[#D4AF37] text-[10px] font-black tracking-widest uppercase">Inquire</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
