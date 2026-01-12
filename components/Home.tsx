import React from 'react';
import Hero from './Hero';
import Collections from './Collections';
import Newsletter from './Newsletter';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface HomeProps {
  onNavigate: (view: 'home' | 'catalog') => void;
  onAddToCart: (product: any) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onAddToCart }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero onShopClick={() => onNavigate('catalog')} />
      
      <Collections onCollectionClick={() => onNavigate('catalog')} />
      
      {/* Best Sellers Section */}
      <section className="py-16 bg-white dark:bg-white/5">
        <div className="px-4 md:px-10 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c0d14] dark:text-white tracking-tight">Lo Más Vendido</h2>
            {/* Simple Filters */}
            <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <button onClick={() => onNavigate('catalog')} className="px-4 py-2 rounded-full bg-primary text-white font-semibold text-sm whitespace-nowrap cursor-pointer">Todo</button>
              <button onClick={() => onNavigate('catalog')} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 font-medium text-sm whitespace-nowrap transition-colors cursor-pointer">Globos</button>
              <button onClick={() => onNavigate('catalog')} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 font-medium text-sm whitespace-nowrap transition-colors cursor-pointer">Decoración</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </main>
  );
};

export default Home;