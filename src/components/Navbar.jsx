import { useState } from 'react';
import { productCatalog } from '../config/products';

import telsiteLogoImg from '../assets/logotelsite.png'; 

export default function Navbar({ currentRoute, currentProductKey, onNavigate }) {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (route, productKey = null) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(route, productKey);
  };

  return (
    <nav className="w-full bg-[#100D1B]/75 backdrop-blur-md border-b border-purple-500/30 sticky top-0 z-50 px-4 sm:px-6 py-3 md:py-4 shadow-xl shadow-purple-950/10 transition-all duration-300">
      <div className="max-w-6xl 3xl:max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        
        {/* =========================================================================
            LOGO / BRANDING ZONE 
           ========================================================================= */}
        <div 
          onClick={() => handleNavigation('home')} 
          className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group shrink-0"
        >
          <div className="h-11 w-11 sm:h-14 sm:w-14 3xl:h-20 3xl:w-20 rounded-xl sm:rounded-2xl bg-slate-950/90 border-2 border-purple-500 flex items-center justify-center overflow-hidden p-1 sm:p-1.5 group-hover:scale-105 transition-transform group-hover:border-purple-400 shadow-lg">
            <img 
              src={telsiteLogoImg} 
              alt="Telsite Logo" 
              className="w-full h-full object-contain" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<span class="text-purple-400 font-black text-lg sm:text-xl font-mono">T</span>`;
              }}
            />
          </div>

          <div className="text-left flex flex-col justify-center">
            <span className="text-base sm:text-xl md:text-2xl 3xl:text-4xl font-black tracking-tighter text-white block leading-none drop-shadow-md group-hover:text-purple-300 transition-colors">
              TELSITE TRACKING
            </span>
            <span className="text-[9px] sm:text-[10px] 3xl:text-sm font-mono font-black uppercase tracking-widest text-purple-200 block mt-0.5 sm:mt-1 bg-purple-500/20 border border-purple-400/20 px-1.5 py-0.5 rounded-md w-max">
              Tracking Ecosystem
            </span>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP BUTTON MATRIX (Updated to blend with the vibrant dark-theme)
           ========================================================================= */}
        <div className="hidden lg:flex flex-wrap items-center justify-end gap-2 xl:gap-3 3xl:gap-6 relative">
          
          {/* HOME BUTTON */}
          <button
            onClick={() => handleNavigation('home')}
            className={`cursor-pointer px-3 py-2 3xl:px-5 3xl:py-3 text-[11px] 3xl:text-base font-mono font-black uppercase tracking-wider rounded-xl border flex items-center gap-2 transition-all duration-200 shadow-xs
              ${currentRoute === 'home' 
                ? 'bg-purple-600/30 border-purple-400 text-white ring-2 ring-purple-500/20' 
                : 'bg-white/[0.03] border-white/[0.08] text-slate-200 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white hover:-translate-y-0.5'
              }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'home' ? 'bg-fuchsia-400 animate-pulse' : 'bg-slate-500'}`} />
            HOME
          </button>

          {/* SYSTEMS CATALOG DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`cursor-pointer px-3 py-2 3xl:px-5 3xl:py-3 text-[11px] 3xl:text-base font-mono font-black uppercase tracking-wider rounded-xl border flex items-center gap-2 transition-all duration-200 shadow-xs
                ${currentRoute === 'product' 
                  ? 'bg-purple-600/30 border-purple-400 text-white ring-2 ring-purple-500/20' 
                  : 'bg-white/[0.03] border-white/[0.08] text-slate-200 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white hover:-translate-y-0.5'
                }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'product' ? 'bg-fuchsia-400 animate-pulse' : 'bg-slate-500'}`} />
              OUR SERVICES <span className="text-[8px] 3xl:text-xs opacity-75">{dropdownOpen ? '▲' : '▼'}</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 3xl:w-72 bg-[#120B2E]/95 border border-purple-500/30 rounded-2xl p-2 shadow-2xl z-50 space-y-1 backdrop-blur-lg animate-in fade-in zoom-in-95 duration-150">
                {Object.entries(productCatalog).map(([key, product]) => (
                  <div
                    key={key}
                    onClick={() => handleNavigation('product', key)}
                    className={`cursor-pointer p-2 rounded-xl text-left transition-colors font-sans flex flex-col
                      ${currentProductKey === key ? 'bg-purple-500/20' : 'hover:bg-white/[0.04]'}`}
                  >
                    <span className="text-xs 3xl:text-base font-black text-white block">{product.title}</span>
                    <span className="text-[9px] 3xl:text-xs text-purple-300 font-mono font-bold block uppercase mt-0.5 truncate">{product.tagline}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* FUEL & FLEET SAVINGS CALCULATOR BUTTON */}
          <button
            onClick={() => handleNavigation('roi')}
            className={`cursor-pointer px-3 py-2 3xl:px-5 3xl:py-3 text-[11px] 3xl:text-base font-mono font-black uppercase tracking-wider rounded-xl border flex items-center gap-2 transition-all duration-200 shadow-xs
              ${currentRoute === 'roi' 
                ? 'bg-purple-600/30 border-purple-400 text-white ring-2 ring-purple-500/20' 
                : 'bg-white/[0.03] border-white/[0.08] text-slate-200 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white hover:-translate-y-0.5'
              }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'roi' ? 'bg-fuchsia-450 animate-pulse' : 'bg-slate-500'}`} />
            Savings Calculator
          </button>

          {/* CONTACT / REQUEST QUOTE BUTTON */}
          <button
            onClick={() => handleNavigation('contact')}
            className={`cursor-pointer px-3 py-2 3xl:px-5 3xl:py-3 text-[11px] 3xl:text-base font-mono font-black uppercase tracking-wider rounded-xl border flex items-center gap-2 transition-all duration-200 shadow-xs
              ${currentRoute === 'contact' 
                ? 'bg-purple-600/50 border-purple-400 text-white ring-2 ring-purple-500/25' 
                : 'bg-white/[0.03] border-white/[0.08] text-slate-200 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white hover:-translate-y-0.5'
              }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'contact' ? 'bg-white animate-pulse' : 'bg-slate-400'}`} />
            REQUEST SERVICES
          </button>

          {/* COMPANY PROFILE / ABOUT BUTTON */}
          <button
            onClick={() => handleNavigation('about')}
            className={`cursor-pointer px-3 py-2 3xl:px-5 3xl:py-3 text-[11px] 3xl:text-base font-mono font-black uppercase tracking-wider rounded-xl border flex items-center gap-2 transition-all duration-200 shadow-xs
              ${currentRoute === 'about' 
                ? 'bg-purple-600/30 border-purple-400 text-white ring-2 ring-purple-500/20' 
                : 'bg-white/[0.03] border-white/[0.08] text-slate-200 hover:border-purple-500 hover:bg-purple-500/10 hover:text-white hover:-translate-y-0.5'
              }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'about' ? 'bg-fuchsia-400 animate-pulse' : 'bg-slate-500'}`} />
            COMPANY PROFILE
          </button>

        </div>

        {/* =========================================================================
            MOBILE TOGGLE TRIGGER
           ========================================================================= */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/[0.04] border border-transparent hover:border-white/[0.08] transition-all focus:outline-hidden"
            aria-label="Toggle navigation window menu"
          >
            {mobileMenuOpen ? (
              <svg className="block h-5 w-5 sm:h-6 sm:w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-5 w-5 sm:h-6 sm:w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* =========================================================================
          MOBILE VIEW DROPDOWN MENU
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-purple-500/25 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          
          <button
            onClick={() => handleNavigation('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider flex items-center gap-3 border
              ${currentRoute === 'home' ? 'bg-purple-600/30 border-purple-400 text-white' : 'bg-[#120B2E]/90 text-slate-200 border-white/[0.08]'}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'home' ? 'bg-fuchsia-400' : 'bg-slate-500'}`} />
            HOME
          </button>

          {/* MOBILE DIRECT SERVICES LINKS */}
          <div className="bg-purple-950/20 rounded-xl p-1.5 border border-purple-500/20 space-y-1">
            <span className="block px-3 pt-1 text-[9px] font-mono font-black text-purple-300 tracking-widest uppercase">
              ✦ Services Options Catalog
            </span>
            {Object.entries(productCatalog).map(([key, product]) => (
              <button
                key={key}
                onClick={() => handleNavigation('product', key)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex flex-col
                  ${currentProductKey === key && currentRoute === 'product' ? 'bg-purple-500/20 border-l-4 border-purple-400 pl-2' : 'hover:bg-white/[0.04]'}`}
              >
                <span className="text-xs font-black text-white">{product.title}</span>
                <span className="text-[9px] text-purple-300 font-mono truncate mt-0.5">{product.tagline}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavigation('roi')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider flex items-center gap-3 border
              ${currentRoute === 'roi' ? 'bg-purple-600/30 border-purple-400 text-white' : 'bg-[#120B2E]/90 text-slate-200 border-white/[0.08]'}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'roi' ? 'bg-fuchsia-400' : 'bg-slate-500'}`} />
            Savings Calculator
          </button>

          <button
            onClick={() => handleNavigation('contact')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider flex items-center gap-3 border
              ${currentRoute === 'contact' ? 'bg-purple-600/30 border-purple-400 text-white' : 'bg-[#120B2E]/90 text-slate-200 border-white/[0.08]'}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'contact' ? 'bg-white' : 'bg-slate-500'}`} />
            REQUEST SERVICES
          </button>

          <button
            onClick={() => handleNavigation('about')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider flex items-center gap-3 border
              ${currentRoute === 'about' ? 'bg-purple-600/30 border-purple-400 text-white' : 'bg-[#120B2E]/90 text-slate-200 border-white/[0.08]'}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${currentRoute === 'about' ? 'bg-fuchsia-400' : 'bg-slate-500'}`} />
            COMPANY PROFILE
          </button>

        </div>
      )}
    </nav>
  );
}