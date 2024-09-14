import { GoArrowLeft } from 'react-icons/go';
import { NavLink } from 'react-router-dom';

const AuthLayouts = ({
  type,
  title,
  description,
  children,
  image,
  classname,
}) => {
  return (
    <section
      className={`h-screen w-full flex justify-center items-center ${classname}  `}
    >
      <div className='hidden md:block md:h-screen'>
        <img
          className=' w=full h-full'
          src={image}
          alt={`${title} background`}
        />
      </div>

      <div className='w-full px-5 mx-auto flex flex-col justify-center md:shadow-xl md:p-8 md:rounded-md md:w-[600px] md:px-10'>
        <h1 className='poppins-medium text-2xl my-2 md:text-3xl text-center'>
          {title}
        </h1>
        <p className='poppins-light text-xs text-center'>{description}</p>

        {children}

        <div className='text-sm mt-5 text-center flex flex-col gap-y-2'>
          <p>
            {type === 'register'
              ? 'Already have an account?'
              : `Don't have an account?`}{' '}
            {type === 'register' && (
              <NavLink
                to={'/login'}
                className='text-blue-600 underline underline-offset-4 hover:text-blue-800'
              >
                Sign in.
              </NavLink>
            )}
            {type === 'login' && (
              <NavLink
                to={'/register'}
                className='text-blue-600 underline underline-offset-4 hover:text-blue-800'
              >
                Register Now.
              </NavLink>
            )}
          </p>

          <div className='flex items-center justify-center hover:text-blue-700 mt-1 '>
            <GoArrowLeft />

            <NavLink to={'/'}>Back to home</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayouts;
