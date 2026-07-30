import { useState, useEffect } from 'react';
import { productCatalog } from '../config/products';
import fleetImage from '../assets/fleet1 .webp';

// HERO BACKGROUND SLIDESHOW IMAGES
import bgSlide1 from '../assets/fleet1 .webp';
import bgSlide2 from '../assets/private1.webp';
import bgSlide3 from '../assets/fleet3.webp';

// SECTION 2 BACKGROUND SLIDESHOW IMAGES
import whySlide1 from '../assets/tracking 4.webp'; 
import whySlide2 from '../assets/tracking5.webp';
import whySlide3 from '../assets/tracking2.webp';
import whyslide4 from '../assets/tracking3.webp';

// SECTION 4 ABOUT US BACKGROUND SLIDESHOW IMAGES 
import aboutSlide1 from '../assets/tracking5.webp';

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
  const backgroundSlideshowImages = [bgSlide1, bgSlide2, bgSlide3];
  const whySlideshowImages = [whySlide1, whySlide2, whySlide3];
  
  // ABOUT US SLIDESHOW IMAGES ARRAY
  const aboutSlideshowImages = [aboutSlide1]; 

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
  const [currentAboutBgIndex, setCurrentAboutBgIndex] = useState(0);
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

  // ABOUT US SLIDESHOW TIMER ROUTINE
  useEffect(() => {
    if (aboutSlideshowImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentAboutBgIndex((prevIndex) => 
        prevIndex === aboutSlideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6500);
    return () => clearInterval(interval);
  }, [aboutSlideshowImages.length]);

  return (
    <div className="w-full bg-gradient-to-b from-purple-950 via-[#2f083d] to-purple-950 text-slate-100 min-h-screen py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Telsite Ambient Glow Orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#b015db]/20 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-orange-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#ad18aa]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl 2xl:max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-20">
        
        {/* =========================================================================
            SECTION 1: HERO / WHAT TELSITE DOES
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-orange-500/30 bg-slate-900 shadow-2xl shadow-black/40">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {backgroundSlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out
                  ${index === currentBgIndex ? 'opacity-80 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
              <span className="inline-block bg-slate-900/90 border border-orange-500/60 text-orange-400 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                ✦ High-Precision Telematics Infrastructure
              </span>

              <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                Advanced Fleet Management For <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white">Every Business.</span>
              </h1>
              
              <div className="bg-slate-950/85 p-4 md:p-5 rounded-2xl border border-orange-500/40 backdrop-blur-md shadow-2xl">
                <p className="text-slate-100 text-xs md:text-base leading-relaxed font-normal">
                  Telsite Tracking deploys cutting-edge technology allowing clients to monitor, control, and optimize their mobile assets in the most efficient and effective way.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-slate-950/85 border border-orange-500/50 backdrop-blur-md rounded-xl px-3.5 py-2 text-[10px] md:text-xs font-mono font-black text-orange-400 flex items-center gap-2 shadow-lg uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-orange-500 animate-ping" /> Real-Time Location Updates
                </span>
                <span className="bg-slate-950/85 border border-orange-500/50 backdrop-blur-md rounded-xl px-3.5 py-2 text-[10px] md:text-xs font-mono font-black text-amber-300 flex items-center gap-2 shadow-lg uppercase tracking-wider">
                  <span className="h-2 w-2 rounded-full bg-amber-400" /> Fuel Theft Reduction
                </span>
              </div>
            </div>
            
            <div className="md:col-span-5 relative group order-1 md:order-2 w-full max-w-md mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-slate-950/90 border border-orange-500/40 p-2 md:p-3 rounded-2xl shadow-2xl">
                <img src={fleetImage} alt="Hero Graphic" className="w-full h-auto object-cover rounded-xl block" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WHY CHOOSE TELSITE
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-orange-500/30 bg-slate-900 shadow-2xl shadow-black/40">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {whySlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out
                  ${index === currentWhyBgIndex ? 'opacity-80 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 relative group w-full max-w-md mx-auto md:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-slate-950/90 border border-orange-500/40 p-2 md:p-3 rounded-2xl shadow-2xl">
                <img src={whyslide4} alt="Why Choose Telsite" className="w-full h-auto object-cover rounded-xl block" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="inline-block bg-slate-900/90 border border-orange-500/60 text-orange-400 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                  Why Choose Telsite?
                </span>
                <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  Turn Your Fleet Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white">Smarter Decisions.</span>
                </h2>
              </div>

              <div className="bg-slate-950/85 p-4 md:p-5 rounded-2xl border border-orange-500/40 backdrop-blur-md shadow-2xl">
                <p className="text-slate-100 text-xs md:text-sm leading-relaxed font-normal">
                  Telsite designs systems intended to reduce massive overhead losses, secure physical cargo channels, and minimize systemic delays.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl border border-orange-500/30 bg-slate-950/85 backdrop-blur-md shadow-lg space-y-1 hover:border-orange-500/60 transition-all duration-300">
                  <div className="text-xl mb-1">📡</div>
                  <h4 className="text-xs font-mono font-black text-orange-400 uppercase tracking-wider">Real-Time Tracking</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal">Dynamic continuous coordinates without reporting delays.</p>
                </div>
                <div className="p-4 rounded-2xl border border-orange-500/30 bg-slate-950/85 backdrop-blur-md shadow-lg space-y-1 hover:border-orange-500/60 transition-all duration-300">
                  <div className="text-xl mb-1">🧬</div>
                  <h4 className="text-xs font-mono font-black text-orange-400 uppercase tracking-wider">Next-Gen Sensors</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal">Capacitive fuel probes and automated geofences.</p>
                </div>
                <div className="p-4 rounded-2xl border border-orange-500/30 bg-slate-950/85 backdrop-blur-md shadow-lg space-y-1 hover:border-orange-500/60 transition-all duration-300">
                  <div className="text-xl mb-1">🏢</div>
                  <h4 className="text-xs font-mono font-black text-orange-400 uppercase tracking-wider">Local Support</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal">Backed by expert teams on call 24/7 in Zimbabwe.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE SERVICES OFFERED
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-orange-500/30 bg-slate-900 shadow-2xl shadow-black/40 space-y-10 md:space-y-12 backdrop-blur-md">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10 bg-slate-950/85 p-6 rounded-2xl border border-orange-500/40 backdrop-blur-md shadow-2xl">
            <span className="inline-block bg-orange-500 border border-orange-400/50 text-white font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              The Services Offered
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight px-2">
              High-Precision Telematics Services Portfolio
            </h2>
            <p className="text-[10px] md:text-xs text-orange-400 font-mono font-bold uppercase tracking-wide">
              💡 Click any product card below to view full spec sheet details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {productsArray.map(([key, product]) => {
              const borderStyles = 
                key === 'speedLimiter' ? 'border-t-amber-400' :
                key === 'ifleetmaxFuel' ? 'border-t-orange-500' :
                key === 'iroam' ? 'border-t-amber-300' : 'border-t-orange-400';

              const bgAsset = productBackgrounds[key] || '';
              const iconAsset = iconCatalog[key] || '';

              return (
                <div 
                  key={key}
                  onClick={() => onNavigate('product', key)}
                  className={`relative bg-slate-950/90 border border-orange-500/30 border-t-4 ${borderStyles} rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden min-h-[280px] w-full`}
                >
                  {bgAsset && (
                    <div 
                      style={{ backgroundImage: `url(${bgAsset})` }} 
                      className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none z-0 group-hover:opacity-60 transition-opacity duration-300"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90 z-5 pointer-events-none" />

                  {iconAsset && (
                    <div className="absolute top-4 right-4 z-20 h-9 w-9 rounded-xl bg-slate-900 border border-orange-500/40 p-1.5 flex items-center justify-center shadow-md group-hover:border-orange-400 group-hover:scale-110 transition-all duration-300">
                      <img 
                        src={iconAsset} 
                        alt={`${product.title} icon`}
                        className="w-full h-full object-contain block opacity-95 group-hover:opacity-100"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}

                  <div className="space-y-3 relative z-10 pr-10">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-black text-white group-hover:text-orange-300 transition-colors leading-snug drop-shadow-md">
                        {product.title}
                      </h3>
                    </div>
                    {product.complianceBadge && (
                      <span className="inline-block bg-orange-500/20 text-orange-400 border border-orange-500/50 text-[8px] font-mono font-black px-2 py-0.5 rounded uppercase tracking-wider w-max shadow-xs">
                        S.I. 118 Approved
                      </span>
                    )}
                    <p className="text-[10px] text-orange-400 font-mono uppercase font-black tracking-wider">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-slate-100 leading-relaxed font-normal">
                      {product.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-orange-500/30 flex items-center justify-between text-[11px] font-mono font-bold text-orange-400 group-hover:text-amber-300 transition-colors relative z-10">
                    <span>Inspect System Spec Sheet</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ABOUT US (DYNAMIC SLIDESHOW)
           ========================================================================= */}
        <section className="relative rounded-3xl overflow-hidden p-6 md:p-12 border border-orange-500/30 bg-slate-900 shadow-2xl shadow-black/40">
          
          {/* Background Slideshow Layer for About Us */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {aboutSlideshowImages.map((src, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${src})` }}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out
                  ${index === currentAboutBgIndex ? 'opacity-80 scale-100' : 'opacity-0 scale-105 transform'}`}
              />
            ))}
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6 order-2 md:order-1 relative z-10">
              <div className="space-y-2">
                <span className="inline-block bg-slate-900/90 border border-orange-500/60 text-orange-400 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                  About Telsite Tracking
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-md">
                  Deep Roots In Telecommunications Excellence
                </h3>
              </div>
              
              <div className="bg-slate-950/85 p-4 md:p-5 rounded-2xl border border-orange-500/40 backdrop-blur-md shadow-2xl">
                <p className="text-xs md:text-sm text-slate-100 leading-relaxed font-normal">
                  Established in Zimbabwe in 2010 as a dedicated division of Telsite Investments (Pvt) Ltd, we have leveraged decades of localized market insight to formulate robust tracking solutions.
                </p>
              </div>

              <div className="p-4 bg-slate-950/85 rounded-2xl border border-orange-500/40 border-l-4 border-l-orange-500 italic text-xs text-slate-100 font-normal relative pl-8 shadow-xl backdrop-blur-md">
                <span className="absolute left-3 top-2 text-2xl text-orange-400 font-serif">“</span>
                Your operational needs remain our priority.
                <div className="mt-2 text-[10px] font-mono font-black text-orange-400 not-italic uppercase tracking-wider">
                  — Eng. Lambros Antoniades, Managing Director
                </div>
              </div>
            </div>

            <div className="md:col-span-5 relative group w-full order-1 md:order-2 max-w-md mx-auto md:max-w-none relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-slate-950/90 border border-orange-500/40 p-2 md:p-3 rounded-2xl shadow-2xl w-full">
                <img src={fleetImage} alt="Footer Graphic" className="w-full h-auto max-h-[350px] object-cover rounded-xl opacity-100 block" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}