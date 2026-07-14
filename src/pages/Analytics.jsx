import { useState, useEffect } from 'react';

export default function Analytics() {
  // Mock continuous live data stream
  const [vehicles, setVehicles] = useState([
    { id: 'HAE-4421', driver: 'T. Moyo', route: 'Harare - Bulawayo', speed: 78, status: 'nominal', fuel: 84 },
    { id: 'HCK-9011', driver: 'G. Chida', route: 'Mutare - Beira', speed: 82, status: 'warning', fuel: 62 },
    { id: 'HBM-3302', driver: 'S. Sibanda', route: 'Chirundu - Lusaka', speed: 55, status: 'nominal', fuel: 91 },
    { id: 'HDW-1156', driver: 'F. Katsande', route: 'Harare - Masvingo', speed: 94, status: 'critical', fuel: 45 },
  ]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prevVehicles =>
        prevVehicles.map(v => {
          const speedFlux = Math.floor(Math.random() * 7) - 3;
          const newSpeed = Math.max(30, Math.min(110, v.speed + speedFlux));
          
          let newStatus = 'nominal';
          if (newSpeed > 90) newStatus = 'critical';
          else if (newSpeed > 80) newStatus = 'warning';

          return {
            ...v,
            speed: newSpeed,
            fuel: Math.max(5, v.fuel - (Math.random() > 0.7 ? 1 : 0)),
            status: newStatus
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen py-16 px-6 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* NETWORK HEADER ROW */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-theme-purple font-mono text-xs uppercase tracking-widest block mb-2 font-black">
              ✦ Live Network Telemetry
            </span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Active Fleet Control Room
            </h1>
            <p className="text-slate-600 text-xs md:text-sm mt-1 max-w-xl leading-relaxed">
              Real-time asset telemetry feeds and speed limiter verification points. Data streaming updates executing on sub-30 second polling frequencies.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex items-center gap-3 self-start md:self-auto shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-lime"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-slate-700 uppercase">Live Pipeline Connected</span>
          </div>
        </div>

        {/* SCOREBOARD OVERVIEW METRICS BLOCK */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-slate-200 p-4 rounded-xl font-mono shadow-xs">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Monitored Assets</p>
            <p className="text-2xl font-black text-slate-900 mt-1">4 Active</p>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl font-mono shadow-xs">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">S.I. 118 Breaches</p>
            <p className="text-2xl font-black text-theme-orange mt-1">
              {vehicles.filter(v => v.speed > 80).length}
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl font-mono shadow-xs">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Avg Fleet Speed</p>
            <p className="text-2xl font-black text-theme-blue mt-1">
              {Math.round(vehicles.reduce((acc, v) => acc + v.speed, 0) / vehicles.length)} km/h
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-xl font-mono shadow-xs">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Siphoning Incidents</p>
            <p className="text-2xl font-black text-theme-lime mt-1">0 Defended</p>
          </div>
        </div>

        {/* LEDGER DATA TABLE SHEET */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 font-mono text-xs font-bold text-slate-500 tracking-wider uppercase">
            Active Fleet Registry Stream
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-mono text-slate-400 uppercase tracking-wider bg-slate-50/50">
                  <th className="p-4">Reg Number</th>
                  <th className="p-4">Operator / Driver</th>
                  <th className="p-4">Transit Corridor</th>
                  <th className="p-4">Current Speed</th>
                  <th className="p-4">Fuel Volume</th>
                  <th className="p-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-mono text-slate-700">
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-black text-slate-900 tracking-wide">{vehicle.id}</td>
                    <td className="p-4 font-sans font-medium text-slate-700">{vehicle.driver}</td>
                    <td className="p-4 text-slate-500">{vehicle.route}</td>
                    <td className="p-4">
                      <span className={`font-black text-sm ${
                        vehicle.speed > 80 ? 'text-theme-orange' : 'text-slate-900'
                      }`}>
                        {vehicle.speed}
                      </span>
                      <span className="text-[10px] text-slate-400 ml-1">km/h</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200/60">
                          <div 
                            className="bg-theme-blue h-full transition-all duration-500" 
                            style={{ width: `${vehicle.fuel}%` }}
                          ></div>
                        </div>
                        <span className="text-slate-500 font-bold text-[10px]">{vehicle.fuel}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                        vehicle.status === 'critical' ? 'bg-theme-orange/10 text-theme-orange border border-theme-orange/20' :
                        vehicle.status === 'warning' ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' :
                        'bg-theme-lime/10 text-theme-lime border border-theme-lime/20'
                      }`}>
                        {vehicle.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SYSTEM REGULATORY ASSURANCE REGISTRY */}
        <div className="mt-6 p-4 bg-slate-100 border border-slate-200 rounded-xl flex items-center gap-4 text-[11px] text-slate-500 leading-relaxed font-mono">
          <span className="text-base shrink-0">📋</span>
          <p>
            <strong>Regulatory Standard Compliance:</strong> Transit speed attributes scaling past the 80 km/h baseline automatically cache structural telemetry timestamps matching reporting guidelines defined under Statutory Instrument 118.
          </p>
        </div>

      </div>
    </div>
  );
}