
import React, { useState, useRef, useEffect } from 'react';
import { getStyleAdvice, getRecommendedStyles } from '../services/geminiService';
import { Message, StylingRecommendation } from '../types';

const AIStylist: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to the Samjohn Digital Atelier. I am your Lead Concierge. How may I assist in defining your sartorial legacy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<StylingRecommendation[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestionChips = [
    "Dress for an Abuja wedding",
    "Bespoke suit for the boardroom",
    "Modern take on traditional Agbada",
    "Casual luxury for evening"
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getStyleAdvice(textToSend);
      setMessages(prev => [...prev, { role: 'model', text: response || "I apologize, sir. The connection to the atelier is momentarily interrupted." }]);
      
      if (textToSend.toLowerCase().includes('recommend') || textToSend.toLowerCase().includes('suggest') || textToSend.toLowerCase().includes('dress')) {
        const recs = await getRecommendedStyles(textToSend);
        setRecommendations(recs);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "My apologies, our digital systems are currently under maintenance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="stylist" className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="text-center mb-32 reveal">
          <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.8em] uppercase mb-6 block">Intelligence in Design</span>
          <h2 className="serif-display text-7xl md:text-9xl text-white italic font-light">The Digital <br /> <span className="gold-shimmer font-bold not-italic">Concierge.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-center reveal">
            <h3 className="serif-display text-5xl text-white mb-10 italic">A Tailored Dialogue</h3>
            <div className="space-y-12">
              <div className="group cursor-default">
                <h4 className="text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase mb-3">01. Identity</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed">Share the context of your appearance. Every occasion demands a specific architectural response.</p>
              </div>
              <div className="group cursor-default">
                <h4 className="text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase mb-3">02. Fabric Selection</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed">Ask about weights, weaves, and origins. We consult on everything from Vicuña to Nigerian Silk.</p>
              </div>
              <div className="group cursor-default">
                <h4 className="text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase mb-3">03. Finalization</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed">Convert your conversation into a private fitting appointment at our Abuja HQ.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 reveal">
            <div className="bg-stone-900/10 backdrop-blur-3xl rounded-[2.5rem] border border-stone-800/50 h-[750px] flex flex-col shadow-2xl overflow-hidden ring-1 ring-white/5">
              {/* Refined Header */}
              <div className="p-10 border-b border-stone-800/30 flex items-center justify-between bg-black/20">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-full border border-[#D4AF37]/20 flex items-center justify-center relative">
                    <i className="fa-solid fa-wand-magic-sparkles text-[#D4AF37] text-xl"></i>
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#D4AF37]/5"></div>
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black tracking-[0.4em] uppercase">Samjohn AI</h4>
                    <p className="text-[9px] text-stone-600 tracking-[0.2em] uppercase mt-2">Active Atelier Protocol • 2.5</p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1">
                   <div className="flex gap-1.5">
                     {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-[#D4AF37]/40 rounded-full"></div>)}
                   </div>
                   <span className="text-[8px] text-[#D4AF37]/50 uppercase font-black tracking-[0.2em]">Secure Session</span>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-12 space-y-12 custom-scrollbar">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-[2rem] p-8 ${
                      msg.role === 'user' 
                        ? 'bg-[#D4AF37] text-black font-bold shadow-xl shadow-[#D4AF37]/5' 
                        : 'bg-stone-900/30 text-stone-300 border border-stone-800/50 leading-relaxed font-light backdrop-blur-sm'
                    }`}>
                      <p className="text-sm tracking-wide leading-loose">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="flex justify-start">
                     <div className="bg-stone-900/20 p-8 rounded-[2rem] border border-stone-800/30 flex items-center gap-6">
                       <div className="flex gap-2">
                         <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"></div>
                         <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                         <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                       </div>
                       <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.5em] italic">Styling Ensemble...</span>
                     </div>
                   </div>
                )}
                
                {recommendations.length > 0 && !isLoading && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
                    {recommendations.map((rec, idx) => (
                      <div key={idx} className="bg-black/40 p-6 rounded-2xl border border-stone-800 hover:border-[#D4AF37]/50 transition-all duration-700 group cursor-default">
                        <p className="text-[8px] uppercase font-black text-[#D4AF37] mb-4 tracking-[0.3em]">{rec.occasion}</p>
                        <h4 className="serif-display text-white text-xl mb-3 group-hover:text-[#D4AF37] transition-colors italic">{rec.styleName}</h4>
                        <p className="text-[10px] text-stone-500 leading-relaxed">{rec.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Suggestions Chips & Input */}
              <div className="p-10 border-t border-stone-800/30 bg-black/10">
                <div className="flex flex-wrap gap-3 mb-8">
                  {suggestionChips.map((chip, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSend(chip)}
                      className="px-5 py-2.5 rounded-full border border-stone-800 text-[9px] text-stone-500 uppercase tracking-widest font-black hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-6 bg-black/60 p-3 rounded-2xl border border-stone-800/50 focus-within:border-[#D4AF37] transition-all duration-700 shadow-inner">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Consult your stylist..." 
                    className="flex-1 bg-transparent border-none outline-none text-sm px-6 text-stone-200 placeholder:text-stone-700 font-light"
                  />
                  <button 
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isLoading}
                    className="w-14 h-14 rounded-xl bg-[#D4AF37] text-black flex items-center justify-center hover:bg-white transition-all duration-500 disabled:opacity-5"
                  >
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
