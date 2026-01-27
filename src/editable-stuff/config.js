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
//Saint Patrick
import SaintPatrickLogo from "../assets/img/projects/SP.png";
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
  specialization: "Especializado en React, Next.js, NestJS y PostgreSQL",
  tagline: "Diseño y desarrollo aplicaciones con foco en arquitectura, performance y mantenibilidad",

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
  heading: "Sobre mí",
  imageLink: require("./braianvaldez.jpg"),
  imageSize: 375,
  message: `
Mi nombre es Braian y soy Full Stack & Software Developer. Me formé en Henry Bootcamp en 2023 y desde entonces trabajo en el desarrollo de software y aplicaciones de escritorio, mobile y web, participando tanto en frontend como en backend.

Tengo experiencia construyendo aplicaciones completas y microservicios, con foco en una arquitectura clara, escalable y bien comunicada entre sus componentes. Trabajo principalmente con React y NestJS, utilizando JavaScript y TypeScript, junto a bases de datos como PostgreSQL y MongoDB.

He participado en el desarrollo de APIs, sistemas de autenticación, paneles de administración, soluciones e-commerce y aplicaciones tipo SaaS, siempre orientadas a resolver necesidades reales.

Me enfoco en escribir código entendible, mantenible y con buen rendimiento, pensando los proyectos como soluciones a largo plazo y no solo como entregables. Me considero una persona responsable y comprometida, disfruto el trabajo en equipo y participar en proyectos sólidos y de mayor escala donde pueda aportar valor y seguir creciendo profesionalmente.
`,
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
      modality: "group",
      scope: "backend",
      responsive: false,
      features: [
        "Implementar el login y registro con JWT para manejar sesiones seguras en el backend.",
        "Desarrollar la lógica de las billeteras virtuales para el control de saldos y depósitos.",
        "Programar el flujo de transferencias con validaciones de saldo y registro de movimientos.",
        "Diseñar un sistema de permisos por roles para separar las acciones de clientes y administradores.",
        "Estructurar la API en módulos con NestJS para que el código sea limpio y fácil de escalar."
      ],
      technologies: {
        frontEnd: [],
        backEnd: ["TypeScript", "NestJS", "Node.js", "PostgreSQL","JWT"]
      },
      image: SaintPatrickLogo,
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
        "Diseñar los perfiles de usuario con vistas y permisos específicos para psicólogos y pacientes.",
        "Implementar un calendario de turnos que permite reservar y cancelar citas en tiempo real.",
        "Integrar la pasarela de pagos para que los pacientes abonen sus sesiones desde la web.",
        "Desarrollar los paneles de control para gestionar la base de datos y moderar el contenido.",
        "Programar el sistema de reseñas para que los usuarios puedan calificar el servicio recibido.",
        "Configurar el envío de correos automáticos para confirmar turnos y recuperar contraseñas."
      ],
      technologies: {
        frontEnd: ["JavaScript", "React", "Redux", "HTML", "CSS", "Cloudinary", "firebase"],
        backEnd: ["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT", "Sockets"]
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
        "Incluye API y SPA con búsqueda, filtros, ordenamiento y creación de datos.",
        "El objetivo fue consolidar conocimientos full stack."
      ],
      rol: "Full Stack Developer",
      modality: "individual",
      scope: "fullstack",
      responsive: true,
      features: [
        "Desarrollar un buscador que muestra resultados al instante mientras el usuario escribe.",
        "Implementar filtros combinados para organizar los perros por temperamento, peso y origen.",
        "Diseñar el formulario de creación con validaciones para evitar errores al cargar nuevas razas.",
        "Programar la lógica de ordenamiento alfabético y por peso de los resultados.",
        "Crear una sección de favoritos para guardar y consultar razas específicas rápidamente."
      ],
      technologies: {
        frontEnd: ["JavaScript", "React", "Redux", "HTML", "CSS" ],
        backEnd: ["Node.js", "Express", "PostgreSQL", "Sequelize" ]
      },
      image: require("../assets/img/projects/Dogs-PI.png"),
      images: [],
      link: "https://dogs-pi-braianpx.vercel.app",
      repo: "https://github.com/braianpx/Dogs-Pi",
      color: "mediumturquoise"
    },
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

  technologies: [
    {
      category: "Frontend",
      items: [
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Redux Toolkit",
        "React Native",
        "HTML5",
        "CSS3",
        "Sass",
        "Tailwind CSS",
        "Bootstrap",
        "Vite",
        "Lit",
        "Leaflet",
        "GeoJSON"
      ]
    },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
      "Swagger"
    ]
  },
    {
      category: "Bases de Datos",
      items: [
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "NoSQL",
      ]
    },
    {
      category: "ORMs",
      items: [
        "Sequelize",
        "TypeORM",
        "Mongoose",
        "Typegoose"
      ]
    },
    {
      category: "Herramientas y Metodologías",
      items: [
        "Git",
        "Scrum",
        "Trello",
        "Postman",
        "Taiga",
        "Jest"
      ]
    }
  ],

  hardSkills: [
    "Desarrollo de aplicaciones full stack orientadas a escalabilidad y mantenibilidad",
    "Diseño e implementación de APIs REST robustas, pensadas para distintos tipos de clientes",
    "Definición y organización de arquitecturas backend modulares con NestJS",
    "Diseño de soluciones basadas en microservicios según requerimientos técnicos y de negocio",
    "Implementación de mecanismos de autenticación y autorización utilizando JWT y sesiones",
    "Modelado y gestión de bases de datos relacionales y no relacionales, priorizando consistencia y performance",
    "Optimización de rendimiento y experiencia de usuario en aplicaciones frontend complejas",
    "Implementación de comunicación en tiempo real para casos de uso críticos mediante WebSockets",
    "Diseño de arquitectura, diagramas y flujos como parte del proceso de toma de decisiones técnicas",
    "Aplicación de patrones de diseño en frontend y backend para resolver problemas recurrentes"
  ],

softSkills: [
  "Trabajo colaborativo en equipos multidisciplinarios",
  "Comunicación clara y efectiva en contextos técnicos y de negocio",
  "Capacidad para analizar problemas complejos y proponer soluciones prácticas",
  "Adaptabilidad frente a cambios de requerimientos y contextos técnicos",
  "Pensamiento analítico aplicado a la toma de decisiones técnicas",
  "Autonomía para organizar tareas y cumplir objetivos",
  "Responsabilidad y compromiso con la calidad del trabajo entregado"
]
};


//CONTACTS

const contact = {
  show: true,
  heading: "¡Hablemos!",
  contacts: {
    email: 'braivaldez16@gmail.com',
    tel: '+54-381-201-9669',
    address: 'Tucumán, Argentina'
  },
  messages: {
    tel: 'Llamada directa',
    wp: 'WhatsApp Business',
    email: 'Correo Electrónico'
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
            "Diseñé la interfaz del chat web enfocada en que sea fácil de usar y convierta consultas en ventas.",
            "Desarrollé los componentes web con Lit para que el chat se pueda insertar en cualquier página sin importar la tecnología que use.",
            "Configuré la comunicación en tiempo real usando WebSockets y Socket.io para que los mensajes lleguen al instante.",
            "Manejé estados locales complejos para que el chat se pueda personalizar según la marca de cada cliente.",
            "Preparé el chatbot como un paquete NPM, permitiendo que otros desarrolladores lo instalen y configuren rápido.",
            "Optimicé el peso final del código con Rollup para no afectar la velocidad de carga de las páginas donde se instala.",
            "Logramos que la interacción de los usuarios subiera un 60% gracias al sistema de mensajes proactivos.",
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
            "Creé vistas con filtros y buscadores optimizados para manejar grandes listas de datos sin lentitud.",
            "Desarrollé un importador de productos desde Excel para que los clientes carguen sus catálogos masivamente.",
            "Mejoré el código existente aplicando patrones de diseño para que sea más fácil de mantener y escalar.",
            "Implementé la seguridad con JWT para proteger el acceso a la información administrativa.",
            "Centralicé la gestión de estados para que los cambios en el panel se reflejen correctamente en toda la app.",
            "Escribí la documentación técnica y realicé tests funcionales del core de la aplicación."
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
            "Redis",
            "MongoDB",
            "AWS",
            "HTML",
            "CSS"
          ],
          images: [], // <-- agregado
        },

        {
          id: "admin-panel",
          name: "Panel Admin HiChat",
          description:
            "Frontend administrativo para la gestión de clientes, productos y configuraciones del sistema.",
          highlights: [
            "Diseñé un panel organizado que facilita la gestión de múltiples empresas y usuarios en un solo lugar.",
            "Conecté el sistema de suscripciones y planes para automatizar el acceso a las funciones premium.",
            "Creé dashboards con gráficas para que los clientes vean sus estadísticas y rendimiento en tiempo real.",
            "Trabajé en mejoras constantes de la interfaz basadas en el feedback de los usuarios para hacerla más intuitiva.",
            "Programé los cálculos de negocio para mostrar KPIs y métricas de uso de forma clara."
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
            "Implementé WebSockets para que las respuestas de las encuestas lleguen al panel en el mismo segundo en que se envían.",
            "Usé Leaflet y GeoJSON para mostrar mapas con las zonas cubiertas y la ubicación de los encuestadores.",
            "Creé un sistema para monitorear en vivo por dónde se mueven los encuestadores durante la jornada.",
            "Desarrollé una función que genera reportes en PDF de forma automática con los resultados de las encuestas.",
            "Diseñé la base de datos desde cero para que la información esté bien organizada y sea segura.",
            "Armé un panel de administración con permisos para que cada usuario vea solo lo que le corresponde."
          ],
          techStack: [
            "TypeScript",
            "React",
            "Vite.js",
            "PostgreSQL",
            "WebSockets",
            "Leaflet",
            "GeoJSON",
            "HTML",
            "CSS"
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
