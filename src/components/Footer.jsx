import electroSalesLogo from '../assets/electrosales_logo.webp'; 
import kdvBeddingLogo from '../assets/KDV.jpg';
import discoveryLogo from '../assets/DISCOVERY.jpeg';
import bholaLogo from '../assets/BHOLA.jpg';
import dawnPropertiesLogo from '../assets/DAWN PROPERTIES.jpg';

export default function Footer() {
  const corporatePartners = [
    { name: "Electro Sales Hardware", src: electroSalesLogo },
    { name: "KDV Bedding", src: kdvBeddingLogo },
    { name: "Discovery Ambulance Services", src: discoveryLogo },
    { name: "Bhola Hardware", src: bholaLogo },
    { name: "Dawn Properties", src: dawnPropertiesLogo },
  ];

  const infinitePartnersList = [...corporatePartners, ...corporatePartners];

  return (
    <>
      {/* Custom Global Animation Injector for Tailwind Config Independence */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. LAYOUT SPACER */}
      <div className="h-20 md:h-24 w-full pointer-events-none" />

      {/* 2. REFACTORED ADAPTIVE FIXED FOOTER CONTAINER */}
      <footer className="fixed bottom-0 left-0 right-0 h-20 md:h-24 bg-slate-950/80 backdrop-blur-md border-t border-purple-500/20 z-50 px-4 md:px-6 flex items-center shadow-[0_-10px_30px_rgba(0,0,0,0.3)] overflow-hidden">
        
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 md:gap-6 relative">
          
          {/* LEFT: PARTNER TITLE HEADER (HIDDEN OR RE-ALIGNED) */}
          <div className="w-full md:w-auto flex justify-center md:justify-start md:flex-col text-center md:text-left md:max-w-[140px] shrink-0 z-10 md:pr-4">
            <span className="text-[7.5px] md:text-[12px] font-white font-black uppercase tracking-widest text-purple-300/70 leading-tight">
              COMPANIES THAT TRUST US
            </span>
          </div>

          {/* CENTER: INFINITE SCROLLING MARQUEE CONTAINER (FULL WIDTH ON MOBILE) */}
          <div className="w-full flex-grow overflow-hidden relative mx-0 md:mx-2 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-2.5 md:gap-4 w-max items-center animate-marquee-loop py-1 md:py-2">
              
              {infinitePartnersList.map((partner, index) => (
                <div 
                  key={index} 
                  title={partner.name}
                  className="bg-purple-950/40 border border-purple-500/10 rounded-lg md:rounded-xl h-12 w-28 md:h-14 md:w-36 flex flex-col items-center justify-center p-1 hover:bg-purple-900/30 hover:border-purple-400/40 transition-all duration-200 group cursor-help gap-0.5 md:gap-1 shrink-0"
                >
                  {/* ICON BOX */}
                  <div className="w-full flex-grow rounded-md md:rounded-lg bg-slate-950/40 flex items-center justify-center overflow-hidden p-0.5 max-h-[72%]">
                    <img 
                      src={partner.src} 
                      alt={partner.name} 
                      className="w-full h-full object-contain brightness-95 contrast-125 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span class="text-[9px] md:text-xs font-mono font-black text-purple-400 group-hover:text-purple-300">${partner.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>

                  {/* COMPANY NAME LABEL */}
                  <span className="text-[6.5px] md:text-[7.5px] font-sans font-black tracking-tight uppercase text-purple-300/70 group-hover:text-white transition-colors text-center line-clamp-1 w-full px-0.5 leading-none shrink-0">
                    {partner.name}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT: COMPACT SECURITY STAMP & COPYRIGHT */}
          <div className="w-full md:w-auto flex flex-row md:flex-col justify-center items-center md:items-end text-center md:text-right shrink-0 gap-1.5 md:gap-0 font-white text-[8px] md:text-[13px] font-bold text-purple-300/70 md:pl-4 bg-transparent">
            <span className="tracking-wide md:tracking-normal">TELSITE TRACKING</span>
            <span className="text-slate-500 text-[7px] md:text-[8px] md:mt-0.5">© {new Date().getFullYear()} TELSITE</span>
          </div>

        </div>
      </footer>
    </>
  );
}