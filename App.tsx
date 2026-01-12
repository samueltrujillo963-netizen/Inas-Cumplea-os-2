import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { PRODUCTS } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState<'home' | 'catalog' | 'about' | 'contact'>('home');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  
  const [filters, setFilters] = useState({
    events: [] as string[],
    categories: [] as string[],
    priceRange: 100
  });

  // Toggle Mobile Sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Cart Logic
  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
    console.log(`Added ${product.name} to cart`);
  };

  const handleFilterChange = (type: 'events' | 'categories', value: string) => {
    setFilters(prev => {
      const current = prev[type];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const handlePriceChange = (value: number) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Search
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      // Price
      if (product.price > filters.priceRange) {
        return false;
      }
      // Events
      if (filters.events.length > 0) {
        if (!product.events || !product.events.some(e => filters.events.includes(e))) {
          return false;
        }
      }
      // Categories
      if (filters.categories.length > 0) {
        if (!filters.categories.includes(product.category)) {
          return false;
        }
      }
      return true;
    });
  }, [searchTerm, filters]);

  // If user searches from Navbar while on Home, switch to Catalog automatically
  const handleSearchChange = (val: string) => {
    setSearchTerm(val);
    if (val && currentView !== 'catalog') {
      setCurrentView('catalog');
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} onAddToCart={addToCart} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'catalog':
      default:
        return (
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
            <div className="flex flex-col md:flex-row gap-8">
              <Sidebar 
                filters={filters}
                onFilterChange={handleFilterChange}
                onPriceChange={handlePriceChange}
                isOpen={isSidebarOpen}
              />
              <div className="flex flex-col flex-1 w-full">
                 {/* Catalog Header */}
                 <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                   <h1 className="text-3xl font-black text-[#1c0d14] dark:text-white mb-2">Catálogo Completo</h1>
                   <p className="text-gray-500">Explora todos nuestros productos para tu fiesta.</p>
                 </div>
                <ProductList 
                  products={filteredProducts} 
                  onAddToCart={addToCart}
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
        cartCount={cart.length} 
        onMenuClick={toggleSidebar}
        onNavigate={setCurrentView}
        currentView={currentView}
      />
      
      {renderContent()}
      
      <Footer />
    </div>
  );
};

export default App;