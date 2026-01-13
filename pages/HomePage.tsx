
import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            <div className="reveal">
              <div className="w-12 h-12 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-10 group cursor-default">
                 <i className="fa-solid fa-scissors text-xl text-[#D4AF37] group-hover:rotate-45 transition-transform duration-700"></i>
              </div>
              <h3 className="serif-display text-4xl text-white mb-6 italic font-light tracking-tight">The Architectural Cut</h3>
              <p className="text-stone-500 leading-relaxed font-light tracking-widest uppercase text-[10px] max-w-xs">
                We don't just sew; we engineer garments that adjust to your movement while maintaining an impeccable form.
              </p>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="w-12 h-12 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-10 group cursor-default">
                 <i className="fa-solid fa-earth-africa text-xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-700"></i>
              </div>
              <h3 className="serif-display text-4xl text-white mb-6 italic font-light tracking-tight">Heritage Fusion</h3>
              <p className="text-stone-500 leading-relaxed font-light tracking-widest uppercase text-[10px] max-w-xs">
                A unique Abuja synthesis of traditional Nigerian embroidery techniques and Italian tailoring standards.
              </p>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="w-12 h-12 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-10 group cursor-default">
                 <i className="fa-solid fa-award text-xl text-[#D4AF37] group-hover:-translate-y-1 transition-transform duration-700"></i>
              </div>
              <h3 className="serif-display text-4xl text-white mb-6 italic font-light tracking-tight">Generational Quality</h3>
              <p className="text-stone-500 leading-relaxed font-light tracking-widest uppercase text-[10px] max-w-xs">
                Constructed with internal canvases and hand-rolled lapels designed to age gracefully for decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-stone-900/10 border-y border-stone-900/50">
        <div className="max-w-6xl mx-auto px-6 text-center reveal">
           <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.6em] uppercase mb-8 block">Atelier Philosophy</span>
           <h2 className="serif-display text-6xl md:text-9xl text-white mb-10 leading-[0.9] italic">"True Bespoke is a <br /> Dialogue in Gold."</h2>
           <div className="w-24 h-[1px] bg-[#D4AF37]/50 mx-auto"></div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default HomePage;
