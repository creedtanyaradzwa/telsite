import { useState } from 'react';
import { productCatalog } from '../config/products';
import navbarBgImg from '../assets/navfi.png';

export default function Navbar({ currentRoute, currentProductKey, onNavigate }) {
  const [dropdownOpen,   setDropdownOpen]   = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (route, productKey = null) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(route, productKey);
  };

  const linkBase = `
    cursor-pointer text-sm font-bold uppercase tracking-widest
    transition-colors duration-200 flex items-center gap-2
    text-white hover:text-yellow-200 drop-shadow
  `;
  const linkActive = `text-yellow-200 border-b-2 border-yellow-200 pb-0.5`;

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[98%] sm:w-[96%] max-w-7xl">
      {/* ── Background: the logo image IS the navbar background — preserved exactly ── */}
      <div
        className="absolute inset-0 rounded-b-2xl overflow-hidden border-b border-x border-[#D8C7A9]/30 shadow-xl shadow-purple-950/40 bg-no-repeat bg-center bg-[length:100%_100%] backdrop-blur-md pointer-events-none"
        style={{ backgroundImage: `url(${navbarBgImg})` }}
      >
        {/* Tint only the right side — left logo area stays bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30" />
        {/* Bottom shimmer line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D8C7A9]/50 to-transparent" />
      </div>

      {/* ── Content row: nav links pushed into the purple right zone ────────── */}
      <div className="relative z-10 flex items-center justify-end py-3 sm:py-3.5 pr-5 sm:pr-8" style={{ paddingLeft: '46%' }}>

        {/* RIGHT: Desktop navigation — single row ────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">

          <button
            onClick={() => handleNavigation('home')}
            className={`${linkBase} ${currentRoute === 'home' ? linkActive : ''}`}
          >
            Home
          </button>

          {/* Services dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`${linkBase} ${currentRoute === 'product' ? linkActive : ''}`}
            >
              Our Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-3 w-72 bg-[#D8C7A9] border border-white/80 rounded-xl p-2 shadow-2xl z-50 space-y-0.5">
                {Object.entries(productCatalog).map(([key, product]) => (
                  <div
                    key={key}
                    onClick={() => handleNavigation('product', key)}
                    className={`cursor-pointer px-3 py-2.5 rounded-lg transition-colors duration-150 flex flex-col
                      ${currentProductKey === key
                        ? 'bg-amber-950 text-[#F3EAD8]'
                        : 'hover:bg-amber-950/15 text-amber-950'
                      }`}
                  >
                    <span className="text-sm font-semibold leading-snug">{product.title}</span>
                    <span className={`text-xs font-normal truncate mt-0.5 ${currentProductKey === key ? 'text-amber-200' : 'text-amber-800'}`}>
                      {product.tagline}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavigation('roi')}
            className={`${linkBase} ${currentRoute === 'roi' ? linkActive : ''}`}
          >
            Savings Calculator
          </button>

          <button
            onClick={() => handleNavigation('about')}
            className={`${linkBase} ${currentRoute === 'about' ? linkActive : ''}`}
          >
            Company Profile
          </button>

          <button
            onClick={() => handleNavigation('contact')}
            className="cursor-pointer px-5 py-2 bg-[#D8C7A9] hover:bg-white text-amber-950 text-sm font-bold uppercase tracking-widest rounded-lg border border-white/40 transition-colors duration-200 shadow-md drop-shadow"
          >
            Request Services
          </button>
        </div>

        {/* MOBILE toggle ──────────────────────────────────────────────────────── */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg text-[#D8C7A9] bg-amber-950/70 border border-[#D8C7A9]/30 hover:bg-amber-900 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE menu ────────────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-5 pb-5 pt-2 border-t border-[#D8C7A9]/20 bg-[#2d0f52]/95 backdrop-blur-xl space-y-1 rounded-b-2xl">

          <button
            onClick={() => handleNavigation('home')}
            className={`w-full text-left py-2.5 px-3 text-sm font-semibold uppercase tracking-widest rounded-lg transition-colors
              ${currentRoute === 'home' ? 'text-white bg-white/10' : 'text-[#D8C7A9] hover:bg-white/5'}`}
          >
            Home
          </button>

          <div className="py-1">
            <span className="block px-3 text-[10px] font-semibold text-[#D8C7A9]/60 tracking-widest uppercase mb-1">
              Services
            </span>
            {Object.entries(productCatalog).map(([key, product]) => (
              <button
                key={key}
                onClick={() => handleNavigation('product', key)}
                className={`w-full text-left py-2 px-4 text-xs font-medium rounded-lg transition-colors block
                  ${currentProductKey === key && currentRoute === 'product'
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-[#D8C7A9]/80 hover:bg-white/5'
                  }`}
              >
                {product.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavigation('roi')}
            className={`w-full text-left py-2.5 px-3 text-sm font-semibold uppercase tracking-widest rounded-lg transition-colors
              ${currentRoute === 'roi' ? 'text-white bg-white/10' : 'text-[#D8C7A9] hover:bg-white/5'}`}
          >
            Savings Calculator
          </button>

          <button
            onClick={() => handleNavigation('about')}
            className={`w-full text-left py-2.5 px-3 text-sm font-semibold uppercase tracking-widest rounded-lg transition-colors
              ${currentRoute === 'about' ? 'text-white bg-white/10' : 'text-[#D8C7A9] hover:bg-white/5'}`}
          >
            Company Profile
          </button>

          <div className="pt-2">
            <button
              onClick={() => handleNavigation('contact')}
              className="w-full py-3 bg-amber-950 hover:bg-amber-900 text-[#F3EAD8] text-sm font-semibold uppercase tracking-widest rounded-lg transition-colors"
            >
              Request Services
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
