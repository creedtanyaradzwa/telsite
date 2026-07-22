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
    <div className="w-full bg-gradient-to-b from-purple-950 via-[#2f083d] to-purple-950 text-slate-100 min-h-screen py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Telsite Ambient Glow Orbs */}
      <div className="absolute top-[-5%] right-[-5%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#b015db]/20 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-fuchsia-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#ad18aa]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Header Segment Block */}
        <div className="text-center space-y-3">
          <span className="inline-block bg-purple-900/50 border border-purple-300/40 text-purple-200 font-mono text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
            ✦ Financial Intelligence Analytics
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-fuchsia-100 to-indigo-100">
            KNOW HOW MUCH YOU CAN SAVE WITH US
          </h1>
          <p className="text-xs md:text-sm text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
            Adjust your current operational variables to quantify the hidden financial drain of unmonitored siphoning and see exactly how much capital a local Telsite capacitive deployment can recover annually.
          </p>
        </div>

        {/* Input / Output Control Split Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Controls Adjustment Column (Glassmorphic Container) */}
          <div className="md:col-span-5 bg-purple-900/30 border border-purple-300/40 backdrop-blur-md rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl shadow-purple-900/30">
            <h3 className="text-xs font-black uppercase tracking-widest font-mono text-purple-200 pb-3 border-b border-purple-300/20">
              Control Variables
            </h3>

            {/* Variable Item Node 1: Fleet Size */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span className="text-slate-300">Active Fleet Size</span>
                <span className="text-fuchsia-300 font-black">{fleetSize} Vehicles</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full h-2 bg-purple-950/80 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 border border-purple-300/30"
              />
            </div>

            {/* Variable Item Node 2: Monthly Fuel Cost */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span className="text-slate-300">Avg Monthly Fuel / Vehicle</span>
                <span className="text-fuchsia-300 font-black">${monthlyFuelCost.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="20"
                max="5000"
                step="20"
                value={monthlyFuelCost}
                onChange={(e) => setMonthlyFuelCost(Number(e.target.value))}
                className="w-full h-2 bg-purple-950/80 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 border border-purple-300/30"
              />
            </div>

            {/* Variable Item Node 3: Theft Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span className="text-slate-300">Est. Siphoning Loss Rate</span>
                <span className="text-fuchsia-300 font-black">{suspectedTheftRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={suspectedTheftRate}
                onChange={(e) => setSuspectedTheftRate(Number(e.target.value))}
                className="w-full h-2 bg-purple-950/80 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 border border-purple-300/30"
              />
            </div>
          </div>

          {/* Diagnostic Results Matrix Graph */}
          <div className="md:col-span-7 bg-purple-900/30 border border-purple-300/40 backdrop-blur-md p-6 md:p-8 rounded-3xl flex flex-col justify-between shadow-2xl shadow-purple-900/30 space-y-6">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-widest font-mono text-purple-200 pb-3 border-b border-purple-300/20">
                Diagnostic Projections
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-purple-950/60 border border-purple-300/30 p-4 rounded-2xl shadow-md">
                  <p className="text-[10px] font-mono text-purple-200 uppercase font-bold tracking-wider">Gross Fuel Spend / Mo</p>
                  <p className="text-xl font-black text-white mt-1">${currentTotalMonthlyFuel.toLocaleString()}</p>
                </div>
                <div className="bg-purple-950/60 border border-amber-500/40 p-4 rounded-2xl shadow-md">
                  <p className="text-[10px] font-mono text-amber-300 uppercase font-bold tracking-wider">Estimated Leakage / Mo</p>
                  <p className="text-xl font-black text-amber-400 mt-1">${estimatedMonthlyLoss.toLocaleString()}</p>
                </div>
              </div>

              <div className="bg-purple-950/80 border border-purple-300/30 p-5 rounded-2xl shadow-md">
                <p className="text-xs font-mono text-purple-200 uppercase font-bold tracking-wider">Current Hidden Annual Drain</p>
                <p className="text-3xl md:text-4xl font-black text-amber-400 tracking-tight mt-1">
                  ${annualLoss.toLocaleString()} <span className="text-xs text-purple-300 font-mono font-bold">USD / year</span>
                </p>
              </div>

              {/* Savings Highlight Box with Emerald Neon Glow */}
              <div className="bg-emerald-950/40 border border-emerald-400/50 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-purple-950/40 to-transparent shadow-[0_0_25px_rgba(16,185,129,0.15)]">
                <p className="text-xs font-mono text-emerald-300 uppercase tracking-wider font-black">Projected Telsite Recovery Capital</p>
                <p className="text-3xl md:text-4xl font-black text-emerald-400 tracking-tight mt-1">
                  ${telsiteAnnualSavings.toLocaleString()} <span className="text-xs text-emerald-300/80 font-mono font-bold">saved / year</span>
                </p>
                <p className="text-[11px] text-purple-200/80 mt-2 leading-relaxed">
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