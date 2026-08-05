import aboutBg from '../assets/ABOUT.webp'; 

export default function About() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-17.817354,31.026402+(Telsite+Tracking)";

  return (
    <div className="w-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 text-black min-h-screen py-10 md:py-16 px-4 md:px-10 relative overflow-hidden font-sans antialiased">
      
      {/* =========================================================================
          ANIMATED GLOWING & MOVING AMBIENT LIGHT ORBS
         ========================================================================= */}
      <div className="absolute top-[-5%] right-[-5%] w-[450px] md:w-[750px] h-[450px] md:h-[750px] rounded-full bg-[#D8C7A9]/20 blur-[130px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute top-[35%] left-[-8%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-fuchsia-400/20 blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[-5%] left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-purple-300/15 blur-[150px] pointer-events-none animate-pulse duration-[9000ms]" />

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-20 pt-24 lg:pt-28">
        
        {/* =========================================================================
            HERO CONTAINER (CRISP & CLEAR BACKGROUND - NO OVERLAY)
           ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-white/90 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] bg-[#D8C7A9]/95 backdrop-blur-3xl text-amber-950">
          
          {/* Background Image Layer (Crisp & Fully Visible) */}
          <div className="absolute inset-0 z-0">
            <img 
              src={aboutBg} 
              alt="Telsite Infrastructure Background" 
              className="w-full h-full object-cover brightness-100 contrast-100 opacity-100"
            />
          </div>

          <div className="relative z-10 p-6 sm:p-12 md:p-20 text-center max-w-4xl 2xl:max-w-5xl mx-auto space-y-8">
            <div className="space-y-5">
              <span className="inline-block bg-[#D8C7A9] border border-white/90 text-amber-950 font-mono text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
                ✦ Corporate Profile & Infrastructure
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-black tracking-tight leading-tight text-amber-950 drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)]">
               <span   className="text-amber-900 drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)]">Pioneering Telematics Standards in Zimbabwe</span>
              </h1>
              <p className="text-amber-950 text-base sm:text-lg md:text-xl leading-relaxed font-black max-w-3xl 2xl:max-w-4xl mx-auto bg-[#D8C7A9]/95 p-6 sm:p-7 rounded-3xl border border-white/90 backdrop-blur-md shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_20px_40px_rgba(0,0,0,0.5)]">
                Established in 2010 as a core operating division of Telsite Investments (Pvt) Ltd, Telsite Tracking has grown into one of the country's most relied-upon asset management intelligence architectures.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/40 text-left">
              <div className="bg-[#D8C7A9]/95 border border-white/90 p-6 sm:p-8 rounded-3xl space-y-3 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">🔭</span>
                  <h2 className="text-base sm:text-lg font-mono font-black text-amber-950 uppercase tracking-wider">Our Strategic Vision</h2>
                </div>
                <p className="text-amber-950 text-base sm:text-lg leading-relaxed font-black">
                  To be the definitive blueprint for intelligent fleet optimization across Africa, ensuring every commercial wheel turning within our borders is backed by robust data pipelines, maximized security layers, and unquestionable operational safety compliance thresholds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            OUR CORPORATE MISSION (4D KHAKI GLASS CARD)
           ========================================================================= */}
        <section className="w-full">
          <div className="bg-[#D8C7A9]/95 border border-white/90 rounded-3xl p-7 sm:p-10 md:p-12 space-y-5 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-300 backdrop-blur-3xl text-amber-950">
            <div className="absolute top-0 left-0 w-[6px] h-full bg-amber-950 shadow-[0_0_15px_rgba(69,26,3,0.8)]" />
            <div className="text-3xl sm:text-4xl">🚀</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-950 tracking-tight flex items-center gap-3">
              Our Corporate Mission <span className="h-3 w-3 rounded-full bg-amber-950 inline-block animate-ping" />
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-amber-950 leading-relaxed font-black">
              We empower corporate enterprises and public transporters to eliminate overhead waste, eliminate fuel siphoning loops instantly, and comfortably fulfill statutory regulatory frameworks via engineering support that responds instantly to our clients' precise field feedback.
            </p>
          </div>
        </section>

        {/* =========================================================================
            THE TELSITE DISRUPTIVE ENTERPRISE CHALLENGE
           ========================================================================= */}
        <section className="bg-[#D8C7A9]/95 border border-white/90 text-amber-950 rounded-3xl p-7 sm:p-12 md:p-14 relative overflow-hidden shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
          <div className="max-w-4xl 2xl:max-w-5xl space-y-7 sm:space-y-9 relative z-10">
            <div className="space-y-3">
              <span className="inline-block bg-amber-950 border border-white/80 text-[#F3EAD8] font-mono text-xs md:text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                The Telsite Operational Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-amber-950">
                WE DON'T TALK HISTORY.<br />
                <span className="text-amber-900 drop-shadow-[0_2px_4px_rgba(255,255,255,0.7)]">
                  WE SECURE ACTIVE RUNTIME.
                </span>
              </h2>
              <p className="text-amber-950 text-base md:text-xl font-black max-w-2xl">
                While the industry asks you to wait weeks for telemetry mapping and hardware configuration, the Telsite ecosystem operates on an aggressive, guaranteed deployment matrix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 bg-amber-950/10 border border-white/80 rounded-3xl space-y-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] hover:bg-amber-950/20 transition-all duration-300">
                <div className="text-3xl">⚡</div>
                <div className="space-y-2">
                  <h4 className="text-sm font-mono font-black text-amber-950 uppercase tracking-wider">24-Hour Provisioning</h4>
                  <p className="text-xs sm:text-sm md:text-base text-amber-950 font-black leading-relaxed">
                    From formal purchase order to live field tracking. Our pre-configured units ship pre-mapped to your dashboard within one business day.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-amber-950/10 border border-white/80 rounded-3xl space-y-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] hover:bg-amber-950/20 transition-all duration-300">
                <div className="text-3xl">⛽</div>
                <div className="space-y-2">
                  <h4 className="text-sm font-mono font-black text-amber-950 uppercase tracking-wider">0% Fuel Bypass Target</h4>
                  <p className="text-xs sm:text-sm md:text-base text-amber-950 font-black leading-relaxed">
                    Our digital fuel sensor integration is calibrated so precisely that any variance triggers an instantaneous system lock alert.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-amber-950/10 border border-white/80 rounded-3xl space-y-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] hover:bg-amber-950/20 transition-all duration-300">
                <div className="text-3xl">⚖️</div>
                <div className="space-y-2">
                  <h4 className="text-sm font-mono font-black text-amber-950 uppercase tracking-wider">Bulletproof S.I. 118</h4>
                  <p className="text-xs sm:text-sm md:text-base text-amber-950 font-black leading-relaxed">
                    We don't just promise compliance; our speed governors are backed by a zero-penalty guarantee. If our hardware drifts, we field-service it immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            GEOGRAPHICAL LOCATION MAP SECTION (4D KHAKI MAP FRAME)
           ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-9 items-center bg-[#D8C7A9]/95 border border-white/90 text-amber-950 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-3xl">
          
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-black text-amber-900 uppercase tracking-widest">Headquarters Office</h3>
              <h4 className="text-2xl sm:text-3xl font-black text-amber-950 tracking-tight">Visit Our Command Offices</h4>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-amber-950 font-black">
              <div className="flex gap-3.5 items-start">
                <span className="text-xl sm:text-2xl">📍</span>
                <p>
                  <strong className="text-amber-950 block font-black mb-1 font-mono text-xs tracking-wide uppercase">Physical Address:</strong>
                  18 Divine Road, Milton Park,<br />
                  Harare, Zimbabwe
                </p>
              </div>

              <div className="flex gap-3.5 items-start">
                <span className="text-xl sm:text-2xl">📞</span>
                <p>
                  <strong className="text-amber-950 block font-black mb-1 font-mono text-xs tracking-wide uppercase">Landline / Operations desk:</strong>
                  +263 242 741840
                </p>
              </div>

              <div className="flex gap-3.5 items-start">
                <span className="text-xl sm:text-2xl">📱</span>
                <p>
                  <strong className="text-amber-950 block font-black mb-1 font-mono text-xs tracking-wide uppercase">Mobile Hotline Support:</strong>
                  +263 718 339968
                </p>
              </div>

              <div className="flex gap-3.5 items-start">
                <span className="text-xl sm:text-2xl">✉️</span>
                <p>
                  <strong className="text-amber-950 block font-black mb-1 font-mono text-xs tracking-wide uppercase">Corporate Email Inbox:</strong>
                  contact@telsite-tracking.co.zw
                </p>
              </div>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 bg-amber-950 hover:bg-amber-900 text-[#F3EAD8] text-xs sm:text-sm font-black uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_12px_24px_rgba(0,0,0,0.5)] group w-full sm:w-auto justify-center sm:justify-start hover:-translate-y-0.5"
            >
              🚀 Launch Google Maps Navigation
              <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
            </a>
          </div>

          {/* KHAKI MAP INTERFACE */}
          <div className="md:col-span-7 relative w-full h-[280px] sm:h-[360px] bg-amber-950/20 border border-white/80 rounded-3xl overflow-hidden shadow-xl group">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#451a03_[0.1_1.5px],transparent_1.5px)] [background-size:24px_24px] opacity-25 group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute top-[40%] left-0 w-full h-10 bg-[#D8C7A9] border-y border-amber-950/40 -rotate-2 flex items-center justify-center font-mono text-xs text-amber-950 font-black uppercase tracking-widest select-none shadow-md">
              Divine Road
            </div>
            <div className="absolute top-0 left-[35%] w-12 h-full bg-[#D8C7A9] border-x border-amber-950/40 rotate-12 flex items-center justify-center font-mono text-xs text-amber-950 font-black uppercase tracking-widest [writing-mode:vertical-lr] select-none shadow-md">
              Milton Park Link
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[38%] left-[36%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
            >
              <span className="absolute -inset-4 rounded-full bg-amber-950/30 animate-ping duration-1000" />

              <div className="bg-[#D8C7A9] text-amber-950 border-2 border-white/90 rounded-2xl px-4 py-2 shadow-2xl flex items-center gap-2.5 group-hover/pin:scale-105 transition-transform duration-300">
                <span className="text-base sm:text-lg animate-bounce">📍</span>
                <div className="text-left font-sans">
                  <span className="block font-black text-xs sm:text-sm leading-none uppercase tracking-wide text-amber-950">Telsite HQ</span>
                  <span className="block text-[10px] sm:text-xs font-mono font-bold text-amber-900 mt-0.5">No. 18 Divine Road</span>
                </div>
              </div>
            </a>

            <div className="absolute bottom-4 right-4 left-4 bg-[#D8C7A9]/95 border border-white/80 backdrop-blur-md p-3 rounded-2xl flex items-center justify-between text-xs font-mono shadow-md pointer-events-none transition-all duration-300">
              <span className="text-amber-950 font-black">🔍 ZOOM LEVEL: HARARE ENTERPRISE MATRIX</span>
              <span className="text-amber-900 font-black animate-pulse hidden sm:inline">CLICK LIVE MAP →</span>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              title="Click to open 18 Divine Road, Milton Park on Google Maps directly"
            />
          </div>
        </section>

      </div>
    </div>
  );
}