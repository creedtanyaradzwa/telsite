import { useState, useEffect } from 'react';
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
  const [prevProductId, setPrevProductId] = useState(currentProductId);

  const slides = productImages[currentProductId] || productImages.ifleetmax;
  const currentBgImage = slides[0] || '';

  if (currentProductId !== prevProductId) {
    setPrevProductId(currentProductId);
    setActiveSlide(0);
  }

  // Auto-advance slideshow timer logic (rotates every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentProductId, slides.length]);

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
    <div className="w-full bg-gradient-to-b from-purple-950 via-[#2f083d] to-purple-950 text-slate-100 min-h-screen py-12 px-4 md:px-8 relative overflow-hidden">
      
      {/* Dynamic Blended Background Graphic Layer */}
      {currentBgImage && (
        <div 
          style={{ backgroundImage: `url(${currentBgImage})` }} 
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none z-0 mix-blend-soft-light transition-all duration-700"
        />
      )}

      {/* Telsite Ambient Glow Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#b015db]/20 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[35%] right-[-10%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-orange-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#ad18aa]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="flex items-center justify-between border-b border-orange-500/30 pb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer group font-mono text-xs font-black text-orange-400 hover:text-orange-300 flex items-center gap-2 transition-all duration-300"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back To Home
          </button>
          
          <span className="font-mono text-[10px] font-black text-orange-600 uppercase tracking-widest bg-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-orange-400/40 shadow-md">
            System Spec ID: {currentProductId}
          </span>
        </div>

        {/* =========================================================================
            SECTION 1: HERO SPEC SHEET CARD (SOLID WHITE CARD + BLACK TEXT + ORANGE)
           ========================================================================= */}
        <section className="relative rounded-3xl border-2 border-orange-500/40 bg-white text-slate-900 shadow-2xl shadow-black/40 p-6 md:p-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Left Column: System Details & Call To Action */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-4">
                {/* Glowing Orange Icon Box */}
                <div className="h-16 w-16 p-2.5 bg-orange-50 rounded-2xl border-2 border-orange-500/40 flex items-center justify-center shadow-md group hover:border-orange-500 hover:bg-orange-100 transition-all duration-300">
                  <img 
                    src={getProductIconAsset(currentProductId)} 
                    alt="System Icon Portfolio Block"
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                
                <div className="space-y-1">
                  <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                    {product.title}
                  </h1>
                  <p className="text-[11px] text-orange-600 font-mono uppercase font-black tracking-widest">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-normal">
                {product.summary}
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="cursor-pointer px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center gap-2.5 group hover:-translate-y-0.5"
                >
                  <span>⚡</span> Request Product/Service
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Embedded Glass Media & Slideshow Container */}
            <div className="md:col-span-5 relative group w-full">
              <div className="relative bg-orange-50/80 border border-orange-200 p-3 rounded-2xl shadow-lg space-y-4">
                
                {product.complianceBadge ? (
                  <div className="bg-amber-100/80 border border-amber-300 p-3 rounded-xl flex items-start gap-2.5">
                    <span className="text-base">⚖️</span>
                    <div>
                      <span className="bg-amber-500 text-white border border-amber-600 text-[8px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-1">
                        Approved Lawful Governor Matrix
                      </span>
                      <span className="block text-[11px] text-slate-800 font-sans leading-tight">
                        Hardware matches standard Statutory Instrument 118 of 2023 regulations verified by SAZ and VID.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-orange-100/60 border border-orange-300 p-3 rounded-xl flex items-start gap-2.5">
                    <span className="text-base">🛡️</span>
                    <div>
                      <span className="text-[10px] font-mono font-black text-orange-700 uppercase tracking-widest block">
                        Standardized Telematics Architecture
                      </span>
                      <span className="block text-[11px] text-slate-800 font-sans leading-tight mt-0.5">
                        Built on high-availability infrastructure supporting native telemetry streams and hardware protocols.
                      </span>
                    </div>
                  </div>
                )}

                {/* Main Slideshow Frame */}
                <div className="w-full h-56 bg-slate-900 rounded-xl overflow-hidden relative border border-orange-300 shadow-inner">
                  {slides.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${product.title} System Display ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out transform ${
                        index === activeSlide 
                          ? 'opacity-100 scale-100 pointer-events-auto' 
                          : 'opacity-0 scale-105 pointer-events-none'
                      }`}
                    />
                  ))}

                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-orange-500/40">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          index === activeSlide ? 'w-5 bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]' : 'w-1.5 bg-slate-500 hover:bg-slate-300'
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
            SECTION 2: ARCHITECTURAL FEATURES CARD (SOLID WHITE CARD + BLACK TEXT)
           ========================================================================= */}
        <section className="relative rounded-3xl border-2 border-orange-500/40 bg-white text-slate-900 p-6 md:p-10 shadow-2xl shadow-black/40 space-y-8 relative z-10 overflow-hidden">
          
          <div className="space-y-1 relative z-10">
            <h2 className="text-xs font-mono font-black text-orange-600 uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
              Architectural Features
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Full Strategic Capabilities Deep Dive
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {product.details && product.details.map((detail, index) => {
              const [heading, body] = detail.split(':');
              return (
                <div 
                  key={index} 
                  className="p-5 bg-orange-50/60 border border-orange-200 rounded-2xl flex gap-3.5 items-start group hover:bg-orange-100/70 hover:border-orange-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-orange-600 font-mono font-black text-sm pt-0.5">
                    0{index + 1}.
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-slate-900 tracking-tight">
                      {heading}
                    </h4>
                    {body && (
                      <p className="text-[11px] text-slate-700 font-normal leading-relaxed">
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