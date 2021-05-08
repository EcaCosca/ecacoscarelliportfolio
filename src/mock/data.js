import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Enrique Coscarelli | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Enrique Coscarelli Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'HELLO WORLD!',
  name: 'Enrique Coscarelli',
  subtitle: 'I am a web developer, let me show you some of my work.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Full stack web developer 👨‍💻 with a background in sound engineering 🔈. After over a decade of work in the sound field I came to the conclusion that it was time to take it a step further and become a web developer. 💪',
  paragraphTwo:
    'Jack of all trades, I like to learn new languages constantly & different disciplines. Some of the languages I use programming are Javascript ES6, React, Node JS, Express, MongoDB, HTML5 & CSS3. Im looking for a team to become part of where my skills are tested and further grow in the web development world anywhere in Europe 📈. Do our goals align? Lets connect! 🙌',
  paragraphThree:
    'I have lived and worked in China 🇨🇳, Canada 🇨🇦, United States 🇺🇸, Chile 🇨🇱, Argentina 🇦🇷, Spain 🇪🇸 and Switzerland 🇨🇭. Im not shy when it comes to exploring new cultures and I take pride in saying that the term comfort zone does not apply to me.😁',
  resume: 'https://drive.google.com/file/d/1LPITbSJ3M1oLayKbuN8ZMFvsic-_V7b3/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SLM.jpg',
    title: 'Carolina Coscarelli Portfolio',
    info: 'This project shows a Portfolio done for Carolina Coscarelli.',
    info2: 'I used ReactJS and Gatsby',
    url: 'https://www.carolinacoscarelli.com/',
    repo: 'https://github.com/EcaCosca/CaroPortfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'aora.png',
    title: 'AORA',
    info:
      'In Aora, users will take fitness classes from an instructor in a live feed wherever and whenever they want. Users can schedule classes depending on their time availability and keep a log of classes they have taken in the past.',
    info2: 'Created our own date component from scratch, filter and 2 databases.',
    url: 'https://aora.herokuapp.com/',
    repo: 'https://github.com/mirko1075/Aora', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dataBASE.png',
    title: 'dataBASE',
    info:
      'dataBASE is the resource for all BASE jumpers around the world to document different exit points and check weather conditions in real time',
    info2:
      'Top features include Hypsographic map and the use of a weather API. Technologies used Material UI, ReactJS and Heroku.',
    url: 'https://exitpointdatabase.herokuapp.com/',
    repo: 'https://github.com/EcaCosca/dataBASE-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pocketlife.png',
    title: 'Pocket Life',
    info:
      'Developed this game after a colaboration with many other developers on an open source project',
    info2: 'The technologies used include Unity and C#',
    url: '',
    repo: 'https://github.com/EcaCosca/PocketLife', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'enriquecoscarelli@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/EcaCoscarelli',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ecacoscarelli/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/enrique-coscarelli/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/EcaCosca',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
