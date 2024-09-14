import FormLogin from '../components/FormInputs/FormLogin';
import AuthLayouts from '../components/Layouts/AuthLayouts';

import bgLogin from '/image/bg-login.jpg';

const LoginPage = () => {
  return (
    <AuthLayouts
      type={'login'}
      title={'Login Page'}
      description={'Login now and enjoy for shopping!'}
      image={bgLogin}
      classname={'flex-row-reverse'}
    >
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
