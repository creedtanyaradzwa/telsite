import electroSalesLogo   from '../assets/electrosales_logo.webp';
import kdvBeddingLogo     from '../assets/KDV.webp';
import discoveryLogo      from '../assets/DISCOVERY.webp';
import bholaLogo          from '../assets/BHOLA.webp';
import dawnPropertiesLogo from '../assets/DAWN PROPERTIES.webp';
import logoImg            from '../assets/logotelsite.webp';

const quickLinks = [
  { label: 'Home',               route: 'home' },
  { label: 'Our Services',       route: 'product' },
  { label: 'Savings Calculator', route: 'roi' },
  { label: 'Company Profile',    route: 'about' },
  { label: 'Request Services',   route: 'contact' },
];

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#110827] border-t border-purple-400/20 font-sans">

      {/* ── Main footer grid ── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

        {/* Col 1 — Brand */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Telsite Tracking"
              className="h-10 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="leading-tight">
              <span className="block text-[#D8C7A9] font-semibold text-sm tracking-widest uppercase">Telsite</span>
              <span className="block text-[#D8C7A9]/50 text-xs font-light tracking-wider">Tracking</span>
            </div>
          </div>
          <p className="text-[#D8C7A9]/55 text-xs leading-relaxed max-w-xs">
            Zimbabwe's premier vehicle tracking and fleet telematics provider. Protecting assets and maximising fleet efficiency since 2010.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 pt-1">
            <a href="https://wa.me/263718339968" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="h-8 w-8 rounded-lg bg-[#D8C7A9]/8 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-900/20 flex items-center justify-center transition-colors duration-200">
              <svg className="h-4 w-4 fill-[#D8C7A9]/60" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm5.506 14.291a8 8 0 1 1 .952-3.823 7.963 7.963 0 0 1-.952 3.823z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61563395244776" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="h-8 w-8 rounded-lg bg-[#D8C7A9]/8 border border-white/10 hover:border-blue-500/40 hover:bg-blue-900/20 flex items-center justify-center transition-colors duration-200">
              <svg className="h-4 w-4 fill-[#D8C7A9]/60" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.instagram.com/telsite18" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="h-8 w-8 rounded-lg bg-[#D8C7A9]/8 border border-white/10 hover:border-purple-500/40 hover:bg-purple-900/20 flex items-center justify-center transition-colors duration-200">
              <svg className="h-4 w-4 fill-[#D8C7A9]/60" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://linkedin.com/company/telsite" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="h-8 w-8 rounded-lg bg-[#D8C7A9]/8 border border-white/10 hover:border-sky-500/40 hover:bg-sky-900/20 flex items-center justify-center transition-colors duration-200">
              <svg className="h-4 w-4 fill-[#D8C7A9]/60" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2 — Quick links */}
        <div className="space-y-5">
          <h3 className="text-[#F3EAD8] font-semibold text-sm uppercase tracking-widest">Navigation</h3>
          <div className="w-8 h-px bg-amber-950" />
          <ul className="space-y-3">
            {quickLinks.map(({ label, route }) => (
              <li key={route}>
                <button
                  onClick={() => onNavigate && onNavigate(route)}
                  className="cursor-pointer text-[#D8C7A9]/60 hover:text-[#D8C7A9] text-sm transition-colors duration-200 text-left"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div className="space-y-5">
          <h3 className="text-[#F3EAD8] font-semibold text-sm uppercase tracking-widest">Contact</h3>
          <div className="w-8 h-px bg-amber-950" />
          <ul className="space-y-3.5 text-xs text-[#D8C7A9]/60">
            <li className="flex gap-2.5 items-start">
              <span className="text-sm shrink-0 mt-0.5">📍</span>
              <span className="leading-relaxed">18 Divine Road, Milton Park,<br />Harare, Zimbabwe</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="text-sm shrink-0 mt-0.5">📞</span>
              <div>
                <span className="block text-[10px] font-semibold text-[#D8C7A9]/40 uppercase tracking-widest mb-0.5">Landline</span>
                <span>+263 242 741840</span>
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="text-sm shrink-0 mt-0.5">📱</span>
              <div>
                <span className="block text-[10px] font-semibold text-[#D8C7A9]/40 uppercase tracking-widest mb-0.5">Customer Care</span>
                <span>+263 718 339968</span>
              </div>
            </li>
            <li className="flex gap-2.5 items-start">
              <span className="text-sm shrink-0 mt-0.5">📱</span>
              <div>
                <span className="block text-[10px] font-semibold text-[#D8C7A9]/40 uppercase tracking-widest mb-0.5">Sales</span>
                <span>+263 710 939725</span>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <span className="text-sm shrink-0">✉️</span>
              <a href="mailto:contact@telsite-tracking.co.zw"
                className="hover:text-[#D8C7A9] transition-colors duration-200 break-all">
                contact@telsite-tracking.co.zw
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — Get Started */}
        <div className="space-y-5">
          <h3 className="text-[#F3EAD8] font-semibold text-sm uppercase tracking-widest">Get Started</h3>
          <div className="w-8 h-px bg-amber-950" />
          <p className="text-[#D8C7A9]/55 text-xs leading-relaxed">
            Ready to secure your fleet and eliminate fuel theft? Our team deploys within 24 hours of a confirmed order.
          </p>
          <a
            href="https://wa.me/263718339968?text=Hello%20Telsite%20Tracking,%20I%20am%20inquiring%20about..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-950 hover:bg-amber-900 text-[#F3EAD8] text-xs font-semibold uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-md"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8 px-6 sm:px-10 md:px-16 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#D8C7A9]/35 font-medium uppercase tracking-widest">
          <span>© {year} Telsite Tracking (Pvt) Ltd. All rights reserved.</span>
          <span>Zimbabwe · Est. 2010</span>
        </div>
      </div>
    </footer>
  );
}
