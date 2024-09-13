import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const NavItem = ({ to, children }) => {
  return (
    <li>
      <ScrollLink
        to={to}
        smooth={true}
        duration={300}
        spy={true}
        offset={-100}
        activeClass='bg-blue-700 text-whiteColor'
        className={`cursor-pointer py-2 px-3 rounded-2xl transition duration-200 ease-in-out  hover:bg-blue-600 hover:text-whiteColor`}
      >
        {children}
      </ScrollLink>
    </li>
  );
};

export const NavItemPhone = ({ to, children }) => {
  return (
    <li className='w-full'>
      <ScrollLink
        to={to}
        smooth={true}
        duration={300}
        spy={true}
        offset={-80}
        activeClass='bg-blue-600'
        className={
          'cursor-pointer hover:bg-whiteColor hover:text-black poppins-regular text-white px-10 py-1 rounded-3xl transition duration-200 ease-in-out'
        }
      >
        {children}
      </ScrollLink>
    </li>
  );
};
