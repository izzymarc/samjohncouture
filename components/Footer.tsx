
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter">
              SAMJOHN <span className="text-amber-500">COUTURE</span>
            </h2>
            <p className="text-stone-500 max-w-sm mb-10 leading-relaxed font-light">
              Nigeria's premier luxury atelier. We redefine the essence of the African gentleman through bespoke tailoring and impeccable craftsmanship.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                <i className="fa-brands fa-x-twitter text-xl"></i>
              </a>
              <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                <i className="fa-brands fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 text-amber-500 uppercase tracking-[0.3em] text-[10px]">Atelier</h4>
            <ul className="space-y-4 text-sm font-light text-stone-500">
              <li><a href="#home" className="hover:text-white transition">The Home</a></li>
              <li><a href="#collections" className="hover:text-white transition">Lookbook</a></li>
              <li><a href="#stylist" className="hover:text-white transition">AI Concierge</a></li>
              <li><a href="#contact" className="hover:text-white transition">Private Fitting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-amber-500 uppercase tracking-[0.3em] text-[10px]">Client Care</h4>
            <ul className="space-y-4 text-sm font-light text-stone-500">
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Fabric Care</a></li>
              <li><a href="#" className="hover:text-white transition">Measurement Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone-900/50 flex flex-col md:flex-row justify-between items-center text-stone-600 text-[11px] font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Samjohn Couture Abuja. Excellence as Standard.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span>Crafted in Nigeria</span>
            <div className="w-[1px] h-4 bg-stone-900"></div>
            <span>Global Distribution</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
