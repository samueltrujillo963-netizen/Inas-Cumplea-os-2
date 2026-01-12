import React from 'react';

const About: React.FC = () => {
  return (
    <main className="flex flex-col items-center w-full bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="w-full flex justify-center px-4 lg:px-8 py-6">
        <div className="w-full max-w-[960px]">
          <div 
            className="relative overflow-hidden rounded-2xl min-h-[480px] flex flex-col items-center justify-center text-center p-8 gap-6 bg-cover bg-center shadow-xl" 
            style={{ backgroundImage: 'linear-gradient(rgba(34, 16, 25, 0.4), rgba(34, 16, 25, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyHyyY5Y9hfnLC8vEe0rwQPzj3FlJpwg4MAy8ujP_cpHmatjZaGsAvCqPIw0A8CqX-9URDaxtlZMxb4lwxbi5JrSVghA7BWWRUdYEsNkeGgp-ST-Izkwu1iD8yvTPJMLr7Uvfh-Tdj89N7hy75XYoYS2SvUiTXEnF-8HAzfltuxOnoYZOxLe2VMkXYRaT7yXQvcWyUm7z8E0q0vttgEFw1u_b4Teks4I5mgjMjPma59f8SzRI9aTZKi5VoQpOSDvB-uHSahq55ylno")' }}
          >
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-xs bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full w-fit mx-auto">
                Desde Santiago para el mundo
              </span>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Celebrando la Vida, <br/>Un Momento a la Vez
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto">
                Más que suministros, creamos recuerdos inolvidables para cada celebración en nuestra comunidad.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="h-12 px-6 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
                <span className="material-symbols-outlined">storefront</span>
                Visitar Tienda
              </button>
              <button className="h-12 px-6 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-base hover:bg-white/20 transition-all border border-white/30 flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Ver Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="w-full flex justify-center px-4 lg:px-8 pb-12">
        <div className="w-full max-w-[960px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-accent-subtle dark:border-accent-subtle-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                <span className="material-symbols-outlined text-3xl">favorite</span>
              </div>
              <p className="text-3xl font-black text-text-main dark:text-text-light mb-1">27k+</p>
              <p className="text-sm font-medium text-primary/80 dark:text-primary/60 uppercase tracking-wide">Seguidores en Instagram</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-accent-subtle dark:border-accent-subtle-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                <span className="material-symbols-outlined text-3xl">photo_camera</span>
              </div>
              <p className="text-3xl font-black text-text-main dark:text-text-light mb-1">7,000+</p>
              <p className="text-sm font-medium text-primary/80 dark:text-primary/60 uppercase tracking-wide">Momentos Compartidos</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-accent-subtle dark:border-accent-subtle-dark shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-full text-primary mb-3">
                <span className="material-symbols-outlined text-3xl">calendar_month</span>
              </div>
              <p className="text-3xl font-black text-text-main dark:text-text-light mb-1">12+</p>
              <p className="text-sm font-medium text-primary/80 dark:text-primary/60 uppercase tracking-wide">Años Celebrando</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full flex justify-center px-4 lg:px-8 py-10 bg-white dark:bg-surface-dark/50">
        <div className="w-full max-w-[960px] flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">Nuestra Historia</span>
              <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-text-light leading-tight">
                El corazón de la fiesta en Av. 27 de Febrero
              </h2>
              <p className="text-lg text-text-main/70 dark:text-text-light/70 leading-relaxed">
                Desde nuestros humildes inicios, nos hemos convertido en la marca de confianza para las fiestas en Santiago. Nuestra misión siempre ha sido simple: traer alegría pura a cada celebración, ya sea un cumpleaños íntimo o una gran boda.
              </p>
              <p className="text-lg text-text-main/70 dark:text-text-light/70 leading-relaxed">
                Lo que comenzó como un pequeño rincón de globos ha crecido gracias a ustedes, nuestra increíble comunidad.
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-lg text-primary shrink-0">
                  <span className="material-symbols-outlined">sentiment_satisfied</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-main dark:text-text-light">Servicio Personalizado</h3>
                  <p className="text-text-main/60 dark:text-text-light/60">Nuestro equipo te ayuda a planificar cada detalle.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-lg text-primary shrink-0">
                  <span className="material-symbols-outlined">category</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-main dark:text-text-light">Variedad Infinita</h3>
                  <p className="text-text-main/60 dark:text-text-light/60">Desde temáticas clásicas hasta las últimas tendencias de TikTok.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div 
                className="col-span-2 h-48 rounded-2xl bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJEPdqzzGmWtFgLy-sYnIKjnKChujXc6Xc6m13RkgNcQyqmTt-Px6vdddj5YASCm_fXba0Ci6ijLXkGLxcFvSmFJ29Knf-tHbplSvptpRTgQvQMa_fy6EMmSnVUx4rQfuqRghW8Tta9oMWqCI8wnWHbR7ZqR38gfmNALa-k5kaiDSOrpUrqMzw27LwzyZI1oPMnKtWJhV1oVACFydYxyffa5xrAlcv6qCOMVxG_OY2ouG4yLWOJLwG6wnTFi9tYpaR5Tct-hUf9jUJ")' }}
              ></div>
              <div 
                className="h-40 rounded-2xl bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZjscD0fwtZKtATbjyrMk9ZVtwF5dfgN5q_pR9zuHz5Vb913ioclDCYHII3WLdiGHdBaPSse5iPtsvsTwjjrQXMU9VZA_Bplx8-tF13-evOGaN8jN9ZbYex2UtnmRKwkvCpP24qNSx1-dLIwcAddegQS9WIJvMHXzXu2O8JsT7_XBg1Kkxh-rnSvB1Ucs8GG3XnEOIngcDXrE6rPNW0jKJoHilqQOV0iMSW1dNQ974Ir_FLu_iqigvsHh8Aky6eV_29zWyTnAEDmKJ")' }}
              ></div>
              <div 
                className="h-40 rounded-2xl bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAp99cOErs_8IkWx8E6BMvUXQOfdJkqKqKMe_rKdvtjsM5ETgRyJTGfmhvjzBLqoBtD9CuUUWxqnujLmRhrg6mHaHoKYV-9DfkPdd_hSi8ZaFOxM_Gn8S8mZVsD1D7pt4Vfoe00YIJFzwwdcTsnoIw574WK8aTfA0rf1A1D5FySe1mNHlaz-TnmQpxjTttAMyy11Mk7n9EY6F8yFyAjrLgDhlZLcdgF13QAQ0AN_JFioG9NQ16KX-XwdUHlBb81wemXunbw9zfHFqbJ")' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Gallery Section */}
      <section className="w-full flex justify-center px-4 lg:px-8 py-16">
        <div className="w-full max-w-[960px] flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-text-main dark:text-text-light mb-3">La Familia Ina's</h2>
            <p className="text-text-main/60 dark:text-text-light/60">Conoce a las caras sonrientes detrás de cada pedido y a nuestra maravillosa comunidad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group flex flex-col gap-3">
              <div 
                className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center overflow-hidden relative" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFEcY0YiHRvcf2YggrEOXirk4gjGIXO3jiEVJHSMiKiMd6euBZvFhb7Wpel76ZeV7Ok5A1J4mUTZO7EQbZ5v571xxcinmblHDFmX_7jUNNz_Z9kBbNKL8weCC5pijGTrlJTmYiKWCl1-oqxGYJMyFux2tRhPE1S0Lb-PvATCOglzg_ddIrnqjFszB3Sbc8A-lyCxJL-7Hc95tsizui6Qn_ClGNc7wwYQdZH6IVToOHi1xEXxG58_qjg3aGan_ZPorcfu8bimowP2iU")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">Experta en Globos</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-main dark:text-text-light">El Equipo</h3>
                <p className="text-sm text-primary">Listos para ayudarte</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group flex flex-col gap-3">
              <div 
                className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center overflow-hidden relative" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGPSzWD2qt-nd6x3u3gzxZI6I-2Z81RjKZophq0kvx7-FRhVszccJ_GXOhu8NCs54Hezgstlw3A3XSIuNHHDX8V4p6FjBFi0VZiYPXBWDd0L88i8LlIcvW6gUg19kys8dKxzrqvkuGAW80xZhK9pYWo_FevHpTwhvDRdZVUqo7dJ8-iIz_4zJIZ5LPv0BsjLaklcB9L5Sc3yDFcxGxCrFObJSRLK3wadK0oCllevQUngXOxXWDMq8TYSVytj_-1Xgpb4kcPmfmx3hu")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">Av. 27 de Febrero</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-main dark:text-text-light">La Tienda</h3>
                <p className="text-sm text-primary">Un mundo de colores</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group flex flex-col gap-3">
              <div 
                className="w-full aspect-[4/5] rounded-2xl bg-cover bg-center overflow-hidden relative" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9qWxJ7gWy0srY6NCCvghE5QU5dGP18W3uCyI0VK5Xl9vXvfQ0Jhazgh21zn3kyc1JMH_EDpK83iAbH540d57ANGjUroiMcTuUq7FSKVBg8OV6R_4KbNH47v7lVEOzrFe0875kBlqHJOtNQ91LxfalUQE6vv_8ovsYCCzM2MYnngfao7pfMbBcaMmalb84kx7WLFaqOMgL-vBt7PwzMHI_1Isop_js71f-LTiXmpUzyOBLMZvZkusd-PK0YWz15kkPhkHqVdCWWkKC")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">Nuestros Clientes</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-main dark:text-text-light">Comunidad</h3>
                <p className="text-sm text-primary">Momentos felices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="w-full flex justify-center px-4 lg:px-8 pb-16">
        <div className="w-full max-w-[960px] bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
          <div className="flex flex-col md:flex-row p-8 md:p-12 items-center gap-8 relative z-10">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-black mb-4">¡Ven a visitarnos!</h2>
              <p className="text-white/90 text-lg mb-6">Estamos ubicados en el corazón de Santiago. Ven y descubre por qué somos los favoritos.</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined bg-white/20 p-2 rounded-full">location_on</span>
                  <span className="font-medium">Av. 27 de Febrero, Santiago, RD</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined bg-white/20 p-2 rounded-full">schedule</span>
                  <span className="font-medium">Lun - Sab: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden bg-background-light">
              {/* Simulated Map */}
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4YgYoR-J6cehsZMA2WMC0J36DfO2TB7azgVp0W9e91BccONlDSbpAh0JlDBfJVCXcTPka6WQKVRdd6r-hwrxCl8Y2Drc4kG8e9P_dpZKV6RVeL78Po79_zvt2Sy3wtyVyEkNBuw0EvvwSB9pDtmKHGVjLzuoprpZ6wMwGasZKci0F6RVkhEXCnC_-fUsBcDi6BA2b2p9BzxwQvnN2fSgbG2_OLGJOilgxhnTXHyUlHkEie2fvYqPfQ1_1lLTphB0fKqOEQ88aG84m")' }}
              >
                <div className="w-full h-full bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/10 transition-colors">
                  <button className="bg-white text-text-main px-4 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-primary">map</span>
                    Ver en Mapa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;