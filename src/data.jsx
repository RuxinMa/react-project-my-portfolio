import { nanoid } from 'nanoid';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaDatabase, FaSketch, FaProjectDiagram} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiAmazonaws, SiMysql } from 'react-icons/si';
import { IoTerminal } from "react-icons/io5";
import project8 from './images/codec.png';
import project7 from './images/facts.png';
import project6 from './images/github-user.png';
import project5 from './images/portfolio.png'
import project4 from './images/shopping-cart.png'
import project3 from './images/backroads.png';
import project2 from './images/booklist.png';
import project1 from './images/yyds.png';


export const links = [
  { id: nanoid(), href: '/', text: 'home' },
  { id: nanoid(), href: '/about', text: 'about' },
  { id: nanoid(), href: '/projects', text: 'projects' },
];

export const experiences = [
  {
    id: nanoid(),
    duration:'11/2024 - 02/2025',
    company: "Ravi's Study Program",
    type: '',  // optional
    location:'Adelaide',
    decription:"Joined Ravi's Study Program in Uni Adelaide, gaining hands-on experience in algorithm design and data structures through theoretical and practical exercises. Successfully completed all tasks and advanced to the Intermediate level.",
    url: '', // optional
    url_info: '', // optional
    keyword: 'skills', // optional
    words: ['Python', 'Algorithm Design', 'Data Structure', 'Time Management'] // optional
  },
  {
    id: nanoid(),
    duration:'12/2024 (Contract)',
    company: "Menz Chocs",
    type: 'Casual',  // optional
    location:'Adelaide',
    decription:'Worked as a Casual Retail Assistant at Menz Chocs during the Christmas season, enhancd my communication, customer service, and collaboration skills in a fast-paced, multicultural environment. Gained experience in engaging with local customers and providing quality service.',
    url: '', // optional
    url_info: '', // optional
    keyword: 'skills', // optional
    words: ['Communication', 'Customer Service', 'Teamwork', 'Cross-Cultural Interaction'] // optional
  },
  {
    id: nanoid(),
    duration:'12/2024',
    company: "Amazon Web Services",
    type: '',  // optional
    location:'Adelaide',
    decription:'Earned the AWS Certified Cloud Practitioner certification, demonstrating cloud fluency and a strong foundation in AWS services. Gained the ability to identify and utilize key AWS solutions for cloud-based projects.',
    url: 'https://www.credly.com/badges/ca0e4316-5e61-4f63-b6f3-6e38cb661b64/public_url', // optional
    url_info: 'See Certificate', // optional
    keyword: 'skills', // optional
    words: ['Amazon Web Services', 'AWS Cloud', 'Cloud Computing', 'Cloud Infrastructure'] // optional
  },
  {
    id: nanoid(),
    duration:'08/2024 - 10/2024',
    company: 'UoA - MAPTEK',
    type: 'Group Project',  // optional
    location:'Adelaide',
    decription:'Collaborated with MAPTEK, a leading mining technology company, to develop an audio codec solution for underground mining communication systems using Python and digital signal processing libraries. Implemented a codec achieving over 95% compression and 65%+ fidelity, built a systematic testing framework for iterative development, and secured a Top 4 position in final evaluation.',
    url: 'https://github.com/RuxinMa/sep-codec', // optional
    url_info: 'See GitHub', // optional
    keyword: 'skills', // optional
    words: ['Python', 'Scrum', 'Teamwork', 'Client-focus','Testing', 'Agile', 'Time Management'] // optional
  },

  {
    id: nanoid(),
    duration:'08/2024 - 10/2024',
    company: 'Himalaya Peak',
    type: 'Internship',  // optional
    location:'Adelaide',
    decription:'Through the university career hub, I joined the team as a software developer intern, where I developed a responsive Linkworld website from scratch. I managed version control and code reviews using GitLab, coordinated agile tasks in Jira, encouraged team collaboration through regular project updates, and contributed to refining requirements and UI design.',
    url: 'https://drive.google.com/file/d/1Ft_BbVfS0kQP5GPwLX2e0rI3rpjZS7DK/view?usp=sharing', // optional
    url_info: 'See Certificate', // optional
    keyword: 'techs', // optional
    words: ['TypeScript', 'React', 'Tailwaind CSS', 'MySQL', 'Docker', 'Web Dev', 'Next.js'] // optional
  },

  {
    id: nanoid(),
    duration:'07/2024 - 09/2024',
    company: 'QuickSite Guru',
    type: 'Internship', // optional
    location:'Melbourne (Remote)',
    decription:'Worked as a React developer focused on component design and development, independently building the content section. Actively participated in weekly meetings, proficient in version control through GitHub, and contributed to and incorporated constructive feedback.',
    url: 'https://drive.google.com/file/d/1BfBieG-69Zz7Zy1ykOgbIQH4tSwr0RzT/view?usp=sharing', // optional
    url_info: 'See Certificate', // optional
    keyword: 'techs', // optional
    words: ['TypeScript', 'React', 'Tailwaind CSS', 'Github'] // optional
  },

  {
    id: nanoid(),
    duration:'04/2024 - Present',
    company: 'University of Adelaide',
    type: 'Volunteering', // optional
    location:'Adelaide',
    decription:'As an International Student Ambassador at UoA, I am proud and excited to assist future students from around the world. This role has provided numerous opportunities to engage with people from diverse cultural backgrounds and help with various activities, including campus tours and events.',
    url: 'https://future.ask.adelaide.edu.au/app/international_ambassadors', // optional
    url_info: 'See my profile on UoA website', // optional
    keyword: 'skills', // optional
    words: ['Communication', 'Customer Service', 'Relationship Building', 'Adaptability'] // optional
  },

  {
    id: nanoid(),
    duration:'01/2024 (1 week)',
    company: 'GitHub Users',
    type: 'Personal Project', // optional
    location:'Remote',
    decription:'Developed a dynamic and responsive website that allows users to search for GitHub profiles and view their data seamlessly. Focused on integrating secure authentication, dynamic routing, and data visualization.',
    url: 'https://github.com/RuxinMa/react-project-github-users', // optional
    url_info: 'See GitHub', // optional
    keyword: 'techs', // optional
    words: ['JavaScript', 'React', 'API Integration', 'Authentication', 'FusionCharts', 'Web Dev', 'Data Visualization'] // optional
  },

  {
    id: nanoid(),
    duration:'11/2023 - Present',
    company: 'Self-Directed Learning',
    type: '', // optional
    location:'Remote',
    decription:'During my first summer break in the master, I embarked on a journey to learn web development. I utilized online resources like AlgoExpert and engaged with AI tools to deepen my understanding. I still remember the excitement of creating my first HTML webpage and later building the initial version of my personal portfolio website (v1.0).',
    url: 'https://certificate.algoexpert.io/FE-97cfe6d473', // optional
    url_info: 'See Certificate', // optional
    keyword: 'skills', // optional
    words: ['Learning Ability', 'Time Management', 'Self-Motivation', 'HTML', 'CSS', 'JavaScript', 'React', 'Web Dev'] // optional
  },

  {
    id: nanoid(),
    duration:'07/2023 - Present',
    company: 'University of Adelaide',
    type: 'Master', // optional
    location:'Adelaide',
    decription:"As a Master's student in Computer Science, I have delved into the fundamentals of Python programming, algorithms and data structures, along with practical courses in areas like big data mining, project management, and software development. Currently, I have a GPA of 6.2/7 and am expected to graduate in July 2025.",
    url: 'https://drive.google.com/file/d/1qyoiOkKyYDI_pzXKXdu6mpitvAzwvvWr/view?usp=sharing', // optional
    url_info: 'See my transcript', // optional
    keyword: 'skills', // optional
    words: ['Python', 'Algorithm', 'Data Structure', 'Big Data', 'Project Management', 'Learning Ability',] // optional
  },

  {
    id: nanoid(),
    duration:'11/2020 - 06/2023',
    company: 'Baidu',
    type: 'Full-time', // optional
    location:'Beijing, China',
    decription:"As a Business Analyst at Baidu, China's leading AI company and search engine platform (often referred to as 'China's Google'), I optimized Top-One ranking search results, impacting millions of users and billions of page views daily. I led AI implementation, data analysis, and business intelligence efforts to enhance SEO performance and improve overall user experience.",
    url: 'https://en.wikipedia.org/wiki/Baidu', // optional
    url_info: 'See more about Baidu', // optional
    keyword: 'skills', // optional
    words: ['Data Analysis', 'Requirement Gathering', 'Communication', 'Collaboration', 'SEO', 'Project Management', 'Agile', 'A/B Test'] // optional
  },

  {
    id: nanoid(),
    duration:'09/2019 - 11/2020',
    company: 'RenRen',
    type: 'Full-time', // optional
    location:'Beijing, China',
    decription:"As a Product Manager at RenRen, China's leading social media application, I optimized both iOS and Android products, driving improvements in user engagement and functionality through effective product design, requirement gathering, and cross-team collaboration.",
    url: '', // optional
    url_info: '', // optional
    keyword: 'skills', // optional
    words: ['Product Design', 'Product Operations', 'Communication', 'Collaboration', 'Data Analysis', 'Mobile Applications'] // optional
  },

  {
    id: nanoid(),
    duration:'10/2018 - 01/2019',
    company: 'DiDi',
    type: 'Internship', // optional
    location:'Beijing, China',
    decription:'As a Product Operations Intern at DiDi, I managed data collection and analysis to optimize the operations of shared bicycles across cities. This experience was significant to me as it marked my first exposure to the IT industry, where I gained valuable insights into project lifecycle, team collaboration, and communication.',
    url: '', // optional
    url_info: '', // optional
    keyword: 'skills', // optional
    words: ['Communication', 'Product Operations','Collaboration', 'Data Analysis', 'Collaborative Problem Solving'] // optional
  },

  {
    id: nanoid(),
    duration:'09/2016 - 04/2019',
    company: 'North China Electric Power University',
    type: 'Master', // optional
    location:'Beijing, China',
    decription:'Majored in Electric and Communication Engineering, an IT-related program, where I gained knowledge in network technology, communication principles, and other related fields.',
    url: '', // optional
    url_info: '', // optional
    keyword: '', // optional
    words: [''] // optional
  },

  {
    id: nanoid(),
    duration:'09/2012 - 06/2016',
    company: 'North China Electric Power University',
    type: 'Bachelor', // optional
    location:'Beijing, China',
    decription:'Majored in Electric and Information Engineering, an IT-related program, where I studied C programming, probability theory, linear algebra, and other foundational subjects in engineering.',
    url: '', // optional
    url_info: '', // optional
    keyword: '', // optional
    words: [''] // optional
  },

]

export const skills = [
    { 
      id: nanoid(), 
      icon: <FaHtml5 />, 
      color: 'hover:text-orange-500',
      url: 'https://www.w3.org/html/' 
    },
    { 
      id: nanoid(), 
      icon: <FaCss3Alt />, 
      color: 'hover:text-blue-500',
      url: ''
    },
    { 
      id: nanoid(), 
      icon: <FaJs />, 
      color: 'hover:text-yellow-400' 
    },
    { 
      id: nanoid(), 
      icon: <FaReact />, 
      color: 'hover:text-cyan-400',
    },
    { 
      id: nanoid(), 
      icon: <FaPython />, 
      color: 'hover:text-blue-500' 
    },
    { 
      id: nanoid(), 
      icon: <SiTypescript />, 
      color: 'hover:text-sky-400' 
    },
    { 
      id: nanoid(), 
      icon: <FaDatabase />, 
      color: 'hover:text-blue-500' 
    },
    { 
      id: nanoid(), 
      icon: <IoTerminal />, 
      color: 'hover:text-orange-600' 
    },
    { 
      id: nanoid(), 
      icon: <FaProjectDiagram />, 
      color: 'hover:text-violet-500' 
    },
    { 
      id: nanoid(), 
      icon: <SiAmazonaws />, 
      color: 'hover:text-yellow-500' 
    },
    { 
      id: nanoid(), 
      icon: <SiTailwindcss />, 
      color: 'hover:text-teal-400' 
    },
    { 
      id: nanoid(), 
      icon: <SiMysql />, 
      color: 'hover:text-blue-500' 
    },
    { 
      id: nanoid(), 
      icon: <FaSketch />, 
      color: 'hover:text-amber-500' 
    },
  ];

export const projects = [
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
