import { useState } from 'react';

export default function Calculator() {
  const [fleetSize, setFleetSize] = useState(10);
  const [monthlyFuelCost, setMonthlyFuelCost] = useState(1200); // Per vehicle in USD
  const [suspectedTheftRate, setSuspectedTheftRate] = useState(15); // Percentage

  const currentTotalMonthlyFuel = fleetSize * monthlyFuelCost;
  const estimatedMonthlyLoss = currentTotalMonthlyFuel * (suspectedTheftRate / 100);
  const annualLoss = estimatedMonthlyLoss * 12;
  
  const telsiteAnnualSavings = annualLoss * 0.75; 

  return (
    <div className="w-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 text-black min-h-screen py-10 md:py-16 px-4 md:px-10 relative overflow-hidden font-sans antialiased">
      
      {/* =========================================================================
          ANIMATED GLOWING & MOVING AMBIENT LIGHT ORBS
         ========================================================================= */}
      <div className="absolute top-[-5%] right-[-5%] w-[450px] md:w-[750px] h-[450px] md:h-[750px] rounded-full bg-[#D8C7A9]/20 blur-[130px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute top-[35%] left-[-8%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-fuchsia-400/20 blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[-5%] left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-purple-300/15 blur-[150px] pointer-events-none animate-pulse duration-[9000ms]" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12 pt-24 lg:pt-28">
        
        {/* Header Segment Block */}
        <div className="text-center space-y-4">
          <span className="inline-block bg-[#D8C7A9] border border-white/90 text-amber-950 font-mono text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
            ✦ Financial Intelligence Analytics
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F3EAD8] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            KNOW HOW MUCH YOU CAN SAVE WITH US
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-amber-950 font-black max-w-3xl mx-auto leading-relaxed bg-[#D8C7A9]/95 p-6 rounded-3xl border border-white/90 backdrop-blur-3xl shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_20px_40px_rgba(0,0,0,0.5)]">
            Adjust your current operational variables to quantify the hidden financial drain of unmonitored siphoning and see exactly how much capital a local Telsite capacitive deployment can recover annually.
          </p>
        </div>

        {/* Input / Output Control Split Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Controls Adjustment Column (4D Khaki Glass Container) */}
          <div className="md:col-span-5 bg-[#D8C7A9]/95 border border-white/90 backdrop-blur-3xl rounded-3xl p-7 md:p-9 space-y-7 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] text-amber-950">
            <h3 className="text-sm font-black uppercase tracking-widest font-mono text-amber-950 pb-4 border-b border-amber-950/20">
              Control Variables
            </h3>

            {/* Variable Item Node 1: Fleet Size */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm sm:text-base font-mono font-bold">
                <span className="text-amber-950 font-black">Active Fleet Size</span>
                <span className="text-amber-900 font-black">{fleetSize} Vehicles</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full h-3 bg-amber-950/20 rounded-lg appearance-none cursor-pointer accent-amber-950 border border-white/80"
              />
            </div>

            {/* Variable Item Node 2: Monthly Fuel Cost */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm sm:text-base font-mono font-bold">
                <span className="text-amber-950 font-black">Avg Monthly Fuel / Vehicle</span>
                <span className="text-amber-900 font-black">${monthlyFuelCost.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="20"
                max="5000"
                step="20"
                value={monthlyFuelCost}
                onChange={(e) => setMonthlyFuelCost(Number(e.target.value))}
                className="w-full h-3 bg-amber-950/20 rounded-lg appearance-none cursor-pointer accent-amber-950 border border-white/80"
              />
            </div>

            {/* Variable Item Node 3: Theft Rate */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm sm:text-base font-mono font-bold">
                <span className="text-amber-950 font-black">Est. Siphoning Loss Rate</span>
                <span className="text-amber-900 font-black">{suspectedTheftRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={suspectedTheftRate}
                onChange={(e) => setSuspectedTheftRate(Number(e.target.value))}
                className="w-full h-3 bg-amber-950/20 rounded-lg appearance-none cursor-pointer accent-amber-950 border border-white/80"
              />
            </div>
          </div>

          {/* Diagnostic Results Matrix Graph */}
          <div className="md:col-span-7 bg-[#D8C7A9]/95 border border-white/90 backdrop-blur-3xl p-7 md:p-9 rounded-3xl flex flex-col justify-between shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] space-y-7 text-amber-950">
            <div className="space-y-7">
              <h3 className="text-sm font-black uppercase tracking-widest font-mono text-amber-950 pb-4 border-b border-amber-950/20">
                Diagnostic Projections
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-amber-950/10 border border-white/80 p-5 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]">
                  <p className="text-xs font-mono text-amber-900 uppercase font-black tracking-wider">Gross Fuel Spend / Mo</p>
                  <p className="text-2xl font-black text-amber-950 mt-1">${currentTotalMonthlyFuel.toLocaleString()}</p>
                </div>
                <div className="bg-amber-950/20 border border-white/80 p-5 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]">
                  <p className="text-xs font-mono text-amber-900 uppercase font-black tracking-wider">Estimated Leakage / Mo</p>
                  <p className="text-2xl font-black text-amber-950 mt-1">${estimatedMonthlyLoss.toLocaleString()}</p>
                </div>
              </div>

              <div className="bg-amber-950/20 border border-white/80 p-6 rounded-2xl shadow-md">
                <p className="text-sm font-mono text-amber-900 uppercase font-black tracking-wider">Current Hidden Annual Drain</p>
                <p className="text-4xl md:text-5xl font-black text-amber-950 tracking-tight mt-1">
                  ${annualLoss.toLocaleString()} <span className="text-sm text-amber-900 font-mono font-bold">USD / year</span>
                </p>
              </div>

              {/* Savings Highlight Box with Emerald Neon Glow */}
              <div className="bg-emerald-900/10 border-2 border-emerald-600/80 p-6 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_10px_20px_rgba(5,150,105,0.2)]">
                <p className="text-sm font-mono text-emerald-950 uppercase tracking-wider font-black">Projected Telsite Recovery Capital</p>
                <p className="text-4xl md:text-5xl font-black text-emerald-900 tracking-tight mt-1">
                  ${telsiteAnnualSavings.toLocaleString()} <span className="text-sm text-emerald-800 font-mono font-bold">saved / year</span>
                </p>
                <p className="text-xs md:text-sm text-amber-950/90 mt-2 leading-relaxed font-black">
                  *Calculated based on a 75% system configuration optimization metric via immediate alert defense triggers.
                </p>
              </div>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  );
}