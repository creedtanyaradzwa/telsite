import { useState } from 'react';
import { productCatalog } from '../config/products';
import fleet1    from '../assets/fleet1 .webp';
import bikefleet from '../assets/bikefleet.webp';

export default function Contact() {
  const catalogList = productCatalog && typeof productCatalog === 'object'
    ? (productCatalog.productCatalog
        ? Object.values(productCatalog.productCatalog)
        : Object.values(productCatalog))
    : [];

  const [formData, setFormData] = useState({
    companyName: '', whatsappNumber: '', emailAddress: '',
    fleetSize: '1–5 Vehicles', selectedProducts: [], customNotes: '',
  });

  const handleProductToggle = (title) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(title)
        ? prev.selectedProducts.filter(t => t !== title)
        : [...prev.selectedProducts, title],
    }));
  };

  const generateMessagePayload = () => {
    const productsList = formData.selectedProducts.length > 0
      ? formData.selectedProducts.join(', ') : 'Not Specified / General Inquiry';
    return `*TELSITE SYSTEM DEPLOYMENT REQUEST*\n--------------------------------------------\n🏢 *Company/Name:* ${formData.companyName || 'Not Provided'}\n📱 *WhatsApp:* ${formData.whatsappNumber || 'Not Provided'}\n✉️ *Email:* ${formData.emailAddress || 'Not Provided'}\n🚚 *Fleet Size:* ${formData.fleetSize}\n📡 *Target Systems:* ${productsList}\n📝 *Custom Requirements:* ${formData.customNotes || 'None'}\n--------------------------------------------\n_Generated via Telsite Tracking Ecosystem Portal_`;
  };

  const dispatchToWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/263718339968?text=${encodeURIComponent(generateMessagePayload())}`, '_blank', 'noopener,noreferrer');
  };
  const dispatchToGmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`System Deployment Request — ${formData.companyName || 'Fleet Operations'}`);
    const body    = encodeURIComponent(generateMessagePayload().replace(/\*/g, ''));
    window.location.href = `mailto:contact@telsite-tracking.co.zw?subject=${subject}&body=${body}`;
  };

  const inputBase = "w-full text-sm px-4 py-3 rounded-lg border text-white placeholder-slate-500 focus:outline-none focus:border-[#D8C7A9]/60 focus:ring-1 focus:ring-[#D8C7A9]/20 transition-colors duration-200";

  return (
    <div className="w-full min-h-screen font-sans bg-purple-950">

      {/* ── Header — full vivid image, text dominates ── */}
      <div className="relative pt-28 lg:pt-32 pb-20 px-6 sm:px-10 md:px-16 border-b border-purple-400/20 overflow-hidden min-h-[340px] flex items-end">
        <img src={fleet1} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy" decoding="async" />
        {/* Bottom-up gradient — image vivid at top, text dominant at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15" />
        <div className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-5 pb-4">
          <span className="inline-block border border-[#D8C7A9] text-[#D8C7A9] text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
                style={{ textShadow: '0 1px 6px rgba(0,0,0,1)' }}>
            Telematics Deployment Request
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white leading-tight"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.15), 0 2px 16px rgba(0,0,0,1)' }}>
            Request Our Services
          </h1>
          <p className="text-[#F3EAD8] text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto"
             style={{ textShadow: '0 1px 10px rgba(0,0,0,1)' }}>
            Configure your fleet variables below, then dispatch your request directly via WhatsApp or email. Our team will respond within 24 hours.
          </p>
        </div>
      </div>

      {/* ── Form ── */}
      <div className="py-14 md:py-20 px-6 sm:px-10 md:px-16 bg-purple-900/30">
        <form className="max-w-3xl mx-auto space-y-8">

          {/* 01 Contact — muted slate */}
          <fieldset className="rounded-xl p-7 bg-slate-700/80 border border-slate-500/40 backdrop-blur-sm space-y-6">
            <legend className="text-white font-black text-sm px-1 pb-3 border-b border-white/15 w-full block mb-3 uppercase tracking-widest">
              01 — Contact Details
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: 'Company / Full Name', type: 'text', ph: 'e.g. Alko Logistics Zimbabwe', key: 'companyName'    },
                { label: 'WhatsApp Number',      type: 'tel',  ph: '+263 77 XXXXXX',               key: 'whatsappNumber' },
              ].map(({ label, type, ph, key }) => (
                <div key={key}>
                  <label className="block text-xs font-bold text-[#D8C7A9] uppercase tracking-widest mb-2">{label}</label>
                  <input type={type} required placeholder={ph}
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className={`${inputBase} border-slate-500/40 bg-slate-800/60`} />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#D8C7A9] uppercase tracking-widest mb-2">Corporate Email Address</label>
                <input type="email" required placeholder="operations@yourcompany.co.zw"
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className={`${inputBase} border-slate-500/40 bg-slate-800/60`} />
              </div>
            </div>
          </fieldset>

          {/* 02 Fleet size — muted teal */}
          <fieldset className="rounded-xl p-7 bg-teal-900/70 border border-teal-600/35 backdrop-blur-sm space-y-4">
            <legend className="text-white font-black text-sm px-1 pb-3 border-b border-white/15 w-full block mb-3 uppercase tracking-widest">
              02 — Fleet Size
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {['1–5 Vehicles', '6–20 Vehicles', '21–50 Vehicles', '51+ Enterprise'].map(opt => (
                <button key={opt} type="button"
                  onClick={() => setFormData({ ...formData, fleetSize: opt })}
                  className={`py-3 px-3 rounded-lg text-xs font-black uppercase tracking-wider border transition-all duration-200 cursor-pointer text-center
                    ${formData.fleetSize === opt
                      ? 'bg-[#D8C7A9] border-[#D8C7A9] text-amber-950 shadow-md'
                      : 'bg-white/8 border-white/20 text-[#D8C7A9] hover:border-[#D8C7A9]/60 hover:text-white'}`}>
                  {opt}
                </button>
              ))}
            </div>
          </fieldset>

          {/* 03 Products — vivid image bg, text dominant */}
          <fieldset className="relative rounded-xl overflow-hidden">
            {/* Full vivid image */}
            <img src={bikefleet} alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy" decoding="async" />
            {/* Bottom-up gradient — same treatment as feature cards */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/25" />
            <div className="relative z-10 p-7 space-y-4">
              <legend className="block w-full pb-3 mb-3 border-b border-white/20 uppercase tracking-widest">
                <span className="text-white font-black text-sm"
                      style={{ textShadow: '0 2px 8px rgba(0,0,0,1)' }}>
                  03 — Select Products / Services
                </span>
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {catalogList.map(product => {
                  const selected = formData.selectedProducts.includes(product.title);
                  return (
                    <div key={product.title} onClick={() => handleProductToggle(product.title)}
                      className={`cursor-pointer flex items-center justify-between p-4 rounded-lg border transition-all duration-200 select-none backdrop-blur-sm
                        ${selected
                          ? 'bg-[#D8C7A9]/25 border-[#D8C7A9]/70'
                          : 'bg-black/40 border-white/20 hover:border-[#D8C7A9]/50 hover:bg-black/50'}`}>
                      <div>
                        <span className="block text-sm font-black text-white"
                              style={{ textShadow: '0 1px 6px rgba(0,0,0,1)' }}>
                          {product.title}
                        </span>
                        <span className="block text-xs text-[#D8C7A9] font-semibold mt-0.5"
                              style={{ textShadow: '0 1px 4px rgba(0,0,0,1)' }}>
                          {product.tagline}
                        </span>
                      </div>
                      <div className={`h-5 w-5 rounded border-2 flex items-center justify-center text-[10px] font-black shrink-0 ml-3 transition-colors duration-200
                        ${selected ? 'bg-[#D8C7A9] border-[#D8C7A9] text-amber-950' : 'bg-transparent border-white/40'}`}>
                        {selected && '✓'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </fieldset>

          {/* 04 Notes — indigo muted */}
          <fieldset className="rounded-xl p-7 border border-indigo-500/30 bg-indigo-900/50 space-y-3">
            <legend className="text-white font-black text-sm px-1 pb-3 border-b border-white/15 w-full block mb-3 uppercase tracking-widest">
              04 — Special Instructions (Optional)
            </legend>
            <textarea rows="4"
              placeholder="List any unique requirements — custom tank shapes, cross-border routes, special deployment constraints…"
              value={formData.customNotes}
              onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
              className={`${inputBase} border-indigo-500/30 bg-indigo-950/60`} />
          </fieldset>

          {/* Dispatch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <button type="button" onClick={dispatchToWhatsApp}
              className="cursor-pointer flex items-center justify-center gap-2.5 py-3.5 px-6 bg-teal-700 hover:bg-teal-600 text-white text-sm font-black uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-md">
              💬 Send via WhatsApp
            </button>
            <button type="button" onClick={dispatchToGmail}
              className="cursor-pointer flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#D8C7A9] hover:bg-white text-amber-950 text-sm font-black uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-md">
              ✉️ Send via Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
