import whatsappIcon from '../assets/Wicon.jpg'; 
import instagramIcon from '../assets/Instagram_icon.png';

export default function FloatingSocials() {
  const links = {
    whatsapp: "https://wa.me/263718339968?text=Hello%20Telsite%20Tracking,%20I%20am%20inquiring%20about...", 
    instagram: "https://www.instagram.com/telsite18",
    facebook: "https://www.facebook.com/profile.php?id=61563395244776&sk=directory_links",
    linkedin: "https://linkedin.com/company/yourusername"
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[9999] flex flex-col gap-2.5 sm:gap-3.5 pointer-events-none">
      
      {/* WHATSAPP FLOATING HUB */}
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-emerald-500 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300" 
        />
        
        <span className="hidden md:inline absolute right-14 2xl:right-20 font-mono text-[10px] 2xl:text-sm font-black uppercase tracking-wider text-slate-900 bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xs whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* INSTAGRAM FLOATING HUB */}
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-gradient-to-tr from-amber-500 via-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-purple-600/30 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        aria-label="Follow us on Instagram"
      >
        <img 
          src={instagramIcon} 
          alt="Instagram" 
          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300" 
        />
        
        <span className="hidden md:inline absolute right-14 2xl:right-20 font-mono text-[10px] 2xl:text-sm font-black uppercase tracking-wider text-slate-900 bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xs whitespace-nowrap">
          Instagram
        </span>
      </a>

      {/* FACEBOOK FLOATING HUB */}
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-blue-600 text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300"
        aria-label="Connect on Facebook"
      >
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 fill-white" 
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
        <span className="hidden md:inline absolute right-14 2xl:right-20 font-mono text-[10px] 2xl:text-sm font-black uppercase tracking-wider text-slate-900 bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xs whitespace-nowrap">
          Facebook
        </span>
      </a>

      {/* LINKEDIN FLOATING HUB */}
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 bg-sky-700 text-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-sky-700/30 hover:-translate-y-0.5 transition-all duration-300"
        aria-label="Follow us on LinkedIn"
      >
        <svg 
          className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 fill-white" 
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
        <span className="hidden md:inline absolute right-14 2xl:right-20 font-mono text-[10px] 2xl:text-sm font-black uppercase tracking-wider text-slate-900 bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xs whitespace-nowrap">
          LinkedIn
        </span>
      </a>

    </div>
  );
}