import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; 
import ProductView from './pages/ProductView';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import FloatingSocials from './components/FloatingSocials';

export default function App() {
  // Global View Routing Controllers 
  const [currentRoute, setCurrentRoute] = useState('home');
  const [currentProductKey, setCurrentProductKey] = useState(null);

  // Central Routing Engine Handler
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
        return <Calculator />;
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
      
      {/* RADIANT AMBIENT GLOWS (Electric Purple & Fuchsia Orbs) */}
      <div className="absolute top-[-5%] left-[-10%] w-[750px] h-[750px] rounded-full bg-fuchsia-400/40 blur-[130px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute bottom-[15%] right-[-10%] w-[850px] h-[850px] rounded-full bg-purple-300/35 blur-[150px] pointer-events-none animate-pulse duration-[11000ms]" />
      <div className="absolute top-[40%] left-[15%] w-[600px] h-[600px] rounded-full bg-violet-400/30 blur-[110px] pointer-events-none animate-pulse duration-[9000ms]" />

      {/* High-Contrast Luminous Cyber Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e9d5ff_1px,transparent_1px),linear-gradient(to_bottom,#e9d5ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_10%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between pb-12">
        <div>
          <Navbar 
            currentRoute={currentRoute} 
            currentProductKey={currentProductKey} 
            onNavigate={handleNavigate} 
          />
          <main className="w-full">
            {renderView()}
          </main>
          <FloatingSocials />
        </div>
      </div>
    </div>
  );
}