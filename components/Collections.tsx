import React from 'react';

interface CollectionsProps {
  onCollectionClick: (collection: string) => void;
}

const Collections: React.FC<CollectionsProps> = ({ onCollectionClick }) => {
  const collections = [
    {
      title: "Cumpleaños",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrC03QRTylEbMb-2YXegRiygGkhdKrGg1zaERCD64q7EY9IRGb5yP32MOQqTHjeisfBBKw_bzr-pe1LlS2Z9zsQfALdi9PQ2-djU2Q6NB5mE2kjG92rjgoZr0T9Cc-Qr0b7f4kQals_fwlzBSPKPpnaNgVSw26nmxQRd3KM5JOCluITrBjlbSJsoSonY2E0DyXeLADdK515jTrhPaY26ri4XlmAjSWhXGnXidXNvj_SwogzJlM9m-gPXNmcS5YAqqVOxu5depdYzCA",
      tag: "Más Popular",
      delay: "mt-0"
    },
    {
      title: "Bodas",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6ryGWt1IWXrlS28hW23tCjBRpxuJkEpdQdsmJRWv93z6xsDpbxlZ80kcNqxZ8gxlZjNiBCIwzGXb1XHG8lZhTjA0EfJQ2Z_XAQ0V35yJ4QLO019FPxoYZVeCr8KJZiTqWY7zagjGOdk8HXBE_npydQlsr37EBKSoQ-8sZWkBKQy0om5Me1VZXd_dyE_mPYM_cvxy970DwttYZRaFn5zrZwq6qPqnlsBEHTzw6jfVMR6rOAPs8XspXyX5liX1WB5WqI2pnfeOTWU5F",
      delay: "mt-0 md:mt-8"
    },
    {
      title: "Halloween",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvj476oRiW6pGLn9AHKhUy6e8eOZdThemxhgQerxit5z3XlvcBQOS33Gn4YgoMPpfK-Z6ApMHdnjc-gXjy4fcZxhOGCYoDBvD0CSKIhGQW_Vwb1eSDFqZ3jlJn7SSFMEUR2TUTPQFtaIMItbuNAgaKxdSJSqiiNVsBha5YJrND5m0trHCwgtuwmOsNpeJhMmih0J7riEgANWrd5HW0D_cWB5pxHU8vCF_ERHwkgULHvWkVts3fgLs2x_Hw3Xl7vpA5r28WQOYzKPJB",
      delay: "mt-0"
    },
    {
      title: "Baby Showers",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjdvJBC0VE6PNeBFifXnkpUGayLOUINbuFDxVB4m5qS81D37ZGAij-qq1i3CDpyiFYgOafWpdAhSAdG00nddrm4b-MvWZy7Bq4I18wNQqmfriFbFmh4f20i3AkEiOktqCldNFs9sncs2w1ZwujhywC0cB5jT-iq_7jcdpQHQM8HyYoGFKamWLlvbG_l_dubO2-IaHByMGTLiyND-rHhG31pMEoSjAokUS2N8Jmb9ws7p_pWxpH407M-ble-PzbQgNncSLUlMxh6J0m",
      delay: "mt-0 md:mt-8"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 max-w-[1440px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c0d14] dark:text-white tracking-tight mb-2">Nuestras Colecciones</h2>
          <p className="text-gray-500 dark:text-gray-400">Encuentra la temática perfecta para tu ocasión especial.</p>
        </div>
        <button 
          onClick={() => onCollectionClick('all')}
          className="text-primary font-bold hover:text-primary/80 flex items-center gap-1 group bg-transparent border-none cursor-pointer"
        >
          Ver todo el catálogo
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {collections.map((col, idx) => (
          <div 
            key={idx}
            className={`group relative flex flex-col gap-3 pb-3 cursor-pointer ${col.delay}`}
            onClick={() => onCollectionClick(col.title)}
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div 
                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('${col.image}')` }}
              ></div>
              <div className="absolute bottom-4 left-4 z-20">
                {col.tag && (
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold mb-1 inline-block border border-white/30">
                    {col.tag}
                  </span>
                )}
                <p className="text-white text-xl md:text-2xl font-bold leading-tight">{col.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;