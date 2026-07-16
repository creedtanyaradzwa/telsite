import aboutBg from '../assets/ABOUT.jpg'; 

export default function About() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-17.817354,31.026402+(Telsite+Tracking)";

  return (
    <div className="w-full bg-transparent text-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-12 2xl:py-32 relative overflow-hidden">
      
      {/* =========================================================================
          DYNAMIC THEME BACKGROUND ACCENTS & GLOWS
         ========================================================================= */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[500px] 2xl:w-[800px] h-[300px] sm:h-[500px] 2xl:h-[800px] rounded-full bg-purple-600/10 blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] sm:w-[600px] 2xl:w-[900px] h-[400px] sm:h-[600px] 2xl:h-[900px] rounded-full bg-violet-500/10 blur-[90px] sm:blur-[130px] pointer-events-none" />

      {/* GLOBAL DARK OVERLAY FOR GLASS EFFECT CONSISTENCY */}
      <div className="absolute inset-0 bg-[#0E0B18]/60 backdrop-blur-[1px] z-0 pointer-events-none" />

      <div className="max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1600px] mx-auto relative z-10 space-y-16 sm:space-y-24 2xl:space-y-36">
        
        {/* =========================================================================
            HIGH-VISIBILITY GLASS HERO CONTAINER 
           ========================================================================= */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl bg-slate-950/40 backdrop-blur-md">
          
          <div className="absolute inset-0 z-0">
            <img 
              src={aboutBg} 
              alt="Telsite Infrastructure Background" 
              className="w-full h-full object-cover scale-100 saturate-[1.15]"
            />
            <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/40 to-[#0E0B18]/95 backdrop-blur-xs" />
          </div>

          {/* Dynamic padding scaling from phone to 4K displays */}
          <div className="relative z-10 p-6 sm:p-10 md:p-16 2xl:p-24 text-center max-w-3xl 2xl:max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-[#161226]/80 backdrop-blur-md text-purple-300 font-mono text-[9px] sm:text-[10px] 2xl:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/30 shadow-md">
                ✦ Corporate Profile & Infrastructure
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">Telematics Standards</span> in Zimbabwe
              </h1>
              <p className="text-slate-200 text-xs sm:text-sm md:text-base 2xl:text-xl leading-relaxed font-medium max-w-2xl 2xl:max-w-4xl mx-auto bg-slate-950/70 p-4 rounded-xl border border-white/[0.05] backdrop-blur-md shadow-inner">
                Established in 2010 as a core operating division of Telsite Investments (Pvt) Ltd, Telsite Tracking has grown into one of the country's most relied-upon asset management intelligence architectures.
              </p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-white/[0.1] text-left">
              <div className="bg-[#100D1B]/80 border border-white/[0.08] p-5 sm:p-6 2xl:p-10 rounded-xl sm:rounded-2xl space-y-2 shadow-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl 2xl:text-4xl">🔭</span>
                  <h2 className="text-xs sm:text-sm 2xl:text-xl font-mono font-black text-purple-300 uppercase tracking-wider">Our Strategic Vision</h2>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm 2xl:text-lg leading-relaxed font-medium">
                  To be the definitive blueprint for intelligent fleet optimization across Africa, ensuring every commercial wheel turning within our borders is backed by robust data pipelines, maximized security layers, and unquestionable operational safety compliance thresholds.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            OUR CORPORATE MISSION
           ========================================================================= */}
        <section className="w-full">
          <div className="bg-white/[0.02] border border-white/[0.1] rounded-xl sm:rounded-2xl p-6 sm:p-8 2xl:p-12 space-y-4 shadow-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300 backdrop-blur-md">
            <div className="absolute top-0 left-0 w-[3px] h-full bg-purple-500" />
            <div className="text-2xl sm:text-3xl 2xl:text-5xl">🚀</div>
            <h2 className="text-lg sm:text-xl 2xl:text-3xl font-black text-white tracking-tight">Our Corporate Mission</h2>
            <p className="text-xs sm:text-sm 2xl:text-lg text-slate-300 leading-relaxed font-medium">
              We empower corporate enterprises and public transporters to eliminate overhead waste, eliminate fuel siphoning loops instantly, and comfortably fulfill statutory regulatory frameworks via engineering support that responds instantly to our clients' precise field feedback.
            </p>
          </div>
        </section>

        {/* =========================================================================
            THE TELSITE DISRUPTIVE ENTERPRISE CHALLENGE
           ========================================================================= */}
        <section className="bg-slate-950/40 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 2xl:p-20 relative overflow-hidden border border-white/[0.08] shadow-2xl backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl 2xl:max-w-5xl space-y-6 sm:space-y-8 relative z-10">
            <div className="space-y-2">
              <span className="inline-block bg-purple-600 border border-purple-400/30 text-white font-mono text-[9px] sm:text-[10px] 2xl:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-md">
                The Telsite Operational Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-black tracking-tight leading-tight">
                WE DON'T TALK HISTORY.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                  WE SECURE ACTIVE RUNTIME.
                </span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm 2xl:text-lg font-medium max-w-xl 2xl:max-w-3xl">
                While the industry asks you to wait weeks for telemetry mapping and hardware configuration, the Telsite ecosystem operates on an aggressive, guaranteed deployment matrix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 2xl:gap-10 pt-4">
              <div className="p-5 bg-slate-950/40 border border-white/[0.06] rounded-xl sm:rounded-2xl space-y-3 shadow-md">
                <div className="text-xl sm:text-2xl 2xl:text-4xl">⚡</div>
                <div className="space-y-1">
                  <h4 className="text-xs 2xl:text-base font-mono font-black text-purple-400 uppercase tracking-wider">24-Hour Provisioning</h4>
                  <p className="text-[11px] sm:text-xs 2xl:text-base text-slate-400 font-medium leading-relaxed">
                    From formal purchase order to live field tracking. Our pre-configured units ship pre-mapped to your dashboard within one business day.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-950/40 border border-white/[0.06] rounded-xl sm:rounded-2xl space-y-3 shadow-md">
                <div className="text-xl sm:text-2xl 2xl:text-4xl">⛽</div>
                <div className="space-y-1">
                  <h4 className="text-xs 2xl:text-base font-mono font-black text-purple-400 uppercase tracking-wider">0% Fuel Bypass Target</h4>
                  <p className="text-[11px] sm:text-xs 2xl:text-base text-slate-400 font-medium leading-relaxed">
                    Our digital fuel sensor integration is calibrated so precisely that any variance triggers an instantaneous system lock alerts.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-950/40 border border-white/[0.06] rounded-xl sm:rounded-2xl space-y-3 shadow-md">
                <div className="text-xl sm:text-2xl 2xl:text-4xl">⚖️</div>
                <div className="space-y-1">
                  <h4 className="text-xs 2xl:text-base font-mono font-black text-purple-400 uppercase tracking-wider">Bulletproof S.I. 118</h4>
                  <p className="text-[11px] sm:text-xs 2xl:text-base text-slate-400 font-medium leading-relaxed">
                    We don't just promise compliance; our speed governors are backed by a zero-penalty guarantee. If our hardware drifts, we field-service it immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            GEOGRAPHICAL LOCATION MAP SECTION
           ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 2xl:gap-16 items-center bg-white/[0.02] border border-white/[0.12] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 2xl:p-16 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          <div className="md:col-span-5 space-y-5 sm:space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-[10px] sm:text-xs 2xl:text-base font-mono font-black text-purple-400 uppercase tracking-widest">Headquarters Office</h3>
              <h4 className="text-xl sm:text-2xl 2xl:text-4xl font-black text-white tracking-tight">Visit Our Command Offices</h4>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm 2xl:text-lg text-slate-300 font-medium">
              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg 2xl:text-2xl">📍</span>
                <p>
                  <strong className="text-purple-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Physical Address:</strong>
                  18 Divine Road, Milton Park,<br />
                  Harare, Zimbabwe
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg 2xl:text-2xl">📞</span>
                <p>
                  <strong className="text-purple-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Landline / Operations desk:</strong>
                  +263 242 741840
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg 2xl:text-2xl">📱</span>
                <p>
                  <strong className="text-purple-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Mobile Hotline Support:</strong>
                  +263 718 339968
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg 2xl:text-2xl">✉️</span>
                <p>
                  <strong className="text-purple-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Corporate Email Inbox:</strong>
                  contact@telsite-tracking.co.zw
                </p>
              </div>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 bg-white/[0.05] hover:bg-purple-600 border border-white/[0.1] hover:border-purple-400 text-white text-[10px] sm:text-xs 2xl:text-base font-mono font-black uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg group w-full sm:w-auto justify-center sm:justify-start hover:-translate-y-0.5"
            >
              🚀 Launch Google Maps Navigation
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* CYBERPUNK MAP INTERFACE */}
          <div className="md:col-span-7 relative w-full h-[260px] sm:h-[320px] 2xl:h-[450px] bg-slate-950/60 border border-white/[0.08] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group">
            {/* Darker Blueprint Grid Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff/[0.04]_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70 group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute top-[40%] left-0 w-full h-8 bg-white/[0.02] border-y border-white/[0.04] -rotate-2 flex items-center justify-center font-mono text-[8px] sm:text-[9px] 2xl:text-xs text-slate-500 font-bold uppercase tracking-widest select-none">
              Divine Road
            </div>
            <div className="absolute top-0 left-[35%] w-10 h-full bg-white/[0.02] border-x border-white/[0.04] rotate-12 flex items-center justify-center font-mono text-[8px] sm:text-[9px] 2xl:text-xs text-slate-500 font-bold uppercase tracking-widest [writing-mode:vertical-lr] select-none">
              Milton Park Link
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[38%] left-[36%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
            >
              <span className="absolute -inset-4 rounded-full bg-purple-500/20 animate-ping duration-1000" />
              <span className="absolute -inset-8 rounded-full bg-violet-500/10 animate-pulse" />

              <div className="bg-[#120B2E] text-white border-2 border-purple-500 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-1 sm:py-1.5 shadow-2xl flex items-center gap-2 group-hover/pin:scale-105 transition-transform duration-300">
                <span className="text-xs sm:text-sm animate-bounce">📍</span>
                <div className="text-left font-sans">
                  <span className="block font-black text-[9px] sm:text-[10px] 2xl:text-sm leading-none uppercase tracking-wide text-purple-400">Telsite HQ</span>
                  <span className="block text-[7px] sm:text-[8px] 2xl:text-xs font-mono text-slate-400 mt-0.5">No. 18 Divine Road</span>
                </div>
              </div>
            </a>

            <div className="absolute bottom-3 right-3 left-3 bg-[#100D1B]/90 border border-white/[0.08] backdrop-blur-md p-2 rounded-lg sm:rounded-xl flex items-center justify-between text-[8px] sm:text-[10px] 2xl:text-sm font-mono shadow-md pointer-events-none transition-all duration-300">
              <span className="text-slate-400 font-bold">🔍 ZOOM LEVEL: HARARE ENTERPRISE MATRIX</span>
              <span className="text-purple-400 font-black animate-pulse hidden sm:inline">CLICK ANYWHERE TO NAVIGATE LIVE →</span>
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