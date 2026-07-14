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
    const body = encodeURIComponent(generateMessagePayload().replace(/\*/g, '')); // Strips markdown asterisks for email layout cleaner view
    window.location.href = `mailto:contact@telsite-tracking.co.zw?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900 min-h-screen py-16 px-6 relative overflow-hidden">
      {/* Background Tech Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-theme-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-theme-blue/5 blur-[90px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-8">
        
        {/* Header Summary */}
        <div className="text-center space-y-2">
          <span className="inline-block bg-slate-900 text-white font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
            ⚡ Telematics Dispatch Terminal
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
            REQUEST OUR SERVICES
          </h1>
          <p className="text-xs text-slate-500 font-medium max-w-md mx-auto">
            Configure your fleet layout variables below. Once compiled, choose your preferred communication channel to auto-fill your order onto our desks.
          </p>
        </div>

        {/* Primary Interactive Form Layout */}
        <form className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          
          {/* Section 1: Customer Logistics Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider mb-1">Company / Authorized Full Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g., Alko Logistics Zimbabwe"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full text-xs font-medium p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-theme-purple transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider mb-1">Active WhatsApp Number</label>
              <input 
                type="tel" 
                required
                placeholder="e.g., +263 77 XXXXXX"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})}
                className="w-full text-xs font-medium p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-theme-purple transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider mb-1">Corporate Email Address</label>
              <input 
                type="email" 
                required
                placeholder="operations@yourcompany.co.zw"
                value={formData.emailAddress}
                onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
                className="w-full text-xs font-medium p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-theme-purple transition-colors"
              />
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 2: Fleet Size Matrix Selector */}
          <div>
            <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider mb-2">Total Target Operational Fleet Size</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['1-5 Vehicles', '6-20 Vehicles', '21-50 Vehicles', '51+ Enterprise Wheels'].map((option) => (
                <div 
                  key={option}
                  onClick={() => setFormData({...formData, fleetSize: option})}
                  className={`cursor-pointer border p-3 rounded-xl text-center font-mono text-[11px] font-bold transition-all select-none
                    ${formData.fleetSize === option 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xs' 
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 3: Multi-Select System Modules */}
          <div>
            <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider mb-2">Select Target Hardware / Software Payload Ecosystems</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {catalogList.map((product) => {
                const isSelected = formData.selectedProducts.includes(product.title);
                return (
                  <div 
                    key={product.title}
                    onClick={() => handleProductToggle(product.title)}
                    className={`cursor-pointer border p-3 rounded-xl flex items-center justify-between text-left transition-all select-none
                      ${isSelected 
                        ? 'bg-theme-purple/5 border-theme-purple/40 ring-1 ring-theme-purple/10' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                  >
                    <div>
                      <span className="block text-xs font-black text-slate-900">{product.title}</span>
                      <span className="block text-[10px] text-slate-400 font-medium">{product.tagline}</span>
                    </div>
                    <div className={`h-4 w-4 rounded border flex items-center justify-center text-[10px] text-white font-bold
                      ${isSelected ? 'bg-theme-purple border-theme-purple' : 'bg-slate-50 border-slate-300'}`}>
                      {isSelected && "✓"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 4: Custom Notes */}
          <div>
            <label className="block text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider mb-1">Special Deployment Instructions / Custom Requests</label>
            <textarea 
              rows="3" 
              placeholder="List any unique fuel tank shapes, custom tracking rules, or specific cross-border destination routing challenges..."
              value={formData.customNotes}
              onChange={(e) => setFormData({...formData, customNotes: e.target.value})}
              className="w-full text-xs font-medium p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-theme-purple transition-colors"
            ></textarea>
          </div>

          {/* Section 5: The Dual Auto-Fill Dispatches */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* WhatsApp Deployment Button */}
            <button
              type="button"
              onClick={dispatchToWhatsApp}
              className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              💬 Request via WhatsApp
            </button>

            {/* Email Deployment Button */}
            <button
              type="button"
              onClick={dispatchToGmail}
              className="cursor-pointer bg-slate-900 hover:bg-theme-purple text-white font-mono text-xs font-black uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              ✉️ Request via Email
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}