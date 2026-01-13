
import React from 'react';
import { OFFICE_ADDRESS, PHONE_NUMBER, EMAIL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Personal Consultation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Visit Our Studio</h2>
            <p className="text-stone-400 mb-12 leading-relaxed text-lg font-light">
              Experience the master-craft of bespoke tailoring first-hand. Our Abuja atelier is open for private appointments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-stone-900 border border-stone-800 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Abuja HQ</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{OFFICE_ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-stone-900 border border-stone-800 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Direct Line</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-stone-900 border border-stone-800 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Inquiries</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{EMAIL}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-stone-900 border border-stone-800 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Hours</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">Mon - Sat: 9AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-stone-900 p-10 rounded-2xl border border-stone-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-white">Book a Fitting</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] text-stone-500 font-bold uppercase tracking-widest ml-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-stone-950 px-5 py-4 rounded-sm border border-stone-800 text-white focus:border-amber-500 outline-none transition placeholder:text-stone-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-stone-500 font-bold uppercase tracking-widest ml-1">Phone</label>
                    <input type="tel" placeholder="+234..." className="w-full bg-stone-950 px-5 py-4 rounded-sm border border-stone-800 text-white focus:border-amber-500 outline-none transition placeholder:text-stone-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-stone-500 font-bold uppercase tracking-widest ml-1">Service Type</label>
                  <select className="w-full bg-stone-950 px-5 py-4 rounded-sm border border-stone-800 text-white focus:border-amber-500 outline-none transition appearance-none cursor-pointer">
                    <option className="bg-stone-950">Agbada & Native Attire</option>
                    <option className="bg-stone-950">Bespoke Corporate Suit</option>
                    <option className="bg-stone-950">Luxury Casual Wear</option>
                    <option className="bg-stone-950">General Fitting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-stone-500 font-bold uppercase tracking-widest ml-1">Message</label>
                  <textarea placeholder="Special requirements..." rows={4} className="w-full bg-stone-950 px-5 py-4 rounded-sm border border-stone-800 text-white focus:border-amber-500 outline-none transition resize-none placeholder:text-stone-700"></textarea>
                </div>
                <button type="button" className="w-full py-5 bg-amber-500 text-black font-black tracking-[0.2em] uppercase text-xs rounded-sm hover:bg-amber-400 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                  Reserve Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
