import aboutBg   from '../assets/ABOUT.webp';
import tracking2  from '../assets/tracking2.webp';
import tracking4  from '../assets/tracking 4.webp';
import fleet2     from '../assets/fleet2.jpg';
export default function About() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-17.817354,31.026402+(Telsite+Tracking)";
  return (
    <div className="w-full min-h-screen font-sans bg-purple-950">
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={aboutBg} alt="Telsite Tracking offices and fleet operations in Harare Zimbabwe"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/40 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-16 pb-16 pt-36">
          <span className="inline-block border border-white/40 text-white text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5">
            Corporate Profile
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-white leading-tight max-w-3xl mb-4 drop-shadow-lg">
            Pioneering Telematics Standards in Zimbabwe
          </h1>
          <p className="text-[#D8C7A9] text-base sm:text-lg max-w-2xl leading-relaxed">
            Established in 2010 as a core operating division of Telsite Investments (Pvt) Ltd — one of Zimbabwe's most relied-upon asset management intelligence architectures.
          </p>
        </div>
      </section>
      {/* ── VISION + MISSION — image-backed cards ── */}
      <section className="py-20 md:py-24 px-6 sm:px-10 md:px-16 bg-purple-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision — tracking2 image background, muted slate overlay */}
          <div className="relative rounded-xl overflow-hidden min-h-[300px] flex flex-col justify-end">
            <img src={tracking2} alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-slate-900/20" />
            <div className="relative z-10 p-8 space-y-3">
              <span className="text-slate-300 text-xs font-semibold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="text-xl">🔭</span> Our Vision
              </span>
              <div className="w-10 h-0.5 bg-[#D8C7A9]/60 rounded" />
              <h2 className="text-xl font-serif font-semibold text-white leading-snug">
                The Definitive Blueprint for African Fleet Intelligence
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be the definitive blueprint for intelligent fleet optimisation across Africa, ensuring every commercial wheel is backed by robust data pipelines and unquestionable safety compliance.
              </p>
            </div>
          </div>
          {/* Mission — fleet2 image background, muted warm overlay */}
          <div className="relative rounded-xl overflow-hidden min-h-[300px] flex flex-col justify-end">
            <img src={fleet2} alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/70 to-stone-900/20" />
            <div className="relative z-10 p-8 space-y-3">
              <span className="text-stone-300 text-xs font-semibold uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="text-xl">🚀</span> Our Mission
              </span>
              <div className="w-10 h-0.5 bg-[#D8C7A9]/60 rounded" />
              <h2 className="text-xl font-serif font-semibold text-white leading-snug">
                Empowering Enterprises to Eliminate Overhead Waste
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                We empower enterprises and public transporters to eliminate fuel siphoning instantly and fulfill statutory regulatory frameworks via engineering support that responds to clients' precise field feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ── OPERATIONAL MANDATE — image bg section + muted cards ── */}
      <section className="relative py-20 md:py-24 px-6 sm:px-10 md:px-16 overflow-hidden">
        <img src={tracking4} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-purple-950/80" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[#D8C7A9] text-xs font-semibold uppercase tracking-[0.2em]">The Telsite Mandate</span>
            <div className="section-divider mt-3" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mt-4 mb-4">
              We Don't Talk History.<br />
              <span className="text-[#D8C7A9]">We Secure Active Runtime.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              While the industry asks you to wait weeks for telemetry mapping, the Telsite ecosystem operates on an aggressive, guaranteed deployment matrix.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: '24-Hour Provisioning',  body: 'From formal purchase order to live field tracking — units ship pre-mapped within one business day.',   bg: 'bg-slate-700/80',  border: 'border-slate-500/40' },
              { icon: '⛽', title: '0% Fuel Bypass Target', body: 'Calibrated so precisely that any fuel variance triggers an instantaneous system lock alert.',            bg: 'bg-teal-900/70',   border: 'border-teal-600/40'  },
              { icon: '⚖️', title: 'Bulletproof S.I. 118',  body: 'Speed governors backed by a zero-penalty guarantee. If our hardware drifts, we field-service it free.',  bg: 'bg-stone-700/80',  border: 'border-stone-500/40' },
            ].map(({ icon, title, body, bg, border }) => (
              <div key={title} className={`rounded-xl p-7 border ${border} ${bg} backdrop-blur-sm`}>
                <div className="text-2xl mb-4">{icon}</div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">{title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── HEADQUARTERS ── */}
      <section className="py-20 md:py-24 px-6 sm:px-10 md:px-16 bg-purple-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 space-y-8">
            <div>
              <span className="text-[#D8C7A9] text-xs font-semibold uppercase tracking-[0.2em]">Find Us</span>
              <div className="section-divider mt-3" />
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mt-4">Visit Our Command Offices</h2>
            </div>
            <ul className="space-y-5 text-sm">
              {[
                { icon: '📍', label: 'Physical Address',      value: '18 Divine Road, Milton Park, Harare, Zimbabwe' },
                { icon: '📞', label: 'Landline / Operations', value: '+263 242 741840' },
                { icon: '📱', label: 'Mobile Hotline',        value: '+263 718 339968' },
                { icon: '✉️', label: 'Corporate Email',       value: 'contact@telsite-tracking.co.zw' },
              ].map(({ icon, label, value }) => (
                <li key={label} className="flex gap-4 items-start">
                  <span className="text-lg shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-widest text-purple-300 mb-0.5">{label}</span>
                    <span className="font-medium text-white">{value}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D8C7A9] hover:bg-white text-amber-950 text-sm font-bold uppercase tracking-widest rounded-lg transition-colors duration-200 shadow-md">
              Open in Google Maps →
            </a>
          </div>
          {/* Real Google Maps embed */}
          <div className="md:col-span-7">
            <div className="relative w-full h-[300px] sm:h-[380px] rounded-xl overflow-hidden shadow-lg border border-purple-400/20">
              <iframe
                title="Telsite Tracking — 18 Divine Road, Milton Park, Harare"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.123456789!2d31.026402!3d-17.817354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzAyLjUiUyAzMcKwMDEnMzUuMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'hue-rotate(240deg) saturate(0.7) brightness(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-3 left-3 bg-[#D8C7A9]/95 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-amber-950 shadow pointer-events-none">
                <span>📍</span>
                <span>18 Divine Road, Milton Park · Harare</span>
              </div>
              {/* Clickable overlay to open full maps */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-[#D8C7A9] hover:bg-white text-amber-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow transition-colors duration-200"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
