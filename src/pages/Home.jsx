import { useState, useEffect } from 'react';
import { productCatalog } from '../config/products';
import fleetImage from '../assets/fleet1 .jpg';
import fleetImage2 from '../assets/fleet2.jpg';

import bgSlide1 from '../assets/fleet1 .jpg';
import bgSlide2 from '../assets/fleet2.jpg';
import bgSlide3 from '../assets/fleet3.png';

import prodBg1 from '../assets/fleet1 .jpg';   // Mapped to: ifleetmax
import prodBg2 from '../assets/fleet2.jpg';   // Mapped to: ifleetmaxFuel
import prodBg3 from '../assets/fleet3.png';   // Mapped to: iroam
import prodBg4 from '../assets/fleet1 .jpg';  // Mapped to: speedLimiter
import prodBg5 from '../assets/iassets.jpg';   // Mapped to: iasset
import prodBg6 from '../assets/private.png';   // Mapped to: iprivate
import prodBg7 from '../assets/bikefleet.jpg';// Mapped to: ibike

export default function Home({ onNavigate }) {
  const backgroundSlideshowImages = [bgSlide1, bgSlide2, bgSlide3];
  
  const productBackgrounds = {
    ifleetmax: prodBg1,
    ifleetmaxFuel: prodBg2,
    iroam: prodBg3,
    speedLimiter: prodBg4,
    iasset: prodBg5,
    iprivate: prodBg6,
    ibike: prodBg7,
  };

  const [currentBgIndex, setCurrentBgIndex] = useState(0);
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

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen py-16 px-4 md:px-6 relative overflow-hidden">
      
      {/* FUTURISTIC BACKGROUND GRADIENT GLOWS */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-theme-purple/5 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-theme-blue/5 blur-[70px] md:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-theme-lime/5 blur-[60px] md:blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20 md:space-y-32">
        
        {/* =========================================================================
            SECTION 1: HERO / WHAT TELSITE DOES
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-slate-200/60 shadow-xs">
          
          {/* DYNAMIC AMBIENT SLIDESHOW LAYER */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {backgroundSlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
                  ${index === currentBgIndex ? 'opacity-15 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-md" />
          </div>

          {/* ACTIVE HERO CONTENT CONTAINER */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
              <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight md:leading-none">
                Advanced Fleet Management For <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-purple to-theme-blue">Every Business.</span>
              </h1>
              <p className="text-slate-600 text-xs md:text-base leading-relaxed max-w-xl">
                Telsite Tracking deploys cutting-edge technology allowing clients to monitor, control, and optimize their mobile assets in the most efficient and effective way. In today's competitive landscape, high-quality vehicle tracking has transformed from an option into a strategic business necessity.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-mono font-bold text-slate-700 flex items-center gap-2 shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-theme-blue animate-pulse" /> Real-Time Location Updates
                </span>
                <span className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-mono font-bold text-slate-700 flex items-center gap-2 shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-theme-lime" /> Fuel Theft Reduction
                </span>
              </div>
            </div>
            
            <div className="md:col-span-5 relative group order-1 md:order-2 w-full max-w-md mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-theme-purple to-theme-blue rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white border border-slate-200 p-2 md:p-3 rounded-2xl shadow-md">
                <img 
                  src={fleetImage} 
                  alt="Telsite Advanced Fleet Management Flyer Graphic" 
                  className="w-full h-auto object-cover rounded-xl shadow-xs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WHY CHOOSE TELSITE 
           ========================================================================= */}
        <section className="space-y-8 md:space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono font-black text-theme-purple uppercase tracking-widest">
              Why Choose Telsite?
            </h2>
            <p className="text-xl md:text-3xl font-black text-slate-900 tracking-tight px-2">
              Turn Fleet Data into Smarter Business Decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="light-glass light-glass-hover p-6 rounded-2xl space-y-4 border-l-4 border-l-theme-blue">
              <div className="text-2xl">📡</div>
              <h3 className="text-base font-black text-slate-900">Reliable Real-Time Tracking</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Continuous polling data updates mapped precisely with dynamic GPS coordinates. View exact vehicle position, speed indexes, and immediate trip telemetry status with zero structural reporting latency.
              </p>
            </div>

            <div className="light-glass light-glass-hover p-6 rounded-2xl space-y-4 border-l-4 border-l-theme-lime">
              <div className="text-2xl">🧬</div>
              <h3 className="text-base font-black text-slate-900">State-of-the-Art Features</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Harness high-accuracy capacitive fuel sensors, localized diagnostic geofencing, custom automated alert routines, maintenance timeline alerts, and aggressive driver behavior assessment logs.
              </p>
            </div>

            <div className="light-glass light-glass-hover p-6 rounded-2xl space-y-4 border-l-4 border-l-theme-purple">
              <div className="text-2xl">🏢</div>
              <h3 className="text-base font-black text-slate-900">Strong Corporate Backbone</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Our tracking architecture is fully verified by top-tier reputable enterprises and state-sanctioned bodies throughout Zimbabwe, delivering scalable fleet coverage backed by dedicated local account consultants.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE SERVICES OFFERED (STATIC RESPONSIVE GRID)
           ========================================================================= */}
        <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 shadow-sm relative overflow-hidden space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono font-black text-theme-blue uppercase tracking-widest">
              The Services Offered
            </h2>
            <p className="text-xl md:text-3xl font-black text-slate-900 tracking-tight px-2">
              High-Precision Telematics Services Portfolio
            </p>
            <p className="text-[10px] md:text-xs text-slate-500 font-mono">
              💡 Click any telematics product matrix below to view full deep-dive operational capabilities.
            </p>
          </div>

          {/* DYNAMIC RESPONSIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsArray.map(([key, product]) => {
              const borderStyles = 
                key === 'speedLimiter' ? 'border-t-theme-orange' :
                key === 'ifleetmaxFuel' ? 'border-t-theme-lime' :
                key === 'iroam' ? 'border-t-theme-blue' : 'border-t-theme-purple';

              const bgAsset = productBackgrounds[key] || '';

              return (
                <div 
                  key={key}
                  onClick={() => onNavigate('product', key)}
                  className={`relative bg-white/80 border border-slate-200 border-t-4 ${borderStyles} rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden min-h-[280px] w-full`}
                >
                  {/* BACKGROUND ASSET INTERPOLATION */}
                  {bgAsset && (
                    <div 
                      style={{ backgroundImage: `url(${bgAsset})` }} 
                      className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none z-0 mix-blend-normal group-hover:opacity-25 group-hover:scale-105 transition-all duration-300"
                    />
                  )}

                  {/* READABILITY CONTRAST LAYER */}
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-5 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-theme-purple transition-colors leading-snug">
                        {product.title}
                      </h3>
                      {product.complianceBadge && (
                        <span className="shrink-0 bg-theme-orange/10 text-theme-orange border border-theme-orange/20 text-[8px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-wider">
                          S.I. 118 Approved
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-theme-blue font-mono uppercase font-bold tracking-wider">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-800 leading-relaxed font-bold">
                      {product.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono font-bold text-slate-600 group-hover:text-theme-purple transition-colors relative z-10">
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
        <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-theme-purple/5 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="md:col-span-7 space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-black text-theme-purple uppercase tracking-widest">
                About Telsite Tracking
              </h2>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Deep Roots In Telecommunications Excellence
              </h3>
            </div>
            
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              Established in Zimbabwe in 2010 as a dedicated division of Telsite Investments (Pvt) Ltd, we have leveraged decades of localized market insight to formulate robust tracking solutions. In 2014, Telsite officially secured status as a strategic distributor for global GPS infrastructure hardware. We continually adapt our framework based on strict domestic feedback to keep your operations highly profitable.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 italic text-xs text-slate-500 font-medium relative pl-8">
              <span className="absolute left-3 top-2 text-2xl text-theme-purple font-serif">“</span>
              Your operational needs remain our structural engineering priority. We welcome complex custom configuration requests to safeguard your enterprise logistics.
              <div className="mt-2 text-[10px] font-mono font-bold text-slate-700 not-italic uppercase tracking-wider">
                — Eng. Lambros Antoniades, Managing Director
              </div>
            </div>
          </div>

          <div className="md:col-span-5 relative group w-full order-1 md:order-2 max-w-md mx-auto md:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-theme-purple to-theme-blue rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white border border-slate-200 p-2 md:p-3 rounded-2xl shadow-md w-full">
              <img 
                src={fleetImage2} 
                alt="Telsite Advanced Fleet Management Flyer Graphic" 
                className="w-full h-auto max-h-[350px] object-cover rounded-xl shadow-xs block"
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}