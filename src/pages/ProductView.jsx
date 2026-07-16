import { useState, useEffect } from 'react';
import { productCatalog } from '../config/products';

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

// =========================================================================
// CUSTOM PRODUCT ICONS ASSET IMPORTS
// =========================================================================
import iconFleetMax from '../assets/ifleetmaxi.png'; 
import iconFuel from '../assets/ifleetmaxfueli.png';
import iconRoam from '../assets/iroami.png';
import iconSpeed from '../assets/speedlimiteri.png';
import iconAsset from '../assets/iasseti.png';
import iconPrivate from '../assets/iPrivatei.png';
import iconBike from '../assets/ibikei.png';

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
    <div className="w-full bg-transparent text-slate-100 min-h-screen py-16 px-4 md:px-6 relative overflow-hidden">
      
      {/* =========================================================================
          DYNAMIC BLENDED BACKGROUND GRAPHIC LAYER
         ========================================================================= */}
      {currentBgImage && (
        <div 
          style={{ backgroundImage: `url(${currentBgImage})` }} 
          className="absolute inset-0 bg-cover bg-center opacity-[0.07] pointer-events-none z-0 mix-blend-lighten blur-[2px]"
        />
      )}

      {/* FUTURISTIC BACKGROUND GRADIENT GLOWS */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-purple-600/10 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[30%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-violet-500/10 blur-[70px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-fuchsia-600/5 blur-[60px] md:blur-[90px] pointer-events-none" />

      {/* GLOBAL DARK LAYER BLOCK FOR THEME CONSISTENCY */}
      <div className="absolute inset-0 bg-[#0E0B18]/60 backdrop-blur-[1px] z-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* BREADCRUMB BACK ROUTE ACTIONS */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="cursor-pointer group font-mono text-xs font-black text-slate-400 hover:text-purple-300 flex items-center gap-2 transition-colors"
          >
            <span>←</span> Back To Home
          </button>
          
          <span className="font-mono text-[10px] font-black text-purple-300 uppercase tracking-widest bg-white/[0.02] backdrop-blur-sm px-3 py-1 rounded-md border border-white/[0.08] shadow-sm">
            System Spec ID: {currentProductId}
          </span>
        </div>

        {/* =========================================================================
            SECTION 1: HERO SPEC SHEET VIEW MATRIX 
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-white/[0.12] bg-white/[0.02] backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-4">
                {/* HIGH-GLASS INTEGRATED PRODUCT ICON BLOCK */}
                <div className="h-14 w-14 p-2 bg-[#120B2E]/80 rounded-2xl border border-purple-500/30 flex items-center justify-center shadow-md group hover:border-purple-400 transition-all">
                  <img 
                    src={getProductIconAsset(currentProductId)} 
                    alt="System Icon Portfolio Block"
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="space-y-0.5">
                  <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
                    {product.title}
                  </h1>
                  <p className="text-[11px] text-purple-300 font-mono uppercase font-black tracking-widest pt-1">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium drop-shadow-sm">
                {product.summary}
              </p>

              <div className="pt-2">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="cursor-pointer px-6 py-3 bg-white/[0.05] hover:bg-purple-600 border border-white/[0.12] hover:border-purple-400 text-white font-mono text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2 group hover:-translate-y-0.5"
                >
                  ⚡ Request Product/Service
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE LAYER: PREMIUM AUTO-ADVANCING ENTERPRISE SLIDESHOW */}
            <div className="md:col-span-5 relative group w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-[#100D1B]/60 border border-white/[0.1] p-3 rounded-3xl shadow-xl space-y-4">
                
                {/* COMPLIANCE CHIP MATRIX FOR STATUTORY COMPLIANCE INSIGHT */}
                {product.complianceBadge ? (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl flex items-start gap-2">
                    <span className="text-lg">⚖️</span>
                    <div>
                      <span className="block text-[10px] font-mono font-black text-amber-300 uppercase tracking-wide">Approved Lawful Governor Matrix</span>
                      <span className="block text-[11px] text-slate-300 font-sans font-medium mt-0.5 leading-tight">
                        This hardware layout matches standard Statutory Instrument 118 of 2023 regulations verified by SAZ and VID.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/[0.02] border border-white/[0.06] p-3 rounded-xl flex items-start gap-2">
                    <span className="text-lg">🛡️</span>
                    <div>
                      <span className="block text-[10px] font-mono font-black text-purple-300 uppercase tracking-wide">Standardized Telematics Architecture</span>
                      <span className="block text-[11px] text-slate-300 font-sans font-medium mt-0.5 leading-tight">
                        Built on world-class infrastructure, supporting native high-frequency data streams and core protocols.
                      </span>
                    </div>
                  </div>
                )}

                {/* SLIDESHOW IMAGE HOLDER SCREEN */}
                <div className="w-full h-56 bg-slate-950 rounded-2xl overflow-hidden relative border border-white/[0.08] shadow-inner group/slideshow">
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
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: DEEP DIVE KEY BENEFIT FEATURES GLASS MATRIX LIST
           ========================================================================= */}
        <section className="bg-white/[0.01] border border-white/[0.06] backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl space-y-8 relative z-10">
          <div className="space-y-1">
            <h2 className="text-xs font-mono font-black text-purple-400 uppercase tracking-widest">Architectural Features</h2>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Full Strategic Capabilities Deep Dive</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.details && product.details.map((detail, index) => {
              const [heading, body] = detail.split(':');
              return (
                <div 
                  key={index} 
                  className="p-5 bg-[#100D1B]/40 border border-white/[0.06] rounded-xl space-y-1 flex gap-3 items-start group hover:bg-[#100D1B]/80 hover:border-purple-500/20 transition-all duration-300"
                >
                  <span className="text-purple-400 font-mono font-black text-xs pt-0.5">
                    0{index + 1}.
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-black text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {heading}
                    </h4>
                    {body && (
                      <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
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