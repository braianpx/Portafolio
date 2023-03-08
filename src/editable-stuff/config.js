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
  imageLink: require("../editable-stuff/braianvaldez.jpg"),
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
const repos = {
  show: true,
  heading: "Proyectos",
  gitHubUsername: "braianpx", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
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

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, contact };
