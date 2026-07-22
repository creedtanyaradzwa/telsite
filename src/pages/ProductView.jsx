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
      
      {/* Dynamic Blended Background Graphic Layer (Increased visibility) */}
      {currentBgImage && (
        <div 
          style={{ backgroundImage: `url(${currentBgImage})` }} 
          className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none z-0 mix-blend-soft-light transition-all duration-700"
        />
      )}

      {/* Telsite Ambient Glow Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#b015db]/20 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[35%] right-[-10%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-fuchsia-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[10%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#ad18aa]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="flex items-center justify-between border-b border-purple-300/20 pb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer group font-mono text-xs font-black text-purple-200 hover:text-white flex items-center gap-2 transition-all duration-300"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back To Home
          </button>
          
          <span className="font-mono text-[10px] font-black text-purple-200 uppercase tracking-widest bg-purple-900/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-300/30 shadow-md">
            System Spec ID: {currentProductId}
          </span>
        </div>

        {/* SECTION 1: HERO SPEC SHEET CARD */}
        <section className="relative rounded-3xl border border-purple-300/40 bg-purple-900/30 backdrop-blur-md shadow-2xl shadow-purple-900/30 p-6 md:p-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Left Column: System Details & Call To Action */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-4">
                {/* Glowing Product Icon Box */}
                <div className="h-16 w-16 p-2.5 bg-purple-900/60 rounded-2xl border border-purple-300/40 flex items-center justify-center shadow-lg shadow-purple-950/50 group hover:border-purple-300 transition-all duration-300">
                  <img 
                    src={getProductIconAsset(currentProductId)} 
                    alt="System Icon Portfolio Block"
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                
                <div className="space-y-1">
                  <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-fuchsia-100 to-indigo-100 tracking-tight leading-none">
                    {product.title}
                  </h1>
                  <p className="text-[11px] text-purple-200 font-mono uppercase font-black tracking-widest">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-normal">
                {product.summary}
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="cursor-pointer px-7 py-3.5 bg-purple-800/60 hover:bg-purple-700/80 border border-purple-300/40 hover:border-white text-white font-mono text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(232,121,249,0.4)] flex items-center gap-2.5 group hover:-translate-y-0.5"
                >
                  <span>⚡</span> Request Product/Service
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Embedded Glass Media & Slideshow Container */}
            <div className="md:col-span-5 relative group w-full">
              {/* Image Framing with Theme Glow Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b015db] to-fuchsia-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="relative bg-purple-900/40 border border-purple-300/40 p-3 rounded-2xl shadow-2xl backdrop-blur-md space-y-4">
                
                {/* Statutory Compliance / Security Status Chip */}
                {product.complianceBadge ? (
                  <div className="bg-amber-500/10 border border-amber-300/40 p-3 rounded-xl flex items-start gap-2.5">
                    <span className="text-base">⚖️</span>
                    <div>
                      <span className="bg-amber-300/25 text-amber-100 border border-amber-300/50 text-[8px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-1">
                        Approved Lawful Governor Matrix
                      </span>
                      <span className="block text-[11px] text-slate-200 font-sans leading-tight">
                        Hardware matches standard Statutory Instrument 118 of 2023 regulations verified by SAZ and VID.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-purple-800/30 border border-purple-300/30 p-3 rounded-xl flex items-start gap-2.5">
                    <span className="text-base">🛡️</span>
                    <div>
                      <span className="text-[10px] font-mono font-black text-purple-200 uppercase tracking-widest block">
                        Standardized Telematics Architecture
                      </span>
                      <span className="block text-[11px] text-slate-200 font-sans leading-tight mt-0.5">
                        Built on high-availability infrastructure supporting native telemetry streams and hardware protocols.
                      </span>
                    </div>
                  </div>
                )}

                {/* Main Slideshow Frame */}
                <div className="w-full h-56 bg-purple-950/80 rounded-xl overflow-hidden relative border border-purple-300/30 shadow-inner">
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

                  {/* Indicator Dots */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 bg-purple-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-purple-300/30">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          index === activeSlide ? 'w-5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'w-1.5 bg-purple-300/40 hover:bg-purple-200'
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

        {/* SECTION 2: KEY ARCHITECTURAL FEATURES GRID */}
        <section className="bg-purple-900/30 border border-purple-300/40 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl space-y-8 relative z-10">
          <div className="space-y-1">
            <h2 className="text-xs font-mono font-black text-purple-200 uppercase tracking-widest">Architectural Features</h2>
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-indigo-100 tracking-tight">
              Full Strategic Capabilities Deep Dive
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.details && product.details.map((detail, index) => {
              const [heading, body] = detail.split(':');
              return (
                <div 
                  key={index} 
                  className="p-5 bg-purple-800/40 border border-purple-300/40 rounded-2xl flex gap-3.5 items-start group hover:shadow-[0_0_30px_rgba(232,121,249,0.3)] hover:border-white hover:bg-purple-700/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-purple-300 font-mono font-black text-xs pt-0.5">
                    0{index + 1}.
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-white tracking-tight group-hover:text-fuchsia-200 transition-colors">
                      {heading}
                    </h4>
                    {body && (
                      <p className="text-[11px] text-slate-200 font-normal leading-relaxed">
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