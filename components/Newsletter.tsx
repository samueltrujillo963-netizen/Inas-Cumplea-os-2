import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 max-w-[1440px] mx-auto w-full">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary via-purple-600 to-secondary-blue p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl">
        {/* Confetti decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        
        <div className="relative z-10 max-w-xl text-white space-y-4">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">¡Únete a la fiesta! 🎈</h2>
          <p className="text-lg text-white/90">Suscríbete para recibir ofertas exclusivas, ideas de decoración y un 10% de descuento en tu primera compra.</p>
        </div>
        
        <div className="relative z-10 mt-8 md:mt-0 w-full md:w-auto">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="px-6 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-white/50 border-none outline-none min-w-[280px]" 
              placeholder="Tu correo electrónico" 
              type="email"
            />
            <button 
              className="bg-[#1c0d14] hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg cursor-pointer" 
              type="submit"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;