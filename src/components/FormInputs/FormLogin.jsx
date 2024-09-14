import Button from '../Elements/Button/Button';
import InputForm from '../Elements/Input/Index';

const FormLogin = () => {
  return (
    <form>
      <InputForm
        key={'email'}
        name={'email'}
        title={'Email'}
        id={'email'}
        type={'email'}
        placeholder={'Enter your email address'}
      />

      <InputForm
        key={'password'}
        name={'password'}
        title={'Password'}
        id={'password'}
        type={'password'}
        placeholder={'********'}
      />

      <Button classname={'w-full mt-10 bg-blue-600 text-white'}>Sign in</Button>
    </form>
  );
};

export default FormLogin;
