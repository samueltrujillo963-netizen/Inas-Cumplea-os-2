import React from 'react';

interface HeroProps {
  onShopClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-background-dark">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c0d14]/90 via-[#1c0d14]/50 to-transparent z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center animate-pulse-slow" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtKMR8RFSHeqPEjdzHoSfM_RVoq4bi1EdUn1fVpmJuNNhzhEPl-HUkmz5psPAdlzJEo4P4mBPSTqohGPEG--X_KH-iLbPF7aWMUm_vQrfew0Mw9koR1ourm0eZnUcjizp2DK3oFsLxl6mLkA047LyauljrPtDYKdB6h7X08UcaahJxiz8Lr8GEpRgxAJKC0aMU2Wy5Y0PnMM3eZiHy_Kuc1LxI7BJYXByE6ug1DSA9GlumypjxEmGD4SQ6zwsA3opmhufITU8T_AEG')" }}
          ></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="max-w-2xl text-center md:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wide uppercase mb-2 backdrop-blur-sm">
              🎉 La mejor tienda de fiestas en Santiago
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
              ¡Celebra a lo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-orange">Grande!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
              Globos, disfraces y decoración para hacer de tu evento un momento inolvidable. Todo lo que necesitas está aquí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={onShopClick}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_10px_20px_-10px_rgba(244,37,140,0.5)] transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">storefront</span>
                Ver Tienda
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-background-light dark:fill-background-dark"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;