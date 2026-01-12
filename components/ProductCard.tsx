import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const getBadgeColor = (color: string) => {
    switch(color) {
      case 'secondary': return 'bg-secondary';
      case 'accent': return 'bg-accent';
      case 'highlight': return 'bg-highlight';
      default: return 'bg-primary';
    }
  };

  const getCategoryColorClass = (category: string) => {
    switch(category) {
      case 'Globos': return 'text-highlight';
      case 'Decoraciones': return 'text-secondary';
      case 'Disfraces': return 'text-accent';
      case 'Suministros': return 'text-primary';
      case 'Recuerdos': return 'text-secondary';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 group overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <div className="relative aspect-w-1 aspect-h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {/* Edit Button */}
        <div className="absolute top-2 left-2 z-20">
          <button 
            type="button"
            className="bg-white/90 hover:bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1 border border-gray-200 cursor-pointer"
            onClick={() => console.log('Edit clicked')}
          >
            <span className="material-icons text-sm">edit</span> Editar
          </button>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-10 left-2 ${getBadgeColor(product.badge.color)} text-white text-xs font-bold px-2 py-1 rounded z-10`}>
            {product.badge.text}
          </span>
        )}

        {/* Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500" 
        />

        {/* Favorite Button */}
        <div className="absolute top-2 right-2 z-20">
          <button 
            type="button"
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full bg-white/80 dark:bg-black/50 transition-colors backdrop-blur-sm ${isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
          >
            <span className="material-icons text-xl">{isFavorite ? 'favorite' : 'favorite_border'}</span>
          </button>
        </div>

        {/* Hover Action */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
          <button 
            type="button"
            onClick={() => onAddToCart(product)}
            className="w-full bg-primary text-white font-bold py-2 rounded-lg shadow-lg hover:bg-pink-600 transition active:scale-95 cursor-pointer"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <span className={`text-xs font-bold uppercase tracking-wider mb-1 block ${getCategoryColorClass(product.category)}`}>
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className={`material-icons text-sm ${
              product.rating >= star 
                ? 'text-yellow-400' 
                : product.rating >= star - 0.5 
                  ? 'text-yellow-400' 
                  : 'text-gray-300'
            }`}>
              {product.rating >= star ? 'star' : product.rating >= star - 0.5 ? 'star_half' : 'star'}
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount} reseñas)</span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center mt-auto">
          {product.originalPrice ? (
            <div>
              <span className="text-xl font-bold text-red-500 mr-2">${product.price.toFixed(2)}</span>
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
          )}
        </div>
        
        {/* Mobile-only visible add to cart */}
        <div className="mt-4 md:hidden">
          <button 
             type="button"
             onClick={() => onAddToCart(product)}
             className="w-full bg-primary/10 text-primary font-bold py-2 rounded-lg border border-primary/20 hover:bg-primary hover:text-white transition active:scale-95 cursor-pointer"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;