// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "black, black, black, #ecf0f1, black, black, black",
  firstName: "Braian",
  middleName: "Oscar",
  lastName: "Valdez",
  message: "Full Stack Web Developer",
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
  imageLink: null,
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
  projects:[
    {
      completed:true,
      name:'Banco Saint Patrick',
      description:[`Saint Patrick Bank es una plataforma financiera que ofrece a sus usuarios una 
      wallet online de fácil acceso y uso, que permite al usuario agregar tarjetas externas y realizar 
      transferencias a distintos bancos.`,
      `Cuenta con una API REST y SPA, mi aporte se enfocó en el desarrollo de la API REST, que incluye 
      funcionalidades como tokens, filtros y manejo de datos, transferencias, creación de tarjetas de débito 
      del banco, opciones para agregar tarjetas externas, creación de billeteras virtuales únicas por usuario 
      y registro de usuarios.`],
      rol:'Back End Developer',
      responsive:false,
      technologies:{
        frontEnd:[null],
        backEnd:['TypeScript','Nest','Express','PostgreSQL','TypeOrm','node.js']
      },
      image:null,
      link:null,
      repo:'https://github.com/Saint-Patrick-Patrick/Saint-Patrick-API',
      color:'green'
    },
    {
      completed:true,
      name:'Psiconnect',
      description:[
      `Psiconnect es una plataforma en línea que ofrece servicios de asesoramiento y terapia 
      psicológica, creada como proyecto final del programa de formación en desarrollo web Full Stack de 
      SoyHenry. Su principal objetivo es brindar a los usuarios una experiencia de atención psicológica 
      personalizada y accesible en cualquier momento y lugar.`,
      `Cuenta con una API REST y SPA, mi aporte no se enfonco en el desarrollo de una en general sino en el desarrollo de ambas, 
      incluye la implementación de diversas funcionalidades, tales como la búsqueda, filtrado y ordenamiento 
      de información, inicio de sesión para administradores y usuarios, registro de usuarios, calendario, notificaciones 
      por correo electrónico, pasarela de pagos, paneles de administrador y usuario, sistema de calificaciones y reseñas 
      de usuarios, entre otras. Todo esto con el objetivo de proporcionar una experiencia de usuario fluida y eficiente.`],
      // description:`Api Rest y SPA de una red social de psicólogos donde ofrecen sus servicios que incluye: Búsqueda, Filtrado, Ordenamiento, Inicio de sesión 
      // admin/usuario, Registro de usuario, calendario, notificaciones por mail, pasarela de pagos, 
      // paneles de admin/usuario, calificaciones de usuario, reseña de usuario y más.`,
      rol:'Full Stack Developer',
      responsive:true,
      technologies:{
        frontEnd:['JavaScript','React','Redux-Toolkit','HTML','CSS'],
        backEnd:['JavaScript','Node.js','Express','Sequelize','PostgreSQL','FireBase','Cloudinary']
      },
      image:require('../assets/img/projects/Psiconnect.png'),
      link:'https://psiconnect.vercel.app',
      repo:'https://github.com/orgs/Psiconnect/repositories',
      color:'cadetblue'
    },
    {
      completed:true,
      name:'Terapeando',
      description:[`Aplicacion web de terapia online que conecta a usuarios y psicólogos con el objetivo de facilitar el 
      acceso a la salud mental.`,
      `cuenta con una API REST y una SPA, mi aporte se enfoco en el desarrollo de la API REST.
      incluye las siguientes funcionalidades:sistema de reservas, inicio de sesión con Google y simple login, integración 
      con Stripe para pagos, correos de confirmación y recuperación de contraseña con Nodemailer, Google Maps API, un blog, 
      filtros y ordenamiento, y más`
      ],
      rol:'Back End Developer',
      responsive:true,
      technologies:{
        frontEnd:[null],
        backEnd:['TypeScript','Express','MongoDB','Typegoose','Mongoose','Node.js']
      },
      image:require('../assets/img/projects/Terapeando.png'),
      link:'https://terapeando.vercel.app',
      repo:'https://github.com/DaniHellN25/Proyecto-Grupal',
      color:'wheat'
    },
    {
      completed:false,
      name:'Tienda Samira',
      description:[],
      rol:'Full Stack Developer',
      responsive:true,
      technologies:{
        frontEnd:['JavaScript','React','Redux-Toolkit','HTML','CSS','Chakra UI'],
        backEnd:['TypeScript','Express','Sequelize','PostgreSQL','Node.js']
      },
      image:null,
      link:null,
      repo:null,
      color:'black'
    },
    {
      completed:true,
      name:'Dogs Pi',
      description:[`Dogs Pi es una aplicación web desarrollada como Proyecto Individual para Henry Bootcamp,
      Su objetivo es compartir informacion sobre distintas razas de perros.`,`La aplicación cuenta con una API y una SPA,
      ambas fueron desarrolladas y diseñadas solo por mi. incluye funcionalidades como: busqueda por nombre, crear nuevas 
      razas, filtros y ordenamiento, información detallada de cada raza, crear una cuenta, posibilidad de agregar razas a favoritos,
      inicio de sesion y registro.`],
      rol:'Full Stack Developer',
      responsive:true,
      technologies:{
        frontEnd:['JavaScript','React','Redux','HTML','CSS'],
        backEnd:['JavaScript','Node.js','Express','Sequelize','PostgreSQL']
      },
      image:require('../assets/img/projects/Dogs-PI.png'),
      link:'https://dogs-pi-braianpx.vercel.app',
      repo:'https://github.com/braianpx/Dogs-Pi',
      color:'mediumturquoise'
    },
    {
      completed:true,
      name:'Weather App',
      description:[`Weather App es una aplicación web desarrollada de manera independiente que permite 
      a los usuarios ver el clima actual en diferentes ciudades del mundo.`, 
      `Incluye una API REST y una SPA y cuenta con funciones como registro de usuarios, capacidad de 
      agregar ciudades a favoritos y visualización de información detallada o resumida del clima.`],
      rol:'Full Stack Developer',
      responsive:true,
      technologies:{
        frontEnd:['JavaScript','React','Redux','HTML','CSS','Bootstrap'],
        backEnd:['TypeScript','Express','MongoDB','Typegoose','Mongoose']
      },
      image:require('../assets/img/projects/weather-app.png'),
      link:null,
      repo:'https://github.com/braianpx/Weather-App',
      color:'black'
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
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, projects, skills, leadership, getInTouch, experiences, contact };
