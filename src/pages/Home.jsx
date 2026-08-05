import React from 'react';
import { productCatalog } from '../config/products';

// HERO & SECTION STATIC BACKGROUND IMAGES
import bgHero from '../assets/fleet1 .webp';
import bgWhy from '../assets/bckk.png'; 
import bgAbout from '../assets/tracking5.webp';

// PRODUCT BACKGROUND GRAPHICS
import prodBg1 from '../assets/fleet1 .webp';   // Mapped to: ifleetmax
import prodBg2 from '../assets/fleet2.jpg';    // Mapped to: ifleetmaxFuel
import prodBg3 from '../assets/fleet3.webp';   // Mapped to: iroam
import prodBg4 from '../assets/fleet1 .webp';  // Mapped to: speedLimiter
import prodBg5 from '../assets/iassets.webp';  // Mapped to: iasset
import prodBg6 from '../assets/private.webp';  // Mapped to: iprivate
import prodBg7 from '../assets/bikefleet.webp';// Mapped to: ibike

// SMALL CORNER PRODUCT ICONS IMPORTS
import iconFleetMax from '../assets/ifleetmaxi.webp'; 
import iconFuel from '../assets/ifleetmaxfueli.webp';
import iconRoam from '../assets/iroami.webp';
import iconSpeed from '../assets/speedlimiteri.webp';
import iconAsset from '../assets/iasseti.webp';
import iconPrivate from '../assets/iPrivatei.webp';
import iconBike from '../assets/ibikei.webp';

export default function Home({ onNavigate }) {
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

  const productsArray = Object.entries(productCatalog);

  return (
    <div className="w-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 text-black min-h-screen relative overflow-hidden font-sans antialiased">
      
      {/* =========================================================================
          ANIMATED GLOWING & MOVING AMBIENT LIGHT ORBS
         ========================================================================= */}
      {/* Top-Right Glowing Orb */}
      <div className="absolute top-[-5%] right-[-5%] w-[450px] md:w-[750px] h-[450px] md:h-[750px] rounded-full bg-[#D8C7A9]/20 blur-[130px] pointer-events-none animate-pulse duration-[7000ms]" />

      {/* Middle Floating Purple Neon Orb */}
      <div className="absolute top-[30%] left-[-8%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-fuchsia-400/20 blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />

      {/* Middle Right Soft Khaki Orb */}
      <div className="absolute top-[60%] right-[-5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-[#D8C7A9]/15 blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />

      {/* Bottom Floating Indigo-Khaki Glow */}
      <div className="absolute bottom-[-5%] left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-purple-300/15 blur-[150px] pointer-events-none animate-pulse duration-[9000ms]" />

      <div className="w-full space-y-0 relative z-10 pt-28 lg:pt-32">
        
        {/* =========================================================================
            SECTION 1: HERO / WHAT TELSITE DOES
           ========================================================================= */}
        <section className="relative overflow-hidden p-8 md:p-16 border-b border-white/60 bg-white/10 backdrop-blur-3xl min-h-[500px] flex items-center justify-center group transition-all duration-500">
          
          {/* Background Image */}
          <img 
            src={bgHero} 
            alt="Hero Telematics Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto w-full space-y-7 text-left">
            <span className="inline-flex items-center gap-2.5 bg-[#D8C7A9] text-amber-950 font-mono text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2.5 rounded-full border border-white shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_12px_24px_rgba(0,0,0,0.4)]">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-950 animate-ping" />
              High-Precision Telematics Infrastructure
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-amber-950 tracking-tight leading-[1.1] drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)] max-w-3xl">
              <span className="text-amber-900 drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)]">  Advanced Vehicle Tracking For Every Business.</span>
            </h1>
            
            {/* 4D Volumetric Khaki Glass Plate */}
            <div className="bg-[#D8C7A9]/95 backdrop-blur-3xl p-6 md:p-8 rounded-3xl border border-white/90 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] max-w-3xl transform hover:-translate-y-1 transition-all duration-300">
              <p className="text-amber-950 text-base md:text-xl leading-relaxed font-black tracking-wide">
                Telsite Tracking deploys cutting-edge vehicle tracking technology allowing clients to monitor, control, and optimize their mobile assets in the most efficient and effective way.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <span className="bg-[#D8C7A9] border border-white/90 backdrop-blur-2xl rounded-2xl px-5 py-2.5 text-xs md:text-sm font-mono font-black text-amber-950 flex items-center gap-2.5 uppercase tracking-wider shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_12px_24px_rgba(0,0,0,0.4)]">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-950" /> Real-Time Location Updates
              </span>
              <span className="bg-[#D8C7A9] border border-white/90 backdrop-blur-2xl rounded-2xl px-5 py-2.5 text-xs md:text-sm font-mono font-black text-amber-950 flex items-center gap-2.5 uppercase tracking-wider shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_12px_24px_rgba(0,0,0,0.4)]">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-950" /> Fuel Theft Reduction
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SERVICES OFFERED
           ========================================================================= */}
        <section className="relative overflow-hidden p-8 md:p-16 border-b border-white/60 bg-purple-900/30 space-y-12 backdrop-blur-3xl">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full space-y-12">
            
            {/* Header Card */}
            <div className="text-center max-w-3xl mx-auto space-y-4 bg-[#D8C7A9]/95 backdrop-blur-3xl border border-white/90 p-8 rounded-3xl shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.4)]">
              <span className="inline-block bg-amber-950 text-[#F3EAD8] font-mono text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-md">
                The Services Offered
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-amber-950 tracking-tight">
                High-Precision Telematics Services Portfolio
              </h2>
              <p className="text-xs md:text-sm text-amber-900 font-mono font-black uppercase tracking-wide">
                💡 Click any product card below to view full spec sheet details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
              {productsArray.map(([key, product]) => {
                const bgAsset = productBackgrounds[key] || '';
                const iconAsset = iconCatalog[key] || '';

                return (
                  <div 
                    key={key}
                    onClick={() => onNavigate('product', key)}
                    className="relative rounded-3xl p-8 flex flex-col justify-between shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-3 hover:shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group overflow-hidden min-h-[360px] w-full border border-white/90 bg-[#D8C7A9]/95 backdrop-blur-3xl"
                  >
                    {/* Dimmed Product Card Background Image */}
                    {bgAsset && (
                      <img 
                        src={bgAsset} 
                        alt={`${product.title} background`}
                        className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0 group-hover:scale-105 filter brightness-75 contrast-125"
                      />
                    )}

                    {/* Corner Icon Glass Sphere */}
                    {iconAsset && (
                      <div className="absolute top-6 right-6 z-20 h-12 w-12 rounded-2xl bg-amber-950 border border-white/90 backdrop-blur-md p-2 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_12px_24px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                        <img 
                          src={iconAsset} 
                          alt={`${product.title} icon`}
                          className="w-full h-full object-contain block opacity-95 group-hover:opacity-100"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                    )}

                    <div className="space-y-4 relative z-10 pr-10">
                      <h3 className="text-xl md:text-2xl font-black text-amber-950 group-hover:text-purple-950 transition-colors leading-snug">
                        {product.title}
                      </h3>

                      {product.complianceBadge && (
                        <span className="inline-block bg-amber-950 text-[#F3EAD8] text-[10px] font-mono font-black px-3 py-1 rounded-lg uppercase tracking-wider w-max shadow-md">
                          S.I. 118 Approved
                        </span>
                      )}

                      <p className="text-xs md:text-sm text-amber-900 font-mono uppercase font-black tracking-wider">
                        {product.tagline}
                      </p>

                      <p className="text-base md:text-lg text-amber-950 leading-relaxed font-extrabold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                        {product.summary}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-amber-950/30 flex items-center justify-between text-xs sm:text-sm font-mono font-black text-amber-950 group-hover:text-purple-950 transition-colors relative z-10">
                      <span>VIEW PRODUCT</span>
                      <span className="transform group-hover:translate-x-2 transition-transform text-base">→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHY CHOOSE TELSITE
           ========================================================================= */}
        <section className="relative overflow-hidden p-8 md:p-16 border-b border-white/60 bg-white/10 backdrop-blur-3xl group">
          
          {/* Background Image */}
          <img 
            src={bgWhy} 
            alt="Why Choose Telsite Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto w-full space-y-10 text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block bg-[#D8C7A9] text-amber-950 font-mono text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2 rounded-full border border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_12px_24px_rgba(0,0,0,0.4)]">
                Why Choose Telsite?
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-amber-950 tracking-tight leading-tight drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)]">
                 <span className="text-amber-900 drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)]">Turn Your Fleet Data Into Smarter Decisions.</span>
              </h2>
            </div>

            {/* Main Khaki Glass Banner */}
            <div className="bg-[#D8C7A9]/95 backdrop-blur-3xl p-6 md:p-8 rounded-3xl border border-white/90 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] max-w-3xl transform hover:-translate-y-1 transition-all duration-300">
              <p className="text-amber-950 text-base md:text-xl leading-relaxed font-black">
                Telsite designs systems intended to reduce massive overhead losses, secure physical cargo channels, and minimize systemic delays.
              </p>
            </div>

            {/* 4D Feature Sub-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-7 rounded-3xl border border-white/90 bg-[#D8C7A9]/95 backdrop-blur-3xl shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_18px_36px_rgba(0,0,0,0.4)] space-y-3 hover:-translate-y-3 hover:shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
                <div className="text-4xl mb-1 filter drop-shadow-lg">📡</div>
                <h3 className="text-base font-black text-amber-950 uppercase tracking-wider">Real-Time Tracking</h3>
                <p className="text-xs md:text-sm text-amber-950 font-black leading-relaxed">Dynamic continuous coordinates without reporting delays.</p>
              </div>
              
              <div className="p-7 rounded-3xl border border-white/90 bg-[#D8C7A9]/95 backdrop-blur-3xl shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_18px_36px_rgba(0,0,0,0.4)] space-y-3 hover:-translate-y-3 hover:shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
                <div className="text-4xl mb-1 filter drop-shadow-lg">🧬</div>
                <h3 className="text-base font-black text-amber-950 uppercase tracking-wider">Next-Gen Sensors</h3>
                <p className="text-xs md:text-sm text-amber-950 font-black leading-relaxed">Capacitive fuel probes and automated geofences.</p>
              </div>
              
              <div className="p-7 rounded-3xl border border-white/90 bg-[#D8C7A9]/95 backdrop-blur-3xl shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_18px_36px_rgba(0,0,0,0.4)] space-y-3 hover:-translate-y-3 hover:shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
                <div className="text-4xl mb-1 filter drop-shadow-lg">🏢</div>
                <h3 className="text-base font-black text-amber-950 uppercase tracking-wider">Local Support</h3>
                <p className="text-xs md:text-sm text-amber-950 font-black leading-relaxed">Backed by expert teams on call 24/7 in Zimbabwe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ABOUT US
           ========================================================================= */}
        <section className="relative overflow-hidden p-8 md:p-16 bg-white/10 backdrop-blur-3xl group">
          
          {/* Background Image */}
          <img 
            src={bgAbout} 
            alt="About Us Background" 
            className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
          />

          <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto w-full space-y-7 text-left">
            <div className="space-y-3 max-w-3xl">
              <span className="inline-block bg-[#D8C7A9] text-amber-950 font-mono text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2 rounded-full border border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_12px_24px_rgba(0,0,0,0.4)]">
                About Telsite Tracking
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-amber-950 tracking-tight leading-tight drop-shadow-[0_4px_8px_rgba(255,255,255,0.7)]">
                Deep Roots In Telecommunications Excellence
              </h3>
            </div>
            
            {/* Description Glass Box */}
            <div className="bg-[#D8C7A9]/95 backdrop-blur-3xl p-6 md:p-8 rounded-3xl border border-white/90 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] max-w-3xl transform hover:-translate-y-1 transition-all duration-300">
              <p className="text-amber-950 text-base md:text-xl leading-relaxed font-black">
                Established in Zimbabwe in 2010 as a dedicated division of Telsite Investments (Pvt) Ltd, we have leveraged decades of localized market insight to formulate robust tracking solutions.
              </p>
            </div>

            {/* Quote Glass Box */}
            <div className="p-7 bg-[#D8C7A9]/95 backdrop-blur-3xl rounded-3xl border-l-8 border-l-amber-950 border-y border-r border-white/90 italic text-base md:text-lg text-amber-950 font-black relative pl-10 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] max-w-3xl">
              <span className="absolute left-3 top-3 text-4xl text-amber-950 font-serif">“</span>
              Your operational needs remain our priority.
              <div className="mt-3 text-xs md:text-sm font-mono font-black text-amber-950 not-italic uppercase tracking-wider">
                — Eng. Lambros Antoniades, Managing Director
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}