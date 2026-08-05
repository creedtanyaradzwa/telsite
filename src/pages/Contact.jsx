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
    <div className="w-full bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900 text-black min-h-screen py-10 md:py-16 px-4 md:px-10 relative overflow-hidden font-sans antialiased">
      
      {/* =========================================================================
          ANIMATED GLOWING & MOVING AMBIENT LIGHT ORBS
         ========================================================================= */}
      <div className="absolute top-[-5%] right-[-5%] w-[450px] md:w-[750px] h-[450px] md:h-[750px] rounded-full bg-[#D8C7A9]/20 blur-[130px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute top-[35%] left-[-8%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-fuchsia-400/20 blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[-5%] left-[10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-purple-300/15 blur-[150px] pointer-events-none animate-pulse duration-[9000ms]" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12 pt-24 lg:pt-28">
        
        {/* Header Summary */}
        <div className="text-center space-y-4">
          <span className="inline-block bg-[#D8C7A9] border border-white/90 text-amber-950 font-mono text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2.5 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.4)] backdrop-blur-md">
            ⚡ Telematics Dispatch Terminal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#F3EAD8] drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            REQUEST OUR SERVICES
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-amber-950 font-black max-w-2xl mx-auto leading-relaxed bg-[#D8C7A9]/95 p-6 rounded-3xl border border-white/90 backdrop-blur-3xl shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_20px_40px_rgba(0,0,0,0.5)]">
            Configure your fleet layout variables below. Once compiled, choose your preferred communication channel to auto-fill your order onto our desks.
          </p>
        </div>

        {/* =========================================================================
            PRIMARY INTERACTIVE FORM LAYOUT (4D KHAKI GLASS CARD)
           ========================================================================= */}
        <form className="bg-[#D8C7A9]/95 border border-white/90 text-amber-950 rounded-3xl p-7 md:p-12 shadow-[inset_0_3px_6px_rgba(255,255,255,1),0_25px_50px_rgba(0,0,0,0.5)] space-y-9 backdrop-blur-3xl">
          
          {/* Section 1: Customer Logistics Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs md:text-sm font-mono font-black text-amber-950 uppercase tracking-wider mb-2">
                Company / Authorized Full Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g., Alko Logistics Zimbabwe"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full text-sm md:text-base font-black p-4 bg-amber-950/10 border border-white/80 text-amber-950 placeholder-amber-950/50 rounded-2xl focus:outline-none focus:border-amber-950 focus:ring-2 focus:ring-amber-950/20 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-mono font-black text-amber-950 uppercase tracking-wider mb-2">
                Active WhatsApp Number
              </label>
              <input 
                type="tel" 
                required
                placeholder="e.g., +263 77 XXXXXX"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                className="w-full text-sm md:text-base font-black p-4 bg-amber-950/10 border border-white/80 text-amber-950 placeholder-amber-950/50 rounded-2xl focus:outline-none focus:border-amber-950 focus:ring-2 focus:ring-amber-950/20 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs md:text-sm font-mono font-black text-amber-950 uppercase tracking-wider mb-2">
                Corporate Email Address
              </label>
              <input 
                type="email" 
                required
                placeholder="operations@yourcompany.co.zw"
                value={formData.emailAddress}
                onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
                className="w-full text-sm md:text-base font-black p-4 bg-amber-950/10 border border-white/80 text-amber-950 placeholder-amber-950/50 rounded-2xl focus:outline-none focus:border-amber-950 focus:ring-2 focus:ring-amber-950/20 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>

          <hr className="border-amber-950/20" />

          {/* Section 2: Fleet Size Matrix Selector */}
          <div>
            <label className="block text-xs md:text-sm font-mono font-black text-amber-950 uppercase tracking-wider mb-3">
              Total Target Operational Fleet Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['1-5 Vehicles', '6-20 Vehicles', '21-50 Vehicles', '51+ Enterprise Wheels'].map((option) => (
                <div 
                  key={option}
                  onClick={() => setFormData({...formData, fleetSize: option})}
                  className={`cursor-pointer border p-4 rounded-2xl text-center font-mono text-xs sm:text-sm font-black transition-all select-none duration-300
                    ${formData.fleetSize === option 
                      ? 'bg-amber-950 border-white text-[#F3EAD8] shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.4)] -translate-y-0.5' 
                      : 'bg-amber-950/10 border-white/80 text-amber-950 hover:bg-amber-950/20'
                    }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-amber-950/20" />

          {/* Section 3: Multi-Select System Modules */}
          <div>
            <label className="block text-xs md:text-sm font-mono font-black text-amber-950 uppercase tracking-wider mb-4">
              Select Target Hardware / Software Payload Ecosystems
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {catalogList.map((product) => {
                const isSelected = formData.selectedProducts.includes(product.title);
                return (
                  <div 
                    key={product.title}
                    onClick={() => handleProductToggle(product.title)}
                    className={`cursor-pointer border p-4 sm:p-5 rounded-2xl flex items-center justify-between text-left transition-all duration-300 select-none
                      ${isSelected 
                        ? 'bg-amber-950/20 border-amber-950 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] -translate-y-0.5' 
                        : 'bg-amber-950/10 border-white/80 hover:bg-amber-950/15 text-amber-950'
                      }`}
                  >
                    <div>
                      <span className="block text-sm font-black text-amber-950">{product.title}</span>
                      <span className="block text-xs text-amber-900 font-mono font-bold mt-0.5">{product.tagline}</span>
                    </div>
                    <div className={`h-6 w-6 rounded-lg border-2 flex items-center justify-center text-xs text-[#F3EAD8] font-black transition-all duration-300
                      ${isSelected ? 'bg-amber-950 border-amber-950 shadow-sm' : 'bg-transparent border-amber-950/40'}`}>
                      {isSelected && "✓"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr className="border-amber-950/20" />

          {/* Section 4: Custom Notes */}
          <div>
            <label className="block text-xs md:text-sm font-mono font-black text-amber-950 uppercase tracking-wider mb-2">
              Special Deployment Instructions / Custom Requests
            </label>
            <textarea 
              rows="3" 
              placeholder="List any unique fuel tank shapes, custom tracking rules, or specific cross-border destination routing challenges..."
              value={formData.customNotes}
              onChange={(e) => setFormData({...formData, customNotes: e.target.value})}
              className="w-full text-sm md:text-base font-black p-4 bg-amber-950/10 border border-white/80 text-amber-950 placeholder-amber-950/50 rounded-2xl focus:outline-none focus:border-amber-950 focus:ring-2 focus:ring-amber-950/20 transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
            ></textarea>
          </div>

          {/* Section 5: Dual Auto-Fill Dispatches */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* WhatsApp Deployment Button */}
            <button
              type="button"
              onClick={dispatchToWhatsApp}
              className="cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white font-mono text-sm font-black uppercase tracking-wider py-4.5 px-5 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_12px_24px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              💬 Request via WhatsApp
            </button>

            {/* Email Deployment Button */}
            <button
              type="button"
              onClick={dispatchToGmail}
              className="cursor-pointer bg-amber-950 hover:bg-amber-900 text-[#F3EAD8] font-mono text-sm font-black uppercase tracking-wider py-4.5 px-5 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_12px_24px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              ✉️ Request via Email
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}