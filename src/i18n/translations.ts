export type Language = "en" | "es";

// Define la estructura de las traducciones de proyectos para TypeScript
interface ProjectTranslation {
  title: string;
  description?: string;
  linkText?: string;
  comingSoon?: string;
}

export const translations = {
  en: {
    navBar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      role: "Frontend Developer",
      downloadCV: "Download CV",
      scrollDown: "Scroll Down"
    },
    aboutCard: {
      title: "About Me",
      name: "Mario Santos",
      role: "I'm a Developer focused primarily in Front End!",
      passion1: "Since I was a kid, electronics and computers have been my passion, and now I'm making it my profession.",
      passion2: "My second passion is music, and I really like to blend my two passions together.",
      description: "I'm a very curious person, always looking for new challenges and learning new things. Also, I'm very hardworking and always give my best in everything I do."
    },
    educationCard: {
      title: "Education",
      webDev: {
        title: "Web Development",
        level: "Superior Degree",
        institution: "UOC 2024-2025"
      },
      appDev: {
        title: "App Development",
        level: "Superior Degree",
        institution: "INS Pedralbes 2021-2023"
      },
      bachelor: {
        title: "Bachelor Degree",
        level: "Social Science",
        institution: "IES GOYA 2019-2021"
      },
      threejs: {
        title: "Three.js Course",
        level: "Online Course",
        institution: "Udemy 2024"
      },
      Python:{
        title: "Python WebScrapping Course",
        level: "Online Course",
        institution: "Udemy 2023"
      },
      Adminsitrative:{
        title: "Administrative Course",
        level: "Introduction Course",
        institution: "Hospital Clinic 2024"
    },
    },
    experienceCard: {
      title: "Experience",
      jobs: [
        {
          title: "React Front End Dev",
          company: "MSR 2023-2023"
        },
        {
          title: "Administrative",
          company: "Hospital Clinic 2024-2025"
        },
        {
          title: "Storage Manager",
          company: "Inditex ESP 2023-2024"
        },
        {
          title: "Cuissine & Logistics",
          company: "Aramark 2022-2024"
        }
      ]
    },
    projects: {
      heading: "PROJECTS",
      nilgrafic: {
        title: "NilGrafic",
        description: "Wordpress Web Page",
        linkText: "Click here to Discover"
      },
      divine: {
        title: "Divine Web",
        comingSoon: "Coming Soon"
      },
      uahorta: {
        title: "UA Horta",
        description: "Web Page for the Soccer Club Where I Work",
        linkText: "Click me!"
      }
    },
  es: {
    navBar: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      contact: "Contacto"
    },
    hero: {
      role: "Desarrollador Frontend",
      downloadCV: "Descargar CV",
      scrollDown: "Desliza Abajo"
    },
    aboutCard: {
      title: "Sobre Mí",
      name: "Mario Santos",
      role: "¡Soy un Desarrollador enfocado principalmente en Front End!",
      passion1: "Desde pequeño, la electrónica y los ordenadores han sido mi pasión, y ahora estoy haciendo de ello mi profesión.",
      passion2: "Mi segunda pasión es la música, y me gusta mezclar mis dos pasiones.",
      description: "Soy una persona muy curiosa, siempre buscando nuevos retos y aprendiendo cosas nuevas. Además, soy muy trabajador y siempre doy lo mejor de mí en todo lo que hago."
    },
    educationCard: {
      title: "Formación",
      webDev: {
        title: "Desarrollo Web",
        level: "Grado Superior",
        institution: "UOC 2024-2025"
      },
      appDev: {
        title: "Desarrollo de Aplicaciones",
        level: "Grado Superior",
        institution: "INS Pedralbes 2021-2023"
      },
      bachelor: {
        title: "Bachillerato",
        level: "Ciencias Sociales",
        institution: "IES GOYA 2019-2021"
      },
      threejs: {
        title: "Curso de Three.js ",
        level: "Curso Online ",
        institution: "Udemy 2024"
      },
      Python:{
        title: "Python Curso de WebScrapping ",
        level: "Curso Online",
        institution: "Udemy 2023"
      },
      Adminsitrative:{
        title: "Curso de Administrativo",
        level: "Introduccion a la administración",
        institution: "Hospital Clinic 2024"
    }
    },
    experienceCard: {
      title: "Experiencia",
      jobs: [
        {
          title: "Desarrollador Front End React",
          company: "MSR 2023-2023"
        },
        {
          title: "Administrativo",
          company: "Hospital Clinic 2024-2025"
        },
        {
          title: "Gestor de Almacén",
          company: "Inditex ESP 2023-2024"
        },
        {
          title: "Cocina y Logística",
          company: "Aramark 2022-2024"
        }
      ]
    },
    projects: {
      heading: "PROYECTOS",
      nilgrafic: {
        title: "NilGrafic",
        description: "Página Web Wordpress",
        linkText: "Haz clic para descubrir"
      },
      divine: {
        title: "Divine Web",
        comingSoon: "Próximamente"
      },
      uahorta: {
        title: "UA Horta",
        description: "Página Web del Club de Fútbol Donde Trabajo",
        linkText: "¡Haz clic aquí!"
        }
      }
    }
  }};