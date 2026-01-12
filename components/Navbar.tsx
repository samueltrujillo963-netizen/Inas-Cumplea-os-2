import React, { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  cartCount: number;
  onMenuClick: () => void;
  onNavigate: (view: 'home' | 'catalog' | 'about' | 'contact') => void;
  currentView: 'home' | 'catalog' | 'about' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  cartCount, 
  onMenuClick,
  onNavigate,
  currentView
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view: 'home' | 'catalog' | 'about' | 'contact') => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1c0d14] text-white border-b border-white/10 shadow-lg">
      <div className="px-4 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1440px] mx-auto">
        
        {/* Mobile Menu & Search (Left on Desktop) */}
        <div className="flex items-center gap-6 w-full md:w-auto order-2 md:order-1 justify-between md:justify-start">
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={`transition-colors hover:text-primary ${currentView === 'home' ? 'text-primary' : 'text-white'}`}
            >
              Inicio
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'catalog')}
              className={`transition-colors hover:text-primary ${currentView === 'catalog' ? 'text-primary' : 'text-white'}`}
            >
              Catálogo
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'about')}
              className={`transition-colors hover:text-primary ${currentView === 'about' ? 'text-primary' : 'text-white'}`}
            >
              Nosotros
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`transition-colors hover:text-primary ${currentView === 'contact' ? 'text-primary' : 'text-white'}`}
            >
              Contacto
            </a>
          </nav>
          
          <button 
            type="button"
            onClick={onMenuClick}
            className="md:hidden p-2 text-white"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* Logo (Centered) */}
        <div 
          className="order-1 md:order-2 flex-shrink-0 relative group cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="relative z-10 text-2xl md:text-3xl font-black tracking-tight select-none">
            <span className="text-white drop-shadow-[2px_2px_0px_#f4258c]">Ina's</span>
            <span className="bg-gradient-to-r from-secondary-orange via-primary to-secondary-blue text-gradient ml-1 drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">Cumpleaños</span>
          </div>
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10 group-hover:bg-primary/40 transition-all duration-500"></div>
        </div>

        {/* Actions (Right) */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end order-3">
          <div className="hidden md:flex relative group w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400">search</span>
            </div>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors" 
              placeholder="Buscar productos..." 
            />
          </div>

          <a href="#" className="relative p-2 hover:bg-white/10 rounded-full transition-colors group">
            <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">shopping_basket</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                {cartCount}
              </span>
            )}
          </a>
          
          <button 
            type="button" 
            className="relative p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <span className="material-symbols-outlined text-white">search</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-4">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-700 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary" 
            placeholder="Buscar..." 
            autoFocus
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;