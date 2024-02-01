import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaPython, FaTerminal, FaDatabase, FaProjectDiagram, FaMobile, FaLaptop } from 'react-icons/fa';

import project2 from './images/backroads.png';
import project3 from './images/booklist.png';


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
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
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
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    role: 'Front-End Developer',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project2,
    url: 'https://rm-react-project-backroads.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-backroads',
    title: 'Backroads APP',
    role: 'Front-End Developer',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project3,
    url: 'https://rm-react-project-booklist.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-booklist',
    title: 'Booklist',
    role: 'Front-End Developer',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    src: 1,
  },
  {
    id: nanoid(),
    img: project2,
    url: 'https://rm-react-project-booklist.netlify.app/',
    github: 'https://github.com/RuxinMa/react-project-booklist',
    title: 'Search Engine Optimization',
    role: 'Bussiness Analysis',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    src: 2,
  },
];
