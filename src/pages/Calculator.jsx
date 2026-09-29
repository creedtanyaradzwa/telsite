import { useState } from 'react';
import fleet3     from '../assets/fleet3.webp';
import tracking5  from '../assets/tracking5.webp';
export default function Calculator({ onNavigate }) {
  const [fleetSize,          setFleetSize]          = useState(10);
  const [monthlyFuelCost,    setMonthlyFuelCost]    = useState(1200);
  const [suspectedTheftRate, setSuspectedTheftRate] = useState(15);
  const currentTotalMonthlyFuel = fleetSize * monthlyFuelCost;
  const estimatedMonthlyLoss    = currentTotalMonthlyFuel * (suspectedTheftRate / 100);
  const annualLoss              = estimatedMonthlyLoss * 12;
  const telsiteAnnualSavings    = annualLoss * 0.75;
  const sliderClass = "w-full h-2 rounded-full appearance-none cursor-pointer accent-[#D8C7A9] slider-visible";
  return (
    <div className="w-full min-h-screen font-sans bg-purple-950">
      {/* Header — image vivid, text dominant */}
      <div className="relative pt-28 lg:pt-32 pb-20 px-6 sm:px-10 md:px-16 border-b border-purple-400/20 overflow-hidden min-h-[340px] flex items-end">
        <img src={fleet3} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy" decoding="async" />
        {/* Gradient — strong at bottom/left where text is, lets image show clearly at top/right */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15" />
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-5 pb-4">
          <span className="inline-block border border-[#D8C7A9] text-[#D8C7A9] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,1)' }}>
            Financial Intelligence
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white leading-tight"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.15), 0 2px 16px rgba(0,0,0,1)' }}>
            Fleet Savings Calculator
          </h1>
          <p className="text-[#F3EAD8] text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto"
             style={{ textShadow: '0 1px 10px rgba(0,0,0,1)' }}>
            Adjust your operational variables below to quantify the hidden financial drain of unmonitored fuel siphoning — and see exactly how much a Telsite deployment can recover annually.
          </p>
        </div>
      </div>
      {/* Body */}
      <div className="py-14 md:py-20 px-6 sm:px-10 md:px-16 bg-purple-900/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Controls — muted slate card */}
          <div className="md:col-span-5">
            <div className="rounded-xl p-7 space-y-8 bg-slate-700/80 border border-slate-500/40 backdrop-blur-sm">
              <div className="pb-4 border-b border-white/15">
                <h2 className="text-white font-semibold text-base">Control Variables</h2>
                <p className="text-slate-300 text-xs mt-1">Drag the sliders to match your fleet profile.</p>
              </div>
              {[
                { label: 'Fleet Size',                 value: `${fleetSize} vehicles`,               min: 1,  max: 100,  step: 1,  val: fleetSize,          set: setFleetSize          },
                { label: 'Avg Monthly Fuel / Vehicle', value: `$${monthlyFuelCost.toLocaleString()}`, min: 20, max: 5000, step: 20, val: monthlyFuelCost,    set: setMonthlyFuelCost    },
                { label: 'Estimated Siphoning Rate',   value: `${suspectedTheftRate}%`,              min: 5,  max: 40,   step: 1,  val: suspectedTheftRate, set: setSuspectedTheftRate },
              ].map(({ label, value, min, max, step, val, set }) => (
                <div key={label} className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label className="text-slate-300 text-xs font-semibold uppercase tracking-wider">{label}</label>
                    <span className="text-white font-semibold text-sm tabular-nums">{value}</span>
                  </div>
                  <input type="range" min={min} max={max} step={step} value={val}
                    onChange={(e) => set(Number(e.target.value))} className={sliderClass} />
                </div>
              ))}
            </div>
          </div>
          {/* Results */}
          <div className="md:col-span-7 flex flex-col gap-5">
            <div className="pb-4 border-b border-purple-400/20">
              <h2 className="text-white font-semibold text-base">Diagnostic Projections</h2>
              <p className="text-slate-400 text-xs mt-1">Figures update live as you adjust the sliders.</p>
            </div>
            {/* Stat row — muted teal + muted stone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl p-5 bg-teal-900/70 border border-teal-600/35">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-300 mb-2">Gross Fuel / Month</p>
                <p className="text-2xl font-semibold text-white tabular-nums">${currentTotalMonthlyFuel.toLocaleString()}</p>
              </div>
              <div className="rounded-xl p-5 bg-stone-700/80 border border-stone-500/40">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-stone-300 mb-2">Estimated Leakage / Month</p>
                <p className="text-2xl font-semibold text-amber-200 tabular-nums">${estimatedMonthlyLoss.toLocaleString()}</p>
              </div>
            </div>
            {/* Annual drain — purple */}
            <div className="rounded-xl p-5 space-y-2 border border-purple-400/25 bg-purple-900/50">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-purple-300">Hidden Annual Drain</p>
              <p className="text-4xl md:text-5xl font-serif font-semibold text-white tabular-nums">
                ${annualLoss.toLocaleString()}
              </p>
              <p className="text-xs text-slate-400 font-medium">USD per year lost to fuel siphoning</p>
            </div>
            {/* Savings — image bg with overlay */}
            <div className="relative rounded-xl overflow-hidden">
              <img src={tracking5} alt="" aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-teal-950/85" />
              <div className="relative z-10 p-6 space-y-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-300">Projected Telsite Recovery</p>
                <p className="text-4xl md:text-5xl font-serif font-semibold text-white tabular-nums">
                  ${telsiteAnnualSavings.toLocaleString()}
                </p>
                <p className="text-xs text-teal-300 font-medium">saved per year</p>
                <p className="text-xs text-slate-400 pt-2 leading-relaxed border-t border-white/10 mt-2">
                  * Based on a 75% recovery rate via Telsite's real-time alert and sensor technology.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="cursor-pointer w-full py-3.5 bg-[#D8C7A9] hover:bg-white text-amber-950 text-sm font-bold uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-md mt-auto">
              Request a Fleet Consultation →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
