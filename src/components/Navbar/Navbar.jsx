import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import Button from '../Elements/Button/Button';
import { NavItem, NavItemPhone } from '../Elements/NavItem/NavItem';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
    <nav className='w-full fixed border-b-2 border-blue-200 bg-whiteColor text-mainTextColor transition duration-300 '>
      <div className='h-24 flex justify-between items-center px-4 mx-auto max-w-7xl relative '>
        <div className='text-3xl poppins-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-500'>
          <a href='#'>Murahin Aja</a>
        </div>

        <ul className='flex gap-x-4 text-lg max-md:hidden poppins-regular'>
          <NavItem to={'home'}>Home</NavItem>
          <NavItem to={'products'}>Products</NavItem>
          <NavItem to={'about-us'}>About Us</NavItem>
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

          <NavItemPhone to={'home'}>Home</NavItemPhone>
          <NavItemPhone to={'products'}>Products</NavItemPhone>
          <NavItemPhone to={'about-us'}>About Us</NavItemPhone>

          <div className='flex flex-col gap-y-5 px-5 text-lg absolute bottom-24 w-full'>
            <NavLink to={'/login'}>
              <Button
                classname={' w-full bg-blue-600 text-white hover:bg-blue-700'}
              >
                Login
              </Button>
            </NavLink>

            <NavLink to={'/register'}>
              <Button
                classname={'w-full text-black bg-whiteColor hover:bg-slate-200'}
              >
                Register
              </Button>
            </NavLink>
          </div>
        </ul>
        {/* End Phone Device */}

        {!isOpenNav && (
          <div className='flex gap-x-3 max-md:hidden text-white'>
            <NavLink to={'/login'}>
              <Button classname={'bg-blue-600 hover:bg-blue-700'}>Login</Button>
            </NavLink>
            <NavLink to={'/register'}>
              <Button classname={'bg-blue-600 hover:bg-blue-700'}>
                Register
              </Button>
            </NavLink>
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

export default Navbar;
