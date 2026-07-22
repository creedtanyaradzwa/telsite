import aboutBg from '../assets/ABOUT.webp'; 

export default function About() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-17.817354,31.026402+(Telsite+Tracking)";

  return (
    <div className="w-full bg-gradient-to-b from-purple-950 via-[#2f083d] to-purple-950 text-slate-100 min-h-screen py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Telsite Ambient Glow Orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#b015db]/20 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-fuchsia-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#ad18aa]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl 2xl:max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-20">
        
        {/* =========================================================================
            HIGH-VISIBILITY GLASS HERO CONTAINER (BACKGROUND IMAGE UPDATED)
           ========================================================================= */}
        <div className="relative rounded-3xl overflow-hidden border border-purple-300/40 shadow-2xl bg-purple-950/40 backdrop-blur-md">
          
          {/* Enhanced Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src={aboutBg} 
              alt="Telsite Infrastructure Background" 
              className="w-full h-full object-cover scale-100 saturate-[1.2] brightness-90"
            />
            {/* Lighter Gradient Mask for Optimal Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/60 via-purple-950/40 to-purple-950/70" />
            <div className="absolute inset-0 bg-purple-950/30 mix-blend-multiply" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 md:p-16 text-center max-w-3xl 2xl:max-w-5xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <span className="inline-block bg-purple-950/80 border border-purple-300/40 text-purple-200 font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                ✦ Corporate Profile & Infrastructure
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-indigo-200">Telematics Standards</span> in Zimbabwe
              </h1>
              <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl 2xl:max-w-4xl mx-auto bg-purple-950/80 p-4 sm:p-5 rounded-2xl border border-purple-300/40 backdrop-blur-md shadow-2xl">
                Established in 2010 as a core operating division of Telsite Investments (Pvt) Ltd, Telsite Tracking has grown into one of the country's most relied-upon asset management intelligence architectures.
              </p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-purple-300/30 text-left">
              <div className="bg-purple-950/85 border border-purple-300/40 p-5 sm:p-6 rounded-2xl space-y-2 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl">🔭</span>
                  <h2 className="text-xs sm:text-sm font-mono font-black text-fuchsia-300 uppercase tracking-wider">Our Strategic Vision</h2>
                </div>
                <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-normal">
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
          <div className="bg-purple-900/30 border border-purple-300/40 rounded-3xl p-6 sm:p-8 md:p-10 space-y-4 shadow-2xl shadow-purple-900/30 relative overflow-hidden group hover:border-fuchsia-400/60 transition-all duration-300 backdrop-blur-md">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
            <div className="text-2xl sm:text-3xl">🚀</div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">Our Corporate Mission</h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              We empower corporate enterprises and public transporters to eliminate overhead waste, eliminate fuel siphoning loops instantly, and comfortably fulfill statutory regulatory frameworks via engineering support that responds instantly to our clients' precise field feedback.
            </p>
          </div>
        </section>

        {/* =========================================================================
            THE TELSITE DISRUPTIVE ENTERPRISE CHALLENGE
           ========================================================================= */}
        <section className="bg-purple-900/30 border border-purple-300/40 text-white rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl shadow-purple-900/30 backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-bl from-fuchsia-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl 2xl:max-w-5xl space-y-6 sm:space-y-8 relative z-10">
            <div className="space-y-2">
              <span className="inline-block bg-fuchsia-600/80 border border-fuchsia-400/50 text-white font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                The Telsite Operational Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
                WE DON'T TALK HISTORY.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-300">
                  WE SECURE ACTIVE RUNTIME.
                </span>
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm font-normal max-w-xl">
                While the industry asks you to wait weeks for telemetry mapping and hardware configuration, the Telsite ecosystem operates on an aggressive, guaranteed deployment matrix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4">
              <div className="p-5 bg-purple-950/60 border border-purple-300/30 rounded-2xl space-y-3 shadow-md">
                <div className="text-xl sm:text-2xl">⚡</div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-black text-fuchsia-300 uppercase tracking-wider">24-Hour Provisioning</h4>
                  <p className="text-[11px] sm:text-xs text-purple-200/80 font-normal leading-relaxed">
                    From formal purchase order to live field tracking. Our pre-configured units ship pre-mapped to your dashboard within one business day.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-purple-950/60 border border-purple-300/30 rounded-2xl space-y-3 shadow-md">
                <div className="text-xl sm:text-2xl">⛽</div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-black text-fuchsia-300 uppercase tracking-wider">0% Fuel Bypass Target</h4>
                  <p className="text-[11px] sm:text-xs text-purple-200/80 font-normal leading-relaxed">
                    Our digital fuel sensor integration is calibrated so precisely that any variance triggers an instantaneous system lock alerts.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-purple-950/60 border border-purple-300/30 rounded-2xl space-y-3 shadow-md">
                <div className="text-xl sm:text-2xl">⚖️</div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-black text-fuchsia-300 uppercase tracking-wider">Bulletproof S.I. 118</h4>
                  <p className="text-[11px] sm:text-xs text-purple-200/80 font-normal leading-relaxed">
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
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center bg-purple-900/30 border border-purple-300/40 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl shadow-purple-900/30 relative overflow-hidden backdrop-blur-md">
          
          <div className="md:col-span-5 space-y-5 sm:space-y-6 text-left">
            <div className="space-y-2">
              <h3 className="text-[10px] sm:text-xs font-mono font-black text-fuchsia-300 uppercase tracking-widest">Headquarters Office</h3>
              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">Visit Our Command Offices</h4>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-200 font-normal">
              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg">📍</span>
                <p>
                  <strong className="text-fuchsia-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Physical Address:</strong>
                  18 Divine Road, Milton Park,<br />
                  Harare, Zimbabwe
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg">📞</span>
                <p>
                  <strong className="text-fuchsia-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Landline / Operations desk:</strong>
                  +263 242 741840
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg">📱</span>
                <p>
                  <strong className="text-fuchsia-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Mobile Hotline Support:</strong>
                  +263 718 339968
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-base sm:text-lg">✉️</span>
                <p>
                  <strong className="text-fuchsia-300 block font-bold mb-0.5 font-mono text-[11px] tracking-wide uppercase">Corporate Email Inbox:</strong>
                  contact@telsite-tracking.co.zw
                </p>
              </div>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 bg-purple-800/60 hover:bg-purple-700/80 border border-purple-300/40 hover:border-white text-white text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg group w-full sm:w-auto justify-center sm:justify-start hover:shadow-[0_0_25px_rgba(232,121,249,0.4)] hover:-translate-y-0.5"
            >
              🚀 Launch Google Maps Navigation
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* CYBERPUNK MAP INTERFACE */}
          <div className="md:col-span-7 relative w-full h-[260px] sm:h-[320px] bg-purple-950/70 border border-purple-300/30 rounded-2xl overflow-hidden shadow-2xl group">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e879f9_[0.08_1.5px],transparent_1.5px)] [background-size:24px_24px] opacity-40 group-hover:scale-105 transition-transform duration-700" />
            
            <div className="absolute top-[40%] left-0 w-full h-8 bg-purple-900/30 border-y border-purple-300/20 -rotate-2 flex items-center justify-center font-mono text-[8px] sm:text-[9px] text-purple-300/70 font-bold uppercase tracking-widest select-none">
              Divine Road
            </div>
            <div className="absolute top-0 left-[35%] w-10 h-full bg-purple-900/30 border-x border-purple-300/20 rotate-12 flex items-center justify-center font-mono text-[8px] sm:text-[9px] text-purple-300/70 font-bold uppercase tracking-widest [writing-mode:vertical-lr] select-none">
              Milton Park Link
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[38%] left-[36%] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group/pin"
            >
              <span className="absolute -inset-4 rounded-full bg-fuchsia-500/30 animate-ping duration-1000" />
              <span className="absolute -inset-8 rounded-full bg-purple-500/20 animate-pulse" />

              <div className="bg-[#2f083d] text-white border-2 border-fuchsia-400 rounded-xl px-3 py-1.5 shadow-[0_0_20px_rgba(232,121,249,0.5)] flex items-center gap-2 group-hover/pin:scale-105 transition-transform duration-300">
                <span className="text-xs sm:text-sm animate-bounce">📍</span>
                <div className="text-left font-sans">
                  <span className="block font-black text-[9px] sm:text-[10px] leading-none uppercase tracking-wide text-fuchsia-300">Telsite HQ</span>
                  <span className="block text-[7px] sm:text-[8px] font-mono text-purple-200/80 mt-0.5">No. 18 Divine Road</span>
                </div>
              </div>
            </a>

            <div className="absolute bottom-3 right-3 left-3 bg-purple-950/90 border border-purple-300/30 backdrop-blur-md p-2 rounded-xl flex items-center justify-between text-[8px] sm:text-[10px] font-mono shadow-md pointer-events-none transition-all duration-300">
              <span className="text-slate-300 font-bold">🔍 ZOOM LEVEL: HARARE ENTERPRISE MATRIX</span>
              <span className="text-fuchsia-300 font-black animate-pulse hidden sm:inline">CLICK ANYWHERE TO NAVIGATE LIVE →</span>
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