import React from 'react';
import Button from '../components/Elements/Button/Button';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-y-4'>
      <div>
        <h1>Halaman Profile Kamu</h1>
      </div>
      <NavLink to={'/login'}>
        <Button classname={'bg-blue-600 hover:bg-blue-700 text-white'}>
          Back To Home
        </Button>
      </NavLink>{' '}
    </div>
  );
};

export default ProfilePage;
