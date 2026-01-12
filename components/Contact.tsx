import React from 'react';

const Contact: React.FC = () => {
  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-8 lg:px-20 xl:px-40 w-full bg-background-light dark:bg-background-dark text-[#1c0d14] dark:text-text-main-dark">
      <div className="w-full max-w-[1200px] flex flex-col gap-8">
        {/* Page Heading */}
        <div className="flex flex-col gap-3 py-4">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Contáctanos</h1>
          <p className="text-text-sub-light dark:text-text-sub-dark text-lg font-normal leading-normal max-w-2xl">
            ¡Hablemos de tu fiesta! Estamos listos para ayudarte a celebrar en grande. Visítanos en nuestra tienda o escríbenos.
          </p>
        </div>

        {/* Content Grid: Info/Form (Left) & Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT COLUMN: Contact Details & Form */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            {/* Primary CTA: WhatsApp */}
            <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold">¿Necesitas ayuda rápida?</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Te respondemos al instante.</p>
                </div>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                  <span className="material-symbols-outlined">chat</span>
                  <span>WhatsApp 809-724-1646</span>
                </button>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-card-dark shadow-sm">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">storefront</span>
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Visítanos</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark leading-relaxed">
                    Av. 27 de Febrero,<br/>Santiago 51700, Rep. Dom.
                  </p>
                </div>
              </div>
              {/* Hours */}
              <div className="flex flex-col gap-3 p-5 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-card-dark shadow-sm">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Horario</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Lun - Sab: 8:00 AM - 6:50 PM</p>
                  <p className="text-sm text-text-sub-light/70 dark:text-text-sub-dark/70 mt-1">Domingo: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col gap-6 pt-4">
              <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Nombre Completo</span>
                    <input className="w-full h-12 px-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-card-dark focus:border-primary focus:ring-0 transition-colors placeholder:text-text-sub-light/50 dark:placeholder:text-text-sub-dark/50" placeholder="Tu nombre" type="text"/>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-semibold">Correo Electrónico</span>
                    <input className="w-full h-12 px-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-card-dark focus:border-primary focus:ring-0 transition-colors placeholder:text-text-sub-light/50 dark:placeholder:text-text-sub-dark/50" placeholder="tucorreo@ejemplo.com" type="email"/>
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Asunto</span>
                  <input className="w-full h-12 px-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-card-dark focus:border-primary focus:ring-0 transition-colors placeholder:text-text-sub-light/50 dark:placeholder:text-text-sub-dark/50" placeholder="¿Sobre qué quieres hablar?" type="text"/>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold">Mensaje</span>
                  <textarea className="w-full p-4 rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-card-dark focus:border-primary focus:ring-0 resize-none transition-colors placeholder:text-text-sub-light/50 dark:placeholder:text-text-sub-dark/50" placeholder="Escribe tu mensaje aquí..." rows={4}></textarea>
                </label>
                <button className="mt-2 w-full sm:w-auto self-start bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer" type="submit">
                  <span>Enviar Mensaje</span>
                  <span className="material-symbols-outlined !text-[20px]">send</span>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Map */}
          <div className="lg:col-span-6 flex flex-col h-full min-h-[500px] lg:min-h-0">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-border-light dark:border-border-dark group">
              {/* Actual map image placeholder */}
              <img 
                alt="Map view of Santiago, Dominican Republic focusing on city streets" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBARZalfizLWejlOhTr60L4exqlAGjohDhDy0s0tti9G918r__U0Ora5pmtaR9iisxl-cf4iKO60oZEQ8UQFZAwICYeqRzOpg6zVyGBnCC8ntmHty0TuPPOAs0yjwCfbHCqurJgWUlArbqp5fBKD4JfivlOYaeAyzrp3j15-CpjUdhPYRSuC7uJoTiVW9F21NNwqaC21ldVl7RwTXxm_X2ET93qeh2JDjFlVC2x_ZjTPe85Lf1LqTl-T6JFTu8mnBHDLyg4rErvg5xB"
              />
              {/* Map Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-card-dark/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border-light/50 dark:border-border-dark/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-white p-2 rounded-lg">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#1c0d14] dark:text-white">Ina's Cumpleaños</p>
                    <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Santiago, República Dominicana</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary hover:underline px-3 py-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                  Ver en Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;