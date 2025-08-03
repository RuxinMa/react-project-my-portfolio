import { nanoid } from 'nanoid';

import project10 from '../assets/images/tours.png';
import project9 from '../assets/images/packpilot.png';
import project8 from '../assets/images/codec.png';
import project7 from '../assets/images/facts.png';
import project6 from '../assets/images/github-user.png';
import project5 from '../assets/images/portfolio.png'
import project4 from '../assets/images/shopping-cart.png'
import project3 from '../assets/images/backroads.png';
import project2 from '../assets/images/booklist.png';
import project1 from '../assets/images/yyds.png';

export const projects = [
    {
    id: nanoid(),
    img: project10,
    url: 'https://toursapp-production.up.railway.app/',
    github: 'https://github.com/RuxinMa/tours-app',
    title: 'Tours App',
    role: 'Full Stack Developer',
    text: 'A full-stack tour booking web application built with Node.js, Express, and MongoDB. Features user authentication, tour browsing, secure payments, and email notifications.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project9,
    url: 'https://packpilot-frontend.vercel.app',
    github: 'https://github.com/RuxinMa/packpilot',
    title: 'Warehouse Packing Management Platform: PackPilot',
    role: 'Full Stack Developer',
    text: 'Led a 6-student team developing a full-stack warehouse management platform that integrates AI placement algorithms and visualization solutions to optimize packing efficiency.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project8,
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7256551222000660482/',
    github: 'https://github.com/RuxinMa/sep-codec',
    title: 'Industry-Academia Collaboration: Audio Codec',
    role: 'Software Developer',
    text: 'Collaborated with MAPTEK, a leading mining technology company in SA, we developed an innovative audio codec solution for underground mining communication systems.',
    src: 1,
  },
    {
    id: nanoid(),
    img: project7,
    url: 'https://rm-react-project-facts.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-facts',
    title: 'Share a Fact',
    role: 'Full-Stack Developer',
    text: 'Using JavaScript, React, HTML, CSS, SupaBase and Auth0 to build a full-stack web application. Highlight features include discover facts, login and post a new fact, vote for facts.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project6,
    url: 'https://rm-react-project-github-users.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-github-users',
    title: 'GitHub Users',
    role: 'Front-End Developer',
    text: 'Using JavaScript, React, HTML, CSS, GitHub API, Auth0 and Fusion Charts to craft a dynamic and responsive site for GitHub user search and data presentation.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project5,
    url: 'https://ruxinma.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-my-portfolio',
    title: 'My Portfolio',
    role: 'Front-End Developer',
    text: "Implementing a responsive personal website using JavaScript, React, HTML, Vite, and Tailwind to showcase skills and projects in a  structured and intuitive way.",
    src: 1,
  },
  {
    id: nanoid(),
    img: project4,
    url: 'https://rm-react-project-shopping-cart.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-shopping-cart',
    title: 'Shopping Cart',
    role: 'Front-End Developer',
    text: 'Utilizing React Redux to handle various states and actions associated with cart items seamlessly, including increasing, decreasing, and removing items.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project3,
    url: 'https://rm-react-project-backroads.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-backroads',
    title: 'Backroads APP',
    role: 'Front-End Developer',
    text: 'Extensively employing JavaScript ES6+ and React componentization to implement a responsive website for travel applications to showcase their products.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project2,
    url: 'https://rm-react-project-booklist.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-booklist',
    title: 'Booklist',
    role: 'Front-End Developer',
    text: "Creating a static and responsive webpage inspired by Amazon's book seller list, showcasing a comprehensive display of books and their information.",
    src: 1,
  },
  {
    id: nanoid(),
    img: project1,
    url: 'https://www.baidu.com/s?wd=yyds%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D',
    github: 'https://github.com/RuxinMa/ba-project-seo',
    title: 'Search Engine Optimization',
    role: 'Bussiness Analysis (Baidu Co.)',
    text: "The project is called Improve Users' Perception of Featured Snippet, which is mainly optimized and innovated to meet users'search needs and experience.",
    src: 2,
  },
];
