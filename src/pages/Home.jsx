import { productCatalog } from '../config/products';
import bgHero  from '../assets/fleet1 .webp';
import bgWhy   from '../assets/bckk.png';
import bgAbout from '../assets/tracking5.webp';
import prodBg1 from '../assets/fleet1 .webp';
import prodBg2 from '../assets/fleet2.jpg';
import prodBg3 from '../assets/fleet3.webp';
import prodBg4 from '../assets/fleet1 .webp';
import prodBg5 from '../assets/iassets.webp';
import prodBg6 from '../assets/private.webp';
import prodBg7 from '../assets/bikefleet.webp';
import iconFleetMax from '../assets/ifleetmaxi.webp';
import iconFuel     from '../assets/ifleetmaxfueli.webp';
import iconRoam     from '../assets/iroami.webp';
import iconSpeed    from '../assets/speedlimiteri.webp';
import iconAsset    from '../assets/iasseti.webp';
import iconPrivate  from '../assets/iPrivatei.webp';
import iconBike     from '../assets/ibikei.webp';
const productBackgrounds = {
  ifleetmax:    prodBg1,
  ifleetmaxFuel: prodBg2,
  iroam:        prodBg3,
  speedLimiter: prodBg4,
  iasset:       prodBg5,
  iprivate:     prodBg6,
  ibike:        prodBg7,
};
const iconCatalog = {
  ifleetmax:    iconFleetMax,
  ifleetmaxFuel: iconFuel,
  iroam:        iconRoam,
  speedLimiter: iconSpeed,
  iasset:       iconAsset,
  iprivate:     iconPrivate,
  ibike:        iconBike,
};
export default function Home({ onNavigate }) {
  const productsArray = Object.entries(productCatalog);
  return (
    <div className="w-full min-h-screen font-sans">
      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image — eager / high priority for LCP */}
        <img
          src={bgHero}
          alt="Telsite fleet of commercial vehicles with GPS tracking in Zimbabwe"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Text-first overlay: strong on the left where content lives, fades out on the right so image shows */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-28 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT column — all text and buttons */}
          <div>
          {/* Eyebrow label — no ping dot */}
          <span className="inline-block border border-[#D8C7A9]/60 text-[#D8C7A9] text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            Zimbabwe's Fleet Intelligence Platform
          </span>
          {/* H1 — Playfair Display serif */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#F3EAD8] leading-[1.1] tracking-tight max-w-3xl mb-4">
            Advanced Vehicle Tracking for Every Business
          </h1>
          {/* Subtitle line */}
          <p className="text-[#D8C7A9] text-base sm:text-lg font-light tracking-wide mb-3 max-w-xl">
            Serving Zimbabwe's fleet industry since 2010.
          </p>
          {/* Description */}
          <p className="text-[#D8C7A9]/80 text-sm sm:text-base leading-relaxed max-w-xl mb-10">
            Telsite Tracking deploys cutting-edge vehicle tracking technology allowing clients to monitor, control, and optimise their mobile assets in the most efficient and effective way.
          </p>
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer px-7 py-3 bg-amber-950 hover:bg-amber-900 text-[#F3EAD8] text-sm font-semibold uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-lg"
            >
              Request a Consultation
            </button>
            <button
              onClick={() => onNavigate('product', 'ifleetmax')}
              className="cursor-pointer px-7 py-3 bg-transparent hover:bg-white/10 text-[#D8C7A9] text-sm font-semibold uppercase tracking-widest rounded-lg border border-[#D8C7A9]/50 transition-colors duration-200"
            >
              View Our Products
            </button>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-white/10">
            {['Real-Time Location Updates', 'Fuel Theft Reduction', 'S.I. 118 Compliant'].map(badge => (
              <span key={badge} className="flex items-center gap-2 text-[#D8C7A9]/70 text-xs font-medium tracking-wider uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D8C7A9]/50 shrink-0" />
                {badge}
              </span>
            ))}
          </div>
          </div>
          {/* RIGHT column — empty, lets the background image show clearly */}
          <div className="hidden lg:block" />
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — SERVICES PORTFOLIO
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-purple-950/60 backdrop-blur-sm py-20 md:py-28 px-6 sm:px-10 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="max-w-2xl mb-14">
            <span className="text-[#D8C7A9]/60 text-xs font-semibold uppercase tracking-[0.2em]">What We Offer</span>
            <div className="section-divider mt-3" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#F3EAD8] mt-4 mb-4">
              High-Precision Telematics Services
            </h2>
            <p className="text-[#D8C7A9]/70 text-sm sm:text-base leading-relaxed">
              Click any product card below to view full specification details.
            </p>
          </div>
          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsArray.map(([key, product]) => {
              const bgAsset   = productBackgrounds[key] || '';
              const iconAsset = iconCatalog[key] || '';
              return (
                <div
                  key={key}
                  onClick={() => onNavigate('product', key)}
                  className="relative rounded-xl overflow-hidden border border-white/10 bg-[#D8C7A9]/10 hover:bg-[#D8C7A9]/20 cursor-pointer group transition-all duration-300 hover:shadow-xl hover:border-[#D8C7A9]/30 min-h-[300px] flex flex-col"
                >
                  {/* Product image — clearly visible */}
                  {bgAsset && (
                    <img
                      src={bgAsset}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {/* Heavy gradient — text reads first, image shows beneath */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40" />
                  <div className="relative z-10 p-7 flex flex-col flex-grow">
                    {/* Icon + compliance badge row */}
                    <div className="flex items-start justify-between mb-5">
                      {iconAsset && (
                        <div className="h-11 w-11 rounded-lg bg-amber-950 border border-white/20 p-2 flex items-center justify-center shadow-md shrink-0">
                          <img
                            src={iconAsset}
                            alt={`${product.title} icon`}
                            className="w-full h-full object-contain opacity-90"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        </div>
                      )}
                      {product.complianceBadge && (
                        <span className="text-[10px] font-semibold bg-amber-950/80 text-[#F3EAD8] px-2.5 py-1 rounded uppercase tracking-wider border border-amber-800/40">
                          S.I. 118
                        </span>
                      )}
                    </div>
                    {/* Text */}
                    <h3 className="text-xl font-serif font-semibold text-white mb-1 leading-snug group-hover:text-[#F3EAD8] transition-colors drop-shadow-lg">
                      {product.title}
                    </h3>
                    <p className="text-[#D8C7A9] text-xs font-semibold uppercase tracking-wider mb-3 drop-shadow">
                      {product.tagline}
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed flex-grow drop-shadow">
                      {product.summary}
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white/70 group-hover:text-white transition-colors uppercase tracking-widest drop-shadow">
                      <span>View Specification</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — WHY CHOOSE TELSITE
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 px-6 sm:px-10 md:px-16 overflow-hidden">
        {/* bgWhy — full opacity, image is the visual */}
        <img
          src={bgWhy}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* Thin bottom fade only — so cards on top remain legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <span className="text-white/80 text-xs font-semibold uppercase tracking-[0.2em]">Why Choose Us</span>
            <div className="section-divider mt-3" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mt-4 mb-4 drop-shadow-lg">
              Turn Your Fleet Data Into Smarter Decisions
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed drop-shadow">
              Telsite designs systems intended to reduce massive overhead losses, secure physical cargo channels, and minimise systemic delays.
            </p>
          </div>
          {/* Three pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: '📡', title: 'Real-Time Tracking',   body: 'Dynamic continuous coordinates delivered without reporting delays or data gaps.' },
              { icon: '🧬', title: 'Next-Gen Sensors',     body: 'Capacitive fuel probes, automated geofences, and driver behaviour analytics.' },
              { icon: '🏢', title: '24/7 Local Support',   body: 'Expert engineering teams based in Zimbabwe, on call around the clock.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-black/45 backdrop-blur-sm border border-white/20 rounded-xl p-7 transition-all duration-300 hover:bg-black/55">
                <div className="text-3xl mb-4">{icon}</div>
                <h4 className="text-white font-semibold text-base mb-2 uppercase tracking-wide">{title}</h4>
                <p className="text-white/75 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — ABOUT US  (split: text left | image right)
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 sm:px-10 md:px-16 bg-[#D8C7A9]/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div className="space-y-6">
            <span className="text-[#D8C7A9] text-xs font-semibold uppercase tracking-[0.2em]">About Telsite</span>
            <div className="section-divider" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white leading-snug">
              Deep Roots in Telecommunications Excellence
            </h2>
            <p className="text-[#D8C7A9] text-sm sm:text-base leading-relaxed">
              Established in Zimbabwe in 2010 as a dedicated division of Telsite Investments (Pvt) Ltd, we have leveraged decades of localised market insight to formulate robust tracking solutions tailored to the African operational environment.
            </p>
            {/* Pull quote */}
            <blockquote className="border-l-4 border-amber-950 pl-5 py-1 mt-2">
              <p className="text-white text-base italic font-serif leading-relaxed">
                "Your operational needs remain our priority."
              </p>
              <footer className="mt-2 text-xs font-semibold text-[#D8C7A9] uppercase tracking-wider not-italic">
                — Eng. Lambros Antoniades, Managing Director
              </footer>
            </blockquote>
            <button
              onClick={() => onNavigate('about')}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 border-2 border-amber-950 text-amber-950 bg-[#D8C7A9] hover:bg-[#c9b894] text-sm font-semibold uppercase tracking-widest rounded-lg transition-colors duration-200"
            >
              Read Our Full Profile
              <span>→</span>
            </button>
          </div>
            {/* Right: image — no tint overlay, image shows clearly */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[420px]">
            <img
              src={bgAbout}
              alt="Telsite vehicle tracking operations in Zimbabwe"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {/* Founded chip */}
            <div className="absolute bottom-5 left-5 bg-[#D8C7A9]/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-lg">
              <p className="text-amber-950 text-xs font-semibold uppercase tracking-widest">Established</p>
              <p className="text-amber-950 text-2xl font-serif font-bold leading-none mt-0.5">2010</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
