import React from 'react';

const Hero = () => {
    const scrollDown = () => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            const offset = mainContent.getBoundingClientRect().top + window.scrollY;
            const additionalOffset = 100; // Ajusta este valor para desplazar más abajo
            window.scrollTo({
                top: offset - additionalOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='pt-90'>
            {/* Hero Section */}
            <section className="bg-primary mt-24 text-7xl ml-10 font-bold">
                <h1>Mario Santos</h1>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    FullStack Developer
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
