import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c0d14] text-white pt-16 pb-8 border-t border-white/5">
      <div className="px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="text-2xl font-black">
              <span className="text-white">Ina's</span>
              <span className="text-primary">Cumpleaños</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Haciendo tus celebraciones inolvidables en Santiago desde 2015. Calidad, color y diversión garantizada.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
            </div>
          </div>
          
          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Tienda</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Novedades</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Globos y Helio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Decoración de Mesa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disfraces</a></li>
            </ul>
          </div>
          
          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Ayuda</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          {/* Location */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Visítanos</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">location_on</span>
                <span>Av. Juan Pablo Duarte,<br/>Santiago de los Caballeros,<br/>República Dominicana</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>+1 (809) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span>Lun - Sáb: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Ina's Cumpleaños. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span className="text-gray-600 text-xs">Visa</span>
            <span className="text-gray-600 text-xs">Mastercard</span>
            <span className="text-gray-600 text-xs">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;