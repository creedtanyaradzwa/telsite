import { useState } from 'react';
import { productCatalog } from '../config/products';

// iFleetMax Assets
import ifleetmax2 from '../assets/imaxfleet2.jpg';

// iFleetMax + Fuel Assets
import fuel2 from '../assets/maxfuel2.webp';

// Speed Limiter Assets
import speed2 from '../assets/speed2.webp';

// iRoam Assets
import roam2 from '../assets/rom2.webp';

// iAsset Assets
import asset2 from '../assets/asset2.webp';

// iBike Assets
import bike2 from '../assets/bike 3.webp';

// iPrivate Assets
import private3 from '../assets/private3.webp';

// Custom Product Icons
import iconFleetMax from '../assets/ifleetmaxi.webp'; 
import iconFuel from '../assets/ifleetmaxfueli.webp';
import iconRoam from '../assets/iroami.webp';
import iconSpeed from '../assets/speedlimiteri.webp';
import iconAsset from '../assets/iasseti.webp';
import iconPrivate from '../assets/iPrivatei.webp';
import iconBike from '../assets/ibikei.webp';

const productImages = {
  ifleetmax: [iconFleetMax, ifleetmax2, iconFleetMax],
  ifleetmaxFuel: [iconFuel, fuel2, iconFuel],
  speedLimiter: [iconSpeed, speed2, iconSpeed],
  iroam: [iconRoam, roam2, iconRoam],
  iasset: [iconAsset, asset2, iconAsset],
  ibike: [iconBike, bike2, iconBike],
  iprivate: [iconPrivate, iconPrivate, private3]
};

export default function ProductView({ productId, onNavigate }) {
  const currentProductId = productId || 'ifleetmax';
  const product = productCatalog[currentProductId] || productCatalog.ifleetmax;

  const [activeSlide, setActiveSlide] = useState(0);

  const slides = productImages[currentProductId] || productImages.ifleetmax;

  // Asset Icon catalog lookup mapper
  const getProductIconAsset = (id) => {
    switch (id) {
      case 'ifleetmaxFuel': return iconFuel;
      case 'speedLimiter': return iconSpeed;
      case 'iroam': return iconRoam;
      case 'iasset': return iconAsset;
      case 'ibike': return iconBike;
      case 'iprivate': return iconPrivate;
      default: return iconFleetMax;
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 text-black min-h-screen py-10 md:py-16 px-4 md:px-10 relative overflow-hidden font-sans antialiased">
      
      {/* =========================================================================
          ANIMATED GLOWING & MOVING AMBIENT LIGHT ORBS
         ========================================================================= */}
      <div className="absolute top-[-5%] right-[-5%] w-[450px] md:w-[750px] h-[450px] md:h-[750px] rounded-full bg-[#D8C7A9]/20 blur-[130px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute top-[35%] left-[-8%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-fuchsia-400/20 blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[-5%] left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-purple-300/15 blur-[150px] pointer-events-none animate-pulse duration-[9000ms]" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12 pt-24 lg:pt-28">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="flex items-center justify-between border-b border-white/40 pb-5">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer group font-mono text-xs sm:text-sm font-black text-amber-950 bg-[#D8C7A9] px-5 py-2.5 rounded-full border border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.4)] hover:bg-[#E8DCB8] flex items-center gap-2.5 transition-all duration-300 transform hover:-translate-x-1"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform text-base">←</span> Back To Home
          </button>
          
          <span className="font-mono text-xs sm:text-sm font-black text-amber-950 uppercase tracking-widest bg-[#D8C7A9] border border-white/90 px-5 py-2.5 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.4)]">
            System Spec ID: {currentProductId}
          </span>
        </div>

        {/* =========================================================================
            SECTION 1: HERO SPEC SHEET CARD
           ========================================================================= */}
        <section className="relative rounded-3xl border border-white/90 bg-[#D8C7A9]/95 backdrop-blur-3xl text-amber-950 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] p-7 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center relative z-10">
            
            {/* Left Column: System Details & Call To Action */}
            <div className="md:col-span-7 space-y-7 text-left">
              <div className="flex flex-wrap items-center gap-5">
                {/* Glowing Icon Box */}
                <div className="h-20 w-20 p-3 bg-amber-950 rounded-2xl border border-white/90 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_12px_24px_rgba(0,0,0,0.5)] group hover:scale-105 transition-all duration-300">
                  <img 
                    src={getProductIconAsset(currentProductId)} 
                    alt="System Icon Portfolio Block"
                    className="w-full h-full object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <h1 className="text-4xl md:text-6xl font-black text-amber-950 tracking-tight leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                    {product.title}
                  </h1>
                  <p className="text-xs md:text-sm text-amber-900 font-mono uppercase font-black tracking-widest">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-amber-950 text-base md:text-xl leading-relaxed font-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                {product.summary}
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="cursor-pointer px-8 py-4 bg-amber-950 hover:bg-amber-900 text-[#F3EAD8] font-mono text-xs sm:text-sm font-black uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_12px_24px_rgba(0,0,0,0.5)] flex items-center gap-3 group hover:-translate-y-0.5"
                >
                  <span>⚡</span> Request Product / Service
                  <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Embedded Glass Media Frame */}
            <div className="md:col-span-5 relative group w-full">
              <div className="relative bg-amber-950/10 border border-white/80 p-4 rounded-3xl shadow-lg space-y-4 backdrop-blur-md">
                
                {product.complianceBadge ? (
                  <div className="bg-amber-950/20 border border-amber-950/40 p-4 rounded-2xl flex items-start gap-3">
                    <span className="text-xl">⚖️</span>
                    <div>
                      <span className="bg-amber-950 text-[#F3EAD8] text-[10px] sm:text-xs font-mono font-black px-2.5 py-1 rounded uppercase tracking-wider inline-block mb-1 shadow-md">
                        Approved Lawful Governor Matrix
                      </span>
                      <span className="block text-xs sm:text-sm text-amber-950 font-black leading-snug">
                        Hardware matches standard Statutory Instrument 118 of 2023 regulations verified by SAZ and VID.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-amber-950/20 border border-amber-950/40 p-4 rounded-2xl flex items-start gap-3">
                    <span className="text-xl">🛡️</span>
                    <div>
                      <span className="text-xs font-mono font-black text-amber-950 uppercase tracking-widest block">
                        Standardized Telematics Architecture
                      </span>
                      <span className="block text-xs sm:text-sm text-amber-950 font-black leading-snug mt-1">
                        Built on high-availability infrastructure supporting native telemetry streams and hardware protocols.
                      </span>
                    </div>
                  </div>
                )}

                {/* Main Image Frame (Crisp & Visible) */}
                <div className="w-full h-64 sm:h-72 bg-amber-950/20 rounded-2xl overflow-hidden relative border border-white/80 shadow-md">
                  {slides.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${product.title} System Display ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out brightness-105 contrast-105 ${
                        index === activeSlide 
                          ? 'opacity-100 scale-100 pointer-events-auto' 
                          : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  ))}

                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2.5 z-20 bg-amber-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-md">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          index === activeSlide ? 'w-6 bg-[#D8C7A9]' : 'w-2 bg-[#D8C7A9]/40 hover:bg-[#D8C7A9]/70'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2: ARCHITECTURAL FEATURES CARD
           ========================================================================= */}
        <section className="relative rounded-3xl border border-white/90 bg-[#D8C7A9]/95 backdrop-blur-3xl text-amber-950 p-7 md:p-12 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] space-y-9 relative z-10 overflow-hidden">
          
          <div className="space-y-2 relative z-10">
            <h2 className="text-xs sm:text-sm font-mono font-black text-amber-900 uppercase tracking-widest flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-950 animate-ping" />
              Architectural Features
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-amber-950 tracking-tight">
              Full Strategic Capabilities Deep Dive
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
            {product.details && product.details.map((detail, index) => {
              const [heading, body] = detail.split(':');
              return (
                <div 
                  key={index} 
                  className="p-6 bg-amber-950/10 border border-white/80 rounded-3xl flex gap-4 items-start group hover:bg-amber-950/20 hover:border-white transition-all duration-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]"
                >
                  <span className="text-amber-950 font-mono font-black text-base pt-0.5">
                    0{index + 1}.
                  </span>
                  <div className="space-y-1.5">
                    <h4 className="text-sm sm:text-base font-black text-amber-950 tracking-tight">
                      {heading}
                    </h4>
                    {body && (
                      <p className="text-xs sm:text-sm text-amber-950/90 font-bold leading-relaxed">
                        {body.trim()}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}