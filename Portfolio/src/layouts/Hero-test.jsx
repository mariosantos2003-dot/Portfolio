import React from 'react';

const Hero = () => {
 
        const scrollDown = () => {
            const mainSection = document.querySelector('.bg-primary-dark.min-h-screen');
            if (mainSection) {
                // Obtener la posición de la sección Main.astro
                const offset = mainSection.getBoundingClientRect().top + window.scrollY;
                // Desplazar hacia el centro de la sección
                const targetPosition = offset + (mainSection.offsetHeight / 4);
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            } else {
                console.log('No se encontró la sección principal');
            }
        };

    return (
        <div className='pt-90'>
            {/* Hero Section */}
            <section className="bg-primary mt-24  ml-10 font-bold">
                <h1 className='text-7xl'>Mario Santos</h1>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-7xl">
                    FrontEnd Developer
                </h2>
                
            </section>

            {/* Main Content Section */}
            <section id="main-content" className="bg-primary mr-10 text-4xl font-bold text-right mt-20">
                <h1>Photo f</h1>
            </section>

            {/* Scroll Button */}
            <section className="bg-primary flex items-center justify-center pt-20 ">
                <button
                    type="button"
                    onClick={scrollDown}
                    className="flex items-center justify-center"
                >
                    <img
                        src="/whitearrow.svg"
                        alt="Scroll Down Arrow"
                        className="w-20 h-20"
                    />
                </button>
            </section>
        </div>
    );
};

export default Hero;
