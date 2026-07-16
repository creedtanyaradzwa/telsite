import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; 
import ProductView from './pages/ProductView';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import Footer from './components/Footer';
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
    <div className="relative min-h-screen bg-gradient-to-tr from-[#1E1145] via-[#120B2E] to-[#2D124D] text-slate-100 antialiased selection:bg-fuchsia-500/40 selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      {/* RADIANT AMBIENT GLOWS (Much brighter and pulsing) */}
      <div className="absolute top-[-5%] left-[-10%] w-[650px] h-[650px] rounded-full bg-purple-500/25 blur-[120px] pointer-events-none animate-pulse duration-[7000ms]" />
      <div className="absolute bottom-[15%] right-[-10%] w-[750px] h-[750px] rounded-full bg-fuchsia-500/20 blur-[150px] pointer-events-none animate-pulse duration-[11000ms]" />
      <div className="absolute top-[40%] left-[15%] w-[500px] h-[500px] rounded-full bg-violet-500/15 blur-[100px] pointer-events-none animate-pulse duration-[9000ms]" />

      {/* High-Contrast Interactive Cyber Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#3C2C73_1px,transparent_1px),linear-gradient(to_bottom,#3C2C73_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_65%,transparent_100%)] opacity-35 pointer-events-none"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
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

        <Footer />
      </div>
    </div>
  );
}