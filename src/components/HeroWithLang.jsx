import React from "react";
import DownloadButton from "./DownloadButton";

const HeroWithLang = ({ translations, currentLang }) => {
  const scrollDown = () => {
    const mainSection = document.querySelector(".bg-primary-dark.min-h-screen");
    if (mainSection) {
      // Obtener la posición de la sección Main.astro
      const offset = mainSection.getBoundingClientRect().top + window.scrollY;
      // Desplazar hacia el centro de la sección
      const targetPosition = offset + mainSection.offsetHeight / 4;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    } else {
      console.log("No se encontró la sección principal");
    }
  };

  return (
    <div className="pt-90 overflow-hidden">
      {/* Hero Section - Ahora con flex para mejor control en móvil */}
      <section className="bg-primary mt-10 sm:mt-16 md:mt-24 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Columna izquierda - Texto */}
          <div className="font-bold max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2">Mario Santos</h1>
            <h2
              className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {translations.role}
            </h2>
            <div className="mt-8 md:mt-10">
              <DownloadButton text={translations.downloadCV} />
            </div>
          </div>

          {/* Columna derecha - Foto - ahora con auto-margen a la izquierda para empujarla a la derecha */}
          <div className="flex justify-end mt-8 md:mt-0 ml-auto pl-20 ">
            <div className="relative w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 ">
              {/* Borde gradiente animado - ahora con z-index bajo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r to-emerald-600 from-sky-400 blur-sm animate-spin-slow z-0"></div>
              
              {/* Marco gradiente - ahora con z-index mayor */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r to-emerald-600 from-sky-400 shadow-xl shadow-emerald-600/30 z-10">
                {/* Foto - ahora con z-index más alto */}
                <div className="rounded-full overflow-hidden h-full w-full border-4 border-primary-dark relative z-20">
                  <img 
                    src="/perfil.webp" 
                    alt="Mario Santos" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Button - Ahora centrado bajo ambas columnas */}
      <section className="bg-primary flex items-center justify-center pt-10 sm:pt-16 pb-10">
        <button
          type="button"
          onClick={scrollDown}
          className="flex items-center justify-center hover:opacity-80 transition-opacity"
        >
          <img
            src="/whitearrow.svg"
            alt={translations.scrollDown}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />
        </button>
      </section>
    </div>
  );
};

export default HeroWithLang;
