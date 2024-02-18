import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaPython, FaTerminal, FaDatabase, FaProjectDiagram, FaMobile, FaLaptop } from 'react-icons/fa';

import project1 from './images/github-user.png';
import project2 from './images/portfolio.png'
import project3 from './images/shopping-cart.png'
import project4 from './images/backroads.png';
import project5 from './images/booklist.png';
import project6 from './images/yyds.png';


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-indigo-500' />,
    text: 'Exceptional at creating visually appealing and responsive websites, enhancing user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-indigo-500' />,
    text: 'Expertise in JavaScript, Building interactive and dynamic web applications with seamless user interactions.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-indigo-500' />,
    text: 'Developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Python C',
    icon: <FaPython className='h-16 w-16 text-indigo-500' />,
    text: 'A valuable skill set for both front-end and full-stack development roles, ensuring versatile and efficient coding solutions.',
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <FaTerminal className='h-16 w-16 text-indigo-500' />,
    text: 'Ensuring collaborative and organized code management,  showcasing a commitment to streamlined development processes.',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <FaDatabase className='h-16 w-16 text-indigo-500' />,
    text: 'Adept in leveraging MySQL for comprehensive data organization and analysis, aligning seamlessly with full-stack development',
  },
  {
    id: nanoid(),
    title: 'Project Management',
    icon: <FaProjectDiagram className='h-16 w-16 text-indigo-500' />,
    text: 'Proficient in project management, leading projects with a focus on organization, efficiency, and successful delivery.',
  },
  {
    id: nanoid(),
    title: 'User Acceptance Testing',
    icon: <FaMobile className='h-16 w-16 text-indigo-500' />,
    text: 'Skilled in user acceptancetesting, ensuring consistent and optimal experiences across responsive websites.',
  },
  {
    id: nanoid(),
    title: 'Requirement Understanding and Interpretation',
    icon: <FaLaptop className='h-16 w-16 text-indigo-500' />,
    text: 'Highly skilled in receiving, understanding and interpreting needs into effective technical solutions to ensure alignment with project objectives.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: 'https://rm-react-project-github-users.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-github-users',
    title: 'GitHub Users',
    role: 'Front-End Developer',
    text: 'Using JavaScript, React, HTML, CSS, GitHub API, Auth0 and Fusion Charts to craft a dynamic and responsive site for GitHub user search and data presentation.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project2,
    url: 'https://ruxinma.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-my-portfolio',
    title: 'My Portfolio',
    role: 'Front-End Developer',
    text: "Implementing a responsive personal website using JavaScript, React, HTML, Vite, and Tailwind to showcase skills and projects in a  structured and intuitive way.",
    src: 1,
  },
  {
    id: nanoid(),
    img: project3,
    url: 'https://rm-react-project-shopping-cart.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-shopping-cart',
    title: 'Shopping Cart',
    role: 'Front-End Developer',
    text: 'Utilizing React Redux to handle various states and actions associated with cart items seamlessly, including increasing, decreasing, and removing items.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project4,
    url: 'https://rm-react-project-backroads.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-backroads',
    title: 'Backroads APP',
    role: 'Front-End Developer',
    text: 'Extensively employing JavaScript ES6+ and React componentization to implement a responsive website for travel applications to showcase their products.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project5,
    url: 'https://rm-react-project-booklist.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-booklist',
    title: 'Booklist',
    role: 'Front-End Developer',
    text: "Creating a static and responsive webpage inspired by Amazon's book seller list, showcasing a comprehensive display of books and their information.",
    src: 1,
  },
  {
    id: nanoid(),
    img: project6,
    url: 'https://www.baidu.com/s?wd=yyds%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D',
    github: 'https://github.com/RuxinMa/ba-project-seo',
    title: 'Search Engine Optimization',
    role: 'Bussiness Analysis (Baidu Co.)',
    text: "The project is called Improve Users' Perception of Featured Snippet, which is mainly optimized and innovated to meet users'search needs and experience.",
    src: 2,
  },
];
