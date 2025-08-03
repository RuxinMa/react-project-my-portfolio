import { nanoid } from 'nanoid';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiRedux, SiAmazonaws, SiMysql, SiPostgresql, SiVite, SiNetlify, SiMongodb, SiExpress, SiJsonwebtokens, SiPostman, SiVercel, SiRailway, SiDocker } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const skills = [
  // Frontend Technologies
  { 
    id: nanoid(), 
    icon: <FaHtml5 />,
    name: 'HTML5', 
    color: 'hover:text-orange-500',
  },
  { 
    id: nanoid(), 
    icon: <FaCss3Alt />, 
    name: 'CSS3',
    color: 'hover:text-sky-600',
  },
  { 
    id: nanoid(), 
    icon: <FaJs />, 
    name: 'JavaScript',
    color: 'hover:text-yellow-400' 
  },
  { 
    id: nanoid(), 
    icon: <FaReact />, 
    name: 'React',
    color: 'hover:text-cyan-400',
  },
  { 
    id: nanoid(), 
    icon: <SiTypescript />,
    name: 'TypeScript',
    color: 'hover:text-sky-400' 
  },
  { 
    id: nanoid(), 
    icon: <SiNextdotjs />, 
    name: 'Next.js',
    color: 'hover:text-zinc-600' 
  },
  { 
    id: nanoid(), 
    icon: <SiRedux />, 
    name: 'Redux',
    color: 'hover:text-purple-500' 
  },
  { 
    id: nanoid(), 
    icon: <SiTailwindcss />,
    name: 'Tailwind CSS',
    color: 'hover:text-teal-400' 
  },

  // Backend Technologies
  { 
    id: nanoid(), 
    icon: <FaNode />, 
    name: 'Node.js',
    color: 'hover:text-green-500' 
  },
  { 
    id: nanoid(), 
    icon: <SiExpress />, 
    name: 'Express.js',
    color: 'hover:text-gray-600' 
  },
  { 
    id: nanoid(), 
    icon: <TbApi />, 
    name: 'REST API',
    color: 'hover:text-blue-500' 
  },
  { 
    id: nanoid(), 
    icon: <SiMongodb />, 
    name: 'MongoDB',
    color: 'hover:text-green-600' 
  },
  { 
    id: nanoid(), 
    icon: <FaPython />, 
    name: 'Python',
    color: 'hover:text-blue-500' 
  },
  { 
    id: nanoid(), 
    icon: <SiMysql />, 
    name: 'MySQL',
    color: 'hover:text-blue-500' 
  },
  { 
    id: nanoid(), 
    icon: <SiPostgresql />, 
    name: 'PostgreSQL',
    color: 'hover:text-blue-700' 
  },
    { 
    id: nanoid(), 
    icon: <SiJsonwebtokens />, 
    name: 'JWT',
    color: 'hover:text-purple-600' 
  },

  // Deployment and Tools
  { 
    id: nanoid(), 
    icon: <SiAmazonaws />, 
    name: 'AWS',
    color: 'hover:text-yellow-500' 
  },
    { 
    id: nanoid(), 
    icon: <FaGitAlt />, 
    name: 'Git',
    color: 'hover:text-orange-500' 
  },
  { 
    id: nanoid(), 
    icon: <SiVite />, 
    name: 'Vite',
    color: 'hover:text-purple-500' 
  },
  { 
    id: nanoid(), 
    icon: <SiNetlify />, 
    name: 'Netlify',
    color: 'hover:text-teal-400' 
  },
    { 
    id: nanoid(), 
    icon: <SiVercel />, 
    name: 'Vercel',
    color: 'hover:text-black' 
  },
  { 
    id: nanoid(), 
    icon: <SiRailway />, 
    name: 'Railway',
    color: 'hover:text-purple-600' 
  },
    { 
    id: nanoid(), 
    icon: <SiPostman />, 
    name: 'Postman',
    color: 'hover:text-orange-500' 
  },
    {
    id: nanoid(), 
    icon: <SiDocker />, 
    name: 'Docker',
    color: 'hover:text-blue-500'
  },
];