import { useState, lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

// Per-route SEO metadata
const routeMeta = {
  home: {
    title: 'Telsite Tracking — Vehicle Tracking & Fleet Management Zimbabwe',
    description: 'Real-time GPS vehicle tracking, fuel theft prevention and S.I. 118 speed governors for fleets across Zimbabwe. 24-hour deployment. Serving businesses since 2010.',
  },
  about: {
    title: 'Company Profile — Telsite Tracking Zimbabwe',
    description: 'Learn about Telsite Tracking, Zimbabwe\'s leading fleet telematics provider. Established 2010. Based at 18 Divine Road, Milton Park, Harare.',
  },
  product: {
    title: 'Fleet Tracking Products — Telsite Tracking Zimbabwe',
    description: 'Explore iFleetMax, iFleetMax Fuel, Speed Limiter, iRoam, iAsset, iBike and iPrivate — Zimbabwe\'s most complete vehicle tracking product range.',
  },
  roi: {
    title: 'Fleet Savings Calculator — Telsite Tracking Zimbabwe',
    description: 'Calculate how much your business can save with Telsite\'s fuel monitoring and vehicle tracking technology. See your projected annual recovery capital.',
  },
  contact: {
    title: 'Request Services — Telsite Tracking Zimbabwe',
    description: 'Request a vehicle tracking or fleet management deployment from Telsite Tracking. Serving all industries across Zimbabwe. Respond within 24 hours.',
  },
};

// Lazy-load every page so each route is its own split chunk.
// Users only download the JS for the page they actually visit.
const Home        = lazy(() => import('./pages/Home'));
const About       = lazy(() => import('./pages/About'));
const ProductView = lazy(() => import('./pages/ProductView'));
const Calculator  = lazy(() => import('./pages/Calculator'));
const Contact     = lazy(() => import('./pages/Contact'));

// Minimal inline fallback — no extra component file needed
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <span className="h-10 w-10 rounded-full border-4 border-[#D8C7A9]/40 border-t-[#D8C7A9] animate-spin" />
    </div>
  );
}

export default function App() {
  // Global View Routing Controllers
  const [currentRoute, setCurrentRoute] = useState('home');
  const [currentProductKey, setCurrentProductKey] = useState(null);

  // Update page title + meta description on every route change
  useEffect(() => {
    const meta = routeMeta[currentRoute] || routeMeta.home;
    document.title = meta.title;
    let descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);
  }, [currentRoute]);
  const handleNavigate = (route, productKey = null) => {
    setCurrentRoute(route);
    if (productKey) {
      setCurrentProductKey(productKey);
    } else if (route !== 'product') {
      setCurrentProductKey(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch Matrix View Renderer
  const renderView = () => {
    switch (currentRoute) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'roi':
        return <Calculator onNavigate={handleNavigate} />;
      case 'product':
        return <ProductView productId={currentProductKey} onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#7e22ce] via-[#9333ea] to-[#6b21a8] text-white antialiased selection:bg-fuchsia-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Single subtle ambient glow — reduced visual noise */}
      <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-500/15 blur-[140px] pointer-events-none" />
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between pb-12">
        <div>
          <Navbar
            currentRoute={currentRoute}
            currentProductKey={currentProductKey}
            onNavigate={handleNavigate}
          />
          <main className="w-full">
            {/* Suspense boundary: shows spinner while the lazy chunk loads */}
            <Suspense fallback={<PageLoader />}>
              {renderView()}
            </Suspense>
          </main>
          <FloatingSocials />
        </div>
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
