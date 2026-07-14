import { useState, useEffect } from 'react';
import { productCatalog } from '../config/products';

// =========================================================================
// STATIC ASSET IMPORTS
// Update the filenames below to match your actual files inside src/assets/
// =========================================================================

// iFleetMax Assets
import ifleetmax1 from '../assets/imaxfleet1.jpg';
import ifleetmax2 from '../assets/imaxfleet2.jpg';
import ifleetmax3 from '../assets/imacfleet3.jpg';

// iFleetMax + Fuel Assets
import fuel1 from '../assets/maxfuel1.png';
import fuel2 from '../assets/maxfuel2.png';
import fuel3 from '../assets/maxfuel3.png';

// Speed Limiter Assets
import speed1 from '../assets/speed1.png';
import speed2 from '../assets/speed2.png';
import speed3 from '../assets/speed3.png';

// iRoam Assets
import roam1 from '../assets/roam1.png';
import roam2 from '../assets/rom2.png';
import roam3 from '../assets/rom3.png';

// iAsset Assets
import asset1 from '../assets/asset1.png';
import asset2 from '../assets/asset2.png';
import asset3 from '../assets/asset3.png';

// iBike Assets
import bike1 from '../assets/bike1.png';
import bike2 from '../assets/bike2.png';
import bike3 from '../assets/bike 3.png';

// iPrivate Assets
import private1 from '../assets/private1.png';
import private2 from '../assets/private1 (2).png';
import private3 from '../assets/private3.png';

// Mapping dictionary matching the dynamic system identifiers to bundled assets
const productImages = {
  ifleetmax: [ifleetmax1, ifleetmax2, ifleetmax3],
  ifleetmaxFuel: [fuel1, fuel2, fuel3],
  speedLimiter: [speed1, speed2, speed3],
  iroam: [roam1, roam2, roam3],
  iasset: [asset1, asset2, asset3],
  ibike: [bike1, bike2, bike3],
  iprivate: [private1, private2, private3]
};

export default function ProductView({ productId, onNavigate }) {
  const currentProductId = productId || 'ifleetmax';
  const product = productCatalog[currentProductId] || productCatalog.ifleetmax;

  // Track state for slide tracking
  const [activeSlide, setActiveSlide] = useState(0);
  // Track the previous product ID to safely detect when a product switch happens
  const [prevProductId, setPrevProductId] = useState(currentProductId);

  // Retrieve the 3 slides for the current product, fallback to ifleetmax if missing
  const slides = productImages[currentProductId] || productImages.ifleetmax;

  // SYSTEM IDENTIFIER SWITCH: If the productId changes, reset the slide index immediately during render
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

  const getProductIcon = (id) => {
    switch (id) {
      case 'ifleetmaxFuel': return '⛽';
      case 'speedLimiter': return '🛑';
      case 'iroam': return '🌍';
      case 'iasset': return '📦';
      case 'ibike': return '🏍️';
      case 'iprivate': return '🔒';
      default: return '📡';
    }
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen py-16 px-6 relative overflow-hidden">
      
      {/* GLOW DECORATIVE BACKDROPS */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-theme-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-theme-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* BREADCRUMB BACK ROUTE ACTIONS */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer group font-mono text-xs font-black text-slate-500 hover:text-theme-purple flex items-center gap-2 transition-colors"
          >
            <span>←</span> Back To Home
          </button>
          
          <span className="font-mono text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-md border border-slate-200 shadow-xs">
            System Spec ID: {currentProductId}
          </span>
        </div>

        {/* =========================================================================
            SECTION 1: HERO VIEW MATRIX (Product Information + Auto-Advancing Image Gallery)
           ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl p-2 bg-white rounded-2xl border border-slate-200 shadow-xs">
                {getProductIcon(currentProductId)}
              </span>
              <div className="space-y-0.5">
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                  {product.title}
                </h1>
                <p className="text-[11px] text-theme-purple font-mono uppercase font-black tracking-widest">
                  {product.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              {product.summary}
            </p>

            {/* DIRECT CALL-TO-ACTION FOR SYSTEM DEPLOYMENT */}
            <div className="pt-2">
              <button 
                onClick={() => onNavigate('contact')}
                className="cursor-pointer px-6 py-3 bg-slate-950 hover:bg-theme-purple text-white font-mono text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2 group hover:-translate-y-0.5"
              >
                ⚡ Request Product/Service
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE LAYER: PREMIUM AUTO-ADVANCING ENTERPRISE SLIDESHOW */}
          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-theme-purple to-theme-blue rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white border border-slate-200 p-3 rounded-3xl shadow-md space-y-4">
              
              {/* COMPLIANCE CHIP MATRIX FOR STATUTORY COMPLIANCE INSIGHT */}
              {product.complianceBadge ? (
                <div className="bg-amber-50 border border-amber-500/20 p-3 rounded-xl flex items-start gap-2">
                  <span className="text-lg">⚖️</span>
                  <div>
                    <span className="block text-[10px] font-mono font-black text-amber-700 uppercase tracking-wide">Approved Lawful Governor Matrix</span>
                    <span className="block text-[11px] text-slate-600 font-sans font-medium mt-0.5 leading-tight">
                      This hardware layout matches standard Statutory Instrument 118 of 2023 regulations verified by SAZ and VID.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-start gap-2">
                  <span className="text-lg">🛡️</span>
                  <div>
                    <span className="block text-[10px] font-mono font-black text-slate-700 uppercase tracking-wide">Standardized Telematics Architecture</span>
                    <span className="block text-[11px] text-slate-500 font-sans font-medium mt-0.5 leading-tight">
                      Built on world-class infrastructure, supporting native high-frequency data streams  and core protocols.
                    </span>
                  </div>
                </div>
              )}

              {/* SLIDESHOW IMAGE HOLDER SCREEN */}
              <div className="w-full h-56 bg-slate-950 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner group/slideshow">
                {slides.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${product.title} System Feature Display ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out transform ${
                      index === activeSlide 
                        ? 'opacity-100 scale-100 pointer-events-auto' 
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  />
                ))}

                {/* SLIDESHOW ROUND DOT BOTTOM INDICATORS */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 bg-slate-950/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        index === activeSlide ? 'w-4 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 2: DEEP DIVE KEY BENEFIT FEATURES MATRIX LIST
           ========================================================================= */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xs font-mono font-black text-theme-purple uppercase tracking-widest">Architectural Features</h2>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Full Strategic Capabilities Deep Dive</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.details.map((detail, index) => {
              const [heading, body] = detail.split(':');
              return (
                <div 
                  key={index} 
                  className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1 flex gap-3 items-start group hover:bg-slate-100/50 transition-colors"
                >
                  <span className="text-theme-purple font-mono font-black text-xs pt-0.5">
                    0{index + 1}.
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-black text-slate-900 tracking-tight">
                      {heading}
                    </h4>
                    {body && (
                      <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
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