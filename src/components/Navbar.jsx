import { Link } from 'react-router-dom';
import { links } from '../data';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-[#161125] bg-opacity-70'>
      <div className='mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row lg:gap-x-32 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          <Link to="/">
            <span className='text-fuchsia-600'>Web</span>
            <span className='text-violet-100'>Dev</span>
          </Link>
        </h2>
        <div className='flex gap-x-8'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <Link 
                key={id}
                to={href}
                className='capitalize text-xl text-violet-50 font-semibold tracking-wide hover:text-indigo-400 hover:font-bold duration-300'
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