import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import Button from '../Elements/Button/Button';
import { Link, NavLink } from 'react-router-dom';
import { NavItem, NavItemPhone } from '../Elements/NavItem/NavItem';

export const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const toggleNavbar = () => {
    setIsOpenNav((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 760) {
        setIsOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
  }, [isOpenNav]);

  return (
    <nav className='w-full bg-whiteColor text-mainTextColor '>
      <div className='h-24 flex justify-between items-center px-4 mx-auto max-w-7xl relative '>
        <div className='text-3xl poppins-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-500'>
          <a href='#'>Murahin Aja</a>
        </div>

        <ul className='flex gap-x-4 text-lg max-md:hidden poppins-regular'>
          {/* {navLink.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.location}
                className={({ isActive }) =>
                  isActive
                    ? 'py-2 px-3 rounded-2xl transition duration-200 ease-in-out bg-blue-600 text-whiteColor'
                    : 'py-2 px-3 rounded-2xl transition duration-200 ease-in-out hover:bg-blue-600 hover:text-whiteColor'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))} */}

          <NavItem href={'#'}>Home</NavItem>
          <NavItem href={'#products'}>Products</NavItem>
          <NavItem href={'#aboutUs'}>About Us</NavItem>
        </ul>

        {/* Phone Device */}
        <ul
          className={`${
            isOpenNav ? 'translate-x-0 ' : 'translate-x-96'
          }  md:hidden bg-black flex flex-col transform transition duration-300 fixed top-0 right-0 text-center h-screen w-52  gap-y-6 text-xl pt-10 shadow-xl `}
        >
          <Button
            classname={'md:hidden text-2xl flex justify-center text-white'}
            onSelect={toggleNavbar}
          >
            <AiOutlineClose />
          </Button>

          {/* {navLink.map((item) => (
            <li key={item.name} className='w-full'>
              <NavLink
                to={item.location}
                className={({ isActive }) =>
                  isActive
                    ? ' bg-whiteColor text-black  poppins-regular  px-10 py-1 rounded-3xl transition duration-200 ease-in-out '
                    : 'hover:bg-whiteColor hover:text-black poppins-regular text-white px-10 py-1 rounded-3xl transition duration-200 ease-in-out'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))} */}

          <NavItemPhone href={'#'}>Home</NavItemPhone>
          <NavItemPhone href={'#products'}>Products</NavItemPhone>
          <NavItemPhone href={'#'}>About Us</NavItemPhone>

          <div className='flex flex-col gap-y-5 px-5 text-lg absolute bottom-24 w-full'>
            <Button classname={'  bg-blue-600 text-white hover:bg-blue-700'}>
              Login
            </Button>
            <Button classname={'text-black bg-whiteColor hover:bg-slate-200'}>
              Register
            </Button>
          </div>
        </ul>
        {/* End Phone Device */}

        {!isOpenNav && (
          <div className='flex gap-x-3 max-md:hidden text-white'>
            <Button classname={'bg-blue-600 hover:bg-blue-700'}>Login</Button>
            <Button classname={'bg-blue-600 hover:bg-blue-700'}>
              Register
            </Button>
          </div>
        )}

        {!isOpenNav && (
          <Button classname={'md:hidden text-2xl'} onSelect={toggleNavbar}>
            <FaBars />
          </Button>
        )}
      </div>
    </nav>
  );
};
