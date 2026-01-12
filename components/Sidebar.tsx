import React from 'react';

interface SidebarProps {
  filters: {
    events: string[];
    categories: string[];
    priceRange: number;
  };
  onFilterChange: (type: 'events' | 'categories', value: string) => void;
  onPriceChange: (value: number) => void;
  isOpen: boolean; // Control visibility on mobile
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange, onPriceChange, isOpen }) => {
  const events = [
    { id: 'sanValentin', label: 'San Valentín' },
    { id: 'julio4', label: '4 de Julio' },
    { id: 'cumpleanos', label: 'Cumpleaños' },
    { id: 'accionGracias', label: 'Acción de Gracias' },
    { id: 'anoNuevo', label: 'Año Nuevo' }
  ];

  const categories = [
    { id: 'Globos', label: 'Globos', count: 42 },
    { id: 'Disfraces', label: 'Disfraces', count: 15 },
    { id: 'Vajilla', label: 'Vajilla', count: 38 },
    { id: 'Decoraciones', label: 'Decoraciones', count: 64 },
    { id: 'Suministros', label: 'Suministros', count: 21 },
    { id: 'Recuerdos', label: 'Recuerdos', count: 12 }
  ];

  return (
    <aside className={`w-full md:w-64 flex-shrink-0 transition-all duration-300 ${isOpen ? 'block' : 'hidden md:block'}`}>
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 sticky top-24">
        <h2 className="font-fredoka text-xl text-gray-800 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-600 pb-2">
          Categorías
        </h2>
        
        <div className="mb-6">
          <h3 className="font-bold text-sm uppercase text-gray-500 dark:text-gray-400 mb-3 tracking-wider">Eventos</h3>
          <ul className="space-y-2">
            {events.map((event) => (
              <li key={event.id}>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={filters.events.includes(event.id)}
                    onChange={() => onFilterChange('events', event.id)}
                    className="form-checkbox text-primary rounded border-gray-300 focus:ring-primary h-5 w-5 transition duration-150 ease-in-out" 
                  />
                  <span className={`transition-colors ${filters.events.includes(event.id) ? 'text-primary font-semibold' : 'text-gray-700 dark:text-gray-300 group-hover:text-primary'}`}>
                    {event.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-sm uppercase text-gray-500 dark:text-gray-400 mb-3 tracking-wider">Tipo de Producto</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button 
                  onClick={() => onFilterChange('categories', cat.id)}
                  className="w-full flex justify-between items-center group cursor-pointer"
                >
                  <span className={`transition-colors ${filters.categories.includes(cat.id) ? 'text-primary font-semibold' : 'text-gray-700 dark:text-gray-300 group-hover:text-primary'}`}>
                    {cat.label}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full transition-colors ${filters.categories.includes(cat.id) ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'}`}>
                    {cat.count}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase text-gray-500 dark:text-gray-400 mb-3 tracking-wider">Precio Máximo: ${filters.priceRange}</h3>
          <input 
            type="range" 
            min="0"
            max="100"
            value={filters.priceRange}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-primary" 
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;