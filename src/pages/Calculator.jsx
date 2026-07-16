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
    <div className="w-full bg-transparent text-slate-100 min-h-screen py-16 px-4 md:px-6 relative overflow-hidden">
      
      {/* =========================================================================
          DYNAMIC THEME BACKGROUND ACCENTS & GLOWS
         ========================================================================= */}
      <div className="absolute top-[-5%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-purple-600/10 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[10%] left-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-violet-500/10 blur-[70px] md:blur-[100px] pointer-events-none" />

      {/* GLOBAL DARK OVERLAY FOR GLASS EFFECT CONSISTENCY */}
      <div className="absolute inset-0 bg-[#0E0B18]/60 backdrop-blur-[1px] z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER SEGMENT BLOCK */}
        <div className="mb-12 text-left">
          <span className="text-purple-400 font-mono text-xs uppercase tracking-widest block mb-2 font-black">
            ✦ Financial Intelligence Analytics
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            KNOW HOW MUCH YOU CAN SAVE WITH US
          </h1>
          <p className="text-slate-300 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed drop-shadow-sm">
            Adjust your current operational variables to quantify the hidden financial drain of unmonitored siphoning and see exactly how much capital a local Telsite capacitive deployment can recover annually.
          </p>
        </div>

        {/* INPUT / OUTPUT CONTROL SPLIT MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* CONTROLS ADJUSTMENT COLUMN (PREMIUM DARK GLASS) */}
          <div className="md:col-span-5 bg-[#100D1B]/40 border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 space-y-6 shadow-2xl">
            <h3 className="text-xs font-black uppercase tracking-widest font-mono text-purple-300 pb-3 border-b border-white/[0.06]">
              Control Variables
            </h3>

            {/* Variable Item Node 1: Fleet Size */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono mb-1 font-bold">
                <span className="text-slate-400">Active Fleet Size</span>
                <span className="text-purple-300">{fleetSize} Vehicles</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950/80 rounded-lg appearance-none cursor-pointer accent-purple-500 border border-white/[0.05]"
              />
            </div>

            {/* Variable Item Node 2: Monthly Fuel Cost */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono mb-1 font-bold">
                <span className="text-slate-400">Avg Monthly Fuel / Vehicle</span>
                <span className="text-purple-300">${monthlyFuelCost.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="20"
                max="5000"
                step="20"
                value={monthlyFuelCost}
                onChange={(e) => setMonthlyFuelCost(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950/80 rounded-lg appearance-none cursor-pointer accent-purple-500 border border-white/[0.05]"
              />
            </div>

            {/* Variable Item Node 3: Theft Rate */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono mb-1 font-bold">
                <span className="text-slate-400">Est. Siphoning Loss Rate</span>
                <span className="text-purple-300">{suspectedTheftRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={suspectedTheftRate}
                onChange={(e) => setSuspectedTheftRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950/80 rounded-lg appearance-none cursor-pointer accent-purple-500 border border-white/[0.05]"
              />
            </div>
          </div>

          {/* DIAGNOSTIC RESULTS MATRIX GRAPH */}
          <div className="md:col-span-7 bg-white/[0.02] border border-white/[0.12] backdrop-blur-md p-6 rounded-2xl flex flex-col justify-between shadow-2xl space-y-6">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-widest font-mono text-slate-400 pb-3 border-b border-white/[0.08]">
                Diagnostic Projections
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#100D1B]/60 border border-white/[0.06] p-4 rounded-xl shadow-md">
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Gross Fuel Spend / Mo</p>
                  <p className="text-xl font-black text-white mt-1">${currentTotalMonthlyFuel.toLocaleString()}</p>
                </div>
                <div className="bg-[#100D1B]/60 border border-orange-500/20 p-4 rounded-xl shadow-md">
                  <p className="text-[10px] font-mono text-orange-400 uppercase font-bold tracking-wider">Estimated Leakage / Mo</p>
                  <p className="text-xl font-black text-orange-400 mt-1">${estimatedMonthlyLoss.toLocaleString()}</p>
                </div>
              </div>

              <div className="bg-[#100D1B]/80 border border-white/[0.08] p-5 rounded-xl shadow-md">
                <p className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">Current Hidden Annual Drain</p>
                <p className="text-3xl md:text-4xl font-black text-orange-500 tracking-tight mt-1">
                  ${annualLoss.toLocaleString()} <span className="text-xs text-slate-400 font-mono font-bold">USD / year</span>
                </p>
              </div>

              {/* SAVINGS HIGHLIGHT BOX WITH VIBRANT NEON BORDER */}
              <div className="bg-emerald-500/[0.03] border border-emerald-500/30 p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent shadow-lg">
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-black">Projected Telsite Recovery Capital</p>
                <p className="text-3xl md:text-4xl font-black text-emerald-400 tracking-tight mt-1">
                  ${telsiteAnnualSavings.toLocaleString()} <span className="text-xs text-emerald-400/80 font-mono font-bold">saved / year</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
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