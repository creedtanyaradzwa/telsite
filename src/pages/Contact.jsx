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
    <div className="w-full bg-transparent text-slate-100 min-h-screen py-16 px-4 md:px-6 relative overflow-hidden">
      
      {/* =========================================================================
          DYNAMIC THEME BACKGROUND ACCENTS & GLOWS
         ========================================================================= */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-purple-600/10 blur-[80px] md:blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[5%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-violet-500/10 blur-[70px] md:blur-[100px] pointer-events-none" />

      {/* GLOBAL DARK OVERLAY FOR GLASS EFFECT CONSISTENCY */}
      <div className="absolute inset-0 bg-[#0E0B18]/60 backdrop-blur-[1px] z-0 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-8">
        
        {/* Header Summary */}
        <div className="text-center space-y-2">
          <span className="inline-block bg-[#161226] border border-purple-500/30 text-purple-300 font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            ⚡ Telematics Dispatch Terminal
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            REQUEST OUR SERVICES
          </h1>
          <p className="text-xs text-slate-300 font-medium max-w-md mx-auto leading-relaxed">
            Configure your fleet layout variables below. Once compiled, choose your preferred communication channel to auto-fill your order onto our desks.
          </p>
        </div>

        {/* Primary Interactive Form Layout (PREMIUM GLASS SHEET) */}
        <form className="bg-white/[0.02] border border-white/[0.12] backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
          
          {/* Section 1: Customer Logistics Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono font-black text-purple-300 uppercase tracking-wider mb-1.5">
                Company / Authorized Full Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g., Alko Logistics Zimbabwe"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full text-xs font-medium p-3 bg-slate-950/40 border border-white/[0.08] text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono font-black text-purple-300 uppercase tracking-wider mb-1.5">
                Active WhatsApp Number
              </label>
              <input 
                type="tel" 
                required
                placeholder="e.g., +263 77 XXXXXX"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                className="w-full text-xs font-medium p-3 bg-slate-950/40 border border-white/[0.08] text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[10px] font-mono font-black text-purple-300 uppercase tracking-wider mb-1.5">
                Corporate Email Address
              </label>
              <input 
                type="email" 
                required
                placeholder="operations@yourcompany.co.zw"
                value={formData.emailAddress}
                onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
                className="w-full text-xs font-medium p-3 bg-slate-950/40 border border-white/[0.08] text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
              />
            </div>
          </div>

          <hr className="border-white/[0.08]" />

          {/* Section 2: Fleet Size Matrix Selector */}
          <div>
            <label className="block text-[10px] font-mono font-black text-purple-300 uppercase tracking-wider mb-2.5">
              Total Target Operational Fleet Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['1-5 Vehicles', '6-20 Vehicles', '21-50 Vehicles', '51+ Enterprise Wheels'].map((option) => (
                <div 
                  key={option}
                  onClick={() => setFormData({...formData, fleetSize: option})}
                  className={`cursor-pointer border p-3 rounded-xl text-center font-mono text-[10px] sm:text-[11px] font-bold transition-all select-none duration-300
                    ${formData.fleetSize === option 
                      ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/10' 
                      : 'bg-slate-950/30 border-white/[0.06] text-slate-400 hover:text-white hover:bg-slate-950/60 hover:border-white/[0.15]'
                    }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-white/[0.08]" />

          {/* Section 3: Multi-Select System Modules */}
          <div>
            <label className="block text-[10px] font-mono font-black text-purple-300 uppercase tracking-wider mb-2.5">
              Select Target Hardware / Software Payload Ecosystems
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {catalogList.map((product) => {
                const isSelected = formData.selectedProducts.includes(product.title);
                return (
                  <div 
                    key={product.title}
                    onClick={() => handleProductToggle(product.title)}
                    className={`cursor-pointer border p-3.5 rounded-xl flex items-center justify-between text-left transition-all duration-300 select-none
                      ${isSelected 
                        ? 'bg-[#120B2E]/50 border-purple-500/50 ring-1 ring-purple-500/20 shadow-md shadow-purple-500/5' 
                        : 'bg-slate-950/20 border-white/[0.06] hover:border-white/[0.15] hover:bg-slate-950/40'
                      }`}
                  >
                    <div>
                      <span className="block text-xs font-black text-white">{product.title}</span>
                      <span className="block text-[10px] text-slate-400 font-medium mt-0.5">{product.tagline}</span>
                    </div>
                    <div className={`h-4.5 w-4.5 rounded border flex items-center justify-center text-[10px] text-white font-black transition-all duration-300
                      ${isSelected ? 'bg-purple-600 border-purple-400' : 'bg-slate-950/40 border-white/[0.12]'}`}>
                      {isSelected && "✓"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr className="border-white/[0.08]" />

          {/* Section 4: Custom Notes */}
          <div>
            <label className="block text-[10px] font-mono font-black text-purple-300 uppercase tracking-wider mb-1.5">
              Special Deployment Instructions / Custom Requests
            </label>
            <textarea 
              rows="3" 
              placeholder="List any unique fuel tank shapes, custom tracking rules, or specific cross-border destination routing challenges..."
              value={formData.customNotes}
              onChange={(e) => setFormData({...formData, customNotes: e.target.value})}
              className="w-full text-xs font-medium p-3 bg-slate-950/40 border border-white/[0.08] text-white placeholder-slate-500 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition-all duration-300"
            ></textarea>
          </div>

          {/* Section 5: The Dual Auto-Fill Dispatches */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* WhatsApp Deployment Button */}
            <button
              type="button"
              onClick={dispatchToWhatsApp}
              className="cursor-pointer bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-500/30 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-500/5 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              💬 Request via WhatsApp
            </button>

            {/* Email Deployment Button */}
            <button
              type="button"
              onClick={dispatchToGmail}
              className="cursor-pointer bg-white/[0.05] hover:bg-purple-600 border border-white/[0.12] hover:border-purple-400 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              ✉️ Request via Email
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}