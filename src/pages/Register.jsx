import { NavLink } from 'react-router-dom';
import Button from '../components/Elements/Button/Button';
import bgRegister from '/image/bg-register.jpg';

import { GoArrowLeft } from 'react-icons/go';

const RegisterPage = () => {
  return (
    <section className='h-screen w-full flex justify-center items-center '>
      <div className='hidden md:block md:h-screen'>
        <img className=' w=full h-full' src={bgRegister} alt='' />
      </div>

      <div className='px-5 mx-auto flex flex-col justify-center md:shadow-xl md:p-8 md:rounded-md md:w-[600px] md:px-10'>
        <h1 className='poppins-medium text-2xl my-2 md:text-3xl'>Register</h1>
        <p className='poppins-light text-xs'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic tempore
          maxime at voluptate veniam provident laboriosam eos vel soluta atque.
        </p>

        <div className='flex flex-col mt-5 poppins-regular gap-y-2'>
          <label className='text-sm' htmlFor='name'>
            Full name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Enter your name'
            className='border outline-none  focus:border-blue-600 placeholder:text-sm text-sm text-slate-500 px-2 py-2'
          />
        </div>

        <div className='flex flex-col mt-5 poppins-regular gap-y-2'>
          <label className='text-sm' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='example@gmail.com'
            className='border outline-none  focus:border-blue-600 placeholder:text-sm text-sm text-slate-500 px-2 py-2'
          />
        </div>

        <div className='flex flex-col mt-5 poppins-regular gap-y-2'>
          <label className='text-sm' htmlFor='password'>
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='**********'
            className='border outline-none  focus:border-blue-600 placeholder:text-sm text-sm text-slate-500 px-2 py-2'
          />
        </div>

        <div className='flex flex-col mt-5 poppins-regular gap-y-2'>
          <label className='text-sm' htmlFor='confirm-password'>
            Confirm Password
          </label>
          <input
            id='confirm-password'
            type='password'
            placeholder='Confirm your password'
            className='border outline-none  focus:border-blue-600 placeholder:text-sm text-sm text-slate-500 px-2 py-2'
          />
        </div>

        <Button classname={'w-full mt-10 bg-blue-600 text-white'}>
          Sign Up
        </Button>

        <div className='text-sm mt-5 text-center flex flex-col gap-y-2'>
          <p>
            Already have an account?{' '}
            <NavLink className='text-blue-600 underline underline-offset-4 hover:text-blue-800'>
              Sign in.
            </NavLink>
          </p>

          <div className='flex items-center justify-center hover:text-blue-700 '>
            <GoArrowLeft />

            <NavLink to={'/'}>Back to home</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
