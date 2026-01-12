import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <main className="flex-1" id="product-list-section">
      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          <span className="text-gray-900 dark:text-white font-bold">{products.length}</span> productos encontrados
        </p>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">Ordenar por:</label>
          <select id="sort" className="form-select block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md dark:bg-surface-dark dark:border-gray-600 dark:text-white cursor-pointer">
            <option>Más populares</option>
            <option>Precio: Menor a Mayor</option>
            <option>Precio: Mayor a Menor</option>
            <option>Lo más nuevo</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center bg-gray-50 dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
          <span className="material-icons text-6xl text-gray-300 mb-4">sentiment_dissatisfied</span>
          <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2">No se encontraron productos</h3>
          <p className="text-gray-500">Intenta ajustar tus filtros o búsqueda.</p>
        </div>
      )}

      {/* Pagination */}
      {products.length > 0 && (
        <div className="mt-12 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" onClick={(e) => e.preventDefault()} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-surface-light dark:bg-surface-dark text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <span className="sr-only">Anterior</span>
              <span className="material-icons">chevron_left</span>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-current="page" className="z-10 bg-primary border-primary text-white relative inline-flex items-center px-4 py-2 border text-sm font-bold cursor-pointer">1</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="bg-surface-light dark:bg-surface-dark border-gray-300 dark:border-gray-600 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer">2</a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-surface-light dark:bg-surface-dark text-sm font-medium text-gray-700 dark:text-gray-200">...</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-surface-light dark:bg-surface-dark text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
              <span className="sr-only">Siguiente</span>
              <span className="material-icons">chevron_right</span>
            </a>
          </nav>
        </div>
      )}
    </main>
  );
};

export default ProductList;