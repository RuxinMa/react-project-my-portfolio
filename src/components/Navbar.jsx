import { Link } from 'react-router-dom';
import { links } from '../data';
import avatar from '../images/avatar.png';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-[#161125] bg-opacity-70'>
      <div className='mx-auto max-w-7xl px-8 py-4 flex lg:gap-x-40 items-center sm:py-5 sm:gap-x-16 gap-x-8 lg:justify-normal justify-center sm:ml-32'>
        {/* <h2 className='text-3xl font-bold'>
          <Link to="/">
            <span className='text-violet-500'>Web</span>
            <span className='text-violet-100'>Dev</span>
          </Link>
        </h2> */}
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
            return (
              <Link 
                key={id}
                to={href}
                className='capitalize text-base sm:text-xl text-violet-100 font-semibold tracking-wide hover:text-violet-300 hover:font-bold duration-300'
              >
                {text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;