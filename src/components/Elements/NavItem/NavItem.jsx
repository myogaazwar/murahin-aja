export const NavItem = ({ classname, href, children }) => {
  return (
    <li>
      <a
        href={href}
        className={`${classname} py-2 px-3 rounded-2xl transition duration-200 ease-in-out hover:bg-blue-600 hover:text-whiteColor`}
      >
        {children}
      </a>
    </li>
  );
};

export const NavItemPhone = ({ href, children }) => {
  return (
    <li className='w-full'>
      <a
        href={href}
        className={
          'hover:bg-whiteColor hover:text-black poppins-regular text-white px-10 py-1 rounded-3xl transition duration-200 ease-in-out'
        }
      >
        {children}
      </a>
    </li>
  );
};
