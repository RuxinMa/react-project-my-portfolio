import { nanoid } from 'nanoid';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../assets/images/avatar.png';

const links = [
  { id: nanoid(), href: '/', text: 'home' },
  { id: nanoid(), href: '/about', text: 'about' },
  { id: nanoid(), href: '/projects', text: 'projects' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-[#161125] bg-opacity-70'>
      <div className='mx-auto max-w-7xl px-8 py-4 flex lg:gap-x-40 items-center sm:py-5 sm:gap-x-16 gap-x-8 lg:justify-normal justify-center sm:ml-32'>
        <a 
          href="https://www.linkedin.com/in/ruxin-ma/" 
          target="_blank"  
          rel="noopener noreferrer"  
        >
          <img 
            src={avatar} 
            alt="Avatar" 
            className="sm:w-16 sm:h-16 w-12 h-12 object-cover rounded-full shadow-lg shadow-violet-500/50 hover:scale-110 transition-transform duration-300"
          />
        </a>
        <div className='flex sm:gap-x-20 gap-x-8'>
          {links.map((link) => {
            const { id, href, text } = link;
            const isActive = location.pathname === href;
            return (
              <Link 
                key={id}
                to={href}
                className={`
                  capitalize font-semibold tracking-wide duration-300 relative
                  ${isActive 
                    ? 'text-violet-400 text-base sm:text-xl font-bold' 
                    : 'text-violet-100 text-base sm:text-xl hover:text-violet-600 hover:font-bold'
                  }
                `}
              >
                {text}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;