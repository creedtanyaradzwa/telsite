import { useState, useEffect } from 'react';
import { productCatalog } from '../config/products';

// Product slideshow images
import ifleetmax2   from '../assets/imaxfleet2.jpg';
import fuel2        from '../assets/maxfuel2.webp';
import speed2       from '../assets/speed2.webp';
import roam2        from '../assets/rom2.webp';
import asset2       from '../assets/asset2.webp';
import bike2        from '../assets/bike 3.webp';
import private3     from '../assets/private3.webp';

// Product icons
import iconFleetMax from '../assets/ifleetmaxi.webp';
import iconFuel     from '../assets/ifleetmaxfueli.webp';
import iconRoam     from '../assets/iroami.webp';
import iconSpeed    from '../assets/speedlimiteri.webp';
import iconAsset    from '../assets/iasseti.webp';
import iconPrivate  from '../assets/iPrivatei.webp';
import iconBike     from '../assets/ibikei.webp';

// Feature card background images — cycling pool
import tracking2   from '../assets/tracking2.webp';
import tracking3   from '../assets/tracking3.webp';
import tracking5   from '../assets/tracking5.webp';
import fleet1      from '../assets/fleet1 .webp';
import fleet2      from '../assets/fleet2.jpg';
import fleet3      from '../assets/fleet3.webp';
import bikefleet   from '../assets/bikefleet.webp';

const productImages = {
  ifleetmax:    [iconFleetMax, ifleetmax2, iconFleetMax],
  ifleetmaxFuel:[iconFuel, fuel2, iconFuel],
  speedLimiter: [iconSpeed, speed2, iconSpeed],
  iroam:        [iconRoam, roam2, iconRoam],
  iasset:       [iconAsset, asset2, iconAsset],
  ibike:        [iconBike, bike2, iconBike],
  iprivate:     [iconPrivate, iconPrivate, private3],
};
const iconMap = {
  ifleetmaxFuel: iconFuel, speedLimiter: iconSpeed,
  iroam: iconRoam, iasset: iconAsset, ibike: iconBike, iprivate: iconPrivate,
};

// Pool of real photos for feature cards — cycles through them
const featureBgs = [fleet1, tracking2, fleet2, tracking3, fleet3, tracking5, bikefleet];

export default function ProductView({ productId, onNavigate }) {
  const currentProductId = productId || 'ifleetmax';
  const product          = productCatalog[currentProductId] || productCatalog.ifleetmax;
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = productImages[currentProductId] || productImages.ifleetmax;
  const icon   = iconMap[currentProductId] || iconFleetMax;

  // Reset to first slide whenever the product changes
  useEffect(() => { setActiveSlide(0); }, [currentProductId]);

  // Auto-advance: loops continuously through all slides
  useEffect(() => {
    const timer = setTimeout(() => setActiveSlide(prev => (prev + 1) % slides.length), 2200);
    return () => clearTimeout(timer);
  }, [activeSlide, slides.length]);

  return (
    <div className="w-full min-h-screen font-sans bg-purple-950">

      {/* ── Breadcrumb ── */}
      <div className="pt-24 lg:pt-28 px-6 sm:px-10 md:px-16 pb-5 border-b border-purple-400/20">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <button onClick={() => onNavigate('home')}
            className="cursor-pointer flex items-center gap-2 text-[#D8C7A9] hover:text-white text-sm font-semibold transition-colors group">
            <span className="transform group-hover:-translate-x-0.5 transition-transform">←</span>
            Back to Home
          </button>
          <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest hidden sm:block">
            Spec ID: {currentProductId}
          </span>
        </div>
      </div>

      {/* ── Hero spec ── */}
      <section className="py-14 md:py-20 px-6 sm:px-10 md:px-16 bg-purple-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left — text */}
          <div className="md:col-span-7 space-y-7">
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-xl bg-stone-700 border border-stone-500/50 p-2.5 flex items-center justify-center shadow-md shrink-0">
                <img src={icon} alt={`${product.title} vehicle tracking device by Telsite Zimbabwe`} className="w-full h-full object-contain"
                  loading="lazy" decoding="async" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-semibold text-white leading-tight">{product.title}</h1>
                <p className="text-[#D8C7A9] text-xs font-semibold uppercase tracking-widest mt-1">{product.tagline}</p>
              </div>
            </div>

            {product.complianceBadge && (
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-teal-900/70 border border-teal-600/40">
                <span>⚖️</span>
                <div>
                  <span className="block text-xs font-bold text-teal-200 uppercase tracking-widest">S.I. 118 Compliant</span>
                  <span className="block text-xs text-teal-300/80 mt-0.5">Approved by SAZ and VID Zimbabwe</span>
                </div>
              </div>
            )}

            <div className="section-divider" />
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{product.summary}</p>

            <button onClick={() => onNavigate('contact')}
              className="cursor-pointer inline-flex items-center gap-2 px-7 py-3 bg-[#D8C7A9] hover:bg-white text-amber-950 text-sm font-bold uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-md">
              Request This Product →
            </button>
          </div>

          {/* Right — slideshow */}
          <div className="md:col-span-5">
            <div className="rounded-xl overflow-hidden border border-purple-400/20 shadow-xl">
              <div className="relative w-full h-64 sm:h-72 md:h-80 bg-purple-900/40">
                {slides.map((src, i) => (
                  <img key={i} src={src} alt={`${product.title} view ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${i === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy" decoding="async" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 py-3 bg-purple-950/80 border-t border-purple-400/15">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setActiveSlide(i)} aria-label={`Slide ${i + 1}`}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${i === activeSlide ? 'w-5 h-2 bg-[#D8C7A9]' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features — each card is a full photo with text over a gradient ── */}
      <section className="py-14 md:py-20 px-6 sm:px-10 md:px-16 bg-purple-900/30 border-t border-purple-400/15">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-[#D8C7A9] text-xs font-semibold uppercase tracking-[0.2em]">Capabilities</span>
            <div className="section-divider mt-3" />
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mt-4">
              Full Architectural Feature Set
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {product.details && product.details.map((detail, i) => {
              const colonIdx = detail.indexOf(':');
              const heading  = colonIdx > -1 ? detail.slice(0, colonIdx) : detail;
              const body     = colonIdx > -1 ? detail.slice(colonIdx + 1).trim() : '';
              const bgImg    = featureBgs[i % featureBgs.length];

              return (
                <div key={i} className="relative rounded-xl overflow-hidden min-h-[260px] flex flex-col group">
                  {/* Full vivid background image */}
                  <img
                    src={bgImg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Strong bottom-up gradient — image vivid at top, text dominant at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/10" />

                  {/* Number badge — top left, same style as khaki badge */}
                  <div className="relative z-10 px-5 pt-5">
                    <span className="inline-block bg-[#D8C7A9] text-amber-950 text-xs font-black px-3 py-1 rounded-md tracking-widest uppercase shadow-lg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Text — pinned to bottom, bold and vivid, same visual weight as badge */}
                  <div className="relative z-10 mt-auto px-5 pb-6 pt-3 space-y-2">
                    <h4 className="text-white font-black text-xl sm:text-2xl leading-snug tracking-tight"
                        style={{ textShadow: '0 0 20px rgba(255,255,255,0.25), 0 2px 16px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.9)' }}>
                      {heading}
                    </h4>
                    {body && (
                      <p className="text-[#F3EAD8] text-sm sm:text-base font-semibold leading-relaxed"
                         style={{ textShadow: '0 1px 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.9)' }}>
                        {body}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-10 border-t border-purple-400/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-white font-semibold text-base">Ready to deploy {product.title}?</p>
              <p className="text-slate-300 text-sm mt-0.5">Our team will set everything up within 24 hours of your request.</p>
            </div>
            <button onClick={() => onNavigate('contact')}
              className="cursor-pointer shrink-0 px-7 py-3 bg-[#D8C7A9] hover:bg-white text-amber-950 text-sm font-bold uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-md">
              Request Service →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
