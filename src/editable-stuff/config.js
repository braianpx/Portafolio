import HifenixImg from "../assets/img/logos/hifenix_logo.jpg";
import PersonImg from "../assets/img/logos/person.png";
// IMAGENES DE PROYECTOS
// HI SURVEY
import HiSurveyImg1 from "../assets/img/projects/HiSurvey/1.png";
import HiSurveyImg2 from "../assets/img/projects/HiSurvey/2.png";
import HiSurveyImg3 from "../assets/img/projects/HiSurvey/3.png";
import HiSurveyImg4 from "../assets/img/projects/HiSurvey/4.png";
import HiSurveyImg5 from "../assets/img/projects/HiSurvey/5.png";
import HiSurveyImg6 from "../assets/img/projects/HiSurvey/6.png";
import HiSurveyImg7 from "../assets/img/projects/HiSurvey/7.png";
import HiSurveyImg8 from "../assets/img/projects/HiSurvey/8.png";
import HiSurveyImg9 from "../assets/img/projects/HiSurvey/9.png";
import HiSurveyImg10 from "../assets/img/projects/HiSurvey/10.png";
// HI ASSITANT
import HiChatAssistantImg1 from "../assets/img/projects/HiChatAssistant/1.png";
import HiChatAssistantImg2 from "../assets/img/projects/HiChatAssistant/2.png";
import HiChatAssistantImg3 from "../assets/img/projects/HiChatAssistant/3.png";
import HiChatAssistantImg4 from "../assets/img/projects/HiChatAssistant/4.png";
import HiChatAssistantImg5 from "../assets/img/projects/HiChatAssistant/5.png";
import HiChatAssistantImg6 from "../assets/img/projects/HiChatAssistant/6.png";
import HiChatAssistantImg7 from "../assets/img/projects/HiChatAssistant/7.png";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "black, black, black, black, black, black, black",

  firstName: "Braian",
  middleName: "Oscar",
  lastName: "Valdez",

  role: "Full Stack & Software Developer | QA Tester",
  specialization: "Especializado en React, NestJS y PostgreSQL",
  tagline: "Diseño y desarrollo aplicaciones web con foco en performance y mantenibilidad",

  icons: [
    {
      image: "fa-github",
      url: "https://github.com/braianpx",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/braianvaldez-dev/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Sobre Mi",
  imageLink: false, //require("../editable-stuff/braianvaldez.jpg") ||
  imageSize: 375,
  message:
    `Mi nombre es Braian, Full Stack Developer graduado de Henry Bootcamp 2023, vivo en la provincia de Tucumán, 
    Argentina junto con mis 6 gatos y con los 14 perros de mi familia. Soy alguien apasionado por el codigo, 
    Comprometido, responsable, sociable, creativo y con actitud positiva. Poseo amplios conocimientos y habilidades 
    que pueden contribuir significativamente. Me destaco por mi capacidad creativa, lo que me 
    permite generar nuevas ideas, soluciones y prácticas innovadoras. Asimismo, soy un colaborador comprometido y 
    poseo habilidades sociales que me permiten trabajar en equipo de manera efectiva.`,
    // `Mi nombre es Braian, Full Stack Developer graduado de Henry Bootcamp 2023, vivo en la provincia de Tucumán, 
    // Argentina junto con mis 6 gatos y con los 14 perros de mi familia. Soy alguien apasionado por el codigo, 
    // Comprometido, responsable, sociable, creativo y con actitud positiva.  Poseo amplios conocimientos y habilidades 
    // que pueden contribuir significativamente a mejorar la producción, el desarrollo, la administración y el diseño. 
    // Me destaco por mi capacidad creativa, lo que me permite generar nuevas ideas, 
    // soluciones y prácticas innovadoras. Asimismo, soy un colaborador comprometido y poseo habilidades sociales 
    // que me permiten trabajar en equipo de manera efectiva. Mi experiencia previa en proyectos grupales respalda 
    // mi capacidad para contribuir de manera significativa al éxito del proyecto.`,
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const projects = {
  show: true,
  heading: "Proyectos",
  gitHubUsername: "braianpx",
  projects: [
    {
      id: 1,
      completed: true,
      name: "Banco Saint Patrick",
      shortDescription:
        "Plataforma financiera con API REST y wallet virtual para gestión de transferencias y autenticación.",
      description: [
        "Saint Patrick Bank es una plataforma financiera diseñada para simular el funcionamiento de un banco digital.",
        "Desarrollé la API REST enfocada en autenticación, manejo de wallets, transferencias y control de acceso mediante roles.",
        "El proyecto permitió aplicar arquitectura modular, seguridad con tokens y persistencia en bases de datos relacionales."
      ],
      rol: "Back End Developer",
      modality: "individual",
      scope: "backend",
      responsive: false,
      features: [
        "Autenticación con JWT",
        "Gestión de wallets virtuales",
        "Transferencias entre cuentas",
        "Control de roles y permisos",
        "Arquitectura modular en NestJS"
      ],
      technologies: {
        frontEnd: [],
        backEnd: ["TypeScript", "NestJS", "Node.js", "PostgreSQL"]
      },
      image: null,
      images: [],
      link: null,
      repo: "https://github.com/Saint-Patrick-Patrick/Saint-Patrick-API",
      color: "green"
    },

    {
      id: 2,
      completed: true,
      name: "Psiconnect",
      shortDescription:
        "Plataforma full stack de terapia online con pagos, calendario y sistema de usuarios.",
      description: [
        "Proyecto final grupal del bootcamp Henry enfocado en atención psicológica online.",
        "Participé en el desarrollo tanto del frontend como del backend.",
        "Incluye autenticación, pagos, notificaciones, paneles administrativos y sistema de reseñas."
      ],
      rol: "Full Stack Developer",
      modality: "group",
      scope: "fullstack",
      responsive: true,
      features: [
        "Sistema de autenticación",
        "Calendario de turnos",
        "Pagos con pasarela integrada",
        "Panel admin y panel usuario",
        "Sistema de calificaciones"
      ],
      technologies: {
        frontEnd: ["JavaScript", "React", "Redux", "HTML", "CSS"],
        backEnd: ["Node.js", "Express", "PostgreSQL", "Sequelize"]
      },
      image: require("../assets/img/projects/Psiconnect.png"),
      images: [],
      link: "https://psiconnect.vercel.app",
      repo: "https://github.com/orgs/Psiconnect/repositories",
      color: "cadetblue"
    },

    {
      id: 3,
      completed: true,
      name: "Dogs PI",
      shortDescription:
        "Aplicación individual para consulta y gestión de razas de perros.",
      description: [
        "Proyecto individual desarrollado desde cero.",
        "Incluye API y SPA con búsqueda, filtros, ordenamiento y creación de nuevas razas.",
        "El objetivo fue consolidar conocimientos full stack y buenas prácticas."
      ],
      rol: "Full Stack Developer",
      modality: "individual",
      scope: "fullstack",
      responsive: true,
      features: [
        "Búsqueda avanzada",
        "Filtros y ordenamiento",
        "Creación de entidades",
        "Favoritos",
        "Autenticación básica"
      ],
      technologies: {
        frontEnd: ["JavaScript", "React", "Redux", "HTML", "CSS"],
        backEnd: ["Node.js", "Express", "PostgreSQL", "Sequelize"]
      },
      image: require("../assets/img/projects/Dogs-PI.png"),
      images: [],
      link: "https://dogs-pi-braianpx.vercel.app",
      repo: "https://github.com/braianpx/Dogs-Pi",
      color: "mediumturquoise"
    },

    {
      id: 4,
      completed: false,
      name: "Sistema de encuestas geolocalizadas",
      shortDescription:
        "Plataforma de encuestas con zonas, tracking en tiempo real y visualización en mapas.",
      description: [
        "Aplicación en desarrollo enfocada en encuestas de campo.",
        "Permite asignar zonas geográficas, visualizar recorridos y monitorear encuestadores en tiempo real.",
        "Integra mapas interactivos y WebSockets."
      ],
      rol: "Full Stack Developer",
      modality: "individual",
      scope: "fullstack",
      responsive: true,
      features: [
        "Asignación de zonas",
        "Tracking en tiempo real",
        "Mapas interactivos",
        "WebSockets",
        "Gestión de encuestas"
      ],
      technologies: {
        frontEnd: ["React", "Leaflet", "Tailwind"],
        backEnd: ["Node.js", "Express", "PostgreSQL"]
      },
      image: null,
      images: [],
      link: null,
      repo: null,
      color: "black"
    }
  ]
};


// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/braianvaldez.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/braianvaldez.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Habilidades",
  hardSkills: [
    { name: "JavaScript", img: require('../assets/img/logos/JavaScript-logo.png') },
    { name: "TypeScript", img: require('../assets/img/logos/Typescript-logo.png') },
    { name: "React", img: require('../assets/img/logos/react-logo.png') },
    { name: "Redux", img: require('../assets/img/logos/redux-logo.png') },
    { name: "Express", img: require('../assets/img/logos/express-logo.png') },
    { name: "SQL", img: require('../assets/img/logos/sql-logo.png') },
    { name: "NoSQL", img: require('../assets/img/logos/nosql-logo.jpg') },
    { name: "Node.js", img: require('../assets/img/logos/node-logo.jpg') },
    { name: "PostGreSQL", img: require('../assets/img/logos/postgresql-logo.png') },
    { name: "MongoDB", img: require('../assets/img/logos/mongodb-logo.png') },
    { name: "Typegoose", img: require('../assets/img/logos/typegoose-logo.webp') },
    { name: "Mongoose", img: require('../assets/img/logos/mongoose-logo.png') },
    { name: "Sequelize", img: require('../assets/img/logos/sequelize-logo.png') },
    { name: "WebSockets", img: require('../assets/img/logos/websocket-logo.png') },
    { name: "Scrum", img: require('../assets/img/logos/scrum-logo.png') },
    { name: "Trello", img: require('../assets/img/logos/trello-logo.png') },
    { name: "Git", img:  require('../assets/img/logos/git-logo.png') },
    { name:'NestJS', img: require('../assets/img/logos/nestjs-logo.png')},
  ],
  softSkills: [
    { name: "Trabajo En Equipo", img: false },
    { name: "Resolutivo", img: false },
    { name: "Empatía", img: false },
    { name: "Creativo", img: false },
    { name: "Curioso", img: false },
    { name: "Adaptable", img: false },
    { name: "Comunicativo", img: false },
    { name: "Solidario", img: false },
    { name: "Mente Abierta", img: false }
  ],
};

//CONTACTS

const contact = {
  show: true,
  heading: "Contactos",
  contacts:{
    email: 'braivaldez16@gmail.com',
    tel: '+54-381-201-9669',
    whatsApp: '+54-381-626-1327'
  },
  messages:{
    tel:'Celular llamando al numero:',
    wp:'WhatsApp al numero:',
    email:'Mail a:'
  }
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
//   heading: "Get In Touch",
//   message:
//     "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
//   email: "hashirshoaeb@gmail.com",
};

// editable-stuff/experiences.js

const experiences = {
  show: true,
  heading: "Experiencia Profesional",
  data: [
    {
      id: "hi-fenix",
      company: "Hi Fenix",
      linkedin: "https://www.linkedin.com/company/hifenix",
      web: "https://hifenix.com.ar/",
      image: HifenixImg,
      role: "Full Stack Developer | Software Developer | QA Tester",
      period: "Nov 2024 – Ene 2026",
      description:
        "Empresa enfocada en el desarrollo de servicios y consultoría tecnológica, con fuerte especialización en automatización conversacional con inteligencia artificial. Su producto principal, Hi Chat Assistant, permite a las empresas automatizar atención y ventas 24/7 en múltiples canales digitales.",
      projects: [
        {
          id: "hichat-assistant",
          name: "Hi Chat Assistant",
          description:
            "Microservicio de automatización de atención al cliente y ventas mediante inteligencia artificial, integrado en WhatsApp, Instagram, Facebook y web.",
          highlights: [
            "Diseñar un chat e implementación de mensajeria funcional",
            "Automatización estimada al 100% de la atención al cliente",
            "Diseñar un sistema que fomenta la conversación con los usuarios, incrementando las interacciones en un 60%",
            "Diseño de componentes escalables y reutilizables con Lit",
            "Comunicación en tiempo real mediante WebSockets y Socket.io",
            "Desarrollo de funcionalidades que permiten manejar estados locales y configurar opciones para personalizar y automatizar la experiencia del cliente",
            "Empaquetado y distribución del chatbot como paquete NPM",
            "Pruebas de rendimiento, estabilidad y validación funcional",
          ],
          techStack: [
            "JavaScript",
            "Lit",
            "Rollup",
            "HTML",
            "CSS",
            "WebSockets",
            "Socket.io",
            "React",
            "Tailwind",
          ],
          images: [ HiChatAssistantImg1, HiChatAssistantImg2,HiChatAssistantImg3, HiChatAssistantImg7, HiChatAssistantImg4, HiChatAssistantImg5, HiChatAssistantImg6 ], // <-- agregado
        },

        {
          id: "backoffice",
          name: "BackOffice",
          description:
            "Aplicación web y API interna para la gestión operativa y administrativa del ecosistema Hi Chat.",
          highlights: [
            "Implementación de vistas avanzadas con filtros y búsquedas eficientes",
            "Integración con APIs internas utilizando NestJS",
            "Refactorización de componentes y mejora de mantenibilidad",
            "Implementación de la funcionalidad para importar productos desde un archivo Excel",
            "Documentación técnica y testing funcional",
            "Gestión de endpoints e integración mediante hooks",
          ],
          techStack: [
            "JavaScript",
            "TypeScript",
            "React",
            "Tailwind",
            "Vite.js",
            "NestJS",
            "PostgreSQL",
            "JWT",
          ],
          images: [], // <-- agregado
        },

        {
          id: "admin-panel",
          name: "Panel Admin HiChat",
          description:
            "Frontend administrativo para la gestión de clientes, productos y configuraciones del sistema.",
          highlights: [
            "Interfaz organizada por columnas para manejo eficiente de datos",
            "Flujos protegidos mediante JWT y validación de sesión",
            "Integración y gestión de suscripciones y planes de servicio",
            "Implementación de métricas, cálculos de negocio y visualización de estadísticas mediante gráficas",
            "Integración de un panel de gestión y manejo de usuarios y empresas",
            "Optimización de UX y mejoras visuales continuas",
          ],
          techStack: [
            "JavaScript",
            "React",
            "Vite.js",
            "Tailwind",
            "HTML",
            "CSS",
          ],
          images: [], // <-- agregado
        },
      ],
    },

    {
      id: "freelance",
      company: "Freelance",
      linkedin: "",
      web: "",
      image: PersonImg,
      role: "Independent Full Stack Developer",
      period: "Jun 2025 – Ago 2025",
      description:
        "Desarrollo independiente de aplicaciones, software y sistemas avanzados desde cero, enfocadas en soluciones escalables, optimizables y mantenibles, implementando arquitectura avanzada, patrones de diseño y buenas prácticas de ingeniería de software.",
      projects: [
        {
          id: "hi-survey",
          name: "Hi Survey",
          description:
            "Plataforma privada de encuestas en tiempo real con panel administrativo avanzado y visualización geográfica.",
          highlights: [
            "Sistema de encuestas en tiempo real con comunicación instantánea",
            "Implementar panel administrativo con gestión de roles y reportes dinámicos",
            "Visualización de zonas y datos mediante Leaflet y GeoJSON",
            "Diseño e implementación de base de datos relacional",
            "Desarrollo de funcionalidad para analizar resultados de encuestas y generar reportes PDF de forma dinámica",
            "implementar funcionalidad que permita monitorear en tiempo real la ubicación de los encuestadores",
          ],
          techStack: [
            "TypeScript",
            "React",
            "Vite.js",
            "PostgreSQL",
            "WebSockets",
            "Leaflet",
            "GeoJSON",
          ],
          images: [HiSurveyImg1, HiSurveyImg2, HiSurveyImg3, HiSurveyImg4, HiSurveyImg5, HiSurveyImg6, HiSurveyImg7, HiSurveyImg8, HiSurveyImg9, HiSurveyImg10 ], // <-- agregado
        },
      ],
    },
  ],
};


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, projects, skills, leadership, getInTouch, experiences, contact };
