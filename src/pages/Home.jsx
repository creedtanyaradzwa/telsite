import { useState, useEffect } from 'react';
import { productCatalog } from '../config/products';
import fleetImage from '../assets/fleet1 .webp';
import fleetImage2 from '../assets/fleet2.jpg';

// HERO BACKGROUND SLIDESHOW IMAGES
import bgSlide1 from '../assets/fleet1 .webp';
import bgSlide2 from '../assets/fleet2.jpg';
import bgSlide3 from '../assets/fleet3.webp';

// SECTION 2 BACKGROUND SLIDESHOW IMAGES
import whySlide1 from '../assets/tracking 4.webp'; 
import whySlide2 from '../assets/tracking5.webp';
import whySlide3 from '../assets/tracking2.webp';
import whyslide4 from '../assets/tracking3.webp';

// PRODUCT BACKGROUND GRAPHICS
import prodBg1 from '../assets/fleet1 .webp';   // Mapped to: ifleetmax
import prodBg2 from '../assets/fleet2.jpg';   // Mapped to: ifleetmaxFuel
import prodBg3 from '../assets/fleet3.webp';   // Mapped to: iroam
import prodBg4 from '../assets/fleet1 .webp';  // Mapped to: speedLimiter
import prodBg5 from '../assets/iassets.webp';  // Mapped to: iasset
import prodBg6 from '../assets/private.webp';  // Mapped to: iprivate
import prodBg7 from '../assets/bikefleet.webp';// Mapped to: ibike

// =========================================================================
// SMALL CORNER PRODUCT ICONS IMPORTS
// =========================================================================
import iconFleetMax from '../assets/ifleetmaxi.webp'; 
import iconFuel from '../assets/ifleetmaxfueli.webp';
import iconRoam from '../assets/iroami.webp';
import iconSpeed from '../assets/speedlimiteri.webp';
import iconAsset from '../assets/iasseti.webp';
import iconPrivate from '../assets/iPrivatei.webp';
import iconBike from '../assets/ibikei.webp';

export default function Home({ onNavigate }) {
  const backgroundSlideshowImages = [bgSlide1, bgSlide2, bgSlide3];
  const whySlideshowImages = [whySlide1, whySlide2, whySlide3];
  
  const productBackgrounds = {
    ifleetmax: prodBg1,
    ifleetmaxFuel: prodBg2,
    iroam: prodBg3,
    speedLimiter: prodBg4,
    iasset: prodBg5,
    iprivate: prodBg6,
    ibike: prodBg7,
  };

  const iconCatalog = {
    ifleetmax: iconFleetMax,
    ifleetmaxFuel: iconFuel,
    iroam: iconRoam,
    speedLimiter: iconSpeed,
    iasset: iconAsset,
    iprivate: iconPrivate,
    ibike: iconBike,
  };

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentWhyBgIndex, setCurrentWhyBgIndex] = useState(0);
  const productsArray = Object.entries(productCatalog);

  // HERO SLIDESHOW TIMER ROUTINE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => 
        prevIndex === backgroundSlideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundSlideshowImages.length]);

  // WHY CHOOSE TELSITE SLIDESHOW TIMER ROUTINE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWhyBgIndex((prevIndex) => 
        prevIndex === whySlideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [whySlideshowImages.length]);

  return (
    <div className="w-full bg-gradient-to-b from-purple-900 via-[#3b094c] to-purple-900 text-slate-100 min-h-screen py-16 px-4 md:px-6 relative overflow-hidden">
      
      {/* VIBRANT HIGH-BRIGHTNESS PURPLE & FUCHSIA GLOW ORBS */}
      <div className="absolute top-[-5%] left-[-10%] w-[550px] md:w-[900px] h-[550px] md:h-[900px] rounded-full bg-[#d912ff]/50 blur-[130px] md:blur-[170px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute top-[25%] right-[-10%] w-[500px] md:w-[850px] h-[500px] md:h-[850px] rounded-full bg-fuchsia-600/50 blur-[120px] md:blur-[160px] pointer-events-none" />
      <div className="absolute top-[55%] left-[-10%] w-[550px] md:w-[900px] h-[550px] md:h-[900px] rounded-full bg-[#c01ad6]/50 blur-[130px] md:blur-[170px] pointer-events-none" />
      <div className="absolute bottom-[0%] right-[-5%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-purple-600/50 blur-[110px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20 md:space-y-32">
        
        {/* =========================================================================
            SECTION 1: HERO / WHAT TELSITE DOES
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-purple-300/50 bg-purple-950/40 backdrop-blur-md shadow-2xl shadow-purple-900/50">
          
          {/* Enhanced Slideshow Image Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {backgroundSlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out saturate-[1.25] brightness-90
                  ${index === currentBgIndex ? 'opacity-65 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            {/* Lighter Violet Overlay to keep images visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-purple-900/30 to-purple-950/60" />
            <div className="absolute inset-0 bg-purple-950/20 mix-blend-multiply" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight md:leading-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                Advanced Fleet Management For <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-100 to-indigo-200">Every Business.</span>
              </h1>
              
              <div className="bg-purple-950/80 p-4 md:p-5 rounded-2xl border border-purple-300/40 backdrop-blur-md shadow-2xl">
                <p className="text-slate-100 text-xs md:text-base leading-relaxed font-normal">
                  Telsite Tracking deploys cutting-edge technology allowing clients to monitor, control, and optimize their mobile assets in the most efficient and effective way.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-purple-950/80 border border-purple-300/50 backdrop-blur-md rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-mono font-bold text-white flex items-center gap-2 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-ping" /> Real-Time Location Updates
                </span>
                <span className="bg-purple-950/80 border border-purple-300/50 backdrop-blur-md rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-mono font-bold text-white flex items-center gap-2 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-purple-300" /> Fuel Theft Reduction
                </span>
              </div>
            </div>
            
            <div className="md:col-span-5 relative group order-1 md:order-2 w-full max-w-md mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-purple-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-purple-950/60 border border-purple-300/50 p-2 md:p-3 rounded-2xl shadow-2xl backdrop-blur-md">
                <img src={fleetImage} alt="Hero Graphic" className="w-full h-auto object-cover rounded-xl opacity-95 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WHY CHOOSE TELSITE
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-purple-300/50 bg-purple-950/40 backdrop-blur-md shadow-2xl shadow-purple-900/50">
          
          {/* Enhanced Slideshow Image Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {whySlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out saturate-[1.25] brightness-90
                  ${index === currentWhyBgIndex ? 'opacity-60 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-purple-900/30 to-purple-950/60" />
            <div className="absolute inset-0 bg-purple-950/20 mix-blend-multiply" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 relative group w-full max-w-md mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative bg-purple-950/60 border border-purple-300/50 p-2 md:p-3 rounded-2xl shadow-2xl backdrop-blur-md">
                <img src={whyslide4} alt="Why Choose Telsite" className="w-full h-auto object-cover rounded-xl opacity-95 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-black text-fuchsia-300 uppercase tracking-widest block drop-shadow-md">Why Choose Telsite?</span>
                <h2 className="text-2xl md:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Turn Your Fleet Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-100 to-indigo-200">Smarter Decisions.</span>
                </h2>
              </div>

              <div className="bg-purple-950/80 p-4 md:p-5 rounded-2xl border border-purple-300/40 backdrop-blur-md shadow-2xl">
                <p className="text-slate-100 text-xs md:text-sm leading-relaxed font-normal">
                  Telsite designs systems intended to reduce massive overhead losses, secure physical cargo channels, and minimize systemic delays.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl border border-purple-300/40 bg-purple-950/85 backdrop-blur-md shadow-lg">
                  <div className="text-xl mb-1.5">📡</div>
                  <h4 className="text-xs font-black text-white mb-1">Real-Time Tracking</h4>
                  <p className="text-[10px] text-slate-200 leading-normal font-normal">Dynamic continuous coordinates without reporting delays.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-purple-300/40 bg-purple-950/85 backdrop-blur-md shadow-lg">
                  <div className="text-xl mb-1.5">🧬</div>
                  <h4 className="text-xs font-black text-white mb-1">Next-Gen Sensors</h4>
                  <p className="text-[10px] text-slate-200 leading-normal font-normal">Capacitive fuel probes and automated geofences.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-purple-300/40 bg-purple-950/85 backdrop-blur-md shadow-lg">
                  <div className="text-xl mb-1.5">🏢</div>
                  <h4 className="text-xs font-black text-white mb-1">Local Support</h4>
                  <p className="text-[10px] text-slate-200 leading-normal font-normal">Backed by expert teams on call 24/7 in Zimbabwe.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE SERVICES OFFERED
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-purple-300/50 bg-purple-950/40 backdrop-blur-md shadow-2xl shadow-purple-900/50 space-y-12">
          
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-purple-950/60 via-purple-900/30 to-purple-950/60" />

          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10 bg-purple-950/80 p-6 rounded-2xl border border-purple-300/40 backdrop-blur-md shadow-2xl">
            <span className="text-xs font-mono font-black text-fuchsia-300 uppercase tracking-widest block drop-shadow-sm">The Services Offered</span>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight px-2">High-Precision Telematics Services Portfolio</h2>
            <p className="text-[10px] md:text-xs text-purple-200 font-mono font-bold">💡 Click any telematics product matrix below to view full deep-dive operational capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {productsArray.map(([key, product]) => {
              const borderStyles = 
                key === 'speedLimiter' ? 'border-t-amber-300' :
                key === 'ifleetmaxFuel' ? 'border-t-fuchsia-300' :
                key === 'iroam' ? 'border-t-purple-200' : 'border-t-purple-300';

              const bgAsset = productBackgrounds[key] || '';
              const iconAsset = iconCatalog[key] || '';

              return (
                <div 
                  key={key}
                  onClick={() => onNavigate('product', key)}
                  className={`relative bg-purple-950/80 border border-purple-300/40 border-t-4 ${borderStyles} rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(232,121,249,0.5)] hover:border-white hover:bg-purple-900/90 hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden min-h-[280px] w-full backdrop-blur-md`}
                >
                  {bgAsset && (
                    <div 
                      style={{ backgroundImage: `url(${bgAsset})` }} 
                      className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none z-0 saturate-[1.3] brightness-90 group-hover:opacity-50 group-hover:scale-105 transition-all duration-300"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-950/60 to-purple-950/90 z-5 pointer-events-none" />

                  {iconAsset && (
                    <div className="absolute top-4 right-4 z-20 h-9 w-9 rounded-xl bg-purple-950/90 border border-purple-300/50 p-1.5 flex items-center justify-center shadow-md backdrop-blur-md group-hover:border-white group-hover:scale-110 transition-all duration-300">
                      <img 
                        src={iconAsset} 
                        alt={`${product.title} icon`}
                        className="w-full h-full object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}

                  <div className="space-y-3 relative z-10 pr-10">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-black text-white group-hover:text-fuchsia-200 transition-colors leading-snug drop-shadow-md">
                        {product.title}
                      </h3>
                    </div>
                    {product.complianceBadge && (
                      <span className="inline-block bg-amber-300/25 text-amber-200 border border-amber-300/50 text-[8px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-wider w-max shadow-xs">
                        S.I. 118 Approved
                      </span>
                    )}
                    <p className="text-[10px] text-fuchsia-300 font-mono uppercase font-black tracking-wider">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-100 leading-relaxed font-normal">
                      {product.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple-300/30 flex items-center justify-between text-[11px] font-mono font-bold text-fuchsia-300 group-hover:text-white transition-colors relative z-10">
                    <span>Inspect System Spec Sheet</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ABOUT US
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-purple-300/50 bg-purple-950/40 backdrop-blur-md shadow-2xl shadow-purple-900/50 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-purple-950/60 via-purple-900/30 to-purple-950/60" />

          <div className="md:col-span-7 space-y-6 order-2 md:order-1 relative z-10">
            <div className="space-y-2">
              <span className="text-xs font-mono font-black text-fuchsia-300 uppercase tracking-widest block drop-shadow-sm">About Telsite Tracking</span>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-md">Deep Roots In Telecommunications Excellence</h3>
            </div>
            
            <div className="bg-purple-950/80 p-4 md:p-5 rounded-2xl border border-purple-300/40 backdrop-blur-md shadow-2xl">
              <p className="text-xs md:text-sm text-slate-100 leading-relaxed font-normal">
                Established in Zimbabwe in 2010 as a dedicated division of Telsite Investments (Pvt) Ltd, we have leveraged decades of localized market insight to formulate robust tracking solutions.
              </p>
            </div>

            <div className="p-4 bg-purple-950/85 rounded-2xl border border-purple-300/40 italic text-xs text-slate-100 font-normal relative pl-8 shadow-xl backdrop-blur-md">
              <span className="absolute left-3 top-2 text-2xl text-fuchsia-300 font-serif">“</span>
              Your operational needs remain our priority.
              <div className="mt-2 text-[10px] font-mono font-black text-fuchsia-300 not-italic uppercase tracking-wider">— Eng. Lambros Antoniades, Managing Director</div>
            </div>
          </div>

          <div className="md:col-span-5 relative group w-full order-1 md:order-2 max-w-md mx-auto md:max-w-none relative z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative bg-purple-950/60 border border-purple-300/50 p-2 md:p-3 rounded-2xl shadow-2xl backdrop-blur-md w-full">
              <img src={fleetImage2} alt="Footer Graphic" className="w-full h-auto max-h-[350px] object-cover rounded-xl opacity-95 group-hover:opacity-100 transition-opacity block" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}