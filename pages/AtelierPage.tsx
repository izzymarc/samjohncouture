
import React from 'react';

const AtelierPage: React.FC = () => {
  const steps = [
    {
      title: "The Consultation",
      desc: "An intimate dialogue regarding your lifestyle, aesthetic preferences, and the event's architecture.",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Measurement",
      desc: "Our unique 28-point anatomical scanning ensures the garment accounts for your unique posture and movement.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Cutting",
      desc: "Individual paper patterns are drafted. Your fabric is hand-cut by a senior cutter with over 20 years of experience.",
      image: "https://images.unsplash.com/photo-1598440441810-72e597561f36?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The First Fitting",
      desc: "The 'basted' garment is tried on. We evaluate the drape, the break of the trouser, and the shoulder pitch.",
      image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Final Delivery",
      desc: "After over 80 hours of hand-work, your Samjohn piece is delivered, ready to make a statement.",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-32 reveal">
          <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">The Methodology</span>
          <h1 className="serif-display text-7xl md:text-9xl text-white italic leading-[0.8]">The Art of <br /> <span className="gold-shimmer font-bold not-italic">Creation.</span></h1>
        </div>

        <div className="relative pb-40">
          {/* Vertical Stepper Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-40 w-[1px] bg-gradient-to-b from-[#D4AF37] via-stone-800 to-transparent hidden md:block"></div>
          
          <div className="space-y-40">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 reveal ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="relative h-[500px] overflow-hidden group">
                    <img src={step.image} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt={step.title} />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700"></div>
                  </div>
                </div>
                
                <div className="flex-1 relative">
                  {/* Step Number Bubble */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-10 md:top-1/2 md:-translate-y-1/2 w-12 h-12 rounded-full bg-black border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] z-10 hidden md:flex" 
                       style={{ [i % 2 === 0 ? 'left' : 'right']: '-6.5rem' }}>
                    <span className="text-xs font-black">{i + 1}</span>
                  </div>
                  
                  <h3 className="serif-display text-5xl text-white italic mb-6">{step.title}</h3>
                  <p className="text-stone-500 leading-loose text-lg font-light">{step.desc}</p>
                  <div className="mt-10 h-[1px] w-20 bg-[#D4AF37]/30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierPage;
