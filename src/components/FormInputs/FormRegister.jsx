import Button from '../Elements/Button/Button';
import InputForm from '../Elements/Input/Index';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext, useEffect } from 'react';
import { userContext } from '../../main';

const FormRegister = ({ setSuccessMessage }) => {
  const { user, setUser } = useContext(userContext);

  const schema = yup.object({
    fullname: yup.string().required('Harap isi nama lengkap!'),
    email: yup.string().email().required('Harap isi kolom email!'),
    password: yup
      .string()
      .min(4, 'Password tidak boleh kurang dari 4 karakter')
      .max(20, 'Password tidak boleh lebih dari 20 karakter')
      .required('Harap isi kolom password!'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Konfirmasi password tidak cocok!')
      .required('Harap isi kolom konfirmasi password!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setUser({
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    });

    setSuccessMessage('Selamat Kamu Berhasil Registrasi');
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        validation={{ ...register('fullname') }}
        id={'fullname'}
        name={'fullname'}
        placeholder={'Enter your fullname'}
        title={'Full Name'}
        type={'text'}
        key={'fullname'}
      />

      <p className='text-sm text-red-500 italic'>{errors.fullname?.message}</p>

      <InputForm
        validation={{ ...register('email') }}
        id={'email'}
        name={'email'}
        placeholder={'Enter your email address'}
        title={'Email'}
        type={'email'}
        key={'email'}
      />
      <p className='text-sm text-red-500 italic'>{errors.email?.message}</p>

      <InputForm
        validation={{ ...register('password') }}
        id={'password'}
        name={'password'}
        placeholder={'********'}
        title={'Password'}
        type={'password'}
        key={'password'}
      />
      <p className='text-sm text-red-500 italic'>{errors.password?.message}</p>

      <InputForm
        validation={{ ...register('confirmPassword') }}
        id={'confirmPassword'}
        name={'confirmPassword'}
        placeholder={'Enter your confirm password'}
        title={'Confirm Password'}
        type={'password'}
        key={'confirmPassword'}
      />
      <p className='text-sm text-red-500 italic'>
        {errors.confirmPassword?.message}
      </p>

      <Button type={'submit'} classname={'w-full mt-10 bg-blue-600 text-white'}>
        Sign Up
      </Button>
    </form>
  );
};

export default FormRegister;
