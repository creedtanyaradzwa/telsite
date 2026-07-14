import { useState } from 'react';

export default function Calculator() {
  const [fleetSize, setFleetSize] = useState(10);
  const [monthlyFuelCost, setMonthlyFuelCost] = useState(1200); // Per vehicle in USD
  const [suspectedTheftRate, setSuspectedTheftRate] = useState(15); // Percentage

aselines
  const currentTotalMonthlyFuel = fleetSize * monthlyFuelCost;
  const estimatedMonthlyLoss = currentTotalMonthlyFuel * (suspectedTheftRate / 100);
  const annualLoss = estimatedMonthlyLoss * 12;
  
  
  const telsiteAnnualSavings = annualLoss * 0.75; 

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen py-16 px-6 relative overflow-hidden">
      
      {/* FLOATING SOFT LIGHT ACCENT DECORATORS */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-theme-lime/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER SEGMENT BLOCK */}
        <div className="mb-12">
          <span className="text-theme-purple font-mono text-xs uppercase tracking-widest block mb-2 font-black">
            ✦ Financial Intelligence Analytics
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            KNOW HOW MUCH YOU CAN SAVE WITH US
          </h1>
          <p className="text-slate-600 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
            Adjust your current operational variables to quantify the hidden financial drain of unmonitored siphoning and see exactly how much capital a local Telsite capacitive deployment can recover annually.
          </p>
        </div>

        {/* INPUT / OUTPUT CONTROL SPLIT MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* CONTROLS ADJUSTMENT COLUMN */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest font-mono text-slate-400 pb-3 border-b border-slate-100">
              Control Variables
            </h3>

            {/* Variable Item Node 1: Fleet Size */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2 font-bold">
                <span className="text-slate-500">Active Fleet Size</span>
                <span className="text-theme-purple">{fleetSize} Vehicles</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={fleetSize}
                onChange={(e) => setFleetSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-theme-purple"
              />
            </div>

            {/* Variable Item Node 2: Monthly Fuel Cost */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2 font-bold">
                <span className="text-slate-500">Avg Monthly Fuel / Vehicle</span>
                <span className="text-theme-purple">${monthlyFuelCost.toLocaleString()} USD</span>
              </div>
              <input
                type="range"
                min="20"
                max="5000"
                step="20"
                value={monthlyFuelCost}
                onChange={(e) => setMonthlyFuelCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-theme-purple"
              />
            </div>

            {/* Variable Item Node 3: Theft Rate */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2 font-bold">
                <span className="text-slate-500">Est. Siphoning Loss Rate</span>
                <span className="text-theme-purple">{suspectedTheftRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={suspectedTheftRate}
                onChange={(e) => setSuspectedTheftRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-theme-purple"
              />
            </div>
          </div>

          {/* DIAGNOSTIC RESULTS MATRIX GRAPH */}
          <div className="md:col-span-7 light-glass p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-widest font-mono text-slate-400 pb-3 border-b border-slate-200/60">
                Diagnostic Projections
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 border border-slate-200 p-4 rounded-xl shadow-xs">
                  <p className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider">Gross Fuel Spend / Mo</p>
                  <p className="text-xl font-black text-slate-900 mt-1">${currentTotalMonthlyFuel.toLocaleString()}</p>
                </div>
                <div className="bg-white/80 border border-slate-200 p-4 rounded-xl shadow-xs">
                  <p className="text-[10px] font-mono text-theme-orange uppercase font-bold tracking-wider">Estimated Leakage / Mo</p>
                  <p className="text-xl font-black text-theme-orange mt-1">${estimatedMonthlyLoss.toLocaleString()}</p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-xs">
                <p className="text-xs font-mono text-slate-500 uppercase font-bold tracking-wider">Current Hidden Annual Drain</p>
                <p className="text-3xl md:text-4xl font-black text-theme-orange tracking-tight mt-1">
                  ${annualLoss.toLocaleString()} <span className="text-xs text-slate-400 font-mono font-bold">USD / year</span>
                </p>
              </div>

              <div className="bg-theme-lime/5 border border-theme-lime/20 p-5 rounded-xl bg-gradient-to-r from-theme-lime/10 to-transparent">
                <p className="text-xs font-mono text-theme-lime uppercase tracking-wider font-black">Projected Telsite Recovery Capital</p>
                <p className="text-3xl md:text-4xl font-black text-theme-lime tracking-tight mt-1">
                  ${telsiteAnnualSavings.toLocaleString()} <span className="text-xs text-theme-lime/80 font-mono font-bold">saved / year</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  *Calculated based on a 75% baseline optimization metric via immediate alert defense triggers.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] text-slate-500 font-mono leading-relaxed">
              💡 <strong>Deployment Recommendation:</strong> Integrating capacitive FLS fuel sensor units across your commercial assets fully neutralizes installation capital requirements within less than 90 days.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}