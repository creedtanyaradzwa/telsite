import { useState, useEffect } from 'react';
import { productCatalog } from '../config/products';
import fleetImage from '../assets/fleet1 .jpg';
import fleetImage2 from '../assets/fleet2.jpg';

// HERO BACKGROUND SLIDESHOW IMAGES
import bgSlide1 from '../assets/fleet1 .jpg';
import bgSlide2 from '../assets/fleet2.jpg';
import bgSlide3 from '../assets/fleet3.png';

// SECTION 2 BACKGROUND SLIDESHOW IMAGES
import whySlide1 from '../assets/tracking 4.jpg'; 
import whySlide2 from '../assets/tracking5.jpg';
import whySlide3 from '../assets/tracking2.jpg';
import whyslide4 from '../assets/tracking3.webp';

// PRODUCT BACKGROUND GRAPHICS
import prodBg1 from '../assets/fleet1 .jpg';   // Mapped to: ifleetmax
import prodBg2 from '../assets/fleet2.jpg';   // Mapped to: ifleetmaxFuel
import prodBg3 from '../assets/fleet3.png';   // Mapped to: iroam
import prodBg4 from '../assets/fleet1 .jpg';  // Mapped to: speedLimiter
import prodBg5 from '../assets/iassets.jpg';   // Mapped to: iasset
import prodBg6 from '../assets/private.png';   // Mapped to: iprivate
import prodBg7 from '../assets/bikefleet.jpg';// Mapped to: ibike

// =========================================================================
//SMALL CORNER PRODUCT ICONS IMPORTS

// =========================================================================
import iconFleetMax from '../assets/ifleetmaxi.png'; 
import iconFuel from '../assets/ifleetmaxfueli.png';
import iconRoam from '../assets/iroami.png';
import iconSpeed from '../assets/speedlimiteri.png';
import iconAsset from '../assets/iasseti.png';
import iconPrivate from '../assets/iPrivatei.png';
import iconBike from '../assets/ibikei.png';

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
    <div className="w-full bg-transparent text-slate-100 min-h-screen py-16 px-4 md:px-6 relative overflow-hidden">
      
      {/* FUTURISTIC BACKGROUND GRADIENT GLOWS */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-purple-600/10 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[30%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-violet-500/10 blur-[70px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-fuchsia-600/5 blur-[60px] md:blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20 md:space-y-32">
        
        {/* =========================================================================
            SECTION 1: HERO / WHAT TELSITE DOES
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-white/[0.15] bg-white/[0.02] backdrop-blur-sm shadow-2xl">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {backgroundSlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out
                  ${index === currentBgIndex ? 'opacity-35 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-[#120B2E]/50 to-[#120B2E]/90" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-tight md:leading-none">
                Advanced Fleet Management For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 animate-pulse">Every Business.</span>
              </h1>
              <p className="text-slate-200 text-xs md:text-base leading-relaxed max-w-xl drop-shadow-md">
                Telsite Tracking deploys cutting-edge technology allowing clients to monitor, control, and optimize their mobile assets in the most efficient and effective way.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-purple-900/40 border border-purple-400/30 backdrop-blur-sm rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-mono font-bold text-slate-100 flex items-center gap-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-ping" /> Real-Time Location Updates
                </span>
                <span className="bg-purple-900/40 border border-purple-400/30 backdrop-blur-sm rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-mono font-bold text-slate-100 flex items-center gap-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-violet-400" /> Fuel Theft Reduction
                </span>
              </div>
            </div>
            
            <div className="md:col-span-5 relative group order-1 md:order-2 w-full max-w-md mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-purple-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white/[0.04] border border-white/[0.12] p-2 md:p-3 rounded-2xl shadow-2xl">
                <img src={fleetImage} alt="Hero Graphic" className="w-full h-auto object-cover rounded-xl opacity-95 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WHY CHOOSE TELSITE
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-white/[0.15] bg-white/[0.02] backdrop-blur-sm shadow-2xl">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {whySlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out
                  ${index === currentWhyBgIndex ? 'opacity-30 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-[#120B2E]/60 to-[#120B2E]/90" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 relative group w-full max-w-md mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-white/[0.04] border border-white/[0.12] p-2 md:p-3 rounded-2xl shadow-2xl">
                <img src={whyslide4} alt="Why Choose Telsite" className="w-full h-auto object-cover rounded-xl opacity-95 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono font-black text-fuchsia-400 uppercase tracking-widest block">Why Choose Telsite?</span>
                <h2 className="text-2xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  Turn Your Fleet Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-indigo-200">Smarter Decisions.</span>
                </h2>
              </div>
              <p className="text-slate-200 text-xs md:text-sm leading-relaxed drop-shadow-md">
                Telsite designs systems intended to reduce massive overhead losses, secure physical cargo channels, and minimize systemic delays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
                  <div className="text-xl mb-1.5">📡</div>
                  <h4 className="text-xs font-black text-white mb-1">Real-Time Tracking</h4>
                  <p className="text-[10px] text-slate-300 leading-normal">Dynamic continuous coordinates without reporting delays.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
                  <div className="text-xl mb-1.5">🧬</div>
                  <h4 className="text-xs font-black text-white mb-1">Next-Gen Sensors</h4>
                  <p className="text-[10px] text-slate-300 leading-normal">Capacitive fuel probes and automated geofences.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
                  <div className="text-xl mb-1.5">🏢</div>
                  <h4 className="text-xs font-black text-white mb-1">Local Support</h4>
                  <p className="text-[10px] text-slate-300 leading-normal">Backed by expert teams on call 24/7 in Zimbabwe.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE SERVICES OFFERED (WITH CORNER ASSET ICONS)
           ========================================================================= */}
        <section className="bg-white/[0.01] border border-white/[0.06] backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono font-black text-purple-400 uppercase tracking-widest">The Services Offered</h2>
            <p className="text-xl md:text-3xl font-black text-white tracking-tight px-2">High-Precision Telematics Services Portfolio</p>
            <p className="text-[10px] md:text-xs text-slate-400 font-mono">💡 Click any telematics product matrix below to view full deep-dive operational capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsArray.map(([key, product]) => {
              const borderStyles = 
                key === 'speedLimiter' ? 'border-t-amber-500' :
                key === 'ifleetmaxFuel' ? 'border-t-fuchsia-400' :
                key === 'iroam' ? 'border-t-violet-400' : 'border-t-purple-500';

              const bgAsset = productBackgrounds[key] || '';
              const iconAsset = iconCatalog[key] || ''; // Retrieve the small corner icon

              return (
                <div 
                  key={key}
                  onClick={() => onNavigate('product', key)}
                  className={`relative bg-[#100D1B]/60 border border-white/[0.08] border-t-4 ${borderStyles} rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden min-h-[280px] w-full`}
                >
                  {/* BACKGROUND IMAGE BLEND */}
                  {bgAsset && (
                    <div 
                      style={{ backgroundImage: `url(${bgAsset})` }} 
                      className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none z-0 mix-blend-lighten group-hover:opacity-20 group-hover:scale-105 transition-all duration-300"
                    />
                  )}

                  {/* CONTRAST LAYER */}
                  <div className="absolute inset-0 bg-[#0E0B18]/70 backdrop-blur-[1px] z-5 pointer-events-none" />

                  {/* =========================================================================
                      TOP RIGHT CORNER BLENDED PRODUCT ICON
                     ========================================================================= */}
                  {iconAsset && (
                    <div className="absolute top-4 right-4 z-20 h-8 w-8 rounded-lg bg-slate-950/60 border border-purple-500/30 p-1 flex items-center justify-center shadow-md backdrop-blur-xs group-hover:border-purple-400 group-hover:scale-105 transition-all duration-300">
                      <img 
                        src={iconAsset} 
                        alt={`${product.title} icon`}
                        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}

                  {/* CARD TEXT LAYOUT - pr-10 keeps it perfectly clear of the icon boundary */}
                  <div className="space-y-4 relative z-10 pr-10">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors leading-snug">
                        {product.title}
                      </h3>
                    </div>
                    {product.complianceBadge && (
                      <span className="inline-block bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[8px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-wider w-max">
                        S.I. 118 Approved
                      </span>
                    )}
                    <p className="text-[10px] text-purple-300 font-mono uppercase font-bold tracking-wider">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {product.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-purple-300 transition-colors relative z-10">
                    <span>Inspect System Spec Sheet</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ABOUT US
           ========================================================================= */}
        <section className="bg-white/[0.01] border border-white/[0.06] backdrop-blur-md rounded-3xl p-6 md:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="md:col-span-7 space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-black text-purple-400 uppercase tracking-widest">About Telsite Tracking</h2>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Deep Roots In Telecommunications Excellence</h3>
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-medium">
              Established in Zimbabwe in 2010 as a dedicated division of Telsite Investments (Pvt) Ltd, we have leveraged decades of localized market insight to formulate robust tracking solutions.
            </p>
            <div className="p-4 bg-white/[0.02] rounded-xl border border-white/[0.06] italic text-xs text-slate-400 font-medium relative pl-8">
              <span className="absolute left-3 top-2 text-2xl text-purple-400 font-serif">“</span>
              Your operational needs remain our priority.
              <div className="mt-2 text-[10px] font-mono font-bold text-purple-300 not-italic uppercase tracking-wider">— Eng. Lambros Antoniades, Managing Director</div>
            </div>
          </div>

          <div className="md:col-span-5 relative group w-full order-1 md:order-2 max-w-md mx-auto md:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-violet-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white/[0.02] border border-white/[0.08] p-2 md:p-3 rounded-2xl shadow-2xl w-full">
              <img src={fleetImage2} alt="Footer Graphic" className="w-full h-auto max-h-[350px] object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity block" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}