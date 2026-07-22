import { useState } from 'react';
import { productCatalog } from '../config/products';

export default function Contact() {
  const catalogList = productCatalog && typeof productCatalog === 'object'
    ? (productCatalog.productCatalog ? Object.values(productCatalog.productCatalog) : Object.values(productCatalog))
    : [];

  const [formData, setFormData] = useState({
    companyName: '',
    whatsappNumber: '',
    emailAddress: '',
    fleetSize: '1-5 Vehicles', 
    selectedProducts: [],
    customNotes: ''
  });

  const handleProductToggle = (productTitle) => {
    setFormData(prev => {
      const alreadySelected = prev.selectedProducts.includes(productTitle);
      const updatedProducts = alreadySelected
        ? prev.selectedProducts.filter(title => title !== productTitle)
        : [...prev.selectedProducts, productTitle];
      return { ...prev, selectedProducts: updatedProducts };
    });
  };

  const generateMessagePayload = () => {
    const productsList = formData.selectedProducts.length > 0 
      ? formData.selectedProducts.join(', ') 
      : 'Not Specified / General Inquiry';

    return `*TELSITE SYSTEM DEPLOYMENT REQUEST*
--------------------------------------------
🏢 *Company/Name:* ${formData.companyName || 'Not Provided'}
📱 *WhatsApp:* ${formData.whatsappNumber || 'Not Provided'}
✉️ *Email:* ${formData.emailAddress || 'Not Provided'}
🚚 *Fleet Size:* ${formData.fleetSize}
📡 *Target Systems:* ${productsList}
📝 *Custom Requirements:* ${formData.customNotes || 'None'}
--------------------------------------------
_Generated via Telsite Tracking Ecosystem Portal_`;
  };

  const dispatchToWhatsApp = (e) => {
    e.preventDefault();
    const textPayload = encodeURIComponent(generateMessagePayload());
    const whatsappUrl = `https://wa.me/263718339968?text=${textPayload}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const dispatchToGmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`System Deployment Request - ${formData.companyName || 'Fleet Operations'}`);
    const body = encodeURIComponent(generateMessagePayload().replace(/\*/g, '')); // Strips markdown asterisks for clean email layout
    window.location.href = `mailto:contact@telsite-tracking.co.zw?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full bg-gradient-to-b from-purple-950 via-[#2f083d] to-purple-950 text-slate-100 min-h-screen py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Telsite Ambient Glow Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-[#b015db]/20 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[5%] right-[-5%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-fuchsia-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-[#ad18aa]/20 blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-10">
        
        {/* Header Summary */}
        <div className="text-center space-y-3">
          <span className="inline-block bg-purple-900/50 border border-purple-300/40 text-purple-200 font-mono text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
            ⚡ Telematics Dispatch Terminal
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-fuchsia-100 to-indigo-100">
            REQUEST OUR SERVICES
          </h1>
          <p className="text-xs md:text-sm text-slate-200 font-normal max-w-lg mx-auto leading-relaxed">
            Configure your fleet layout variables below. Once compiled, choose your preferred communication channel to auto-fill your order onto our desks.
          </p>
        </div>

        {/* Primary Interactive Form Layout (Glassmorphic Glass Sheet) */}
        <form className="bg-purple-900/30 border border-purple-300/40 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl shadow-purple-900/30 space-y-8">
          
          {/* Section 1: Customer Logistics Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] font-mono font-black text-purple-200 uppercase tracking-widest mb-2">
                Company / Authorized Full Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g., Alko Logistics Zimbabwe"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full text-xs font-medium p-3.5 bg-purple-950/60 border border-purple-300/30 text-white placeholder-purple-300/40 rounded-xl focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/40 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono font-black text-purple-200 uppercase tracking-widest mb-2">
                Active WhatsApp Number
              </label>
              <input 
                type="tel" 
                required
                placeholder="e.g., +263 77 XXXXXX"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                className="w-full text-xs font-medium p-3.5 bg-purple-950/60 border border-purple-300/30 text-white placeholder-purple-300/40 rounded-xl focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/40 transition-all duration-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[10px] font-mono font-black text-purple-200 uppercase tracking-widest mb-2">
                Corporate Email Address
              </label>
              <input 
                type="email" 
                required
                placeholder="operations@yourcompany.co.zw"
                value={formData.emailAddress}
                onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
                className="w-full text-xs font-medium p-3.5 bg-purple-950/60 border border-purple-300/30 text-white placeholder-purple-300/40 rounded-xl focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/40 transition-all duration-300"
              />
            </div>
          </div>

          <hr className="border-purple-300/20" />

          {/* Section 2: Fleet Size Matrix Selector */}
          <div>
            <label className="block text-[10px] font-mono font-black text-purple-200 uppercase tracking-widest mb-3">
              Total Target Operational Fleet Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['1-5 Vehicles', '6-20 Vehicles', '21-50 Vehicles', '51+ Enterprise Wheels'].map((option) => (
                <div 
                  key={option}
                  onClick={() => setFormData({...formData, fleetSize: option})}
                  className={`cursor-pointer border p-3.5 rounded-xl text-center font-mono text-[10px] sm:text-[11px] font-black transition-all select-none duration-300
                    ${formData.fleetSize === option 
                      ? 'bg-purple-700/80 border-white text-white shadow-[0_0_20px_rgba(232,121,249,0.35)] -translate-y-0.5' 
                      : 'bg-purple-950/40 border-purple-300/30 text-purple-200/80 hover:text-white hover:bg-purple-800/40 hover:border-purple-300/60'
                    }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-purple-300/20" />

          {/* Section 3: Multi-Select System Modules */}
          <div>
            <label className="block text-[10px] font-mono font-black text-purple-200 uppercase tracking-widest mb-3">
              Select Target Hardware / Software Payload Ecosystems
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {catalogList.map((product) => {
                const isSelected = formData.selectedProducts.includes(product.title);
                return (
                  <div 
                    key={product.title}
                    onClick={() => handleProductToggle(product.title)}
                    className={`cursor-pointer border p-4 rounded-2xl flex items-center justify-between text-left transition-all duration-300 select-none
                      ${isSelected 
                        ? 'bg-purple-800/60 border-purple-300 text-white shadow-[0_0_25px_rgba(232,121,249,0.25)] -translate-y-0.5' 
                        : 'bg-purple-950/40 border-purple-300/30 hover:border-purple-300/60 hover:bg-purple-800/30 text-slate-300'
                      }`}
                  >
                    <div>
                      <span className="block text-xs font-black text-white">{product.title}</span>
                      <span className="block text-[10px] text-purple-200/80 font-mono font-medium mt-0.5">{product.tagline}</span>
                    </div>
                    <div className={`h-5 w-5 rounded-md border flex items-center justify-center text-[11px] text-white font-black transition-all duration-300
                      ${isSelected ? 'bg-fuchsia-600 border-white shadow-sm' : 'bg-purple-950/60 border-purple-300/40'}`}>
                      {isSelected && "✓"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr className="border-purple-300/20" />

          {/* Section 4: Custom Notes */}
          <div>
            <label className="block text-[10px] font-mono font-black text-purple-200 uppercase tracking-widest mb-2">
              Special Deployment Instructions / Custom Requests
            </label>
            <textarea 
              rows="3" 
              placeholder="List any unique fuel tank shapes, custom tracking rules, or specific cross-border destination routing challenges..."
              value={formData.customNotes}
              onChange={(e) => setFormData({...formData, customNotes: e.target.value})}
              className="w-full text-xs font-medium p-3.5 bg-purple-950/60 border border-purple-300/30 text-white placeholder-purple-300/40 rounded-xl focus:outline-none focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400/40 transition-all duration-300"
            ></textarea>
          </div>

          {/* Section 5: Dual Auto-Fill Dispatches */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* WhatsApp Deployment Button */}
            <button
              type="button"
              onClick={dispatchToWhatsApp}
              className="cursor-pointer bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 text-white font-mono text-xs font-black uppercase tracking-wider py-4 px-4 rounded-xl shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              💬 Request via WhatsApp
            </button>

            {/* Email Deployment Button */}
            <button
              type="button"
              onClick={dispatchToGmail}
              className="cursor-pointer bg-purple-800/60 hover:bg-purple-700/80 border border-purple-300/40 hover:border-white text-white font-mono text-xs font-black uppercase tracking-wider py-4 px-4 rounded-xl shadow-lg shadow-purple-950/50 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(232,121,249,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              ✉️ Request via Email
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}