import Button from '../Elements/Button/Button';
import InputForm from '../Elements/Input/Index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginContext } from '../../main';

const FormLogin = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const schema = yup.object({
    email: yup
      .string()
      .email('Email tidak valid')
      .required('Email harus diisi'),
    password: yup
      .string()
      .min(4, 'Password minimal 4 karakter')
      .max(20, 'Password maksimal 20 karakter')
      .required('Password harus diisi'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (
        parsedUser.email === data.email &&
        parsedUser.password === data.password
      ) {
        localStorage.setItem('isLogin', 'true');
        navigate('/profile');
      } else {
        setErrorMessage('Email atau password salah');
      }
    } else {
      setErrorMessage('Pengguna belum terdaftar');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        validation={{ ...register('email') }}
        key={'email'}
        name={'email'}
        title={'Email'}
        id={'email'}
        type={'email'}
        placeholder={'Enter your email address'}
      />
      <p className='text-sm text-red-500 italic'>{errors.email?.message}</p>

      <InputForm
        validation={{ ...register('password') }}
        key={'password'}
        name={'password'}
        title={'Password'}
        id={'password'}
        type={'password'}
        placeholder={'********'}
      />
      <p className='text-sm text-red-500 italic'>{errors.password?.message}</p>

      {errorMessage && (
        <p className='text-sm text-red-500 italic'>{errorMessage}</p>
      )}

      <Button type={'submit'} classname={'w-full mt-10 bg-blue-600 text-white'}>
        Sign in
      </Button>
    </form>
  );
};

export default FormLogin;
