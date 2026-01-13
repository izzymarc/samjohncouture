
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', path: '/heritage' },
    { name: 'Atelier', path: '/atelier' },
    { name: 'Archive', path: '/archive' },
    { name: 'Concierge', path: '/concierge' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-black/95 backdrop-blur-2xl py-4 border-b border-stone-900' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0 group cursor-pointer">
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white">
            SAMJOHN <span className="text-[#D4AF37] group-hover:gold-shimmer transition-all duration-500">COUTURE</span>
          </h1>
          <div className="h-[1px] w-0 group-hover:w-full bg-[#D4AF37] transition-all duration-700"></div>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[10px] font-black tracking-[0.5em] uppercase transition-colors ${
                location.pathname === link.path ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/#contact" className="px-10 py-3 bg-[#D4AF37] text-black text-[10px] font-black tracking-[0.5em] uppercase hover:bg-white transition-all duration-500">
            Inquire
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#D4AF37]">
           <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center space-y-12">
          <Link to="/" className="serif-display text-5xl text-white italic hover:text-[#D4AF37]" onClick={() => setIsOpen(false)}>Home</Link>
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className="serif-display text-5xl text-white italic hover:text-[#D4AF37]" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={() => setIsOpen(false)} className="text-stone-600 text-[10px] font-black tracking-[0.5em] uppercase mt-20">Close Menu</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
