import Button from '../Elements/Button/Button';
import InputForm from '../Elements/Input/Index';

const FormRegister = () => {
  return (
    <form>
      <InputForm
        id={'fullname'}
        name={'fullname'}
        placeholder={'Enter your fullname'}
        title={'Full Name'}
        type={'text'}
        key={'fullname'}
      />

      <InputForm
        id={'email'}
        name={'email'}
        placeholder={'Enter your email address'}
        title={'Email'}
        type={'email'}
        key={'email'}
      />

      <InputForm
        id={'password'}
        name={'password'}
        placeholder={'********'}
        title={'Password'}
        type={'password'}
        key={'password'}
      />

      <InputForm
        id={'confirmPassword'}
        name={'confirmPassword'}
        placeholder={'Enter your confirm password'}
        title={'Confirm Password'}
        type={'password'}
        key={'confirmPassword'}
      />

      <Button classname={'w-full mt-10 bg-blue-600 text-white'}>Sign Up</Button>
    </form>
  );
};

export default FormRegister;
