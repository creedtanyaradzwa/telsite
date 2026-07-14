import  { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; // Imported newly created About Us view
import ProductView from './pages/ProductView';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

export default function App() {
  // Global View Routing Controllers (Default to 'home' or 'about' to test)
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
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-theme-purple/20 flex flex-col justify-between">
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
  );
}