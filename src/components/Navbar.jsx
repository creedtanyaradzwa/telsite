import { useState } from 'react';
import { productCatalog } from '../config/products';

// IMPORT YOUR NAVBAR BACKGROUND IMAGE HERE
import navbarBgImg from '../assets/navfi.png'; 

export default function Navbar({ currentRoute, currentProductKey, onNavigate }) {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (route, productKey = null) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    onNavigate(route, productKey);
  };

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[98%] sm:w-[96%] max-w-7xl transition-all duration-300">
      
      {/* BACKGROUND & FRAME CLIPPER (keeps rounded background without clipping dropdowns) */}
      <div 
        className="absolute inset-0 rounded-b-2xl overflow-hidden border-b border-x border-[#D8C7A9]/40 shadow-2xl shadow-purple-950/50 bg-no-repeat bg-center bg-[length:100%_100%] backdrop-blur-md pointer-events-none"
        style={{ backgroundImage: `url(${navbarBgImg})` }}
      >
        {/* Soft dark vignette tint to ensure high contrast for khaki text */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Modern bottom glow border for smooth visual transition into the page */}
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D8C7A9]/60 to-transparent" />
      </div>

      <div className="w-full mx-auto flex items-center justify-end px-5 sm:px-8 py-3.5 sm:py-4 relative z-10">

        {/* =========================================================================
            DESKTOP KHAKI TEXT LINKS MATRIX (MODERN INTERACTIVE LINKS)
           ========================================================================= */}
        <div className="hidden lg:flex flex-col items-end gap-2.5 relative">
          
          {/* TOP ROW: 3 KHAKI TEXT LINKS */}
          <div className="flex items-center gap-7 xl:gap-9">
            
            {/* 1. HOME */}
            <button
              onClick={() => handleNavigation('home')}
              className={`cursor-pointer text-sm sm:text-base lg:text-lg font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2.5 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                ${currentRoute === 'home' 
                  ? 'text-[#F3EAD8] border-b-2 border-[#D8C7A9] pb-0.5' 
                  : 'text-[#D8C7A9] hover:text-white hover:underline underline-offset-8'
                }`}
            >
              <span className={`h-2 w-2 rounded-full transition-all duration-300 ${currentRoute === 'home' ? 'bg-[#D8C7A9] animate-ping' : 'bg-[#D8C7A9]/60 group-hover:bg-white group-hover:scale-125'}`} />
              HOME
            </button>

            {/* 2. OUR SERVICES (WITH VISIBLE OVERFLOW DROPDOWN) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`cursor-pointer text-sm sm:text-base lg:text-lg font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                  ${currentRoute === 'product' 
                    ? 'text-[#F3EAD8] border-b-2 border-[#D8C7A9] pb-0.5' 
                    : 'text-[#D8C7A9] hover:text-white hover:underline underline-offset-8'
                  }`}
              >
                <span className={`h-2 w-2 rounded-full transition-all duration-300 ${currentRoute === 'product' ? 'bg-[#D8C7A9] animate-ping' : 'bg-[#D8C7A9]/60 group-hover:bg-white group-hover:scale-125'}`} />
                OUR SERVICES <span className="text-xs opacity-80 ml-0.5 transition-transform duration-300 group-hover:translate-y-0.5">{dropdownOpen ? '▲' : '▼'}</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-80 bg-[#D8C7A9] border-2 border-white/90 rounded-2xl p-3 shadow-2xl z-50 space-y-1.5 backdrop-blur-3xl animate-in fade-in zoom-in-95 duration-200 max-h-[70vh] overflow-y-auto">
                  {Object.entries(productCatalog).map(([key, product]) => (
                    <div
                      key={key}
                      onClick={() => handleNavigation('product', key)}
                      className={`cursor-pointer p-2.5 rounded-xl text-left transition-all duration-200 font-sans flex flex-col transform hover:translate-x-1
                        ${currentProductKey === key ? 'bg-amber-950 text-[#F3EAD8]' : 'hover:bg-amber-950/15 text-amber-950'}`}
                    >
                      <span className="text-sm font-black block">{product.title}</span>
                      <span className={`text-xs font-bold block uppercase truncate mt-0.5 ${currentProductKey === key ? 'text-amber-300' : 'text-amber-900'}`}>{product.tagline}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. SAVINGS CALCULATOR */}
            <button
              onClick={() => handleNavigation('roi')}
              className={`cursor-pointer text-sm sm:text-base lg:text-lg font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2.5 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                ${currentRoute === 'roi' 
                  ? 'text-[#F3EAD8] border-b-2 border-[#D8C7A9] pb-0.5' 
                  : 'text-[#D8C7A9] hover:text-white hover:underline underline-offset-8'
                }`}
            >
              <span className={`h-2 w-2 rounded-full transition-all duration-300 ${currentRoute === 'roi' ? 'bg-[#D8C7A9] animate-ping' : 'bg-[#D8C7A9]/60 group-hover:bg-white group-hover:scale-125'}`} />
              SAVINGS CALCULATOR
            </button>

          </div>

          {/* BOTTOM ROW: 2 KHAKI TEXT LINKS */}
          <div className="flex items-center gap-7 xl:gap-9">
            
            {/* 4. REQUEST SERVICES */}
            <button
              onClick={() => handleNavigation('contact')}
              className={`cursor-pointer text-sm sm:text-base lg:text-lg font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2.5 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                ${currentRoute === 'contact' 
                  ? 'text-[#F3EAD8] border-b-2 border-[#D8C7A9] pb-0.5' 
                  : 'text-[#D8C7A9] hover:text-white hover:underline underline-offset-8'
                }`}
            >
              <span className={`h-2 w-2 rounded-full transition-all duration-300 ${currentRoute === 'contact' ? 'bg-[#D8C7A9] animate-ping' : 'bg-[#D8C7A9]/60 group-hover:bg-white group-hover:scale-125'}`} />
              REQUEST SERVICES
            </button>

            {/* 5. COMPANY PROFILE */}
            <button
              onClick={() => handleNavigation('about')}
              className={`cursor-pointer text-sm sm:text-base lg:text-lg font-black uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2.5 group drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                ${currentRoute === 'about' 
                  ? 'text-[#F3EAD8] border-b-2 border-[#D8C7A9] pb-0.5' 
                  : 'text-[#D8C7A9] hover:text-white hover:underline underline-offset-8'
                }`}
            >
              <span className={`h-2 w-2 rounded-full transition-all duration-300 ${currentRoute === 'about' ? 'bg-[#D8C7A9] animate-ping' : 'bg-[#D8C7A9]/60 group-hover:bg-white group-hover:scale-125'}`} />
              COMPANY PROFILE
            </button>

          </div>

        </div>

        {/* =========================================================================
            MOBILE TOGGLE TRIGGER
           ========================================================================= */}
        <div className="flex lg:hidden relative z-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2.5 rounded-xl text-[#D8C7A9] bg-amber-950/80 border border-[#D8C7A9]/40 hover:bg-amber-900 transition-all shadow-md active:scale-95"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
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
        <div className="lg:hidden p-6 border-t border-[#D8C7A9]/30 bg-[#451a03]/95 backdrop-blur-2xl space-y-4 relative z-20 text-left rounded-b-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          
          <button
            onClick={() => handleNavigation('home')}
            className={`w-full text-left py-2 text-sm font-black uppercase tracking-widest block transition-all
              ${currentRoute === 'home' ? 'text-[#F3EAD8] border-l-4 border-[#D8C7A9] pl-3' : 'text-[#D8C7A9]'}`}
          >
            HOME
          </button>

          <div className="py-3 space-y-2 border-y border-[#D8C7A9]/20">
            <span className="block text-xs font-mono font-black text-[#D8C7A9]/80 tracking-widest uppercase">
              ✦ Services Catalog
            </span>
            {Object.entries(productCatalog).map(([key, product]) => (
              <button
                key={key}
                onClick={() => handleNavigation('product', key)}
                className={`w-full text-left py-1.5 text-xs font-bold transition-all block
                  ${currentProductKey === key && currentRoute === 'product' ? 'text-white font-black pl-3' : 'text-[#D8C7A9]'}`}
              >
                {product.title}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavigation('roi')}
            className={`w-full text-left py-2 text-sm font-black uppercase tracking-widest block transition-all
              ${currentRoute === 'roi' ? 'text-[#F3EAD8] border-l-4 border-[#D8C7A9] pl-3' : 'text-[#D8C7A9]'}`}
          >
            SAVINGS CALCULATOR
          </button>

          <button
            onClick={() => handleNavigation('contact')}
            className={`w-full text-left py-2 text-sm font-black uppercase tracking-widest block transition-all
              ${currentRoute === 'contact' ? 'text-[#F3EAD8] border-l-4 border-[#D8C7A9] pl-3' : 'text-[#D8C7A9]'}`}
          >
            REQUEST SERVICES
          </button>

          <button
            onClick={() => handleNavigation('about')}
            className={`w-full text-left py-2 text-sm font-black uppercase tracking-widest block transition-all
              ${currentRoute === 'about' ? 'text-[#F3EAD8] border-l-4 border-[#D8C7A9] pl-3' : 'text-[#D8C7A9]'}`}
          >
            COMPANY PROFILE
          </button>

        </div>
      )}
    </nav>
  );
}