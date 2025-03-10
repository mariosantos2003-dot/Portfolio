import React from 'react';

const NavBarWithLang = ({ translations, currentLang, enURL = '/', esURL = '/es' }) => {
  // Funciones de navegación
  const goAbout = () => {
    const mainSection = document.getElementById('main-section');
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goSkills = () => {
    const skillSection = document.getElementById("skills");
    if(skillSection) {
      skillSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goContact = () => {
    const contactSection = document.getElementById("contact-section");
    if(contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lógica para cambiar de idioma
  const isSpanish = currentLang === 'es';

  return (
    <section>
      <nav className="border-gray-200 bg-primary-dark">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            
          </span>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page">
                    {translations.home}
                  </a>
                </button>
              </li>
              <li>
                <button onClick={goAbout} id="about-btn">
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    {translations.about}
                  </a>
                </button>
              </li>

              <li>
                <button onClick={goSkills}>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  {translations.skills}
                </a>
                </button>
              </li>
              
              <li>
                <button onClick={goContact}>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  {translations.contact}
                </a>
                </button>
              </li>
              
              {/* Selector de idioma */}
              <li className="flex items-center gap-2">
                <a 
                  href={enURL} 
                  className={`text-sm ${!isSpanish ? 'font-bold text-blue-500' : 'text-gray-400'} hover:text-blue-700 transition-colors`}
                >
                  EN
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href={esURL} 
                  className={`text-sm ${isSpanish ? 'font-bold text-blue-500' : 'text-gray-400'} hover:text-blue-700 transition-colors`}
                >
                  ES
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBarWithLang;