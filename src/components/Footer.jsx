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
      <div className="h-24 w-full pointer-events-none" />

      
      <footer className="fixed bottom-0 left-0 right-0 h-24 bg-slate-950/80 backdrop-blur-md border-t border-purple-500/20 z-50 px-6 flex items-center shadow-[0_-10px_30px_rgba(0,0,0,0.3)] overflow-hidden">
        
        
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

        <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-6 relative">
          
         
          <div className="hidden md:flex flex-col text-left max-w-[140px] shrink-0 z-10 pr-4 ">
            <span className="text-[12px] font-white font-black uppercase tracking-widest text-purple-300/70 leading-tight">
              COMPANIES THAT TRUST US
            </span>
          </div>

          {/* CENTER: INFINITE SCROLLING MARQUEE CONTAINER */}
          <div className="flex-grow overflow-hidden relative mx-2 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-4 w-max items-center animate-marquee-loop py-2">
              
              {infinitePartnersList.map((partner, index) => (
                <div 
                  key={index} 
                  title={partner.name}
                  className="bg-purple-950/40 border border-purple-500/10 rounded-xl h-14 w-36 flex flex-col items-center justify-center p-1 hover:bg-purple-900/30 hover:border-purple-400/40 transition-all duration-200 group cursor-help gap-1 shrink-0"
                >
                  {/* ICON BOX */}
                  <div className="w-full flex-grow rounded-lg bg-slate-950/40 flex items-center justify-center overflow-hidden p-1 max-h-[75%]">
                    <img 
                      src={partner.src} 
                      alt={partner.name} 
                      className="w-full h-full object-contain brightness-95 contrast-125 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span class="text-xs font-mono font-black text-purple-400 group-hover:text-purple-300">${partner.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>

                  {/* COMPANY NAME LABEL */}
                  <span className="text-[7.5px] font-sans font-black tracking-tight uppercase text-purple-300/70 group-hover:text-white transition-colors text-center line-clamp-1 w-full px-0.5 leading-none shrink-0">
                    {partner.name}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT: COMPACT SECURITY STAMP */}
          <div className="hidden sm:flex flex-col text-right shrink-0 font-white text-[13px] font-bold text-purple-300/70 pl-4 bg-slate-transparent ">
            <span>TELSITE TRACKING</span>
            <span className="text-slate-500 text-[8px] mt-0.5">© {new Date().getFullYear()} TELSITE</span>
          </div>

        </div>
      </footer>
    </>
  );
}